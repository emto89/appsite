(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js ***!
  \*********************************************************************************/
/*! exports provided: Cmyk, ColorPickerComponent, ColorPickerDirective, ColorPickerModule, ColorPickerService, Hsla, Hsva, Rgba, SliderDirective, TextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmyk", function() { return Cmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function() { return ColorPickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerService", function() { return ColorPickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsla", function() { return Hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsva", function() { return Hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgba", function() { return Rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDirective", function() { return SliderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDirective", function() { return TextDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["dialogPopup"];
const _c1 = ["hueSlider"];
const _c2 = ["alphaSlider"];
function ColorPickerComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("arrow arrow-", ctx_r1.cpUsePosition, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r1.arrowTop, "px");
    }
}
function ColorPickerComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onColorChange($event); })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onDragStart("saturation-lightness"); })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onDragEnd("saturation-lightness"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r2.hueSliderColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1)("rgY", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.slider == null ? null : ctx_r2.slider.v, "px")("left", ctx_r2.slider == null ? null : ctx_r2.slider.s, "px");
    }
}
function ColorPickerComponent_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_button_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onAddPresetColor($event, ctx_r20.selectedColor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.cpAddColorButtonClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.cpPresetColors && ctx_r3.cpPresetColors.length >= ctx_r3.cpMaxPresetColorsLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.cpAddColorButtonText, " ");
    }
}
function ColorPickerComponent_div_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
    }
}
function ColorPickerComponent_div_20_input_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_input_6_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_input_6_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onAlphaInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r22.cmykText == null ? null : ctx_r22.cmykText.a);
    }
}
function ColorPickerComponent_div_20_div_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ColorPickerComponent_div_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onCyanInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onMagentaInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onYellowInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onBlackInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColorPickerComponent_div_20_input_6_Template, 1, 2, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ColorPickerComponent_div_20_div_16_Template, 2, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r8.format !== 3 ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.c);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.m);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.y);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.k);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.cpAlphaChannel !== "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.cpAlphaChannel !== "disabled");
    }
}
function ColorPickerComponent_div_21_input_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_input_5_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_21_input_5_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.onAlphaInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r36.hslaText == null ? null : ctx_r36.hslaText.a);
    }
}
function ColorPickerComponent_div_21_div_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ColorPickerComponent_div_21_Template(rf, ctx) {
    if (rf & 1) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.onHueInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onSaturationInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onLightnessInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_21_input_5_Template, 1, 2, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_21_div_13_Template, 2, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r9.format !== 2 ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 360)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.h);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.s);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.l);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
    }
}
function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.onAlphaInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r48.rgbaText == null ? null : ctx_r48.rgbaText.a);
    }
}
function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ColorPickerComponent_div_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.onRedInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.onGreenInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.onBlueInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r10.format !== 1 ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.r);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.g);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.b);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
    }
}
function ColorPickerComponent_div_23_input_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_23_input_3_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_23_input_3_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.onAlphaInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r60.hexAlpha);
    }
}
function ColorPickerComponent_div_23_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ColorPickerComponent_div_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorPickerComponent_div_23_Template_input_blur_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.onHexInput(null); })("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.onHexInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_23_input_3_Template, 1, 2, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorPickerComponent_div_23_div_7_Template, 2, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r11.format !== 0 ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hex-alpha", ctx_r11.cpAlphaChannel === "forced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r11.hexText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel === "forced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel === "forced");
    }
}
function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.onAlphaInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r69.hslaText == null ? null : ctx_r69.hslaText.a);
    }
}
function ColorPickerComponent_div_24_Template(rf, ctx) {
    if (rf & 1) {
        const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.onAcceptColor($event); })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.onValueInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r12.hslaText == null ? null : ctx_r12.hslaText.l);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.cpAlphaChannel !== "disabled");
    }
}
function ColorPickerComponent_div_25_Template(rf, ctx) {
    if (rf & 1) {
        const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.onFormatToggle(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.onFormatToggle(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ColorPickerComponent_div_26_div_4_div_1_span_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const color_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r84.onRemovePresetColor($event, color_r82); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r83.cpRemoveColorButtonClass);
    }
}
function ColorPickerComponent_div_26_div_4_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const color_r82 = ctx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r87.setColorFromString(color_r82); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_span_1_Template, 1, 3, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const color_r82 = ctx.$implicit;
        const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.cpAddColorButton);
    }
}
function ColorPickerComponent_div_26_div_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_Template, 2, 3, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r79.cpPresetColorsClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r79.cpPresetColors);
    }
}
function ColorPickerComponent_div_26_div_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r80.cpPresetEmptyMessageClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r80.cpPresetEmptyMessage);
    }
}
function ColorPickerComponent_div_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColorPickerComponent_div_26_div_4_Template, 2, 4, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_26_div_5_Template, 2, 4, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.cpPresetLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.cpPresetColors == null ? null : ctx_r14.cpPresetColors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r14.cpPresetColors == null ? null : ctx_r14.cpPresetColors.length) && ctx_r14.cpAddColorButton);
    }
}
function ColorPickerComponent_div_27_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.onCancelColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r89.cpCancelButtonClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r89.cpCancelButtonText);
    }
}
function ColorPickerComponent_div_27_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r93.onAcceptColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r90.cpOKButtonClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r90.cpOKButtonText);
    }
}
function ColorPickerComponent_div_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_27_button_1_Template, 2, 4, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_27_button_2_Template, 2, 4, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.cpCancelButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.cpOKButton);
    }
}
var ColorFormats = /*@__PURE__*/ (function (ColorFormats) {
    ColorFormats[ColorFormats["HEX"] = 0] = "HEX";
    ColorFormats[ColorFormats["RGBA"] = 1] = "RGBA";
    ColorFormats[ColorFormats["HSLA"] = 2] = "HSLA";
    ColorFormats[ColorFormats["CMYK"] = 3] = "CMYK";
    return ColorFormats;
})({});
class Rgba {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}
class Hsva {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
class Hsla {
    constructor(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
}
class Cmyk {
    constructor(c, m, y, k, a = 1) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
        this.a = a;
    }
}
function calculateAutoPositioning(elBounds, triggerElBounds) {
    // Defaults
    let usePositionX = 'right';
    let usePositionY = 'bottom';
    // Calculate collisions
    const { height, width } = elBounds;
    const { top, left } = triggerElBounds;
    const bottom = top + triggerElBounds.height;
    const right = left + triggerElBounds.width;
    const collisionTop = top - height < 0;
    const collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
    const collisionLeft = left - width < 0;
    const collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
    const collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight;
    // Generate X & Y position values
    if (collisionBottom) {
        usePositionY = 'top';
    }
    if (collisionTop) {
        usePositionY = 'bottom';
    }
    if (collisionLeft) {
        usePositionX = 'right';
    }
    if (collisionRight) {
        usePositionX = 'left';
    }
    // Choose the largest gap available
    if (collisionAll) {
        const postions = ['left', 'right', 'top', 'bottom'];
        return postions.reduce((prev, next) => elBounds[prev] > elBounds[next] ? prev : next);
    }
    if ((collisionLeft && collisionRight)) {
        if (collisionTop) {
            return 'bottom';
        }
        if (collisionBottom) {
            return 'top';
        }
        return top > bottom ? 'top' : 'bottom';
    }
    if ((collisionTop && collisionBottom)) {
        if (collisionLeft) {
            return 'right';
        }
        if (collisionRight) {
            return 'left';
        }
        return left > right ? 'left' : 'right';
    }
    return `${usePositionY}-${usePositionX}`;
}
function detectIE() {
    let ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    const msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
let TextDirective = /*@__PURE__*/ (() => {
    class TextDirective {
        constructor() {
            this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        inputChange(event) {
            const value = event.target.value;
            if (this.rg === undefined) {
                this.newValue.emit(value);
            }
            else {
                const numeric = parseFloat(value);
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    }
    TextDirective.ɵfac = function TextDirective_Factory(t) { return new (t || TextDirective)(); };
    TextDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TextDirective, selectors: [["", "text", ""]], hostBindings: function TextDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TextDirective_input_HostBindingHandler($event) { return ctx.inputChange($event); });
            }
        }, inputs: { rg: "rg", text: "text" }, outputs: { newValue: "newValue" } });
    return TextDirective;
})();
let SliderDirective = /*@__PURE__*/ (() => {
    class SliderDirective {
        constructor(elRef) {
            this.elRef = elRef;
            this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.listenerMove = (event) => this.move(event);
            this.listenerStop = () => this.stop();
        }
        mouseDown(event) {
            this.start(event);
        }
        touchStart(event) {
            this.start(event);
        }
        move(event) {
            event.preventDefault();
            this.setCursor(event);
        }
        start(event) {
            this.setCursor(event);
            event.stopPropagation();
            document.addEventListener('mouseup', this.listenerStop);
            document.addEventListener('touchend', this.listenerStop);
            document.addEventListener('mousemove', this.listenerMove);
            document.addEventListener('touchmove', this.listenerMove);
            this.dragStart.emit();
        }
        stop() {
            document.removeEventListener('mouseup', this.listenerStop);
            document.removeEventListener('touchend', this.listenerStop);
            document.removeEventListener('mousemove', this.listenerMove);
            document.removeEventListener('touchmove', this.listenerMove);
            this.dragEnd.emit();
        }
        getX(event) {
            const position = this.elRef.nativeElement.getBoundingClientRect();
            const pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
            return pageX - position.left - window.pageXOffset;
        }
        getY(event) {
            const position = this.elRef.nativeElement.getBoundingClientRect();
            const pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
            return pageY - position.top - window.pageYOffset;
        }
        setCursor(event) {
            const width = this.elRef.nativeElement.offsetWidth;
            const height = this.elRef.nativeElement.offsetHeight;
            const x = Math.max(0, Math.min(this.getX(event), width));
            const y = Math.max(0, Math.min(this.getY(event), height));
            if (this.rgX !== undefined && this.rgY !== undefined) {
                this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
            }
            else if (this.rgX === undefined && this.rgY !== undefined) {
                this.newValue.emit({ v: y / height, rgY: this.rgY });
            }
            else if (this.rgX !== undefined && this.rgY === undefined) {
                this.newValue.emit({ v: x / width, rgX: this.rgX });
            }
        }
    }
    SliderDirective.ɵfac = function SliderDirective_Factory(t) { return new (t || SliderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    SliderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SliderDirective, selectors: [["", "slider", ""]], hostBindings: function SliderDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) { return ctx.mouseDown($event); })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) { return ctx.touchStart($event); });
            }
        }, inputs: { rgX: "rgX", rgY: "rgY", slider: "slider" }, outputs: { dragEnd: "dragEnd", dragStart: "dragStart", newValue: "newValue" } });
    return SliderDirective;
})();
class SliderPosition {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
class SliderDimension {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
let ColorPickerService = /*@__PURE__*/ (() => {
    class ColorPickerService {
        constructor() {
            this.active = null;
        }
        setActive(active) {
            if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
                this.active.closeDialog();
            }
            this.active = active;
        }
        hsva2hsla(hsva) {
            const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
            if (v === 0) {
                return new Hsla(h, 0, 0, a);
            }
            else if (s === 0 && v === 1) {
                return new Hsla(h, 1, 1, a);
            }
            else {
                const l = v * (2 - s) / 2;
                return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
            }
        }
        hsla2hsva(hsla) {
            const h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1);
            const l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
            if (l === 0) {
                return new Hsva(h, 0, 0, a);
            }
            else {
                const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
                return new Hsva(h, 2 * (v - l) / v, v, a);
            }
        }
        hsvaToRgba(hsva) {
            let r, g, b;
            const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
            const i = Math.floor(h * 6);
            const f = h * 6 - i;
            const p = v * (1 - s);
            const q = v * (1 - f * s);
            const t = v * (1 - (1 - f) * s);
            switch (i % 6) {
                case 0:
                    r = v, g = t, b = p;
                    break;
                case 1:
                    r = q, g = v, b = p;
                    break;
                case 2:
                    r = p, g = v, b = t;
                    break;
                case 3:
                    r = p, g = q, b = v;
                    break;
                case 4:
                    r = t, g = p, b = v;
                    break;
                case 5:
                    r = v, g = p, b = q;
                    break;
                default:
                    r = 0, g = 0, b = 0;
            }
            return new Rgba(r, g, b, a);
        }
        cmykToRgb(cmyk) {
            const r = (1 - cmyk.c) * (1 - cmyk.k);
            const g = (1 - cmyk.m) * (1 - cmyk.k);
            const b = (1 - cmyk.y) * (1 - cmyk.k);
            return new Rgba(r, g, b, cmyk.a);
        }
        rgbaToCmyk(rgba) {
            const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
            if (k === 1) {
                return new Cmyk(0, 0, 0, 1, rgba.a);
            }
            else {
                const c = (1 - rgba.r - k) / (1 - k);
                const m = (1 - rgba.g - k) / (1 - k);
                const y = (1 - rgba.b - k) / (1 - k);
                return new Cmyk(c, m, y, k, rgba.a);
            }
        }
        rgbaToHsva(rgba) {
            let h, s;
            const r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1);
            const b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            const v = max, d = max - min;
            s = (max === 0) ? 0 : d / max;
            if (max === min) {
                h = 0;
            }
            else {
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                    default:
                        h = 0;
                }
                h /= 6;
            }
            return new Hsva(h, s, v, a);
        }
        rgbaToHex(rgba, allowHex8) {
            /* tslint:disable:no-bitwise */
            let hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
            if (allowHex8) {
                hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
            }
            /* tslint:enable:no-bitwise */
            return hex;
        }
        normalizeCMYK(cmyk) {
            return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
        }
        denormalizeCMYK(cmyk) {
            return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
        }
        denormalizeRGBA(rgba) {
            return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
        }
        stringToHsva(colorString = '', allowHex8 = false) {
            let hsva = null;
            colorString = (colorString || '').toLowerCase();
            const stringParsers = [
                {
                    re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (execResult) {
                        return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                    }
                }, {
                    re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (execResult) {
                        return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                    }
                }
            ];
            if (allowHex8) {
                stringParsers.push({
                    re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                    parse: function (execResult) {
                        return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                    }
                });
            }
            else {
                stringParsers.push({
                    re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                    parse: function (execResult) {
                        return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                    }
                });
            }
            stringParsers.push({
                re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
                }
            });
            for (const key in stringParsers) {
                if (stringParsers.hasOwnProperty(key)) {
                    const parser = stringParsers[key];
                    const match = parser.re.exec(colorString), color = match && parser.parse(match);
                    if (color) {
                        if (color instanceof Rgba) {
                            hsva = this.rgbaToHsva(color);
                        }
                        else if (color instanceof Hsla) {
                            hsva = this.hsla2hsva(color);
                        }
                        return hsva;
                    }
                }
            }
            return hsva;
        }
        outputFormat(hsva, outputFormat, alphaChannel) {
            if (outputFormat === 'auto') {
                outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
            }
            switch (outputFormat) {
                case 'hsla':
                    const hsla = this.hsva2hsla(hsva);
                    const hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                    if (hsva.a < 1 || alphaChannel === 'always') {
                        return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                            hslaText.a + ')';
                    }
                    else {
                        return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                    }
                case 'rgba':
                    const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                    if (hsva.a < 1 || alphaChannel === 'always') {
                        return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                            Math.round(rgba.a * 100) / 100 + ')';
                    }
                    else {
                        return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                    }
                default:
                    const allowHex8 = (alphaChannel === 'always' || alphaChannel === 'forced');
                    return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
            }
        }
    }
    ColorPickerService.ɵfac = function ColorPickerService_Factory(t) { return new (t || ColorPickerService)(); };
    ColorPickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorPickerService, factory: ColorPickerService.ɵfac });
    return ColorPickerService;
})();
let ColorPickerComponent = /*@__PURE__*/ (() => {
    class ColorPickerComponent {
        constructor(elRef, cdRef, service) {
            this.elRef = elRef;
            this.cdRef = cdRef;
            this.service = service;
            this.isIE10 = false;
            this.dialogArrowSize = 10;
            this.dialogArrowOffset = 15;
            this.dialogInputFields = [
                ColorFormats.HEX,
                ColorFormats.RGBA,
                ColorFormats.HSLA,
                ColorFormats.CMYK
            ];
            this.useRootViewContainer = false;
        }
        handleEsc(event) {
            if (this.show && this.cpDialogDisplay === 'popup') {
                this.onCancelColor(event);
            }
        }
        handleEnter(event) {
            if (this.show && this.cpDialogDisplay === 'popup') {
                this.onAcceptColor(event);
            }
        }
        ngOnInit() {
            this.slider = new SliderPosition(0, 0, 0, 0);
            const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
            const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
            this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
            if (this.cpCmykEnabled) {
                this.format = ColorFormats.CMYK;
            }
            else if (this.cpOutputFormat === 'rgba') {
                this.format = ColorFormats.RGBA;
            }
            else if (this.cpOutputFormat === 'hsla') {
                this.format = ColorFormats.HSLA;
            }
            else {
                this.format = ColorFormats.HEX;
            }
            this.listenerMouseDown = (event) => { this.onMouseDown(event); };
            this.listenerResize = () => { this.onResize(); };
            this.openDialog(this.initialColor, false);
        }
        ngOnDestroy() {
            this.closeDialog();
        }
        ngAfterViewInit() {
            if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
                const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
                const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
                this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
                this.updateColorPicker(false);
                this.cdRef.detectChanges();
            }
        }
        openDialog(color, emit = true) {
            this.service.setActive(this);
            if (!this.width) {
                this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
            }
            if (!this.height) {
                this.height = 320;
            }
            this.setInitialColor(color);
            this.setColorFromString(color, emit);
            this.openColorPicker();
        }
        closeDialog() {
            this.closeColorPicker();
        }
        setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpTriggerElement) {
            this.setInitialColor(color);
            this.setColorMode(cpColorMode);
            this.isIE10 = (detectIE() === 10);
            this.directiveInstance = instance;
            this.directiveElementRef = elementRef;
            this.cpDisableInput = cpDisableInput;
            this.cpCmykEnabled = cpCmykEnabled;
            this.cpAlphaChannel = cpAlphaChannel;
            this.cpOutputFormat = cpOutputFormat;
            this.cpDialogDisplay = cpDialogDisplay;
            this.cpIgnoredElements = cpIgnoredElements;
            this.cpSaveClickOutside = cpSaveClickOutside;
            this.cpCloseClickOutside = cpCloseClickOutside;
            this.useRootViewContainer = cpUseRootViewContainer;
            this.width = this.cpWidth = parseInt(cpWidth, 10);
            this.height = this.cpHeight = parseInt(cpHeight, 10);
            this.cpPosition = cpPosition;
            this.cpPositionOffset = parseInt(cpPositionOffset, 10);
            this.cpOKButton = cpOKButton;
            this.cpOKButtonText = cpOKButtonText;
            this.cpOKButtonClass = cpOKButtonClass;
            this.cpCancelButton = cpCancelButton;
            this.cpCancelButtonText = cpCancelButtonText;
            this.cpCancelButtonClass = cpCancelButtonClass;
            this.fallbackColor = cpFallbackColor || '#fff';
            this.setPresetConfig(cpPresetLabel, cpPresetColors);
            this.cpPresetColorsClass = cpPresetColorsClass;
            this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
            this.cpPresetEmptyMessage = cpPresetEmptyMessage;
            this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
            this.cpAddColorButton = cpAddColorButton;
            this.cpAddColorButtonText = cpAddColorButtonText;
            this.cpAddColorButtonClass = cpAddColorButtonClass;
            this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
            this.cpTriggerElement = cpTriggerElement;
            if (!cpPositionRelativeToArrow) {
                this.dialogArrowOffset = 0;
            }
            if (cpDialogDisplay === 'inline') {
                this.dialogArrowSize = 0;
                this.dialogArrowOffset = 0;
            }
            if (cpOutputFormat === 'hex' &&
                cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
                this.cpAlphaChannel = 'disabled';
            }
        }
        setColorMode(mode) {
            switch (mode.toString().toUpperCase()) {
                case '1':
                case 'C':
                case 'COLOR':
                    this.cpColorMode = 1;
                    break;
                case '2':
                case 'G':
                case 'GRAYSCALE':
                    this.cpColorMode = 2;
                    break;
                case '3':
                case 'P':
                case 'PRESETS':
                    this.cpColorMode = 3;
                    break;
                default:
                    this.cpColorMode = 1;
            }
        }
        setInitialColor(color) {
            this.initialColor = color;
        }
        setPresetConfig(cpPresetLabel, cpPresetColors) {
            this.cpPresetLabel = cpPresetLabel;
            this.cpPresetColors = cpPresetColors;
        }
        setColorFromString(value, emit = true, update = true) {
            let hsva;
            if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
                hsva = this.service.stringToHsva(value, true);
                if (!hsva && !this.hsva) {
                    hsva = this.service.stringToHsva(value, false);
                }
            }
            else {
                hsva = this.service.stringToHsva(value, false);
            }
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(this.fallbackColor, false);
            }
            if (hsva) {
                this.hsva = hsva;
                this.sliderH = this.hsva.h;
                if (this.cpOutputFormat === 'hex' && this.cpAlphaChannel === 'disabled') {
                    this.hsva.a = 1;
                }
                this.updateColorPicker(emit, update);
            }
        }
        onResize() {
            if (this.position === 'fixed') {
                this.setDialogPosition();
            }
            else if (this.cpDialogDisplay !== 'inline') {
                this.closeColorPicker();
            }
        }
        onDragEnd(slider) {
            this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
        }
        onDragStart(slider) {
            this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
        }
        onMouseDown(event) {
            if (this.show &&
                !this.isIE10 && this.cpDialogDisplay === 'popup' &&
                event.target !== this.directiveElementRef.nativeElement &&
                !this.isDescendant(this.elRef.nativeElement, event.target) &&
                !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
                this.cpIgnoredElements.filter((item) => item === event.target).length === 0) {
                if (this.cpSaveClickOutside) {
                    this.directiveInstance.colorSelected(this.outputColor);
                }
                else {
                    this.hsva = null;
                    this.setColorFromString(this.initialColor, false);
                    if (this.cpCmykEnabled) {
                        this.directiveInstance.cmykChanged(this.cmykColor);
                    }
                    this.directiveInstance.colorChanged(this.initialColor);
                    this.directiveInstance.colorCanceled();
                }
                if (this.cpCloseClickOutside) {
                    this.closeColorPicker();
                }
            }
        }
        onAcceptColor(event) {
            event.stopPropagation();
            if (this.outputColor) {
                this.directiveInstance.colorSelected(this.outputColor);
            }
            if (this.cpDialogDisplay === 'popup') {
                this.closeColorPicker();
            }
        }
        onCancelColor(event) {
            this.hsva = null;
            event.stopPropagation();
            this.directiveInstance.colorCanceled();
            this.setColorFromString(this.initialColor, true);
            if (this.cpDialogDisplay === 'popup') {
                if (this.cpCmykEnabled) {
                    this.directiveInstance.cmykChanged(this.cmykColor);
                }
                this.directiveInstance.colorChanged(this.initialColor, true);
                this.closeColorPicker();
            }
        }
        onFormatToggle(change) {
            const availableFormats = this.dialogInputFields.length -
                (this.cpCmykEnabled ? 0 : 1);
            const nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
                availableFormats) + availableFormats) % availableFormats;
            this.format = this.dialogInputFields[nextFormat];
        }
        onColorChange(value) {
            this.hsva.s = value.s / value.rgX;
            this.hsva.v = value.v / value.rgY;
            this.updateColorPicker();
            this.directiveInstance.sliderChanged({
                slider: 'lightness',
                value: this.hsva.v,
                color: this.outputColor
            });
            this.directiveInstance.sliderChanged({
                slider: 'saturation',
                value: this.hsva.s,
                color: this.outputColor
            });
        }
        onHueChange(value) {
            this.hsva.h = value.v / value.rgX;
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
            this.directiveInstance.sliderChanged({
                slider: 'hue',
                value: this.hsva.h,
                color: this.outputColor
            });
        }
        onValueChange(value) {
            this.hsva.v = value.v / value.rgX;
            this.updateColorPicker();
            this.directiveInstance.sliderChanged({
                slider: 'value',
                value: this.hsva.v,
                color: this.outputColor
            });
        }
        onAlphaChange(value) {
            this.hsva.a = value.v / value.rgX;
            this.updateColorPicker();
            this.directiveInstance.sliderChanged({
                slider: 'alpha',
                value: this.hsva.a,
                color: this.outputColor
            });
        }
        onHexInput(value) {
            if (value === null) {
                this.updateColorPicker();
            }
            else {
                if (value && value[0] !== '#') {
                    value = '#' + value;
                }
                let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
                if (this.cpAlphaChannel === 'always') {
                    validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
                }
                const valid = validHex.test(value);
                if (valid) {
                    if (value.length < 5) {
                        value = '#' + value.substring(1)
                            .split('')
                            .map(c => c + c)
                            .join('');
                    }
                    if (this.cpAlphaChannel === 'forced') {
                        value += Math.round(this.hsva.a * 255).toString(16);
                    }
                    this.setColorFromString(value, true, false);
                }
                this.directiveInstance.inputChanged({
                    input: 'hex',
                    valid: valid,
                    value: value,
                    color: this.outputColor
                });
            }
        }
        onRedInput(value) {
            const rgba = this.service.hsvaToRgba(this.hsva);
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                rgba.r = value.v / value.rg;
                this.hsva = this.service.rgbaToHsva(rgba);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
            }
            this.directiveInstance.inputChanged({
                input: 'red',
                valid: valid,
                value: rgba.r,
                color: this.outputColor
            });
        }
        onBlueInput(value) {
            const rgba = this.service.hsvaToRgba(this.hsva);
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                rgba.b = value.v / value.rg;
                this.hsva = this.service.rgbaToHsva(rgba);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
            }
            this.directiveInstance.inputChanged({
                input: 'blue',
                valid: valid,
                value: rgba.b,
                color: this.outputColor
            });
        }
        onGreenInput(value) {
            const rgba = this.service.hsvaToRgba(this.hsva);
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                rgba.g = value.v / value.rg;
                this.hsva = this.service.rgbaToHsva(rgba);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
            }
            this.directiveInstance.inputChanged({
                input: 'green',
                valid: valid,
                value: rgba.g,
                color: this.outputColor
            });
        }
        onHueInput(value) {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                this.hsva.h = value.v / value.rg;
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
            }
            this.directiveInstance.inputChanged({
                input: 'hue',
                valid: valid,
                value: this.hsva.h,
                color: this.outputColor
            });
        }
        onValueInput(value) {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                this.hsva.v = value.v / value.rg;
                this.updateColorPicker();
            }
            this.directiveInstance.inputChanged({
                input: 'value',
                valid: valid,
                value: this.hsva.v,
                color: this.outputColor
            });
        }
        onAlphaInput(value) {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                this.hsva.a = value.v / value.rg;
                this.updateColorPicker();
            }
            this.directiveInstance.inputChanged({
                input: 'alpha',
                valid: valid,
                value: this.hsva.a,
                color: this.outputColor
            });
        }
        onLightnessInput(value) {
            const hsla = this.service.hsva2hsla(this.hsva);
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                hsla.l = value.v / value.rg;
                this.hsva = this.service.hsla2hsva(hsla);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
            }
            this.directiveInstance.inputChanged({
                input: 'lightness',
                valid: valid,
                value: hsla.l,
                color: this.outputColor
            });
        }
        onSaturationInput(value) {
            const hsla = this.service.hsva2hsla(this.hsva);
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                hsla.s = value.v / value.rg;
                this.hsva = this.service.hsla2hsva(hsla);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
            }
            this.directiveInstance.inputChanged({
                input: 'saturation',
                valid: valid,
                value: hsla.s,
                color: this.outputColor
            });
        }
        onCyanInput(value) {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                this.cmyk.c = value.v;
                this.updateColorPicker(false, true, true);
            }
            this.directiveInstance.inputChanged({
                input: 'cyan',
                valid: true,
                value: this.cmyk.c,
                color: this.outputColor
            });
        }
        onMagentaInput(value) {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                this.cmyk.m = value.v;
                this.updateColorPicker(false, true, true);
            }
            this.directiveInstance.inputChanged({
                input: 'magenta',
                valid: true,
                value: this.cmyk.m,
                color: this.outputColor
            });
        }
        onYellowInput(value) {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                this.cmyk.y = value.v;
                this.updateColorPicker(false, true, true);
            }
            this.directiveInstance.inputChanged({
                input: 'yellow',
                valid: true,
                value: this.cmyk.y,
                color: this.outputColor
            });
        }
        onBlackInput(value) {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
            if (valid) {
                this.cmyk.k = value.v;
                this.updateColorPicker(false, true, true);
            }
            this.directiveInstance.inputChanged({
                input: 'black',
                valid: true,
                value: this.cmyk.k,
                color: this.outputColor
            });
        }
        onAddPresetColor(event, value) {
            event.stopPropagation();
            if (!this.cpPresetColors.filter((color) => (color === value)).length) {
                this.cpPresetColors = this.cpPresetColors.concat(value);
                this.directiveInstance.presetColorsChanged(this.cpPresetColors);
            }
        }
        onRemovePresetColor(event, value) {
            event.stopPropagation();
            this.cpPresetColors = this.cpPresetColors.filter((color) => (color !== value));
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
        // Private helper functions for the color picker dialog status
        openColorPicker() {
            if (!this.show) {
                this.show = true;
                this.hidden = true;
                setTimeout(() => {
                    this.hidden = false;
                    this.setDialogPosition();
                    this.cdRef.detectChanges();
                }, 0);
                this.directiveInstance.stateChanged(true);
                if (!this.isIE10) {
                    document.addEventListener('mousedown', this.listenerMouseDown);
                    document.addEventListener('touchstart', this.listenerMouseDown);
                }
                window.addEventListener('resize', this.listenerResize);
            }
        }
        closeColorPicker() {
            if (this.show) {
                this.show = false;
                this.directiveInstance.stateChanged(false);
                if (!this.isIE10) {
                    document.removeEventListener('mousedown', this.listenerMouseDown);
                    document.removeEventListener('touchstart', this.listenerMouseDown);
                }
                window.removeEventListener('resize', this.listenerResize);
                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }
        }
        updateColorPicker(emit = true, update = true, cmykInput = false) {
            if (this.sliderDimMax) {
                if (this.cpColorMode === 2) {
                    this.hsva.s = 0;
                }
                let hue, hsla, rgba;
                const lastOutput = this.outputColor;
                hsla = this.service.hsva2hsla(this.hsva);
                if (!this.cpCmykEnabled) {
                    rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
                }
                else {
                    if (!cmykInput) {
                        rgba = this.service.hsvaToRgba(this.hsva);
                        this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
                    }
                    else {
                        rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
                        this.hsva = this.service.rgbaToHsva(rgba);
                    }
                    rgba = this.service.denormalizeRGBA(rgba);
                    this.sliderH = this.hsva.h;
                }
                hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
                if (update) {
                    this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                    this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
                    if (this.cpCmykEnabled) {
                        this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
                    }
                    const allowHex8 = this.cpAlphaChannel === 'always';
                    this.hexText = this.service.rgbaToHex(rgba, allowHex8);
                    this.hexAlpha = this.rgbaText.a;
                }
                if (this.cpOutputFormat === 'auto') {
                    if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK) {
                        if (this.hsva.a < 1) {
                            this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
                        }
                    }
                }
                this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
                this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
                this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
                if (this.format !== ColorFormats.CMYK) {
                    this.cmykColor = '';
                }
                else {
                    if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'enabled' ||
                        this.cpAlphaChannel === 'forced') {
                        const alpha = Math.round(this.cmyk.a * 100) / 100;
                        this.cmykColor = `cmyka(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k},${alpha})`;
                    }
                    else {
                        this.cmykColor = `cmyk(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k})`;
                    }
                }
                this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
                if (emit && lastOutput !== this.outputColor) {
                    if (this.cpCmykEnabled) {
                        this.directiveInstance.cmykChanged(this.cmykColor);
                    }
                    this.directiveInstance.colorChanged(this.outputColor);
                }
            }
        }
        // Private helper functions for the color picker dialog positioning
        setDialogPosition() {
            if (this.cpDialogDisplay === 'inline') {
                this.position = 'relative';
            }
            else {
                let position = 'static', transform = '', style;
                let parentNode = null, transformNode = null;
                let node = this.directiveElementRef.nativeElement.parentNode;
                const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
                while (node !== null && node.tagName !== 'HTML') {
                    style = window.getComputedStyle(node);
                    position = style.getPropertyValue('position');
                    transform = style.getPropertyValue('transform');
                    if (position !== 'static' && parentNode === null) {
                        parentNode = node;
                    }
                    if (transform && transform !== 'none' && transformNode === null) {
                        transformNode = node;
                    }
                    if (position === 'fixed') {
                        parentNode = transformNode;
                        break;
                    }
                    node = node.parentNode;
                }
                const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
                if (this.useRootViewContainer || (position === 'fixed' &&
                    (!parentNode || parentNode instanceof HTMLUnknownElement))) {
                    this.top = boxDirective.top;
                    this.left = boxDirective.left;
                }
                else {
                    if (parentNode === null) {
                        parentNode = node;
                    }
                    const boxParent = this.createDialogBox(parentNode, (position !== 'fixed'));
                    this.top = boxDirective.top - boxParent.top;
                    this.left = boxDirective.left - boxParent.left;
                }
                if (position === 'fixed') {
                    this.position = 'fixed';
                }
                let usePosition = this.cpPosition;
                if (this.cpPosition === 'auto') {
                    const dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
                    const triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
                    usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
                }
                if (usePosition === 'top') {
                    this.arrowTop = dialogHeight - 1;
                    this.top -= dialogHeight + this.dialogArrowSize;
                    this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
                }
                else if (usePosition === 'bottom') {
                    this.top += boxDirective.height + this.dialogArrowSize;
                    this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
                }
                else if (usePosition === 'top-left' || usePosition === 'left-top') {
                    this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
                    this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
                }
                else if (usePosition === 'top-right' || usePosition === 'right-top') {
                    this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
                    this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
                }
                else if (usePosition === 'left' || usePosition === 'bottom-left' || usePosition === 'left-bottom') {
                    this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                    this.left -= this.cpWidth + this.dialogArrowSize - 2;
                }
                else { // usePosition === 'right' || usePosition === 'bottom-right' || usePosition === 'right-bottom'
                    this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                    this.left += boxDirective.width + this.dialogArrowSize - 2;
                }
                this.cpUsePosition = usePosition;
            }
        }
        // Private helper functions for the color picker dialog positioning and opening
        isDescendant(parent, child) {
            let node = child.parentNode;
            while (node !== null) {
                if (node === parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        }
        createDialogBox(element, offset) {
            return {
                top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
                left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
                width: element.offsetWidth,
                height: element.offsetHeight
            };
        }
    }
    ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService)); };
    ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPickerComponent, selectors: [["color-picker"]], viewQuery: function ColorPickerComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialogElement = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hueSlider = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alphaSlider = _t.first);
            }
        }, hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) { return ctx.handleEsc($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) { return ctx.handleEnter($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
            }
        }, decls: 28, vars: 47, consts: [[1, "color-picker", 3, "click"], ["dialogPopup", ""], [3, "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["hueSlider", ""], [1, "cursor"], [1, "value", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["valueSlider", ""], [1, "alpha", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["alphaSlider", ""], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], [1, "saturation-lightness", 3, "slider", "rgX", "rgY", "newValue", "dragStart", "dragEnd"], ["type", "button", 3, "disabled", "click"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "text", "rg", "value", "keyup.enter", "newValue"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hex-text"], [3, "text", "value", "blur", "keyup.enter", "newValue"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"]], template: function ColorPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_2_Template, 1, 5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_3_Template, 2, 8, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorPickerComponent_button_8_Template, 2, 5, "button", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorPickerComponent_div_10_Template, 1, 0, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11, 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_11_listener($event) { return ctx.onHueChange($event); })("dragStart", function ColorPickerComponent_Template_div_dragStart_11_listener() { return ctx.onDragStart("hue"); })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_11_listener() { return ctx.onDragEnd("hue"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14, 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_14_listener($event) { return ctx.onValueChange($event); })("dragStart", function ColorPickerComponent_Template_div_dragStart_14_listener() { return ctx.onDragStart("value"); })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_14_listener() { return ctx.onDragEnd("value"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16, 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_17_listener($event) { return ctx.onAlphaChange($event); })("dragStart", function ColorPickerComponent_Template_div_dragStart_17_listener() { return ctx.onDragStart("alpha"); })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_17_listener() { return ctx.onDragEnd("alpha"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ColorPickerComponent_div_20_Template, 17, 12, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ColorPickerComponent_div_21_Template, 14, 10, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ColorPickerComponent_div_23_Template, 8, 7, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ColorPickerComponent_div_24_Template, 9, 3, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ColorPickerComponent_div_25_Template, 3, 0, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ColorPickerComponent_div_26_Template, 6, 3, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ColorPickerComponent_div_27_Template, 3, 2, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.show);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpDialogDisplay == "popup");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpColorMode || 1) === 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.selectedColor);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAddColorButton);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAlphaChannel === "disabled");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.h, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("right", ctx.slider == null ? null : ctx.slider.v, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.a, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], SliderDirective, TextDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".color-picker{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#fff;border:1px solid #777;cursor:default;height:auto;position:absolute;user-select:none;width:230px;z-index:1000}.color-picker *{box-sizing:border-box;font-size:11px;margin:0}.color-picker input{color:#000;font-size:13px;height:26px;min-width:0;text-align:center;width:0}.color-picker input:-moz-submit-invalid,.color-picker input:-moz-ui-invalid,.color-picker input:invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.color-picker .arrow{border-style:solid;height:0;position:absolute;width:0;z-index:999999}.color-picker .arrow.arrow-top{border-color:#777 transparent transparent;border-width:10px 5px;left:8px}.color-picker .arrow.arrow-bottom{border-color:transparent transparent #777;border-width:10px 5px;left:8px;top:-20px}.color-picker .arrow.arrow-left-top,.color-picker .arrow.arrow-top-left{border-color:transparent transparent transparent #777;border-width:5px 10px;bottom:8px;right:-21px}.color-picker .arrow.arrow-right-top,.color-picker .arrow.arrow-top-right{border-color:transparent #777 transparent transparent;border-width:5px 10px;bottom:8px;left:-20px}.color-picker .arrow.arrow-bottom-left,.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom{border-color:transparent transparent transparent #777;border-width:5px 10px;right:-21px;top:8px}.color-picker .arrow.arrow-bottom-right,.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom{border-color:transparent #777 transparent transparent;border-width:5px 10px;left:-20px;top:8px}.color-picker .cursor{border:2px solid #222;border-radius:50%;cursor:default;height:16px;position:relative;width:16px}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{padding:16px 8px;position:relative}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{color:#555;font-size:11px;overflow:hidden;padding:4px;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.color-picker .preset-area .preset-color{border:1px solid #a9a9a9;border-radius:25%;cursor:pointer;display:inline-block;height:18px;margin:4px 6px 8px;position:relative;width:18px}.color-picker .preset-area .preset-empty-message{font-style:italic;margin-bottom:8px;margin-top:4px;min-height:18px;text-align:center}.color-picker .hex-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{clear:left;color:#555;flex:1 1 auto;float:left;text-align:center}.color-picker .hex-text .box input{border:1px solid #a9a9a9;flex:1 1 auto;padding:1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{color:#555;flex:1 1 auto;margin-right:8px;text-align:center}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{border:1px solid #a9a9a9;flex:1;float:left;margin:0 8px 0 0;padding:1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");direction:ltr}.color-picker .hue,.color-picker .value{background-size:100% 100%;border:none;cursor:pointer;height:16px;margin-bottom:16px;width:100%}.color-picker .value{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=\");direction:rtl}.color-picker .alpha{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:16px;width:100%}.color-picker .type-policy{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");background-position:50%;background-repeat:no-repeat;background-size:8px 16px;height:24px;position:absolute;right:12px;top:218px;width:16px}.color-picker .type-policy .type-policy-arrow{display:block;height:50%;width:100%}.color-picker .selected-color{border:1px solid #a9a9a9;border-radius:50%;height:40px;left:8px;position:absolute;top:16px;width:40px}.color-picker .selected-color-background{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\");border-radius:50%;height:40px;width:40px}.color-picker .saturation-lightness{background-image:url(\"data:image/png;base64,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\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:130px;touch-action:manipulation;width:100%}.color-picker .cp-add-color-button-class{background:transparent;border:0;cursor:pointer;display:inline;margin:3px -3px;padding:0;position:absolute}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{color:#999;cursor:not-allowed}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{background:#fff;border-radius:50%;box-shadow:1px 1px 5px #333;cursor:pointer;display:block;height:10px;position:absolute;right:-5px;text-align:center;top:-5px;width:10px}.color-picker .cp-remove-color-button-class:before{bottom:3.5px;content:\"x\";display:inline-block;font-size:10px;position:relative}"], encapsulation: 2 });
    return ColorPickerComponent;
})();
let ColorPickerDirective = /*@__PURE__*/ (() => {
    class ColorPickerDirective {
        constructor(injector, cfr, appRef, vcRef, elRef, _service) {
            this.injector = injector;
            this.cfr = cfr;
            this.appRef = appRef;
            this.vcRef = vcRef;
            this.elRef = elRef;
            this._service = _service;
            this.dialogCreated = false;
            this.ignoreChanges = false;
            this.viewAttachedToAppRef = false;
            this.cpWidth = '230px';
            this.cpHeight = 'auto';
            this.cpToggle = false;
            this.cpDisabled = false;
            this.cpIgnoredElements = [];
            this.cpFallbackColor = '';
            this.cpColorMode = 'color';
            this.cpCmykEnabled = false;
            this.cpOutputFormat = 'auto';
            this.cpAlphaChannel = 'enabled';
            this.cpDisableInput = false;
            this.cpDialogDisplay = 'popup';
            this.cpSaveClickOutside = true;
            this.cpCloseClickOutside = true;
            this.cpUseRootViewContainer = false;
            this.cpPosition = 'auto';
            this.cpPositionOffset = '0%';
            this.cpPositionRelativeToArrow = false;
            this.cpOKButton = false;
            this.cpOKButtonText = 'OK';
            this.cpOKButtonClass = 'cp-ok-button-class';
            this.cpCancelButton = false;
            this.cpCancelButtonText = 'Cancel';
            this.cpCancelButtonClass = 'cp-cancel-button-class';
            this.cpPresetLabel = 'Preset colors';
            this.cpPresetColorsClass = 'cp-preset-colors-class';
            this.cpMaxPresetColorsLength = 6;
            this.cpPresetEmptyMessage = 'No colors added';
            this.cpPresetEmptyMessageClass = 'preset-empty-message';
            this.cpAddColorButton = false;
            this.cpAddColorButtonText = 'Add color';
            this.cpAddColorButtonClass = 'cp-add-color-button-class';
            this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
            this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
            this.cpCmykColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        }
        handleClick() {
            this.inputFocus();
        }
        handleFocus() {
            this.inputFocus();
        }
        handleInput(event) {
            this.inputChange(event);
        }
        ngOnDestroy() {
            if (this.cmpRef != null) {
                if (this.viewAttachedToAppRef) {
                    this.appRef.detachView(this.cmpRef.hostView);
                }
                this.cmpRef.destroy();
                this.cmpRef = null;
                this.dialog = null;
            }
        }
        ngOnChanges(changes) {
            if (changes.cpToggle && !this.cpDisabled) {
                if (changes.cpToggle.currentValue) {
                    this.openDialog();
                }
                else if (!changes.cpToggle.currentValue) {
                    this.closeDialog();
                }
            }
            if (changes.colorPicker) {
                if (this.dialog && !this.ignoreChanges) {
                    if (this.cpDialogDisplay === 'inline') {
                        this.dialog.setInitialColor(changes.colorPicker.currentValue);
                    }
                    this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
                    if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                        this.cmpRef.changeDetectorRef.detectChanges();
                    }
                }
                this.ignoreChanges = false;
            }
            if (changes.cpPresetLabel || changes.cpPresetColors) {
                if (this.dialog) {
                    this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
                }
            }
        }
        openDialog() {
            if (!this.dialogCreated) {
                let vcRef = this.vcRef;
                this.dialogCreated = true;
                this.viewAttachedToAppRef = false;
                if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                    const classOfRootComponent = this.appRef.componentTypes[0];
                    const appInstance = this.injector.get(classOfRootComponent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].NULL);
                    if (appInstance !== _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].NULL) {
                        vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                        if (vcRef === this.vcRef) {
                            console.warn('You are using cpUseRootViewContainer, ' +
                                'but the root component is not exposing viewContainerRef!' +
                                'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                        }
                    }
                    else {
                        this.viewAttachedToAppRef = true;
                    }
                }
                const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
                if (this.viewAttachedToAppRef) {
                    this.cmpRef = compFactory.create(this.injector);
                    this.appRef.attachView(this.cmpRef.hostView);
                    document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
                }
                else {
                    const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);
                    this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
                }
                this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.elRef);
                this.dialog = this.cmpRef.instance;
                if (this.vcRef !== vcRef) {
                    this.cmpRef.changeDetectorRef.detectChanges();
                }
            }
            else if (this.dialog) {
                this.dialog.openDialog(this.colorPicker);
            }
        }
        closeDialog() {
            if (this.dialog && this.cpDialogDisplay === 'popup') {
                this.dialog.closeDialog();
            }
        }
        cmykChanged(value) {
            this.cpCmykColorChange.emit(value);
        }
        stateChanged(state) {
            this.cpToggleChange.emit(state);
            if (state) {
                this.colorPickerOpen.emit(this.colorPicker);
            }
            else {
                this.colorPickerClose.emit(this.colorPicker);
            }
        }
        colorChanged(value, ignore = true) {
            this.ignoreChanges = ignore;
            this.colorPickerChange.emit(value);
        }
        colorSelected(value) {
            this.colorPickerSelect.emit(value);
        }
        colorCanceled() {
            this.colorPickerCancel.emit();
        }
        inputFocus() {
            const element = this.elRef.nativeElement;
            const ignored = this.cpIgnoredElements.filter((item) => item === element);
            if (!this.cpDisabled && !ignored.length) {
                if (typeof document !== 'undefined' && element === document.activeElement) {
                    this.openDialog();
                }
                else if (!this.dialog || !this.dialog.show) {
                    this.openDialog();
                }
                else {
                    this.closeDialog();
                }
            }
        }
        inputChange(event) {
            if (this.dialog) {
                this.dialog.setColorFromString(event.target.value, true);
            }
            else {
                this.colorPicker = event.target.value;
                this.colorPickerChange.emit(this.colorPicker);
            }
        }
        inputChanged(event) {
            this.cpInputChange.emit(event);
        }
        sliderChanged(event) {
            this.cpSliderChange.emit(event);
        }
        sliderDragEnd(event) {
            this.cpSliderDragEnd.emit(event);
        }
        sliderDragStart(event) {
            this.cpSliderDragStart.emit(event);
        }
        presetColorsChanged(value) {
            this.cpPresetColorsChange.emit(value);
        }
    }
    ColorPickerDirective.ɵfac = function ColorPickerDirective_Factory(t) { return new (t || ColorPickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService)); };
    ColorPickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ColorPickerDirective, selectors: [["", "colorPicker", ""]], hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDirective_click_HostBindingHandler() { return ctx.handleClick(); })("focus", function ColorPickerDirective_focus_HostBindingHandler() { return ctx.handleFocus(); })("input", function ColorPickerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); });
            }
        }, inputs: { cpWidth: "cpWidth", cpHeight: "cpHeight", cpToggle: "cpToggle", cpDisabled: "cpDisabled", cpIgnoredElements: "cpIgnoredElements", cpFallbackColor: "cpFallbackColor", cpColorMode: "cpColorMode", cpCmykEnabled: "cpCmykEnabled", cpOutputFormat: "cpOutputFormat", cpAlphaChannel: "cpAlphaChannel", cpDisableInput: "cpDisableInput", cpDialogDisplay: "cpDialogDisplay", cpSaveClickOutside: "cpSaveClickOutside", cpCloseClickOutside: "cpCloseClickOutside", cpUseRootViewContainer: "cpUseRootViewContainer", cpPosition: "cpPosition", cpPositionOffset: "cpPositionOffset", cpPositionRelativeToArrow: "cpPositionRelativeToArrow", cpOKButton: "cpOKButton", cpOKButtonText: "cpOKButtonText", cpOKButtonClass: "cpOKButtonClass", cpCancelButton: "cpCancelButton", cpCancelButtonText: "cpCancelButtonText", cpCancelButtonClass: "cpCancelButtonClass", cpPresetLabel: "cpPresetLabel", cpPresetColorsClass: "cpPresetColorsClass", cpMaxPresetColorsLength: "cpMaxPresetColorsLength", cpPresetEmptyMessage: "cpPresetEmptyMessage", cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass", cpAddColorButton: "cpAddColorButton", cpAddColorButtonText: "cpAddColorButtonText", cpAddColorButtonClass: "cpAddColorButtonClass", cpRemoveColorButtonClass: "cpRemoveColorButtonClass", colorPicker: "colorPicker", cpPresetColors: "cpPresetColors" }, outputs: { cpInputChange: "cpInputChange", cpToggleChange: "cpToggleChange", cpSliderChange: "cpSliderChange", cpSliderDragEnd: "cpSliderDragEnd", cpSliderDragStart: "cpSliderDragStart", colorPickerOpen: "colorPickerOpen", colorPickerClose: "colorPickerClose", colorPickerCancel: "colorPickerCancel", colorPickerSelect: "colorPickerSelect", colorPickerChange: "colorPickerChange", cpCmykColorChange: "cpCmykColorChange", cpPresetColorsChange: "cpPresetColorsChange" }, exportAs: ["ngxColorPicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
    return ColorPickerDirective;
})();
let ColorPickerModule = /*@__PURE__*/ (() => {
    class ColorPickerModule {
    }
    ColorPickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ColorPickerModule });
    ColorPickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ColorPickerModule_Factory(t) { return new (t || ColorPickerModule)(); }, providers: [ColorPickerService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return ColorPickerModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ColorPickerModule, { declarations: function () { return [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ColorPickerDirective]; } }); })();
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-color-picker.js.map


/***/ }),

/***/ "./src/app/usuario-rol/user/pipes/filter.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/usuario-rol/user/pipes/filter.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilterPipe = /*@__PURE__*/ (() => {
    class FilterPipe {
        transform(users, page = 0, search = '') {
            if (search.length === 0)
                return users.slice(page, page + 5);
            const filteredUsers = users.filter(user => user.user_uninorte.includes(search));
            return filteredUsers.slice(page, page + 5);
        }
    }
    FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
    return FilterPipe;
})();


/***/ }),

/***/ "./src/app/usuario-rol/user/pipes/list.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/usuario-rol/user/pipes/list.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ListPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPipe", function() { return ListPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ListPipe = /*@__PURE__*/ (() => {
    class ListPipe {
        transform(users, page = 0, searchList = '') {
            if (searchList.length === 0)
                return users.slice(page, page + 5);
            const filteredList = users.filter(user => user.specialty.includes(searchList));
            return filteredList.slice(page, page + 5);
        }
    }
    ListPipe.ɵfac = function ListPipe_Factory(t) { return new (t || ListPipe)(); };
    ListPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "list", type: ListPipe, pure: true });
    return ListPipe;
})();


/***/ }),

/***/ "./src/app/usuario-rol/user/pipes/type.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/usuario-rol/user/pipes/type.pipe.ts ***!
  \*****************************************************/
/*! exports provided: TypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePipe", function() { return TypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TypePipe = /*@__PURE__*/ (() => {
    class TypePipe {
        transform(users, page = 0, searchType = '') {
            if (searchType.length === 0)
                return users.slice(page, page + 5);
            const filteredType = users.filter(user => user.roles_uninorte.includes(searchType));
            return filteredType.slice(page, page + 5);
        }
    }
    TypePipe.ɵfac = function TypePipe_Factory(t) { return new (t || TypePipe)(); };
    TypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "type", type: TypePipe, pure: true });
    return TypePipe;
})();


/***/ }),

/***/ "./src/app/usuario-rol/user/user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/usuario-rol/user/user.component.ts ***!
  \****************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_user_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/user-crud.service */ "./src/app/core/services/user-crud.service.ts");
/* harmony import */ var _core_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/token.service */ "./src/app/core/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_menu_superior_menu_superior_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/menu-superior/menu-superior.component */ "./src/app/shared/menu-superior/menu-superior.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _pipes_type_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/type.pipe */ "./src/app/usuario-rol/user/pipes/type.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/usuario-rol/user/pipes/filter.pipe.ts");
/* harmony import */ var _pipes_list_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/list.pipe */ "./src/app/usuario-rol/user/pipes/list.pipe.ts");


















function UserComponent_option_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const tipo_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tipo_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tipo_r4, "");
    }
}
function UserComponent_option_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const especialidad_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", especialidad_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", especialidad_r5, "");
    }
}
const _c0 = function (a2) { return ["/dashboard/", "editUser", a2]; };
const _c1 = function (a2) { return ["/dashboard/", "detailUser", a2]; };
function UserComponent_tr_51_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const user_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, user_r6.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.user_uninorte);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.roles_uninorte);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.specialty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, user_r6.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, user_r6.id));
    }
}
const _c2 = function () { return [10]; };
let UserComponent = /*@__PURE__*/ (() => {
    class UserComponent {
        constructor(_formBuilder, ListUsers, Token, route, router) {
            this._formBuilder = _formBuilder;
            this.ListUsers = ListUsers;
            this.Token = Token;
            this.route = route;
            this.router = router;
            this.page = 0;
            this.search = '';
            this.especialidades = ['Todos', 'Profesor', 'Psicólogo', 'Psiquiatra', 'Soporte'];
            this.tipoUsuario = ['Todos', 'Profesor', 'Administrativo', 'Egresado', 'Estudiante'];
        }
        ngOnInit() {
            this.form = this._formBuilder.group({});
            this.ListUsers.getAll().subscribe((data) => {
                this.users = data;
                this.count = this.users.length;
            });
            this.getUserName();
        }
        goToUrl(url) {
            console.log('Se recibio la peticion');
            console.log(url);
        }
        get getFormGroup() {
            return this.form;
        }
        nextPage() {
            this.page += 5;
        }
        prevPage() {
            if (this.page > 0)
                this.page -= 5;
        }
        onSearchUser(search) {
            this.page = 0;
            this.search = search;
        }
        onSearchList(searchList) {
            this.page = 0;
            if (searchList == "Todos") {
                console.log("nothing filter");
                window.location.reload();
            }
            else {
                this.searchList = searchList;
                console.log(this.searchList);
            }
        }
        getUserName() {
            let data = sessionStorage.getItem('username');
            console.log(data);
        }
        onSearchType(searchType) {
            this.page = 0;
            if (searchType == "Todos") {
                console.log("nothing filter");
                window.location.reload();
            }
            else {
                this.searchType = searchType;
                console.log(this.searchType);
            }
        }
    }
    UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_user_crud_service__WEBPACK_IMPORTED_MODULE_2__["UserCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 75, vars: 37, consts: [[1, "row"], [1, "col-4", "p-0"], [1, "clearmp"], [1, "height-70px-estar-bien"], [1, "clearmp", "bg-transparent", "h-100vh-estar-bien"], [1, "form-container", 3, "formGroup"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "mb-2"], [1, "subtitle"], [1, "field-custom-estar-bien", "no-line", "no-padding"], ["type", "text", "matInput", "", "placeholder", "*Usuario", 3, "keyup"], ["txtSearch", ""], ["matSuffix", "", "mat-button", ""], [1, "estarbien-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "p-1", "bd-highlight", "mt-2", "text-end"], ["mat-button", "", 1, "buttons-estar-bien", "buttons-estar-bien-add"], [1, "col-8", "p-0"], ["titulo", "Usuarios", "cancelar", "true", "exportar", "true", "agregar", "true", "url", "addUser", "id", "1", 3, "accion"], [1, "container"], [1, "table-responsive"], [1, "mt-2"], [2, "color", "#19abbb", "font-size", "12px", "font-weight", "500", "font-family", "normal normal medium 12px/17px Gilroy"], [1, "text-center"], [1, "text"], ["style", "font-size: 12px; font-weight: 500; font-family: normal normal medium 12px/17px Gilroy; border: transparent 15px solid; border-radius: 30px;", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "mt-2", "mr-1", 2, "font-family", "Poppins", "font-size", "12px"], ["aria-label", "Page navigation example", 2, "font-family", "Poppins", "font-size", "12px"], [1, "col-sm-12", "mt-2", "mr-1", 2, "text-align", "end"], [2, "color", "#8D949B"], [2, "color", "#8D949B", "background-color", "white", "width", "80px", "height", "35px", "font-family", "Poppins", "font-size", "12px", 3, "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], [2, "color", "#8D949B", "background-color", "white", "width", "80px", "height", "35px", "font-family", "Poppins", "font-size", "12px", 3, "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"], ["showFirstLastButtons", "", 2, "display", "none", 3, "pageSizeOptions"], [3, "value"], [2, "font-size", "12px", "font-weight", "500", "font-family", "normal normal medium 12px/17px Gilroy", "border", "transparent 15px solid", "border-radius", "30px"], [1, "mat-cell", "text-center", 2, "color", "#19abbb", "font-size", "12px", "font-weight", "500", "font-family", "normal normal medium 12px/17px Gilroy"], ["href", "dashboard/editUser", 2, "color", "#19abbb", "font-size", "12px", "font-weight", "500", "font-family", "normal normal medium 12px/17px Gilroy", 3, "routerLink"], [1, "text", "mat-cell", "text-center"], [1, "text", "mat-cell"], [1, "mat-cell"], [2, "border-radius", "30px", "border", "none", "width", "52px", "height", "23px", "background-color", "#e5ffa0"], [2, "color", "#119528"], [1, "text-center", "mat-cell"], ["href", "dashboard/editUser", "title", "Editar", "data-toggle", "tooltip", 1, "settings", 3, "routerLink"], [1, "fas", "fa-edit", 2, "color", "#19abbb"], ["href", "dashboard/detailUser", "title", "Ver", "data-toggle", "tooltip", 1, "delete", 3, "routerLink"], [1, "fas", "fa-eye", 2, "color", "#19abbb"]], template: function UserComponent_Template(rf, ctx) {
            if (rf & 1) {
                const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-card-content", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Por Nombre o Alias");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9, 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UserComponent_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.onSearchUser(_r0.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "search");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Por tipo de usuario");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserComponent_Template_select_change_20_listener($event) { return ctx.onSearchType($event.target.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserComponent_option_21_Template, 2, 2, "option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Por especialidad");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserComponent_Template_select_change_25_listener($event) { return ctx.onSearchList($event.target.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserComponent_option_26_Template, 2, 2, "option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Filtrar ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-menu-superior", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("accion", function UserComponent_Template_app_menu_superior_accion_31_listener($event) { return $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nombre");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Tipo de usuario");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Especialidad");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Estado");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Acciones");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, UserComponent_tr_51_Template, 21, 13, "tr", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "type");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "filter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "list");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nav", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "small", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "filter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_61_listener() { return ctx.prevPage(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "svg", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_66_listener() { return ctx.nextPage(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "type");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "filter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "list");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "svg", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-paginator", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.getFormGroup);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tipoUsuario);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.especialidades);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](52, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](53, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](54, 16, ctx.users, ctx.page, ctx.searchList), ctx.page, ctx.search), ctx.page, ctx.searchType));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Results ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](60, 20, ctx.users, ctx.page, ctx.search).length, " of ", ctx.count, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](67, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](68, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](69, 32, ctx.users, ctx.page, ctx.searchList), ctx.page, ctx.searchList), ctx.page, ctx.searchType).length === 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c2));
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _shared_menu_superior_menu_superior_component__WEBPACK_IMPORTED_MODULE_12__["MenuSuperiorComponent"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_pipes_type_pipe__WEBPACK_IMPORTED_MODULE_14__["TypePipe"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"], _pipes_list_pipe__WEBPACK_IMPORTED_MODULE_16__["ListPipe"]], styles: [".mat-checkbox-frame {\n  border-color: #19ABBB;\n}"] });
    return UserComponent;
})();


/***/ }),

/***/ "./src/app/usuario-rol/usuario-rol.module.ts":
/*!***************************************************!*\
  !*** ./src/app/usuario-rol/usuario-rol.module.ts ***!
  \***************************************************/
/*! exports provided: UsuarioRolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioRolModule", function() { return UsuarioRolModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/usuario-rol/user/user.component.ts");
/* harmony import */ var _pages_rules_rules_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/rules/rules.component */ "./src/app/usuario-rol/pages/rules/rules.component.ts");
/* harmony import */ var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/gallery/gallery.component */ "./src/app/usuario-rol/pages/gallery/gallery.component.ts");
/* harmony import */ var _pages_conversations_conversations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/conversations/conversations.component */ "./src/app/usuario-rol/pages/conversations/conversations.component.ts");
/* harmony import */ var _pages_detail_conversations_detail_conversations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/detail-conversations/detail-conversations.component */ "./src/app/usuario-rol/pages/detail-conversations/detail-conversations.component.ts");
/* harmony import */ var _pages_emergency_reports_emergency_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/emergency-reports/emergency-reports.component */ "./src/app/usuario-rol/pages/emergency-reports/emergency-reports.component.ts");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _usuario_rol_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usuario-rol.routing */ "./src/app/usuario-rol/usuario-rol.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_phone_lines_phone_lines_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/phone-lines/phone-lines.component */ "./src/app/usuario-rol/pages/phone-lines/phone-lines.component.ts");
/* harmony import */ var _usuario_rol_pages_roles_roles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../usuario-rol/pages/roles/roles.component */ "./src/app/usuario-rol/pages/roles/roles.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/usuario-rol/add-user/add-user.component.ts");
/* harmony import */ var _pages_themes_themes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/themes/themes.component */ "./src/app/usuario-rol/pages/themes/themes.component.ts");
/* harmony import */ var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edituser/edituser.component */ "./src/app/usuario-rol/edituser/edituser.component.ts");
/* harmony import */ var _detailuser_detailuser_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./detailuser/detailuser.component */ "./src/app/usuario-rol/detailuser/detailuser.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
/* harmony import */ var _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/resources/resources.component */ "./src/app/usuario-rol/pages/resources/resources.component.ts");
/* harmony import */ var _user_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/pipes/filter.pipe */ "./src/app/usuario-rol/user/pipes/filter.pipe.ts");
/* harmony import */ var _pages_addroles_addroles_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/addroles/addroles.component */ "./src/app/usuario-rol/pages/addroles/addroles.component.ts");
/* harmony import */ var _pages_roles_pipes_rol_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/roles/pipes/rol.pipe */ "./src/app/usuario-rol/pages/roles/pipes/rol.pipe.ts");
/* harmony import */ var _pages_editrol_editrol_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/editrol/editrol.component */ "./src/app/usuario-rol/pages/editrol/editrol.component.ts");
/* harmony import */ var _user_pipes_list_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/pipes/list.pipe */ "./src/app/usuario-rol/user/pipes/list.pipe.ts");
/* harmony import */ var _user_pipes_type_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/pipes/type.pipe */ "./src/app/usuario-rol/user/pipes/type.pipe.ts");
/* harmony import */ var _pages_resources_create_edit_resources_create_edit_resources_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/resources/create-edit-resources/create-edit-resources.component */ "./src/app/usuario-rol/pages/resources/create-edit-resources/create-edit-resources.component.ts");
/* harmony import */ var _pages_interactive_tests_interactive_tests_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/interactive-tests/interactive-tests.component */ "./src/app/usuario-rol/pages/interactive-tests/interactive-tests.component.ts");
/* harmony import */ var _pages_interactive_tests_detail_interactive_tests_detail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/interactive-tests-detail/interactive-tests-detail.component */ "./src/app/usuario-rol/pages/interactive-tests-detail/interactive-tests-detail.component.ts");

























// import { ChartsModule } from 'ng2-charts';
// import { Chart, registerables } from 'chart.js';











let UsuarioRolModule = /*@__PURE__*/ (() => {
    class UsuarioRolModule {
    }
    UsuarioRolModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsuarioRolModule });
    UsuarioRolModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsuarioRolModule_Factory(t) { return new (t || UsuarioRolModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _demo_material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_usuario_rol_routing__WEBPACK_IMPORTED_MODULE_13__["UsuarioRolRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_23__["ColorPickerModule"],
            ]] });
    return UsuarioRolModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsuarioRolModule, { declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
            _pages_rules_rules_component__WEBPACK_IMPORTED_MODULE_6__["RulesComponent"],
            _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"],
            _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__["AddUserComponent"],
            _pages_conversations_conversations_component__WEBPACK_IMPORTED_MODULE_8__["ConversationsComponent"],
            _pages_emergency_reports_emergency_reports_component__WEBPACK_IMPORTED_MODULE_10__["EmergencyReportsComponent"],
            _pages_phone_lines_phone_lines_component__WEBPACK_IMPORTED_MODULE_15__["PhoneLinesComponent"],
            _usuario_rol_pages_roles_roles_component__WEBPACK_IMPORTED_MODULE_16__["RolesComponent"],
            _pages_themes_themes_component__WEBPACK_IMPORTED_MODULE_18__["ThemesComponent"],
            _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_19__["EdituserComponent"],
            _pages_detail_conversations_detail_conversations_component__WEBPACK_IMPORTED_MODULE_9__["DetailConversationsComponent"],
            _detailuser_detailuser_component__WEBPACK_IMPORTED_MODULE_20__["DetailuserComponent"],
            _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_24__["ResourcesComponent"],
            _user_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["FilterPipe"],
            _usuario_rol_pages_roles_roles_component__WEBPACK_IMPORTED_MODULE_16__["RolesComponent"],
            _pages_addroles_addroles_component__WEBPACK_IMPORTED_MODULE_26__["AddrolesComponent"],
            _pages_roles_pipes_rol_pipe__WEBPACK_IMPORTED_MODULE_27__["RolPipe"],
            _pages_editrol_editrol_component__WEBPACK_IMPORTED_MODULE_28__["EditrolComponent"],
            _user_pipes_list_pipe__WEBPACK_IMPORTED_MODULE_29__["ListPipe"],
            _user_pipes_type_pipe__WEBPACK_IMPORTED_MODULE_30__["TypePipe"],
            _pages_resources_create_edit_resources_create_edit_resources_component__WEBPACK_IMPORTED_MODULE_31__["CreateEditResourcesComponent"],
            _pages_interactive_tests_interactive_tests_component__WEBPACK_IMPORTED_MODULE_32__["InteractiveTestsComponent"],
            _pages_interactive_tests_detail_interactive_tests_detail_component__WEBPACK_IMPORTED_MODULE_33__["InteractiveTestsDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_23__["ColorPickerModule"]] });
})();


/***/ }),

/***/ "./src/app/usuario-rol/usuario-rol.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/usuario-rol/usuario-rol.routing.ts ***!
  \****************************************************/
/*! exports provided: UsuarioRolRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioRolRoutes", function() { return UsuarioRolRoutes; });
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ "./src/app/usuario-rol/user/user.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/usuario-rol/add-user/add-user.component.ts");
/* harmony import */ var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edituser/edituser.component */ "./src/app/usuario-rol/edituser/edituser.component.ts");
/* harmony import */ var _detailuser_detailuser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailuser/detailuser.component */ "./src/app/usuario-rol/detailuser/detailuser.component.ts");
/* harmony import */ var _usuario_rol_pages_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usuario-rol/pages/roles/roles.component */ "./src/app/usuario-rol/pages/roles/roles.component.ts");
/* harmony import */ var _pages_phone_lines_phone_lines_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/phone-lines/phone-lines.component */ "./src/app/usuario-rol/pages/phone-lines/phone-lines.component.ts");
/* harmony import */ var _pages_themes_themes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/themes/themes.component */ "./src/app/usuario-rol/pages/themes/themes.component.ts");
/* harmony import */ var _pages_addroles_addroles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/addroles/addroles.component */ "./src/app/usuario-rol/pages/addroles/addroles.component.ts");
/* harmony import */ var _pages_editrol_editrol_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/editrol/editrol.component */ "./src/app/usuario-rol/pages/editrol/editrol.component.ts");
/* harmony import */ var _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/resources/resources.component */ "./src/app/usuario-rol/pages/resources/resources.component.ts");
/* harmony import */ var _pages_resources_create_edit_resources_create_edit_resources_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/resources/create-edit-resources/create-edit-resources.component */ "./src/app/usuario-rol/pages/resources/create-edit-resources/create-edit-resources.component.ts");
/* harmony import */ var _pages_interactive_tests_interactive_tests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/interactive-tests/interactive-tests.component */ "./src/app/usuario-rol/pages/interactive-tests/interactive-tests.component.ts");
/* harmony import */ var _pages_interactive_tests_detail_interactive_tests_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/interactive-tests-detail/interactive-tests-detail.component */ "./src/app/usuario-rol/pages/interactive-tests-detail/interactive-tests-detail.component.ts");













const UsuarioRolRoutes = [
    {
        path: '',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        data: {
            title: 'Usuario Rol',
            urls: [{ title: 'Usuario rol', url: '/user' }, { title: 'Usuario rol' }],
        },
    },
    {
        path: 'addUser',
        component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_1__["AddUserComponent"],
        data: {
            title: 'Usuario Rol',
            urls: [
                { title: 'Usuario rol', url: '/addUser' },
                { title: 'Usuario rol' },
            ],
        },
    },
    {
        path: 'editUser/:id',
        component: _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_2__["EdituserComponent"],
        data: {
            title: 'Usuario Rol',
            urls: [
                { title: 'Usuario rol', url: '/editUser' },
                { title: 'Usuario rol' },
            ],
        },
    },
    {
        path: 'detailUser/:id',
        component: _detailuser_detailuser_component__WEBPACK_IMPORTED_MODULE_3__["DetailuserComponent"],
        data: {
            title: 'Usuario Rol',
            urls: [
                { title: 'Usuario rol', url: '/detailUser' },
                { title: 'Usuario rol' },
            ],
        },
    },
    {
        path: 'phone-lines',
        component: _pages_phone_lines_phone_lines_component__WEBPACK_IMPORTED_MODULE_5__["PhoneLinesComponent"],
        data: {
            title: 'Líneas telefónicas',
            urls: [
                { title: 'Líneas telefónicas', url: '/phone-lines' },
                { title: 'Líneas telefónicas' },
            ],
        },
    },
    {
        path: 'tests',
        component: _pages_interactive_tests_interactive_tests_component__WEBPACK_IMPORTED_MODULE_11__["InteractiveTestsComponent"],
        data: {
            title: 'Pruebas Interactivas',
            urls: [
                { title: 'Pruebas Interactivas', url: '/tests' },
                { title: 'Pruebas Interactivas' },
            ],
        },
    },
    {
        path: 'tests-detail/:id',
        component: _pages_interactive_tests_detail_interactive_tests_detail_component__WEBPACK_IMPORTED_MODULE_12__["InteractiveTestsDetailComponent"],
        data: {
            title: 'Detalles de Pruebas',
            urls: [
                { title: 'Detalles de Pruebas', url: '/tests-detail' },
                { title: 'Detalles de Pruebas' },
            ],
        },
    },
    {
        path: 'roles',
        component: _usuario_rol_pages_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"],
        data: {
            title: 'Roles',
            urls: [{ title: 'Roles', url: '/roles' }, { title: 'Roles' }],
        },
    },
    {
        path: 'addRoles',
        component: _pages_addroles_addroles_component__WEBPACK_IMPORTED_MODULE_7__["AddrolesComponent"],
        data: {
            title: 'Roles',
            urls: [
                { title: 'Añadir rol', url: '/addRoles' },
                { title: 'Añadir rol' },
            ],
        },
    },
    {
        path: 'editRol/:id',
        component: _pages_editrol_editrol_component__WEBPACK_IMPORTED_MODULE_8__["EditrolComponent"],
        data: {
            title: 'Editar rol',
            urls: [{ title: 'Editar rol', url: '/editRol' }, { title: 'Editar rol' }],
        },
    },
    {
        path: 'themes',
        component: _pages_themes_themes_component__WEBPACK_IMPORTED_MODULE_6__["ThemesComponent"],
        data: {
            title: 'Temas y subtemas',
            urls: [
                { title: 'Temas y subtemas', url: '/themes' },
                { title: 'Temas y subtemas' },
            ],
        },
    },
    {
        path: 'resources',
        component: _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_9__["ResourcesComponent"],
        data: {
            title: 'Recursos',
            urls: [{ title: 'Recursos', url: '/resources' }, { title: 'Recursos' }],
        },
    },
    {
        path: 'create-edit-resources',
        component: _pages_resources_create_edit_resources_create_edit_resources_component__WEBPACK_IMPORTED_MODULE_10__["CreateEditResourcesComponent"],
        data: {
            title: 'Crear Recurso',
            urls: [
                { title: 'Crear Recurso', url: '/create-edit-resources' },
                { title: 'Crear Recurso' },
            ],
        },
    },
];


/***/ })

}]);