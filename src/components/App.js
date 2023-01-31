"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var Employees_1 = __importDefault(require("./Employees"));
var react_router_dom_1 = require("react-router-dom");
var Profile_1 = __importDefault(require("./Profile"));
var appStore_1 = __importDefault(require("../stores/appStore"));
var Employee_1 = __importDefault(require("../models/Employee"));
var App = function () {
    appStore_1["default"].setEmployees([
        new Employee_1["default"](1, 'Олег', 'Ганчаровский', 'Игоревич', '01.01.2000', '+7(919) 231-22-53', 'oleg@yandex.ru', 30, 3000),
        new Employee_1["default"](2, 'Виталий', 'Шепофалов', 'Алексеевич', '12.04.1993', '+7(919) 848-22-01', 'vitaliy@yandex.ru', 15, 1200),
        new Employee_1["default"](3, 'Алексей', 'Свинцов', 'Генадиевич', '02.12.1996', '+7(919) 916-26-17', 'alex@yandex.ru', 21, 2000),
        new Employee_1["default"](4, 'Николай', 'Меншиков', 'Генадиевич', '01.12.1995', '+7(919) 916-28-43', 'nik@yandex.ru', 30, 1000),
        new Employee_1["default"](5, 'Енакентий', 'Племянников', 'Стасов', '01.12.1998', '+7(919) 916-47-12', 'enakentiy@yandex.ru', 3, 3000),
    ]);
    return (React.createElement("div", { className: "app" },
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Employees_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/employee/:id", element: React.createElement(Profile_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(Employees_1["default"], null) }))));
};
exports["default"] = App;
//# sourceMappingURL=App.js.map