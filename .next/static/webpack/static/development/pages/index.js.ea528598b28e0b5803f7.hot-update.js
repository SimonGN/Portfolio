webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Project/ProjectAll.js":
/*!******************************************!*\
  !*** ./components/Project/ProjectAll.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _ProjectAllStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectAllStyle */ "./components/Project/ProjectAllStyle.js");
/* harmony import */ var _styles_fontsStyles_fontP__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/fontP */ "./styles/fontsStyles/fontP.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Project */ "./components/Project/Project.js");
/* harmony import */ var _content_project_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content/project.json */ "./content/project.json");
var _content_project_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/project.json */ "./content/project.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Portfolio/components/Project/ProjectAll.js";








var ProjectAll = function ProjectAll() {
  var displayProject = function displayProject() {
    return _content_project_json__WEBPACK_IMPORTED_MODULE_6__.map(function (project) {
      var img = project.img,
          client = project.client,
          linkWeb = project.linkWeb,
          linkBehance = project.linkBehance,
          stack = project.stack,
          type = project.type;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
        img: img,
        client: client,
        linkWeb: linkWeb,
        linkBehance: linkBehance,
        stack: stack,
        type: type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectAllStyle__WEBPACK_IMPORTED_MODULE_3__["ProjectAllStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, displayProject());
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectAll);

/***/ })

})
//# sourceMappingURL=index.js.ea528598b28e0b5803f7.hot-update.js.map