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
var EmployeesItem_1 = __importDefault(require("./EmployeesItem"));
var EmployeesTotalSalary_1 = __importDefault(require("./EmployeesTotalSalary"));
var EmployeeForm_1 = __importDefault(require("./EmployeeForm"));
var appStore_1 = __importDefault(require("../stores/appStore"));
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var EmployeesList = function () {
    var employees = appStore_1["default"].employees;
    return (React.createElement("ul", { className: "employees__list" },
        React.createElement("div", { className: "employees__list-content" },
            React.createElement("div", { className: "employees__list-header employees__list-row" },
                React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, "\u2116"),
                React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, "\u0424\u0418\u041E"),
                React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, "Email"),
                React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),
                React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"),
                React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E"),
                React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, "\u0414\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430"),
                React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, "\u041E\u043A\u043B\u0430\u0434")),
            employees.map(function (item, index) {
                return React.createElement(EmployeesItem_1["default"], { key: item.getId(), employee: item, index: index + 1 });
            })),
        React.createElement("div", { className: "employees__list-footer" },
            React.createElement(EmployeeForm_1["default"], { handleSubmit: appStore_1["default"].addEmployee }),
            React.createElement(EmployeesTotalSalary_1["default"], null))));
};
exports["default"] = (0, mobx_react_lite_1.observer)(EmployeesList);
//# sourceMappingURL=EmployeesList.js.map