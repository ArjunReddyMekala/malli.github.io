(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _blink_blink_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blink/blink.component */ "./src/app/blink/blink.component.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");
/* harmony import */ var _fresher_fresher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fresher/fresher.component */ "./src/app/fresher/fresher.component.ts");
/* harmony import */ var _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./candidate/candidate.component */ "./src/app/candidate/candidate.component.ts");
/* harmony import */ var _canhead_canhead_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./canhead/canhead.component */ "./src/app/canhead/canhead.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _mservices_mservices_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mservices/mservices.component */ "./src/app/mservices/mservices.component.ts");
/* harmony import */ var _testimonails_testimonails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testimonails/testimonails.component */ "./src/app/testimonails/testimonails.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _trail_trail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trail/trail.component */ "./src/app/trail/trail.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _namescroll_namescroll_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./namescroll/namescroll.component */ "./src/app/namescroll/namescroll.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _scrollcandidates_scrollcandidates_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scrollcandidates/scrollcandidates.component */ "./src/app/scrollcandidates/scrollcandidates.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./password/password.component */ "./src/app/password/password.component.ts");
/* harmony import */ var _freshandexp_freshandexp_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./freshandexp/freshandexp.component */ "./src/app/freshandexp/freshandexp.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _jobseeker_jobseeker_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./jobseeker/jobseeker.component */ "./src/app/jobseeker/jobseeker.component.ts");
/* harmony import */ var _home1_home1_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home1/home1.component */ "./src/app/home1/home1.component.ts");



























var routes = [
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: 'blink', component: _blink_blink_component__WEBPACK_IMPORTED_MODULE_7__["BlinkComponent"] },
    { path: 'side', component: _side_side_component__WEBPACK_IMPORTED_MODULE_8__["SideComponent"] },
    { path: 'fresher', component: _fresher_fresher_component__WEBPACK_IMPORTED_MODULE_9__["FresherComponent"] },
    { path: 'candidate', component: _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_10__["CandidateComponent"] },
    { path: 'canhead', component: _canhead_canhead_component__WEBPACK_IMPORTED_MODULE_11__["CanheadComponent"] },
    { path: 'forgot', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__["ForgotComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"] },
    { path: 'mservices', component: _mservices_mservices_component__WEBPACK_IMPORTED_MODULE_14__["MservicesComponent"] },
    { path: 'testimonails', component: _testimonails_testimonails_component__WEBPACK_IMPORTED_MODULE_15__["TestimonailsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"] },
    { path: 'trail', component: _trail_trail_component__WEBPACK_IMPORTED_MODULE_17__["TrailComponent"] },
    { path: 'editprofile', component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_18__["EditprofileComponent"] },
    { path: 'namescroll', component: _namescroll_namescroll_component__WEBPACK_IMPORTED_MODULE_19__["NamescrollComponent"] },
    { path: 'searchbar', component: _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_20__["SearchbarComponent"] },
    { path: 'scrollcandidates', component: _scrollcandidates_scrollcandidates_component__WEBPACK_IMPORTED_MODULE_21__["ScrollcandidatesComponent"] },
    { path: 'password', component: _password_password_component__WEBPACK_IMPORTED_MODULE_22__["PasswordComponent"] },
    { path: 'freshandexp', component: _freshandexp_freshandexp_component__WEBPACK_IMPORTED_MODULE_23__["FreshandexpComponent"] },
    { path: 'auth/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"] },
    { path: 'jobseeker', component: _jobseeker_jobseeker_component__WEBPACK_IMPORTED_MODULE_25__["JobseekerComponent"] },
    /*
    {
      path: 'home1',redirectTo: 'home1',pathMatch: 'full',
     
    }
    */
    { path: 'home1', component: _home1_home1_component__WEBPACK_IMPORTED_MODULE_26__["Home1Component"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    /*---navigation bar------*/\r\n    #nav-bar{\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        top: 0;\r\n        z-index: 10;\r\n    \r\n       }\r\n    .navbar-brand img{\r\n       \r\n          height: 50px;\r\n          padding-left: 30px;\r\n       \r\n       }\r\n    .navbar-nav li{\r\n          padding: 0 10px;\r\n          \r\n       }\r\n    .navbar-nav li a{\r\n          float: right;\r\n          text-align: left;\r\n          color: white;\r\n        }\r\n    .navbar-toggler{\r\n            border: none!important;\r\n        }\r\n    .nav-link{\r\n            color: white;\r\n            font-weight: 600;\r\n            font-size: 16px;\r\n        }\r\n    /*-----------------------------------------------------------*/\r\n        \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJLDJCQUEyQjtJQUMzQjtRQUNJLHlCQUFpQjtRQUFqQixpQkFBaUI7UUFDakIsT0FBTztRQUNQLFlBQVk7O1FBRVo7SUFDRDs7VUFFRyxhQUFhO1VBQ2IsbUJBQW1COztRQUVyQjtJQUNEO1VBQ0csZ0JBQWdCOztRQUVsQjtJQUNEO1VBQ0csYUFBYTtVQUNiLGlCQUFpQjtVQUNqQixhQUFhO1NBQ2Q7SUFHRDtZQUNJLHVCQUF1QjtTQUMxQjtJQUNEO1lBQ0ksYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixnQkFBZ0I7U0FDbkI7SUFFRCwrREFBK0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLyotLS1uYXZpZ2F0aW9uIGJhci0tLS0tLSovXHJcbiAgICAjbmF2LWJhcntcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICAgICBcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgLm5hdmJhci1uYXYgbGl7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgIC5uYXZiYXItbmF2IGxpIGF7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5uYXZiYXItdG9nZ2xlcntcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1saW5re1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!----------------------------------------------------\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">SahiUdhyog</a>\n      </div>\n      <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n       <li *ngIf=\"!isLoggedIn\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"auth/login\" href=\"#\"><b>Login</b></a>\n      </li>\n    </ul>\n  \n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n       <div class=\"btn-group mr-3\" *ngIf=\"isLoggedIn\">\n        <button type=\"button\" class=\"btn btn-primary\"><b>Welcome</b></button>\n        <button routerLink='/jobseeker' class=\"dropdown-item\">Profile</button>\n       <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home1\"><b>Logout</b></a></li>\n      </div>\n    </ul> \n       \n    </div>\n  </nav>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n\n    ------------------------------------>\n \n  <router-outlet></router-outlet>\n "

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
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _blink_blink_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blink/blink.component */ "./src/app/blink/blink.component.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");
/* harmony import */ var _fresher_fresher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fresher/fresher.component */ "./src/app/fresher/fresher.component.ts");
/* harmony import */ var _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/compare-validator.directive */ "./src/app/shared/compare-validator.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./candidate/candidate.component */ "./src/app/candidate/candidate.component.ts");
/* harmony import */ var _canhead_canhead_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./canhead/canhead.component */ "./src/app/canhead/canhead.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _mservices_mservices_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mservices/mservices.component */ "./src/app/mservices/mservices.component.ts");
/* harmony import */ var _testimonails_testimonails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./testimonails/testimonails.component */ "./src/app/testimonails/testimonails.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _trail_trail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./trail/trail.component */ "./src/app/trail/trail.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _namescroll_namescroll_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./namescroll/namescroll.component */ "./src/app/namescroll/namescroll.component.ts");
/* harmony import */ var _subfooter_subfooter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./subfooter/subfooter.component */ "./src/app/subfooter/subfooter.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _scrollcandidates_scrollcandidates_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./scrollcandidates/scrollcandidates.component */ "./src/app/scrollcandidates/scrollcandidates.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./password/password.component */ "./src/app/password/password.component.ts");
/* harmony import */ var _freshandexp_freshandexp_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./freshandexp/freshandexp.component */ "./src/app/freshandexp/freshandexp.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _jobseeker_jobseeker_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./jobseeker/jobseeker.component */ "./src/app/jobseeker/jobseeker.component.ts");
/* harmony import */ var _home1_home1_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./home1/home1.component */ "./src/app/home1/home1.component.ts");




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _blink_blink_component__WEBPACK_IMPORTED_MODULE_10__["BlinkComponent"],
                _side_side_component__WEBPACK_IMPORTED_MODULE_11__["SideComponent"],
                _fresher_fresher_component__WEBPACK_IMPORTED_MODULE_12__["FresherComponent"],
                _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_13__["CompareValidatorDirective"],
                _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_15__["CandidateComponent"],
                _canhead_canhead_component__WEBPACK_IMPORTED_MODULE_16__["CanheadComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_17__["ForgotComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_18__["ExperienceComponent"],
                _mservices_mservices_component__WEBPACK_IMPORTED_MODULE_19__["MservicesComponent"],
                _testimonails_testimonails_component__WEBPACK_IMPORTED_MODULE_20__["TestimonailsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
                _trail_trail_component__WEBPACK_IMPORTED_MODULE_23__["TrailComponent"],
                _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_24__["EditprofileComponent"],
                _namescroll_namescroll_component__WEBPACK_IMPORTED_MODULE_25__["NamescrollComponent"],
                _subfooter_subfooter_component__WEBPACK_IMPORTED_MODULE_26__["SubfooterComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_27__["SearchbarComponent"],
                _scrollcandidates_scrollcandidates_component__WEBPACK_IMPORTED_MODULE_28__["ScrollcandidatesComponent"],
                _password_password_component__WEBPACK_IMPORTED_MODULE_29__["PasswordComponent"],
                _freshandexp_freshandexp_component__WEBPACK_IMPORTED_MODULE_30__["FreshandexpComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"],
                _jobseeker_jobseeker_component__WEBPACK_IMPORTED_MODULE_33__["JobseekerComponent"],
                _home1_home1_component__WEBPACK_IMPORTED_MODULE_34__["Home1Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAlertModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"]
            ],
            providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__["httpInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loginUrl = 'http://192.168.43.241:9098/employer/signin';
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login-info.ts":
/*!************************************!*\
  !*** ./src/app/auth/login-info.ts ***!
  \************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    //private roles: Array<string> = [];
    function TokenStorageService() {
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.removeToken = function () {
        return localStorage.removeItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        //this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY));
        }
        //  return this.roles;
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/blink/blink.component.css":
/*!*******************************************!*\
  !*** ./src/app/blink/blink.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 20vh;\r\n    height: 90px;\r\n    margin-bottom: 20px;\r\n}\r\n.blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n}\r\n@-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxpbmsvYmxpbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSw4Q0FBOEM7SUFFOUMsc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0NBQ3BCO0FBTUQ7SUFDSSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYmxpbmsvYmxpbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiAyMHZoO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYmxpbmt7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua3tcclxuICAgIDAle29wYWNpdHk6IDE7fVxyXG4gICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuQGtleWZyYW1lcyBibGlua3tcclxuICAgIDAle29wYWNpdHk6IDE7fVxyXG4gICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/blink/blink.component.html":
/*!********************************************!*\
  !*** ./src/app/blink/blink.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                <div class=\"carousel-inner\">\n\n<table>\n    <tr>\n<!--------------------------\n<span class=\"blink\">\n ---------------------------->   \n  <td>\n            <div class=\"carousel-item active\">\n         <img src=\"assets/bha.png\" class=\"d-block w-100\"> \n            </div> \n        \n    </td> \n    \n\n     <td>\n            <div class=\"carousel-item active\">\n         <img src=\"assets/info.jpg\" class=\"d-block w-100\">\n         </div>\n    </td>\n\n\n      <td>\n            <div class=\"carousel-item active\">\n          <img src=\"assets/lti.png\" class=\"d-block w-100\">\n        </div>\n        </td>\n\n\n      <td>\n            <div class=\"carousel-item active\">\n        <img src=\"assets/meg.jpg\" class=\"d-block w-100\">\n           </div>\n    </td>\n\n      <td>\n            <div class=\"carousel-item active\">\n        <img src=\"assets/ora.png\" class=\"d-block w-100\">\n            </div>\n    </td>\n\n      <td>\n            <div class=\"carousel-item active\">\n        <img src=\"assets/vir.png\" class=\"d-block w-100\">\n             </div>\n    </td>\n<!--------------\n     </span>\n    ------------>\n    </tr>\n    </table> \n\n\n\n    </div>\n\n\n\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n    \n\n            </div>\n\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/blink/blink.component.ts":
/*!******************************************!*\
  !*** ./src/app/blink/blink.component.ts ***!
  \******************************************/
/*! exports provided: BlinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlinkComponent", function() { return BlinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlinkComponent = /** @class */ (function () {
    function BlinkComponent() {
    }
    BlinkComponent.prototype.ngOnInit = function () {
    };
    BlinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blink',
            template: __webpack_require__(/*! ./blink.component.html */ "./src/app/blink/blink.component.html"),
            styles: [__webpack_require__(/*! ./blink.component.css */ "./src/app/blink/blink.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlinkComponent);
    return BlinkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/candidate.component.css":
/*!***************************************************!*\
  !*** ./src/app/candidate/candidate.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.total{\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.10),rgba(125, 150, 224, 0.10)),url(\"/assets/bag.jpg\");\r\n    height: 100vh;\r\n    min-width: 100%;\r\n   background-position: center;\r\n       background-size: cover;\r\n       background-repeat: no-repeat;\r\n       padding-top: 40px;\r\n}\r\n\r\n*/\r\n\r\n\r\n\r\n\r\n.searchbar{\r\n        margin-bottom: auto;\r\n        margin-top: auto;\r\n        height: 60px;\r\n        background-color: blue;\r\n        border-radius: 30px;\r\n        padding: 10px;\r\n        \r\n        }\r\n\r\n\r\n\r\n\r\n.search_input{\r\n        color: white;\r\n        border: 0;\r\n        outline: 0;\r\n        background: none;\r\n        width: 0;\r\n        caret-color:transparent;\r\n        line-height: 40px;\r\n        transition: width 0.4s linear;\r\n        }\r\n\r\n\r\n\r\n\r\n.searchbar:hover > .search_input{\r\n        padding: 0 10px;\r\n        width: 450px;\r\n        caret-color:red;\r\n        transition: width 0.4s linear;\r\n        }\r\n\r\n\r\n\r\n\r\n.searchbar:hover > .search_icon{\r\n        background: white;\r\n        color: #e74c3c;\r\n        }\r\n\r\n\r\n\r\n\r\n.search_icon{\r\n        height: 40px;\r\n        width: 40px;\r\n        float: right;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        border-radius: 50%;\r\n        color:white;\r\n        }\r\n\r\n\r\n\r\n\r\n/*--------------------------------\r\n    .active-purple input[type=text] {\r\n   \r\n    box-shadow: 0 1px 0 0 #ce93d8;\r\n    width: 500px;\r\n    margin-left: 250px;\r\n    -webkit-transition: width 0.4s ease-in-out;\r\n    transition: width 0.4s ease-in-out;\r\n    }\r\n\r\n--------------------------------*/\r\n\r\n\r\n\r\n\r\n.container{\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.10),rgba(125, 150, 224, 0.10)),url(\"/assets/bag.jpg\");\r\n     height: 100vh;\r\n    min-width: 100%;\r\n   background-position: center;\r\n       background-size: cover;\r\n       background-repeat: no-repeat;\r\n       padding-top: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n.row{  \r\n    width: 1000px;\r\n    height: 300px;\r\n   padding: 50px 50px;\r\n   position: absolute;\r\n    top: 50%;\r\n    left: 40%;\r\n     -webkit-transform: translate(-50%,-50%);\r\n             transform: translate(-50%,-50%);  \r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n.row a{\r\n    margin-right: inherit;\r\n    font-size: 20px;\r\n   padding-top: inherit;\r\n   color: black;\r\n}\r\n\r\n\r\n\r\n\r\n.row i{\r\n    width: 26px;\r\n    float: left;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n.btn{\r\n    width: 150px;\r\n      padding: 10px;\r\n      border-radius: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n#dropdownMenuButton{\r\n    width: 150px;\r\n    height: 52px;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    color: black;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n.job{\r\n    padding-right: 55px;\r\n}\r\n\r\n\r\n\r\n\r\n#dropdownMenuButton i{\r\n    color: aliceblue;\r\n   \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2NhbmRpZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztFQVdFOzs7OztBQUtGO1FBQ1Esb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixjQUFjOztTQUViOzs7OztBQUVEO1FBQ0EsYUFBYTtRQUNiLFVBQVU7UUFDVixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCx3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLDhCQUE4QjtTQUM3Qjs7Ozs7QUFFRDtRQUNBLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLDhCQUE4QjtTQUM3Qjs7Ozs7QUFFRDtRQUNBLGtCQUFrQjtRQUNsQixlQUFlO1NBQ2Q7Ozs7O0FBRUQ7UUFDQSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsWUFBWTtTQUNYOzs7OztBQVFMOzs7Ozs7Ozs7O2tDQVU4Qjs7Ozs7QUFJbEM7SUFDSSw4R0FBOEc7S0FDN0csY0FBYztJQUNmLGdCQUFnQjtHQUNqQiw0QkFBNEI7T0FDeEIsdUJBQXVCO09BQ3ZCLDZCQUE2QjtPQUM3QixrQkFBa0I7Q0FDeEI7Ozs7O0FBR0Q7SUFDSSxjQUFjO0lBQ2QsY0FBYztHQUNmLG1CQUFtQjtHQUNuQixtQkFBbUI7SUFDbEIsU0FBUztJQUNULFVBQVU7S0FDVCx3Q0FBZ0M7YUFBaEMsZ0NBQWdDO0lBQ2pDLHVCQUF1QjtJQUN2QixvQkFBb0I7Q0FDdkI7Ozs7O0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0dBQ2pCLHFCQUFxQjtHQUNyQixhQUFhO0NBQ2Y7Ozs7O0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7O0dBRWxCOzs7OztBQUVIO0lBQ0ksYUFBYTtNQUNYLGNBQWM7TUFDZCxvQkFBb0I7Q0FDekI7Ozs7O0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjs7Ozs7QUFDRDtJQUNJLG9CQUFvQjtDQUN2Qjs7Ozs7QUFDRDtJQUNJLGlCQUFpQjs7Q0FFcEIiLCJmaWxlIjoic3JjL2FwcC9jYW5kaWRhdGUvY2FuZGlkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4udG90YWx7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxMjUsIDE1MCwgMjI0LCAwLjEwKSxyZ2JhKDEyNSwgMTUwLCAyMjQsIDAuMTApKSx1cmwoXCIvYXNzZXRzL2JhZy5qcGdcIik7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuLnNlYXJjaGJhcntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5zZWFyY2hfaW5wdXR7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgY2FyZXQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXR7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBjYXJldC1jb2xvcjpyZWQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaWNvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogI2U3NGMzYztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuc2VhcmNoX2ljb257XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIH0gIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAuYWN0aXZlLXB1cnBsZSBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgXHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2NlOTNkODtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxMjUsIDE1MCwgMjI0LCAwLjEwKSxyZ2JhKDEyNSwgMTUwLCAyMjQsIDAuMTApKSx1cmwoXCIvYXNzZXRzL2JhZy5qcGdcIik7XHJcbiAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuXHJcbi5yb3d7ICBcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICBwYWRkaW5nOiA1MHB4IDUwcHg7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7ICBcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5yb3cgYXtcclxuICAgIG1hcmdpbi1yaWdodDogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgcGFkZGluZy10b3A6IGluaGVyaXQ7XHJcbiAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ucm93IGl7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiNkcm9wZG93bk1lbnVCdXR0b257XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uam9ie1xyXG4gICAgcGFkZGluZy1yaWdodDogNTVweDtcclxufVxyXG4jZHJvcGRvd25NZW51QnV0dG9uIGl7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/candidate/candidate.component.html":
/*!****************************************************!*\
  !*** ./src/app/candidate/candidate.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-canhead></app-canhead>\n\n\n\n  <!-----------------------\n<body>\n  \n      <div class=\"container h-100\">\n        \n        <div class=\"d-flex justify-content-center h-100\">\n          <div class=\"searchbar\">\n             \n            <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Key Skills Search here...\">\n            <a href=\"#\" class=\"search_icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a>\n          \n          </div>\n        </div>\n        \n      </div>\n\n\n</body>\n------------>\n\n<!-----------------------------------------\n  <app-namescroll></app-namescroll>\n\n\n----------->\n\n\n\n\n \n<div class=\"container\">\n\n\n\n  <div class=\"row\">\n\n  <div class=\"col-md-3 bg\">\n\n     <button class=\"btn btn-primary\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n        <a routerLink=\"/editprofile\" routerLinkActive=\"active\">Edit Profile</a> </button> <br><br>\n        \n\n     <button class=\"btn btn-primary\">\n        <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\n        <a [routerLink]=\"['Chatterbox']\">Chatter Box</a> </button> <br><br>\n\n     <button class=\"btn btn-primary\"> \n        <i class=\"fa fa-hand-o-right\" aria-hidden=\"true\"></i>\n       <a class=\"job\" [routerLink]=\"['jobs']\">  Jobs </a> </button><br> <br> \n\n       \n\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"  ngbDropdownToggle>\n                <i class=\"fa fa-cogs\" aria-hidden=\"true\"></i>\n              Settings</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n              <button class=\"dropdown-item\">Change To Premium</button>\n              <button class=\"dropdown-item\">Change Password</button>\n              <button class=\"dropdown-item\">Logout</button>\n            </div>\n          </div>\n       \n  </div>\n\n  <div class=\"col-md-9\">\n    <router-outlet></router-outlet>\n  </div>\n</div> \n</div> \n\n\n\n<app-subfooter></app-subfooter>"

/***/ }),

/***/ "./src/app/candidate/candidate.component.ts":
/*!**************************************************!*\
  !*** ./src/app/candidate/candidate.component.ts ***!
  \**************************************************/
/*! exports provided: CandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateComponent", function() { return CandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CandidateComponent = /** @class */ (function () {
    function CandidateComponent() {
    }
    CandidateComponent.prototype.ngOnInit = function () {
    };
    CandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate',
            template: __webpack_require__(/*! ./candidate.component.html */ "./src/app/candidate/candidate.component.html"),
            styles: [__webpack_require__(/*! ./candidate.component.css */ "./src/app/candidate/candidate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CandidateComponent);
    return CandidateComponent;
}());



/***/ }),

/***/ "./src/app/canhead/canhead.component.css":
/*!***********************************************!*\
  !*** ./src/app/canhead/canhead.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /*---navigation bar------*/\r\n  #nav-bar{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 10;\r\n\r\n   }\r\n  .navbar-brand img{\r\n    border-radius: 50%;\r\n      height: 50px;\r\n      padding-left: 30px;\r\n   \r\n   }\r\n  .navbar-nav li{\r\n      padding: 0 10px;\r\n      \r\n   }\r\n  .navbar-nav li a{\r\n      float: right;\r\n      text-align: left;\r\n      color: white;\r\n    }\r\n  .navbar-nav li i{\r\n      width: 26px;\r\n      float: left;\r\n      text-align: center;\r\n      margin-top: 10px;\r\n  \r\n    }\r\n  .navbar-toggler{\r\n        border: none!important;\r\n    }\r\n  .nav-link{\r\n        color: white;\r\n        font-weight: 600;\r\n        font-size: 16px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuaGVhZC9jYW5oZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUUsMkJBQTJCO0VBQzNCO0lBQ0UseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsWUFBWTs7SUFFWjtFQUNEO0lBQ0MsbUJBQW1CO01BQ2pCLGFBQWE7TUFDYixtQkFBbUI7O0lBRXJCO0VBSUQ7TUFDRyxnQkFBZ0I7O0lBRWxCO0VBQ0Q7TUFDRyxhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLGFBQWE7S0FDZDtFQUNEO01BQ0UsWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsaUJBQWlCOztLQUVsQjtFQUlEO1FBQ0ksdUJBQXVCO0tBQzFCO0VBQ0Q7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGdCQUFnQjtLQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NhbmhlYWQvY2FuaGVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKi0tLW5hdmlnYXRpb24gYmFyLS0tLS0tKi9cclxuICAjbmF2LWJhcntcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgIH1cclxuICAgLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICBcclxuICAgfVxyXG5cclxuICAgXHJcbiAgIFxyXG4gICAubmF2YmFyLW5hdiBsaXtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBcclxuICAgfVxyXG4gICAubmF2YmFyLW5hdiBsaSBhe1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IGxpIGl7XHJcbiAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIC5uYXZiYXItdG9nZ2xlcntcclxuICAgICAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5hdi1saW5re1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/canhead/canhead.component.html":
/*!************************************************!*\
  !*** ./src/app/canhead/canhead.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-primary \">\n      <a class=\"navbar-brand\" href=\"#\"> <img src=\"/assets/logoo.png\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n          <li class=\"nav-item\">\n              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n            <a class=\"nav-link\" href=\"#contactus\">Contact Us </a>\n          </li>\n         \n            <li class=\"nav-item\">\n                <i class=\"fa fa-spinner\" aria-hidden=\"true\"></i>\n              <a class=\"nav-link\"  href=\"#jobskills\">Job Skills</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                <a class=\"nav-link\"  href=\"#notifications\"> Notifications </a>\n              </li>\n           \n        </ul>\n      </div>\n     </nav>  \n  </section>\n  <!-------------------------------------------------------------------------------------------->\n\n\n "

/***/ }),

/***/ "./src/app/canhead/canhead.component.ts":
/*!**********************************************!*\
  !*** ./src/app/canhead/canhead.component.ts ***!
  \**********************************************/
/*! exports provided: CanheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanheadComponent", function() { return CanheadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanheadComponent = /** @class */ (function () {
    function CanheadComponent() {
    }
    CanheadComponent.prototype.ngOnInit = function () {
    };
    CanheadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canhead',
            template: __webpack_require__(/*! ./canhead.component.html */ "./src/app/canhead/canhead.component.html"),
            styles: [__webpack_require__(/*! ./canhead.component.css */ "./src/app/canhead/canhead.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CanheadComponent);
    return CanheadComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----------------Get In Touch----------*/\r\n#contact{\r\n    background: #efefef;\r\n    padding-top: 80px;\r\n    padding-bottom: 60px;\r\n    color: #777;   \r\n}\r\n.contact-form{\r\n    padding: 15px;\r\n}\r\n.form-control{\r\n    border-radius: 0 !important;\r\n    border: none !important;\r\n}\r\n::-webkit-input-placeholder{\r\n    color: #999 !important;\r\n}\r\n::-ms-input-placeholder{\r\n    color: #999 !important;\r\n}\r\n::placeholder{\r\n    color: #999 !important;\r\n}\r\n.follow{\r\n         background: #fff;\r\n          padding: 10px;\r\n          margin: 15px;\r\n}\r\n.contact-info .fa{\r\n    margin: 10px;\r\n    color: #007bff;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSx1QkFBdUI7Q0FDMUI7QUFGRDtJQUNJLHVCQUF1QjtDQUMxQjtBQUZEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBQ0Q7U0FDUyxpQkFBaUI7VUFDaEIsY0FBYztVQUNkLGFBQWE7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS1HZXQgSW4gVG91Y2gtLS0tLS0tLS0tKi9cclxuI2NvbnRhY3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGNvbG9yOiAjNzc3OyAgIFxyXG59XHJcbi5jb250YWN0LWZvcm17XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICM5OTkgIWltcG9ydGFudDtcclxufVxyXG4uZm9sbG93e1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTVweDtcclxufVxyXG4uY29udGFjdC1pbmZvIC5mYXtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--------------------------Get in Touch------------------------------>\n<section id=\"contact\">\n    <div class=\"container\">\n       <h1> Get In Touch</h1>\n       <div class=\"row\">\n         <div class=\"col-md-6\">\n            <form class=\"contact-form\"  #f=\"ngForm\" novalidate>\n              <div class=\"form-group\">\n                 \n                  <input type=\"text\" placeholder=\"Enter Your  Name\" class=\"form-control\"\n                    [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':f.submitted && firstName.invalid}\" name=\"firstName\" required />\n                  <div class=\"invalid-feedback\">\n                    <div>Your is Required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  \n                  <input type=\"number\" placeholder=\"Enter Your Mobile Number\" class=\"form-control\"\n                    [(ngModel)]=\"model.number\" #number=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':f.submitted && number.invalid}\" name=\"number\" required />\n                  <div class=\"invalid-feedback\">\n                    <div>Mobile Number is Required</div>\n                  </div>\n             </div>\n             <div class=\"form-group\">\n                \n                <input type=\"text\" placeholder=\"Enter Your Email\" class=\"form-control\" [(ngModel)]=\"model.email\"\n                  #email=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && email.invalid}\" name=\"email\" required\n                  email />\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                  <div *ngIf=\"email.errors.required\">Email is Required</div>\n                  <div *ngIf=\"email.errors.email\">Email must be a valid email adress</div>\n                </div>\n             </div>\n             <div class=\"form-group\">\n               <textarea class=\"form-control\" rows=\"4\" placeholder=\"Message\"></textarea>\n             </div>\n             <button type=\"submit\" class=\"btn btn-primary\">Send Message</button>\n            </form>\n         </div>\n         <div class=\"col-md-6 contact-info\">\n            <div class=\"follow\"><b>Address:</b><i class=\"fa fa-map-marker\"></i> <pre class=\" text-info\">\n              Letsgettin - E-city Phase-2 ;\n                 17-B,2nd Floor,SBI Bank,\n                 Opp Tata power Solar,\n                 Hosur Road, Electronic city Phase-2 \n                  Bangalore : 560100.\n  </pre>\n  </div>\n           <div class=\"follow\"><b>Phone:</b><i class=\"fa fa-phone\"></i>+91-9876543210</div>  \n         <div class=\"follow\"><b>Email:</b><i class=\"fa fa-envelope-o\"></i>letsgettin@qubarter.com</div>\n         <div class=\"follow\"><label><b>Get Social:</b></label>\n           <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n           <a href=\"#\"><i class=\"fa fa-youtube-play\"></i></a>\n           <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n           <a href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\n       </div>\n         </div>\n       </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.model = {};
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/editprofile/editprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <ngb-tabset #t=\"ngbTabset\">\n    <ngb-tab id=\"tab-selectbyid1\" title=\"Personal Details\">\n      <ng-template ngbTabContent>\n\n        <div class=\"container register1\">\n          <form [formGroup]=\"reactiveForm\">\n\n            <div class=\"row1\">\n              <div class=\"col-md-12\">\n\n                <div class=\"row register1-form\">   \n                \n                <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Change Your Name\" name=\"name\"\n                    formControlName=\"name\">\n\n                  <div\n                    *ngIf=\"reactiveForm.controls.name.errors && (reactiveForm.controls.name.touched || reactiveForm.controls.name.dirty)\"\n                    style=\"color: blue\">\n                    <div *ngIf=\"reactiveForm.hasError('pattern','name')\"> Name is invalid</div>\n                    <div *ngIf=\"reactiveForm.hasError('minlength','name')\"> Name is must be 3 min</div>\n\n                  </div>\n                </div>\n\n              </div>\n\n\n\n\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"address\">Address</label>\n                  <input type=\"text\" id=\"address\" name=\"address\" class=\"form-control\" placeholder=\"Change Your address\"\n                    formControlName=\"address\">\n                  <div\n                    *ngIf=\"reactiveForm.controls.address.errors && (reactiveForm.controls.address.touched || reactiveForm.controls.address.touched)\"\n                    style=\"color:blue\">\n                  </div>\n\n                </div>\n\n              </div>\n     \n\n             <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"phoneNumber\">Phone Number</label>\n                  <input type=\"Text\" id=\"phoneNumber\" class=\"form-control\" name=\"phoneNumber\"\n                    placeholder=\"Change Your Number\" formControlName=\"phoneNumber\">\n                  <div\n                    *ngIf=\"reactiveForm.controls.phoneNumber.errors && (reactiveForm.controls.phoneNumber.touched || reactiveForm.controls.phoneNumber.dirty)\"\n                    style=\"color:blue\">\n                    <div *ngIf=\"reactiveForm.hasError('pattern','phoneNumber')\"> phoneNumber is invalid</div>\n\n                  </div>\n\n                </div>\n             </div>\n\n                </div>\n\n                <div class=\"row register2-form\">\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\" id=\"anydegree\" style=\"color:rgb(240, 15, 191)\">\n                    <label>Any PostGraduation *</label>\n                  </div>\n                </div>\n\n\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"ugCourse\"> Course:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"ugCourse\" placeholder=\"UG\" name=\"ugCourse\"\n                      formControlName=\"ugCourse\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.ugCourse.errors && (reactiveForm.controls.ugCourse.touched || reactiveForm.controls.ugCourse.dirty)\"\n                      style=\"color:red\">\n\n                      <div *ngIf=\"reactiveForm.hasError('pattern','ugCourse')\">\n                        Course is Invalid Format\n                      </div>\n\n\n                    </div>\n                  </div>\n\n                </div>\n\n\n\n                <div class=\"col-md-4\">\n\n                  <div class=\"form-group\">\n                    <label for=\"ugSpecialization\"> Speciliazation:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"ugSpecialization\" name=\"ugSpecialization\"\n                      formControlName=\"ugSpecialization\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.ugSpecialization.errors && (reactiveForm.controls.ugSpecialization.touched || reactiveForm.controls.ugSpecialization.dirty)\"\n                      style=\"color:red\">\n\n                      <div *ngIf=\"reactiveForm.hasError('pattern','ugSpecialization')\">\n                        Speciliazation is Invalid Format\n                      </div>\n\n                    </div>\n\n                  </div>\n                </div>\n\n\n                <div class=\"col-md-4\">\n\n                  <div class=\"form-group\">\n                    <label for=\"university_or_institute\"> University:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"university_or_institute\" name=\"university_or_institute\"\n                      formControlName=\"university_or_institute\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.university_or_institute.errors && (reactiveForm.controls.university_or_institute.touched || reactiveForm.controls.university_or_institute.dirty)\"\n                      style=\"color:red\">\n\n                      <div *ngIf=\"reactiveForm.hasError('pattern','university_or_institute')\">\n                        university is Invalid Format\n                      </div>\n\n                    </div>\n\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\">\n\n                  <div class=\"form-group\">\n                    <label> courseType * </label> <br>\n                    <label for=\"courseType\">Full Time</label>\n                    <input class=\"radio1\" type=\"radio\" value=\"Full Time\" formControlName=\"courseType\">\n                    <label for=\"courseType\">Part Time</label>\n                    <input class=\"radio1\" type=\"radio\" value=\"Part Time\" formControlName=\"courseType\">\n                    <label for=\"courseType\">Correspondece</label>\n                    <input class=\"radio1\" type=\"radio\" value=\"Correspondece\" formControlName=\"courseType\">\n                  </div>\n\n\n\n                </div>\n\n\n\n\n\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"passed_out_year\"> Passed Out year:</label>\n                    <input type=\"number\" class=\"form-control\" id=\"passed_out_year\" name=\"passed_out_year\"\n                      formControlName=\"passed_out_year\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.passed_out_year.errors && (reactiveForm.controls.passed_out_year.touched || reactiveForm.controls.passed_out_year.dirty)\"\n                      style=\"color:red\">\n\n                      <div *ngIf=\"reactiveForm.hasError('pattern','passed_out_year')\">\n                        university is Invalid Format\n                      </div>\n\n                    </div>\n                  </div>\n\n                </div>\n\n\n                <div class=\"col-md-4\">\n\n                  <div class=\"form-group\">\n                    <label>Grading System *</label><br>\n                    <select class=\"form-control\" id=\"gradingSystem\" formControlName=\"gradingSystem\">\n                      <option *ngFor=\"let gradingSystem of gradings\" [value]=\"gradingSystem.id\">{{gradingSystem.name}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n\n\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"marks\"> Marks:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"marks\" name=\"marks\" formControlName=\"marks\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.marks.errors && (reactiveForm.controls.marks.touched || reactiveForm.controls.marks.dirty)\"\n                      style=\"color:red\">\n                      <div *ngIf=\"reactiveForm.hasError('pattern','marks')\">\n                        Marks is Invalid Format\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\" id=\"sa\">\n                    <label for=\"file\">Upload Certificate</label>\n                    <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileGraduation($event)\"\n                      style=\"height:100%\">\n                  </div>\n\n                </div>\n\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label> Skills </label> <br>\n                    <input type=\"text\" placeholder=\"Enter Your Skills\" class=\"form-control\" id=\"skills\" name=\"skills\"\n                      formControlName=\"skills\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.skills.errors && (reactiveForm.controls.skills.touched || reactiveForm.controls.skills.dirty)\"\n                      style=\"color:red\">\n                    </div>\n\n                  </div>\n                </div>\n\n\n\n\n\n\n                <div class=\"col-md-5\">\n                  <div class=\"form-group\">\n                    <label for=\"file\">Upload Skills Certificate</label>\n                    <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileSkills($event)\" style=\"height:100%\">\n                  </div>\n\n                </div>\n\n                </div>\n\n\n                <p>\n                  <button class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Next</button>\n                </p>\n\n\n\n              </div>\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n\n\n\n\n\n\n\n\n\n\n    <ngb-tab id=\"tab-selectbyid2\">\n      <ng-template ngbTabTitle>Proffesional Details</ng-template>\n      <ng-template ngbTabContent>\n\n\n\n\n        <div class=\"container register\">\n          <form [formGroup]=\"reactiveForm\">\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n\n                  <div class=\"row register2-form\">\n\n                    <div class=\"col-md-12\">\n                  <div class=\"form-group\" id=\"experience_category1\" style=\"color:rgb(240, 15, 191)\">\n                      <label>Experience *</label>\n                    </div>\n                    </div>\n\n                    <div class=\"col-md-5\">\n                        <div class=\"form-group\">\n                          <input type=\"number\" id=\"total_experience_in_years\" name=\"total_experience_in_years\"\n                            class=\"form-control\" placeholder=\"Years\" formControlName=\"total_experience_in_years\">\n    \n    \n                          <div\n                            *ngIf=\"reactiveForm.controls.total_experience_in_years.errors && \n                                  (reactiveForm.controls.total_experience_in_years.touched || reactiveForm.controls.total_experience_in_years.dirty)\">\n                            <div *ngIf=\"reactiveForm.hasError('required','total_experience_in_years')\">required</div>\n    \n                          </div>\n                        </div>\n                      </div>\n    \n                \n    \n                      <div class=\"col-md-5\">\n                        <div class=\"form-group\">\n                          <input type=\"number\" id=\"total_experience_in_months\" name=\"total_experience_in_months\"\n                            class=\"form-control\" placeholder=\"Total Months\" formControlName=\"total_experience_in_months\">\n                          <div\n                            *ngIf=\"reactiveForm.controls.total_experience_in_months.errors && \n                               (reactiveForm.controls.total_experience_in_months.touched || reactiveForm.controls.total_experience_in_months.dirty)\">\n                            <div *ngIf=\"reactiveForm.hasError('required','total_experience_in_months')\">Required</div>\n                          </div>\n    \n                        </div>\n                      </div>\n\n\n\n\n\n                      <div class=\"col-md-5\">\n                          <div class=\"form-group\">\n                             <input type=\"number\" id=\"relevant_experience_in_years\" name=\"relevant_experience_in_years\"\n                                     class=\"form-control\" placeholder=\"relevant_experience_in_years\" formControlName=\"relevant_experience_in_years\">\n                                     <div\n                                     *ngIf=\"reactiveForm.controls.relevant_experience_in_years.errors && \n                                        (reactiveForm.controls.relevant_experience_in_years.touched || reactiveForm.controls.relevant_experience_in_years.dirty)\">\n                                     <div *ngIf=\"reactiveForm.hasError('required','relevant_experience_in_years')\"> Required</div>\n                                   </div>\n         \n                          </div>\n                        </div>\n         \n         \n                        <div class=\"col-md-5\">\n                          <div class=\"form-group\">\n                            <input type=\"number\" id=\"relevant_experience_in_months\" name=\"relevant_experience_in_months\" class=\"form-control\"\n                            placeholder=\"relevant_experience_in_months\" formControlName=\"relevant_experience_in_months\">\n                            <div *ngIf=\"reactiveForm.controls.relevant_experience_in_months.errors && \n                            (reactiveForm.controls.relevant_experience_in_months.touched || reactiveForm.controls.relevant_experience_in_months.dirty)\">\n                            <div *ngIf=\"reactiveForm.hasError('required','relevant_experience_in_months')\">Required</div>\n         \n                            </div>\n         \n                          </div>\n                        </div>\n\n\n\n\n                        <div class=\"col-md-5\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" id=\"current_ctc\" name=\"current_ctc\" class=\"form-control\" placeholder=\"current_ctc\"\n                              formControlName=\"current_ctc\">\n                              <div *ngIf=\"reactiveForm.controls.current_ctc.errors && \n                              (reactiveForm.controls.current_ctc.touched || reactiveForm.controls.current_ctc.dirty)\">\n                                <div *ngIf=\"reactiveForm.hasError('required','current_ctc')\"> Required </div>\n                              </div>\n    \n                            </div>\n                          </div>\n    \n                          <div class=\"col-md-5\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" id=\"noticePeriod_in_days\" name=\"noticePeriod_in_days\" class=\"form-control\" placeholder=\"noticePeriod_in_days\"\n                              formControlName=\"noticePeriod_in_days\">\n                              <div *ngIf=\"reactiveForm.controls.noticePeriod_in_days.errors && \n                              (reactiveForm.controls.noticePeriod_in_days.touched || reactiveForm.controls.noticePeriod_in_days.dirty)\">\n                              <div *ngIf=\"reactiveForm.hasError('required','noticePeriod_in_days')\"> Required</div>\n    \n                              </div>\n    \n                            </div>\n                          </div>\n    \n\n\n\n\n\n\n             </div>\n\n              </div>\n            </div>\n          </form>\n        </div>\n\n\n\n\n\n\n\n\n        <p>\n          <button class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid3')\">Next</button>\n        </p>\n        <p>\n          <button class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid1')\">Previous</button>\n        </p>\n\n      </ng-template>\n\n    </ngb-tab>\n\n    <ngb-tab id=\"tab-selectbyid3\">\n      <ng-template ngbTabTitle>Updated Resume</ng-template>\n      <ng-template ngbTabContent>\n\n        <div class=\"container register1\">\n          <form [formGroup]=\"reactiveForm\">\n\n            <div class=\"row1\">\n              <div class=\"col-md-12\">\n\n\n                  <div class=\"form-group\">\n                      <label for=\"file\">Upload Resume</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\" style=\"height:100%\">\n                    </div>\n\n\n\n                </div>\n                </div>\n                </form>\n                </div>\n\n        <p>\n          <button class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Previous</button>\n        </p>\n\n      </ng-template>\n    </ngb-tab>\n\n  </ngb-tabset>\n</div>"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.ts ***!
  \******************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(fb) {
        this.fb = fb;
        this.reactiveForm = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
        this.userFile = File;
        this.userFiles = FileList;
        this.gradings = [{ 'id': 1, 'name': 'scale 10' }, { 'id': 2, 'name': 'scale 5' }, { 'id': 3, 'name': '%marks of 100max' }];
    }
    EditprofileComponent.prototype.onSelectFile = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    EditprofileComponent.prototype.onSelectFileGraduation = function (event) {
        var file = event.target.files;
        this.userFiles = file;
    };
    EditprofileComponent.prototype.onSelectFileSkills = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    EditprofileComponent.prototype.ngOnInit = function () {
        this.reactiveForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z0-9!@#$%^&*()_+]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)
                ])]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14)
                ])]),
            ugCourse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            ugSpecialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            university_or_institute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            courseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            passed_out_year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            gradingSystem: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            total_experience_in_years: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            total_experience_in_months: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            relevant_experience_in_years: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            relevant_experience_in_months: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            current_ctc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            noticePeriod_in_days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
        });
    };
    EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(/*! ./editprofile.component.html */ "./src/app/editprofile/editprofile.component.html"),
            styles: [__webpack_require__(/*! ./editprofile.component.css */ "./src/app/editprofile/editprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/experience.service.ts":
/*!***************************************!*\
  !*** ./src/app/experience.service.ts ***!
  \***************************************/
/*! exports provided: ExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ExperienceService = /** @class */ (function () {
    function ExperienceService(http) {
        this.http = http;
        this.url = "http://192.168.43.141:3005/jobseeker/experience/check";
        this.http = http;
    }
    ExperienceService.prototype.registerFresher = function (formData) {
        return this.http.post(this.url, formData);
        /* return this.http.post(this.url,{
           "firstName": firstname,
           "lastName":lastname
         })*/
    };
    ExperienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExperienceService);
    return ExperienceService;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n    min-height: 99vh;\r\n    min-width: 100%;\r\n    margin-top: 0%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.register-left{\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-top: 4%;\r\n}\r\n\r\n.register-left input{\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    width: 60%;\r\n    background: #f8f9fa;\r\n    font-weight: bold;\r\n    color: #383d41;\r\n    margin-top: 30%;\r\n    margin-bottom: 3%;\r\n    cursor: pointer;\r\n}\r\n\r\n.register-right{\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.10),rgba(125, 150, 224, 0.10)),url(\"/assets/bag.jpg\");\r\n  background-image: no-repeat;\r\n    border-top-left-radius: 10% 50%;\r\n    border-bottom-left-radius: 10% 50%;\r\n}\r\n\r\n.register-left img{\r\n    margin-top: 15%;\r\n    margin-bottom: 5%;\r\n    width: 25%;\r\n    -webkit-animation: mover 2s infinite  alternate;\r\n    animation: mover 1s infinite  alternate;\r\n}\r\n\r\n@-webkit-keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n\r\n@keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n\r\n.register-left p{\r\n    font-weight: lighter;\r\n    padding: 12%;\r\n    margin-top: -9%;\r\n}\r\n\r\n.register .register-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-top: 2%;   \r\n}\r\n\r\n.register .register1-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-top: -12%;\r\n    margin-bottom: -15%;\r\n}\r\n\r\n.register .register2-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-bottom: -7%;   \r\n}\r\n\r\n.reactiveform{\r\n    padding: 20px;\r\n    margin-left: 70px;\r\n    margin-top: 0px;\r\n    padding-top: 0%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.reactiveform .btn{\r\n    margin-left: 200px;\r\n    width: 10%;\r\n    height: 35px;    \r\n}\r\n\r\n.radio{\r\n    /*------------gender radio button-----------*/\r\n    margin-left: 3px;\r\n}\r\n\r\n.radio1{\r\n    /*------------course type-----------*/\r\n    margin-left: 3px;\r\n}\r\n\r\n.reactiveform .btnd{\r\n    /*------------btnd is a class of grading system-----------*/\r\n    height: 38px;\r\n    width: 65%;\r\n   \r\n}\r\n\r\n#board1{\r\n     /*---------------- ssc board label ---------------------------*/\r\n    margin-top: -34Px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n#board{\r\n    /*---------------- ssc board ---------------------------*/\r\n   margin-top: -35Px;\r\n   margin-bottom: 40px;\r\n}\r\n\r\n#inter_category1{\r\n    /*---------------- category for ipe ---------------------------*/\r\n  margin-bottom: 1px;\r\n}\r\n\r\n#inter_category{\r\n      /*---------------- inter categeory---------------------------*/\r\n   margin-top: -1Px;\r\n   margin-bottom: 40px;\r\n}\r\n\r\n#ssc_percentage{\r\n     /*----------------ssc %---------------------------*/\r\n    margin-top: -34Px;\r\n   \r\n}\r\n\r\n#ssc_school{\r\n    /*----------------ssc school---------------------------*/\r\n   margin-top: -34Px;\r\n  \r\n}\r\n\r\n#ssc_school_location{\r\n    /*----------------ssc location---------------------------*/\r\n   margin-top: -34Px;\r\n  \r\n}\r\n\r\n.btnc{\r\n    /*----------------btnc is a class of grading system dropdown---------------------------*/\r\n    height: 38px;\r\n    margin-bottom:13%; \r\n}\r\n\r\n.reactiveform.form-group{\r\n    padding: 20%;\r\n}\r\n\r\n#sa{\r\n   /*-------------this sa id is for upload certificate----------------------*/\r\n   color: blue;\r\n    padding-top: 4px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.btnm{\r\n    /*---------------------this is for next button------------------------------------*/\r\n    border-radius: 100%;\r\n    margin-left: 200px;\r\n    width: 30%;\r\n    height: 35px;\r\n    margin-top: 10%;\r\n    \r\n}\r\n\r\n.btnm1{\r\n    /*---------------------this is for next button in educational details------------------------------------*/\r\n   margin-left: 500px;\r\n    width: 15%;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    border-radius: 100%;    \r\n}\r\n\r\n.btnp{\r\n    /*---------------------this is for previous button in educational details------------------------------------*/\r\n   margin-left: 100px;\r\n   border-radius: 100%;\r\n   width: 15%;\r\n   margin-top: 0%;\r\n  \r\n}\r\n\r\n.btnp1{\r\n    /*---------------------this is for previous button in experience details------------------------------------*/\r\n   margin-left: -360px;\r\n   border-radius: 100%;\r\n   width: 18%;\r\n   margin-top: 0%;\r\n   height: 40px;\r\n  \r\n}\r\n\r\n#anydegree{\r\n    margin-top: 0px;\r\n}\r\n\r\n.btn1{\r\n    /*--------------------This is for submit--------------------------*/\r\n    margin-left: 400px;\r\n    width:15%;\r\n    height: 43px;\r\n    margin-bottom: 20px;\r\n\r\n}\r\n\r\n/*\r\n.close-icon{\r\n    display:block;\r\n    box-sizing: border-box;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-style: solid;\r\n    border-color: blue;\r\n    border-radius: 100%;\r\n    background: -webkit-linear-gradient(-45deg,transparent 0% transparent 0% transparent 46%\r\n    white 46% white 56% transparent 56% transparent 100%);\r\n    background-color: blue;\r\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);\r\n    transition:all 0.3s ease;\r\n    float: right;\r\n}\r\n*/\r\n\r\n.row .register3-form{\r\n    \r\n    padding-left: 76px;\r\n    margin-top: -3%;\r\n   \r\n}\r\n\r\n#experience_category1{\r\n    /*---------------- experience_category1  label ---------------------------*/\r\n  margin-left: -17px;\r\n  margin-top: 65px;\r\n}\r\n\r\n#companydetails{\r\n    /*---------------- companydaetails  label ---------------------------*/\r\n  margin-left: 40px;\r\n  \r\n}\r\n\r\n.btnadd{\r\n    /*-------------------------Add company Button----------------------------------*/\r\n    margin-left: 450px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.row .register4-form{\r\n    margin-left: 60px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.row .register5-form{\r\n    margin-left: 60px; \r\n}\r\n\r\n.row .register6-form{\r\n    margin-left: 60px;\r\n    margin-bottom: 25px; \r\n   \r\n}\r\n\r\n.row .register7-form{\r\n    margin-left: 60px; \r\n    margin-bottom: 25px;\r\n}\r\n\r\n#relaventcompanydetails{\r\n/*----------------Relavent companydaetails  label ---------------------------*/\r\nmargin-left: 40px;\r\n}\r\n\r\n.btnrel{\r\n    /*-------------------------Add Relaventcompany Button----------------------------------*/\r\n    margin-left: 450px;\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n/*----------------------------------------------\r\n.container{\r\n    background-position: center;\r\n     background-size: cover;\r\n     background-repeat: no-repeat;\r\n     }\r\nh2{\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n}\r\n.register{\r\n width: 500px;\r\n  margin: 10px 0px 10px 250px;\r\n   font-size: 15px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    \r\n}\r\n#register{\r\n    margin-left: 50px;\r\n}\r\nlabel{\r\n\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    \r\n}\r\n#name{\r\n    width: 200px;\r\n    border: none;\r\n    border-radius: 3px;\r\n    outline: 0;\r\n    padding: 3px;\r\n}\r\n.register input{\r\n    font-size: 12px;\r\n    color: rgb(10, 147, 238);\r\n}\r\n#sub{\r\n    width: 50%;\r\n    background: lightblue;\r\n    padding: 5px;\r\n    font-size: 10px;\r\n    cursor: pointer;\r\n    margin-right:10px;\r\n    }\r\n----------------------------------*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0REFBNEQ7SUFDNUQsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksOEdBQThHO0VBQ2hILDRCQUE0QjtJQUMxQixnQ0FBZ0M7SUFDaEMsbUNBQW1DO0NBQ3RDOztBQUdEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0RBQWdEO0lBQ2hELHdDQUF3QztDQUMzQzs7QUFDRDtJQUNJLEtBQUssaUNBQXlCLENBQXpCLHlCQUF5QixFQUFFO0lBQ2hDLE9BQU8scUNBQTZCLENBQTdCLDZCQUE2QixFQUFFO0NBQ3pDOztBQUNEO0lBQ0ksS0FBSyxpQ0FBeUIsQ0FBekIseUJBQXlCLEVBQUU7SUFDaEMsT0FBTyxxQ0FBNkIsQ0FBN0IsNkJBQTZCLEVBQUU7Q0FDekM7O0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjs7QUFHRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7QUFDRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtDQUNoQjs7QUFDRDtJQUNJLDhDQUE4QztJQUM5QyxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksNERBQTREO0lBQzVELGFBQWE7SUFDYixXQUFXOztDQUVkOztBQUNEO0tBQ0ssZ0VBQWdFO0lBQ2pFLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7O0FBQ0Q7SUFDSSwwREFBMEQ7R0FDM0Qsa0JBQWtCO0dBQ2xCLG9CQUFvQjtDQUN0Qjs7QUFDRDtJQUNJLGlFQUFpRTtFQUNuRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7TUFDTSwrREFBK0Q7R0FDbEUsaUJBQWlCO0dBQ2pCLG9CQUFvQjtDQUN0Qjs7QUFDRDtLQUNLLG9EQUFvRDtJQUNyRCxrQkFBa0I7O0NBRXJCOztBQUNEO0lBQ0kseURBQXlEO0dBQzFELGtCQUFrQjs7Q0FFcEI7O0FBQ0Q7SUFDSSwyREFBMkQ7R0FDNUQsa0JBQWtCOztDQUVwQjs7QUFJRDtJQUNJLHlGQUF5RjtJQUN6RixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtHQUNHLDJFQUEyRTtHQUMzRSxZQUFZO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLG9GQUFvRjtJQUNwRixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCOztDQUVuQjs7QUFDRDtJQUNJLDJHQUEyRztHQUM1RyxtQkFBbUI7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksK0dBQStHO0dBQ2hILG1CQUFtQjtHQUNuQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLGVBQWU7O0NBRWpCOztBQUNEO0lBQ0ksOEdBQThHO0dBQy9HLG9CQUFvQjtHQUNwQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLGVBQWU7R0FDZixhQUFhOztDQUVmOztBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksb0VBQW9FO0lBQ3BFLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjs7Q0FFdkI7O0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBRUY7O0lBRUksbUJBQW1CO0lBQ25CLGdCQUFnQjs7Q0FFbkI7O0FBQ0Q7SUFDSSw0RUFBNEU7RUFDOUUsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjs7QUFDRDtJQUNJLHVFQUF1RTtFQUN6RSxrQkFBa0I7O0NBRW5COztBQUNEO0lBQ0ksaUZBQWlGO0lBQ2pGLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjs7Q0FFdkI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0FBQ0EsK0VBQStFO0FBQy9FLGtCQUFrQjtDQUNqQjs7QUFFRDtJQUNJLHlGQUF5RjtJQUN6RixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQjs7QUF3QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQStDb0MiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlcntcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzOTMxYWYsICMwMGM2ZmYpO1xyXG4gICAgbWluLWhlaWdodDogOTl2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1sZWZ0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4ucmVnaXN0ZXItbGVmdCBpbnB1dHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzgzZDQxO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlZ2lzdGVyLXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMTI1LCAxNTAsIDIyNCwgMC4xMCkscmdiYSgxMjUsIDE1MCwgMjI0LCAwLjEwKSksdXJsKFwiL2Fzc2V0cy9iYWcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xyXG59XHJcblxyXG5cclxuLnJlZ2lzdGVyLWxlZnQgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZXIge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgcGFkZGluZzogMTIlO1xyXG4gICAgbWFyZ2luLXRvcDogLTklO1xyXG59XHJcblxyXG5cclxuLnJlZ2lzdGVyIC5yZWdpc3Rlci1mb3Jte1xyXG4gICAgcGFkZGluZzogNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcclxuICAgIG1hcmdpbi10b3A6IDIlOyAgIFxyXG59XHJcbi5yZWdpc3RlciAucmVnaXN0ZXIxLWZvcm17XHJcbiAgICBwYWRkaW5nOiA3JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNSU7XHJcbn1cclxuLnJlZ2lzdGVyIC5yZWdpc3RlcjItZm9ybXtcclxuICAgIHBhZGRpbmc6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNyU7ICAgXHJcbn1cclxuLnJlYWN0aXZlZm9ybXtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJlYWN0aXZlZm9ybSAuYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMzVweDsgICAgXHJcbn1cclxuLnJhZGlve1xyXG4gICAgLyotLS0tLS0tLS0tLS1nZW5kZXIgcmFkaW8gYnV0dG9uLS0tLS0tLS0tLS0qL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4ucmFkaW8xe1xyXG4gICAgLyotLS0tLS0tLS0tLS1jb3Vyc2UgdHlwZS0tLS0tLS0tLS0tKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuLnJlYWN0aXZlZm9ybSAuYnRuZHtcclxuICAgIC8qLS0tLS0tLS0tLS0tYnRuZCBpcyBhIGNsYXNzIG9mIGdyYWRpbmcgc3lzdGVtLS0tLS0tLS0tLS0qL1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgXHJcbn1cclxuI2JvYXJkMXtcclxuICAgICAvKi0tLS0tLS0tLS0tLS0tLS0gc3NjIGJvYXJkIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBtYXJnaW4tdG9wOiAtMzRQeDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuI2JvYXJke1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tIHNzYyBib2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tdG9wOiAtMzVQeDtcclxuICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4jaW50ZXJfY2F0ZWdvcnkxe1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tIGNhdGVnb3J5IGZvciBpcGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbiNpbnRlcl9jYXRlZ29yeXtcclxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tIGludGVyIGNhdGVnZW9yeS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgIG1hcmdpbi10b3A6IC0xUHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuI3NzY19wZXJjZW50YWdle1xyXG4gICAgIC8qLS0tLS0tLS0tLS0tLS0tLXNzYyAlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIG1hcmdpbi10b3A6IC0zNFB4O1xyXG4gICBcclxufVxyXG4jc3NjX3NjaG9vbHtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLXNzYyBzY2hvb2wtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tdG9wOiAtMzRQeDtcclxuICBcclxufVxyXG4jc3NjX3NjaG9vbF9sb2NhdGlvbntcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLXNzYyBsb2NhdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgIG1hcmdpbi10b3A6IC0zNFB4O1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbi5idG5je1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tYnRuYyBpcyBhIGNsYXNzIG9mIGdyYWRpbmcgc3lzdGVtIGRyb3Bkb3duLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTMlOyBcclxufVxyXG4ucmVhY3RpdmVmb3JtLmZvcm0tZ3JvdXB7XHJcbiAgICBwYWRkaW5nOiAyMCU7XHJcbn1cclxuXHJcbiNzYXtcclxuICAgLyotLS0tLS0tLS0tLS0tdGhpcyBzYSBpZCBpcyBmb3IgdXBsb2FkIGNlcnRpZmljYXRlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgIGNvbG9yOiBibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmJ0bm17XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLXRoaXMgaXMgZm9yIG5leHQgYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgXHJcbn1cclxuLmJ0bm0xe1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS10aGlzIGlzIGZvciBuZXh0IGJ1dHRvbiBpbiBlZHVjYXRpb25hbCBkZXRhaWxzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTsgICAgXHJcbn1cclxuLmJ0bnB7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLXRoaXMgaXMgZm9yIHByZXZpb3VzIGJ1dHRvbiBpbiBlZHVjYXRpb25hbCBkZXRhaWxzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICB3aWR0aDogMTUlO1xyXG4gICBtYXJnaW4tdG9wOiAwJTtcclxuICBcclxufVxyXG4uYnRucDF7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLXRoaXMgaXMgZm9yIHByZXZpb3VzIGJ1dHRvbiBpbiBleHBlcmllbmNlIGRldGFpbHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tbGVmdDogLTM2MHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICB3aWR0aDogMTglO1xyXG4gICBtYXJnaW4tdG9wOiAwJTtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gIFxyXG59XHJcbiNhbnlkZWdyZWV7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmJ0bjF7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tVGhpcyBpcyBmb3Igc3VibWl0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6MTUlO1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG4uY2xvc2UtaWNvbntcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZyx0cmFuc3BhcmVudCAwJSB0cmFuc3BhcmVudCAwJSB0cmFuc3BhcmVudCA0NiVcclxuICAgIHdoaXRlIDQ2JSB3aGl0ZSA1NiUgdHJhbnNwYXJlbnQgNTYlIHRyYW5zcGFyZW50IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuKi9cclxuXHJcbi5yb3cgLnJlZ2lzdGVyMy1mb3Jte1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDc2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgIFxyXG59XHJcbiNleHBlcmllbmNlX2NhdGVnb3J5MXtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLSBleHBlcmllbmNlX2NhdGVnb3J5MSAgbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBtYXJnaW4tbGVmdDogLTE3cHg7XHJcbiAgbWFyZ2luLXRvcDogNjVweDtcclxufVxyXG4jY29tcGFueWRldGFpbHN7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0gY29tcGFueWRhZXRhaWxzICBsYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIFxyXG59XHJcbi5idG5hZGR7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BZGQgY29tcGFueSBCdXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yb3cgLnJlZ2lzdGVyNC1mb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ucm93IC5yZWdpc3RlcjUtZm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4OyBcclxufVxyXG4ucm93IC5yZWdpc3RlcjYtZm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDsgXHJcbiAgIFxyXG59XHJcblxyXG4ucm93IC5yZWdpc3RlcjctZm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbiNyZWxhdmVudGNvbXBhbnlkZXRhaWxze1xyXG4vKi0tLS0tLS0tLS0tLS0tLS1SZWxhdmVudCBjb21wYW55ZGFldGFpbHMgIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbm1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRucmVse1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQWRkIFJlbGF2ZW50Y29tcGFueSBCdXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgIH1cclxuaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnJlZ2lzdGVye1xyXG4gd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAyNTBweDtcclxuICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxufVxyXG4jcmVnaXN0ZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5sYWJlbHtcclxuXHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIFxyXG59XHJcbiNuYW1le1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG4ucmVnaXN0ZXIgaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEwLCAxNDcsIDIzOCk7XHJcbn1cclxuI3N1YntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgIH1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIl19 */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--------------------------------------------------------->\n<div class=\"container\">\n  <ngb-tabset #t=\"ngbTabset\">\n    <ngb-tab id=\"tab-selectbyid1\" title=\"Personal Details\">\n      <ng-template ngbTabContent>\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n            <div class=\"row\">\n              <div class=\"col-md-3 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-9 register-right\">\n\n                <div class=\"row register-form\">\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label for=\"firstName\" style=\"color:blue\"> First Name * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter Your First Name\"\n                        name=\"firstName\" formControlName=\"firstName\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.firstName.errors && (reactiveForm.controls.firstName.touched || reactiveForm.controls.firstName.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','firstName')\"> FirstName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','firstName')\"> FirstName is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','firstName')\"> FirstName is must be 3 min</div>\n                      </div>\n\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label for=\"lastName\" style=\"color:blue\"> LastName * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter Your astName\"\n                        name=\"lastName\" formControlName=\"lastName\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.lastName.errors && (reactiveForm.controls.lastName.touched || reactiveForm.controls.lastName.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','lastName')\"> LastName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','lastName')\"> LastName is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','lastName')\"> LastName is must be 3 min</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"username\" style=\"color:blue\"> email * </label>\n                      <input type=\"email\" class=\"form-control\" id=\"username\" placeholder=\"Enter Your email\"\n                        name=\"username\" formControlName=\"username\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.username.errors && (reactiveForm.controls.username.touched || reactiveForm.controls.username.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','username')\"> email is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','username')\"> email is invalid</div>\n\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"password\" style=\"color:blue\"> password * </label>\n                      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Your password\"\n                        name=\"password\" formControlName=\"password\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.password.errors && (reactiveForm.controls.password.touched || reactiveForm.controls.password.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','password')\"> password is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','password')\"> password is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','password')\"> password is must be 6 min</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','password')\"> password is must be 10 max</div>\n                      </div>\n\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\"> Gender * </label> <br>\n                      <label for=\"gender\" style=\"color:blue\">Male</label>\n                      <input class=\"radio\" type=\"radio\" value=\"Male\" formControlName=\"gender\">\n                      <label for=\"gender\" style=\"color:blue\">Female</label>\n                      <input class=\"radio\" type=\"radio\" value=\"Female\" formControlName=\"gender\">\n                      <label for=\"gender\" style=\"color:blue\">Others</label>\n                      <input class=\"radio\" type=\"radio\" value=\"Others\" formControlName=\"gender\">\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                      <label for=\"address\" style=\"color:blue\"> address * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Enter Your address\"\n                        name=\"address\" formControlName=\"address\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.address.errors && (reactiveForm.controls.address.touched || reactiveForm.controls.address.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','address')\"> address is Required</div>\n\n                        <div *ngIf=\"reactiveForm.hasError('minlength','address')\"> address is must be 10 cha min</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"phoneNumber\" style=\"color:blue\"> phoneNumber * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" placeholder=\"Enter Your phoneNumber\"\n                        name=\"phoneNumber\" formControlName=\"phoneNumber\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.phoneNumber.errors && (reactiveForm.controls.phoneNumber.touched || reactiveForm.controls.phoneNumber.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','phoneNumber')\"> phoneNumber is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','phoneNumber')\"> phoneNumber is invalid</div>\n\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Resume</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\" style=\"height:100%\">\n                    </div>\n\n                    <p>\n                      <button class=\"btnm btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Next</button>\n                    </p>\n\n\n\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n    <ngb-tab id=\"tab-selectbyid2\">\n      <ng-template ngbTabTitle>Educational Details</ng-template>\n      <ng-template ngbTabContent>\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n            <div class=\"row\">\n              <div class=\"col-md-2 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-10 register-right\">\n\n\n\n                <div class=\"row register-form\">\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"board1\" style=\"color:blue\">\n                      <label>SSC Board *</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n\n                      <select class=\"form-control\" id=\"board\" formControlName=\"board\">\n                        <option *ngFor=\"let board of boards\" [value]=\"board.id\">{{board.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_percentage\" placeholder=\"ssc%\"\n                        name=\"ssc_percentage\" formControlName=\"ssc_percentage\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_percentage.errors && (reactiveForm.controls.ssc_percentage.touched || reactiveForm.controls.ssc_percentage.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_percentage')\"> ssc% is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_percentage')\"> ssc% is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','ssc_percentage')\"> ssc% is must be 3max</div>\n                      </div>\n\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_school\" placeholder=\"schoolName\" name=\"ssc_school\"\n                        formControlName=\"ssc_school\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_school.errors && (reactiveForm.controls.ssc_school.touched || reactiveForm.controls.ssc_school.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_school')\"> schoolName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_school')\"> schoolName is invalid</div>\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_school_location\" placeholder=\"location\"\n                        name=\"ssc_school_location\" formControlName=\"ssc_school_location\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_school_location.errors && (reactiveForm.controls.ssc_school_location.touched || reactiveForm.controls.ssc_school_location.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_school_location')\"> location is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_school_location')\"> schoollocation is invalid\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_passed_out_year\" placeholder=\"Year Of Pass\"\n                        name=\"ssc_passed_out_year\" formControlName=\"ssc_passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_passed_out_year.errors && (reactiveForm.controls.ssc_passed_out_year.touched || reactiveForm.controls.ssc_passed_out_year.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_passed_out_year')\"> Year of pass is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_passed_out_year')\"> year of pass is invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','ssc_passed_out_year')\"> Invalid Year</div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload SSC</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileSsc($event)\">\n                    </div>\n                  </div>\n\n                </div>\n             \n\n                <div class=\"row register1-form\">\n\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"inter_category1\" style=\"color:blue\">\n                      <label>Category *</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n\n                      <select class=\"form-control\" id=\"inter_category\" formControlName=\"inter_category\">\n                        <option *ngFor=\"let inter_category of inter_categories\" [value]=\"inter_category.id\">\n                          {{inter_category.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_percentage\" placeholder=\"%\"\n                        name=\"inter_percentage\" formControlName=\"inter_percentage\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_percentage.errors && (reactiveForm.controls.inter_percentage.touched || reactiveForm.controls.inter_percentage.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_percentage')\"> IPE/DIP% is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_percentage')\"> IPE/DIP% is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','inter_percentage')\"> IPE/DIP% is must be 3max\n                        </div>\n                      </div>\n\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_school\" placeholder=\"collegeName\"\n                        name=\"inter_school\" formControlName=\"inter_school\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_school.errors && (reactiveForm.controls.inter_school.touched || reactiveForm.controls.inter_school.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_school')\"> collegeName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_school')\"> collegeName is invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_school_location\" placeholder=\"location\"\n                        name=\"inter_school_location\" formControlName=\"inter_school_location\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_school_location.errors && (reactiveForm.controls.inter_school_location.touched || reactiveForm.controls.inter_school_location.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_school_location')\"> collegelocation is\n                          Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_school_location')\"> collegelocation is\n                          Invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_passed_out_year\" placeholder=\"Year Of Pass\"\n                        name=\"inter_passed_out_year\" formControlName=\"inter_passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_passed_out_year.errors && (reactiveForm.controls.inter_passed_out_year.touched || reactiveForm.controls.inter_passed_out_year.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_passed_out_year')\"> Year of pass is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_passed_out_year')\"> year of pass is invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','inter_passed_out_year')\"> Invalid Year</div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload IPE/DIP</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileIpe($event)\">\n                    </div>\n                  </div>\n\n                </div>\n\n\n  \n\n                <div class=\"row register2-form\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"anydegree\" style=\"color:blue\">\n                      <label>Any Degree *</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"ugCourse\" style=\"color:blue\"> Course:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"ugCourse\" placeholder=\"UG\" name=\"ugCourse\"\n                        formControlName=\"ugCourse\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ugCourse.errors && (reactiveForm.controls.ugCourse.touched || reactiveForm.controls.ugCourse.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ugCourse')\">\n                          Course is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ugCourse')\">\n                          Course is Invalid Format\n                        </div>\n\n\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n                      <label for=\"ugSpecialization\" style=\"color:blue\"> Speciliazation:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"ugSpecialization\" name=\"ugSpecialization\"\n                        formControlName=\"ugSpecialization\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ugSpecialization.errors && (reactiveForm.controls.ugSpecialization.touched || reactiveForm.controls.ugSpecialization.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ugSpecialization')\">\n                          Speciliazation is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ugSpecialization')\">\n                          Speciliazation is Invalid Format\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n                      <label for=\"university_or_institute\" style=\"color:blue\"> University:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"university_or_institute\"\n                        name=\"university_or_institute\" formControlName=\"university_or_institute\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.university_or_institute.errors && (reactiveForm.controls.university_or_institute.touched || reactiveForm.controls.university_or_institute.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','university_or_institute')\">\n                          university is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','university_or_institute')\">\n                          university is Invalid Format\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n                  \n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\"> courseType * </label> <br>\n                      <label for=\"courseType\" style=\"color:blue\">Full Time</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Full Time\" formControlName=\"courseType\">\n                      <label for=\"courseType\" style=\"color:blue\">Part Time</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Part Time\" formControlName=\"courseType\">\n                      <label for=\"courseType\" style=\"color:blue\">Correspondece</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Correspondece\" formControlName=\"courseType\">\n                    </div>\n\n\n\n                  </div>\n\n\n\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"passed_out_year\" style=\"color:blue\"> Passed Out year:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"passed_out_year\" name=\"passed_out_year\"\n                        formControlName=\"passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.passed_out_year.errors && (reactiveForm.controls.passed_out_year.touched || reactiveForm.controls.passed_out_year.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','passed_out_year')\">\n                          Passed Out Year is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','passed_out_year')\">\n                          Year is Invalid Format\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','passed_out_year')\">\n                          Year is Invalid\n                        </div>\n\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\">Grading System *</label><br>\n                      <select class=\"form-control\" id=\"gradingSystem\" formControlName=\"gradingSystem\">\n                        <option *ngFor=\"let gradingSystem of gradings\" [value]=\"gradingSystem.id\">{{gradingSystem.name}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"marks\" style=\"color:blue\"> Marks:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"marks\" name=\"marks\" formControlName=\"marks\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.marks.errors && (reactiveForm.controls.marks.touched || reactiveForm.controls.marks.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','marks')\">\n                          Marks is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','marks')\">\n                          Marks is Invalid Format\n                        </div>\n\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','marks')\">\n                          Marks is Invalid\n                        </div>\n\n\n                      </div>\n\n                    </div>\n\n\n                  </div>\n\n                 \n\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" id=\"sa\">\n                      <label for=\"file\" style=\"color:blue\">Upload Certificate</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileGraduation($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n                  \n\n                  <div class=\"col-md-8\">\n                      <div class=\"form-group\">\n                        <label  style=\"color:blue\"> Skills </label> <br>\n                        <input type=\"text\" placeholder=\"Enter Your Skills\" class=\"form-control\" id=\"skills\" name=\"skills\" formControlName=\"skills\">\n                        <div\n                        *ngIf=\"reactiveForm.controls.skills.errors && (reactiveForm.controls.skills.touched || reactiveForm.controls.skills.dirty)\"\n                        style=\"color:red\">\n                      </div>\n\n                    </div>\n                  </div>\n\n\n\n                </div>\n\n                \n\n                <button class=\"btnp btn-primary\" (click)=\"t.select('tab-selectbyid1')\">Previous</button>\n\n                <button class=\"btnm1 btn-primary\" (click)=\"t.select('tab-selectbyid3')\">Next</button>\n\n              </div>\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n\n\n    <ngb-tab id=\"tab-selectbyid3\">\n      <ng-template ngbTabTitle>Experience Details</ng-template>\n      <ng-template ngbTabContent>\n\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n\n            <div class=\"row\">\n              <div class=\"col-md-3 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-9 register-right\">\n\n                <div class=\"row register3-form\">\n\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"experience_category1\" style=\"color:rgb(240, 15, 191)\">\n                      <label style=\"color:blue\">Experience *</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"total_experience_in_years\" name=\"total_experience_in_years\"\n                        class=\"form-control\" placeholder=\"Total Experience\" formControlName=\"total_experience_in_years\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.total_experience_in_years.errors && \n                                  (reactiveForm.controls.total_experience_in_years.touched || reactiveForm.controls.total_experience_in_years.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','total_experience_in_years')\">Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','total_experience_in_years')\">Invalid Format</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','total_experience_in_years')\">Invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"total_experience_in_months\" name=\"total_experience_in_months\"\n                        class=\"form-control\" placeholder=\"Total Months\" formControlName=\"total_experience_in_months\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.total_experience_in_months.errors && \n                               (reactiveForm.controls.total_experience_in_months.touched || reactiveForm.controls.total_experience_in_months.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','total_experience_in_months')\">Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','total_experience_in_months')\">invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','total_experience_in_months')\">invalid</div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n\n\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\" id=\"companydetails\" style=\"color:rgb(240, 15, 191)\">\n                    <label style=\"color:blue\">Company Details *</label>\n                  </div>\n                </div>\n\n\n\n                <div formArrayName=\"companies\" *ngFor=\"let company of reactiveForm.get('companies').controls;\n    let i=index\">\n                  <hr *ngIf=\"i>0\">\n                  <div [formGroupName]=\"i\">\n\n\n                    <div class=\"row register4-form\">\n\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"companyName\" style=\"color:blue\">Company name:</label>\n                          <input type=\"text\" class=\"form-control\" [id]=\"'companyName'+i\"\n                            placeholder=\"Enter Company Name\" formControlName=\"companyName\">\n                          <span class=\"help-block\" *ngIf=\"company.get('companyName').errors?.required \n           && company.get('companyName').touched\" style=\"color:red\">\n                            Company Name required\n                          </span>\n                        </div>\n                      </div>\n\n\n\n                      <div class=\"col-md-5\" *ngIf=\"i>0\">\n                        <button type=\"button\" class=\"btn btn-primary btn-md pull-right\" title=\"Delete companies\"\n                          (click)=\"removeCompany(i)\">\n\n                          <span class=\"glyphicon glyphicon-remove\">\n\n                          </span>\n                        </button>\n                      </div>\n\n                      \n                      <div class=\"col-md-5\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"designation\" style=\"color:blue\">Designation:</label>\n                          <input type=\"text\" class=\"form-control\" [id]=\"'designation'+i\" placeholder=\"Enter Designation\"\n                            formControlName=\"designation\">\n                          <span class=\"help-block\" *ngIf=\"company.get('designation').errors?.required \n           && company.get('designation').touched\" style=\"color:red\">\n                            Designation required\n                          </span>\n                        </div>\n                      </div>\n                    \n\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"duration_from\" style=\"color:blue\">From:</label>\n\n                          <input type=\"text\" class=\"form-control\" [id]=\"'duration_from'+i\" placeholder=\"From\"\n                            formControlName=\"duration_from\">\n                          <span class=\"help-block\" *ngIf=\"company.get('duration_from').errors?.required \n           && company.get('duration_from').touched\" style=\"color:red\">\n                            duration_from required\n                          </span>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"duration_to\" style=\"color:blue\">To:</label>\n\n                          <input type=\"text\" class=\"form-control\" [id]=\"'duration_to'+i\" placeholder=\"To\"\n                            formControlName=\"duration_to\">\n                          <span class=\"help-block\" *ngIf=\"company.get('duration_to').errors?.required \n               && company.get('duration_to').touched\" style=\"color:red\">\n                            duration_from required\n                          </span>\n                        </div>\n\n                      </div>\n\n\n\n\n\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"responsibility\"\n                            style=\"color:blue\">responsibility:</label>\n                          <input type=\"text\" class=\"form-control\" [id]=\"'responsibility'+i\"\n                            placeholder=\"Enter responsibility\" formControlName=\"responsibility\">\n                          <span class=\"help-block\" *ngIf=\"company.get('responsibility').errors?.required \n                   && company.get('responsibility').touched\" style=\"color:red\">\n                            responsibility required\n                          </span>\n                        </div>\n                      </div>\n\n                      \n\n                    </div>\n\n                  </div>\n                </div>\n\n\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n\n                    <button type=\"button\" class=\"btnadd btn-primary\" (click)=\"addCompanyButtonClick()\">Add\n                      Company</button>\n\n                  </div>\n                </div>\n\n\n\n                <div class=\"row register4-form\">\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"relevant_skills\" name=\"relevant_skills\" class=\"form-control\"\n                        placeholder=\"relevant_skills\" formControlName=\"relevant_skills\">\n                      <div *ngIf=\"reactiveForm.controls.relevant_skills.errors && \n                      (reactiveForm.controls.relevant_skills.touched || reactiveForm.controls.relevant_skills.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','relevant_skills')\"> Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','relevant_skills')\"> Invalid Format</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','relevant_skills')\"> Invalid</div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"relevant_experience_in_years\" name=\"relevant_experience_in_years\"\n                        class=\"form-control\" placeholder=\"relevant_experience_in_years\"\n                        formControlName=\"relevant_experience_in_years\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.relevant_experience_in_years.errors && \n                               (reactiveForm.controls.relevant_experience_in_years.touched || reactiveForm.controls.relevant_experience_in_years.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','relevant_experience_in_years')\"> Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','relevant_experience_in_years')\"> Invalid Format\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','relevant_experience_in_years')\"> Invalid</div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"relevant_experience_in_months\" name=\"relevant_experience_in_months\"\n                        class=\"form-control\" placeholder=\"relevant_experience_in_months\"\n                        formControlName=\"relevant_experience_in_months\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.relevant_experience_in_months.errors && \n                   (reactiveForm.controls.relevant_experience_in_months.touched || reactiveForm.controls.relevant_experience_in_months.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','relevant_experience_in_months')\">Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','relevant_experience_in_months')\">Invalid Format\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','relevant_experience_in_months')\">Invalid</div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                </div>\n\n\n\n<!-----------------------------------------------------------------------------------------------------\n\n<div class=\"col-md-12\">\n    <div class=\"form-group\" id=\"relaventcompanydetails\" style=\"color:blue\">\n      <label> Relavent Company Details *</label>\n    </div>\n  </div>\n\n\n  <div formArrayName=\"relevant_skills_companies\" *ngFor=\"let Relevantcompany of reactiveForm.get('relevant_skills_companies').controls;\n  let i=index\">\n  <hr *ngIf=\"i>0\">\n    <div [formGroupName]=\"i\">\n\n\n      <div class=\"row register5-form\">\n\n          <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                  <label class=\"control-label\"\n                  [attr.for]=\"companyName\" style=\"color:blue\">Company name:</label>            \n                  <input type=\"text\" class=\"form-control\" [id]=\"'companyName'+i\" placeholder=\"Enter Company Name\" \n                  formControlName=\"companyName\">\n                 <span class=\"help-block\" *ngIf=\"Relevantcompany.get('companyName').errors?.required \n                 && Relevantcompany.get('companyName').touched\" style=\"color:red\">\n                   Relavent Company Name required\n                  </span>\n                </div>\n              </div>\n\n\n\n\n              <div class=\"col-md-5\" *ngIf=\"i>0\">\n                  <button type=\"button\" class=\"btn btn-primary btn-md pull-right\"\n                  title=\"Delete Relevantcompanies\" (click)=\"removeRelevantCompany(i)\">\n        \n                  <span class=\"glyphicon glyphicon-remove\">\n        \n                  </span>\n                  </button>\n                </div>\n\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\"\n                        [attr.for]=\"designation\" style=\"color:blue\">Designation:</label>            \n                        <input type=\"text\" class=\"form-control\" [id]=\"'designation'+i\" placeholder=\"Enter designation\" \n                        formControlName=\"designation\">\n                       <span class=\"help-block\" *ngIf=\"Relevantcompany.get('designation').errors?.required \n                       && Relevantcompany.get('designation').touched\" style=\"color:red\">\n                       designation required\n                        </span>\n                      </div>\n                    </div>\n      \n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label\"\n                            [attr.for]=\"duration_from\" style=\"color:blue\">From:</label>            \n                            <input type=\"text\" class=\"form-control\" [id]=\"'duration_from'+i\" placeholder=\"Enter duration_from\" \n                            formControlName=\"duration_from\">\n                           <span class=\"help-block\" *ngIf=\"Relevantcompany.get('duration_from').errors?.required \n                           && Relevantcompany.get('duration_from').touched\" style=\"color:red\">\n                           duration_from required\n                            </span>\n                          </div>\n                        </div>\n          \n\n\n\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                              <label class=\"control-label\"\n                              [attr.for]=\"duration_to\" style=\"color:blue\">To:</label>            \n                              <input type=\"text\" class=\"form-control\" [id]=\"'duration_to'+i\" placeholder=\"Enter duration_to\" \n                              formControlName=\"duration_to\">\n                             <span class=\"help-block\" *ngIf=\"Relevantcompany.get('duration_to').errors?.required \n                             && Relevantcompany.get('duration_to').touched\" style=\"color:red\">\n                             duration_to required\n                              </span>\n                            </div>\n                          </div>\n            \n\n\n                          <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\"\n                                [attr.for]=\"responsibility\" style=\"color:blue\">Responsibility:</label>            \n                                <input type=\"text\" class=\"form-control\" [id]=\"'responsibility'+i\" placeholder=\"Enter responsibility\" \n                                formControlName=\"responsibility\">\n                               <span class=\"help-block\" *ngIf=\"Relevantcompany.get('responsibility').errors?.required \n                               && Relevantcompany.get('responsibility').touched\" style=\"color:red\">\n                               Responsibility required\n                                </span>\n                              </div>\n                            </div>\n\n\n\n                            <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n        \n                               <button type=\"button\" class=\"btnrel btn-primary\"\n                                              (click)=\"addRelevantCompanyButtonClick()\">Add Relavent Company</button>\n                             \n                                            </div>\n                                 </div>\n  \n                            \n  \n\n\n\n\n</div>\n</div>\n</div>\n--------------------------------------------------------------------------------------------------------->\n\n\n\n                <div class=\"row register6-form\">\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"current_ctc\" name=\"current_ctc\" class=\"form-control\"\n                        placeholder=\"current_ctc\" formControlName=\"current_ctc\">\n                      <div *ngIf=\"reactiveForm.controls.current_ctc.errors && \n                          (reactiveForm.controls.current_ctc.touched || reactiveForm.controls.current_ctc.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','current_ctc')\"> Required </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','current_ctc')\"> Invalid Format </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','current_ctc')\"> Invalid </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"noticePeriod_in_days\" name=\"noticePeriod_in_days\" class=\"form-control\"\n                        placeholder=\"noticePeriod_in_days\" formControlName=\"noticePeriod_in_days\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.noticePeriod_in_days.errors && \n                          (reactiveForm.controls.noticePeriod_in_days.touched || reactiveForm.controls.noticePeriod_in_days.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','noticePeriod_in_days')\"> Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','noticePeriod_in_days')\"> Invalid Format</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','noticePeriod_in_days')\"> Invalid </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                </div>\n\n                <div class=\"row register7-form\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Offer Letter</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileofferletter($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Appointment Letter</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileappoinment_letter($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Payslips</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFilepayslips($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n\n                </div>\n\n          \n\n                <button type=submit class=\"btn1 btn-primary\" (click)=\"registerUser(reactiveForm)\"> Submit </button>\n\n                <button class=\"btnp1 btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Previous</button>\n\n\n              </div>\n\n\n            </div>\n          </form>\n        </div>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!----------------------------------------------------      \n                <div class=\"container reactiveform\">\n\n                  <form [formGroup]=\"nestedReactiveForm\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div formArrayName=\"companydetails\">\n\n                          <div [formGroupName]=\"i\"\n                            *ngFor=\"let reactiveForm of nestedReactiveForm.controls.companydetails.controls; let i= index\">\n\n\n                            <div class=\"form-group\">\n                              <label class=\"control-label\"><span style=\"color:red;\"> Companies {{i+1}}</span></label>\n                              <a href=\"javascript:void(0)\" class=\"close-icon\"\n                                *ngIf=\"nestedReactiveForm.controls.companydetails.length > 1\"\n                                (click)=\"removeSelectedForm(i)\"></a>\n                            </div>\n\n\n                            <div class=\"row reactive\">\n\n                              <div class=\"col-md-8\">\n\n                                <div class=\"form-group\">\n                                  <label for=\" rcompanyname\">Companyname:</label>\n                                  <input type=\"text\" class=\"form-control\" id=\" rcompanyname\" name=\" rcompanyname\"\n                                    formControlName=\" rcompanyname\">\n                                  <div\n                                    *ngIf=\"reactiveForm.controls. rcompanyname.errors && (reactiveForm.controls. rcompanyname.touched || reactiveForm.controls. rcompanyname.dirty)\"\n                                    style=\"color:red\">\n                                    <div *ngIf=\"reactiveForm.hasError('required','rcompanyname')\">\n                                      companyname is Required\n                                    </div>\n                                    <div *ngIf=\"reactiveForm.hasError('pattern','rcompanyname')\">\n                                      companyname is Invalid Format\n                                    </div>\n\n                                  </div>\n\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-8\">\n\n                                <div class=\"form-group\">\n                                  <label for=\"rdesignation\">designation:</label>\n                                  <input type=\"text\" class=\"form-control\" id=\"rdesignation\" name=\"rdesignation\"\n                                    formControlName=\"rdesignation\">\n                                  <div\n                                    *ngIf=\"reactiveForm.controls.rdesignation.errors && (reactiveForm.controls.rdesignation.touched || reactiveForm.controls.rdesignation.dirty)\"\n                                    style=\"color:red\">\n                                    <div *ngIf=\"reactiveForm.hasError('required','rdesignation')\">\n                                      designation is Required\n                                    </div>\n                                    <div *ngIf=\"reactiveForm.hasError('pattern','rdesignation')\">\n                                      designation is Invalid Format\n                                    </div>\n\n                                  </div>\n\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-8\">\n\n                                <div class=\"form-group\">\n                                  <label for=\"rresponsibility\">responsibility:</label>\n                                  <input type=\"text\" class=\"form-control\" id=\"rresponsibility\" name=\"rresponsibility\"\n                                    formControlName=\"rresponsibility\">\n                                  <div\n                                    *ngIf=\"reactiveForm.controls.rresponsibility.errors && (reactiveForm.controls.rresponsibility.touched || reactiveForm.controls.rresponsibility.dirty)\"\n                                    style=\"color:red\">\n                                    <div *ngIf=\"reactiveForm.hasError('required','rresponsibility')\">\n                                      responsibility is Required\n                                    </div>\n                                    <div *ngIf=\"reactiveForm.hasError('pattern','rresponsibility')\">\n                                      responsibility is Invalid Format\n                                    </div>\n\n                                  </div>\n\n                                </div>\n                              </div>\n\n\n\n\n                              <button type=submit class=\"btn btn-primary\" style=\"float:right;\" (click)=\"addNewForm()\">\n                                Add </button>\n\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n\n                  </form>\n                </div>\n\n\n                \n\n\n\n                <div class=\"row register-form\">\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Relavent Experience *</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"years\" name=\"years\" placeholder=\"years\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"months\" name=\"months\" placeholder=\"months\" class=\"form-control\">\n                    </div>\n                  </div>\n\n\n\n                </div>\n--------------------------------------------------->\n\n<!------------------------------------------------------------------------------------\n\n                <div class=\"row1 register-form\">\n                  <div class=\"container reactiveform\">\n\n                    <form [formGroup]=\"nestedReactiveForm\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div formArrayName=\"companydetails\">\n\n                            <div [formGroupName]=\"i\"\n                              *ngFor=\"let reactiveForm of nestedReactiveForm.controls.companydetails.controls; let i= index\">\n\n\n                              <div class=\"form-group\">\n                                <label class=\"control-label\"><span style=\"color:red;\">Relevant Companies\n                                    {{i+1}}</span></label>\n                                <a href=\"javascript:void(0)\" class=\"close-icon\"\n                                  *ngIf=\"nestedReactiveForm.controls.companydetails.length > 1\"\n                                  (click)=\"removeSelectedForm(i)\"></a>\n                              </div>\n\n\n                              <div class=\"row reactive\">\n\n                                <div class=\"col-md-8\">\n\n                                  <div class=\"form-group\">\n                                    <label for=\"companyname\">Companyname:</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"companyname\" name=\"companyname\"\n                                      formControlName=\"companyname\">\n                                    <div\n                                      *ngIf=\"reactiveForm.controls.companyname.errors && (reactiveForm.controls.companyname.touched || reactiveForm.controls.companyname.dirty)\"\n                                      style=\"color:red\">\n                                      <div *ngIf=\"reactiveForm.hasError('required','companyname')\">\n                                        companyname is Required\n                                      </div>\n                                      <div *ngIf=\"reactiveForm.hasError('pattern','companyname')\">\n                                        companyname is Invalid Format\n                                      </div>\n\n                                    </div>\n\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-8\">\n\n                                  <div class=\"form-group\">\n                                    <label for=\"designation\">designation:</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"designation\" name=\"designation\"\n                                      formControlName=\"designation\">\n                                    <div\n                                      *ngIf=\"reactiveForm.controls.designation.errors && (reactiveForm.controls.designation.touched || reactiveForm.controls.designation.dirty)\"\n                                      style=\"color:red\">\n                                      <div *ngIf=\"reactiveForm.hasError('required','designation')\">\n                                        designation is Required\n                                      </div>\n                                      <div *ngIf=\"reactiveForm.hasError('pattern','designation')\">\n                                        designation is Invalid Format\n                                      </div>\n\n                                    </div>\n\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-8\">\n\n                                  <div class=\"form-group\">\n                                    <label for=\"responsibility\">responsibility:</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"responsibility\" name=\"responsibility\"\n                                      formControlName=\"responsibility\">\n                                    <div\n                                      *ngIf=\"reactiveForm.controls.responsibility.errors && (reactiveForm.controls.responsibility.touched || reactiveForm.controls.responsibility.dirty)\"\n                                      style=\"color:red\">\n                                      <div *ngIf=\"reactiveForm.hasError('required','responsibility')\">\n                                        responsibility is Required\n                                      </div>\n                                      <div *ngIf=\"reactiveForm.hasError('pattern','responsibility')\">\n                                        responsibility is Invalid Format\n                                      </div>\n\n                                    </div>\n\n                                  </div>\n                                </div>\n\n\n\n\n                                <button type=submit class=\"btn btn-primary\" style=\"float:right;\" (click)=\"addNewForm()\">\n                                  Add </button>\n\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n\n\n\n\n                    </form>\n                  </div>\n                \n\n                </div>\n\n                ----------------------------------------------------------------------------------->"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _experience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../experience.service */ "./src/app/experience.service.ts");




var ExperienceComponent = /** @class */ (function () {
    /*
      model: any = {}
      */
    function ExperienceComponent(fb, experienceService) {
        /*
        this.nestedReactiveForm = this.fb.group({
          companydetails: this.fb.array([this.companydetails()])
        });
        */
        this.fb = fb;
        this.experienceService = experienceService;
        this.reactiveForm = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
        /*
        nestedReactiveForm: any = FormGroup;
        */
        this.userFile = File;
        this.userFiles = FileList;
        this.boards = [{ 'id': 'CBSE', 'name': 'CBSE' }, { 'id': 'ICSE', 'name': 'ICSE' }, { 'id': 'IB', 'name': 'IB' }, { 'id': 'STATEBOARD', 'name': 'STATEBOARD' }];
        this.inter_categories = [{ 'id': 'IPE', 'name': 'IPE' }, { 'id': 'DIP', 'name': 'DIP' }];
        this.gradings = [{ 'id': 1, 'name': 'scale 10' }, { 'id': 2, 'name': 'scale 5' }, { 'id': 3, 'name': '%marks of 100max' }];
    }
    ExperienceComponent.prototype.onSelectFile = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    ExperienceComponent.prototype.onSelectFileSsc = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    ExperienceComponent.prototype.onSelectFileIpe = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    ExperienceComponent.prototype.onSelectFileGraduation = function (event) {
        var file = event.target.files[0];
        this.userFiles = file;
    };
    ExperienceComponent.prototype.onSelectFileSkills = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    ExperienceComponent.prototype.onSelectFileofferletter = function (event) {
        var file = event.target.files[0];
        this.userFiles = file;
    };
    ExperienceComponent.prototype.onSelectFileappoinment_letter = function (event) {
        var file = event.target.files[0];
        this.userFiles = file;
    };
    ExperienceComponent.prototype.onSelectFilepayslips = function (event) {
        var file = event.target.files[0];
        this.userFiles = file;
    };
    /*
    companydetails(): FormGroup {
      return this.fb.group({
       
        companyname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        designation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        responsibility: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        rcompanyname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        rdesignation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        rresponsibility: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
  
      })
    }
    
   
    addNewForm(): void {
      const control = this.nestedReactiveForm.controls.companydetails;
      control.push(this.companydetails());
    }
  
    removeSelectedForm(index: number): void {
      const control = this.nestedReactiveForm.controls.companydetails;
      control.removeAt(index);
    }
  
  */
    ExperienceComponent.prototype.ngOnInit = function () {
        this.reactiveForm = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
                ])]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z0-9!@#$%^&*()_+]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)
                ])]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                ])]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14)
                ])]),
            board: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            ssc_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ])]),
            ssc_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            ssc_school_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            ssc_passed_out_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)
                ])]),
            inter_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            inter_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ])]),
            inter_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            inter_school_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            inter_passed_out_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)
                ])]),
            ugCourse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            ugSpecialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            university_or_institute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            courseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            passed_out_year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            gradingSystem: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            total_experience_in_years: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
            total_experience_in_months: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
            relevant_experience_in_years: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
            relevant_experience_in_months: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)])],
            relevant_skills: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            current_ctc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9kK]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)])],
            noticePeriod_in_days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
            companies: this.fb.array([
                this.addCompanies()
            ]),
        });
    };
    ExperienceComponent.prototype.addCompanies = function () {
        return this.fb.group({
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            responsibility: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ExperienceComponent.prototype.addCompanyButtonClick = function () {
        this.reactiveForm.get('companies').push(this.addCompanies());
    };
    ExperienceComponent.prototype.removeCompany = function (companyIndex) {
        this.reactiveForm.get('companies').removeAt(companyIndex);
    };
    /*----------------------
      addRelevantCompanies():FormGroup{
        return this.fb.group({
          companyName:['',Validators.required],
          designation:['',Validators.required],
          duration_from:['',Validators.required],
          duration_to:['',Validators.required],
          responsibility:['',Validators.required]
        })
      }
    
      addRelevantCompanyButtonClick():void{
      (<FormArray>this.reactiveForm.get('relevant_skills_companies')).push(this.addRelevantCompanies());
      }
    
      removeRelevantCompany(RelevantcompanyIndex:number){
       (<FormArray>this.reactiveForm.get('relevant_skills_companies')).removeAt(RelevantcompanyIndex);
      }
    
    ------------------------------*/
    ExperienceComponent.prototype.registerUser = function (submitForm) {
        if (submitForm.valid) {
            var user = submitForm.value;
            var formData = new FormData();
            formData.append('user', JSON.stringify(user));
            formData.append('file', this.userFile);
            //formData.append('files',this.userFiles);
            this.experienceService.registerFresher(formData).subscribe((function (response) {
                console.log(response);
            }));
        }
        else {
            this.validateFormFields(submitForm);
        }
        /* this.fresherService.registerFresher
           this.firstname,
           this.lastname
         ).subscribe(
           data => {
             alert("data submitted successfully" + data);
             console.log(data);
           }
         );*/
    };
    ExperienceComponent.prototype.validateFormFields = function (submitForm) {
        Object.keys(submitForm.controls).forEach(function (field) {
            var control = submitForm.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({
                    onlySelf: true
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "firstName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "lastName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "gender", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "phoneNumber", void 0);
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _experience_service__WEBPACK_IMPORTED_MODULE_3__["ExperienceService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " a{\r\n     text-decoration: none;\r\n     outline: none;\r\n }\r\n .footer-main-div{\r\n     width: 100%;\r\n     height: auto;\r\n     margin: auto;\r\n     background: dodgerblue;\r\n     padding: 20px 0px;\r\n }\r\n .footer-social-icons{\r\n     width: 100%;\r\n     height: auto;\r\n     margin: auto;\r\n }\r\n .footer-social-icons ul{\r\n     margin: 0px;\r\n     padding: 0px;\r\n     text-align: center;\r\n }\r\n .footer-social-icons ul li{\r\n     display: inline-block;\r\n     width: 50px;\r\n     height: 50px;\r\n     margin: 0px 10px;\r\n     border-radius: 100%;\r\n     background: darkslategray;\r\n }\r\n .footer-social-icons ul li a{\r\n     color: aliceblue;\r\n     font-size: 25px;\r\n     display: block;\r\n }\r\n .footer-social-icons ul li a i{\r\n   line-height: 50px; \r\n}\r\n .footer-menu-one{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n}\r\n .footer-menu-one ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-align: center;\r\n}\r\n .footer-menu-one ul li{\r\n    display: inline-block;\r\n    margin: 0px 20px;\r\n}\r\n .footer-menu-one ul li a{\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n}\r\n .footer-bottom{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    background:darkslategray;\r\n    padding: 5px; \r\n}\r\n .footer-bottom p{\r\n    font-family: arial;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n}\r\n .footer-bottom p a{\r\n     color: #fff;\r\n }\r\n /*---------------------------------------------------\r\n #footer{\r\n    background: dodgerblue;\r\n    color: #fff;\r\n    padding: 20px;\r\n}\r\n.fa-heart-o{\r\n    margin: 3px;\r\n    color: red;\r\n}---------*/\r\n /*--------------------------------------------------------------------------------------*/\r\n img{\r\n    width: 100px;\r\n    height: 90px;\r\n}\r\n .blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n\r\n}\r\n @-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n @keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n .carousel-caption{\r\n    top: 30%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n   \r\n   \r\n   \r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n .carousel-item{\r\npadding: 5px;\r\n}\r\n .btn{\r\n    margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0tBQ0ksc0JBQXNCO0tBQ3RCLGNBQWM7RUFDakI7Q0FDRDtLQUNJLFlBQVk7S0FDWixhQUFhO0tBQ2IsYUFBYTtLQUNiLHVCQUF1QjtLQUN2QixrQkFBa0I7RUFDckI7Q0FDRDtLQUNJLFlBQVk7S0FDWixhQUFhO0tBQ2IsYUFBYTtFQUNoQjtDQUNEO0tBQ0ksWUFBWTtLQUNaLGFBQWE7S0FDYixtQkFBbUI7RUFDdEI7Q0FDRDtLQUNJLHNCQUFzQjtLQUN0QixZQUFZO0tBQ1osYUFBYTtLQUNiLGlCQUFpQjtLQUNqQixvQkFBb0I7S0FDcEIsMEJBQTBCO0VBQzdCO0NBQ0Q7S0FDSSxpQkFBaUI7S0FDakIsZ0JBQWdCO0tBQ2hCLGVBQWU7RUFDbEI7Q0FDRDtHQUNFLGtCQUFrQjtDQUNwQjtDQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0NBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtDQUN0QjtDQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtDQUNwQjtDQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjtDQUN2QjtDQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7Q0FDaEI7Q0FDRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0NBQ0E7S0FDSSxZQUFZO0VBQ2Y7Q0FNRDs7Ozs7Ozs7O1lBU1c7Q0FJWiwwRkFBMEY7Q0FFMUY7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtDQUNEO0lBQ0ksOENBQThDO0lBRTlDLHNDQUFzQzs7Q0FFekM7Q0FDRDtJQUNJLEdBQUcsV0FBVyxDQUFDO0lBQ2YsSUFBSSxXQUFXLENBQUM7SUFDaEIsS0FBSyxXQUFXLENBQUM7Q0FDcEI7Q0FNRDtJQUNJLEdBQUcsV0FBVyxDQUFDO0lBQ2YsSUFBSSxXQUFXLENBQUM7SUFDaEIsS0FBSyxXQUFXLENBQUM7Q0FDcEI7Q0FFRDtJQUNJLFNBQVM7SUFDVCxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixvQ0FBb0M7Ozs7SUFJcEMsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1COztDQUV0QjtDQUNEO0FBQ0EsYUFBYTtDQUNaO0NBR0Q7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgYXtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgb3V0bGluZTogbm9uZTtcclxuIH1cclxuIC5mb290ZXItbWFpbi1kaXZ7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuICAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gfVxyXG4gLmZvb3Rlci1zb2NpYWwtaWNvbnN7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuIH1cclxuIC5mb290ZXItc29jaWFsLWljb25zIHVse1xyXG4gICAgIG1hcmdpbjogMHB4O1xyXG4gICAgIHBhZGRpbmc6IDBweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAuZm9vdGVyLXNvY2lhbC1pY29ucyB1bCBsaXtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVncmF5O1xyXG4gfVxyXG4gLmZvb3Rlci1zb2NpYWwtaWNvbnMgdWwgbGkgYXtcclxuICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuIH1cclxuIC5mb290ZXItc29jaWFsLWljb25zIHVsIGxpIGEgaXtcclxuICAgbGluZS1oZWlnaHQ6IDUwcHg7IFxyXG59XHJcbi5mb290ZXItbWVudS1vbmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmZvb3Rlci1tZW51LW9uZSB1bHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXItbWVudS1vbmUgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4O1xyXG59XHJcbi5mb290ZXItbWVudS1vbmUgdWwgbGkgYXtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLmZvb3Rlci1ib3R0b217XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ZGFya3NsYXRlZ3JheTtcclxuICAgIHBhZGRpbmc6IDVweDsgXHJcbn1cclxuLmZvb3Rlci1ib3R0b20gcHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuIC5mb290ZXItYm90dG9tIHAgYXtcclxuICAgICBjb2xvcjogI2ZmZjtcclxuIH1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gI2Zvb3RlcntcclxuICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmZhLWhlYXJ0LW97XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0tLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxufVxyXG4uYmxpbmt7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG5cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3R0b206IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsIDEyNywgMjIxLCAwLjQpO1xyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG4uY2Fyb3VzZWwtaXRlbXtcclxucGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5cclxuLmJ0bntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-main-div\">\n   <div class=\"footer-social-icons\">\n        <ul>\n          <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-google-plus\"></i></a></li>\n          <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-youtube\"></i></a></li>\n        </ul>\n   </div>\n   <div class=\"footer-menu-one\">\n      <ul>\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">About Us</a></li>\n        <li><a href=\"#\">Services</a></li>\n        <li><a href=\"#\">Products</a></li>\n        <li><a href=\"#\">Contact Us</a></li>\n      </ul>\n   </div>\n<!------------------------------------------------------------------------------>\n\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n      \n     <div class=\"container\">\n <!-------------------------------------    \n<span class=\"blink\">\n  ----------------------------------------->\n\n    <div class=\"carousel-item active\">\n        \n      <img src=\"assets/bha.png\">\n      <img src=\"assets/info.jpg\">\n      <img src=\"assets/ama.jpg\">\n     \n      <img src=\"assets/lti.png\">\n      <img src=\"assets/meg.jpg\">\n      <img src=\"assets/ora.png\">\n      <img src=\"assets/vir.png\">\n      <img src=\"assets/cyi.png\">\n      <img src=\"assets/wip.png\">\n      <img src=\"assets/tcs.jpg\">\n      <img src=\"assets/cog.png\">\n     \n    </div>\n\n    <div class=\"carousel-item\">\n       <img src=\"assets/bha.png\">\n       <img src=\"assets/info.jpg\">\n       <img src=\"assets/cog.png\">\n       <img src=\"assets/meg.jpg\">\n       <img src=\"assets/ama.jpg\">\n       <img src=\"assets/cyi.png\">\n       <img src=\"assets/hcl.jpg\">\n       <img src=\"assets/hp.png\">\n       <img src=\"assets/wip.png\">\n       <img src=\"assets/ora.png\">\n       <img src=\"assets/vir.png\">\n     \n     \n      \n    </div>\n  <!----------------------------- \n   </span>\n------------------------------>\n   </div>\n  </div>\n\n\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n \n  \n</div>\n\n\n\n\n\n\n<!--------------------------------------------------------------------------------->\n</div>\n<div class=\"footer-bottom\">\n    <p>Copy Right by:<a href=\"#\">@Sahiudhyogh </a></p>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-----------------------Footer----------------------\n  <section id=\"footer\">\n    <div class=\"container text-center\">\n       <p> Sahiudhyogh <i class=\"fa fa-heart-o\"></i></p>\n    </div>\n  </section>\n  ---------------->\n  <!-----------------------Footer End-----------------------\n  <script src=\"C:\\Users\\yes boss\\Desktop\\website.js\"></script>\n  <script>\n  var scroll =  new SmoothScroll('a[href*=\"#\"]');\n  </script>\n  --->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.component.css":
/*!*********************************************!*\
  !*** ./src/app/forgot/forgot.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\r\n    height: 20%;\r\n    padding-bottom: 13%;\r\n}\r\n\r\nbody.my-login-page {\r\n\tbackground-color: #f7f9fb;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.my-login-page .brand {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\toverflow: hidden;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n\tmargin: 10px auto;\r\n\tbox-shadow: 0 4px 8px rgba(0,0,0,.05);\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n.my-login-page .brand img {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .card-wrapper {\r\n\twidth: 350px;\r\n}\r\n\r\n.my-login-page .card {\r\n\tborder-color: transparent;\r\n\tbox-shadow: 0 4px 8px rgba(0,0,0,.05);\r\n}\r\n\r\n.my-login-page .card.fat {\r\n\tpadding: 10px;\r\n}\r\n\r\n.my-login-page .card .card-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.my-login-page .form-control {\r\n\tborder-width: 2.3px;\r\n}\r\n\r\n.my-login-page .form-group label {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .btn.btn-block {\r\n\tpadding: 12px 10px;\r\n}\r\n\r\n.my-login-page .footer {\r\n\tmargin: 40px 0;\r\n\tcolor: #888;\r\n\ttext-align: center;\r\n}\r\n\r\n@media screen and (max-width: 425px) {\r\n\t.my-login-page .card-wrapper {\r\n\t\twidth: 90%;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n\t.my-login-page .card.fat {\r\n\t\tpadding: 0;\r\n\t}\r\n\r\n\t.my-login-page .card.fat .card-body {\r\n\t\tpadding: 15px;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtDQUN2Qjs7QUFFRDtDQUNDLDBCQUEwQjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsc0NBQXNDO0NBQ3RDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2I7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsc0NBQXNDO0NBQ3RDOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0MsWUFBWTtDQUNaOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQztFQUNDLFdBQVc7RUFDWCxlQUFlO0VBQ2Y7Q0FDRDs7QUFFRDtDQUNDO0VBQ0MsV0FBVztFQUNYOztDQUVEO0VBQ0MsY0FBYztFQUNkO0NBQ0QiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHkge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xyXG59XHJcblxyXG5ib2R5Lm15LWxvZ2luLXBhZ2Uge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmJyYW5kIHtcclxuXHR3aWR0aDogOTBweDtcclxuXHRoZWlnaHQ6IDkwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcblx0Ym94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsLjA1KTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmJyYW5kIGltZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5teS1sb2dpbi1wYWdlIC5jYXJkLXdyYXBwZXIge1xyXG5cdHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmNhcmQge1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmNhcmQuZmF0IHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubXktbG9naW4tcGFnZSAuY2FyZCAuY2FyZC10aXRsZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmZvcm0tY29udHJvbCB7XHJcblx0Ym9yZGVyLXdpZHRoOiAyLjNweDtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubXktbG9naW4tcGFnZSAuYnRuLmJ0bi1ibG9jayB7XHJcblx0cGFkZGluZzogMTJweCAxMHB4O1xyXG59XHJcblxyXG4ubXktbG9naW4tcGFnZSAuZm9vdGVyIHtcclxuXHRtYXJnaW46IDQwcHggMDtcclxuXHRjb2xvcjogIzg4ODtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcblx0Lm15LWxvZ2luLXBhZ2UgLmNhcmQtd3JhcHBlciB7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG5cdC5teS1sb2dpbi1wYWdlIC5jYXJkLmZhdCB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdH1cclxuXHJcblx0Lm15LWxvZ2luLXBhZ2UgLmNhcmQuZmF0IC5jYXJkLWJvZHkge1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forgot/forgot.component.html":
/*!**********************************************!*\
  !*** ./src/app/forgot/forgot.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"my-login-page\">\n  <section class=\"h-100\">\n    <div class=\"container h-100\">\n      <div class=\"row justify-content-md-center align-items-center h-100\">\n        <div class=\"card-wrapper\">\n          <div class=\"brand\">\n              <img src=\"/assets/logoo.png\">\n         <!---------------this place for image----------------------->  \n          </div>\n          <div class=\"card fat\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Forgot Password</h4>\n              <form method=\"POST\" name=\"form\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\">\n                  <label for=\"email\">E-Mail Address</label>\n                  <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" value=\"\" required autofocus>\n                  <div class=\"invalid-feedback\">\n                    Email is invalid\n                  </div>\n                  <div class=\"form-text text-muted\">\n                    By clicking \"Reset Password\" we will send a password reset link\n                  </div>\n                </div>\n\n                <div class=\"form-group m-0\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\">\n                    Reset Password\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>    \n</body>"

/***/ }),

/***/ "./src/app/forgot/forgot.component.ts":
/*!********************************************!*\
  !*** ./src/app/forgot/forgot.component.ts ***!
  \********************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/forgot/forgot.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/freshandexp/freshandexp.component.css":
/*!*******************************************************!*\
  !*** ./src/app/freshandexp/freshandexp.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    font-family:Roboto,sans-serif;\r\n    font-size:15px;\r\n    font-weight:100;\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.7),rgba(125, 150, 224, 0.7)),url(\"/assets/bag.jpg\");\r\n    background-image: no-repeat;\r\n  }\r\n\r\nheader .gnb{\r\n    height:90px;\r\n    width:990px;\r\n    margin:auto\r\n    ;color:#707070;\r\n    padding-top:34px\r\n  }\r\n\r\nheader .gnb p{\r\n    float:right;\r\n    width:auto;\r\n    max-width:400px;\r\n    word-break:break-all\r\n  }\r\n\r\nheader .banner .nLogo img{\r\n    border-radius: 50%;\r\n      height: 50px;\r\n      margin-top: 4px;\r\n      margin-left: -1200px;\r\n  }\r\n\r\nheader .banner{\r\n    background:rgb(10, 174, 224);height:60px;color:#fff;text-align:center\r\n  }\r\n\r\nheader .banner .title{\r\n    font-size:16px\r\n  }\r\n\r\nheader{\r\n    margin-bottom:20px\r\n  }\r\n\r\nheader .banner .title{\r\n   margin-top: -34px;\r\n  }\r\n\r\n.container{\r\n    width:990px;\r\n    margin:0 auto;\r\n    text-align:center;\r\n    color:#707070\r\n  }\r\n\r\n.container .box{\r\n    display:inline-block;\r\n    width:304px;\r\n    padding:50px;\r\n    text-align:center\r\n  }\r\n\r\n.container .box .icon img{\r\n    font-family:ResmanFont;\r\n    margin:auto auto 25px;\r\n    cursor:pointer;\r\n    color:rgb(39, 212, 117);\r\n    display:inline-block;\r\n    overflow:hidden;\r\n    vertical-align:bottom\r\n  }\r\n\r\n.container .box .icon.fresher img{\r\n    border-radius: 50%;\r\n    font-size:130px;\r\n    width:120px;\r\n    line-height:130px\r\n  }\r\n\r\n.container .box .icon.experience img{\r\n    border-radius: 50%;\r\n    font-size:130px;\r\n    width:120px;\r\n    line-height:130px\r\n  }\r\n\r\n.container .box .action-btn{\r\n    color:#FFF;\r\n    background-color: rgb(10, 174, 224);\r\n    border:none;display:inline-block;\r\n    font-size:16px;\r\n    font-weight:400;\r\n    line-height:1.42857143;\r\n    text-align:center;\r\n    vertical-align:middle;\r\n    cursor:pointer;\r\n    overflow:hidden;\r\n    outline:0;\r\n    padding:15px;\r\n    width:100%\r\n  }\r\n\r\n.container .box .description{\r\n    padding-top:10px;\r\n  }\r\n\r\n.container .job-text{\r\n    width:435px;\r\n    margin:auto;\r\n  }\r\n\r\n.container .info-text .numbers{\r\n    font-size:17px;\r\n  }\r\n\r\n.container .info-text .numbers i{\r\n    border-right:1px solid #707070;\r\n    margin:0 15px;\r\n  }\r\n\r\n.container .info-text .head{\r\n    margin-top:25px;\r\n    font-weight:400;\r\n  }\r\n\r\n.container .info-text ul{\r\n    list-style:none;\r\n    display:inline-block;\r\n  }\r\n\r\n.container .info-text ul li{\r\n    text-align:left;\r\n    padding:4px 0;\r\n  }\r\n\r\nfooter{\r\n    text-align:center;\r\n    font-size:12px;\r\n    \r\n    margin-top:65px}\r\n\r\nfooter a{\r\n    color:rgb(69, 22, 238);\r\n    display:inline-block;\r\n    font-size:15px;\r\n    line-height:1;\r\n    padding:0 10px;\r\n    border-left:solid 1px #A7A7A7\r\n  }\r\n\r\nfooter a:hover{\r\n    color:rgb(175, 221, 10)\r\n  }\r\n\r\nfooter a:first-child{\r\n    border-left:none\r\n  }\r\n\r\nfooter p{\r\n    font-size: 12px;\r\n    color:rgb(194, 21, 142);\r\n    margin-top:5px\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlc2hhbmRleHAvZnJlc2hhbmRleHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRHQUE0RztJQUM1Ryw0QkFBNEI7R0FDN0I7O0FBRUg7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaO0tBQ0MsY0FBYztJQUNmLGdCQUFnQjtHQUNqQjs7QUFFRDtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtHQUNyQjs7QUFFRDtJQUNFLG1CQUFtQjtNQUNqQixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLHFCQUFxQjtHQUN4Qjs7QUFFRDtJQUNFLDZCQUE2QixZQUFZLFdBQVcsaUJBQWlCO0dBQ3RFOztBQUNEO0lBQ0UsY0FBYztHQUNmOztBQUVEO0lBQ0Usa0JBQWtCO0dBQ25COztBQUNEO0dBQ0Msa0JBQWtCO0dBQ2xCOztBQUVEO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtHQUNkOztBQUNEO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCOztBQUNEO0lBQ0UsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0dBQ3RCOztBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0dBQ2xCOztBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0dBQ2xCOztBQUNEO0lBQ0UsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxZQUFZLHFCQUFxQjtJQUNqQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0dBQ1g7O0FBRUQ7SUFDRSxpQkFBaUI7R0FDbEI7O0FBRUQ7SUFDRSxZQUFZO0lBQ1osWUFBWTtHQUNiOztBQUNEO0lBQ0UsZUFBZTtHQUNoQjs7QUFDRDtJQUNFLCtCQUErQjtJQUMvQixjQUFjO0dBQ2Y7O0FBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0dBQ2pCOztBQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtHQUN0Qjs7QUFDRDtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0dBQ2Y7O0FBR0Q7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixlQUFlLENBQUM7O0FBQ2xCO0lBQ0UsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZiw2QkFBNkI7R0FDOUI7O0FBQ0Q7SUFDRSx1QkFBdUI7R0FDeEI7O0FBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7O0FBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGNBQWM7R0FDZiIsImZpbGUiOiJzcmMvYXBwL2ZyZXNoYW5kZXhwL2ZyZXNoYW5kZXhwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6Um9ib3RvLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjEwMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDEyNSwgMTUwLCAyMjQsIDAuNykscmdiYSgxMjUsIDE1MCwgMjI0LCAwLjcpKSx1cmwoXCIvYXNzZXRzL2JhZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuaGVhZGVyIC5nbmJ7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICAgIHdpZHRoOjk5MHB4O1xyXG4gICAgbWFyZ2luOmF1dG9cclxuICAgIDtjb2xvcjojNzA3MDcwO1xyXG4gICAgcGFkZGluZy10b3A6MzRweFxyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5nbmIgcHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6YXV0bztcclxuICAgIG1heC13aWR0aDo0MDBweDtcclxuICAgIHdvcmQtYnJlYWs6YnJlYWstYWxsXHJcbiAgfVxyXG4gIFxyXG4gIGhlYWRlciAuYmFubmVyIC5uTG9nbyBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgaGVhZGVyIC5iYW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigxMCwgMTc0LCAyMjQpO2hlaWdodDo2MHB4O2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXJcclxuICB9XHJcbiAgaGVhZGVyIC5iYW5uZXIgLnRpdGxle1xyXG4gICAgZm9udC1zaXplOjE2cHhcclxuICB9XHJcbiAgXHJcbiAgaGVhZGVye1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4XHJcbiAgfVxyXG4gIGhlYWRlciAuYmFubmVyIC50aXRsZXtcclxuICAgbWFyZ2luLXRvcDogLTM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDo5OTBweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGNvbG9yOiM3MDcwNzBcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuYm94e1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDozMDRweDtcclxuICAgIHBhZGRpbmc6NTBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgfVxyXG4gIC5jb250YWluZXIgLmJveCAuaWNvbiBpbWd7XHJcbiAgICBmb250LWZhbWlseTpSZXNtYW5Gb250O1xyXG4gICAgbWFyZ2luOmF1dG8gYXV0byAyNXB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMzksIDIxMiwgMTE3KTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgdmVydGljYWwtYWxpZ246Ym90dG9tXHJcbiAgfVxyXG4gIC5jb250YWluZXIgLmJveCAuaWNvbi5mcmVzaGVyIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZToxMzBweDtcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MTMwcHhcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuYm94IC5pY29uLmV4cGVyaWVuY2UgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOjEzMHB4O1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDoxMzBweFxyXG4gIH1cclxuICAuY29udGFpbmVyIC5ib3ggLmFjdGlvbi1idG57XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxNzQsIDIyNCk7XHJcbiAgICBib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MS40Mjg1NzE0MztcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBvdXRsaW5lOjA7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICB3aWR0aDoxMDAlXHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgLmJveCAuZGVzY3JpcHRpb257XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIH1cclxuIFxyXG4gIC5jb250YWluZXIgLmpvYi10ZXh0e1xyXG4gICAgd2lkdGg6NDM1cHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuaW5mby10ZXh0IC5udW1iZXJze1xyXG4gICAgZm9udC1zaXplOjE3cHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXIgLmluZm8tdGV4dCAubnVtYmVycyBpe1xyXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOjAgMTVweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuaW5mby10ZXh0IC5oZWFke1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIH1cclxuICAuY29udGFpbmVyIC5pbmZvLXRleHQgdWx7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuaW5mby10ZXh0IHVsIGxpe1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgcGFkZGluZzo0cHggMDtcclxuICB9XHJcblxyXG4gIFxyXG4gIGZvb3RlcntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6NjVweH1cclxuICBmb290ZXIgYXtcclxuICAgIGNvbG9yOnJnYig2OSwgMjIsIDIzOCk7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MTtcclxuICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6c29saWQgMXB4ICNBN0E3QTdcclxuICB9XHJcbiAgZm9vdGVyIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjpyZ2IoMTc1LCAyMjEsIDEwKVxyXG4gIH1cclxuICBmb290ZXIgYTpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci1sZWZ0Om5vbmVcclxuICB9XHJcbiAgZm9vdGVyIHB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjpyZ2IoMTk0LCAyMSwgMTQyKTtcclxuICAgIG1hcmdpbi10b3A6NXB4XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/freshandexp/freshandexp.component.html":
/*!********************************************************!*\
  !*** ./src/app/freshandexp/freshandexp.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <header>\n\n        <div class=\"banner\">\n\n            <a class=\"nLogo\">\n                <img src=\"/assets/logoo.png\">\n            </a>\n\n            <p class=\"title\">Tell us about yourself</p>\n        </div>\n\n\n        <div class=\"gnb\">\n\n            <p style=\"color:white\">Already Registered? <a routerLink=\"/auth/login\" routerLinkActive=\"active\"\n                    class=\"primary-link\" title=\"Jobseeker Login\" style=\"color:rgb(79, 17, 223)\">Login</a> here</p>\n        </div>\n\n        <div id=\"alert\" class=\"alert\">\n            <i></i>\n            <span id=\"alertMsg\"></span>\n        </div>\n    </header>\n    <div class=\"container\">\n        <b class=\"job-text\" style=\"color:white\"> Find the right job on Sahiudhyog.com. You are only few steps away from\n            millions of jobs</b>\n        <form name=\"bifurcation\" action=\"//my.naukri.com/account/register/basicdetails\" method=\"post\">\n\n            <div class=\"box\">\n\n                <div class=\"fresherCont\">\n\n                    <div class=\"icon fresher\">\n                        <img src=\"/assets/fre.jpg\">\n\n\n                    </div>\n\n                    <button type=\"button\" routerLink=\"/fresher\" routerLinkActive=\"active\" value=\"fresher\"\n                        name=\"userType\" class=\"action-btn fresh\" title=\"I am a Fresher\">I am a Fresher</button>\n\n\n                </div>\n\n                <p class=\"description\" style=\"color:white\">I have just graduated/I haven't worked after graduation</p>\n\n            </div>\n\n\n            <div class=\"box\">\n\n                <div class=\"expCont\">\n\n                    <div class=\"icon experience\">\n\n                        <img src=\"/assets/exp.png\">\n\n\n                    </div>\n\n                    <button type=\"button\" routerLink=\"/experience\" routerLinkActive=\"active\" name=\"userType\" value=\"exp\"\n                        class=\"action-btn exp\" title=\"I am a Professional\">I am a Professional</button>\n\n                </div>\n\n                <p class=\"description\" style=\"color:white\">I have at least 1 month of work experience</p>\n\n            </div>\n\n        </form>\n        <div class=\"info-text\">\n            <span class=\"numbers\" style=\"color:white\">More than 3 lakhs Jobs <i></i> More than 1 lakh Recruiters</span>\n            <p class=\"head\" style=\"color:rgb(37, 19, 204)\">After you register, you can:</p>\n            <ul style=\"color:white\">\n                <li>&#45; Apply to jobs from the site while keeping your resume hidden from all recruiters.</li>\n                <li>&#45; Mark yourself as a 'passive jobseeker' if you are not actively looking for a job.</li>\n                <li>&#45; Block your company or other specific companies from viewing your profile.</li>\n            </ul>\n        </div>\n    </div>\n    <footer>\n        <a href=\"#\" target=\"_blank\" title=\"About Us\">About Us</a>\n        <a href=\"#\" target=\"_blank\" title=\"Contact Us\">Contact Us</a>\n        <a href=\"#\" target=\"_blank\" title=\"FAQs\">FAQs</a>\n        <a href=\"#\" target=\"_blank\" title=\"Terms and Conditions\">Terms and Conditions</a>\n        <a href=\"#\" target=\"_blank\" title=\"Report a Problem\">Report a Problem</a>\n        <a href=\"#\" target=\"_blank\" title=\"Privacy Policy\">Privacy Policy</a>\n        <p>All rights reserved &copy; 2019 Info Edge India Ltd.</p>\n    </footer>\n</body>"

/***/ }),

/***/ "./src/app/freshandexp/freshandexp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/freshandexp/freshandexp.component.ts ***!
  \******************************************************/
/*! exports provided: FreshandexpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreshandexpComponent", function() { return FreshandexpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FreshandexpComponent = /** @class */ (function () {
    function FreshandexpComponent() {
    }
    FreshandexpComponent.prototype.ngOnInit = function () {
    };
    FreshandexpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freshandexp',
            template: __webpack_require__(/*! ./freshandexp.component.html */ "./src/app/freshandexp/freshandexp.component.html"),
            styles: [__webpack_require__(/*! ./freshandexp.component.css */ "./src/app/freshandexp/freshandexp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreshandexpComponent);
    return FreshandexpComponent;
}());



/***/ }),

/***/ "./src/app/fresher.service.ts":
/*!************************************!*\
  !*** ./src/app/fresher.service.ts ***!
  \************************************/
/*! exports provided: FresherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FresherService", function() { return FresherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FresherService = /** @class */ (function () {
    function FresherService(http) {
        this.http = http;
        this.url = "http://192.168.43.141:3005/jobseeker/fresher";
        this.http = http;
    }
    FresherService.prototype.registerFresher = function (formData) {
        return this.http.post(this.url, formData);
        /* return this.http.post(this.url,{
           "firstName": firstname,
           "lastName":lastname
         })*/
    };
    FresherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FresherService);
    return FresherService;
}());



/***/ }),

/***/ "./src/app/fresher/fresher.component.css":
/*!***********************************************!*\
  !*** ./src/app/fresher/fresher.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n\r\n    min-height: 99vh;\r\n    min-width: 100%;\r\n    margin-top: 0%;\r\n    margin-bottom: 2%;\r\n}\r\n.register-left{\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-top: 4%;\r\n}\r\n.register-left input{\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    width: 60%;\r\n    background: #f8f9fa;\r\n    font-weight: bold;\r\n    color: #383d41;\r\n    margin-top: 30%;\r\n    margin-bottom: 3%;\r\n    cursor: pointer;\r\n}\r\n.register-right{\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.10),rgba(125, 150, 224, 0.10)),url(\"/assets/bag.jpg\");\r\n    background-image: no-repeat;\r\n    border-top-left-radius: 10% 50%;\r\n    border-bottom-left-radius: 10% 50%;\r\n}\r\n.register-left img{\r\n    margin-top: 15%;\r\n    margin-bottom: 5%;\r\n    width: 25%;\r\n    -webkit-animation: mover 2s infinite  alternate;\r\n    animation: mover 1s infinite  alternate;\r\n}\r\n@-webkit-keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n@keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n.register-left p{\r\n    font-weight: lighter;\r\n    padding: 12%;\r\n    margin-top: -9%;\r\n}\r\n.register .register-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-top: 2%;\r\n   \r\n}\r\n.register .register1-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-top: -12%;\r\n    margin-bottom: -15%;\r\n}\r\n.register .register2-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-bottom: -7%;\r\n    \r\n}\r\n.reactiveform{\r\n    padding: 20px;\r\n    margin-left: 70px;\r\n    margin-top: 0px;\r\n    padding-top: 0%;\r\n    margin-bottom: 10px;\r\n}\r\n.reactiveform .btn{\r\n    margin-left: 200px;\r\n    width: 10%;\r\n    height: 35px;\r\n    \r\n    \r\n}\r\n.radio{\r\n    /*------------gender radio button-----------*/\r\n    margin-left: 3px;\r\n}\r\n.radio1{\r\n    /*------------course type-----------*/\r\n    margin-left: 3px;\r\n}\r\n.reactiveform .btnd{\r\n    /*------------btnd is a class of grading system-----------*/\r\n    height: 38px;\r\n    width: 65%;\r\n   \r\n}\r\n#board1{\r\n     /*---------------- ssc board ---------------------------*/\r\n    margin-top: -34Px;\r\n    margin-bottom: 40px;\r\n}\r\n#board{\r\n    /*---------------- ssc board ---------------------------*/\r\n   margin-top: -58Px;\r\n   margin-bottom: 40px;\r\n}\r\n#inter_category1{\r\n    /*---------------- category for ipe ---------------------------*/\r\n  margin-bottom: 1px;\r\n}\r\n#inter_category{\r\n      /*---------------- inter categeory---------------------------*/\r\n   margin-top: -26Px;\r\n   margin-bottom: 40px;\r\n}\r\n#ssc_percentage{\r\n     /*----------------ssc %---------------------------*/\r\n    margin-top: -34Px;\r\n   \r\n}\r\n#ssc_school{\r\n    /*----------------ssc school---------------------------*/\r\n   margin-top: -34Px;\r\n  \r\n}\r\n#ssc_school_location{\r\n    /*----------------ssc location---------------------------*/\r\n   margin-top: -34Px;\r\n  \r\n}\r\n.btnc{\r\n    /*----------------btnc is a class of grading system dropdown---------------------------*/\r\n    height: 38px;\r\n    margin-bottom:13%; \r\n}\r\n.reactiveform.form-group{\r\n    padding: 20%;\r\n}\r\n#sa{\r\n   /*-------------this sa id is for upload certificate----------------------*/\r\n   color: blue;\r\n    padding-top: 4px;\r\n    margin-bottom: 25px;\r\n}\r\n.btnm{\r\n    /*---------------------this is for next button------------------------------------*/\r\n    margin-left: 200px;\r\n    width: 30%;\r\n    height: 35px;\r\n    margin-top: 10%;\r\n    border-radius: 100%;\r\n    \r\n}\r\n.btnp{\r\n    /*---------------------this is for previous button in educational details------------------------------------*/\r\n   margin-left: 100px;\r\n   border-radius: 100%;\r\n   width: 15%;\r\n   margin-top: -4%;\r\n   margin-bottom: 20px;\r\n}\r\n#anydegree{\r\n    margin-top: 0px;\r\n}\r\n.btn1{\r\n    margin-left: 200px;\r\n    width:15%;\r\n    height: 43px;\r\n    margin-bottom: 20px;\r\n}\r\n.close-icon{\r\n    display:block;\r\n    box-sizing: border-box;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-style: solid;\r\n    border-color: blue;\r\n    border-radius: 100%;\r\n    background: -webkit-linear-gradient(-45deg,transparent 0% transparent 0% transparent 46%\r\n    white 46% white 56% transparent 56% transparent 100%);\r\n    background-color: blue;\r\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);\r\n    transition:all 0.3s ease;\r\n    float: right;\r\n}\r\n/*----------------------------------------------\r\n.container{\r\n    background-position: center;\r\n     background-size: cover;\r\n     background-repeat: no-repeat;\r\n     }\r\nh2{\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n}\r\n.register{\r\n width: 500px;\r\n  margin: 10px 0px 10px 250px;\r\n   font-size: 15px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    \r\n}\r\n#register{\r\n    margin-left: 50px;\r\n}\r\nlabel{\r\n\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    \r\n}\r\n#name{\r\n    width: 200px;\r\n    border: none;\r\n    border-radius: 3px;\r\n    outline: 0;\r\n    padding: 3px;\r\n}\r\n.register input{\r\n    font-size: 12px;\r\n    color: rgb(10, 147, 238);\r\n}\r\n#sub{\r\n    width: 50%;\r\n    background: lightblue;\r\n    padding: 5px;\r\n    font-size: 10px;\r\n    cursor: pointer;\r\n    margin-right:10px;\r\n    }\r\n----------------------------------*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlc2hlci9mcmVzaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0REFBNEQ7O0lBRTVELGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLDhHQUE4RztJQUM5Ryw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLG1DQUFtQztDQUN0QztBQUdEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0RBQWdEO0lBQ2hELHdDQUF3QztDQUMzQztBQUNEO0lBQ0ksS0FBSyxpQ0FBeUIsQ0FBekIseUJBQXlCLEVBQUU7SUFDaEMsT0FBTyxxQ0FBNkIsQ0FBN0IsNkJBQTZCLEVBQUU7Q0FDekM7QUFDRDtJQUNJLEtBQUssaUNBQXlCLENBQXpCLHlCQUF5QixFQUFFO0lBQ2hDLE9BQU8scUNBQTZCLENBQTdCLDZCQUE2QixFQUFFO0NBQ3pDO0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlOztDQUVsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjs7Q0FFdEI7QUFHRDtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTs7O0NBR2hCO0FBQ0Q7SUFDSSw4Q0FBOEM7SUFDOUMsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSw0REFBNEQ7SUFDNUQsYUFBYTtJQUNiLFdBQVc7O0NBRWQ7QUFDRDtLQUNLLDBEQUEwRDtJQUMzRCxrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSwwREFBMEQ7R0FDM0Qsa0JBQWtCO0dBQ2xCLG9CQUFvQjtDQUN0QjtBQUNEO0lBQ0ksaUVBQWlFO0VBQ25FLG1CQUFtQjtDQUNwQjtBQUNEO01BQ00sK0RBQStEO0dBQ2xFLGtCQUFrQjtHQUNsQixvQkFBb0I7Q0FDdEI7QUFDRDtLQUNLLG9EQUFvRDtJQUNyRCxrQkFBa0I7O0NBRXJCO0FBQ0Q7SUFDSSx5REFBeUQ7R0FDMUQsa0JBQWtCOztDQUVwQjtBQUNEO0lBQ0ksMkRBQTJEO0dBQzVELGtCQUFrQjs7Q0FFcEI7QUFJRDtJQUNJLHlGQUF5RjtJQUN6RixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7R0FDRywyRUFBMkU7R0FDM0UsWUFBWTtJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG9GQUFvRjtJQUNwRixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsb0JBQW9COztDQUV2QjtBQUNEO0lBQ0ksK0dBQStHO0dBQ2hILG1CQUFtQjtHQUNuQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLGdCQUFnQjtHQUNoQixvQkFBb0I7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEI7MERBQW9KO0lBQ3BKLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7SUFDNUMseUJBQXlCO0lBQ3pCLGFBQWE7Q0FDaEI7QUE2QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQStDb0MiLCJmaWxlIjoic3JjL2FwcC9mcmVzaGVyL2ZyZXNoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlcntcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzOTMxYWYsICMwMGM2ZmYpO1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDk5dmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5yZWdpc3Rlci1sZWZ0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWxlZnQgaW5wdXR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzM4M2Q0MTtcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZWdpc3Rlci1yaWdodHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDEyNSwgMTUwLCAyMjQsIDAuMTApLHJnYmEoMTI1LCAxNTAsIDIyNCwgMC4xMCkpLHVybChcIi9hc3NldHMvYmFnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xyXG59XHJcblxyXG5cclxuLnJlZ2lzdGVyLWxlZnQgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZXIge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgcGFkZGluZzogMTIlO1xyXG4gICAgbWFyZ2luLXRvcDogLTklO1xyXG59XHJcbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybXtcclxuICAgIHBhZGRpbmc6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgXHJcbn1cclxuLnJlZ2lzdGVyIC5yZWdpc3RlcjEtZm9ybXtcclxuICAgIHBhZGRpbmc6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1JTtcclxufVxyXG4ucmVnaXN0ZXIgLnJlZ2lzdGVyMi1mb3Jte1xyXG4gICAgcGFkZGluZzogNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC03JTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLnJlYWN0aXZlZm9ybXtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJlYWN0aXZlZm9ybSAuYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLnJhZGlve1xyXG4gICAgLyotLS0tLS0tLS0tLS1nZW5kZXIgcmFkaW8gYnV0dG9uLS0tLS0tLS0tLS0qL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4ucmFkaW8xe1xyXG4gICAgLyotLS0tLS0tLS0tLS1jb3Vyc2UgdHlwZS0tLS0tLS0tLS0tKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi5yZWFjdGl2ZWZvcm0gLmJ0bmR7XHJcbiAgICAvKi0tLS0tLS0tLS0tLWJ0bmQgaXMgYSBjbGFzcyBvZiBncmFkaW5nIHN5c3RlbS0tLS0tLS0tLS0tKi9cclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgIFxyXG59XHJcbiNib2FyZDF7XHJcbiAgICAgLyotLS0tLS0tLS0tLS0tLS0tIHNzYyBib2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgbWFyZ2luLXRvcDogLTM0UHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbiNib2FyZHtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLSBzc2MgYm9hcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgbWFyZ2luLXRvcDogLTU4UHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuI2ludGVyX2NhdGVnb3J5MXtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLSBjYXRlZ29yeSBmb3IgaXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcbiNpbnRlcl9jYXRlZ29yeXtcclxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tIGludGVyIGNhdGVnZW9yeS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgIG1hcmdpbi10b3A6IC0yNlB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbiNzc2NfcGVyY2VudGFnZXtcclxuICAgICAvKi0tLS0tLS0tLS0tLS0tLS1zc2MgJS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBtYXJnaW4tdG9wOiAtMzRQeDtcclxuICAgXHJcbn1cclxuI3NzY19zY2hvb2x7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS1zc2Mgc2Nob29sLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgbWFyZ2luLXRvcDogLTM0UHg7XHJcbiAgXHJcbn1cclxuI3NzY19zY2hvb2xfbG9jYXRpb257XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS1zc2MgbG9jYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tdG9wOiAtMzRQeDtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4uYnRuY3tcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLWJ0bmMgaXMgYSBjbGFzcyBvZiBncmFkaW5nIHN5c3RlbSBkcm9wZG93bi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEzJTsgXHJcbn1cclxuLnJlYWN0aXZlZm9ybS5mb3JtLWdyb3Vwe1xyXG4gICAgcGFkZGluZzogMjAlO1xyXG59XHJcblxyXG4jc2F7XHJcbiAgIC8qLS0tLS0tLS0tLS0tLXRoaXMgc2EgaWQgaXMgZm9yIHVwbG9hZCBjZXJ0aWZpY2F0ZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBjb2xvcjogYmx1ZTtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5idG5te1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS10aGlzIGlzIGZvciBuZXh0IGJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIFxyXG59XHJcbi5idG5we1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS10aGlzIGlzIGZvciBwcmV2aW91cyBidXR0b24gaW4gZWR1Y2F0aW9uYWwgZGV0YWlscy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgd2lkdGg6IDE1JTtcclxuICAgbWFyZ2luLXRvcDogLTQlO1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiNhbnlkZWdyZWV7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmJ0bjF7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICB3aWR0aDoxNSU7XHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2xvc2UtaWNvbntcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZyx0cmFuc3BhcmVudCAwJSB0cmFuc3BhcmVudCAwJSB0cmFuc3BhcmVudCA0NiVcclxuICAgIHdoaXRlIDQ2JSB3aGl0ZSA1NiUgdHJhbnNwYXJlbnQgNTYlIHRyYW5zcGFyZW50IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICB9XHJcbmgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5yZWdpc3RlcntcclxuIHdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMjUwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuI3JlZ2lzdGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxubGFiZWx7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBcclxufVxyXG4jbmFtZXtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuLnJlZ2lzdGVyIGlucHV0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMCwgMTQ3LCAyMzgpO1xyXG59XHJcbiNzdWJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICB9XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/fresher/fresher.component.html":
/*!************************************************!*\
  !*** ./src/app/fresher/fresher.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngb-tabset #t=\"ngbTabset\">\n    <ngb-tab id=\"tab-selectbyid1\" title=\"Personal Details\">\n      <ng-template ngbTabContent>\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n            <div class=\"row\">\n              <div class=\"col-md-3 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-9 register-right\">\n\n                <div class=\"row register-form\">\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label for=\"firstName\"  style=\"color:blue\"> First Name * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter Your First Name\"\n                        name=\"firstName\" formControlName=\"firstName\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.firstName.errors && (reactiveForm.controls.firstName.touched || reactiveForm.controls.firstName.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','firstName')\"> FirstName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','firstName')\"> FirstName is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','firstName')\"> FirstName is must be 3 min</div>\n                      </div>\n\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label for=\"lastName\"  style=\"color:blue\"> LastName * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter Your LastName\"\n                        name=\"lastName\" formControlName=\"lastName\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.lastName.errors && (reactiveForm.controls.lastName.touched || reactiveForm.controls.lastName.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','lastName')\"> LastName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','lastName')\"> LastName is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','lastName')\"> LastName is must be 3 min</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"username\"  style=\"color:blue\"> email * </label>\n                      <input type=\"email\" class=\"form-control\" id=\"username\" placeholder=\"Enter Your email\"\n                        name=\"username\" formControlName=\"username\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.username.errors && (reactiveForm.controls.username.touched || reactiveForm.controls.username.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','username')\"> email is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','username')\"> email is invalid</div>\n\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"password\"  style=\"color:blue\"> password * </label>\n                      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Your password\"\n                        name=\"password\" formControlName=\"password\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.password.errors && (reactiveForm.controls.password.touched || reactiveForm.controls.password.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','password')\"> password is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','password')\"> password is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','password')\"> password is must be 6 min</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','password')\"> password is must be 10 max</div>\n                      </div>\n\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label  style=\"color:blue\"> Gender * </label> <br>\n                      <label for=\"gender\"  style=\"color:blue\">Male</label>\n                      <input type=\"radio\" value=\"Male\" formControlName=\"gender\">\n                      <label for=\"gender\"  style=\"color:blue\">Female</label>\n                      <input type=\"radio\" value=\"Female\" formControlName=\"gender\">\n                      <label for=\"gender\"  style=\"color:blue\">Others</label>\n                      <input type=\"radio\" value=\"Others\" formControlName=\"gender\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.gender.errors && (reactiveForm.controls.gender.touched || reactiveForm.controls.gender.dirty)\">\n                        <div *ngIf=\"reactiveForm.hasError('required','gender')\"> gender is Required</div>\n                      </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"address\"  style=\"color:blue\"> address * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Enter Your address\"\n                        name=\"address\" formControlName=\"address\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.address.errors && (reactiveForm.controls.address.touched || reactiveForm.controls.address.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','address')\"> address is Required</div>\n\n                      </div>\n\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                      <label for=\"phoneNumber\"  style=\"color:blue\"> phoneNumber * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" placeholder=\"Enter Your phoneNumber\"\n                        name=\"phoneNumber\" formControlName=\"phoneNumber\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.phoneNumber.errors && (reactiveForm.controls.phoneNumber.touched || reactiveForm.controls.phoneNumber.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','phoneNumber')\"> phoneNumber is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','phoneNumber')\"> phoneNumber is invalid</div>\n\n                      </div>\n\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                      <label for=\"file\"  style=\"color:blue\">Upload Resume</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\" style=\"height:100%\">\n                    </div>\n                \n                   \n                    <p>\n                      <button class=\"btnm btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Next</button>\n                    </p>\n\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n\n\n\n\n    <ngb-tab id=\"tab-selectbyid2\">\n      <ng-template ngbTabTitle>Educational Details</ng-template>\n      <ng-template ngbTabContent>\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n\n\n            <div class=\"row\">\n              <div class=\"col-md-2 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-10 register-right\">\n\n\n\n                <div class=\"row register-form\">\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"board1\" style=\"color:blue\">\n                      <label>SSC Board *</label>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label for=\"board\"></label>\n                      <select class=\"form-control\" id=\"board\" formControlName=\"board\">\n                        <option *ngFor=\"let board of boards\" [value]=\"board.id\">{{board.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_percentage\" placeholder=\"ssc%\"\n                        name=\"ssc_percentage\" formControlName=\"ssc_percentage\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_percentage.errors && (reactiveForm.controls.ssc_percentage.touched || reactiveForm.controls.ssc_percentage.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_percentage')\"> ssc% is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_percentage')\"> ssc% is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','ssc_percentage')\"> invalid </div>\n                      </div>\n\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_school\" placeholder=\"schoolName\" name=\"ssc_school\"\n                        formControlName=\"ssc_school\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_school.errors && (reactiveForm.controls.ssc_school.touched || reactiveForm.controls.ssc_school.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_school')\"> schoolName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_school')\"> schoolName is invalid</div>\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_school_location\" placeholder=\"location\"\n                        name=\"ssc_school_location\" formControlName=\"ssc_school_location\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_school_location.errors && (reactiveForm.controls.ssc_school_location.touched || reactiveForm.controls.ssc_school_location.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_school_location')\"> location is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_school_location')\"> schoolName is invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_passed_out_year\" placeholder=\"Year Of Pass\"\n                        name=\"ssc_passed_out_year\" formControlName=\"ssc_passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_passed_out_year.errors && (reactiveForm.controls.ssc_passed_out_year.touched || reactiveForm.controls.ssc_passed_out_year.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_passed_out_year')\"> Year of pass is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_passed_out_year')\"> year of pass is invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','ssc_passed_out_year')\"> year of pass is invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','ssc_passed_out_year')\"> year of pass is invalid\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <label for=\"file\"  style=\"color:blue\">Upload SSC</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\">\n                    </div>\n                  </div>\n\n\n\n                </div>\n\n                <div class=\"row register1-form\">\n\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"inter_category1\" style=\"color:rgb(240, 15, 191)\">\n                      <label  style=\"color:blue\">Category *</label>\n                    </div>\n                  </div>\n\n\n\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label for=\"inter_category\"></label>\n                      <select class=\"form-control\" id=\"inter_category\" formControlName=\"inter_category\">\n                        <option *ngFor=\"let inter_category of inter_categories\" [value]=\"inter_category.id\">\n                          {{inter_category.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_percentage\" placeholder=\"%\"\n                        name=\"inter_percentage\" formControlName=\"inter_percentage\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_percentage.errors && (reactiveForm.controls.inter_percentage.touched || reactiveForm.controls.inter_percentage.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_percentage')\"> IPE/DIP% is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_percentage')\"> IPE/DIP% is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','inter_percentage')\"> IPE/DIP% is must be 3max</div>\n                      </div>\n\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_school\" placeholder=\"collegeName\"\n                        name=\"inter_school\" formControlName=\"inter_school\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_school.errors && (reactiveForm.controls.inter_school.touched || reactiveForm.controls.inter_school.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_school')\"> collegeName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_school')\"> collegeName is invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_school_location\" placeholder=\"location\"\n                        name=\"inter_school_location\" formControlName=\"inter_school_location\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_school_location.errors && (reactiveForm.controls.inter_school_location.touched || reactiveForm.controls.inter_school_location.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_school_location')\"> collegelocation is\n                          Required</div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_passed_out_year\" placeholder=\"Year Of Pass\"\n                        name=\"inter_passed_out_year\" formControlName=\"inter_passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_passed_out_year.errors && (reactiveForm.controls.inter_passed_out_year.touched || reactiveForm.controls.inter_passed_out_year.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_passed_out_year')\"> Year of pass is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_passed_out_year')\"> year of pass is invalid\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n\n\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <label for=\"file\"  style=\"color:blue\">Upload IPE/DIP</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\">\n                    </div>\n                  </div>\n\n\n                </div>\n\n\n                <div class=\"row register2-form\">\n\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\" id=\"anydegree\"  style=\"color:blue\">\n                          <label>Any Degree *</label>\n                        </div>\n                      </div>\n    \n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"ugCourse\"  style=\"color:blue\"> Course:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"ugCourse\" placeholder=\"UG\" name=\"ugCourse\" formControlName=\"ugCourse\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ugCourse.errors && (reactiveForm.controls.ugCourse.touched || reactiveForm.controls.ugCourse.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ugCourse')\">\n                          Course is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ugCourse')\">\n                          Course is Invalid Format\n                        </div>\n\n\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n                      <label for=\"ugSpecialization\"  style=\"color:blue\"> Speciliazation:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"ugSpecialization\" name=\"ugSpecialization\"\n                        formControlName=\"ugSpecialization\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ugSpecialization.errors && (reactiveForm.controls.ugSpecialization.touched || reactiveForm.controls.ugSpecialization.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ugSpecialization')\">\n                          Speciliazation is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ugSpecialization')\">\n                          Speciliazation is Invalid Format\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n                      <label for=\"university_or_institute\"  style=\"color:blue\"> University:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"university_or_institute\" name=\"university_or_institute\"\n                        formControlName=\"university_or_institute\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.university_or_institute.errors && (reactiveForm.controls.university_or_institute.touched || reactiveForm.controls.university_or_institute.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','university_or_institute')\">\n                          university is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','university_or_institute')\">\n                          university is Invalid Format\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label  style=\"color:blue\"> courseType * </label> <br>\n                      <label for=\"courseType\"  style=\"color:blue\">Full Time</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Full Time\" formControlName=\"courseType\">\n                      <label for=\"courseType\"  style=\"color:blue\">Part Time</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Part Time\" formControlName=\"courseType\">\n                      <label for=\"courseType\"  style=\"color:blue\">Correspondece</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Correspondece\" formControlName=\"courseType\">\n                    </div>\n\n\n\n                  </div>\n\n\n\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"passed_out_year\"  style=\"color:blue\"> Passed Out year:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"passed_out_year\" name=\"passed_out_year\"\n                        formControlName=\"passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.passed_out_year.errors && (reactiveForm.controls.passed_out_year.touched || reactiveForm.controls.passed_out_year.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','passed_out_year')\">\n                          Passed Out Year is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','passed_out_year')\">\n                          university is Invalid Format\n                        </div>\n\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label  style=\"color:blue\">Grading System *</label><br>\n                      <select class=\"form-control\" id=\"gradingSystem\" formControlName=\"gradingSystem\">\n                        <option *ngFor=\"let gradingSystem of gradings\" [value]=\"gradingSystem.id\">{{gradingSystem.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"marks\"  style=\"color:blue\"> Marks:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"marks\" name=\"marks\" formControlName=\"marks\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.marks.errors && (reactiveForm.controls.marks.touched || reactiveForm.controls.marks.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','marks')\">\n                          Marks is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','marks')\">\n                          invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','marks')\">\n                          invalid\n                        </div>\n\n                      </div>\n\n                    </div>\n\n\n                  </div>\n                \n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" id=\"sa\">\n                      <label for=\"file\"  style=\"color:blue\">Upload Certificate</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileGraduation($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n\n                  <div class=\"col-md-8\">\n                      <div class=\"form-group\">\n                        <label  style=\"color:blue\"> Skills </label> <br>\n                        <input type=\"text\" placeholder=\"Enter Your Skills\" class=\"form-control\" id=\"skills\" name=\"skills\" formControlName=\"skills\">\n                        <div\n                        *ngIf=\"reactiveForm.controls.skills.errors && (reactiveForm.controls.skills.touched || reactiveForm.controls.skills.dirty)\"\n                        style=\"color:red\">\n                      </div>\n\n                    </div>\n                  </div>\n    \n\n                 \n    \n\n\n                    <div class=\"col-md-5\">\n                      <div class=\"form-group\">\n                        <label for=\"file\"  style=\"color:blue\">Upload Skills Certificate</label>\n                        <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileSkills($event)\" style=\"height:100%\">\n                      </div>\n    \n                    </div>\n    \n\n\n                </div>\n\n\n               \n\n                <button class=\"btnp btn-primary\" (click)=\"t.select('tab-selectbyid1')\">Previous</button>\n                \n\n                <button type=submit class=\"btn1 btn-primary\" (click)=\"registerUser(reactiveForm)\"> Submit </button>\n                \n              </div>\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n  </ngb-tabset>\n</div>"

/***/ }),

/***/ "./src/app/fresher/fresher.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fresher/fresher.component.ts ***!
  \**********************************************/
/*! exports provided: FresherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FresherComponent", function() { return FresherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fresher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fresher.service */ "./src/app/fresher.service.ts");




var FresherComponent = /** @class */ (function () {
    /*
      model: any = {}
      */
    function FresherComponent(fb, fresherService) {
        this.fb = fb;
        this.fresherService = fresherService;
        this.reactiveForm = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
        /*
        nestedReactiveForm: any = FormGroup;
        */
        this.userFile = File;
        this.userFiles = FileList;
        this.boards = [{ 'id': 'CBSE', 'name': 'CBSE' }, { 'id': 'ICSE', 'name': 'ICSE' }, { 'id': 'IB', 'name': 'IB' }, { 'id': 'STATEBOARD', 'name': 'STATEBOARD' }];
        this.inter_categories = [{ 'id': 'IPE', 'name': 'IPE' }, { 'id': 'DIP', 'name': 'DIP' }];
        this.gradings = [{ 'id': 1, 'name': 'scale 10' }, { 'id': 2, 'name': 'scale 5' }, { 'id': 3, 'name': '%marks of 100max' }];
        /*
         this.nestedReactiveForm = this.fb.group({
           graduations: this.fb.array([this.graduations()])
         });
         */
    }
    FresherComponent.prototype.onSelectFile = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    FresherComponent.prototype.onSelectFileSsc = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    FresherComponent.prototype.onSelectFileIpe = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    FresherComponent.prototype.onSelectFileGraduation = function (event) {
        var file = event.target.files;
        this.userFiles = file;
    };
    FresherComponent.prototype.onSelectFileSkills = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    /*
    graduations(): FormGroup {
      return this.fb.group({
        course: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(3)])],
        
        speciliazation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        university: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        email: ['', Validators.compose([Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')])],
        passedyear: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
        marks: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(1), Validators.maxLength(4)])],
        phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(10), Validators.maxLength(14)])],
        courseType :new FormControl('',Validators.required),
        grading: new FormControl('',[Validators.required]),
        
    
      })
    }
    */
    /*
    addNewForm(): void {
      const control = this.nestedReactiveForm.controls.graduations;
      control.push(this.graduations());
    }
  
    removeSelectedForm(index: number): void {
      const control = this.nestedReactiveForm.controls.graduations;
      control.removeAt(index);
    }
  */
    FresherComponent.prototype.ngOnInit = function () {
        this.reactiveForm = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
                ])]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z0-9!@#$%^&*()_+]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)
                ])]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14)
                ])]),
            board: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            ssc_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ])]),
            ssc_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z .A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            ssc_school_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            ssc_passed_out_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)
                ])]),
            inter_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            inter_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ])]),
            inter_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z .A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            inter_school_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            inter_passed_out_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)
                ])]),
            ugCourse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            ugSpecialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            university_or_institute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z .A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            courseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            passed_out_year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            gradingSystem: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)])],
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    FresherComponent.prototype.registerUser = function (submitForm) {
        if (submitForm.valid) {
            var user = submitForm.value;
            var formData = new FormData();
            formData.append('user', JSON.stringify(user));
            formData.append('file', this.userFile);
            //formData.append('files',this.userFiles);
            this.fresherService.registerFresher(formData).subscribe((function (response) {
                console.log(response);
            }));
        }
        else {
            this.validateFormFields(submitForm);
        }
        /* this.fresherService.registerFresher
           this.firstname,
           this.lastname
         ).subscribe(
           data => {
             alert("data submitted successfully" + data);
             console.log(data);
           }
         );*/
    };
    FresherComponent.prototype.validateFormFields = function (submitForm) {
        Object.keys(submitForm.controls).forEach(function (field) {
            var control = submitForm.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({
                    onlySelf: true
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "firstname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "lastname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "gender", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "phoneNumber", void 0);
    FresherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fresher',
            template: __webpack_require__(/*! ./fresher.component.html */ "./src/app/fresher/fresher.component.html"),
            styles: [__webpack_require__(/*! ./fresher.component.css */ "./src/app/fresher/fresher.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _fresher_service__WEBPACK_IMPORTED_MODULE_3__["FresherService"]])
    ], FresherComponent);
    return FresherComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen {\r\n   .dropdown:hover .dropdown-menu {\r\n     display: block;\r\n   }\r\n }\r\n .dropdown-menu{\r\n   max-width: 182px;\r\n }\r\n /*---navigation bar------*/\r\n #nav-bar{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 10;\r\n\r\n   }\r\n .navbar-brand img{\r\n   \r\n      height: 50px;\r\n      padding-left: 30px;\r\n      border-radius: 100%;\r\n   \r\n   }\r\n .navbar-nav li{\r\n      padding: 0 10px;\r\n      \r\n   }\r\n .navbar-nav li a{\r\n      float: right;\r\n      text-align: left;\r\n      color: white;\r\n    }\r\n .navbar-toggler{\r\n        border: none!important;\r\n    }\r\n .nav-link{\r\n        color: white;\r\n        font-weight: 600;\r\n        font-size: 16px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0c7S0FDRSxlQUFlO0lBQ2hCO0VBQ0Y7Q0FDRDtHQUNFLGlCQUFpQjtFQUNsQjtDQUdBLDJCQUEyQjtDQUMzQjtJQUNFLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFlBQVk7O0lBRVo7Q0FDRDs7TUFFRyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLG9CQUFvQjs7SUFFdEI7Q0FDRDtNQUNHLGdCQUFnQjs7SUFFbEI7Q0FDRDtNQUNHLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsYUFBYTtLQUNkO0NBR0Q7UUFDSSx1QkFBdUI7S0FDMUI7Q0FDRDtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZ0JBQWdCO0tBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIHtcclxuICAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG4gfVxyXG4gLmRyb3Bkb3duLW1lbnV7XHJcbiAgIG1heC13aWR0aDogMTgycHg7XHJcbiB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS1uYXZpZ2F0aW9uIGJhci0tLS0tLSovXHJcbiAgI25hdi1iYXJ7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG4gICB9XHJcbiAgIC5uYXZiYXItYnJhbmQgaW1ne1xyXG4gICBcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgIFxyXG4gICB9XHJcbiAgIC5uYXZiYXItbmF2IGxpe1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIFxyXG4gICB9XHJcbiAgIC5uYXZiYXItbmF2IGxpIGF7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubmF2YmFyLXRvZ2dsZXJ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uYXYtbGlua3tcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"/assets/logoo.png\"></a>\n     \n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n  <!------------------------------SEARCH BAR HERE---------------------------------->\n          <app-searchbar></app-searchbar>\n\n\n        <ul class=\"navbar-nav ml-auto\">\n         <!--------------------------------------------------------------------\n          <li class=\"nav-item\">           \n            <a class=\"nav-link\"routerLink=\"/main\" routerLinkActive=\"active\">Home </a>\n          </li>\n         ----------------------------------------------------------------------------->\n\n\n         <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n                <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n              Home</button>\n                <!---------------------------------------------------\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n            \n              <button class=\"dropdown-item\">Web Development</button>\n              <button class=\"dropdown-item\">App Development</button>\n              <button class=\"dropdown-item\">Digital Marketing</button>\n              <button class=\"dropdown-item\">Pharma</button>\n           \n            </div>\n               ----------------------------------------------------->\n          </div>\n\n\n\n\n\n\n\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n                <i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\n              Services</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n              <button class=\"dropdown-item\">Web Development</button>\n              <button class=\"dropdown-item\">App Development</button>\n              <button class=\"dropdown-item\">Digital Marketing</button>\n              <button class=\"dropdown-item\">Pharma</button>\n            </div>\n          </div>\n\n\n        <!-------------------------------------------------------------\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/mservices\" routerLinkActive=\"active\">Services</a>\n          </li>\n\n        ---------------------------------------------->\n<!--------------------------------------------------------------------------\n          <li class=\"nav-item\">\n              \n            <a class=\"nav-link\" routerLink=\"/testimonails\" routerLinkActive=\"active\">Testimonails</a>\n          </li>\n\n------------------------------------------------------------------------------->\n\n          <div ngbDropdown class=\"d-inline-block\">\n              <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n                  <i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>\n                Testimonails</button>\n            </div>\n        \n\n\n\n\n          <!------------------------------------------------------------------------------------>\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n              <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n              Login/Register</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n              <button class=\"dropdown-item\"><a routerLink=\"/auth/login\" routerLinkActive=\"active\">Jobseeker</a></button>\n              <button class=\"dropdown-item\">Employeer</button>\n             \n            </div>\n          </div>\n\n<!-----------------------------------------------------------------------\n         \n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/jobseeker\" routerLinkActive=\"active\">Jobseeker</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#employeer\">Employeer</a>\n            </li>\n\n---------------------------------------------------------------------------->\n\n<!--------------------------------------------------------------------\n            <li class=\"nav-item\">\n                \n                <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a>\n              </li>\n\n        </ul>\n      </div>\n     </nav>  \n  </section>\n  -------------------------------------------------------------------------------------------->\n\n\n    <div ngbDropdown class=\"d-inline-block\">\n      <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n          <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n        Contact Us</button>\n    </div>\n\n\n\n  </ul>\n\n \n</div>\n</nav>  \n</section>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#carouselExampleControls{\r\n    background: url(\"/assets/M.jpg\");\r\n   \r\n    min-width: 100%;\r\n}\r\n\r\nimg{\r\n    max-width: 250vh;\r\n    max-height: 74.5vh;\r\n   \r\n}\r\n\r\n.carousel-caption{\r\n    top: 30%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n    max-width: 600px;\r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n.btn{\r\n    margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7O0lBRWpDLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7O0NBRXRCOztBQUNEO0lBQ0ksU0FBUztJQUNULG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1COztDQUV0Qjs7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xze1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9NLmpwZ1wiKTtcclxuICAgXHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMjUwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NC41dmg7XHJcbiAgIFxyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3R0b206IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsIDEyNywgMjIxLCAwLjQpO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbn1cclxuLmJ0bntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n        \n      <img src=\"assets/pi.jpg\" class=\"d-block w-100\">\n      \n      <div class=\"carousel-caption animated rotateInUpRight\">\n        <h1>Dedicated Developement Team</h1>\n        <p>\n          \n          Hire top tech talent and quickly scale your delivery capacity. Our engineers have the necessary niche skills, deep expertise, and are highly loyal.\n        </p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/mi.jpg\" class=\"d-block w-100\">\n      <div class=\"carousel-caption animated rollIn\">\n        <h1>Mobile App Developement</h1>\n        <p>\n\n          Use our low-code platform and ten-year expertise in mobile app development to create a solid custom app faster than ever before.\n        </p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/fi.jpg\" class=\"d-block w-100\">\n      <div class=\"carousel-caption animated slideInLeft\">\n        <h1>Enterprise Software Developement</h1>\n        <p>\n          \n          Leverage our ten-year expertise to create a solid software foundation for your business.\n        </p>\n      </div>\n    </div>\n   \n   \n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n  <!--------\n   <div class=\"show text-center\">\n       <a routerLink=\"/main\" routerLinkActive=\"active\"> Show More</a>\n   </div>\n   ----->\n  \n</div>\n\n\n\n  \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home1/home1.component.css":
/*!*******************************************!*\
  !*** ./src/app/home1/home1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUxL2hvbWUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home1/home1.component.html":
/*!********************************************!*\
  !*** ./src/app/home1/home1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"info.token; else loggedOut\">\n  <h5 class=\"text-primary\">Your Information</h5>\n  <p>\n    <strong>Username:</strong> {{info.username}}<br/>\n    \n    \n  </p>\n  <button class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\n</div>\n\n<ng-template #loggedOut>\n  \n</ng-template>"

/***/ }),

/***/ "./src/app/home1/home1.component.ts":
/*!******************************************!*\
  !*** ./src/app/home1/home1.component.ts ***!
  \******************************************/
/*! exports provided: Home1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1Component", function() { return Home1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Home1Component = /** @class */ (function () {
    function Home1Component(token, route) {
        this.token = token;
        this.route = route;
    }
    Home1Component.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    Home1Component.prototype.logout = function () {
        this.token.signOut();
        //window.location.reload();
        this.route.navigate(['/auth/login']);
    };
    Home1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home1',
            template: __webpack_require__(/*! ./home1.component.html */ "./src/app/home1/home1.component.html"),
            styles: [__webpack_require__(/*! ./home1.component.css */ "./src/app/home1/home1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Home1Component);
    return Home1Component;
}());



/***/ }),

/***/ "./src/app/jobseeker/jobseeker.component.css":
/*!***************************************************!*\
  !*** ./src/app/jobseeker/jobseeker.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYnNlZWtlci9qb2JzZWVrZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/jobseeker/jobseeker.component.html":
/*!****************************************************!*\
  !*** ./src/app/jobseeker/jobseeker.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/jobseeker/jobseeker.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jobseeker/jobseeker.component.ts ***!
  \**************************************************/
/*! exports provided: JobseekerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobseekerComponent", function() { return JobseekerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobseekerComponent = /** @class */ (function () {
    function JobseekerComponent() {
    }
    JobseekerComponent.prototype.ngOnInit = function () {
    };
    JobseekerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobseeker',
            template: __webpack_require__(/*! ./jobseeker.component.html */ "./src/app/jobseeker/jobseeker.component.html"),
            styles: [__webpack_require__(/*! ./jobseeker.component.css */ "./src/app/jobseeker/jobseeker.component.css")]
        })
    ], JobseekerComponent);
    return JobseekerComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background: url(\"/assets/lg.jpg\") ;\r\n    height: 100vh;\r\n    min-width: 100%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n.col-sm-6{   \r\n    margin-left: 450px;\r\n    margin-top: 30px;   \r\n  \r\n}\r\n.jumbotron{\r\n    width: 400px;   \r\n        }\r\n.jumbotron img{\r\n          border-radius: 50%;\r\n          width: 50px;\r\n          height: 64px;\r\n          margin-left:134px;  \r\n        }\r\n.jumbotron h3{\r\n    text-align: center;    \r\n}\r\n.form-group .i{\r\n     float: left;\r\n }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0NBQ2hDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCOztDQUVwQjtBQUNEO0lBQ0ksYUFBYTtTQUNSO0FBQ1Q7VUFDVSxtQkFBbUI7VUFDbkIsWUFBWTtVQUNaLGFBQWE7VUFDYixrQkFBa0I7U0FDbkI7QUFDVDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNBO0tBQ0ksWUFBWTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2xnLmpwZ1wiKSA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmNvbC1zbS02eyAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgICBcclxuICBcclxufVxyXG4uanVtYm90cm9ue1xyXG4gICAgd2lkdGg6IDQwMHB4OyAgIFxyXG4gICAgICAgIH1cclxuLmp1bWJvdHJvbiBpbWd7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OjEzNHB4OyAgXHJcbiAgICAgICAgfVxyXG4uanVtYm90cm9uIGgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG4gLmZvcm0tZ3JvdXAgLml7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiB9XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn; else loggedOut\">\n  Successfully logged in. \n</div>\n\n<ng-template #loggedOut>\n  \n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-6\">\n\n        <div class=\"jumbotron\">\n            <img src=\"/assets/logoo.png\">\n          \n            <h3> Jobseeker Login</h3>\n     \n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n\n      <div class=\"form-group\">\n<!--------------------------------------\n        <label for=\"username\">Username</label>\n        -------------------------->\n\n        <i class=\"fa fa-envelope-o fa-fw\" aria-hidden=\"true\"></i>\n            \n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email ID\" name=\"Username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n\n          <div *ngIf=\"username.errors.required\" style=\"color:red\">UserName is Required</div>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n\n          <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n<!-----------------------------------------------\n        <label for=\"password\">Password</label>\n---------------------------->\n        <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n          required minlength=\"6\" />\n\n        <div *ngIf=\"f.submitted && password.invalid\">\n\n          <div *ngIf=\"password.errors.required\" style=\"color:red\">Password is Required</div>\n          <div *ngIf=\"password.errors.minlength\" style=\"color:red\">Password Must Be At Least 6 Characters</div>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n\n        <button class=\"btn btn-primary\">Login</button>\n        \n        <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n          Login failed: {{errorMessage}}\n        </div>\n\n      </div>\n\n    </form>\n\n    <a routerLink=\"/forgot\" routerLinkActive=\"active\">Forgot password?</a><br><br>\n\n    <a routerLink=\"/freshandexp\" routerLinkActive=\"active\"> Register </a>\n\n    </div>\n    \n    </div>\n\n  </div>\n  \n</div>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _auth_login_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/login-info */ "./src/app/auth/login-info.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage, route) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.route = route;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            //  this.roles = this.tokenStorage.getAuthorities();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.loginInfo = new _auth_login_info__WEBPACK_IMPORTED_MODULE_4__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            //   this.roles = this.tokenStorage.getAuthorities();
            // this.reloadPage();
            _this.route.navigate(['/trail']);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n <app-home></app-home>\n <!-----------------\n <app-searchbar></app-searchbar>\n          ----->\n <app-blink></app-blink>\n \n \n <app-side></app-side>\n <app-namescroll></app-namescroll>\n <app-mservices></app-mservices>\n <app-testimonails></app-testimonails>\n <app-scrollcandidates></app-scrollcandidates>\n <app-contact></app-contact>\n <app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/mservices/mservices.component.css":
/*!***************************************************!*\
  !*** ./src/app/mservices/mservices.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    /*-------Services------*/\r\n    #Services{\r\n        background-image:linear-gradient(rgba(33, 106, 224),rgba(33, 106, 224));\r\n      \r\n        background-size: cover;\r\n        background-position: center;\r\n        color:#efefef !important;\r\n        background-attachment: fixed;\r\n        padding-top: 8px;\r\n       \r\n        max-height: 636px;\r\n    }\r\n    #Services h1{\r\n        text-align: center;\r\n    \r\n        padding-bottom: 10px\r\n    }\r\n    #Services h1::after{\r\n      content: '';\r\n\r\n      display: block;\r\n      height: 3px;\r\n      width: 170px;\r\n      margin: 20px auto 5px;\r\n    }\r\n    .services{\r\n        margin-top: 40px;\r\n    }\r\n    .icon{\r\n        font-size: 40px;\r\n        margin: 20px auto;\r\n        padding: 8px;\r\n        height: 80px;\r\n        width: 80px;\r\n        border: 1px solid #fff;\r\n        border-radius: 50%;\r\n    }\r\n    #Services p{\r\n         font-size: 14px;\r\n         margin-top: 20px;\r\n         color: #ccc;\r\n    }\r\n    .services .col-md-3:hover{\r\n         background: #09bdeb;\r\n         cursor: pointer;\r\n         transition: 0.7s;\r\n     }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXNlcnZpY2VzL21zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJLHlCQUF5QjtJQUN6QjtRQUNJLHdFQUF3RTs7UUFFeEUsdUJBQXVCO1FBQ3ZCLDRCQUE0QjtRQUM1Qix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLGlCQUFpQjs7UUFFakIsa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxtQkFBbUI7O1FBRW5CLG9CQUFvQjtLQUN2QjtJQUNEO01BQ0UsWUFBWTs7TUFFWixlQUFlO01BQ2YsWUFBWTtNQUNaLGFBQWE7TUFDYixzQkFBc0I7S0FDdkI7SUFDRDtRQUNJLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsYUFBYTtRQUNiLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsbUJBQW1CO0tBQ3RCO0lBRUQ7U0FDSyxnQkFBZ0I7U0FDaEIsaUJBQWlCO1NBQ2pCLFlBQVk7S0FDaEI7SUFDQTtTQUNJLG9CQUFvQjtTQUNwQixnQkFBZ0I7U0FDaEIsaUJBQWlCO01BQ3BCIiwiZmlsZSI6InNyYy9hcHAvbXNlcnZpY2VzL21zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC8qLS0tLS0tLVNlcnZpY2VzLS0tLS0tKi9cclxuICAgICNTZXJ2aWNlc3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDMzLCAxMDYsIDIyNCkscmdiYSgzMywgMTA2LCAyMjQpKTtcclxuICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6I2VmZWZlZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgIFxyXG4gICAgICAgIG1heC1oZWlnaHQ6IDYzNnB4O1xyXG4gICAgfVxyXG4gICAgI1NlcnZpY2VzIGgxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbiAgICB9XHJcbiAgICAjU2VydmljZXMgaDE6OmFmdGVye1xyXG4gICAgICBjb250ZW50OiAnJztcclxuXHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICBtYXJnaW46IDIwcHggYXV0byA1cHg7XHJcbiAgICB9XHJcbiAgICAuc2VydmljZXN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuICAgIC5pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjU2VydmljZXMgcHtcclxuICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICBjb2xvcjogI2NjYztcclxuICAgIH1cclxuICAgICAuc2VydmljZXMgLmNvbC1tZC0zOmhvdmVye1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiAjMDliZGViO1xyXG4gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/mservices/mservices.component.html":
/*!****************************************************!*\
  !*** ./src/app/mservices/mservices.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!------------services--------->\n<div class=\"container\">      \n<section id=\"Services\">\n  \n        <h1> Our Services</h1>\n        <div class=\"row services\">\n            <div class=\"col-md-3 text-center\">\n               <div class=\"icon\">\n                  <i class=\"fa fa-desktop\"></i>\n               </div>\n                 <h3>Web Development</h3>\n                 <p>\n                       Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.\n                 </p>\n            </div>\n            <div class=\"col-md-3 text-center\">\n                   <div class=\"icon\">\n                      <i class=\"fa fa-tablet\"></i>\n                   </div>\n                     <h3>App Development</h3>\n                     <p>\n                           Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.\n                     </p>\n                </div>\n                <div class=\"col-md-3 text-center\">\n                       <div class=\"icon\">\n                          <i class=\"fa fa-line-chart\"></i>\n                       </div>\n                         <h3>Digital Marketing</h3>\n                         <p>\n                               Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.\n                         </p>\n                    </div>\n\n                    <div class=\"col-md-3 text-center\">\n                      <div class=\"icon\">\n                              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n\n                      </div>\n                        <h3>Pharma</h3>\n                        <p>\n                              Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.\n                        </p>\n                   </div>\n\n        </div>\n\n</section>\n</div>"

/***/ }),

/***/ "./src/app/mservices/mservices.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mservices/mservices.component.ts ***!
  \**************************************************/
/*! exports provided: MservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MservicesComponent", function() { return MservicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MservicesComponent = /** @class */ (function () {
    function MservicesComponent() {
    }
    MservicesComponent.prototype.ngOnInit = function () {
    };
    MservicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mservices',
            template: __webpack_require__(/*! ./mservices.component.html */ "./src/app/mservices/mservices.component.html"),
            styles: [__webpack_require__(/*! ./mservices.component.css */ "./src/app/mservices/mservices.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MservicesComponent);
    return MservicesComponent;
}());



/***/ }),

/***/ "./src/app/namescroll/namescroll.component.css":
/*!*****************************************************!*\
  !*** ./src/app/namescroll/namescroll.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-caption{\r\n    top: 30%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n   \r\n   \r\n   \r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n.carousel-item{\r\npadding: 5px;\r\n}\r\n.btn{\r\n    margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZXNjcm9sbC9uYW1lc2Nyb2xsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1Qsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isb0NBQW9DOzs7O0lBSXBDLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjs7Q0FFdEI7QUFDRDtBQUNBLGFBQWE7Q0FDWjtBQUdEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmFtZXNjcm9sbC9uYW1lc2Nyb2xsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtY2FwdGlvbntcclxuICAgIHRvcDogMzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm90dG9tOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExLCAxMjcsIDIyMSwgMC40KTtcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbn1cclxuLmNhcm91c2VsLWl0ZW17XHJcbnBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuXHJcbi5idG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/namescroll/namescroll.component.html":
/*!******************************************************!*\
  !*** ./src/app/namescroll/namescroll.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n \n       <div class=\"container\">\n \n      <div class=\"carousel-item active\" style=\"color:blue\">\n    <!-----------------------------\n        <img src=\"assets/bha.png\">\n        <img src=\"assets/info.jpg\">\n        <img src=\"assets/lti.png\">\n        <img src=\"assets/meg.jpg\">\n        <img src=\"assets/ora.png\">\n        <img src=\"assets/vir.png\">\n        <img src=\"assets/inf.png\">\n        <img src=\"assets/wip.png\">\n        <img src=\"assets/tcs.jpg\">\n       ---------------------------------->\n     <b>  Mekala Mallikarjuna Reddy Reddy Palem PedakodamaGundala Karampudi Mandal Palnadu Area Guntur District\n       AndhraPradesh</b>\n       \n      </div>\n \n \n      <div class=\"carousel-item\" style=\"color:green\">\n <i>\n Chandhraleka Thinakaran Hosur Village Krishna Giri District Tamilnadu State Pet Name Aandalu From Athibelli\n </i>\n       <!--------------------------------\n         <img src=\"assets/bha.png\">\n         <img src=\"assets/info.jpg\">\n         <img src=\"assets/cog.png\">\n         <img src=\"assets/cgi.png\">\n         <img src=\"assets/cog.png\">\n         <img src=\"assets/hcl.jpg\">\n         <img src=\"assets/hp.png\">\n         <img src=\"assets/wip.png\">\n         <img src=\"assets/vir.png\">\n        ------------------------------------>\n      </div>\n\n\n      <div class=\"carousel-item\" style=\"color:palevioletred\">\n          <b>\n          Sunanda Palaparthi Vindhooru Nellore District Alias Vijayasanthi from Gudur\n          </b>\n                <!--------------------------------\n                  <img src=\"assets/bha.png\">\n                  <img src=\"assets/info.jpg\">\n                  <img src=\"assets/cog.png\">\n                  <img src=\"assets/cgi.png\">\n                  <img src=\"assets/cog.png\">\n                  <img src=\"assets/hcl.jpg\">\n                  <img src=\"assets/hp.png\">\n                  <img src=\"assets/wip.png\">\n                  <img src=\"assets/vir.png\">\n                 ------------------------------------>\n               </div>\n              \n             \n     \n    \n     </div>\n    </div>\n \n \n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n   \n    \n  </div>\n \n \n \n \n  \n  \n  \n "

/***/ }),

/***/ "./src/app/namescroll/namescroll.component.ts":
/*!****************************************************!*\
  !*** ./src/app/namescroll/namescroll.component.ts ***!
  \****************************************************/
/*! exports provided: NamescrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamescrollComponent", function() { return NamescrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NamescrollComponent = /** @class */ (function () {
    function NamescrollComponent() {
    }
    NamescrollComponent.prototype.ngOnInit = function () {
    };
    NamescrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-namescroll',
            template: __webpack_require__(/*! ./namescroll.component.html */ "./src/app/namescroll/namescroll.component.html"),
            styles: [__webpack_require__(/*! ./namescroll.component.css */ "./src/app/namescroll/namescroll.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NamescrollComponent);
    return NamescrollComponent;
}());



/***/ }),

/***/ "./src/app/password/password.component.css":
/*!*************************************************!*\
  !*** ./src/app/password/password.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n     .container{\r\n      \r\n        background-position: center;\r\n         background-size: cover;\r\n         background-repeat: no-repeat;\r\n       }\r\n  \r\n      .row{\r\n       \r\n       \r\n      \r\n       position: absolute;\r\n        top: 50%;\r\n        left: 55%;\r\n         -webkit-transform: translate(-50%,-50%);\r\n                 transform: translate(-50%,-50%);\r\n         \r\n        box-sizing: border-box;\r\n       \r\n        border-radius: 10px;\r\n      }\r\n  \r\n      .jumbotron{\r\n              width: 400px;\r\n                }\r\n  \r\n      .jumbotron img{\r\n        border-radius: 50%;\r\n        width: 50px;\r\n        height: 64px;\r\n        margin-left:134px;\r\n  \r\n      }\r\n  \r\n      .row h3{\r\n        float: bottom;\r\n          margin-top:0px;\r\n          color: rgb(10, 147, 238);\r\n          text-align: center;\r\n          font-size: 25px;\r\n          padding-right: 0px; \r\n       }\r\n  \r\n      .form-group{\r\n        width: 100%;\r\n        overflow: hidden;\r\n        font-size: 15px;\r\n        padding: 2px ;\r\n        margin: 2px ;\r\n        margin-top: 4px;\r\n      }\r\n  \r\n      .form-group input{\r\n            \r\n          font-size: 15px;\r\n          width: 80%;\r\n          float: left;\r\n          margin: 0 10px;\r\n        }\r\n  \r\n      /*------------------------------------*/\r\n  \r\n      .btn{\r\n          width: 50%;\r\n          background: rgb(10, 147, 238);\r\n          padding: 5px;\r\n          font-size: 10px;\r\n          cursor: pointer;\r\n          margin-left:55px;\r\n        }\r\n  \r\n      .login-box,.btn {\r\n            font-size: 15px;\r\n         \r\n           \r\n        }\r\n  \r\n        \r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0tBQ0s7O1FBRUcsNEJBQTRCO1NBQzNCLHVCQUF1QjtTQUN2Qiw2QkFBNkI7UUFDOUI7O01BRUY7Ozs7T0FJQyxtQkFBbUI7UUFDbEIsU0FBUztRQUNULFVBQVU7U0FDVCx3Q0FBZ0M7aUJBQWhDLGdDQUFnQzs7UUFFakMsdUJBQXVCOztRQUV2QixvQkFBb0I7T0FDckI7O01BQ0M7Y0FDTSxhQUFhO2lCQUNWOztNQUVYO1FBQ0UsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCOztPQUVuQjs7TUFFQTtRQUNDLGNBQWM7VUFDWixlQUFlO1VBQ2YseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsbUJBQW1CO1FBQ3JCOztNQUVGO1FBQ0UsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7T0FDakI7O01BS0M7O1VBRUUsZ0JBQWdCO1VBQ2hCLFdBQVc7VUFDWCxZQUFZO1VBQ1osZUFBZTtTQUNoQjs7TUFHUCx3Q0FBd0M7O01BRWxDO1VBQ0UsV0FBVztVQUNYLDhCQUE4QjtVQUM5QixhQUFhO1VBQ2IsZ0JBQWdCO1VBQ2hCLGdCQUFnQjtVQUNoQixpQkFBaUI7U0FDbEI7O01BRUQ7WUFDSSxnQkFBZ0I7OztTQUduQiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgICAuY29udGFpbmVye1xyXG4gICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3d7XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1NSU7XHJcbiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICAgLmp1bWJvdHJvbntcclxuICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgLmp1bWJvdHJvbiBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMzRweDtcclxuICBcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAgLnJvdyBoM3tcclxuICAgICAgICBmbG9hdDogYm90dG9tO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEwLCAxNDcsIDIzOCk7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7IFxyXG4gICAgICAgfVxyXG4gIFxyXG4gICAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggO1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgXHJcbiAgICAgICBcclxuICBcclxuICAgICAgICAuZm9ybS1ncm91cCBpbnB1dHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgICBcclxuICAgICAgICAuYnRue1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMCwgMTQ3LCAyMzgpO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6NTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxvZ2luLWJveCwuYnRuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICJdfQ== */"

/***/ }),

/***/ "./src/app/password/password.component.html":
/*!**************************************************!*\
  !*** ./src/app/password/password.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--------------------------------------------------->\n<div class=container>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"jumbotron\">\n            <img src=\"/assets/logoo.png\">\n            \n          <h3> Change Password</h3>\n          <form [formGroup]=\"reactiveForm\">\n  \n              <div class=\"form-group\">\n              \n                  <input type=\"text\" class=\"form-control\" id=\"otp\" placeholder=\"Enter Your OTP\"\n                    name=\"otp\" formControlName=\"otp\">\n                  <div\n                    *ngIf=\"reactiveForm.controls.otp.errors && (reactiveForm.controls.otp.touched || reactiveForm.controls.otp.dirty)\"\n                    style=\"color: blue\">\n                    <div *ngIf=\"reactiveForm.hasError('required','otp')\"> OTP is Required</div>\n                    <div *ngIf=\"reactiveForm.hasError('pattern','otp')\"> OTP is invalid</div>\n                    <div *ngIf=\"reactiveForm.hasError('minlength','otp')\"> OTP is must be 3 min</div>\n                  </div>\n      \n                </div>\n  \n  \n                <div class=\"form-group\">\n              \n                    <input type=\"text\" class=\"form-control\" id=\"newpassword\" placeholder=\"Enter New Password\"\n                      name=\"newpassword\" formControlName=\"newpassword\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.newpassword.errors && (reactiveForm.controls.newpassword.touched || reactiveForm.controls.newpassword.dirty)\"\n                      style=\"color: blue\">\n                      <div *ngIf=\"reactiveForm.hasError('required','newpassword')\"> New Password is Required</div>\n                      <div *ngIf=\"reactiveForm.hasError('pattern','newpassword')\">  invalid</div>\n                      <div *ngIf=\"reactiveForm.hasError('minlength','newpassword')\"> Password must be 6 min</div>\n                    </div>\n        \n                  </div>\n           \n  \n                  <div class=\"form-group\">\n              \n                      <input type=\"text\" class=\"form-control\" id=\"confirmpassword\" placeholder=\"Confirm Password\"\n                        name=\"confirmpassword\" formControlName=\"confirmpassword\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.confirmpassword.errors && (reactiveForm.controls.confirmpassword.touched || reactiveForm.controls.confirmpassword.dirty)\"\n                        style=\"color: blue\">\n                        <div *ngIf=\"reactiveForm.hasError('required','confirmpassword')\"> Confirm Password is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','confirmpassword')\">  invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','confirmpassword')\"> Password must be 6 min</div>\n                      </div>\n          \n                    </div>\n  \n            <div class=\"form-group\">\n              <button class=\"btn btn-primary\"> Submit </button>\n            </div>\n  \n            \n  \n  \n          </form>\n  \n        </div>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/password/password.component.ts":
/*!************************************************!*\
  !*** ./src/app/password/password.component.ts ***!
  \************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PasswordComponent = /** @class */ (function () {
    function PasswordComponent() {
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/password/password.component.html"),
            styles: [__webpack_require__(/*! ./password.component.css */ "./src/app/password/password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/scrollcandidates/scrollcandidates.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/scrollcandidates/scrollcandidates.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user{\r\n    width: 160px;\r\n    height: 160px;\r\n    border-radius: 50%;\r\n    margin-top: 42px;\r\n   \r\n  }\r\n  .header{\r\n    height: 30vh;\r\n    background-image: linear-gradient(rgba(66, 109, 238, 0.7),rgba(66, 109, 238, 0.7)),url(\"/assets/lg.jpg\");\r\n    background-size: cover;\r\n    background-position: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: sans-serif;\r\n    margin-bottom: 30px;\r\n  }\r\n  .form-box .user{\r\n    width: 160px;\r\n    height: 160px;\r\n    border-radius: 50%;\r\n    margin-left: 60px;\r\n    margin-top: 1px;\r\n  }\r\n  .letters{\r\n      padding-left: 268px;\r\n      margin-top: -100px;\r\n  }\r\n  .carousel-caption{\r\n    top: 30%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  \r\n  }\r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsY2FuZGlkYXRlcy9zY3JvbGxjYW5kaWRhdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7O0dBRWxCO0VBQ0Q7SUFDRSxhQUFhO0lBQ2IseUdBQXlHO0lBQ3pHLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtHQUNqQjtFQUNEO01BQ0ksb0JBQW9CO01BQ3BCLG1CQUFtQjtHQUN0QjtFQUdEO0lBQ0UsU0FBUztJQUNULG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7O0dBRXBCIiwiZmlsZSI6InNyYy9hcHAvc2Nyb2xsY2FuZGlkYXRlcy9zY3JvbGxjYW5kaWRhdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcntcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xyXG4gICBcclxuICB9XHJcbiAgLmhlYWRlcntcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDY2LCAxMDksIDIzOCwgMC43KSxyZ2JhKDY2LCAxMDksIDIzOCwgMC43KSksdXJsKFwiL2Fzc2V0cy9sZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLmZvcm0tYm94IC51c2Vye1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIH1cclxuICAubGV0dGVyc3tcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyNjhweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gIC5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3R0b206IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsIDEyNywgMjIxLCAwLjQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/scrollcandidates/scrollcandidates.component.html":
/*!******************************************************************!*\
  !*** ./src/app/scrollcandidates/scrollcandidates.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n\n    <div class=\"container\">\n\n        <div class=\"carousel-item active\" style=\"color:rgb(103, 15, 218)\">\n            <div class=\"header\">\n              <form>          \n                <div class=\"form-box\">\n                  <img src=\"/assets/sm.jpg\" class=\"user\"> \n                  <p class=\"letters\"> <b> \"I followed a link for a job on SahiUdhyog and uploaded my resume.About two hours later. I received an email from an employer looking for someone with my skills.In a week's time and four interviews later I have a fantastic new job!! Thanks SahiUdhyog!! \"</b> </p>\n               </div>\n              </form>\n            </div>\n    \n          </div>\n    \n    \n\n      <div class=\"carousel-item\" style=\"color:rgb(26, 214, 228)\">\n          <div class=\"header\">\n            <form>          \n              <div class=\"form-box\">\n                <img src=\"/assets/c.jpg\" class=\"user\"> \n                <p class=\"letters\"><b> \" I followed a link for a job on SahiUdhyog and uploaded my resume.About two hours later. I received an email from an employer looking for someone with my skills.In a week's time and four interviews later I have a fantastic new job!! Thanks SahiUdhyog!! \" </b> </p>\n             </div>\n            </form>\n          </div>\n  \n        </div>\n  \n  \n      <div class=\"carousel-item\" style=\"color:rgb(240, 12, 164)\">\n        <div class=\"header\">\n          <form>          \n            <div class=\"form-box\">\n              <img src=\"/assets/t.jpg\" class=\"user\"> \n              <p class=\"letters\"> <b>\" I followed a link for a job on SahiUdhyog and uploaded my resume.About two hours later. I received an email from an employer looking for someone with my skills.In a week's time and four interviews later I have a fantastic new job!! Thanks SahiUdhyog!! \" </b> </p>\n           </div>\n          </form>\n        </div>\n\n      </div>\n\n\n    </div>\n  </div>\n\n\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n\n\n</div>"

/***/ }),

/***/ "./src/app/scrollcandidates/scrollcandidates.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/scrollcandidates/scrollcandidates.component.ts ***!
  \****************************************************************/
/*! exports provided: ScrollcandidatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollcandidatesComponent", function() { return ScrollcandidatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScrollcandidatesComponent = /** @class */ (function () {
    function ScrollcandidatesComponent() {
    }
    ScrollcandidatesComponent.prototype.ngOnInit = function () {
    };
    ScrollcandidatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scrollcandidates',
            template: __webpack_require__(/*! ./scrollcandidates.component.html */ "./src/app/scrollcandidates/scrollcandidates.component.html"),
            styles: [__webpack_require__(/*! ./scrollcandidates.component.css */ "./src/app/scrollcandidates/scrollcandidates.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScrollcandidatesComponent);
    return ScrollcandidatesComponent;
}());



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.searchbar{\r\n    margin-bottom: auto;\r\n    margin-top: auto;\r\n    height: 50px;\r\n    background-color: blue;\r\n    border-radius: 30px;\r\n    padding: 10px;\r\n    \r\n    }\r\n  \r\n    .search_input{\r\n    color: white;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    width: 0;\r\n    caret-color:transparent;\r\n    line-height: 40px;\r\n    transition: width 0.4s linear;\r\n    }\r\n  \r\n    .searchbar:hover > .search_input{\r\n    padding: 0 10px;\r\n    width: 450px;\r\n    caret-color:red;\r\n    transition: width 0.4s linear;\r\n    }\r\n  \r\n    .searchbar:hover > .search_icon{\r\n    background: white;\r\n    color: #e74c3c;\r\n    }\r\n  \r\n    .search_icon{\r\n    height: 40px;\r\n    width: 40px;\r\n    float: right;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    color:white;\r\n    margin-top: -5px;\r\n    }\r\n  \r\n    /*-----------------------------------------------------------------------------\r\n    \r\n    .header{\r\n        height: 8vh;\r\n        width: 600px;\r\n        margin-left: 30px;\r\n     \r\n        background-size: cover;\r\n        background-position: center;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        font-family: sans-serif;\r\n    }\r\n\r\n   \r\n    .search-field{\r\n          \r\n        height: 20px;\r\n        padding: 15px;\r\n   \r\n    }\r\n    #search{\r\n        margin: 13px;\r\n        width: 365px;\r\n        margin-left: 2px;\r\n    }\r\n    .skills{\r\n        width: 200px;\r\n\r\n    }\r\n    .location{\r\n        width: 100px;\r\n    }\r\n\r\n    #location{\r\n        margin: 5px;\r\n    }\r\n    .search-btn{\r\n\r\n        height: 34px;\r\n        width: 75px;\r\n        margin-left: 20px;\r\n        background: #0eb6e9;\r\n        border: none;\r\n        color: #fff;\r\n\r\n    }\r\n\r\n    .search-btn:hover\r\n    {\r\n \r\n        background: #1d0fda;\r\n       cursor: pointer;       \r\n    }\r\n \r\n\r\n---------------------------------------------------*/\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsY0FBYzs7S0FFYjs7SUFFRDtJQUNBLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7S0FDN0I7O0lBRUQ7SUFDQSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw4QkFBOEI7S0FDN0I7O0lBRUQ7SUFDQSxrQkFBa0I7SUFDbEIsZUFBZTtLQUNkOztJQUVEO0lBQ0EsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7S0FDaEI7O0lBWUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREF5RHFEIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWFyY2hiYXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlYXJjaF9pbnB1dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBjYXJldC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pbnB1dHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGNhcmV0LWNvbG9yOnJlZDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaWNvbntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VhcmNoX2ljb257XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICB9ICBcclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6IDh2aDtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICAuc2VhcmNoLWZpZWxke1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgIFxyXG4gICAgfVxyXG4gICAgI3NlYXJjaHtcclxuICAgICAgICBtYXJnaW46IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDM2NXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB9XHJcbiAgICAuc2tpbGxze1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuXHJcbiAgICB9XHJcbiAgICAubG9jYXRpb257XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNsb2NhdGlvbntcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtYnRue1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzBlYjZlOTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYnRuOmhvdmVyXHJcbiAgICB7XHJcbiBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWQwZmRhO1xyXG4gICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICBcclxuICAgIH1cclxuIFxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"container h-100\">\n        \n        <div class=\"d-flex justify-content-center h-100\">\n          <div class=\"searchbar\">\n             \n            <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Key Skills Search here...\">\n            <a href=\"#\" class=\"search_icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a>\n          \n          </div>\n        </div>\n      </div>\n    \n\n\n\n\n\n\n<!---------------------------------\n<body>\n  <div class=\"header\">\n    <form>\n    \n       <div class=\"form-box\">\n         <input class=\"search-field skills\" id=\"search\" name=\"search\" type=\"text\" placeholder=\"Skills,keywords.....\"/>\n         \n         <input class=\"search-field location\" id=\"location\" name=\"location\" type=\"text\" placeholder=\"location\"/>\n\n         <button class=\"search-btn\" type=\"button\"> Search </button>\n         \n       </div>\n    </form>\n  </div>\n</body>\n----------------->"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent() {
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    SearchbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/searchbar/searchbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/compare-validator.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/compare-validator.directive.ts ***!
  \*******************************************************/
/*! exports provided: CompareValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareValidatorDirective", function() { return CompareValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CompareValidatorDirective = /** @class */ (function () {
    function CompareValidatorDirective() {
    }
    CompareValidatorDirective_1 = CompareValidatorDirective;
    CompareValidatorDirective.prototype.validate = function (c) {
        if (c.value === null || c.value.length === 0) {
            return null; // dont validate empty value
        }
        var controlToCompare = c.root.get(this.controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    };
    var CompareValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('compare'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CompareValidatorDirective.prototype, "controlNameToCompare", void 0);
    CompareValidatorDirective = CompareValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[compare]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: CompareValidatorDirective_1, multi: true }]
        })
    ], CompareValidatorDirective);
    return CompareValidatorDirective;
}());



/***/ }),

/***/ "./src/app/side/side.component.css":
/*!*****************************************!*\
  !*** ./src/app/side/side.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n   max-width: 20vh;\r\n    height: 50px;\r\n    font-family: Roboto,sans-serif;    \r\n}\r\n.blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n}\r\n@-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n.JP img{\r\n    max-width: 100vh;\r\n    height: 250px;\r\n    margin-top: 50px;    \r\n}\r\n.central img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;    \r\n}\r\n.booz img{\r\n    max-width: 100vh;\r\n    height: 60px;   \r\n   margin-top: 50px;    \r\n}\r\n.wipro img{\r\n    max-width: 100vh;\r\n    height: 60px;   \r\n    margin-top: 50px;    \r\n}\r\n.ups img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;   \r\n}\r\n.infosys img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;   \r\n}\r\n.deloit img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;   \r\n}\r\n.row .register-form{\r\n  margin-top: 30px;\r\n  margin-left: 10px;\r\n}\r\n.nav-link{\r\n    /*--------------------Innodata India Pvt. Ltd.-----------------------*/\r\n    display: block;\r\n    padding: 1px;\r\n    font-size: 12px;\r\n}\r\n.inf{\r\n    font-weight: 700;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS9zaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxnQkFBZ0I7SUFDZixhQUFhO0lBQ2IsK0JBQStCO0NBQ2xDO0FBQ0Q7SUFDSSw4Q0FBOEM7SUFFOUMsc0NBQXNDO0NBQ3pDO0FBRUQ7SUFDSSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0NBQ3BCO0FBTUQ7SUFDSSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0NBQ3BCO0FBR0Q7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0dBQ2QsaUJBQWlCO0NBQ25CO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjtBQUdEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjtBQUNEO0lBQ0ksdUVBQXVFO0lBQ3ZFLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9zaWRlL3NpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgbWF4LXdpZHRoOiAyMHZoO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxzYW5zLXNlcmlmOyAgICBcclxufVxyXG4uYmxpbmt7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcblxyXG4uSlAgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxufVxyXG4uY2VudHJhbCBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiA2MHB4OyAgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxufVxyXG4uYm9veiBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiA2MHB4OyAgIFxyXG4gICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxufVxyXG4ud2lwcm8gaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogNjBweDsgICBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgIFxyXG59XHJcbi51cHMgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDsgICBcclxufVxyXG4uaW5mb3N5cyBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiA2MHB4OyAgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAgIFxyXG59XHJcbi5kZWxvaXQgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDsgICBcclxufVxyXG5cclxuXHJcbi5yb3cgLnJlZ2lzdGVyLWZvcm17XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tSW5ub2RhdGEgSW5kaWEgUHZ0LiBMdGQuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmluZntcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/side/side.component.html":
/*!******************************************!*\
  !*** ./src/app/side/side.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-2 bg\">\n\n            <table>\n\n                <tr>\n                    <!---------------------------\n          <button class=\"btn btn-primary\"><h6> Top Employeers</h6></button>\n          -------------->\n\n                    <span class=\"b\">\n\n                        <td><img src=\"assets/conan.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/fis.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/cgi.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/gen.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/syn.gif\" class=\"d-block w-100\"></td><br><br>\n                        \n                        <td><img src=\"assets/will.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/air.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/epa.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/dbs.gif\" class=\"d-block w-100\"></td><br><br>\n\n                        <td><img src=\"assets/condu.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/orac.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/cme.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/bpo.gif\" class=\"d-block w-100\"></td><br><br>\n<!---------------------------------------------------------------------------------------------\n                        <td><img src=\"assets/ril.gif\" class=\"d-block w-100\"></td><br>\n                        <td><img src=\"assets/mav.gif\" class=\"d-block w-100\"></td><br>\n                        <td><img src=\"assets/in.gif\" class=\"d-block w-100\"></td><br>\n                        <td><img src=\"assets/bar.gif\" class=\"d-block w-100\"></td><br>\n\n----------------------------------------------------------------------------------------------->\n\n\n                    </span>\n\n                </tr>\n            </table>\n\n        </div>\n        <div class=\"col-md-7\">\n            <!---------------------------------------------------------------------------------------------------------->\n\n            <div class=\"container\">\n\n                <h6 style=\"color:blue\"><b> Best Places To Work </b></h6>\n\n                <ngb-tabset #t=\"ngbTabset\">\n                    <ngb-tab id=\"tab-selectbyid1\" title=\"All Sectors\">\n                        <ng-template ngbTabContent>\n\n                            <div class=\"row register-form\">\n         <!----------------------------------------------------------------------------------->\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <span class=\"inf\">Information Technology </span>\n\n                                        <br> <br>\n\n                                        ITES/BPO/.COM\n                                       <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\n                                   </div>\n                                </div>\n\n          <!------------------------------------------------------------------------------->\n\n                                <div class=\"col-md-4\">\n\n                                  <div class=\"form-group\">\n                                            Durable/FMCG/Electr.\n\n                                 <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\n                                 <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\n                                 <a class=\"nav-link\" href=\"#\">Miraj Group</a>\n                                 <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\n\n                                    </div>\n                                </div>\n\n     <!------------------------------------------------------------------------------->\n\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                      RealEstate/Constr.\n\n                                      <a class=\"nav-link\" href=\"#\">DLF Ltd.</a>\n                                 <a class=\"nav-link\" href=\"#\">IREO Pvt. Ltd.</a>\n\n                                    </div>\n                                </div>\n <!------------------------------------------------------------------------------->\n\n\n <div class=\"col-md-4\">\n        <div class=\"form-group\">\n                Product Software\n\n          <a class=\"nav-link\" href=\"#\">Seven Lakes Technologies Pvt. Ltd. </a>\n    \n        </div>\n    </div>\n\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                    Engg./Infra./Mining\n\n              <a class=\"nav-link\" href=\"#\">Nuberg Engineering Ltd</a>\n         <a class=\"nav-link\" href=\"#\">Rockwell</a>\n\n            </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        <span class=\"inf\">Services </span>\n\n                        Dotcom/Internet/E-Commerce\n\n                  <a class=\"nav-link\" href=\"#\">IndiaMart InterMesh Ltd.</a>\n            \n                </div>\n            </div>\n\n <!------------------------------------------------------------------------------->\n\n\n <div class=\"col-md-4\">\n        <div class=\"form-group\">\n                Software Services\n\n          <a class=\"nav-link\" href=\"#\">Birlasoft (India) Ltd.</a>\n          <a class=\"nav-link\" href=\"#\">ESDS Software Solution </a>\n          <a class=\"nav-link\" href=\"#\">Judge India Solutions </a>\n          <a class=\"nav-link\" href=\"#\">Neoris Consulting Services </a>\n    \n        </div>\n    </div>\n\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                    Healthcare/Pharma\n\n              <a class=\"nav-link\" href=\"#\">Indegene Pvt. Ltd.</a>\n              <a class=\"nav-link\" href=\"#\">Wockhardt Hospitals Ltd.</a>\n              <a class=\"nav-link\" href=\"#\">Zydus Hospitals.</a>\n\n            </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        Education/Media\n\n                  <a class=\"nav-link\" href=\"#\">EINS Education</a>\n            \n                </div>\n            </div>\n\n            \n <!------------------------------------------------------------------------------->\n\n\n <div class=\"col-md-4\">\n        <div class=\"form-group\">\n                <span class=\"inf\">Manufacturing </span>\n                  <br><br>\n                Auto/ Auto Equip.\n\n          <a class=\"nav-link\" href=\"#\">Endurance Technologies Limited</a>\n         \n    \n        </div>\n    </div>\n\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                    Interior Solutions/FMCG\n\n              <a class=\"nav-link\" href=\"#\">Merino Group.</a>\n              \n\n            </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        Finance/Insurance\n\n                  <a class=\"nav-link\" href=\"#\">Sun Life India Service Centre Pvt. Ltd.</a>\n            \n                </div>\n            </div>\n\n\n<!------------------------------------------------------------------------------->\n\n\n<div class=\"col-md-4\">\n        <div class=\"form-group\">\n                Diversified/Retail\n\n          <a class=\"nav-link\" href=\"#\">Lakshmi - Life Science/Cargo/Technology</a>\n          <a class=\"nav-link\" href=\"#\">LENSKART SOLUTIONS PRIVATE LIMITED</a>\n          <a class=\"nav-link\" href=\"#\">Shoppers Stop Limited</a>\n          <a class=\"nav-link\" href=\"#\">Unison International</a>\n          <a class=\"nav-link\" href=\"#\">Xpert Conexions</a>\n               \n         \n    \n        </div>\n    </div>\n\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                    Logistics/Shipping\n\n              <a class=\"nav-link\" href=\"#\">Total Group.</a>\n\n              Printing & Packaging\n              <a class=\"nav-link\" href=\"#\">UFLEX</a>\n              <a class=\"nav-link\" href=\"#\">Mancer Consulting Services.</a>\n              <a class=\"nav-link\" href=\"#\">Mastermind Network</a>\n              <a class=\"nav-link\" href=\"#\">SV Management Consultant’s Indore</a>\n\n\n            </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        Search Firms\n\n                  <a class=\"nav-link\" href=\"#\">Adeo Consultancy Private Limited</a>\n                  <a class=\"nav-link\" href=\"#\">Careerist</a>\n                  <a class=\"nav-link\" href=\"#\">Crescendo Global</a>\n                  <a class=\"nav-link\" href=\"#\">e-Solutions IT Services Pvt. Ltd.</a>\n                  <a class=\"nav-link\" href=\"#\">Highpoints Technologies</a>\n                  <a class=\"nav-link\" href=\"#\">KRM Global</a>\n                 \n                \n                </div>\n            </div>\n\n\n\n<!------------------------------------------------------------------------------->\n\n\n<div class=\"col-md-4\">\n    <div class=\"form-group\">\n        ChipDsg/Semicond.\n\n      <a class=\"nav-link\" href=\"#\">Einfochips Ltd</a>\n      <a class=\"nav-link\" href=\"#\">GLOBALFOUNDRIES Engineering Private Limited</a>\n      <a class=\"nav-link\" href=\"#\">Intel</a>\n      <a class=\"nav-link\" href=\"#\">Invescas Technologies India Ltd</a>\n      <a class=\"nav-link\" href=\"#\">Maxim Integrated</a>\n\n      <a class=\"nav-link\" href=\"#\">Micron</a>\n      <a class=\"nav-link\" href=\"#\">Sankalp Semiconductors</a>\n      <a class=\"nav-link\" href=\"#\">XILINX</a>\n      <a class=\"nav-link\" href=\"#\">Western Digital</a>\n     \n      Cloud Computing\n      <a class=\"nav-link\" href=\"#\"> Secure - 24 IT Services Pvt Ltd  </a>\n     \n     \n\n    </div>\n</div>\n\n\n\n<div class=\"col-md-4\">\n        <div class=\"form-group\">\n            Digital Agencies\n\n          <a class=\"nav-link\" href=\"#\">BORN Commerce Private Limited</a>\n\n          Engineering Services\n          <a class=\"nav-link\" href=\"#\">DesignTech Systems Ltd.</a>\n          <a class=\"nav-link\" href=\"#\">Hinduja Tech Limited</a>\n          <a class=\"nav-link\" href=\"#\">QuEST Global</a>\n          <a class=\"nav-link\" href=\"#\">Robert Bosch Engineering and Business Solution Limited</a>\n          <a class=\"nav-link\" href=\"#\">TÜV SÜD South Asia Pvt. Ltd.</a>\n\n\n\n        </div>\n    </div>\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                Financial Services & Software\n\n              <a class=\"nav-link\" href=\"#\">BLACKROCK</a>\n              <a class=\"nav-link\" href=\"#\">Factset Systems Inc.</a>\n             \n              Gaming\n\n              <a class=\"nav-link\" href=\"#\">Electronic Arts Games (India) Pvt. Ltd.</a>\n              <a class=\"nav-link\" href=\"#\">UBISOFT</a>\n              Healthcare/Pharma\n              <a class=\"nav-link\" href=\"#\">AstraZeneca</a>\n              <a class=\"nav-link\" href=\"#\">Cotiviti India Private Limited</a>\n             \n            \n            </div>\n        </div>\n\n\n\n<!------------------------------------------------------------------------------->\n\n\n\n\n\n\n                            </div>\n\n                        </ng-template>\n                    </ngb-tab>\n\n\n\n                    <ngb-tab id=\"tab-selectbyid2\" title=\"Information Technology\">\n                        <ng-template ngbTabContent>\n\n\n\n\n                        </ng-template>\n                    </ngb-tab>\n\n\n\n\n\n\n\n                    <ngb-tab id=\"tab-selectbyid3\" title=\"Manufacturing\">\n                        <ng-template ngbTabContent>\n\n\n\n\n                        </ng-template>\n                    </ngb-tab>\n\n\n\n\n                    <ngb-tab id=\"tab-selectbyid4\" title=\"Services\">\n                        <ng-template ngbTabContent>\n\n\n\n\n                        </ng-template>\n                    </ngb-tab>\n\n\n\n\n\n                </ngb-tabset>\n            </div>\n            <!------------------------------------------------------------------------------------------------------->\n        </div>\n\n        <div class=\"col-md-3\">\n\n            <div class=\"container\">\n\n                <span class=\"JP\">\n\n                    <img src=\"assets/jp.jpg\" class=\"d-block w-100\">\n\n                </span>\n                <span class=\"central\">\n\n                    <img src=\"assets/cental.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n                <span class=\"booz\">\n\n                    <img src=\"assets/booz.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n                <span class=\"wipro\">\n\n                    <img src=\"assets/wipro1.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n                <span class=\"ups\">\n\n                    <img src=\"assets/ups.gif\" class=\"d-block w-100\">\n\n                </span>\n\n                <span class=\"infosys\">\n\n                    <img src=\"assets/infjob.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n\n                <span class=\"deloit\">\n\n                    <img src=\"assets/deljob.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n\n            </div>\n\n\n\n        </div>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/side/side.component.ts":
/*!****************************************!*\
  !*** ./src/app/side/side.component.ts ***!
  \****************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideComponent = /** @class */ (function () {
    function SideComponent() {
    }
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side',
            template: __webpack_require__(/*! ./side.component.html */ "./src/app/side/side.component.html"),
            styles: [__webpack_require__(/*! ./side.component.css */ "./src/app/side/side.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideComponent);
    return SideComponent;
}());



/***/ }),

/***/ "./src/app/subfooter/subfooter.component.css":
/*!***************************************************!*\
  !*** ./src/app/subfooter/subfooter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\n.footer-main-div{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    background: dodgerblue;\r\n    padding: 20px 0px;\r\n}\r\n.footer-social-icons{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n.footer-social-icons ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-align: center;\r\n}\r\n.footer-social-icons ul li{\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 0px 10px;\r\n    border-radius: 100%;\r\n    background: darkslategray;\r\n}\r\n.footer-social-icons ul li a{\r\n    color: aliceblue;\r\n    font-size: 25px;\r\n    display: block;\r\n}\r\n.footer-social-icons ul li a i{\r\n  line-height: 50px; \r\n}\r\n.footer-menu-one{\r\n   width: 100%;\r\n   height: auto;\r\n   margin: auto;\r\n   margin-top: 20px;\r\n}\r\n.footer-menu-one ul{\r\n   margin: 0px;\r\n   padding: 0px;\r\n   text-align: center;\r\n}\r\n.footer-menu-one ul li{\r\n   display: inline-block;\r\n   margin: 0px 20px;\r\n}\r\n.footer-menu-one ul li a{\r\n   font-family: arial;\r\n   font-size: 15px;\r\n   font-weight: 600;\r\n   color: #fff;\r\n   letter-spacing: 1px;\r\n}\r\n.footer-bottom{\r\n   width: 100%;\r\n   height: auto;\r\n   margin: auto;\r\n   background:darkslategray;\r\n   padding: 5px; \r\n}\r\n.footer-bottom p{\r\n   font-family: arial;\r\n   font-size: 14px;\r\n   text-align: center;\r\n   color: #fff;\r\n   font-weight: 600;\r\n   letter-spacing: 1px;\r\n}\r\n.footer-bottom p a{\r\n    color: #fff;\r\n}\r\n/*---------------------------------------------------\r\n#footer{\r\n   background: dodgerblue;\r\n   color: #fff;\r\n   padding: 20px;\r\n}\r\n.fa-heart-o{\r\n   margin: 3px;\r\n   color: red;\r\n}---------*/\r\n/*--------------------------------------------------------------------------------------*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViZm9vdGVyL3N1YmZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0dBQ0csWUFBWTtHQUNaLGFBQWE7R0FDYixhQUFhO0dBQ2IsaUJBQWlCO0NBQ25CO0FBQ0Q7R0FDRyxZQUFZO0dBQ1osYUFBYTtHQUNiLG1CQUFtQjtDQUNyQjtBQUNEO0dBQ0csc0JBQXNCO0dBQ3RCLGlCQUFpQjtDQUNuQjtBQUNEO0dBQ0csbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixpQkFBaUI7R0FDakIsWUFBWTtHQUNaLG9CQUFvQjtDQUN0QjtBQUNEO0dBQ0csWUFBWTtHQUNaLGFBQWE7R0FDYixhQUFhO0dBQ2IseUJBQXlCO0dBQ3pCLGFBQWE7Q0FDZjtBQUNEO0dBQ0csbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixtQkFBbUI7R0FDbkIsWUFBWTtHQUNaLGlCQUFpQjtHQUNqQixvQkFBb0I7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQU1EOzs7Ozs7Ozs7WUFTWTtBQUlaLDBGQUEwRiIsImZpbGUiOiJzcmMvYXBwL3N1YmZvb3Rlci9zdWJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5mb290ZXItbWFpbi1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4uZm9vdGVyLXNvY2lhbC1pY29uc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5mb290ZXItc29jaWFsLWljb25zIHVse1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlci1zb2NpYWwtaWNvbnMgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogZGFya3NsYXRlZ3JheTtcclxufVxyXG4uZm9vdGVyLXNvY2lhbC1pY29ucyB1bCBsaSBhe1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5mb290ZXItc29jaWFsLWljb25zIHVsIGxpIGEgaXtcclxuICBsaW5lLWhlaWdodDogNTBweDsgXHJcbn1cclxuLmZvb3Rlci1tZW51LW9uZXtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogYXV0bztcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5mb290ZXItbWVudS1vbmUgdWx7XHJcbiAgIG1hcmdpbjogMHB4O1xyXG4gICBwYWRkaW5nOiAwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9vdGVyLW1lbnUtb25lIHVsIGxpe1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbn1cclxuLmZvb3Rlci1tZW51LW9uZSB1bCBsaSBhe1xyXG4gICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLmZvb3Rlci1ib3R0b217XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IGF1dG87XHJcbiAgIG1hcmdpbjogYXV0bztcclxuICAgYmFja2dyb3VuZDpkYXJrc2xhdGVncmF5O1xyXG4gICBwYWRkaW5nOiA1cHg7IFxyXG59XHJcbi5mb290ZXItYm90dG9tIHB7XHJcbiAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5mb290ZXItYm90dG9tIHAgYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuI2Zvb3RlcntcclxuICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmZhLWhlYXJ0LW97XHJcbiAgIG1hcmdpbjogM3B4O1xyXG4gICBjb2xvcjogcmVkO1xyXG59LS0tLS0tLS0tKi9cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/subfooter/subfooter.component.html":
/*!****************************************************!*\
  !*** ./src/app/subfooter/subfooter.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-main-div\">\n  <div class=\"footer-social-icons\">\n       <ul>\n         <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-facebook\"></i></a></li>\n         <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-twitter\"></i></a></li>\n         <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-google-plus\"></i></a></li>\n         <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-youtube\"></i></a></li>\n       </ul>\n  </div>\n  <div class=\"footer-menu-one\">\n     <ul>\n       <li><a href=\"#\">Home</a></li>\n       <li><a href=\"#\">About Us</a></li>\n       <li><a href=\"#\">Services</a></li>\n       <li><a href=\"#\">Products</a></li>\n       <li><a href=\"#\">Contact Us</a></li>\n     </ul>\n  </div>\n\n</div>\n<div class=\"footer-bottom\">\n   <p>Copy Right by:<a href=\"#\">@Sahiudhyogh </a></p>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-----------------------Footer----------------------\n <section id=\"footer\">\n   <div class=\"container text-center\">\n      <p> Sahiudhyogh <i class=\"fa fa-heart-o\"></i></p>\n   </div>\n </section>\n ---------------->\n <!-----------------------Footer End-----------------------\n <script src=\"C:\\Users\\yes boss\\Desktop\\website.js\"></script>\n <script>\n var scroll =  new SmoothScroll('a[href*=\"#\"]');\n </script>\n --->"

/***/ }),

/***/ "./src/app/subfooter/subfooter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subfooter/subfooter.component.ts ***!
  \**************************************************/
/*! exports provided: SubfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubfooterComponent", function() { return SubfooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubfooterComponent = /** @class */ (function () {
    function SubfooterComponent() {
    }
    SubfooterComponent.prototype.ngOnInit = function () {
    };
    SubfooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subfooter',
            template: __webpack_require__(/*! ./subfooter.component.html */ "./src/app/subfooter/subfooter.component.html"),
            styles: [__webpack_require__(/*! ./subfooter.component.css */ "./src/app/subfooter/subfooter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubfooterComponent);
    return SubfooterComponent;
}());



/***/ }),

/***/ "./src/app/testimonails/testimonails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/testimonails/testimonails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*---------Testimonials------------*/\r\n#testimonials{\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n.container h1{\r\n    text-align: center;\r\n}\r\n#testimonials .row{\r\n    margin-top: 30px;\r\n}\r\ncol-md-4{\r\n    margin: 40px auto;\r\n}\r\n.profile{\r\n    padding: 70px 10px 10px;\r\n    background-color: #efefef;\r\n}\r\n.user{\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n}\r\n.profile img{\r\n    top: -60px;\r\n    position: absolute;\r\n    border: 10px solid #fff;\r\n    left: calc(50% - 60px)\r\n   \r\n}\r\n.profile h3{\r\n    font-size: 20px;\r\n    margin-top: 15px;\r\n    color: #007bff;\r\n}\r\n#testimonials span{\r\n    font-size: 12px;\r\n    color: #333;\r\n}\r\nblockquote{\r\n     font-size: 16px;\r\n     line-height: 30px;\r\n }\r\nblockquote::before{\r\n     content: '\\93';\r\n     font-size: 50px;\r\n     color: #007bff;\r\n     position: relative;\r\n     line-height: 20px;\r\n     bottom: -15px;\r\n     right: 5px;\r\n }\r\nblockquote::after{\r\n    content: '\\94';\r\n    font-size: 50px;\r\n    color: #007bff;\r\n    position: relative;\r\n    line-height: 10px;\r\n    bottom: -15px;\r\n    left: 5px;\r\n}\r\n.profile:hover{\r\n    box-shadow: 0 0 15px 15px rgba(0,0,0,0.2);\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n/*--------------------------------------------------------------------------------------\r\n\r\nimg{\r\n    width: 100px;\r\n    height: 90px;\r\n}\r\n.blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    -moz-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n\r\n}\r\n@-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@-moz-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n\r\n.carousel-caption{\r\n    top: 30%;\r\n    transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n   \r\n   \r\n   \r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n.carousel-item{\r\npadding: 5px;\r\n}\r\n\r\n\r\n.btn{\r\n    margin-top: 5px;\r\n}\r\n----------------------------------------------------*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25haWxzL3Rlc3RpbW9uYWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQztBQUNyQztJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixzQkFBc0I7O0NBRXpCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7QUFDQTtLQUNJLGdCQUFnQjtLQUNoQixrQkFBa0I7RUFDckI7QUFDRDtLQUNJLGVBQWU7S0FDZixnQkFBZ0I7S0FDaEIsZUFBZTtLQUNmLG1CQUFtQjtLQUNuQixrQkFBa0I7S0FDbEIsY0FBYztLQUNkLFdBQVc7RUFDZDtBQUNEO0lBQ0csZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtDQUNiO0FBQ0Q7SUFDSSwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFrRHNEIiwiZmlsZSI6InNyYy9hcHAvdGVzdGltb25haWxzL3Rlc3RpbW9uYWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS1UZXN0aW1vbmlhbHMtLS0tLS0tLS0tLS0qL1xyXG4jdGVzdGltb25pYWxze1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG4uY29udGFpbmVyIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiN0ZXN0aW1vbmlhbHMgLnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuY29sLW1kLTR7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxufVxyXG4ucHJvZmlsZXtcclxuICAgIHBhZGRpbmc6IDcwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxufVxyXG4udXNlcntcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnByb2ZpbGUgaW1ne1xyXG4gICAgdG9wOiAtNjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA2MHB4KVxyXG4gICBcclxufVxyXG4ucHJvZmlsZSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG4jdGVzdGltb25pYWxzIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG4gYmxvY2txdW90ZXtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiB9XHJcbiBibG9ja3F1b3RlOjpiZWZvcmV7XHJcbiAgICAgY29udGVudDogJ1xcOTMnO1xyXG4gICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgYm90dG9tOiAtMTVweDtcclxuICAgICByaWdodDogNXB4O1xyXG4gfVxyXG4gYmxvY2txdW90ZTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnXFw5NCc7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAtMTVweDtcclxuICAgIGxlZnQ6IDVweDtcclxufVxyXG4ucHJvZmlsZTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IDE1cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5ibGlua3tcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcblxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua3tcclxuICAgIDAle29wYWNpdHk6IDE7fVxyXG4gICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuQGtleWZyYW1lcyBibGlua3tcclxuICAgIDAle29wYWNpdHk6IDE7fVxyXG4gICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb257XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvdHRvbTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMSwgMTI3LCAyMjEsIDAuNCk7XHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG59XHJcbi5jYXJvdXNlbC1pdGVte1xyXG5wYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uYnRue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/testimonails/testimonails.component.html":
/*!**********************************************************!*\
  !*** ./src/app/testimonails/testimonails.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!----------Testimonials---------->\n <section id=\"testimonials\">\n  <div class=\"container\">\n      <h1> Testimonials </h1>\n      <p class=\"text-center\"> DEDICATED DEVELOPMENT TEAM Hire top tech talent and quickly scale your delivery capacity.</p>\n      <br>\n        <div class=\"row\">\n            <div class=\"col-md-2 text-center\">\n                <div class=\"profile\">\n                  <img src=\"/assets/sai.jpg\" class=\"user\">\n                  <blockquote>\n                   Ask ur question in comment\n                  </blockquote>\n             <h3> Saikumar Basavarasu <span>CEO/Foundaer</span></h3>     \n                </div>\n             </div>\n             <div class=\"col-md-2 text-center\">\n                <div class=\"profile\">\n                  <img src=\"/assets/sa.jpg\" class=\"user\">\n                  <blockquote>\n                   Ask ur question in comment\n                  </blockquote>\n             <h3> Shalini Reddy <span>Manager</span></h3>     \n                </div>\n             </div>\n             <div class=\"col-md-2 text-center\">\n                <div class=\"profile\">\n                  <img src=\"/assets/ramya.jpg\" class=\"user\">\n                  <blockquote>\n                   Ask ur question in comment\n                  </blockquote>\n             <h3> Ramya Reddy <span>Project Lead</span></h3>     \n                </div>\n             </div>\n        \n          <!-------------------------------------------->\n          <div class=\"col-md-2 text-center\">\n             <div class=\"profile\">\n               <img src=\"/assets/c.jpg\" class=\"user\">\n               <blockquote>\n                Ask ur question in comment\n               </blockquote>\n          <h3> Chandra Leka <span>Team Lead</span></h3>     \n             </div>\n          </div>\n         <div class=\"col-md-2 text-center\">\n             <div class=\"profile\">\n               <img src=\"/assets/sm.jpg\" class=\"user\">\n               <blockquote>\n                 Ask ur question in comment\n               </blockquote>\n          <h3> Arjun Reddy Mekala <br><span>UI Developer</span></h3>     \n             </div>\n          </div>\n          <div class=\"col-md-2 text-center\">\n            <div class=\"profile\">\n              <img src=\"/assets/t.jpg\" class=\"user\">\n              <blockquote>\n               Ask ur question in comment\n              </blockquote>\n         <h3> Sunandha <br> <span>Java Developer</span></h3>     \n            </div>\n         </div>\n         \n        </div>\n    </div>\n</section>  \n\n\n\n<!-------------------------------------------------------------------------------------\n\n\n\n<div class=\"container\">\n\n   <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n           <div class=\"carousel-inner\">\n\n\n\n\n<table>\n<tr>\n<span class=\"blink\">\n<td>\n       <div class=\"carousel-item active\">\n    <img src=\"assets/bha.png\" class=\"d-block w-100\"> \n       </div> \n   \n</td> \n\n\n<td>\n       <div class=\"carousel-item active\">\n    <img src=\"assets/info.jpg\" class=\"d-block w-100\">\n    </div>\n</td>\n\n\n <td>\n       <div class=\"carousel-item active\">\n     <img src=\"assets/lti.png\" class=\"d-block w-100\">\n   </div>\n   </td>\n\n\n <td>\n       <div class=\"carousel-item active\">\n   <img src=\"assets/meg.jpg\" class=\"d-block w-100\">\n      </div>\n</td>\n\n <td>\n       <div class=\"carousel-item active\">\n   <img src=\"assets/ora.png\" class=\"d-block w-100\">\n       </div>\n</td>\n\n <td>\n       <div class=\"carousel-item active\">\n   <img src=\"assets/vir.png\" class=\"d-block w-100\">\n        </div>\n</td>\n</span>\n</tr>\n</table> \n\n\n\n</div>\n\n\n\n<a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n       <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n       <span class=\"sr-only\">Previous</span>\n     </a>\n     <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n       <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n       <span class=\"sr-only\">Next</span>\n     </a>\n\n\n       </div>\n\n\n\n</div>\n\n-------------------->\n<!----------------------------------------------------------------------------------------------\n\n\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n   <div class=\"carousel-inner\">\n\n      <div class=\"container\">\n\n     <div class=\"carousel-item active\" style=\"color:blue\">\n   \n       <img src=\"assets/bha.png\">\n       <img src=\"assets/info.jpg\">\n       <img src=\"assets/lti.png\">\n       <img src=\"assets/meg.jpg\">\n       <img src=\"assets/ora.png\">\n       <img src=\"assets/vir.png\">\n       <img src=\"assets/inf.png\">\n       <img src=\"assets/wip.png\">\n       <img src=\"assets/tcs.jpg\">\n      \n    <b>  Mekala Mallikarjuna Reddy Reddy Palem PedakodamaGundala Karampudi Mandal Palnadu Area Guntur District\n      AndhraPradesh</b>\n      \n     </div>\n\n\n     <div class=\"carousel-item\" style=\"color:green\">\n<i>\nChandhraleka Thinakaran Hosur Village Krishna Giri District Tamilnadu State Pet Name Aandalu From Athibelli\n</i>\n   \n        <img src=\"assets/bha.png\">\n        <img src=\"assets/info.jpg\">\n        <img src=\"assets/cog.png\">\n        <img src=\"assets/cgi.png\">\n        <img src=\"assets/cog.png\">\n        <img src=\"assets/hcl.jpg\">\n        <img src=\"assets/hp.png\">\n        <img src=\"assets/wip.png\">\n        <img src=\"assets/vir.png\">\n       \n     </div>\n    \n   \n    </div>\n   </div>\n\n\n   <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n     <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n     <span class=\"sr-only\">Previous</span>\n   </a>\n   <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n     <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n     <span class=\"sr-only\">Next</span>\n   </a>\n  \n   \n </div>\n\n--------------------------------------------------->\n\n\n \n \n \n"

/***/ }),

/***/ "./src/app/testimonails/testimonails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/testimonails/testimonails.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonailsComponent", function() { return TestimonailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonailsComponent = /** @class */ (function () {
    function TestimonailsComponent() {
    }
    TestimonailsComponent.prototype.ngOnInit = function () {
    };
    TestimonailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonails',
            template: __webpack_require__(/*! ./testimonails.component.html */ "./src/app/testimonails/testimonails.component.html"),
            styles: [__webpack_require__(/*! ./testimonails.component.css */ "./src/app/testimonails/testimonails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonailsComponent);
    return TestimonailsComponent;
}());



/***/ }),

/***/ "./src/app/trail/trail.component.css":
/*!*******************************************!*\
  !*** ./src/app/trail/trail.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nheader .gnb{\r\n  height:90px;\r\n  width:990px;\r\n  margin:auto\r\n  ;color:#707070;\r\n  padding-top:34px\r\n}\r\n\r\nheader .banner .nLogo img{\r\n  border-radius: 50%;\r\n    height: 50px;\r\n    margin-top: 4px;\r\n    margin-left: -1200px;\r\n}\r\n\r\nheader .gnb p{\r\n  float:right;\r\n  width:auto;\r\n  max-width:400px;\r\n  word-break:break-all\r\n}\r\n\r\nheader .banner{\r\n  background:rgb(10, 174, 224);height:60px;color:#fff;text-align:center\r\n}\r\n\r\nheader .banner .title{\r\n  font-size:16px\r\n}\r\n\r\nheader{\r\n  margin-bottom:20px\r\n}\r\n\r\nheader .banner .title{\r\n margin-top: -34px;\r\n}\r\n\r\nfooter{\r\n  text-align:center;\r\n  font-size:12px;\r\n  margin-bottom:30px;\r\n  margin-top:65px}\r\n\r\nfooter a{\r\n  color:#27A7D4;\r\n  display:inline-block;\r\n  font-size:12px;\r\n  line-height:1\r\n  ;padding:0 10px;\r\n  border-left:solid 1px #A7A7A7\r\n}\r\n\r\nfooter a:hover{\r\n  color:#0F89B2\r\n}\r\n\r\nfooter a:first-child{\r\n  border-left:none\r\n}\r\n\r\nfooter p{\r\n  color:#A7A7A7;\r\n  margin-top:5px\r\n}\r\n\r\nbody{\r\n  font-family:Roboto,sans-serif;\r\n  font-size:15px;\r\n  font-weight:100;\r\n  background-color:rgb(190, 221, 220)\r\n}\r\n\r\n.container{\r\n  width:990px;\r\n  margin:0 auto;\r\n  text-align:center;\r\n  color:#707070\r\n}\r\n\r\n.container .box{\r\n  display:inline-block;\r\n  width:304px;\r\n  padding:50px;\r\n  text-align:center\r\n}\r\n\r\n.container .box .icon{\r\n  font-family:ResmanFont;\r\n  margin:auto auto 25px;\r\n  cursor:pointer;\r\n  color:rgb(39, 212, 117);\r\n  display:inline-block;\r\n  overflow:hidden;\r\n  vertical-align:bottom\r\n}\r\n\r\n.container .box .icon.fresher{\r\n  font-size:130px;\r\n  width:120px;\r\n  line-height:130px\r\n}\r\n\r\n.container .box .icon.experience{\r\n  font-size:130px;\r\n  width:120px;\r\n  line-height:130px\r\n}\r\n\r\n.container .box .action-btn{\r\n  color:#FFF;\r\n  background-color: rgb(10, 174, 224);\r\n  border:none;display:inline-block;\r\n  font-size:16px;\r\n  font-weight:400;\r\n  line-height:1.42857143;\r\n  text-align:center;\r\n  vertical-align:middle;\r\n  cursor:pointer;\r\n  overflow:hidden;\r\n  outline:0;\r\n  padding:15px;\r\n  width:100%\r\n}\r\n\r\n.container .box .action-btn:active{\r\n  -webkit-animation-name:push;\r\n          animation-name:push;\r\n  -webkit-animation-duration:.3s;\r\n          animation-duration:.3s;\r\n  -webkit-animation-timing-function:linear;\r\n          animation-timing-function:linear;\r\n  -webkit-animation-iteration-count:1;\r\n          animation-iteration-count:1\r\n}\r\n\r\n.container .box .description{\r\n  padding-top:10px;\r\n}\r\n\r\n.container .box .expCont:hover .icon,.container .box .fresherCont:hover .icon{\r\n  color:rgb(13, 213, 240);\r\n}\r\n\r\n.container .job-text{\r\n  width:435px;\r\n  margin:auto;\r\n}\r\n\r\n.container .info-text .numbers{\r\n  font-size:17px;\r\n}\r\n\r\n.container .info-text .numbers i{\r\n  border-right:1px solid #707070;\r\n  margin:0 15px;\r\n}\r\n\r\n.container .info-text .head{\r\n  margin-top:25px;\r\n  font-weight:400;\r\n}\r\n\r\n.container .info-text ul{\r\n  list-style:none;\r\n  display:inline-block;\r\n}\r\n\r\n.container .info-text ul li{\r\n  text-align:left;\r\n  padding:4px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaWwvdHJhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaO0dBQ0MsY0FBYztFQUNmLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG1CQUFtQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtDQUN4Qjs7QUFDRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLDZCQUE2QixZQUFZLFdBQVcsaUJBQWlCO0NBQ3RFOztBQUNEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCOztBQUdEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZSxDQUFDOztBQUNsQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmO0dBQ0MsZUFBZTtFQUNoQiw2QkFBNkI7Q0FDOUI7O0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsY0FBYztDQUNmOztBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUNBQW1DO0NBQ3BDOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtDQUNkOztBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0NBQ3RCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsWUFBWSxxQkFBcUI7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsVUFBVTtDQUNYOztBQUNEO0VBRUUsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUVwQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBRXZCLHlDQUFpQztVQUFqQyxpQ0FBaUM7RUFFakMsb0NBQTJCO1VBQTNCLDJCQUEyQjtDQUM1Qjs7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLHdCQUF3QjtDQUN6Qjs7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsK0JBQStCO0VBQy9CLGNBQWM7Q0FDZjs7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0NBQ3RCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3RyYWlsL3RyYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaGVhZGVyIC5nbmJ7XHJcbiAgaGVpZ2h0OjkwcHg7XHJcbiAgd2lkdGg6OTkwcHg7XHJcbiAgbWFyZ2luOmF1dG9cclxuICA7Y29sb3I6IzcwNzA3MDtcclxuICBwYWRkaW5nLXRvcDozNHB4XHJcbn1cclxuXHJcbmhlYWRlciAuYmFubmVyIC5uTG9nbyBpbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjAwcHg7XHJcbn1cclxuaGVhZGVyIC5nbmIgcHtcclxuICBmbG9hdDpyaWdodDtcclxuICB3aWR0aDphdXRvO1xyXG4gIG1heC13aWR0aDo0MDBweDtcclxuICB3b3JkLWJyZWFrOmJyZWFrLWFsbFxyXG59XHJcbmhlYWRlciAuYmFubmVye1xyXG4gIGJhY2tncm91bmQ6cmdiKDEwLCAxNzQsIDIyNCk7aGVpZ2h0OjYwcHg7Y29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlclxyXG59XHJcbmhlYWRlciAuYmFubmVyIC50aXRsZXtcclxuICBmb250LXNpemU6MTZweFxyXG59XHJcblxyXG5oZWFkZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbToyMHB4XHJcbn1cclxuaGVhZGVyIC5iYW5uZXIgLnRpdGxle1xyXG4gbWFyZ2luLXRvcDogLTM0cHg7XHJcbn1cclxuXHJcblxyXG5mb290ZXJ7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gIG1hcmdpbi10b3A6NjVweH1cclxuZm9vdGVyIGF7XHJcbiAgY29sb3I6IzI3QTdENDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6MTJweDtcclxuICBsaW5lLWhlaWdodDoxXHJcbiAgO3BhZGRpbmc6MCAxMHB4O1xyXG4gIGJvcmRlci1sZWZ0OnNvbGlkIDFweCAjQTdBN0E3XHJcbn1cclxuZm9vdGVyIGE6aG92ZXJ7XHJcbiAgY29sb3I6IzBGODlCMlxyXG59XHJcbmZvb3RlciBhOmZpcnN0LWNoaWxke1xyXG4gIGJvcmRlci1sZWZ0Om5vbmVcclxufVxyXG5mb290ZXIgcHtcclxuICBjb2xvcjojQTdBN0E3O1xyXG4gIG1hcmdpbi10b3A6NXB4XHJcbn1cclxuYm9keXtcclxuICBmb250LWZhbWlseTpSb2JvdG8sc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6MTVweDtcclxuICBmb250LXdlaWdodDoxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTkwLCAyMjEsIDIyMClcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOjk5MHB4O1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6IzcwNzA3MFxyXG59XHJcbi5jb250YWluZXIgLmJveHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDozMDRweDtcclxuICBwYWRkaW5nOjUwcHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXJcclxufVxyXG4uY29udGFpbmVyIC5ib3ggLmljb257XHJcbiAgZm9udC1mYW1pbHk6UmVzbWFuRm9udDtcclxuICBtYXJnaW46YXV0byBhdXRvIDI1cHg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgY29sb3I6cmdiKDM5LCAyMTIsIDExNyk7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIHZlcnRpY2FsLWFsaWduOmJvdHRvbVxyXG59XHJcbi5jb250YWluZXIgLmJveCAuaWNvbi5mcmVzaGVye1xyXG4gIGZvbnQtc2l6ZToxMzBweDtcclxuICB3aWR0aDoxMjBweDtcclxuICBsaW5lLWhlaWdodDoxMzBweFxyXG59XHJcbi5jb250YWluZXIgLmJveCAuaWNvbi5leHBlcmllbmNle1xyXG4gIGZvbnQtc2l6ZToxMzBweDtcclxuICB3aWR0aDoxMjBweDtcclxuICBsaW5lLWhlaWdodDoxMzBweFxyXG59XHJcbi5jb250YWluZXIgLmJveCAuYWN0aW9uLWJ0bntcclxuICBjb2xvcjojRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTc0LCAyMjQpO1xyXG4gIGJvcmRlcjpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICBsaW5lLWhlaWdodDoxLjQyODU3MTQzO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgb3V0bGluZTowO1xyXG4gIHBhZGRpbmc6MTVweDtcclxuICB3aWR0aDoxMDAlXHJcbn1cclxuLmNvbnRhaW5lciAuYm94IC5hY3Rpb24tYnRuOmFjdGl2ZXtcclxuICAtbW96LWFuaW1hdGlvbi1uYW1lOnB1c2g7XHJcbiAgYW5pbWF0aW9uLW5hbWU6cHVzaDtcclxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjouM3M7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOi4zcztcclxuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO1xyXG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MVxyXG59XHJcbi5jb250YWluZXIgLmJveCAuZGVzY3JpcHRpb257XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG4uY29udGFpbmVyIC5ib3ggLmV4cENvbnQ6aG92ZXIgLmljb24sLmNvbnRhaW5lciAuYm94IC5mcmVzaGVyQ29udDpob3ZlciAuaWNvbntcclxuICBjb2xvcjpyZ2IoMTMsIDIxMywgMjQwKTtcclxufVxyXG4uY29udGFpbmVyIC5qb2ItdGV4dHtcclxuICB3aWR0aDo0MzVweDtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG4uY29udGFpbmVyIC5pbmZvLXRleHQgLm51bWJlcnN7XHJcbiAgZm9udC1zaXplOjE3cHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mby10ZXh0IC5udW1iZXJzIGl7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjNzA3MDcwO1xyXG4gIG1hcmdpbjowIDE1cHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mby10ZXh0IC5oZWFke1xyXG4gIG1hcmdpbi10b3A6MjVweDtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mby10ZXh0IHVse1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG4uY29udGFpbmVyIC5pbmZvLXRleHQgdWwgbGl7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHBhZGRpbmc6NHB4IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trail/trail.component.html":
/*!********************************************!*\
  !*** ./src/app/trail/trail.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n \r\n \r\n <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">SahiUdhyog</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\r\n     <li *ngIf=\"!isLoggedIn\" class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/auth/login\" href=\"#\"><b>Login</b></a>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\r\n     <div class=\"btn-group mr-3\" *ngIf=\"isLoggedIn\">\r\n      <button type=\"button\" class=\"btn btn-primary\"><b>Welcome</b></button>\r\n      <button routerLink='/candidate' class=\"dropdown-item\">Profile</button>\r\n     <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/home1\"><b>Logout</b></a></li>\r\n    </div>\r\n  </ul> \r\n     \r\n  </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/trail/trail.component.ts":
/*!******************************************!*\
  !*** ./src/app/trail/trail.component.ts ***!
  \******************************************/
/*! exports provided: TrailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailComponent", function() { return TrailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");




var TrailComponent = /** @class */ (function () {
    function TrailComponent(tokenStorage, authService) {
        this.tokenStorage = tokenStorage;
        this.authService = authService;
        this.isLoggedIn = false;
    }
    TrailComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.tokenStorage.getToken(),
            username: this.tokenStorage.getUsername(),
        };
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
        }
    };
    TrailComponent.prototype.logout = function () {
        this.tokenStorage.signOut();
        window.location.reload();
    };
    TrailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trail',
            template: __webpack_require__(/*! ./trail.component.html */ "./src/app/trail/trail.component.html"),
            styles: [__webpack_require__(/*! ./trail.component.css */ "./src/app/trail/trail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TrailComponent);
    return TrailComponent;
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

module.exports = __webpack_require__(/*! F:\Angular\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map