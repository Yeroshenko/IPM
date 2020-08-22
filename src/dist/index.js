"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.sass");
var App_1 = require("./App");
var serviceWorker = require("./serviceWorker");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(App_1.App, null)), document.getElementById('root'));
serviceWorker.register();
