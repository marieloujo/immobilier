(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar{\n  background-color:transparent;\n}\n\n/* #home-page-background{        \n    background: linear-gradient(to bottom, #44557f 15%, #f8f8f8 15%);\n} */\n\n.album-image{\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\n.home-panel{\n    vertical-align: center; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n#searchRow{\n    margin-top: 20;\n}\n\n.cardStyle {\n    background-color: #fff;\n    color: rgb(43, 43, 43);\n}\n\n.cardContent {\n    padding: 20;\n    font-weight: bold;\n    font-size: 30;\n}\n\n\n.card {\n    background-color: #fff;\n    color: #4d4d4d;\n    margin: 15 15 0;\n}\n.card-layout {\n    padding: 20;\n}\n.card-layout .h1 {\n    margin-bottom: 15;\n}\n"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<Page xmlns:Card=\"nativescript-cardview\">\n\n<ActionBar backgroundColor=\"#44557f\" flat=\"true\">\n    <StackLayout orientation=\"vertical\" width=\"100%\" height=\"100%\"\n        backgroundColor=\"#44557f\">\n        <StackLayout backgroundColor=\"#44557f\">\n            <StackLayout #searchRow orientation=\"horizontal\" marginTop=\"5\">\n                <TextField backgroundColor=\"white\" paddingLeft=\"20\"\n                    borderRadius=\"20\" [(ngModel)]=\"textFieldValue\" width=\"80%\"\n                    height=\"40\" fontSize=\"14\" hint=\"Search\"></TextField>\n                <Image src=\"~/images/shape4@3x.png\" height=\"30\" width=\"30\"\n                    marginLeft=\"10\"></Image>\n            </StackLayout>\n        </StackLayout>\n    </StackLayout>\n</ActionBar>\n\n\n<GridLayout orientation=\"vertical\" width=\"100%\" height=\"100%\" columns=\"*\" rows=\"*,auto\">\n\n    <StackLayout col=\"0\" row=\"0\" backgroundColor=\"#f4f4f4\">\n\n        <StackLayout backgroundColor=\"#44557f\" paddingBottom=\"15\" marginTop=\"-10\">\n            <Label text=\"\" class=\"font-weight-bold\" color=\"#FFFFFF\"\n                padding=\"15\" fontSize=\"24\"></Label>\n        </StackLayout>\n\n        <StackLayout paddingLeft=\"20\" paddingRight=\"20\" paddingTop=\"20\"\n            paddingBottom=\"5\" marginTop=\"-20\" backgroundImage=\"~/images/img/image-background.jpg\"\n            borderRadius=\"5\" height=\"180\" width=\"90%\" (tap)=\"onTaylorSwiftTap()\"\n            stretch=\"aspectFit\">\n\n            <GridLayout columns=\"*\" rows=\"auto,*,auto\" height=\"100%\">\n\n                <GridLayout columns=\"auto,*,auto\" rows=\"auto,auto\" col=\"0\"\n                    row=\"2\" marginBottom=\"5\">\n                    <Label col=\"0\" row=\"0\" class=\"font-weight-bold\" fontSize=\"18\" color=\"#FFFFFF\" text=\"Hip Hop so far 2018\"></Label>\n                    <Label col=\"0\" row=\"1\" class=\"font-weight-bold\" fontSize=\"16\" color=\"#FFFFFF\" text=\"By #Bruno Mars\"></Label>\n                </GridLayout>\n\n            </GridLayout>\n\n        </StackLayout>\n\n        <ScrollView orientation=\"vertical\">\n\n            <StackLayout marginTop=\"15\">\n\n                <GridLayout columns=\"auto,*,auto\" rows=\"auto\" marginBottom=\"10\">\n                    <Label col=\"0\" row=\"0\" class=\"font-weight-bold\" paddingLeft=\"10\" fontSize=\"20\" color=\"#000000\" text=\"Catégories\"></Label>\n                </GridLayout>\n\n                <ScrollView orientation=\"horizontal\">\n\n                    <StackLayout orientation=\"horizontal\">\n\n                        <StackLayout margin=\"10\">\n\n                            <StackLayout class=\"album-image\" height=\"110\" width=\"125\" backgroundImage=\"~/images/layer4@3x.png\" borderRadius=\"5\">\n                                <Button horizontalAlignment=\"right\" marginRight=\"5\" marginTop=\"80\" width=\"50\" height=\"20\" class=\"fa btn-rounded-sm\"\n                                    text=\"&#xf005; 4.9\" color=\"#FFFFFF\" backgroundColor=\"#3b75ff\">\n                                </Button>\n                            </StackLayout>\n\n                            <Label fontSize=\"14\" class=\"font-weight-bold\" color=\"#000000\" text=\"Havana (Remix)\"></Label>\n                            <Label fontSize=\"12\" color=\"#999999\" text=\"2018\"></Label>\n\n                        </StackLayout>\n\n                        <StackLayout margin=\"10\">\n\n                            <StackLayout class=\"album-image\" height=\"110\" width=\"125\" backgroundImage=\"~/images/layer5@3x.png\" borderRadius=\"5\">\n\n                                <Button horizontalAlignment=\"right\" marginRight=\"5\" marginTop=\"80\" width=\"50\" height=\"20\" class=\"fa btn-rounded-sm\"\n                                    text=\"&#xf005; 4.9\" color=\"#FFFFFF\" backgroundColor=\"#3b75ff\">\n                                </Button>\n\n                            </StackLayout>\n\n                            <Label fontSize=\"14\" class=\"font-weight-bold\" color=\"#000000\" text=\"Sweetener\"></Label>\n                            <Label fontSize=\"12\" color=\"#999999\" text=\"2018\"></Label>\n\n                        </StackLayout>\n\n                        <StackLayout margin=\"10\">\n\n                            <StackLayout class=\"album-image\" height=\"110\" backgroundImage=\"~/images/layer6@3x.png\" borderRadius=\"5\">\n                                <Button horizontalAlignment=\"right\" marginRight=\"5\" marginTop=\"80\" width=\"50\" height=\"20\" fontSize=\"14\" class=\"fa btn-rounded-sm\"\n                                    text=\"&#xf005; 4.9\" color=\"#FFFFFF\" backgroundColor=\"#3b75ff\">\n                                </Button>\n                            </StackLayout>\n\n                            <Label width=\"125\" fontSize=\"14\" class=\"font-weight-bold\" color=\"#000000\" textWrap=\"true\" text=\"Glory Days: The Platinum Edition\"></Label>\n                            <Label fontSize=\"12\" color=\"#999999\" text=\"2018\"></Label>\n\n                        </StackLayout>\n\n                    </StackLayout>\n\n                </ScrollView>\n\n\n                <GridLayout columns=\"auto,*,auto\" rows=\"auto\">\n                    <Label col=\"0\" row=\"0\" class=\"font-weight-bold\" paddingLeft=\"10\" fontSize=\"20\" color=\"#000000\" text=\"Nos articles\"></Label>\n                    <Label col=\"2\" row=\"0\" class=\"font-weight-bold\" marginRight=\"20\" fontSize=\"14\" color=\"#8d8d8d\" text=\"Voir plus\"></Label>\n                </GridLayout>\n\n                <Card:CardView class=\"card\" elevation=\"40\" radius=\"10\">\n                    <StackLayout class=\"cardContent card-layout\">\n                        <Label text=\"Hello Kitteh!\" class=\"m-b-10\" />\n                        <Image src=\"https://placekitten.com/200/200\" />\n                    </StackLayout>\n                </Card:CardView>\n\n            </StackLayout>\n\n        </ScrollView>\n\n    </StackLayout>\n\n\n    <StackLayout col=\"0\" row=\"1\" orientation=\"horizontal\" backgroundColor=\"#FFFFFF\" height=\"60\">\n\n        <GridLayout rows=\"*\" columns=\"*,*,*,*,*\">\n\n            <Image col=\"0\" row=\"0\" (tap)=\"onButtonTap()\" height=\"25\" width=\"25\" margin=\"10\" src=\"~/images/shape2@3x.png\"></Image>\n\n            <Image col=\"1\" row=\"0\" (tap)=\"onButtonTap()\" height=\"25\" width=\"25\" margin=\"10\" src=\"~/images/shape1@3x.png\"></Image>\n\n            <Image col=\"2\" row=\"0\" (tap)=\"onButtonTap()\" height=\"60\" width=\"60\" margin=\"10\" src=\"~/images/home@3x.png\"></Image>\n\n            <Image col=\"3\" row=\"0\" (tap)=\"onButtonTap()\" height=\"25\" width=\"25\" margin=\"10\" src=\"~/images/shape3@3x.png\"></Image>\n\n            <Image col=\"4\" row=\"0\" (tap)=\"onButtonTap()\" height=\"25\" width=\"25\" margin=\"10\" src=\"~/images/icon04@3x.png\"></Image>\n\n        </GridLayout>\n\n    </StackLayout>\n\n\n</GridLayout>\n\n</Page>\n"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_cardview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-cardview/cardview.js");
/* harmony import */ var nativescript_cardview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_cardview__WEBPACK_IMPORTED_MODULE_3__);




Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__["registerElement"])('CardView', function () { return nativescript_cardview__WEBPACK_IMPORTED_MODULE_3__["CardView"]; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.textFieldValue = "";
    }
    HomeComponent.prototype.onButtonTap = function () {
        console.log("Button was pressed");
    };
    HomeComponent.prototype.onSearchSubmit = function (args) {
        var searchBar = args.object;
        console.log("You are searching for " + searchBar.text);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onTaylorSwiftTap = function () {
        this.routerExtensions.navigate(["/detail"]);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-calendar/angular/calendar-directives.js");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-ui-chart/angular/chart-directives.js");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-ui-dataform/angular/dataform-directives.js");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-ui-autocomplete/angular/autocomplete-directives.js");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-gauge/angular/gauges-directives.js");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home/home.component.ts");












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw0QkFBNEIsaUNBQWlDLEdBQUcsNkJBQTZCLCtFQUErRSxHQUFHLG9CQUFvQixtQ0FBbUMsNkJBQTZCLGtDQUFrQyxHQUFHLGdCQUFnQiw2QkFBNkIscUJBQXFCLGlCQUFpQixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxlQUFlLHFCQUFxQixHQUFHLGdCQUFnQiw2QkFBNkIsNkJBQTZCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0Isb0JBQW9CLEdBQUcsYUFBYSw2QkFBNkIscUJBQXFCLHNCQUFzQixHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsRzs7Ozs7OztBQ0FueUIscy9GQUFzL0YsbzBCQUFvMEIsaTBCQUFpMEIsdTBFOzs7Ozs7OztBQ0Mzbko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ2E7QUFFUztBQUN2QjtBQUNqRCw2RkFBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLHFFQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFRNUM7SUFjSSx1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFidEQsbUJBQWMsR0FBVyxFQUFFLENBQUM7SUFjNUIsQ0FBQztJQVpELG1DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUdELHNDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBTUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnQkFScUMsNEVBQWdCOztJQWQ3QyxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7O1NBRXZDLENBQUM7eUNBZXdDLDRFQUFnQjtPQWQ3QyxhQUFhLENBdUJ6QjtJQUFELG9CQUFDO0NBQUE7QUF2QnlCOzs7Ozs7Ozs7QUNkMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBQ2E7QUFDSjtBQUNBO0FBQ047QUFDTTtBQUNnQjtBQUN0QjtBQUNMO0FBRVg7QUFDVDtBQXNCakQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQXBCdEIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpR0FBOEI7Z0JBQzlCLDZGQUE0QjtnQkFDNUIsNkZBQTRCO2dCQUM1Qix1RkFBeUI7Z0JBQ3pCLDZGQUE0QjtnQkFDNUIsNkdBQXdDO2dCQUN4Qyx1RkFBeUI7Z0JBQ3pCLG9GQUF3QjtnQkFDeEIsdUVBQWlCO2dCQUNqQixrRkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOERBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkFjdGlvbkJhcntcXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qICNob21lLXBhZ2UtYmFja2dyb3VuZHsgICAgICAgIFxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDQ1NTdmIDE1JSwgI2Y4ZjhmOCAxNSUpO1xcbn0gKi9cXG5cXG4uYWxidW0taW1hZ2V7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtcGFuZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IFxcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cXG4jc2VhcmNoUm93e1xcbiAgICBtYXJnaW4tdG9wOiAyMDtcXG59XFxuXFxuLmNhcmRTdHlsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XFxufVxcblxcbi5jYXJkQ29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzMDtcXG59XFxuXFxuXFxuLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG4gICAgbWFyZ2luOiAxNSAxNSAwO1xcbn1cXG4uY2FyZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nOiAyMDtcXG59XFxuLmNhcmQtbGF5b3V0IC5oMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxuczpDYXJkPVxcXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcXFwiPlxcblxcbjxBY3Rpb25CYXIgYmFja2dyb3VuZENvbG9yPVxcXCIjNDQ1NTdmXFxcIiBmbGF0PVxcXCJ0cnVlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCJcXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cXFwiIzQ0NTU3ZlxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVxcXCIjNDQ1NTdmXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgI3NlYXJjaFJvdyBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgbWFyZ2luVG9wPVxcXCI1XFxcIj5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBiYWNrZ3JvdW5kQ29sb3I9XFxcIndoaXRlXFxcIiBwYWRkaW5nTGVmdD1cXFwiMjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XFxcIjIwXFxcIiBbKG5nTW9kZWwpXT1cXFwidGV4dEZpZWxkVmFsdWVcXFwiIHdpZHRoPVxcXCI4MCVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjQwXFxcIiBmb250U2l6ZT1cXFwiMTRcXFwiIGhpbnQ9XFxcIlNlYXJjaFxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3NoYXBlNEAzeC5wbmdcXFwiIGhlaWdodD1cXFwiMzBcXFwiIHdpZHRoPVxcXCIzMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XFxcIjEwXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvQWN0aW9uQmFyPlxcblxcblxcbjxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgY29sdW1ucz1cXFwiKlxcXCIgcm93cz1cXFwiKixhdXRvXFxcIj5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNmNGY0ZjRcXFwiPlxcblxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwiIzQ0NTU3ZlxcXCIgcGFkZGluZ0JvdHRvbT1cXFwiMTVcXFwiIG1hcmdpblRvcD1cXFwiLTEwXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiXFxcIiBjbGFzcz1cXFwiZm9udC13ZWlnaHQtYm9sZFxcXCIgY29sb3I9XFxcIiNGRkZGRkZcXFwiXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc9XFxcIjE1XFxcIiBmb250U2l6ZT1cXFwiMjRcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCIgcGFkZGluZ1JpZ2h0PVxcXCIyMFxcXCIgcGFkZGluZ1RvcD1cXFwiMjBcXFwiXFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbT1cXFwiNVxcXCIgbWFyZ2luVG9wPVxcXCItMjBcXFwiIGJhY2tncm91bmRJbWFnZT1cXFwifi9pbWFnZXMvaW1nL2ltYWdlLWJhY2tncm91bmQuanBnXFxcIlxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cXFwiNVxcXCIgaGVpZ2h0PVxcXCIxODBcXFwiIHdpZHRoPVxcXCI5MCVcXFwiICh0YXApPVxcXCJvblRheWxvclN3aWZ0VGFwKClcXFwiXFxuICAgICAgICAgICAgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj5cXG5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqXFxcIiByb3dzPVxcXCJhdXRvLCosYXV0b1xcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywqLGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sYXV0b1xcXCIgY29sPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIyXFxcIiBtYXJnaW5Cb3R0b209XFxcIjVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC13ZWlnaHQtYm9sZFxcXCIgZm9udFNpemU9XFxcIjE4XFxcIiBjb2xvcj1cXFwiI0ZGRkZGRlxcXCIgdGV4dD1cXFwiSGlwIEhvcCBzbyBmYXIgMjAxOFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImZvbnQtd2VpZ2h0LWJvbGRcXFwiIGZvbnRTaXplPVxcXCIxNlxcXCIgY29sb3I9XFxcIiNGRkZGRkZcXFwiIHRleHQ9XFxcIkJ5ICNCcnVubyBNYXJzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpblRvcD1cXFwiMTVcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCosYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgbWFyZ2luQm90dG9tPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkXFxcIiBwYWRkaW5nTGVmdD1cXFwiMTBcXFwiIGZvbnRTaXplPVxcXCIyMFxcXCIgY29sb3I9XFxcIiMwMDAwMDBcXFwiIHRleHQ9XFxcIkNhdMOpZ29yaWVzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpbj1cXFwiMTBcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImFsYnVtLWltYWdlXFxcIiBoZWlnaHQ9XFxcIjExMFxcXCIgd2lkdGg9XFxcIjEyNVxcXCIgYmFja2dyb3VuZEltYWdlPVxcXCJ+L2ltYWdlcy9sYXllcjRAM3gucG5nXFxcIiBib3JkZXJSYWRpdXM9XFxcIjVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgbWFyZ2luUmlnaHQ9XFxcIjVcXFwiIG1hcmdpblRvcD1cXFwiODBcXFwiIHdpZHRoPVxcXCI1MFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgY2xhc3M9XFxcImZhIGJ0bi1yb3VuZGVkLXNtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIiYjeGYwMDU7IDQuOVxcXCIgY29sb3I9XFxcIiNGRkZGRkZcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiIzNiNzVmZlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvbnRTaXplPVxcXCIxNFxcXCIgY2xhc3M9XFxcImZvbnQtd2VpZ2h0LWJvbGRcXFwiIGNvbG9yPVxcXCIjMDAwMDAwXFxcIiB0ZXh0PVxcXCJIYXZhbmEgKFJlbWl4KVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvbnRTaXplPVxcXCIxMlxcXCIgY29sb3I9XFxcIiM5OTk5OTlcXFwiIHRleHQ9XFxcIjIwMThcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgbWFyZ2luPVxcXCIxMFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYWxidW0taW1hZ2VcXFwiIGhlaWdodD1cXFwiMTEwXFxcIiB3aWR0aD1cXFwiMTI1XFxcIiBiYWNrZ3JvdW5kSW1hZ2U9XFxcIn4vaW1hZ2VzL2xheWVyNUAzeC5wbmdcXFwiIGJvcmRlclJhZGl1cz1cXFwiNVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBtYXJnaW5SaWdodD1cXFwiNVxcXCIgbWFyZ2luVG9wPVxcXCI4MFxcXCIgd2lkdGg9XFxcIjUwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiBjbGFzcz1cXFwiZmEgYnRuLXJvdW5kZWQtc21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiJiN4ZjAwNTsgNC45XFxcIiBjb2xvcj1cXFwiI0ZGRkZGRlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjM2I3NWZmXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9udFNpemU9XFxcIjE0XFxcIiBjbGFzcz1cXFwiZm9udC13ZWlnaHQtYm9sZFxcXCIgY29sb3I9XFxcIiMwMDAwMDBcXFwiIHRleHQ9XFxcIlN3ZWV0ZW5lclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvbnRTaXplPVxcXCIxMlxcXCIgY29sb3I9XFxcIiM5OTk5OTlcXFwiIHRleHQ9XFxcIjIwMThcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgbWFyZ2luPVxcXCIxMFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYWxidW0taW1hZ2VcXFwiIGhlaWdodD1cXFwiMTEwXFxcIiBiYWNrZ3JvdW5kSW1hZ2U9XFxcIn4vaW1hZ2VzL2xheWVyNkAzeC5wbmdcXFwiIGJvcmRlclJhZGl1cz1cXFwiNVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBtYXJnaW5SaWdodD1cXFwiNVxcXCIgbWFyZ2luVG9wPVxcXCI4MFxcXCIgd2lkdGg9XFxcIjUwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiBmb250U2l6ZT1cXFwiMTRcXFwiIGNsYXNzPVxcXCJmYSBidG4tcm91bmRlZC1zbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCImI3hmMDA1OyA0LjlcXFwiIGNvbG9yPVxcXCIjRkZGRkZGXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiMzYjc1ZmZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB3aWR0aD1cXFwiMTI1XFxcIiBmb250U2l6ZT1cXFwiMTRcXFwiIGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkXFxcIiBjb2xvcj1cXFwiIzAwMDAwMFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIkdsb3J5IERheXM6IFRoZSBQbGF0aW51bSBFZGl0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9udFNpemU9XFxcIjEyXFxcIiBjb2xvcj1cXFwiIzk5OTk5OVxcXCIgdGV4dD1cXFwiMjAxOFxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxcblxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCosYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkXFxcIiBwYWRkaW5nTGVmdD1cXFwiMTBcXFwiIGZvbnRTaXplPVxcXCIyMFxcXCIgY29sb3I9XFxcIiMwMDAwMDBcXFwiIHRleHQ9XFxcIk5vcyBhcnRpY2xlc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtd2VpZ2h0LWJvbGRcXFwiIG1hcmdpblJpZ2h0PVxcXCIyMFxcXCIgZm9udFNpemU9XFxcIjE0XFxcIiBjb2xvcj1cXFwiIzhkOGQ4ZFxcXCIgdGV4dD1cXFwiVm9pciBwbHVzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkXFxcIiBlbGV2YXRpb249XFxcIjQwXFxcIiByYWRpdXM9XFxcIjEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnQgY2FyZC1sYXlvdXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIZWxsbyBLaXR0ZWghXFxcIiBjbGFzcz1cXFwibS1iLTEwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzIwMC8yMDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cXG5cXG4gICAgPC9TdGFja0xheW91dD5cXG5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRkZGRkZGXFxcIiBoZWlnaHQ9XFxcIjYwXFxcIj5cXG5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIipcXFwiIGNvbHVtbnM9XFxcIiosKiwqLCosKlxcXCI+XFxuXFxuICAgICAgICAgICAgPEltYWdlIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiAodGFwKT1cXFwib25CdXR0b25UYXAoKVxcXCIgaGVpZ2h0PVxcXCIyNVxcXCIgd2lkdGg9XFxcIjI1XFxcIiBtYXJnaW49XFxcIjEwXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL3NoYXBlMkAzeC5wbmdcXFwiPjwvSW1hZ2U+XFxuXFxuICAgICAgICAgICAgPEltYWdlIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIwXFxcIiAodGFwKT1cXFwib25CdXR0b25UYXAoKVxcXCIgaGVpZ2h0PVxcXCIyNVxcXCIgd2lkdGg9XFxcIjI1XFxcIiBtYXJnaW49XFxcIjEwXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL3NoYXBlMUAzeC5wbmdcXFwiPjwvSW1hZ2U+XFxuXFxuICAgICAgICAgICAgPEltYWdlIGNvbD1cXFwiMlxcXCIgcm93PVxcXCIwXFxcIiAodGFwKT1cXFwib25CdXR0b25UYXAoKVxcXCIgaGVpZ2h0PVxcXCI2MFxcXCIgd2lkdGg9XFxcIjYwXFxcIiBtYXJnaW49XFxcIjEwXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL2hvbWVAM3gucG5nXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgIDxJbWFnZSBjb2w9XFxcIjNcXFwiIHJvdz1cXFwiMFxcXCIgKHRhcCk9XFxcIm9uQnV0dG9uVGFwKClcXFwiIGhlaWdodD1cXFwiMjVcXFwiIHdpZHRoPVxcXCIyNVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgc3JjPVxcXCJ+L2ltYWdlcy9zaGFwZTNAM3gucG5nXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgIDxJbWFnZSBjb2w9XFxcIjRcXFwiIHJvdz1cXFwiMFxcXCIgKHRhcCk9XFxcIm9uQnV0dG9uVGFwKClcXFwiIGhlaWdodD1cXFwiMjVcXFwiIHdpZHRoPVxcXCIyNVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgc3JjPVxcXCJ+L2ltYWdlcy9pY29uMDRAM3gucG5nXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8L1N0YWNrTGF5b3V0PlxcblxcblxcbjwvR3JpZExheW91dD5cXG5cXG48L1BhZ2U+XFxuXCIiLCJpbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICd1aS9zZWFyY2gtYmFyJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IENhcmRWaWV3KTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdGV4dEZpZWxkVmFsdWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBvbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgfVxuXG4gICAgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG4gICAgb25TZWFyY2hTdWJtaXQoYXJncyk6IHZvaWQge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgfVxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvblRheWxvclN3aWZ0VGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2RldGFpbFwiXSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=