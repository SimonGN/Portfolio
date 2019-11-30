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
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./components/Project/Project.js");
/* harmony import */ var _content_project_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/project.json */ "./content/project.json");
var _content_project_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/project.json */ "./content/project.json", 1);
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Portfolio/components/Project/ProjectAll.js";




var ProjectAll = function ProjectAll() {
  var displayProject = function displayProject() {
    return _content_project_json__WEBPACK_IMPORTED_MODULE_2__.map(function (project) {
      var img = project.img,
          client = project.client,
          linkWeb = project.linkWeb,
          linkBehance = project.linkBehance,
          stack = project.stack,
          type = project.type,
          links = project.links;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_1__["default"], {
        img: img,
        client: client,
        linkWeb: linkWeb,
        linkBehance: linkBehance,
        stack: stack,
        type: type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    });
  };

  return displayProject();
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectAll);

/***/ })

})
//# sourceMappingURL=index.js.3ae703ea846b54fec6d6.hot-update.js.map