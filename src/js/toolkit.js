import loadingImg from "../img/loading.svg";

export const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

export function initLoadingAnim() {
    const img = new Image();
    img.src = loadingImg;
    img.className = 'isLoading__img';

    return {
        start: (item) => item.addClass('isLoading').append(img),
        stop: (item) => item.removeClass('isLoading').find('.isLoading__img').remove()
    }
}