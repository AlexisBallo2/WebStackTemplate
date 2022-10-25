"use strict";
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
exports.id = "pages/api/getValue";
exports.ids = ["pages/api/getValue"];
exports.modules = {

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ "(api)/./knexfile.js":
/*!*********************!*\
  !*** ./knexfile.js ***!
  \*********************/
/***/ ((module) => {

eval("\n// Update with your config settings.\n/**\n * @type { Object.<string, import(\"knex\").Knex.Config> }\n */ module.exports = {\n    development: {\n        client: \"sqlite3\",\n        connection: {\n            filename: \"./dev.sqlite3\",\n            useNullAsDefault: true\n        }\n    },\n    staging: {\n        client: \"postgresql\",\n        connection: {\n            database: \"my_db\",\n            user: \"username\",\n            password: \"password\"\n        },\n        pool: {\n            min: 2,\n            max: 10\n        },\n        migrations: {\n            tableName: \"knex_migrations\"\n        }\n    },\n    production: {\n        client: \"postgresql\",\n        connection: {\n            database: \"my_db\",\n            user: \"username\",\n            password: \"password\"\n        },\n        pool: {\n            min: 2,\n            max: 10\n        },\n        migrations: {\n            tableName: \"knex_migrations\"\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9rbmV4ZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsRUFBb0M7QUFFcEMsRUFFRzs7Q0FBQSxHQUNIQSxNQUFNLENBQUNDLE9BQU8sR0FBRyxDQUFDO0lBQ2hCQyxXQUFXLEVBQUUsQ0FBQztRQUNaQyxNQUFNLEVBQUUsQ0FBUztRQUNqQkMsVUFBVSxFQUFFLENBQUM7WUFDWEMsUUFBUSxFQUFFLENBQWU7WUFDekJDLGdCQUFnQixFQUFFLElBQUk7UUFDeEIsQ0FBQztJQUNILENBQUM7SUFFREMsT0FBTyxFQUFFLENBQUM7UUFDUkosTUFBTSxFQUFFLENBQVk7UUFDcEJDLFVBQVUsRUFBRSxDQUFDO1lBQ1hJLFFBQVEsRUFBRSxDQUFPO1lBQ2pCQyxJQUFJLEVBQUUsQ0FBVTtZQUNoQkMsUUFBUSxFQUFFLENBQVU7UUFDdEIsQ0FBQztRQUNEQyxJQUFJLEVBQUUsQ0FBQztZQUNMQyxHQUFHLEVBQUUsQ0FBQztZQUNOQyxHQUFHLEVBQUUsRUFBRTtRQUNULENBQUM7UUFDREMsVUFBVSxFQUFFLENBQUM7WUFDWEMsU0FBUyxFQUFFLENBQWlCO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRURDLFVBQVUsRUFBRSxDQUFDO1FBQ1hiLE1BQU0sRUFBRSxDQUFZO1FBQ3BCQyxVQUFVLEVBQUUsQ0FBQztZQUNYSSxRQUFRLEVBQUUsQ0FBTztZQUNqQkMsSUFBSSxFQUFFLENBQVU7WUFDaEJDLFFBQVEsRUFBRSxDQUFVO1FBQ3RCLENBQUM7UUFDREMsSUFBSSxFQUFFLENBQUM7WUFDTEMsR0FBRyxFQUFFLENBQUM7WUFDTkMsR0FBRyxFQUFFLEVBQUU7UUFDVCxDQUFDO1FBQ0RDLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLFNBQVMsRUFBRSxDQUFpQjtRQUM5QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5ndWFnZS10YWJsZXMvLi9rbmV4ZmlsZS5qcz8yMzMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFVwZGF0ZSB3aXRoIHlvdXIgY29uZmlnIHNldHRpbmdzLlxuXG4vKipcbiAqIEB0eXBlIHsgT2JqZWN0LjxzdHJpbmcsIGltcG9ydChcImtuZXhcIikuS25leC5Db25maWc+IH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRldmVsb3BtZW50OiB7XG4gICAgY2xpZW50OiBcInNxbGl0ZTNcIixcbiAgICBjb25uZWN0aW9uOiB7XG4gICAgICBmaWxlbmFtZTogXCIuL2Rldi5zcWxpdGUzXCIsXG4gICAgICB1c2VOdWxsQXNEZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgc3RhZ2luZzoge1xuICAgIGNsaWVudDogXCJwb3N0Z3Jlc3FsXCIsXG4gICAgY29ubmVjdGlvbjoge1xuICAgICAgZGF0YWJhc2U6IFwibXlfZGJcIixcbiAgICAgIHVzZXI6IFwidXNlcm5hbWVcIixcbiAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXG4gICAgfSxcbiAgICBwb29sOiB7XG4gICAgICBtaW46IDIsXG4gICAgICBtYXg6IDEwLFxuICAgIH0sXG4gICAgbWlncmF0aW9uczoge1xuICAgICAgdGFibGVOYW1lOiBcImtuZXhfbWlncmF0aW9uc1wiLFxuICAgIH0sXG4gIH0sXG5cbiAgcHJvZHVjdGlvbjoge1xuICAgIGNsaWVudDogXCJwb3N0Z3Jlc3FsXCIsXG4gICAgY29ubmVjdGlvbjoge1xuICAgICAgZGF0YWJhc2U6IFwibXlfZGJcIixcbiAgICAgIHVzZXI6IFwidXNlcm5hbWVcIixcbiAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXG4gICAgfSxcbiAgICBwb29sOiB7XG4gICAgICBtaW46IDIsXG4gICAgICBtYXg6IDEwLFxuICAgIH0sXG4gICAgbWlncmF0aW9uczoge1xuICAgICAgdGFibGVOYW1lOiBcImtuZXhfbWlncmF0aW9uc1wiLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJkZXZlbG9wbWVudCIsImNsaWVudCIsImNvbm5lY3Rpb24iLCJmaWxlbmFtZSIsInVzZU51bGxBc0RlZmF1bHQiLCJzdGFnaW5nIiwiZGF0YWJhc2UiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb29sIiwibWluIiwibWF4IiwibWlncmF0aW9ucyIsInRhYmxlTmFtZSIsInByb2R1Y3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./knexfile.js\n");

/***/ }),

/***/ "(api)/./src/lib/backend/database-utils.js":
/*!*******************************************!*\
  !*** ./src/lib/backend/database-utils.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveFunction\": () => (/* binding */ saveFunction),\n/* harmony export */   \"getFunction\": () => (/* binding */ getFunction)\n/* harmony export */ });\n/* harmony import */ var _knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knex */ \"(api)/./src/lib/backend/knex.js\");\n/**\n * Backend databse utililty functions\n */ \nasync function saveFunction(param1) {\n    console.log(\"in save function\", param1);\n    const review = await (0,_knex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"demoTable\").insert({\n        exampleColumn: param1\n    });\n    return {\n        data: review\n    };\n}\nasync function getFunction(param1) {\n    const review = await (0,_knex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"demoTable\");\n    return review;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2JhY2tlbmQvZGF0YWJhc2UtdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFFRzs7Q0FBQSxHQUVzQjtBQUdsQixlQUFlQyxZQUFZLENBQUNDLE1BQU0sRUFBRSxDQUFDO0lBQzFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFrQixtQkFBRUYsTUFBTTtJQUN0QyxLQUFLLENBQUNHLE1BQU0sR0FBRyxLQUFLLENBQUNMLGlEQUFJLENBQUMsQ0FBVyxZQUFFTSxNQUFNLENBQUMsQ0FBQztRQUM3Q0MsYUFBYSxFQUFFTCxNQUFNO0lBQ3ZCLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQ007UUFBQUEsSUFBSSxFQUFFSCxNQUFNO0lBQUEsQ0FBQztBQUN2QixDQUFDO0FBRU0sZUFBZUksV0FBVyxDQUFDUCxNQUFNLEVBQUUsQ0FBQztJQUN6QyxLQUFLLENBQUNHLE1BQU0sR0FBRyxLQUFLLENBQUNMLGlEQUFJLENBQUMsQ0FBVztJQUNyQyxNQUFNLENBQUNLLE1BQU07QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ3VhZ2UtdGFibGVzLy4vc3JjL2xpYi9iYWNrZW5kL2RhdGFiYXNlLXV0aWxzLmpzP2IyODAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCYWNrZW5kIGRhdGFic2UgdXRpbGlsdHkgZnVuY3Rpb25zXG4gKi9cblxuaW1wb3J0IGtuZXggZnJvbSBcIi4va25leFwiO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlRnVuY3Rpb24ocGFyYW0xKSB7XG4gIGNvbnNvbGUubG9nKFwiaW4gc2F2ZSBmdW5jdGlvblwiLCBwYXJhbTEpXG4gIGNvbnN0IHJldmlldyA9IGF3YWl0IGtuZXgoXCJkZW1vVGFibGVcIikuaW5zZXJ0KHtcbiAgICBleGFtcGxlQ29sdW1uOiBwYXJhbTEsXG4gIH0pO1xuICByZXR1cm4ge2RhdGE6IHJldmlld307XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGdW5jdGlvbihwYXJhbTEpIHtcbiAgY29uc3QgcmV2aWV3ID0gYXdhaXQga25leChcImRlbW9UYWJsZVwiKVxuICByZXR1cm4gcmV2aWV3O1xufVxuIl0sIm5hbWVzIjpbImtuZXgiLCJzYXZlRnVuY3Rpb24iLCJwYXJhbTEiLCJjb25zb2xlIiwibG9nIiwicmV2aWV3IiwiaW5zZXJ0IiwiZXhhbXBsZUNvbHVtbiIsImRhdGEiLCJnZXRGdW5jdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/backend/database-utils.js\n");

/***/ }),

/***/ "(api)/./src/lib/backend/knex.js":
/*!*********************************!*\
  !*** ./src/lib/backend/knex.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _knexfile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../knexfile.js */ \"(api)/./knexfile.js\");\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knex */ \"knex\");\n\n\nconst knex = knex__WEBPACK_IMPORTED_MODULE_1__(_knexfile_js__WEBPACK_IMPORTED_MODULE_0__[\"development\" || 0]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knex);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2JhY2tlbmQva25leC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDWDtBQUVsQyxLQUFLLENBQUNFLElBQUksR0FBR0QsaUNBQWUsQ0FDMUJELHlDQUFVLENBSlosQ0FBYSxnQkFJd0IsQ0FBYTtBQUdsRCxpRUFBZUUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ3VhZ2UtdGFibGVzLy4vc3JjL2xpYi9iYWNrZW5kL2tuZXguanM/ZjY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga25leENvbmZpZyBmcm9tIFwiLi4vLi4vLi4va25leGZpbGUuanNcIjtcbmltcG9ydCBrbmV4SW5pdGlhbGl6ZXIgZnJvbSBcImtuZXhcIjtcblxuY29uc3Qga25leCA9IGtuZXhJbml0aWFsaXplcihcbiAga25leENvbmZpZ1twcm9jZXNzLmVudi5OT0RFX0VOViB8fCBcImRldmVsb3BtZW50XCJdXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBrbmV4OyJdLCJuYW1lcyI6WyJrbmV4Q29uZmlnIiwia25leEluaXRpYWxpemVyIiwia25leCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/backend/knex.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/getValue.js":
/*!***********************************!*\
  !*** ./src/pages/api/getValue.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_backend_database_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/backend/database-utils */ \"(api)/./src/lib/backend/database-utils.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst handler = async (req, res)=>{\n    try {\n        const data = await (0,_lib_backend_database_utils__WEBPACK_IMPORTED_MODULE_0__.getFunction)();\n        console.log(data);\n        res.status(200).end(JSON.stringify(data));\n    } catch (e) {\n        console.log(e);\n        res.status(500).end(\"Something went wrong\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldFZhbHVlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsRUFBNkU7QUFDZjtBQUU5RCxLQUFLLENBQUNDLE9BQU8sVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNuQyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0osd0VBQVc7UUFDOUJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJO1FBQ2hCRCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNOLElBQUk7SUFDekMsQ0FBQyxDQUFDLEtBQUssRUFBRU8sQ0FBQyxFQUFFLENBQUM7UUFDWE4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLENBQUM7UUFDYlIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBc0I7SUFDNUMsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVAsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ3VhZ2UtdGFibGVzLy4vc3JjL3BhZ2VzL2FwaS9nZXRWYWx1ZS5qcz8xYWVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgeyBnZXRGdW5jdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvYmFja2VuZC9kYXRhYmFzZS11dGlsc1wiO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEZ1bmN0aW9uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmVuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuZW5kKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiZ2V0RnVuY3Rpb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/getValue.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/getValue.js"));
module.exports = __webpack_exports__;

})();