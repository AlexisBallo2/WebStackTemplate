/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/styles/Home.module.scss":
/*!*************************************!*\
  !*** ./src/styles/Home.module.scss ***!
  \*************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmd1YWdlLXRhYmxlcy8uL3NyYy9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcz80ZTE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/Home.module.scss\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ \"react-select\");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction Home() {\n    const { 0: currentName , 1: setCurrentName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: recievedName , 1: setRecievedName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const saveUserName = async ()=>{\n        const response = await fetch(\"/api/saveValue\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                bodyData: {\n                    currentName\n                }\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n        return data;\n    };\n    const getUserName = async ()=>{\n        const response = await fetch(\"/api/getValue\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                value: {\n                    currentName\n                }\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n        setRecievedName(data);\n        return data;\n    };\n    function handleInputChange(e) {\n        setCurrentName(e.target.value);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            \"DEMO\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/desktop/Coding/template/src/pages/index.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>saveUserName()\n                ,\n                children: \" Set name\"\n            }, void 0, false, {\n                fileName: \"/Users/desktop/Coding/template/src/pages/index.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/desktop/Coding/template/src/pages/index.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>getUserName()\n                ,\n                children: \" Get name\"\n            }, void 0, false, {\n                fileName: \"/Users/desktop/Coding/template/src/pages/index.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            recievedName != undefined ? recievedName.map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \" \",\n                        value.exampleColumn,\n                        \" \"\n                    ]\n                }, value.id, true, {\n                    fileName: \"/Users/desktop/Coding/template/src/pages/index.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 64\n                }, this)\n            ) : \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/desktop/Coding/template/src/pages/index.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDRztBQUN6QjtBQUNLO0FBQ2M7U0FHdENRLElBQUksR0FBRyxDQUFDO0lBRWYsS0FBSyxNQUFFQyxXQUFXLE1BQUVDLGNBQWMsTUFBSVQsK0NBQVE7SUFDOUMsS0FBSyxNQUFFVSxZQUFZLE1BQUVDLGVBQWUsTUFBSVgsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFbkQsS0FBSyxDQUFDWSxZQUFZLGFBQWUsQ0FBQztRQUNoQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFnQixpQkFBRSxDQUFDO1lBQzlDQyxNQUFNLEVBQUUsQ0FBTTtZQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7Z0JBQ3BCQyxRQUFRLEVBQUUsQ0FBQ1g7b0JBQUFBLFdBQVc7Z0JBQUEsQ0FBQztZQUN6QixDQUFDO1lBQ0RZLE9BQU8sRUFBRSxDQUFDO2dCQUNSLENBQWMsZUFBRSxDQUFrQjtZQUNwQyxDQUFDO1FBQ0gsQ0FBQztRQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1IsUUFBUSxDQUFDUyxJQUFJO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSTtRQUNoQixNQUFNLENBQUNBLElBQUk7SUFFYixDQUFDO0lBR0QsS0FBSyxDQUFDSSxXQUFXLGFBQWUsQ0FBQztRQUMvQixLQUFLLENBQUNaLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFlLGdCQUFFLENBQUM7WUFDN0NDLE1BQU0sRUFBRSxDQUFNO1lBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztnQkFDcEJRLEtBQUssRUFBRSxDQUFDbEI7b0JBQUFBLFdBQVc7Z0JBQUEsQ0FBQztZQUN0QixDQUFDO1lBQ0RZLE9BQU8sRUFBRSxDQUFDO2dCQUNSLENBQWMsZUFBRSxDQUFrQjtZQUNwQyxDQUFDO1FBQ0gsQ0FBQztRQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1IsUUFBUSxDQUFDUyxJQUFJO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSTtRQUNoQlYsZUFBZSxDQUFDVSxJQUFJO1FBQ3BCLE1BQU0sQ0FBQ0EsSUFBSTtJQUViLENBQUM7YUFFUU0saUJBQWlCLENBQUNDLENBQUMsRUFBRSxDQUFDO1FBQzdCbkIsY0FBYyxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7SUFDL0IsQ0FBQztJQUdELE1BQU0sNkVBQ0hJLENBQUc7UUFBQ0MsU0FBUyxFQUFFekIsMkVBQWdCOztZQUFFLENBRWhDO3dGQUFDMkIsQ0FBSztnQkFBQ0MsUUFBUSxFQUFFUCxpQkFBaUI7Ozs7Ozt3RkFFakNRLENBQU07Z0JBQUNDLE9BQU8sTUFBUXhCLFlBQVk7OzBCQUFJLENBQVM7Ozs7Ozt3RkFDL0N5QixDQUFFOzs7Ozt3RkFDRkYsQ0FBTTtnQkFBQ0MsT0FBTyxNQUFRWCxXQUFXOzswQkFBSSxDQUFTOzs7Ozs7WUFDOUNmLFlBQVksSUFBSTRCLFNBQVMsR0FBRzVCLFlBQVksQ0FBQzZCLEdBQUcsRUFBRWIsS0FBSywrRUFBTUksQ0FBRzs7d0JBQWtCLENBQUM7d0JBQUNKLEtBQUssQ0FBQ2MsYUFBYTt3QkFBQyxDQUFDOzttQkFBakNkLEtBQUssQ0FBQ2UsRUFBRTs7Ozs7Z0JBQW1DLENBQUc7Ozs7Ozs7QUFHekgsQ0FBQztBQUVELGlFQUFlbEMsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ3VhZ2UtdGFibGVzLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2N1cnJlbnROYW1lLCBzZXRDdXJyZW50TmFtZV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtyZWNpZXZlZE5hbWUsIHNldFJlY2lldmVkTmFtZV0gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCBzYXZlVXNlck5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc2F2ZVZhbHVlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGJvZHlEYXRhOiB7Y3VycmVudE5hbWV9LFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gZGF0YTtcblxuICB9O1xuXG5cbiAgY29uc3QgZ2V0VXNlck5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2V0VmFsdWVcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmFsdWU6IHtjdXJyZW50TmFtZX1cbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgc2V0UmVjaWV2ZWROYW1lKGRhdGEpXG4gICAgcmV0dXJuIGRhdGE7XG5cbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgc2V0Q3VycmVudE5hbWUoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgREVNT1xuICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+XG4gICAgICA8L2lucHV0PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzYXZlVXNlck5hbWUoKX0+IFNldCBuYW1lPC9idXR0b24+XG4gICAgICA8YnIvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXRVc2VyTmFtZSgpfT4gR2V0IG5hbWU8L2J1dHRvbj5cbiAgICAgIHtyZWNpZXZlZE5hbWUgIT0gdW5kZWZpbmVkID8gcmVjaWV2ZWROYW1lLm1hcCgodmFsdWUpID0+IDxkaXYga2V5ID0ge3ZhbHVlLmlkfT4ge3ZhbHVlLmV4YW1wbGVDb2x1bW59IDwvZGl2PikgOiBcIiBcIn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRm9ybSIsIkNvbnRyb2xsZXIiLCJIZWFkIiwiU2VsZWN0Iiwic3R5bGVzIiwiSG9tZSIsImN1cnJlbnROYW1lIiwic2V0Q3VycmVudE5hbWUiLCJyZWNpZXZlZE5hbWUiLCJzZXRSZWNpZXZlZE5hbWUiLCJzYXZlVXNlck5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5RGF0YSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyTmFtZSIsInZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW5wdXQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciIsInVuZGVmaW5lZCIsIm1hcCIsImV4YW1wbGVDb2x1bW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-select");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();