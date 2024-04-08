'use strict'

import '../index.html';
import '../scss/style.scss';
import {fetching} from "./useApi.js";
import {initLoadingAnim} from "./toolkit.js";

$(document).ready(function () {

    function parseCoordinates(text) {
        const coordinatesArray = [];
        const regex = /x=([\d.]+),y=([\d.]+)/g;
        let match;

        while ((match = regex.exec(text)) !== null) {
            const x = parseFloat(match[1]);
            const y = parseFloat(match[2]);
            coordinatesArray.push([x, y]);
        }

        return coordinatesArray;
    }

    const loadingAnim = initLoadingAnim();

    const submitBtn = $('.main__form-submit');

    let captchaImg, iconsImg;

    function uploadLabelReset(_this) {
        _this.parent().removeClass('active').find('input[type="file"]').val('');
        _this.siblings('.main__file-img').find('img').attr('src', '');
        _this.siblings('.main__file-name').html('');
        _this.siblings('.main__file-size').html('');
    }

    function formReset() {
        $('.main__upload-label input').each(function () {
            uploadLabelReset($(this));
        });
        $('.main__form-buttons').removeClass('active');
        $('.main__radio-label').removeClass('active').find('input').prop('checked', false);
        submitBtn.attr('disabled', 'disabled');
        $('.main__form-buttons .error-text').hide();
    }

    function resultView() {
        $('#resultContent').slideToggle(500, function () {
            $('.main__content').css('transform', `translateX(calc(-100% - 8rem))`);
            loadingAnim.stop(submitBtn);
        });
    }

    function newTest() {
        $('.main__content').removeAttr('style');
        $('#resultContent').slideToggle(500);
    }

    $(document).on('input', '.main__radio-buttons input[type="radio"]', function () {
        $(this).parent().addClass('active').siblings('*').removeClass('active');
    });

    $(document).on('input', '.main__upload-label input[type="file"]', function () {
        const _this = $(this);
        const file = _this[0].files[0];
        const reader = new FileReader();

        reader.onload = (function () {
            return function (e) {
                const temp = e.target.result;
                console.log(e);

                if (_this.attr('name') === 'captchaImg') {
                    captchaImg = temp.slice(temp.indexOf(',') + 1);
                    $('#resultFindImg').attr('src', temp);
                    $('#originalImg').attr('src', temp);
                } else if (_this.attr('name') === 'iconsImg') {
                    iconsImg = temp.slice(temp.indexOf(',') + 1);
                    $('#iconsImg').attr('src', temp);
                }

                _this.siblings('.main__file-img').find('img').attr('src', e.target.result);
            };
        })(file);
        reader.readAsDataURL(file);

        _this.parent().addClass('active');
        _this.siblings('.main__file-name').html(file.name);
        _this.siblings('.main__file-size').html(Math.ceil(file.size / 1000) + 'KB');
    });

    $(document).on('click', '.main__upload-label.active', e => e.preventDefault());

    $(document).on('click', '.main__file-clear', function () {
        $(this).parent().removeClass('active');
        uploadLabelReset($(this));
    });

    $(document).on('change', '.main__form', function () {
        let formIsReady = true;

        $(this).children('*:not(.main__form-buttons)').each(function () {
            const _this = $(this);

            if (_this.find('input[type="radio"]').length) {
                if (!_this.find('input:checked').length) {
                    formIsReady = false;
                }
            }
            if (_this.find('input[type="file"]').length) {
                if (!_this.find('input').val().length) {
                    formIsReady = false;
                }
            }
        });

        if (formIsReady) {
            submitBtn.removeAttr('disabled');
            $('.main__form-buttons').addClass('active');
        } else {
            submitBtn.attr('disabled', 'disabled');
            $('.main__form-buttons').removeClass('active')
        }
    });

    $(document).on('click', '.main__form-clear', formReset);

    function parametersReset() {
        $('.main__result-info li').hide();
    }

    function parametersShow(method, data) {
        $('#resultInfoParameter, #modeInfo').show().find('span').html(method === 'sobel' ? 'Удаления фона' : 'Модификация цвета');

        if (method === 'sobel') {
            $('#resultInfoAccuracy').show().find('span').html(data.filter.value);
        } else {
            $('#resultInfoTolerance').show().find('span').html(data.filter.tolerance);
            $('#resultInfoStep').show().find('span').html(data.filter.step);
            $('#resultInfoContour').show().find('span').html(data.filter.count_contour);
            $('#resultInfoBlur').show().find('span').html(data.filter.blur ? 'Да' : 'Нет');
        }
    }

    async function getResult(taskId) {
        let isHaveResult = false;
        while (!isHaveResult) {
            await fetching({
                method: 'POST',
                data: {id: taskId, url: 'https://api.capsola.cloud/result'},
            }, '/get-result', () => loadingAnim.stop(submitBtn)).then((resp) => {
                isHaveResult = true;
                $('#resultList').html('');
                const coordinates = parseCoordinates(resp.result.response);
                coordinates.map((item, i) => $('#resultList').append(`<li>${i + 1}: x:${item[0]} y:${item[1]}</li>`));
                const img = new Image();
                img.onload = () => {
                    const scale = $('#resultFindImg').width() / img.width;
                    $('.main__result-click').remove();
                    coordinates.map((item, i) => {
                        $('#resultImgBox').append(`<div class="main__result-click" style="top: ${item[1] * scale}px; left: ${item[0] * scale}px">${i + 1}</div>`)
                    });
                };
                img.src = $('#resultFindImg').attr('src');
                resultView();
            });
        }
    }

    $(document).on('submit', '.main__form', function (e) {
        e.preventDefault();

        const requestData = {
            type: 'SmartCaptcha',
            url: 'https://api.capsola.cloud/create',
            click: captchaImg,
            task: iconsImg,
        };

        loadingAnim.start(submitBtn);
        $('.main__form-buttons .error-text').hide();

        fetching({
            method: 'POST',
            data: requestData,
        }, '/send-request', () => loadingAnim.stop(submitBtn))
            .then((resp) => {
                getResult(resp.result.response);
            }).catch((err) => {
                $('.main__form-buttons .error-text').html(err.message).show();
                loadingAnim.stop(submitBtn);
            });
    });

    $(document).on('click', '.main__new-test-btn', newTest);

});