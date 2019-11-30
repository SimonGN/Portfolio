webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Text/Text.js":
/*!*********************************!*\
  !*** ./components/Text/Text.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextStyle */ "./components/Text/TextStyle.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_fontsStyles_fonth1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/fonth1 */ "./styles/fontsStyles/fonth1.js");
/* harmony import */ var _styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/fontsStyles/fontp */ "./styles/fontsStyles/fontp.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");

var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Portfolio/components/Text/Text.js";







var Text = function Text() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      view = _useState2[0],
      setView = _useState2[1];

  var handleOpen = function handleOpen() {
    var value = !view;
    setView(value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TextStyle__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
    view: view,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "40px",
    onClick: handleOpen,
    cursor: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Hola")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fonth1__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Soy Sim\xF3n G. Negrete. Trabajo como Director de Arte y Desarrollo. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Especializado en branding y producto, acompa\xF1o a clientes desde la conceptualizaci\xF3n de la idea, pasando por el dise\xF1o e implementaci\xF3n en entornos online como offline. ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Tel:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "tel:+34679-206-202",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "679 206 202"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Email:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "hi@simongnegrete.com"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Social:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/simongnegrete/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Linkedin")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/SimonGN",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Github")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.behance.net/simongnegrete",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Behance")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_fontp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cursor: "true",
    onClick: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "X")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: "Dise\xF1o",
    color: "#F1A409",
    backgroundColor: "#FCEDCE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: "Web",
    color: "#F1A409",
    backgroundColor: "#FCEDCE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.5fea97c02e7c0f7635c2.hot-update.js.map