(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row center-align body-dark remove-mp\">\n  <app-header></app-header>\n\n  <main class=\"remove-mp\">\n    <section class=\"diag-section section-1\">\n      <app-dbrd-section-one></app-dbrd-section-one>\n    </section>\n\n    <section class=\"diag-section section-2\">\n      <app-dbrd-section-two></app-dbrd-section-two>\n    </section>\n\n    <section class=\"diag-section section-3\">\n      <app-dbrd-section-three></app-dbrd-section-three>\n    </section>\n\n    <section class=\"diag-section section-4\">\n      <app-dbrd-section-four></app-dbrd-section-four>\n    </section>\n\n    <section class=\"diag-section section-5\">\n      <app-dbrd-section-five></app-dbrd-section-five>\n    </section>\n\n    <section class=\"diag-section section-6\">\n      <app-dbrd-section-six></app-dbrd-section-six>\n    </section>\n  </main>\n\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-five/dbrd-section-five.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dbrd-section-five/dbrd-section-five.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 img-bg padding-top\">\r\n  <div class=\"jumbotron mb-5 items-centered\">\r\n    <p class=\"text-center diag-h4\">Live TV Guide and catch up TV</p>\r\n    <p class=\"text-center diag-h2\">Enjoy Our Live Channels.</p>\r\n    <p class=\"text-center diag-sub-body-text\">\r\n      Enjoy all your favourite channels in one place with DIAGNAL ENLIGHT.\r\n    </p>\r\n  </div>\r\n  <div class=\"img-gallery mb-5\">\r\n    <div *ngFor=\"let item of galleryItems\" class=\"image-item\">\r\n      <div class=\"containerBox\">\r\n        <img class=\"img-responsive\" src=\"{{ item.Imgsrc }}\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-four/dbrd-section-four.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dbrd-section-four/dbrd-section-four.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n  <div class=\"jumbotron mb-4 items-centered\">\r\n    <p class=\"text-center diag-h4\">Try before you buy</p>\r\n    <p class=\"text-center diag-h2\">Browse Our Content</p>\r\n  </div>\r\n  <div class=\"container-fluid\" style=\"padding:0px\">\r\n    <div class=\"row margin10\">\r\n      <div class=\"col-md-12 items-centered\" style=\"overflow: auto;\">\r\n        \r\n\r\n        <section class=\"desktop-view\">\r\n          <div class=\"image-gallery\">\r\n            <div *ngFor=\"let item of galleryItems\" class=\"image-item\">\r\n              <div class=\"containerBox\">\r\n                <div class=\"overlay-gradient\"></div>\r\n                <img\r\n                  class=\"img-responsive\"\r\n                  src=\"{{item.Imgsrc}}\"\r\n                />\r\n                <div class=\"text-box\">{{item.Imgtxt}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        \r\n        <section class=\" mobile-view\">\r\n          <div class=\"mobile-image-gallery\">\r\n            <div *ngFor=\"let item of galleryItems\" class=\"image-item\">\r\n              <div class=\"containerBox\">\r\n                <div class=\"overlay-gradient\"></div>\r\n                <img\r\n                  class=\"img-responsive\"\r\n                  src=\"{{item.Imgsrc}}\"\r\n                />\r\n                <div class=\"text-box\">{{item.Imgtxt}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        \r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"jumbotron items-centered mt-4 mb-3\">\r\n    <button class=\"diag-btn btn btn-primary my-2 my-sm-0\">browse content</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-one/dbrd-section-one.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dbrd-section-one/dbrd-section-one.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 image-bg\">\n  <div class=\"text-box\">\n    <div class=\"diag-h3\">\n      <p>Watch everywhere and anywhere.</p>\n    </div>\n    <div class=\"diag-h1\">\n      <p>Unlimited movies, TV shows, and more.</p>\n    </div>\n    <div class=\"diag-body-text\">\n      <p>\n        Best video quality at 4k with HDR. Enjoy simultaneously on 4 screens.\n        Watch on your TV, computer, phone and tablet. Cancel anytime. Includes\n        free trial for first 14 days\n      </p>\n    </div>\n    <div class=\"mb-3\">\n      <button class=\"diag-btn btn btn-primary my-2 my-sm-0\">get started</button>\n    </div>\n    <div class=\"diag-small-body-text lh-17\">\n      <p>Ready to watch? Click get started to view our plans</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-six/dbrd-section-six.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dbrd-section-six/dbrd-section-six.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <div class=\"jumbotron pt-5 pb-5 items-centered\">\n    <p class=\"text-center diag-h2\">Frequently Asked Questions.</p>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-5\">\n        <p class=\"diag-h3-yellow\">What is DIAGNAL ENLIGHT?</p>\n        <p class=\"diag-sub-body-text\">\n          {{text}}\n        </p>\n      </div>\n      <div class=\"col-md-4 mb-5\">\n        <p class=\"diag-h3-yellow\">How much does it cost?</p>\n        <p class=\"diag-sub-body-text\">\n          {{text}}\n        </p>\n      </div>\n      <div class=\"col-md-4 mb-5\">\n        <p class=\"diag-h3-yellow\">Where can I watch it?</p>\n        <p class=\"diag-sub-body-text\">\n          {{text}}\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-5\">\n        <p class=\"diag-h3-yellow\">How do I cancel?</p>\n        <p class=\"diag-sub-body-text\">\n          {{text}}\n        </p>\n      </div>\n      <div class=\"col-md-4 mb-5\">\n        <p class=\"diag-h3-yellow\">What can I watch?</p>\n        <p class=\"diag-sub-body-text\">\n          {{text}}\n        </p>\n      </div>\n      <div class=\"col-md-4 mb-5\">\n        <p class=\"diag-h3-yellow\">Is ENLIGHT good for kids?</p>\n        <p class=\"diag-sub-body-text\">\n          {{text}}\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"jumbotron p-3 items-centered\">\n    <p class=\"text-center diag-small-body-text\">\n      Ready to watch? Click get started to view our plans\n    </p>\n    <button class=\"diag-btn btn btn-primary my-2 my-sm-0\">get started</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-three/dbrd-section-three.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dbrd-section-three/dbrd-section-three.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <div class=\"container-fluid\">\n    <div class=\"row centered\">\n      <div class=\"col-xs-12 col-md-6 order-text\">\n        <div class=\"diag-h4\">\n          <p>Available on every device and platform</p>\n        </div>\n        <div class=\"diag-h2\" style=\"text-align: left;\">\n          <p>Watch Everywhere.</p>\n        </div>\n        <div class=\"diag-sub-body-text\">\n          <p>\n            Stream unlimited movies and TV shows on your phone, tablet, laptop,\n            and TV without paying more.\n          </p>\n        </div>\n        <div class=\"diag-img-text-4\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>Watch on Game Consoles</li>\n            <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>Available as a TV app</li>\n            <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>Watch on Web</li>\n            <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>Download our App for Mobile and Tablet</li>\n            <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>Unlimited Devices</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-md-6 order-image\">\n        <div class=\"row mb-5\">\n          <div class=\"\">\n            <img\n              class=\"img-responsive\"\n              src=\"../../../../assets/images/Devices-DIAGNAL1.png\"\n            />\n          </div>\n        </div>\n        <div class=\"row mb-5\">\n          <div class=\"\">\n            <img\n              class=\"img-responsive\"\n              src=\"../../../../assets/images/Devices-DIAGNAL2.png\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-two/dbrd-section-two.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dbrd-section-two/dbrd-section-two.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <div class=\"container-fluid\">\n    <div class=\"row item-centered\">\n      <div class=\"col-md-4\">\n        <img class=\"img-responsive mb-2\" src=\"../assets/images/Vector-2.png\" />\n        <p class=\"diag-h3 mb-6\">Unbelievable detail at 4K</p>\n        <p class=\"diag-small-body-text\">\n          Amet risus nullam eget felis eget. Faucibus scelerisque eleifend donec\n          pretium vulputate sapien. Justo nec ultrices dui sapien eget mi proin\n          sed libero.\n        </p>\n      </div>\n      <div class=\"col-md-4\">\n        <img class=\"img-responsive mb-2\" src=\"../assets/images/Vector.png\" />\n        <p class=\"diag-h3 mb-6\">Watch with family & friends</p>\n        <p class=\"diag-small-body-text\">\n          Laoreet id donec ultrices tincidunt arcu non sodales neque sodales.\n          Arcu dui vivamus arcu felis. Est velit egestas dui id ornare arcu\n          odio.\n        </p>\n      </div>\n      <div class=\"col-md-4\">\n        <img class=\"img-responsive mb-2\" src=\"../assets/images/Vector-1.png\" />\n        <p class=\"diag-h3 mb-6\">Intelligently personalized</p>\n        <p class=\"diag-small-body-text\">\n          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.\n          Libero id faucibus nisl tincidunt. Dui faucibus in ornare quam.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid remove-mp\">\n    <div class=\"row\">\n      <div class=\"col-6 links\">\n        <a href=\"#\">Contact Us</a>\n        <a href=\"#\"> FAQs </a>\n        <a href=\"#\"> Terms of Use </a>\n        <a href=\"#\"> Privacy </a>\n      </div>\n      <div class=\"col-6 logos\">\n        <a href=\"#\"> <i class=\"custom fa fa-instagram\"></i> </a>\n        <a href=\"#\"><i class=\"custom fa fa-facebook\"></i></a>\n        <img style=\"max-width: 290px;\" src=\"../assets/images/stores.png\" />\n      </div>\n    </div>\n    <p class=\"copyright\">Diagnal © 2019 </p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-dark bg-dark p-10\">\n    <span class=\"navbar-brand mb-0 h1 yellow-text\">DIAGNAL</span>\n    <button class=\"diag-btn btn btn-outline-primary my-2 my-sm-0\">\n      LOG IN\n    </button>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".diag-section {\n  position: relative;\n}\n\n.section-1 {\n  min-height: 100px;\n}\n\n.section-2 {\n  background: #333333;\n  min-height: 100px;\n  padding: 3%;\n}\n\n.section-3 {\n  background: linear-gradient(274.9deg, rgba(0, 0, 0, 0.9) 2.53%, rgba(0, 0, 0, 0) 55.13%, rgba(0, 0, 0, 0.9) 98.71%), #222222;\n  min-height: 100px;\n  padding: 3%;\n}\n\n.section-4 {\n  background: -webkit-gradient(linear, right top, left top, from(#0c0c0c), color-stop(47.35%, #333333), color-stop(97.76%, #131313));\n  background: linear-gradient(270deg, #0c0c0c 0%, #333333 47.35%, #131313 97.76%);\n  min-height: 100px;\n  padding: 3%;\n}\n\n.section-5 {\n  min-height: 100px;\n}\n\n.section-6 {\n  min-height: 100px;\n  background: linear-gradient(274.9deg, rgba(0, 0, 0, 0.9) 2.53%, rgba(0, 0, 0, 0) 55.13%, rgba(0, 0, 0, 0.9) 98.71%), #222222;\n}\n\n@media screen and (max-width: 840px), (min-width: 200px) {\n  .section-2, .section-3, .section-4, .section-6 {\n    padding: 10% 3%;\n  }\n}\n\n@media screen and (min-width: 841px) {\n  .section-2, .section-3, .section-4, .section-6 {\n    padding: 3%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx0b21fZ1xcRGVza3RvcFxcU2lkbmV5XFxzaWR0b20uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDRIQUFBO0VBT0EsaUJBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxrSUFBQTtFQUFBLCtFQUFBO0VBTUEsaUJBQUE7RUFDQSxXQUFBO0FDVkY7O0FEYUE7RUFDRSxpQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsaUJBQUE7RUFDQSw0SEFBQTtBQ1ZGOztBRG9CQTtFQUNFO0lBQ0UsZUFBQTtFQ2pCRjtBQUNGOztBRG9CQTtFQUNFO0lBQ0UsV0FBQTtFQ2xCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWctc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VjdGlvbi0xIHtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tMiB7XHJcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLnNlY3Rpb24tMyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAyNzQuOWRlZyxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjkpIDIuNTMlLFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDApIDU1LjEzJSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjkpIDk4LjcxJVxyXG4gICAgKSxcclxuICAgICMyMjIyMjI7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLTQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDI3MGRlZyxcclxuICAgICMwYzBjMGMgMCUsXHJcbiAgICAjMzMzMzMzIDQ3LjM1JSxcclxuICAgICMxMzEzMTMgOTcuNzYlXHJcbiAgKTtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLnNlY3Rpb24tNSB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLTYge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMjc0LjlkZWcsXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC45KSAyLjUzJSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwKSA1NS4xMyUsXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC45KSA5OC43MSVcclxuICAgICksXHJcbiAgICAjMjIyMjIyO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpLCAobWluLXdpZHRoOiAyMDBweCkge1xyXG4gIC5zZWN0aW9uLTIsIC5zZWN0aW9uLTMsIC5zZWN0aW9uLTQsIC5zZWN0aW9uLTZ7XHJcbiAgICBwYWRkaW5nOiAxMCUgMyU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDFweCkge1xyXG4gIC5zZWN0aW9uLTIsIC5zZWN0aW9uLTMsIC5zZWN0aW9uLTQsIC5zZWN0aW9uLTZ7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICB9XHJcbn0iLCIuZGlhZy1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VjdGlvbi0xIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5zZWN0aW9uLTIge1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5zZWN0aW9uLTMge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjc0LjlkZWcsIHJnYmEoMCwgMCwgMCwgMC45KSAyLjUzJSwgcmdiYSgwLCAwLCAwLCAwKSA1NS4xMyUsIHJnYmEoMCwgMCwgMCwgMC45KSA5OC43MSUpLCAjMjIyMjIyO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5zZWN0aW9uLTQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMGMwYzBjIDAlLCAjMzMzMzMzIDQ3LjM1JSwgIzEzMTMxMyA5Ny43NiUpO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5zZWN0aW9uLTUge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLnNlY3Rpb24tNiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjc0LjlkZWcsIHJnYmEoMCwgMCwgMCwgMC45KSAyLjUzJSwgcmdiYSgwLCAwLCAwLCAwKSA1NS4xMyUsIHJnYmEoMCwgMCwgMCwgMC45KSA5OC43MSUpLCAjMjIyMjIyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCksIChtaW4td2lkdGg6IDIwMHB4KSB7XG4gIC5zZWN0aW9uLTIsIC5zZWN0aW9uLTMsIC5zZWN0aW9uLTQsIC5zZWN0aW9uLTYge1xuICAgIHBhZGRpbmc6IDEwJSAzJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQxcHgpIHtcbiAgLnNlY3Rpb24tMiwgLnNlY3Rpb24tMywgLnNlY3Rpb24tNCwgLnNlY3Rpb24tNiB7XG4gICAgcGFkZGluZzogMyU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'diagnal-ui-test';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_dashboard_dbrd_section_one_dbrd_section_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dbrd-section-one/dbrd-section-one.component */ "./src/app/components/dashboard/dbrd-section-one/dbrd-section-one.component.ts");
/* harmony import */ var _components_dashboard_dbrd_section_two_dbrd_section_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dbrd-section-two/dbrd-section-two.component */ "./src/app/components/dashboard/dbrd-section-two/dbrd-section-two.component.ts");
/* harmony import */ var _components_dashboard_dbrd_section_three_dbrd_section_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dbrd-section-three/dbrd-section-three.component */ "./src/app/components/dashboard/dbrd-section-three/dbrd-section-three.component.ts");
/* harmony import */ var _components_dashboard_dbrd_section_four_dbrd_section_four_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dbrd-section-four/dbrd-section-four.component */ "./src/app/components/dashboard/dbrd-section-four/dbrd-section-four.component.ts");
/* harmony import */ var _components_dashboard_dbrd_section_five_dbrd_section_five_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dbrd-section-five/dbrd-section-five.component */ "./src/app/components/dashboard/dbrd-section-five/dbrd-section-five.component.ts");
/* harmony import */ var _components_dashboard_dbrd_section_six_dbrd_section_six_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dbrd-section-six/dbrd-section-six.component */ "./src/app/components/dashboard/dbrd-section-six/dbrd-section-six.component.ts");



// import { AngularFontAwesomeModule } from 'angular-font-awesome';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_dashboard_dbrd_section_one_dbrd_section_one_component__WEBPACK_IMPORTED_MODULE_6__["DbrdSectionOneComponent"],
                _components_dashboard_dbrd_section_two_dbrd_section_two_component__WEBPACK_IMPORTED_MODULE_7__["DbrdSectionTwoComponent"],
                _components_dashboard_dbrd_section_three_dbrd_section_three_component__WEBPACK_IMPORTED_MODULE_8__["DbrdSectionThreeComponent"],
                _components_dashboard_dbrd_section_four_dbrd_section_four_component__WEBPACK_IMPORTED_MODULE_9__["DbrdSectionFourComponent"],
                _components_dashboard_dbrd_section_five_dbrd_section_five_component__WEBPACK_IMPORTED_MODULE_10__["DbrdSectionFiveComponent"],
                _components_dashboard_dbrd_section_six_dbrd_section_six_component__WEBPACK_IMPORTED_MODULE_11__["DbrdSectionSixComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-five/dbrd-section-five.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-five/dbrd-section-five.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerBox {\n  position: relative;\n}\n\n.img-gallery {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0px 5%;\n  max-width: 1410px;\n}\n\n.img-bg {\n  background: radial-gradient(50% 50% at 50% 50%, rgba(31, 31, 31, 0.7695) 0%, rgba(22, 22, 22, 0.95) 100%), url('Rectangle2662.png');\n  height: calc(0.56 * 100rem);\n  width: 100%;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: right;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n@media screen and (max-width: 1101px) {\n  .container-fluid {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  .image-item {\n    width: 165px;\n    margin: 15px;\n  }\n\n  .img-responsive {\n    width: 100%;\n    height: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  .img-bg {\n    height: calc(0.7 * 100rem);\n  }\n\n  .padding-top {\n    padding-top: 7%;\n  }\n\n  .img-gallery {\n    margin: 0px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .image-item {\n    width: 165px;\n    margin: 10px;\n  }\n}\n\n@media screen and (min-width: 1102px) {\n  .image-item {\n    width: 209px;\n    margin: 15px;\n  }\n\n  .img-bg {\n    height: calc(0.56 * 100rem);\n  }\n\n  .padding-top {\n    padding-top: 5%;\n  }\n}\n\n@media (min-width: 481px) and (max-width: 1024px) {\n  .img-bg {\n    background: radial-gradient(50% 50% at 50% 50%, rgba(31, 31, 31, 0.7695) 0%, rgba(22, 22, 22, 0.95) 100%), url('Rectangle123.png');\n    height: calc(0.56 * 100rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLWZpdmUvQzpcXFVzZXJzXFx0b21fZ1xcRGVza3RvcFxcU2lkbmV5XFxzaWR0b20uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkYXNoYm9hcmRcXGRicmQtc2VjdGlvbi1maXZlXFxkYnJkLXNlY3Rpb24tZml2ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLWZpdmUvZGJyZC1zZWN0aW9uLWZpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxtSUFBQTtFQU1BLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSEY7O0FETUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDSEY7O0VES0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQ0ZGOztFREtBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtPQUFBLGlCQUFBO0VDRkY7O0VES0E7SUFDRSwwQkFBQTtFQ0ZGOztFREtBO0lBQ0UsZUFBQTtFQ0ZGOztFREtBO0lBQ0UsV0FBQTtFQ0ZGO0FBQ0Y7O0FESUE7RUFFRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VDSEY7QUFDRjs7QURPQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUNMRjs7RURRQTtJQUNFLDJCQUFBO0VDTEY7O0VEUUE7SUFDRSxlQUFBO0VDTEY7QUFDRjs7QURRQTtFQUNFO0lBQ0Usa0lBQUE7SUFNQSwyQkFBQTtFQ1hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYnJkLXNlY3Rpb24tZml2ZS9kYnJkLXNlY3Rpb24tZml2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJCb3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW1nLWdhbGxlcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHggNSU7XHJcbiAgbWF4LXdpZHRoOiAxNDEwcHg7XHJcbn1cclxuXHJcbi5pbWctYmcge1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgNTAlIDUwJSBhdCA1MCUgNTAlLFxyXG4gICAgICByZ2JhKDMxLCAzMSwgMzEsIDAuNzY5NSkgMCUsXHJcbiAgICAgIHJnYmEoMjIsIDIyLCAyMiwgMC45NSkgMTAwJVxyXG4gICAgKSxcclxuICAgIHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvUmVjdGFuZ2xlMjY2Mi5wbmdcIik7XHJcbiAgaGVpZ2h0OiBjYWxjKDAuNTYgKiAxMDByZW0pO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDFweCl7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgLmltYWdlLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmltZy1yZXNwb25zaXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuaW1nLWJnIHtcclxuICAgIGhlaWdodDogY2FsYygwLjcgKiAxMDByZW0pO1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmctdG9we1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG4gIH1cclxuXHJcbiAgLmltZy1nYWxsZXJ5e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KXtcclxuICBcclxuICAuaW1hZ2UtaXRlbSB7XHJcbiAgICB3aWR0aDogMTY1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMnB4KSB7XHJcbiAgLmltYWdlLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDIwOXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmltZy1iZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMC41NiAqIDEwMHJlbSk7XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy10b3B7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuaW1nLWJnIHtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICA1MCUgNTAlIGF0IDUwJSA1MCUsXHJcbiAgICAgICAgcmdiYSgzMSwgMzEsIDMxLCAwLjc2OTUpIDAlLFxyXG4gICAgICAgIHJnYmEoMjIsIDIyLCAyMiwgMC45NSkgMTAwJVxyXG4gICAgICApLFxyXG4gICAgICB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1JlY3RhbmdsZTEyMy5wbmdcIik7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMC41NiAqIDEwMHJlbSk7XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lckJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltZy1nYWxsZXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggNSU7XG4gIG1heC13aWR0aDogMTQxMHB4O1xufVxuXG4uaW1nLWJnIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDUwJSA1MCUgYXQgNTAlIDUwJSwgcmdiYSgzMSwgMzEsIDMxLCAwLjc2OTUpIDAlLCByZ2JhKDIyLCAyMiwgMjIsIDAuOTUpIDEwMCUpLCB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1JlY3RhbmdsZTI2NjIucG5nXCIpO1xuICBoZWlnaHQ6IGNhbGMoMC41NiAqIDEwMHJlbSk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAxcHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgLmltYWdlLWl0ZW0ge1xuICAgIHdpZHRoOiAxNjVweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cblxuICAuaW1nLXJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC5pbWctYmcge1xuICAgIGhlaWdodDogY2FsYygwLjcgKiAxMDByZW0pO1xuICB9XG5cbiAgLnBhZGRpbmctdG9wIHtcbiAgICBwYWRkaW5nLXRvcDogNyU7XG4gIH1cblxuICAuaW1nLWdhbGxlcnkge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODVweCkge1xuICAuaW1hZ2UtaXRlbSB7XG4gICAgd2lkdGg6IDE2NXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMnB4KSB7XG4gIC5pbWFnZS1pdGVtIHtcbiAgICB3aWR0aDogMjA5cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG5cbiAgLmltZy1iZyB7XG4gICAgaGVpZ2h0OiBjYWxjKDAuNTYgKiAxMDByZW0pO1xuICB9XG5cbiAgLnBhZGRpbmctdG9wIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaW1nLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoNTAlIDUwJSBhdCA1MCUgNTAlLCByZ2JhKDMxLCAzMSwgMzEsIDAuNzY5NSkgMCUsIHJnYmEoMjIsIDIyLCAyMiwgMC45NSkgMTAwJSksIHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvUmVjdGFuZ2xlMTIzLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IGNhbGMoMC41NiAqIDEwMHJlbSk7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-five/dbrd-section-five.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-five/dbrd-section-five.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DbrdSectionFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrdSectionFiveComponent", function() { return DbrdSectionFiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DbrdSectionFiveComponent = /** @class */ (function () {
    function DbrdSectionFiveComponent() {
    }
    DbrdSectionFiveComponent.prototype.ngOnInit = function () {
        this.galleryItems = [
            { Imgsrc: '../assets/images/Group1.png', Id: '1' },
            { Imgsrc: '../assets/images/Group2.png', Id: '2' },
            { Imgsrc: '../assets/images/Group3.png', Id: '3' },
            { Imgsrc: '../assets/images/Group4.png', Id: '4' },
            { Imgsrc: '../assets/images/Group5.png', Id: '5' },
            { Imgsrc: '../assets/images/Group6.png', Id: '6' },
            { Imgsrc: '../assets/images/Group7.png', Id: '7' },
            { Imgsrc: '../assets/images/Group8.png', Id: '8' },
            { Imgsrc: '../assets/images/Group9.png', Id: '9' },
            { Imgsrc: '../assets/images/Group10.png', Id: '10' },
            { Imgsrc: '../assets/images/Group11.png', Id: '11' },
            { Imgsrc: '../assets/images/Group12.png', Id: '12' },
            { Imgsrc: '../assets/images/Group13.png', Id: '13' },
            { Imgsrc: '../assets/images/Group14.png', Id: '14' },
            { Imgsrc: '../assets/images/Group15.png', Id: '15' }
        ];
    };
    DbrdSectionFiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dbrd-section-five',
            template: __webpack_require__(/*! raw-loader!./dbrd-section-five.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-five/dbrd-section-five.component.html"),
            styles: [__webpack_require__(/*! ./dbrd-section-five.component.scss */ "./src/app/components/dashboard/dbrd-section-five/dbrd-section-five.component.scss")]
        })
    ], DbrdSectionFiveComponent);
    return DbrdSectionFiveComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-four/dbrd-section-four.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-four/dbrd-section-four.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin10 {\n  margin: 0 10%;\n}\n\n.containerBox {\n  position: relative;\n  width: 220px;\n  padding: 0px;\n}\n\n.text-box {\n  position: absolute;\n  text-align: left;\n  color: yellow;\n  bottom: 10px;\n  z-index: 13;\n  left: 15%;\n  right: 15%;\n}\n\n.text-box:before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.overlay-gradient {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(9.09%, #000000), color-stop(89.77%, rgba(0, 0, 0, 0)));\n  background: linear-gradient(360deg, #000000 9.09%, rgba(0, 0, 0, 0) 89.77%);\n  z-index: 12;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.image-gallery {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  max-width: 1135px;\n}\n\n.image-gallery .image-item {\n  margin: 5px;\n}\n\n.img-responsive {\n  width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media screen and (max-width: 1120px) {\n  .margin10 {\n    margin: 0 0;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .desktop-view {\n    display: none;\n  }\n\n  .mobile-view {\n    display: block;\n  }\n  .mobile-view .mobile-image-gallery {\n    display: -webkit-inline-box;\n    display: inline-flex;\n    width: 35rem;\n  }\n  .mobile-view .image-item {\n    margin-right: 10px;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .desktop-view {\n    display: block;\n  }\n\n  .mobile-view {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLWZvdXIvQzpcXFVzZXJzXFx0b21fZ1xcRGVza3RvcFxcU2lkbmV5XFxzaWR0b20uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkYXNoYm9hcmRcXGRicmQtc2VjdGlvbi1mb3VyXFxkYnJkLXNlY3Rpb24tZm91ci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLWZvdXIvZGJyZC1zZWN0aW9uLWZvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0lGOztBRERBO0VBQ0UsNkhBQUE7RUFBQSwyRUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUNJRjs7QUREQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkU7RUFDRSxXQUFBO0FDSUo7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRTtJQUNFLGFBQUE7RUNFRjs7RURBQTtJQUNFLGNBQUE7RUNHRjtFRERFO0lBQ0UsMkJBQUE7SUFBQSxvQkFBQTtJQUNBLFlBQUE7RUNHSjtFREFFO0lBQ0Usa0JBQUE7RUNFSjtBQUNGOztBREVBO0VBQ0U7SUFDRSxjQUFBO0VDQUY7O0VERUE7SUFDRSxhQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2RicmQtc2VjdGlvbi1mb3VyL2RicmQtc2VjdGlvbi1mb3VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbjEwIHtcclxuICBtYXJnaW46IDAgMTAlO1xyXG59XHJcbi5jb250YWluZXJCb3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi50ZXh0LWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IHllbGxvdztcclxuICBib3R0b206IDEwcHg7XHJcbiAgei1pbmRleDogMTM7XHJcbiAgbGVmdDogMTUlO1xyXG4gIHJpZ2h0OiAxNSU7XHJcbn1cclxuLnRleHQtYm94OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5vdmVybGF5LWdyYWRpZW50IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjMDAwMDAwIDkuMDklLCByZ2JhKDAsIDAsIDAsIDApIDg5Ljc3JSk7XHJcbiAgei1pbmRleDogMTI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmltYWdlLWdhbGxlcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMTM1cHg7XHJcblxyXG4gIC5pbWFnZS1pdGVtIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltZy1yZXNwb25zaXZle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XHJcbiAgLm1hcmdpbjEwIHtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgLmRlc2t0b3AtdmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubW9iaWxlLXZpZXcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgLm1vYmlsZS1pbWFnZS1nYWxsZXJ5IHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIHdpZHRoOiAzNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2UtaXRlbXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmRlc2t0b3AtdmlldyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLm1vYmlsZS12aWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59IiwiLm1hcmdpbjEwIHtcbiAgbWFyZ2luOiAwIDEwJTtcbn1cblxuLmNvbnRhaW5lckJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIyMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi50ZXh0LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHllbGxvdztcbiAgYm90dG9tOiAxMHB4O1xuICB6LWluZGV4OiAxMztcbiAgbGVmdDogMTUlO1xuICByaWdodDogMTUlO1xufVxuXG4udGV4dC1ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5vdmVybGF5LWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzAwMDAwMCA5LjA5JSwgcmdiYSgwLCAwLCAwLCAwKSA4OS43NyUpO1xuICB6LWluZGV4OiAxMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5pbWFnZS1nYWxsZXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMTM1cHg7XG59XG4uaW1hZ2UtZ2FsbGVyeSAuaW1hZ2UtaXRlbSB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uaW1nLXJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XG4gIC5tYXJnaW4xMCB7XG4gICAgbWFyZ2luOiAwIDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuZGVza3RvcC12aWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS12aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubW9iaWxlLXZpZXcgLm1vYmlsZS1pbWFnZS1nYWxsZXJ5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMzVyZW07XG4gIH1cbiAgLm1vYmlsZS12aWV3IC5pbWFnZS1pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuZGVza3RvcC12aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5tb2JpbGUtdmlldyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-four/dbrd-section-four.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-four/dbrd-section-four.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DbrdSectionFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrdSectionFourComponent", function() { return DbrdSectionFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DbrdSectionFourComponent = /** @class */ (function () {
    function DbrdSectionFourComponent() {
    }
    DbrdSectionFourComponent.prototype.ngOnInit = function () {
        this.galleryItems = [
            { Imgsrc: '../assets/images/Rectangle1.png', Imgtxt: 'Exclusive Originals', Id: '1' },
            { Imgsrc: '../assets/images/Rectangle2.png', Imgtxt: 'Popular Films', Id: '2' },
            { Imgsrc: '../assets/images/Rectangle3.png', Imgtxt: 'New Releases', Id: '3' },
            { Imgsrc: '../assets/images/Rectangle4.png', Imgtxt: 'Family Favourites', Id: '4' },
            { Imgsrc: '../assets/images/Rectangle5.png', Imgtxt: 'Action & SCI-FI', Id: '5' },
            { Imgsrc: '../assets/images/Rectangle6.png', Imgtxt: 'Indie Films', Id: '6' },
            { Imgsrc: '../assets/images/Rectangle7.png', Imgtxt: 'Crime & Drama ', Id: '7' },
            { Imgsrc: '../assets/images/Rectangle8.png', Imgtxt: 'Oscar Winners', Id: '8' },
        ];
    };
    DbrdSectionFourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dbrd-section-four',
            template: __webpack_require__(/*! raw-loader!./dbrd-section-four.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-four/dbrd-section-four.component.html"),
            styles: [__webpack_require__(/*! ./dbrd-section-four.component.scss */ "./src/app/components/dashboard/dbrd-section-four/dbrd-section-four.component.scss")]
        })
    ], DbrdSectionFourComponent);
    return DbrdSectionFourComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-one/dbrd-section-one.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-one/dbrd-section-one.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-box {\n  position: absolute;\n  text-align: left;\n  width: 38%;\n  margin: 6%;\n}\n\n.text-box:before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.image-bg {\n  background: url('Rectangle253.png');\n  height: calc(0.4 * 100rem);\n  width: 100%;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n@media screen and (max-width: 1140px) {\n  .text-box {\n    width: 46%;\n  }\n}\n\n@media screen and (max-width: 1016px) {\n  .text-box {\n    width: 52%;\n  }\n}\n\n@media screen and (max-width: 947px) {\n  .text-box {\n    width: 60%;\n  }\n}\n\n@media screen and (max-width: 820px) {\n  .text-box {\n    width: 80%;\n    text-align: center;\n  }\n\n  .image-bg {\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLW9uZS9DOlxcVXNlcnNcXHRvbV9nXFxEZXNrdG9wXFxTaWRuZXlcXHNpZHRvbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGJyZC1zZWN0aW9uLW9uZVxcZGJyZC1zZWN0aW9uLW9uZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLW9uZS9kYnJkLXNlY3Rpb24tb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUNFLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFVBQUE7RUNHRjtBQUNGOztBREFBO0VBQ0U7SUFDRSxVQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtFQ0FGOztFREdBO0lBQ0Usd0JBQUE7WUFBQSx1QkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYnJkLXNlY3Rpb24tb25lL2RicmQtc2VjdGlvbi1vbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiAzOCU7XHJcbiAgbWFyZ2luOiA2JTtcclxufVxyXG4udGV4dC1ib3g6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uaW1hZ2UtYmcge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvUmVjdGFuZ2xlMjUzLnBuZ1wiKTtcclxuICBoZWlnaHQ6IGNhbGMoMC40ICogMTAwcmVtKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xyXG4gIC50ZXh0LWJveCB7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxNnB4KSB7XHJcbiAgLnRleHQtYm94IHtcclxuICAgIHdpZHRoOiA1MiU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDdweCkge1xyXG4gIC50ZXh0LWJveCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAudGV4dC1ib3gge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pbWFnZS1iZyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiLnRleHQtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMzglO1xuICBtYXJnaW46IDYlO1xufVxuXG4udGV4dC1ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pbWFnZS1iZyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvUmVjdGFuZ2xlMjUzLnBuZ1wiKTtcbiAgaGVpZ2h0OiBjYWxjKDAuNCAqIDEwMHJlbSk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcbiAgLnRleHQtYm94IHtcbiAgICB3aWR0aDogNDYlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDE2cHgpIHtcbiAgLnRleHQtYm94IHtcbiAgICB3aWR0aDogNTIlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDdweCkge1xuICAudGV4dC1ib3gge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIC50ZXh0LWJveCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW1hZ2UtYmcge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-one/dbrd-section-one.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-one/dbrd-section-one.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DbrdSectionOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrdSectionOneComponent", function() { return DbrdSectionOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DbrdSectionOneComponent = /** @class */ (function () {
    function DbrdSectionOneComponent() {
    }
    DbrdSectionOneComponent.prototype.ngOnInit = function () {
    };
    DbrdSectionOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dbrd-section-one',
            template: __webpack_require__(/*! raw-loader!./dbrd-section-one.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-one/dbrd-section-one.component.html"),
            styles: [__webpack_require__(/*! ./dbrd-section-one.component.scss */ "./src/app/components/dashboard/dbrd-section-one/dbrd-section-one.component.scss")]
        })
    ], DbrdSectionOneComponent);
    return DbrdSectionOneComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-six/dbrd-section-six.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-six/dbrd-section-six.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-4 {\n  padding: 0px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLXNpeC9DOlxcVXNlcnNcXHRvbV9nXFxEZXNrdG9wXFxTaWRuZXlcXHNpZHRvbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGJyZC1zZWN0aW9uLXNpeFxcZGJyZC1zZWN0aW9uLXNpeC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLXNpeC9kYnJkLXNlY3Rpb24tc2l4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2RicmQtc2VjdGlvbi1zaXgvZGJyZC1zZWN0aW9uLXNpeC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtNCB7XHJcbiAgcGFkZGluZzogMHB4IDMwcHg7XHJcbn1cclxuIiwiLmNvbC1tZC00IHtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-six/dbrd-section-six.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-six/dbrd-section-six.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DbrdSectionSixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrdSectionSixComponent", function() { return DbrdSectionSixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DbrdSectionSixComponent = /** @class */ (function () {
    function DbrdSectionSixComponent() {
        this.text = "";
    }
    DbrdSectionSixComponent.prototype.ngOnInit = function () {
        this.text =
            "Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne.";
    };
    DbrdSectionSixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dbrd-section-six",
            template: __webpack_require__(/*! raw-loader!./dbrd-section-six.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-six/dbrd-section-six.component.html"),
            styles: [__webpack_require__(/*! ./dbrd-section-six.component.scss */ "./src/app/components/dashboard/dbrd-section-six/dbrd-section-six.component.scss")]
        })
    ], DbrdSectionSixComponent);
    return DbrdSectionSixComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-three/dbrd-section-three.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-three/dbrd-section-three.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.left-align {\n  text-align: left;\n}\n\n.diag-img-text-4 {\n  font-family: Montserrat;\n  font-style: normal;\n  font-size: 20px;\n  line-height: 35px;\n}\n\n.diag-img-text-4 ul,\n.diag-img-text-4 li {\n  background: #9400d300;\n  color: white;\n}\n\n.diag-img-text-4 .fa-check {\n  color: yellow;\n  margin-right: 16px;\n}\n\n.img-responsive {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media screen and (max-width: 840px) {\n  .order-text {\n    -webkit-box-ordinal-group: 3 !important;\n    order: 2 !important;\n  }\n\n  .order-image {\n    -webkit-box-ordinal-group: 2 !important;\n    order: 1 !important;\n  }\n}\n\n@media screen and (min-width: 841px) {\n  .order-text {\n    -webkit-box-ordinal-group: 2 !important;\n    order: 1 !important;\n  }\n\n  .order-image {\n    -webkit-box-ordinal-group: 3 !important;\n    order: 2 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLXRocmVlL0M6XFxVc2Vyc1xcdG9tX2dcXERlc2t0b3BcXFNpZG5leVxcc2lkdG9tLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGFzaGJvYXJkXFxkYnJkLXNlY3Rpb24tdGhyZWVcXGRicmQtc2VjdGlvbi10aHJlZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLXRocmVlL2RicmQtc2VjdGlvbi10aHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENFOztFQUVFLHFCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNERjs7QURJQTtFQUNFO0lBQ0UsdUNBQUE7SUFDQSxtQkFBQTtFQ0RGOztFRElBO0lBQ0UsdUNBQUE7SUFDQSxtQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLHVDQUFBO0lBQ0EsbUJBQUE7RUNGRjs7RURLQTtJQUNFLHVDQUFBO0lBQ0EsbUJBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLXRocmVlL2RicmQtc2VjdGlvbi10aHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0LWFsaWdue1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kaWFnLWltZy10ZXh0LTQge1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcblxyXG4gIHVsLFxyXG4gIGxpIHtcclxuICAgIGJhY2tncm91bmQ6ICM5NDAwZDMwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5mYS1jaGVjayB7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltZy1yZXNwb25zaXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgLm9yZGVyLXRleHR7XHJcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzICFpbXBvcnRhbnQ7XHJcbiAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAub3JkZXItaW1hZ2V7XHJcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyICFpbXBvcnRhbnQ7XHJcbiAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQxcHgpe1xyXG4gIC5vcmRlci10ZXh0e1xyXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMiAhaW1wb3J0YW50O1xyXG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyLWltYWdle1xyXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMyAhaW1wb3J0YW50O1xyXG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCIuY2VudGVyZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxlZnQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZGlhZy1pbWctdGV4dC00IHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cbi5kaWFnLWltZy10ZXh0LTQgdWwsXG4uZGlhZy1pbWctdGV4dC00IGxpIHtcbiAgYmFja2dyb3VuZDogIzk0MDBkMzAwO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGlhZy1pbWctdGV4dC00IC5mYS1jaGVjayB7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmltZy1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XG4gIC5vcmRlci10ZXh0IHtcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzICFpbXBvcnRhbnQ7XG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5vcmRlci1pbWFnZSB7XG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMiAhaW1wb3J0YW50O1xuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MXB4KSB7XG4gIC5vcmRlci10ZXh0IHtcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyICFpbXBvcnRhbnQ7XG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5vcmRlci1pbWFnZSB7XG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMyAhaW1wb3J0YW50O1xuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-three/dbrd-section-three.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-three/dbrd-section-three.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DbrdSectionThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrdSectionThreeComponent", function() { return DbrdSectionThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DbrdSectionThreeComponent = /** @class */ (function () {
    function DbrdSectionThreeComponent() {
    }
    DbrdSectionThreeComponent.prototype.ngOnInit = function () {
    };
    DbrdSectionThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dbrd-section-three',
            template: __webpack_require__(/*! raw-loader!./dbrd-section-three.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-three/dbrd-section-three.component.html"),
            styles: [__webpack_require__(/*! ./dbrd-section-three.component.scss */ "./src/app/components/dashboard/dbrd-section-three/dbrd-section-three.component.scss")]
        })
    ], DbrdSectionThreeComponent);
    return DbrdSectionThreeComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-two/dbrd-section-two.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-two/dbrd-section-two.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mb-6 {\n  margin-bottom: 6px;\n}\n\n.col-md-4 {\n  padding: 0 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLXR3by9DOlxcVXNlcnNcXHRvbV9nXFxEZXNrdG9wXFxTaWRuZXlcXHNpZHRvbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGJyZC1zZWN0aW9uLXR3b1xcZGJyZC1zZWN0aW9uLXR3by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGJyZC1zZWN0aW9uLXR3by9kYnJkLXNlY3Rpb24tdHdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2RicmQtc2VjdGlvbi10d28vZGJyZC1zZWN0aW9uLXR3by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYi02e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uY29sLW1kLTR7XHJcbiAgICBwYWRkaW5nOiAwIDMlO1xyXG59IiwiLm1iLTYge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5jb2wtbWQtNCB7XG4gIHBhZGRpbmc6IDAgMyU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dbrd-section-two/dbrd-section-two.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/dbrd-section-two/dbrd-section-two.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DbrdSectionTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrdSectionTwoComponent", function() { return DbrdSectionTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DbrdSectionTwoComponent = /** @class */ (function () {
    function DbrdSectionTwoComponent() {
    }
    DbrdSectionTwoComponent.prototype.ngOnInit = function () {
    };
    DbrdSectionTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dbrd-section-two',
            template: __webpack_require__(/*! raw-loader!./dbrd-section-two.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dbrd-section-two/dbrd-section-two.component.html"),
            styles: [__webpack_require__(/*! ./dbrd-section-two.component.scss */ "./src/app/components/dashboard/dbrd-section-two/dbrd-section-two.component.scss")]
        })
    ], DbrdSectionTwoComponent);
    return DbrdSectionTwoComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  min-height: 100px;\n  bottom: 0;\n  width: 100%;\n  background-color: #000;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\na {\n  color: white;\n  text-decoration: none;\n  margin: 2%;\n}\n\n.links {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.logos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.copyright {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  padding-right: 15px;\n  text-align: end;\n}\n\ni.custom {\n  display: inline-block;\n  background: #727272;\n  color: #333333;\n  border-radius: 50%;\n}\n\ni.custom:before,\ni.custom:after {\n  display: inline-block;\n  vertical-align: middle;\n  height: 37px;\n  width: 37px;\n  line-height: 37px;\n  text-align: center;\n}\n\n@media screen and (max-width: 840px) {\n  .links {\n    display: grid;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFx0b21fZ1xcRGVza3RvcFxcU2lkbmV5XFxzaWR0b20uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBOztFQUVFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsYUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAvL3Bvc2l0aW9uOiBmaXhlZDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmxvZ29zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbmkuY3VzdG9tIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzcyNzI3MjtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuaS5jdXN0b206YmVmb3JlLFxyXG5pLmN1c3RvbTphZnRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgaGVpZ2h0OiAzN3B4O1xyXG4gIHdpZHRoOiAzN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAubGlua3Mge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbn1cclxuIiwiLmZvb3RlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMiU7XG59XG5cbi5saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5sb2dvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbmkuY3VzdG9tIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjNzI3MjcyO1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pLmN1c3RvbTpiZWZvcmUsXG5pLmN1c3RvbTphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAzN3B4O1xuICB3aWR0aDogMzdweDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcbiAgLmxpbmtzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p-10 {\n  padding: 10px;\n  z-index: 5;\n}\n\n.yellow-text {\n  color: #ffe300 !important;\n  letter-spacing: 5px;\n  font-weight: bold;\n}\n\n.diag-btn {\n  width: 118px;\n  height: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFx0b21fZ1xcRGVza3RvcFxcU2lkbmV5XFxzaWR0b20uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLTEwIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi55ZWxsb3ctdGV4dHtcclxuICBjb2xvcjogI2ZmZTMwMCFpbXBvcnRhbnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRpYWctYnRuIHtcclxuICB3aWR0aDogMTE4cHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG59XHJcbiIsIi5wLTEwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgei1pbmRleDogNTtcbn1cblxuLnllbGxvdy10ZXh0IHtcbiAgY29sb3I6ICNmZmUzMDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaWFnLWJ0biB7XG4gIHdpZHRoOiAxMThweDtcbiAgaGVpZ2h0OiA0MnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tom_g\Desktop\Sidney\sidtom.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map