/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    --peach:#FCEDDA;\\r\\n    --burntOrange: #EE4E34;\\r\\n    --beige: #DDC3A5;\\r\\n    --paleYellow:#FBF8BE;\\r\\n    --royalBlue:#234E70;\\r\\n    --darkBlue: rgb(50,50,60);\\r\\n    --darkWhite: rgba(255, 250, 250, 0.75);\\r\\n}\\r\\n\\r\\nbody{\\r\\n    display: grid;\\r\\n    grid-template-rows: 0.5fr 4fr;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n}\\r\\nheader{\\r\\n    display: grid;\\r\\n    grid-template-columns: 0.25fr 0.75fr;\\r\\n    align-items: center;\\r\\n\\r\\n    position: sticky;\\r\\n    background-color: var(--darkBlue);\\r\\n}\\r\\nheader > :first-child{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\nheader > :first-child > h1{\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n    color: var(--darkWhite);\\r\\n    font-weight: 900;\\r\\n    font-size: 1.5rem;\\r\\n}\\r\\n\\r\\nheader > :last-child{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-evenly;\\r\\n    align-items: center;\\r\\n}\\r\\nheader > :last-child > button{\\r\\n    text-transform: lowercase;\\r\\n    font-weight: 900;\\r\\n\\r\\n    font-size: 1rem;\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n    font-weight: 900;\\r\\n\\r\\n    color:var(--royalBlue);\\r\\n    padding: 0.5em 1em;\\r\\n    border-radius: 10px;\\r\\n    border: 2px solid var(--darkBlue);\\r\\n    background-color:rgba(0,0,0,0);\\r\\n    transition: all 0.2 ease;\\r\\n\\r\\n}\\r\\nheader > :last-child > button:hover{\\r\\n    border: 2px solid var(--darkWhite);\\r\\n    color:var(--darkWhite) ;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\nmain{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 3fr;\\r\\n    background-color: var(--darkBlue);\\r\\n}\\r\\n\\r\\n\\r\\n/*DIV TODO SECTION*/\\r\\n\\r\\n#todoSection>div{\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n    font-weight: 900;\\r\\n    font-size: 1em;\\r\\n    color: var(--darkWhite);\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/*DIV FIELD SECTION*/\\r\\n#fieldContainer{\\r\\n    display: flex;\\r\\n    flex-flow: column wrap;\\r\\n    gap: 0.5em;\\r\\n}\\r\\n#fieldContainer>.fieldElement{\\r\\n    width: 100%;\\r\\n    padding: 0.5em 1em;\\r\\n    background-color: var(--darkWhite);\\r\\n    \\r\\n    font-size: 1rem;\\r\\n    font-weight: 600;\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n    color:var(--darkBlue);\\r\\n\\r\\n    transition: all 0.2s ease;\\r\\n}\\r\\n\\r\\n#fieldContainer>.fieldElement:hover{\\r\\n    background-color: var(--darkBlue);\\r\\n    color: var(--darkWhite);\\r\\n}\\r\\n\\r\\n/*when clickd*/\\r\\n#fieldContainer>.fieldElement.active{\\r\\n    background-color: var(--paleYellow);\\r\\n    color: var(--royalBlue);\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/*AddTodo Btn*/\\r\\n/*\\r\\nbutton#addTodo{\\r\\n    padding: 4em;\\r\\n    border-radius: 50%;\\r\\n    font-size: 1rem;\\r\\n    font-weight: 700;\\r\\n\\r\\n    position: fixed;\\r\\n    bottom: 15px;\\r\\n    right: 15px;\\r\\n    \\r\\n}\\r\\n*/\\r\\n/*Dialog*/\\r\\n\\r\\ndialog#popUp{\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addFieldFromArrayToLocalStorage.js":
/*!************************************************!*\
  !*** ./src/addFieldFromArrayToLocalStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFieldFromArrayToLocalStorage\": () => (/* binding */ addFieldFromArrayToLocalStorage)\n/* harmony export */ });\nconst addFieldFromArrayToLocalStorage = (array) =>{\r\n     let fields = JSON.stringify(array)\r\n      localStorage.setItem('fields', fields)\r\n     \r\n}\n\n//# sourceURL=webpack://todo-list/./src/addFieldFromArrayToLocalStorage.js?");

/***/ }),

/***/ "./src/addFieldToList.js":
/*!*******************************!*\
  !*** ./src/addFieldToList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFieldToList\": () => (/* binding */ addFieldToList)\n/* harmony export */ });\nconst addFieldToList = (array, obj)=>{\r\n    array.push(obj)\r\n   \r\n}\n\n//# sourceURL=webpack://todo-list/./src/addFieldToList.js?");

/***/ }),

/***/ "./src/fieldDOM.js":
/*!*************************!*\
  !*** ./src/fieldDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fieldDOMRenderer\": () => (/* binding */ fieldDOMRenderer)\n/* harmony export */ });\nconst fieldDOMRenderer = (array)=>{\r\n    const fieldContainer = document.getElementById('fieldContainer')\r\n    if(localStorage.getItem('fields') !== null){\r\n        \r\n            let div = document.createElement('div')\r\n            div.setAttribute('class', 'fieldElement')\r\n            div.setAttribute('id', array[array.length-1].id)\r\n        \r\n            let title = document.createElement('h1')\r\n            title.innerHTML = array[array.length-1].name\r\n        \r\n            div.appendChild(title)\r\n        \r\n            fieldContainer.appendChild(div)\r\n            \r\n    }\r\n    \r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/fieldDOM.js?");

/***/ }),

/***/ "./src/fieldInfoAdder.js":
/*!*******************************!*\
  !*** ./src/fieldInfoAdder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fieldIndoAdder\": () => (/* binding */ fieldIndoAdder)\n/* harmony export */ });\n/* harmony import */ var _fieldObjectCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fieldObjectCreator */ \"./src/fieldObjectCreator.js\");\n\r\nconst fieldIndoAdder = ()=>{\r\n    const fieldTitleInput = document.getElementById('fieldTitle')\r\n    return (0,_fieldObjectCreator__WEBPACK_IMPORTED_MODULE_0__.fieldObject)(fieldTitleInput.value)\r\n}\n\n//# sourceURL=webpack://todo-list/./src/fieldInfoAdder.js?");

/***/ }),

/***/ "./src/fieldObjectCreator.js":
/*!***********************************!*\
  !*** ./src/fieldObjectCreator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fieldObject\": () => (/* binding */ fieldObject)\n/* harmony export */ });\nconst fieldObject = (name)=>{\r\n    let field ={\r\n        name: name,\r\n        active: false,\r\n        id: Date.now().toString(),\r\n    }\r\n    return Object.assign(\r\n        {},\r\n        field,\r\n    )\r\n}\n\n//# sourceURL=webpack://todo-list/./src/fieldObjectCreator.js?");

/***/ }),

/***/ "./src/getLocalStorageItem.js":
/*!************************************!*\
  !*** ./src/getLocalStorageItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorageItem\": () => (/* binding */ getLocalStorageItem)\n/* harmony export */ });\nconst getLocalStorageItem = (array) =>{\r\n  let fields = localStorage.getItem('fields')\r\n  array = JSON.parse(fields)\r\n  if(!array){\r\n    array = []\r\n  }else{\r\n    return array\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/getLocalStorageItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _fieldInfoAdder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fieldInfoAdder */ \"./src/fieldInfoAdder.js\");\n/* harmony import */ var _addFieldToList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addFieldToList */ \"./src/addFieldToList.js\");\n/* harmony import */ var _fieldDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fieldDOM */ \"./src/fieldDOM.js\");\n/* harmony import */ var _toggleFieldActiveStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggleFieldActiveStatus */ \"./src/toggleFieldActiveStatus.js\");\n/* harmony import */ var _addFieldFromArrayToLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addFieldFromArrayToLocalStorage */ \"./src/addFieldFromArrayToLocalStorage.js\");\n/* harmony import */ var _getLocalStorageItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getLocalStorageItem */ \"./src/getLocalStorageItem.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(function(){\r\n    //localStorage.clear()\r\n    const addFielBtn = document.getElementById('addField')\r\n    const fieldPopUp = document.getElementById('fieldPopUp')\r\n    const addFieldPopUpBtn = document.getElementById('addFieldDialogBtn')\r\n    const fieldTitleInput = document.getElementById('fieldTitle')\r\n    let fieldList = []\r\n\r\n    addFielBtn.addEventListener('click',()=>{\r\n       fieldTitleInput.value=\"\"\r\n       fieldPopUp.showModal()\r\n    })\r\n    addFieldPopUpBtn.addEventListener('click', ()=>{\r\n        fieldPopUp.close()\r\n       //coje obj field y añade info al clickar \r\n       ;(0,_fieldInfoAdder__WEBPACK_IMPORTED_MODULE_1__.fieldIndoAdder)() \r\n\r\n        //añade a array \r\n        ;(0,_addFieldToList__WEBPACK_IMPORTED_MODULE_2__.addFieldToList)(fieldList, (0,_fieldInfoAdder__WEBPACK_IMPORTED_MODULE_1__.fieldIndoAdder)()) \r\n\r\n         //coje el fieldContainer html y cada vez que se clicka añade a un active class\r\n         // ademas compara el id del elemento clickado con el objeto que tenga ese id en el array para cambiar active a true\r\n        ;(0,_toggleFieldActiveStatus__WEBPACK_IMPORTED_MODULE_4__.toggleFieldActiveStatus)(fieldList)\r\n\r\n        //añade desde field a localStorage\r\n        ;(0,_addFieldFromArrayToLocalStorage__WEBPACK_IMPORTED_MODULE_5__.addFieldFromArrayToLocalStorage)(fieldList)\r\n\r\n        //desde array cojer info y pasarla al DOM\r\n        ;(0,_getLocalStorageItem__WEBPACK_IMPORTED_MODULE_6__.getLocalStorageItem)(fieldList)\r\n\r\n        ;(0,_fieldDOM__WEBPACK_IMPORTED_MODULE_3__.fieldDOMRenderer)((0,_getLocalStorageItem__WEBPACK_IMPORTED_MODULE_6__.getLocalStorageItem)(fieldList))\r\n    })\r\n    \r\n  \r\n})();\r\n\r\n\r\n/** ESTO PARA TODOS\r\n *   const addTodoBtn = document.getElementById('addTodo')\r\n    const todoPopUp = document.getElementById('todoPopUp')\r\n    const addTodoPopUpBtn = document.getElementById('addTodoDialogBtn')\r\n    const todoTitleInput = document.getElementById('todoTitle')\r\n\r\n    addTodoBtn.addEventListener('click', ()=>{\r\n        todoTitleInput.value= ''\r\n        todoPopUp.showModal()\r\n    })\r\n    addTodoPopUpBtn.addEventListener('click', ()=>{\r\n        todoPopUp.close() \r\n             \r\n    })  \r\n * \r\n * \r\n */\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/toggleFieldActiveStatus.js":
/*!****************************************!*\
  !*** ./src/toggleFieldActiveStatus.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleFieldActiveStatus\": () => (/* binding */ toggleFieldActiveStatus)\n/* harmony export */ });\nconst toggleFieldActiveStatus = (array)=>{\r\n    const fieldContainer = document.querySelectorAll('#fieldContainer>*')\r\n    for(let field of fieldContainer){\r\n        field.onclick = function(){\r\n            for(let field of fieldContainer){\r\n                field.classList.remove('active')\r\n            }\r\n           array.forEach(object =>{ \r\n            object.active = false\r\n            if(object.id === this.getAttribute('id')){\r\n                this.classList.add('active')\r\n                object.active = true\r\n            }\r\n        })\r\n        return array\r\n        }\r\n    }\r\n   \r\n}\n\n//# sourceURL=webpack://todo-list/./src/toggleFieldActiveStatus.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;