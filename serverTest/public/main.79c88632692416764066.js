(()=>{"use strict";var t={91:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},230:(t,e,n)=>{t.exports=n.p+"assets/2b2dba07226e8918aee9.js"},831:(t,e,n)=>{t.exports=n.p+"assets/3b371c510a98aaa8bb71.webp"},790:(t,e,n)=>{t.exports=n.p+"assets/f54523bf1d5695fb58db.webp"},724:(t,e,n)=>{t.exports=n.p+"assets/0325978965c57dd05a13.png"}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");if(s.length)for(var a=s.length-1;a>-1&&!t;)t=s[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,(()=>{var t=n(91),e=n.n(t),s=new URL(n(230),n.b),a=new URL(n(790),n.b),i=new URL(n(831),n.b),r=new URL(n(724),n.b);e()(s),e()(a);e()(i),e()(r);const o=async(t,e,n)=>{let s="",a={"Content-Type":"application/json","X-API-Key":"062634cd-71ba-43be-aaf1-40ff40aace68"};try{const n=await fetch("https://capsola.onrender.com"+e,{crossDomain:!0,method:t.method||"POST",body:t.data&&JSON.stringify({...t.data,headers:a}),headers:a});if(s=await n.json(),!n.ok)throw s.error.description?new Error(s.error.description):new Error(s.error.message)}catch(t){throw n&&n(),"Failed to fetch"===t.message?new Error("Нет соединения с сервером"):new Error(t.message)}return s},l=n.p+"assets/aa145e6fba96cfb72d93.svg";$(document).ready((function(){const t=function(){const t=new Image;return t.src=l,t.className="isLoading__img",{start:e=>e.addClass("isLoading").append(t),stop:t=>t.removeClass("isLoading").find(".isLoading__img").remove()}}(),e=$(".main__form-submit");let n,s;function a(t){t.parent().removeClass("active").find('input[type="file"]').val(""),t.siblings(".main__file-img").find("img").attr("src",""),t.siblings(".main__file-name").html(""),t.siblings(".main__file-size").html("")}$(document).on("input",'.main__radio-buttons input[type="radio"]',(function(){$(this).parent().addClass("active").siblings("*").removeClass("active")})),$(document).on("input",'.main__upload-label input[type="file"]',(function(){const t=$(this),i=t[0].files[0],r=new FileReader;r.onload=function(r){const o=r.target.result;"image/png"===i.type&&i.size<=2e5?"captchaImg"===t.attr("name")?(n=o.slice(o.indexOf(",")+1),$("#resultFindImg").attr("src",o),$("#originalImg").attr("src",o)):"iconsImg"===t.attr("name")&&(s=o.slice(o.indexOf(",")+1),$("#iconsImg").attr("src",o)):($(".main__sub-title").addClass("red"),a(t),$(".main__form-buttons").removeClass("active"),e.attr("disabled","disabled")),t.siblings(".main__file-img").find("img").attr("src",r.target.result)},r.readAsDataURL(i),t.parent().addClass("active"),t.siblings(".main__file-name").html(i.name),t.siblings(".main__file-size").html(Math.ceil(i.size/1e3)+"KB")})),$(document).on("click",".main__upload-label.active",(t=>t.preventDefault())),$(document).on("click",".main__file-clear",(function(){$(this).parent().removeClass("active"),a($(this))})),$(document).on("change",".main__form",(function(){let t=!0;$(this).children("*:not(.main__form-buttons)").each((function(){const e=$(this);e.find('input[type="radio"]').length&&(e.find("input:checked").length||(t=!1)),e.find('input[type="file"]').length&&(e.find("input").val().length||(t=!1))})),t?(e.removeAttr("disabled"),$(".main__form-buttons").addClass("active")):(e.attr("disabled","disabled"),$(".main__form-buttons").removeClass("active"))})),$(document).on("click",".main__form-clear",(function(){$(".main__upload-label input").each((function(){a($(this))})),$(".main__form-buttons").removeClass("active"),$(".main__radio-label").removeClass("active").find("input").prop("checked",!1),e.attr("disabled","disabled"),$(".main__form-buttons .error-text").hide()})),$(document).on("submit",".main__form",(function(a){a.preventDefault();const i={type:"SmartCaptcha",url:"https://api.capsola.cloud/create",click:n,task:s};t.start(e),$(".main__form-buttons .error-text").hide(),$(".main__sub-title").removeClass("red"),o({method:"POST",data:i},"/send-request",(()=>t.stop(e))).then((n=>{0===n.result.status?($(".main__form-buttons .error-text").html(n.result.response).show(),t.stop(e)):async function(n){await o({method:"POST",data:{id:n,url:"https://api.capsola.cloud/result"}},"/get-result",(()=>t.stop(e))).then((n=>{if(0===n.result.status)$(".main__form-buttons .error-text").html(n.result.response).show(),t.stop(e);else{$("#resultList").html("");const s=function(t){const e=[],n=/x=([\d.]+),y=([\d.]+)/g;let s;for(;null!==(s=n.exec(t));){const t=parseFloat(s[1]),n=parseFloat(s[2]);e.push([t,n])}return e}(n.result.response);s.map(((t,e)=>$("#resultList").append(`<li>${e+1}: x:${t[0]} y:${t[1]}</li>`)));const a=new Image;a.onload=()=>{const t=$("#resultFindImg").width()/a.width;$(".main__result-click").remove(),s.map(((e,n)=>{$("#resultImgBox").append(`<div class="main__result-click" style="top: ${e[1]*t}px; left: ${e[0]*t}px">${n+1}</div>`)}))},a.src=$("#resultFindImg").attr("src"),$("#resultContent").slideToggle(500,(function(){$(".main__content").css("transform","translateX(calc(-100% - 8rem))"),t.stop(e)}))}}))}(n.result.response)})).catch((n=>{$(".main__form-buttons .error-text").html(n.message).show(),t.stop(e)}))})),$(document).on("click",".main__new-test-btn",(function(){$(".main__content").removeAttr("style"),$("#resultContent").slideToggle(500)}))}))})()})();