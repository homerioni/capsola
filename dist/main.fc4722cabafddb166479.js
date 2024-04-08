/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/toolkit.js":
/*!***************************!*\
  !*** ./src/js/toolkit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initLoadingAnim: () => (/* binding */ initLoadingAnim),
/* harmony export */   rem: () => (/* binding */ rem)
/* harmony export */ });
/* harmony import */ var _img_loading_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/loading.svg */ "./src/img/loading.svg");

const rem = function (rem) {
  if ($(window).width() > 768) {
    return 0.005208335 * $(window).width() * rem;
  } else {
    return 100 / 375 * (0.1 * $(window).width()) * rem;
  }
};
function initLoadingAnim() {
  const img = new Image();
  img.src = _img_loading_svg__WEBPACK_IMPORTED_MODULE_0__;
  img.className = 'isLoading__img';
  return {
    start: item => item.addClass('isLoading').append(img),
    stop: item => item.removeClass('isLoading').find('.isLoading__img').remove()
  };
}

/***/ }),

/***/ "./src/js/useApi.js":
/*!**************************!*\
  !*** ./src/js/useApi.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetching: () => (/* binding */ fetching)
/* harmony export */ });
const fetching = async (settings, err) => {
  let resp = '';
  let headers = {
    'Content-Type': 'application/json',
    'X-API-Key': '062634cd-71ba-43be-aaf1-40ff40aace68'
  };
  try {
    const response = await fetch(settings.url, {
      crossDomain: true,
      method: settings.method || 'POST',
      body: settings.data && JSON.stringify(settings.data),
      headers: headers
    });
    resp = await response.json();
    if (!response.ok) {
      if (resp.error.description) {
        throw new Error(resp.error.description);
      } else {
        throw new Error(resp.error.message);
      }
    }
  } catch (e) {
    if (err) err();
    if (e.message === 'Failed to fetch') {
      throw new Error('Нет соединения с сервером');
    } else {
      throw new Error(e.message);
    }
  }
  return resp;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../font/stylesheet.css */ "./node_modules/css-loader/dist/cjs.js!./src/font/stylesheet.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bg.webp */ "./src/img/bg.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Circe";
  font-size: 0.5208335vw;
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  margin: 0;
  padding: 0;
}

body {
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: #393B44;
  background-color: #FFFFFF;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

input,
textarea {
  -webkit-animation: bugfix infinite 1s;
  line-height: inherit;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: inherit;
}

a {
  color: inherit;
}

a,
a:hover {
  -webkit-text-decoration: none;
  text-decoration: none;
}

button,
input,
a,
textarea {
  outline: none;
  cursor: pointer;
  font: inherit;
}
button:focus,
input:focus,
a:focus,
textarea:focus {
  outline: none;
}
button:active,
input:active,
a:active,
textarea:active {
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font: inherit;
  margin: 0;
  padding: 0;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

button {
  border: none;
  color: inherit;
  font: inherit;
  text-align: inherit;
  padding: 0;
  background-color: transparent;
}

ul {
  padding: 0;
  margin: 0;
}

ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  width: 141rem;
  margin: 0 auto;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

@media (max-width: 48em) {
  html {
    font-size: 4px;
  }
}
.mainBg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 12rem;
}

.isLoading {
  color: transparent !important;
}

.isLoading {
  position: relative;
}
.isLoading > *:not(.isLoading__img) {
  opacity: 0;
}
@keyframes isLoadingAnim {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.isLoading .isLoading__img {
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  max-width: 60%;
  max-height: 60%;
  transform: translate(-50%, -50%);
  -o-object-fit: contain;
     object-fit: contain;
  animation: 1s linear isLoadingAnim infinite;
}

.main {
  display: flex;
  align-items: center;
  gap: 8rem;
  width: 90rem;
  min-height: 80rem;
  padding: 6.6rem 4rem;
  border: 1px solid white;
  border-radius: 5rem;
  background: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(10rem);
          backdrop-filter: blur(10rem);
  overflow: hidden;
}
.main__content {
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: transform 0.4s ease;
}
.main__title-box {
  margin-bottom: 6rem;
  text-align: center;
}
.main__title {
  font-weight: 700;
  font-size: 4rem;
}
.main__sub-title {
  font-weight: 700;
  font-size: 1.8rem;
}
.main__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 54rem;
}
.main__radio-buttons {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
}
.main__radio-label {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  height: 6rem;
  padding: 0 2rem;
  border-radius: 100rem;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}
.main__radio-label > input {
  display: none;
}
.main__radio-label.active .main__radio-icon:before {
  content: "";
  background-color: #87D449;
}
.main__radio-icon {
  flex: none;
  position: relative;
  display: block;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 100%;
  background-color: white;
  box-shadow: 0.2rem 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.2);
}
.main__radio-icon:before {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  background-color: #A1B1C5;
}
.main__radio-text {
  font-weight: 700;
  font-size: 1.8rem;
}
.main__upload-label {
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding: 0.7rem;
  border-radius: 100rem;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}
.main__upload-label > input {
  display: none;
}
.main__upload-label:not(.active) .uploadReady {
  display: none;
}
.main__upload-label.active .uploadEmpty {
  display: none;
}
.main__upload-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.6rem;
  height: 4.6rem;
  padding: 1rem;
  margin-right: 2rem;
  border-radius: 100%;
  background-color: #87D449;
}
.main__upload-icon > svg {
  width: 100%;
  height: 100%;
}
.main__upload-text {
  font-weight: 700;
  font-size: 1.8rem;
}
.main__file-img {
  display: block;
  width: 8rem;
  height: 100%;
  border: 1px solid white;
  border-radius: 1.3rem;
  box-shadow: 0.5rem 0.4rem 1.8rem 0 rgba(32, 43, 100, 0.2);
}
.main__file-img > img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  -o-object-fit: cover;
     object-fit: cover;
}
.main__file-name {
  margin-left: 1rem;
  font-weight: 700;
  font-size: 1.8rem;
}
.main__file-size {
  margin-left: 0.5rem;
  transform: translateY(1px);
  font-weight: 700;
  font-size: 1.6rem;
  color: #8998AB;
}
.main__file-clear {
  position: relative;
  width: 4.6rem;
  height: 4.6rem;
  margin-left: auto;
  border: 1px solid #EEEFF5;
  border-radius: 100%;
  background-color: white;
  transition: box-shadow 0.2s ease;
}
.main__file-clear:hover {
  box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.2) inset;
}
.main__file-clear:before, .main__file-clear:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  width: 1.8rem;
  height: 0.1rem;
  transform: translate(-50%, -50%) rotate(-45deg);
  min-height: 1px;
  background-color: #393B44;
}
.main__file-clear:after {
  transform: translate(-50%, -50%) rotate(45deg);
}
.main__form-buttons {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
}
.main__form-buttons:not(.active) .main__form-clear {
  display: none;
}
.main__form-buttons:not(.active) .main__form-submit {
  background-color: white;
  color: #8998AB;
  cursor: default;
}
.main__form-buttons:not(.active) .main__form-submit .icon-active {
  display: none;
}
.main__form-buttons.active .main__form-submit {
  transition: box-shadow 0.2s ease;
}
.main__form-buttons.active .main__form-submit:hover {
  box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.2) inset;
}
.main__form-buttons.active .main__form-submit .icon-disable {
  display: none;
}
.main__form-buttons .error-text {
  display: none;
  position: absolute;
  left: 50%;
  top: 100%;
  width: 30rem;
  margin-top: 0.4rem;
  transform: translateX(-50%);
  font-size: 1.8rem;
  text-align: center;
  color: red;
}
.main__form-submit {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 3rem 0.5rem 0.7rem;
  border-radius: 100rem;
  background-color: #8B98EE;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: white;
}
.main__form-submit > svg {
  width: 4.6rem;
  height: 4.6rem;
}
.main__form-clear {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem 3rem 0.5rem 0.7rem;
  border-radius: 100rem;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  transition: box-shadow 0.2s ease;
}
.main__form-clear:hover {
  box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.2) inset;
}
.main__form-clear > svg {
  width: 4.6rem;
  height: 4.6rem;
}
.main__results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  -moz-column-gap: 2rem;
       column-gap: 2rem;
  row-gap: 4rem;
}
.main__result-item {
  flex: 40%;
  max-width: 39.9rem;
}
.main__result-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 auto 1.5rem auto;
}
.main__result-item-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-color: white;
  font-weight: 700;
  font-size: 1.8rem;
}
.main__result-item-name {
  font-weight: 700;
  font-size: 1.8rem;
}
.main__result-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.main__result-img {
  position: relative;
  width: 100%;
  height: auto;
  border: 1px solid white;
  border-radius: 2rem;
  box-shadow: 1rem 1.5rem 5rem 0 rgba(32, 43, 100, 0.2);
}
.main__result-img > img {
  width: 100%;
  border-radius: inherit;
  -o-object-fit: contain;
     object-fit: contain;
}
.main__result-click {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 2px solid black;
  transform: translate(-50%, -50%);
  background-color: red;
  font-size: 2rem;
  color: white;
}
.main__result-icons {
  width: 100%;
  padding: 1.6rem 7rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.8);
}
.main__result-icons > img {
  width: 100%;
  border-radius: inherit;
  -o-object-fit: contain;
     object-fit: contain;
}
.main__result-info {
  padding: 1.4rem 2rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
}
.main__result-info > li {
  margin-bottom: 0.4rem;
}
.main__new-test-btn {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 3rem 0.5rem 0.7rem;
  margin-top: 6rem;
  border-radius: 100rem;
  background-color: #87D449;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: white;
  transition: box-shadow 0.2s ease;
}
.main__new-test-btn:hover {
  box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.2) inset;
}
.main__new-test-btn > svg {
  width: 4.6rem;
  height: 4.6rem;
}

body.lock {
  overflow: hidden;
}

@media (min-width: 48.01em) {
  .mobile {
    display: none;
  }
}
@media (max-width: 48em) {
  .desktop {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/_set.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_ui.scss","webpack://./src/scss/_main.scss"],"names":[],"mappings":"AAAA;;;EAGI,sBAAA;ACEJ;;ADAA;EACI,oBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,SAAA;EACA,UAAA;ACGJ;;ADAA;EACI,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,yBAAA;EACA,yDAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;ACGJ;;ADAA;;EAEI,qCAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;EACA,6BAAA;EACA,YAAA;EACA,cAAA;ACGJ;;ADDA;EACI,cAAA;ACIJ;;ADFA;;EAEI,6BAAA;EAAA,qBAAA;ACKJ;;ADFA;;;;EAII,aAAA;EACA,eAAA;EACA,aAAA;ACKJ;ADJI;;;;EACI,aAAA;ACSR;ADPI;;;;EACI,aAAA;ACYR;;ADRA;;;;;;EAMI,aAAA;EACA,SAAA;EACA,UAAA;ACWJ;;ADTA;EACI,aAAA;EACA,gBAAA;ACYJ;;ADTA;EACI,WAAA;EACA,YAAA;EACA,cAAA;ACYJ;;ADTA;EACI,YAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,6BAAA;ACYJ;;ADVA;EACI,UAAA;EACA,SAAA;ACaJ;;ADVA;EACI,SAAA;EACA,UAAA;EACA,gBAAA;ACaJ;;ADVA;EACI,aAAA;EACA,cAAA;ACaJ;;ADVA;;EAEI,wBAAA;EACA,SAAA;ACaJ;;ADVA;EACI,0BAAA;ACaJ;;ADVA;EACI;IACI,cAAA;ECaN;AACF;AC9HA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,iBAAA;EACA,cAAA;ADgIF;;AC7HA;EAEE,6BAAA;ADgIF;;AClIA;EACE,kBAAA;ADiIF;AC9HE;EACE,UAAA;ADgIJ;AC7HE;EACE;IACE,6CAAA;ED+HJ;EC7HE;IACE,+CAAA;ED+HJ;AACF;AC5HE;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,cAAA;EACA,cAAA;EACA,eAAA;EACA,gCAAA;EACA,sBAAA;KAAA,mBAAA;EACA,2CAAA;AD8HJ;;AEzKA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,oCAAA;UAAA,4BAAA;EACA,gBAAA;AF4KF;AE1KE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,+BAAA;AF4KJ;AEzKE;EACE,mBAAA;EACA,kBAAA;AF2KJ;AExKE;EACE,gBAAA;EACA,eAAA;AF0KJ;AEvKE;EACE,gBAAA;EACA,iBAAA;AFyKJ;AEtKE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,YAAA;AFwKJ;AErKE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;AFuKJ;AEpKE;EACE,OAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,0CAAA;EACA,eAAA;AFsKJ;AEpKI;EACE,aAAA;AFsKN;AEjKQ;EACE,WAAA;EACA,yBAAA;AFmKV;AE7JE;EACE,UAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,uBAAA;EACA,qDAAA;AF+JJ;AE7JI;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,gCAAA;EACA,yBAAA;AF+JN;AE3JE;EACE,gBAAA;EACA,iBAAA;AF6JJ;AE1JE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,0CAAA;EACA,eAAA;AF4JJ;AE1JI;EACE,aAAA;AF4JN;AExJM;EACE,aAAA;AF0JR;AErJM;EACE,aAAA;AFuJR;AElJE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBAAA;AFoJJ;AElJI;EACE,WAAA;EACA,YAAA;AFoJN;AEhJE;EACE,gBAAA;EACA,iBAAA;AFkJJ;AE/IE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,qBAAA;EACA,yDAAA;AFiJJ;AE/II;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,oBAAA;KAAA,iBAAA;AFiJN;AE7IE;EACE,iBAAA;EACA,gBAAA;EACA,iBAAA;AF+IJ;AE5IE;EACE,mBAAA;EACA,0BAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;AF8IJ;AE3IE;EACE,kBAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;EACA,uBAAA;ED7LF,gCAAA;AD2UF;ACzUE;EACE,iDAAA;AD2UJ;AE9II;EAEE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,cAAA;EACA,aAAA;EACA,cAAA;EACA,+CAAA;EACA,eAAA;EACA,yBAAA;AF+IN;AE5II;EACE,8CAAA;AF8IN;AE1IE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;AF4IJ;AEzIM;EACE,aAAA;AF2IR;AExIM;EACE,uBAAA;EACA,cAAA;EACA,eAAA;AF0IR;AExIQ;EACE,aAAA;AF0IV;AEpIM;ED3OJ,gCAAA;ADkXF;AChXE;EACE,iDAAA;ADkXJ;AEvIQ;EACE,aAAA;AFyIV;AEpII;EACE,aAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,2BAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AFsIN;AElIE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,kCAAA;EACA,qBAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;EACA,YAAA;AFoIJ;AElII;EACE,aAAA;EACA,cAAA;AFoIN;AEhIE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,kCAAA;EACA,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;ED9RF,gCAAA;ADiaF;AC/ZE;EACE,iDAAA;ADiaJ;AEnII;EACE,aAAA;EACA,cAAA;AFqIN;AEjIE;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,qBAAA;OAAA,gBAAA;EACA,aAAA;AFmIJ;AEhIE;EACE,SAAA;EACA,kBAAA;AFkIJ;AE/HE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,uBAAA;EAAA,kBAAA;EACA,0BAAA;AFiIJ;AE9HE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,iBAAA;AFgIJ;AE7HE;EACE,gBAAA;EACA,iBAAA;AF+HJ;AE5HE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AF8HJ;AE3HE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,qDAAA;AF6HJ;AE3HI;EACE,WAAA;EACA,sBAAA;EACA,sBAAA;KAAA,mBAAA;AF6HN;AEzHE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,gCAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;AF2HJ;AExHE;EACE,WAAA;EACA,oBAAA;EACA,mBAAA;EACA,oCAAA;AF0HJ;AExHI;EACE,WAAA;EACA,sBAAA;EACA,sBAAA;KAAA,mBAAA;AF0HN;AEtHE;EACE,oBAAA;EACA,mBAAA;EACA,oCAAA;EACA,iBAAA;AFwHJ;AEtHI;EACE,qBAAA;AFwHN;AEpHE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,kCAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;EACA,YAAA;EDrZF,gCAAA;AD4gBF;AC1gBE;EACE,iDAAA;AD4gBJ;AEvHI;EACE,aAAA;EACA,cAAA;AFyHN;;AA5gBA;EACE,gBAAA;AA+gBF;;AA5gBA;EACE;IACE,aAAA;EA+gBF;AACF;AA5gBA;EACE;IACE,aAAA;EA8gBF;AACF","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\nhtml {\r\n    font-family: 'Circe'; // шрифт по умолчанию по сайту\r\n    font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    -webkit-animation: bugfix infinite 1s;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    -webkit-animation: bugfix infinite 1s;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #393B44; // цвет по умолчанию текста по сайту\r\n    background-color: #FFFFFF;\r\n    background-image: url(\"../img/bg.webp\");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n    -webkit-animation: bugfix infinite 1s;\r\n    line-height: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    border: none;\r\n    color: inherit;\r\n}\r\na {\r\n    color: unset;\r\n}\r\na,\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton,\r\ninput,\r\na,\r\ntextarea {\r\n    outline: none;\r\n    cursor: pointer;\r\n    font: inherit;\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n    &:active {\r\n        outline: none;\r\n    }\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    font: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    height: auto;\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    color: inherit;\r\n    font: inherit;\r\n    text-align: inherit;\r\n    padding: 0;\r\n    background-color: transparent;\r\n}\r\nul {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nul li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.container {\r\n    width: 141rem;\r\n    margin: 0 auto;\r\n}\r\n\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\ninput[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n@media (max-width: 48em) {\r\n    html {\r\n        font-size: 4px;\r\n    }\r\n}\r\n","@import \"../font/stylesheet.css\";\n@import \"set\";\n\n@import \"ui\";\n@import \"main\";\n\n\n\nbody.lock {\n  overflow: hidden;\n}\n\n@media (min-width: 48.01em) {\n  .mobile {\n    display: none;\n  }\n}\n\n@media (max-width: 48em) {\n  .desktop {\n    display: none;\n  }\n}","@mixin btn-hover {\n  transition: box-shadow .2s ease;\n\n  &:hover {\n    box-shadow: 0 0 1rem 1px rgba(0,0,0,0.2) inset;\n  }\n}\n\n.mainBg {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 100vh;\n  padding: 12rem;\n}\n\n.isLoading {\n  position: relative;\n  color: transparent !important;\n\n  > *:not(.isLoading__img) {\n    opacity: 0;\n  }\n\n  @keyframes isLoadingAnim {\n    from {\n      transform: translate(-50%, -50%) rotate(0deg);\n    }\n    to {\n      transform: translate(-50%, -50%) rotate(360deg);\n    }\n  }\n\n  .isLoading__img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    display: block;\n    max-width: 60%;\n    max-height: 60%;\n    transform: translate(-50%, -50%);\n    object-fit: contain;\n    animation: 1s linear isLoadingAnim infinite;\n  }\n}",".main {\n  display: flex;\n  align-items: center;\n  gap: 8rem;\n  width: 90rem;\n  min-height: 80rem;\n  padding: 6.6rem 4rem;\n  border: 1px solid white;\n  border-radius: 5rem;\n  background: rgba(255, 255, 255, 0.40);\n  backdrop-filter: blur(10rem);\n  overflow: hidden;\n\n  &__content {\n    flex: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    transition: transform .4s ease;\n  }\n\n  &__title-box {\n    margin-bottom: 6rem;\n    text-align: center;\n  }\n\n  &__title {\n    font-weight: 700;\n    font-size: 4rem;\n  }\n\n  &__sub-title {\n    font-weight: 700;\n    font-size: 1.8rem;\n  }\n\n  &__form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    width: 54rem;\n  }\n\n  &__radio-buttons {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    width: 100%;\n  }\n\n  &__radio-label {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 1.2rem;\n    height: 6rem;\n    padding: 0 2rem;\n    border-radius: 100rem;\n    background-color: rgba(255, 255, 255, 0.8);\n    cursor: pointer;\n\n    > input {\n      display: none;\n    }\n\n    &.active {\n      .main__radio-icon {\n        &:before {\n          content: '';\n          background-color: #87D449;\n        }\n      }\n    }\n  }\n\n  &__radio-icon {\n    flex: none;\n    position: relative;\n    display: block;\n    width: 1.8rem;\n    height: 1.8rem;\n    border-radius: 100%;\n    background-color: white;\n    box-shadow: .2rem .2rem 1.2rem 0 rgba(0, 0, 0, .2);\n\n    &:before {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: .8rem;\n      height: .8rem;\n      border-radius: 100%;\n      transform: translate(-50%, -50%);\n      background-color: #A1B1C5;\n    }\n  }\n\n  &__radio-text {\n    font-weight: 700;\n    font-size: 1.8rem;\n  }\n\n  &__upload-label {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 6rem;\n    padding: .7rem;\n    border-radius: 100rem;\n    background-color: rgba(255, 255, 255, 0.8);\n    cursor: pointer;\n\n    > input {\n      display: none;\n    }\n\n    &:not(.active) {\n      .uploadReady {\n        display: none;\n      }\n    }\n\n    &.active {\n      .uploadEmpty {\n        display: none;\n      }\n    }\n  }\n\n  &__upload-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 4.6rem;\n    height: 4.6rem;\n    padding: 1rem;\n    margin-right: 2rem;\n    border-radius: 100%;\n    background-color: #87D449;\n\n    > svg {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  &__upload-text {\n    font-weight: 700;\n    font-size: 1.8rem;\n  }\n\n  &__file-img {\n    display: block;\n    width: 8rem;\n    height: 100%;\n    border: 1px solid white;\n    border-radius: 1.3rem;\n    box-shadow: .5rem .4rem 1.8rem 0 rgba(32, 43, 100, 0.20);\n\n    > img {\n      width: 100%;\n      height: 100%;\n      border-radius: inherit;\n      object-fit: cover;\n    }\n  }\n\n  &__file-name {\n    margin-left: 1rem;\n    font-weight: 700;\n    font-size: 1.8rem;\n  }\n\n  &__file-size {\n    margin-left: .5rem;\n    transform: translateY(1px);\n    font-weight: 700;\n    font-size: 1.6rem;\n    color: #8998AB;\n  }\n\n  &__file-clear {\n    position: relative;\n    width: 4.6rem;\n    height: 4.6rem;\n    margin-left: auto;\n    border: 1px solid #EEEFF5;\n    border-radius: 100%;\n    background-color: white;\n    @include btn-hover;\n\n    &:before,\n    &:after {\n      content: '';\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      display: block;\n      width: 1.8rem;\n      height: .1rem;\n      transform: translate(-50%, -50%) rotate(-45deg);\n      min-height: 1px;\n      background-color: #393B44;\n    }\n\n    &:after {\n      transform: translate(-50%, -50%) rotate(45deg);\n    }\n  }\n\n  &__form-buttons {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 5rem;\n\n    &:not(.active) {\n      .main__form-clear {\n        display: none;\n      }\n\n      .main__form-submit {\n        background-color: white;\n        color: #8998AB;\n        cursor: default;\n\n        .icon-active {\n          display: none;\n        }\n      }\n    }\n\n    &.active {\n      .main__form-submit {\n        @include btn-hover;\n\n        .icon-disable {\n          display: none;\n        }\n      }\n    }\n\n    .error-text {\n      display: none;\n      position: absolute;\n      left: 50%;\n      top: 100%;\n      width: 30rem;\n      margin-top: .4rem;\n      transform: translateX(-50%);\n      font-size: 1.8rem;\n      text-align: center;\n      color: red;\n    }\n  }\n\n  &__form-submit {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    padding: .5rem 3rem .5rem .7rem;\n    border-radius: 100rem;\n    background-color: #8B98EE;\n    font-weight: 800;\n    font-size: 1.4rem;\n    letter-spacing: .1rem;\n    text-transform: uppercase;\n    color: white;\n\n    > svg {\n      width: 4.6rem;\n      height: 4.6rem;\n    }\n  }\n\n  &__form-clear {\n    display: flex;\n    align-items: center;\n    gap: 1.5rem;\n    padding: .5rem 3rem .5rem .7rem;\n    border-radius: 100rem;\n    font-weight: 800;\n    font-size: 1.4rem;\n    letter-spacing: .1rem;\n    text-transform: uppercase;\n    @include btn-hover;\n\n    > svg {\n      width: 4.6rem;\n      height: 4.6rem;\n    }\n  }\n\n  &__results {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    column-gap: 2rem;\n    row-gap: 4rem;\n  }\n\n  &__result-item {\n    flex: 40%;\n    max-width: 39.9rem;\n  }\n\n  &__result-title {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    width: fit-content;\n    margin: 0 auto 1.5rem auto;\n  }\n\n  &__result-item-number {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100%;\n    background-color: white;\n    font-weight: 700;\n    font-size: 1.8rem;\n  }\n\n  &__result-item-name {\n    font-weight: 700;\n    font-size: 1.8rem;\n  }\n\n  &__result-content {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n\n  &__result-img {\n    position: relative;\n    width: 100%;\n    height: auto;\n    border: 1px solid white;\n    border-radius: 2rem;\n    box-shadow: 1rem 1.5rem 5rem 0 rgba(32, 43, 100, 0.20);\n\n    > img {\n      width: 100%;\n      border-radius: inherit;\n      object-fit: contain;\n    }\n  }\n\n  &__result-click {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 100%;\n    border: 2px solid black;\n    transform: translate(-50%, -50%);\n    background-color: red;\n    font-size: 2rem;\n    color: white;\n  }\n\n  &__result-icons {\n    width: 100%;\n    padding: 1.6rem 7rem;\n    border-radius: 2rem;\n    background: rgba(255, 255, 255, 0.80);\n\n    > img {\n      width: 100%;\n      border-radius: inherit;\n      object-fit: contain;\n    }\n  }\n\n  &__result-info {\n    padding: 1.4rem 2rem;\n    border-radius: 2rem;\n    background: rgba(255, 255, 255, 0.80);\n    font-size: 1.5rem;\n\n    > li {\n      margin-bottom: .4rem;\n    }\n  }\n\n  &__new-test-btn {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    padding: .5rem 3rem .5rem .7rem;\n    margin-top: 6rem;\n    border-radius: 100rem;\n    background-color: #87D449;\n    font-weight: 800;\n    font-size: 1.4rem;\n    letter-spacing: .1rem;\n    text-transform: uppercase;\n    color: white;\n    @include btn-hover;\n\n    > svg {\n      width: 4.6rem;\n      height: 4.6rem;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/font/stylesheet.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/font/stylesheet.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Circe-Regular.woff2 */ "./src/font/Circe-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Circe-Regular.woff */ "./src/font/Circe-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! Circe-Bold.woff2 */ "./src/font/Circe-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! Circe-Bold.woff */ "./src/font/Circe-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Circe';
    src: local('Circe'), local('Circe-Regular'),
        url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Circe';
    src: local('Circe Bold'), local('Circe-Bold'),
        url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff');
    font-weight: bold;
    font-style: normal;
}

`, "",{"version":3,"sources":["webpack://./src/font/stylesheet.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB;;8DAE4C;IAC5C,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB;;8DAEyC;IACzC,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: 'Circe';\n    src: local('Circe'), local('Circe-Regular'),\n        url('Circe-Regular.woff2') format('woff2'),\n        url('Circe-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Circe';\n    src: local('Circe Bold'), local('Circe-Bold'),\n        url('Circe-Bold.woff2') format('woff2'),\n        url('Circe-Bold.woff') format('woff');\n    font-weight: bold;\n    font-style: normal;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./js/jquery-3.6.0.min.js */ "./src/js/jquery-3.6.0.min.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img3.webp */ "./src/img/img3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img1.webp */ "./src/img/img1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img4.png */ "./src/img/img4.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"another website\">\n    <title>Страница</title>\n\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"><" + "/script>\n</head>\n<body>\n\n\n<main class=\"mainBg\">\n    <section class=\"main\">\n        <div class=\"main__content\">\n            <div class=\"main__title-box\">\n                <p class=\"main__title\">Решение антикаптчи</p>\n            </div>\n            <form class=\"main__form\">\n                <label class=\"main__upload-label\">\n                    <input type=\"file\" name=\"captchaImg\">\n                    <span class=\"main__upload-icon\">\n                        <svg><use xlink:href=\"#upload\"></use></svg>\n                    </span>\n                    <span class=\"main__upload-text uploadEmpty\">Загрузить капчу</span>\n                    <span class=\"main__file-img uploadReady\"><img alt=\"\"></span>\n                    <span class=\"main__file-name uploadReady\"></span>\n                    <span class=\"main__file-size uploadReady\"></span>\n                    <button type=\"button\" class=\"main__file-clear uploadReady\"></button>\n                </label>\n                <label class=\"main__upload-label\">\n                    <input type=\"file\" name=\"iconsImg\">\n                    <span class=\"main__upload-icon\">\n                        <svg><use xlink:href=\"#upload\"></use></svg>\n                    </span>\n                    <span class=\"main__upload-text uploadEmpty\">Загрузить иконки</span>\n                    <span class=\"main__file-img uploadReady\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"></span>\n                    <span class=\"main__file-name uploadReady\">Icons.png</span>\n                    <span class=\"main__file-size uploadReady\">23KB</span>\n                    <button type=\"button\" class=\"main__file-clear uploadReady\"></button>\n                </label>\n                <div class=\"main__form-buttons\">\n                    <button type=\"submit\" class=\"main__form-submit\" disabled>\n                        <svg class=\"icon-active\"><use xlink:href=\"#submit\"></use></svg>\n                        <svg class=\"icon-disable\"><use xlink:href=\"#submitDisable\"></use></svg>\n                        <span>распознать</span>\n                    </button>\n                    <button type=\"button\" class=\"main__form-clear\">\n                        <svg><use xlink:href=\"#reset\"></use></svg>\n                        <span>Очистить</span>\n                    </button>\n                    <span class=\"error-text\"></span>\n                </div>\n            </form>\n        </div>\n        <div id=\"resultContent\" class=\"main__content\" style=\"display: none\">\n            <div class=\"main__title-box\">\n                <p class=\"main__title\">Результат решения</p>\n            </div>\n            <div class=\"main__results\">\n                <div class=\"main__result-item\">\n                    <div class=\"main__result-title\">\n                        <span class=\"main__result-item-number\">1</span>\n                        <span class=\"main__result-item-name\">Оригинал</span>\n                    </div>\n                    <div class=\"main__result-content\">\n                        <div class=\"main__result-img\">\n                            <img id=\"originalImg\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"main__result-item\">\n                    <div class=\"main__result-title\">\n                        <span class=\"main__result-item-number\">2</span>\n                        <span class=\"main__result-item-name\">Найденные области</span>\n                    </div>\n                    <div class=\"main__result-content\">\n                        <div class=\"main__result-img\" id=\"resultImgBox\">\n                            <img id=\"resultFindImg\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"main__result-item\">\n                    <div class=\"main__result-title\">\n                        <span class=\"main__result-item-number\">3</span>\n                        <span class=\"main__result-item-name\">Иконки</span>\n                    </div>\n                    <div class=\"main__result-content\">\n                        <div class=\"main__result-icons\">\n                            <img id=\"iconsImg\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                        </div>\n                        <ul class=\"main__result-info\" id=\"resultList\">\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <button type=\"button\" class=\"main__new-test-btn\">\n                <svg><use xlink:href=\"#resetGreen\"></use></svg>\n                <span>Новый тест</span>\n            </button>\n        </div>\n    </section>\n</main>\n\n\n<svg style=\"display: none\">\n    <symbol id=\"upload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M9.3197 6.49994L11.8797 3.93994L14.4397 6.49994\" stroke=\"white\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M11.8798 14.18V4.01001\" stroke=\"white\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M3.99976 12C3.99976 16.42 6.99976 20 11.9998 20C16.9998 20 19.9998 16.42 19.9998 12\" stroke=\"white\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </symbol>\n    <symbol id=\"submit\" viewBox=\"0 0 47 47\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect width=\"47\" height=\"47\" rx=\"23.5\" fill=\"#ADB8FF\" fill-opacity=\"0.4\"/>\n        <rect x=\"6\" y=\"6\" width=\"35\" height=\"35\" rx=\"17.5\" fill=\"#ADB8FF\"/>\n        <path d=\"M29.9167 19.0002L20.75 28.1761L18 25.4261\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </symbol>\n    <symbol id=\"reset\" viewBox=\"0 0 47 47\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect width=\"47\" height=\"47\" rx=\"23.5\" fill=\"#DEE0EC\"/>\n        <rect x=\"6\" y=\"6\" width=\"35\" height=\"35\" rx=\"17.5\" fill=\"#B9BED3\"/>\n        <path d=\"M30.6668 22.9999C30.6668 26.6799 27.6802 29.6666 24.0002 29.6666C20.3202 29.6666 18.0735 25.9599 18.0735 25.9599M18.0735 25.9599H21.0868M18.0735 25.9599V29.2933M17.3335 22.9999C17.3335 19.3199 20.2935 16.3333 24.0002 16.3333C28.4468 16.3333 30.6668 20.0399 30.6668 20.0399M30.6668 20.0399V16.7066M30.6668 20.0399H27.7068\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </symbol>\n    <symbol id=\"resetGreen\" viewBox=\"0 0 47 47\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect width=\"47\" height=\"47\" rx=\"23.5\" fill=\"#A5DC79\"/>\n        <rect x=\"6\" y=\"6\" width=\"35\" height=\"35\" rx=\"17.5\" fill=\"#BFE99F\"/>\n        <path d=\"M30.6668 22.9999C30.6668 26.6799 27.6802 29.6666 24.0002 29.6666C20.3202 29.6666 18.0735 25.9599 18.0735 25.9599M18.0735 25.9599H21.0868M18.0735 25.9599V29.2933M17.3335 22.9999C17.3335 19.3199 20.2935 16.3333 24.0002 16.3333C28.4468 16.3333 30.6668 20.0399 30.6668 20.0399M30.6668 20.0399V16.7066M30.6668 20.0399H27.7068\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </symbol>\n    <symbol id=\"submitDisable\" viewBox=\"0 0 47 47\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect width=\"47\" height=\"47\" rx=\"23.5\" fill=\"#B3B8D7\" fill-opacity=\"0.4\"/>\n        <rect x=\"6\" y=\"6\" width=\"35\" height=\"35\" rx=\"17.5\" fill=\"#B3B8D7\"/>\n        <path d=\"M19.748 19.7483L27.7761 27.7764\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M19.75 27.7759L27.7781 19.7478\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </symbol>\n\n</svg>\n\n\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/jquery-3.6.0.min.js":
/*!************************************!*\
  !*** ./src/js/jquery-3.6.0.min.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/de3d920e5e0de59d9f45.js";

/***/ }),

/***/ "./src/img/bg.webp":
/*!*************************!*\
  !*** ./src/img/bg.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/624b0bfea3942520574e.webp";

/***/ }),

/***/ "./src/img/img1.webp":
/*!***************************!*\
  !*** ./src/img/img1.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3b371c510a98aaa8bb71.webp";

/***/ }),

/***/ "./src/img/img3.webp":
/*!***************************!*\
  !*** ./src/img/img3.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f54523bf1d5695fb58db.webp";

/***/ }),

/***/ "./src/img/img4.png":
/*!**************************!*\
  !*** ./src/img/img4.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0325978965c57dd05a13.png";

/***/ }),

/***/ "./src/img/loading.svg":
/*!*****************************!*\
  !*** ./src/img/loading.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/aa145e6fba96cfb72d93.svg";

/***/ }),

/***/ "./src/font/Circe-Bold.woff":
/*!**********************************!*\
  !*** ./src/font/Circe-Bold.woff ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Circe-Bold.woff";

/***/ }),

/***/ "./src/font/Circe-Bold.woff2":
/*!***********************************!*\
  !*** ./src/font/Circe-Bold.woff2 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Circe-Bold.woff2";

/***/ }),

/***/ "./src/font/Circe-Regular.woff":
/*!*************************************!*\
  !*** ./src/font/Circe-Regular.woff ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Circe-Regular.woff";

/***/ }),

/***/ "./src/font/Circe-Regular.woff2":
/*!**************************************!*\
  !*** ./src/font/Circe-Regular.woff2 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Circe-Regular.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./src/index.html");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _useApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useApi.js */ "./src/js/useApi.js");
/* harmony import */ var _toolkit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolkit.js */ "./src/js/toolkit.js");






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
  const loadingAnim = (0,_toolkit_js__WEBPACK_IMPORTED_MODULE_3__.initLoadingAnim)();
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
    reader.onload = function () {
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
    }(file);
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
      $('.main__form-buttons').removeClass('active');
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
      await (0,_useApi_js__WEBPACK_IMPORTED_MODULE_2__.fetching)({
        url: 'https://api.capsola.cloud/result',
        method: 'POST',
        data: {
          id: taskId
        }
      }, () => loadingAnim.stop(submitBtn)).then(resp => {
        isHaveResult = true;
        $('#resultList').html('');
        const coordinates = parseCoordinates(resp.response);
        coordinates.map((item, i) => $('#resultList').append(`<li>${i + 1}: x:${item[0]} y:${item[1]}</li>`));
        const img = new Image();
        img.onload = () => {
          const scale = $('#resultFindImg').width() / img.width;
          coordinates.map((item, i) => {
            $('#resultImgBox').append(`<div class="main__result-click" style="top: ${item[1] * scale}px; left: ${item[0] * scale}px">${i + 1}</div>`);
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
      click: captchaImg,
      task: iconsImg
    };
    loadingAnim.start(submitBtn);
    $('.main__form-buttons .error-text').hide();
    (0,_useApi_js__WEBPACK_IMPORTED_MODULE_2__.fetching)({
      url: 'https://api.capsola.cloud/create',
      method: 'POST',
      data: requestData
    }, () => loadingAnim.stop(submitBtn)).then(resp => {
      getResult(resp.response);
    }).catch(err => {
      $('.main__form-buttons .error-text').html(err.message).show();
      loadingAnim.stop(submitBtn);
    });
  });
  $(document).on('click', '.main__new-test-btn', newTest);
});
})();

/******/ })()
;
//# sourceMappingURL=main.fc4722cabafddb166479.js.map