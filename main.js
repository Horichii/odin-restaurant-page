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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Quicksand-VariableFont_wght.woff2 */ \"./src/fonts/Quicksand-VariableFont_wght.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'Quicksand';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'); \n    font-weight: 300 700;\n    font-style: normal;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --font-main: 'Quicksand', sans-serif;\n    --primary: #724c18;\n\n}\n\n#content {\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    height: 12vh;\n    position: relative;\n}\n\n#display-area {\n    position: relative;\n    width: 100%;\n}\n\nbody {\n    font-family: var(--font-main);\n}\n\n.nav-btn {\n    cursor: pointer;\n    font: var(--font-main);\n    background: transparent;\n    border: none;\n    font-weight: 700;\n    font-size: 1.2rem;\n    padding: 0px 30px;\n    color: #323232;\n}\n.nav-btn:hover {\n    color: var(--primary);\n}\n\n\n#nav {\n    display: flex;\n    /* gap: 10px; */\n}\n\n#headline {\n    margin-left: 40px;\n    font-size: 4.5rem;\n    color: #704e1f;\n}\n\n.background-body {\n    position: fixed; \n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    object-fit: cover;\n    z-index: -1; \n}\n\n.hero-title {\n    position: relative;\n    left: 60px;\n    font-size: 3.75rem;\n    font-weight: 700;\n    line-height: 1.1;\n    color: #323232;\n    top: 150px;\n}\n\n.accent {\n    color: #7A5C33; \n    /* background: linear-gradient(to right, #323232, #AD8B58); */\n    -webkit-background-clip: text;\n    background-clip: text;\n    /* -webkit-text-fill-color: transparent;\n    color: transparent; */\n}\n\n\n\n\n/* menu.js */\n#menu-container {\n    position: relative;\n    top: 80px;\n    margin: 0 auto;\n    width: 80%;\n    max-width: 800px;\n    background-color: #f5f5f5; \n    border-radius: 30px;\n    overflow: hidden; \n    display: flex;\n    flex-direction: column;\n}\n\n.menu-item {\n    display: flex;\n    border-bottom: 1px solid #ddd;\n    min-height: 150px;\n}\n\n.item-left-panel {\n    background-color: #4b5a52af; \n    width: 150px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n}\n\n.item-icon-placeholder {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.item-right-content {\n    flex-grow: 1;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.item-header {\n    display: flex;\n    justify-content: space-between; \n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.item-name {\n    font-size: 1.8rem;\n    color: #323232;\n    font-weight: 700;\n}\n\n.item-price {\n    font-size: 1.5rem;\n    color: #323232;\n    font-weight: 700;\n}\n\n.item-description {\n    color: #666;\n    line-height: 1.5;\n    font-size: 1.1rem;\n}\n\n\n/* about.js */\n#about-container {\n    position: relative;\n    top: 50px;\n    margin: 0 auto 50px auto;\n    width: 85%;\n    max-width: 800px;\n    background-color: #f5f5f5c7;\n    border-radius: 40px;\n    padding: 60px;\n    display: flex; \n    flex-direction: column;\n    align-items: center; \n    box-shadow: 0 15px 40px rgba(0,0,0,0.1);\n}\n\n.about-title {\n    font-size: 2.5rem;\n    color: #323232;\n    margin-bottom: 30px;\n    font-weight: 700;\n}\n\n.about-text {\n    font-size: 1.1rem;\n    line-height: 1.8;\n    color: #555;\n    margin-bottom: 25px;\n    text-align: center;\n    max-width: 90%; \n}\n\n.about-image-wrapper {\n    margin-top: 20px;\n    width: 100%;\n    border-radius: 30px;\n    overflow: hidden;\n}\n\n.story-image {\n    width: 100%;\n    display: block;\n    object-fit: cover;\n}\n\n\n/* contact.js */\n#contact-container {\n    position: relative;\n    top: 80px;\n    margin: 0 auto;\n    width: 60%; \n    max-width: 600px;\n    background-color: #f5f5f5c9;\n    border-radius: 40px;\n    padding: 60px;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    align-items: center; \n    gap: 30px;\n    box-shadow: 0 15px 40px rgba(0,0,0,0.1);\n}\n\n.contact-title {\n    font-size: 2.5rem;\n    color: #323232;\n    font-weight: 700;\n}\n\n.contact-info-block {\n    text-align: center;\n    /* border: 1px solid red; */\n}\n\n.contact-label {\n    display: block;\n    font-size: 1rem;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-weight: bold;\n    color: #a15f03;\n    margin-bottom: 5px;\n}\n\n.contact-detail {\n    font-size: 1.3rem;\n    color: #323232;\n    font-weight: 500;\n}\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _img_bg_without_cup_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/bg-without-cup.png */ \"./src/img/bg-without-cup.png\");\n/* harmony import */ var _img_about_pic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/about-pic.png */ \"./src/img/about-pic.png\");\n\n \n\nfunction loadAbout() {\n    const displayArea = document.querySelector(\"#display-area\");\n    displayArea.textContent = \"\";\n\n    const bgNoCup = document.createElement(\"img\");\n    bgNoCup.src = _img_bg_without_cup_png__WEBPACK_IMPORTED_MODULE_0__;\n    bgNoCup.classList.add(\"background-body\"); \n    \n    const aboutContainer = document.createElement(\"div\");\n    aboutContainer.id = \"about-container\";\n\n    const aboutTitle = document.createElement(\"h2\");\n    aboutTitle.classList.add(\"about-title\");\n    aboutTitle.textContent = \"Our Story\";\n\n    const createPara = (text) => {\n        const p = document.createElement(\"p\");\n        p.classList.add(\"about-text\");\n        p.textContent = text;\n        return p;\n    };\n\n    const p1 = createPara(\"What started as shared hobby small talk, the team at brew. quickly grew obsessed perfecting the various ways we brewed coffee and decided to go all in.\");\n    const p2 = createPara(\"With more than 200 shops across the country as of 2026, we’re constantly working hard and innovating to bring the next chapter of brew. to all coffee lovers.\");\n    const p3 = createPara(\"Using always fresh, 100% organic ingredients sourced from sustainable vendors, we stand behind our coffee, our ingredients and our technique — that’s brew.\");\n\n    const imgWrapper = document.createElement(\"div\");\n    imgWrapper.classList.add(\"about-image-wrapper\");\n\n    const storyImage = document.createElement(\"img\");\n    storyImage.src = _img_about_pic_png__WEBPACK_IMPORTED_MODULE_1__;\n    storyImage.classList.add(\"story-image\");\n    \n    imgWrapper.append(storyImage);\n\n    aboutContainer.append(aboutTitle, p1, p2, p3, imgWrapper);\n\n    displayArea.append(bgNoCup, aboutContainer);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _img_bg_without_cup_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/bg-without-cup.png */ \"./src/img/bg-without-cup.png\");\n\n\nfunction loadContact() {\n\n    const displayArea = document.querySelector(\"#display-area\");\n    displayArea.textContent = \"\";\n\n    const bgNoCup = document.createElement(\"img\");\n    bgNoCup.src = _img_bg_without_cup_png__WEBPACK_IMPORTED_MODULE_0__;\n    bgNoCup.classList.add(\"background-body\"); \n\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.id = \"contact-container\";\n\n    const contactTitle = document.createElement(\"h2\");\n    contactTitle.classList.add(\"contact-title\");\n    contactTitle.textContent = \"Get in Touch\";\n\n    const createInfo = (label, detail) => {\n        const wrapper = document.createElement(\"div\");\n        wrapper.classList.add(\"contact-info-block\");\n\n        const spanLabel = document.createElement(\"span\");\n        spanLabel.classList.add(\"contact-label\");\n        spanLabel.textContent = label;\n\n        const pDetail = document.createElement(\"p\");\n        pDetail.classList.add(\"contact-detail\");\n        pDetail.textContent = detail;\n\n        wrapper.append(spanLabel, pDetail);\n        return wrapper;\n    };\n\n    const location = createInfo(\"Location\", \"123 Coffee St., Brewtown, BT 2026\");\n    const phone = createInfo(\"Phone\", \"+63 9XX XXX XXXX\");\n    const email = createInfo(\"Email\", \"brewCoffee@brew.com\");\n    const hours = createInfo(\"Hours\", \"Mon - Sun: 9:00 AM - 10:00 PM\");\n\n    contactContainer.append(contactTitle, location, phone, email, hours);\n\n    displayArea.append(bgNoCup, contactContainer);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/header.js"
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createNavBtn(text) {\n    const btn = document.createElement(\"button\");\n    btn.classList.add(\"nav-btn\");\n    btn.textContent = text;\n    return btn;\n}\n\nfunction createHeader() {\n    const content = document.createElement(\"div\");\n    content.id = \"content\";\n\n    const headline = document.createElement(\"h1\");\n    headline.id = \"headline\";   \n    headline.textContent = \"brew.\";\n\n    const nav = document.createElement(\"nav\");\n    nav.id = \"nav\";\n\n    const homeBtn = createNavBtn(\"HOME\");\n    const aboutBtn = createNavBtn(\"ABOUT\");\n    const menuBtn = createNavBtn(\"MENU\");\n    const contactBtn = createNavBtn(\"CONTACT\");\n\n    nav.append(homeBtn, aboutBtn, menuBtn, contactBtn);\n    content.append(headline, nav);\n\n    return content;\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/header.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage.js */ \"./src/loadPage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n\nconst header = (0,_header_js__WEBPACK_IMPORTED_MODULE_4__.createHeader)();\n\nconst displayArea = document.createElement(\"div\");\ndisplayArea.id = \"display-area\";\n\ndocument.body.append(header, displayArea);\n\n(0,_loadPage_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n\ndocument.addEventListener('click', (e) => {\n    \n    if (e.target.matches('.nav-btn')) {\n        const pageName = e.target.textContent\n\n        if (pageName === \"HOME\") {\n            (0,_loadPage_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n        } else if (pageName === \"MENU\") {\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n        } else if (pageName === \"ABOUT\") {\n            (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.loadAbout)();\n        } else if (pageName === \"CONTACT\") {\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContact)();\n        }\n    }\n});\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/loadPage.js"
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _img_bg_with_cup_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/bg-with-cup.png */ \"./src/img/bg-with-cup.png\");\n\n\nfunction loadPage() {\n    const displayArea = document.querySelector(\"#display-area\");\n    displayArea.textContent = \"\";\n\n    const bgCup = document.createElement(\"img\");\n    bgCup.src = _img_bg_with_cup_png__WEBPACK_IMPORTED_MODULE_0__;\n    bgCup.classList.add(\"background-body\"); \n\n    const container = document.createElement(\"div\");\n    container.classList.add(\"container\");\n    \n    const hero = document.createElement(\"div\");\n    hero.classList.add(\"hero\");\n\n    //herotitle\n    const heroTitle = document.createElement(\"h2\");\n    heroTitle.classList.add(\"hero-title\");\n\n    const firstText = document.createTextNode(\"Brewed to perfection.\");\n\n    const br = document.createElement(\"br\");\n\n    const accentSpan = document.createElement(\"span\");\n    accentSpan.classList.add(\"accent\");\n    accentSpan.textContent = \"Every time.\";\n\n    heroTitle.append(firstText, br, accentSpan);\n    hero.append(heroTitle);\n\n    displayArea.append(bgCup, hero);\n}\n\n \n\n//# sourceURL=webpack://odin-restaurant-page/./src/loadPage.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _img_bg_without_cup_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/bg-without-cup.png */ \"./src/img/bg-without-cup.png\");\n/* harmony import */ var _img_mocha_icon_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/mocha-icon.jpg */ \"./src/img/mocha-icon.jpg\");\n/* harmony import */ var _img_latte_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/latte-icon.png */ \"./src/img/latte-icon.png\");\n/* harmony import */ var _img_espresso_icon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/espresso-icon.jpg */ \"./src/img/espresso-icon.jpg\");\n\n\n\n\n\nfunction loadMenu() {\n    const displayArea = document.querySelector(\"#display-area\");\n    displayArea.textContent = \"\";\n\n    const bgNoCup = document.createElement(\"img\");\n    bgNoCup.src = _img_bg_without_cup_png__WEBPACK_IMPORTED_MODULE_0__;\n    bgNoCup.classList.add(\"background-body\"); \n\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.id = \"menu-container\";\n\nconst createItem = (name, price, description, img) => {\n    const item = document.createElement(\"div\");\n    item.classList.add(\"menu-item\");\n\n    const leftPanel = document.createElement(\"div\");\n    leftPanel.classList.add(\"item-left-panel\");\n\n    const iconPlaceholder = document.createElement(\"div\");\n    iconPlaceholder.classList.add(\"item-icon-placeholder\");\n    iconPlaceholder.style.backgroundImage = `url(${img})`;\n\n    leftPanel.appendChild(iconPlaceholder);\n\n    const rightContent = document.createElement(\"div\");\n    rightContent.classList.add(\"item-right-content\");\n\n    const itemHeader = document.createElement(\"div\");\n    itemHeader.classList.add(\"item-header\");\n\n    const itemName = document.createElement(\"h3\");\n    itemName.classList.add(\"item-name\");\n    itemName.textContent = name;\n\n    const itemPrice = document.createElement(\"span\");\n    itemPrice.classList.add(\"item-price\");\n    itemPrice.textContent = price;\n\n    itemHeader.append(itemName, itemPrice);\n\n    const itemDesc = document.createElement(\"p\");\n    itemDesc.classList.add(\"item-description\");\n    itemDesc.textContent = description;\n\n    rightContent.append(itemHeader, itemDesc);\n\n    item.append(leftPanel, rightContent);\n\n    return item;\n};\n\n    const mocha = createItem(\"Mocha\", \"$9\", \"Brewed for cozy atmospheres, our hearty and rustic blend is reminiscent of a cabin fireplace.\", _img_mocha_icon_jpg__WEBPACK_IMPORTED_MODULE_1__);\n    const latte = createItem(\"Latte\", \"$8\", \"Crafted with precision using a balanced blend of coffee and milk, a feast for the senses.\", _img_latte_icon_png__WEBPACK_IMPORTED_MODULE_2__);\n    const espresso = createItem(\"Espresso\", \"$10\", \"Crafted with precision using a balanced blend of coffee and milk, a feast for the senses.\", _img_espresso_icon_jpg__WEBPACK_IMPORTED_MODULE_3__);\n\n    menuContainer.append(mocha, latte, espresso);\n    displayArea.append(bgNoCup, menuContainer);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?\n}");

/***/ },

/***/ "./src/fonts/Quicksand-VariableFont_wght.woff2"
/*!*****************************************************!*\
  !*** ./src/fonts/Quicksand-VariableFont_wght.woff2 ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"39f4fdfae04b95772ad6.woff2\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/fonts/Quicksand-VariableFont_wght.woff2?\n}");

/***/ },

/***/ "./src/img/about-pic.png"
/*!*******************************!*\
  !*** ./src/img/about-pic.png ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"522025668583f9e08512.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/about-pic.png?\n}");

/***/ },

/***/ "./src/img/bg-with-cup.png"
/*!*********************************!*\
  !*** ./src/img/bg-with-cup.png ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4464f77cc96174087965.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/bg-with-cup.png?\n}");

/***/ },

/***/ "./src/img/bg-without-cup.png"
/*!************************************!*\
  !*** ./src/img/bg-without-cup.png ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4fa3f25da5558db1d683.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/bg-without-cup.png?\n}");

/***/ },

/***/ "./src/img/espresso-icon.jpg"
/*!***********************************!*\
  !*** ./src/img/espresso-icon.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"52899129b57f5e2e7702.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/espresso-icon.jpg?\n}");

/***/ },

/***/ "./src/img/latte-icon.png"
/*!********************************!*\
  !*** ./src/img/latte-icon.png ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"de95e08e67e155ef80dd.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/latte-icon.png?\n}");

/***/ },

/***/ "./src/img/mocha-icon.jpg"
/*!********************************!*\
  !*** ./src/img/mocha-icon.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0d48d944e45387ae79a6.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/mocha-icon.jpg?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;