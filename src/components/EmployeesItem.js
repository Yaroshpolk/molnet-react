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
exports.__esModule = true;
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var EmployeesItem = function (_a) {
    var employee = _a.employee, index = _a.index;
    return (React.createElement("li", { className: "employees__item employees__list-row" },
        React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, index),
        React.createElement("p", { className: "employees__list-field" },
            React.createElement(react_router_dom_1.Link, { to: "/employee/" + employee.getId(), className: "link" }, employee.getSurname() + ' ' + employee.getName() + ' ' + employee.getPatronymic())),
        React.createElement("p", { className: "employees__list-field" }, employee.getEmail()),
        React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, employee.getPhone()),
        React.createElement("p", { className: "employees__list-field employees__list-field_centered" }, employee.getBirthday()),
        React.createElement("p", { className: "employees__list-field employees__list-field_centered" },
            employee.getDays(),
            "\u0434\u043D."),
        React.createElement("p", { className: "employees__list-field employees__list-field_centered" },
            employee.getDaySalary(),
            "\u0440\u0443\u0431."),
        React.createElement("p", { className: "employees__list-field employees__list-field_centered" },
            employee.getDaySalary() * employee.getDays(),
            "\u0440\u0443\u0431.")));
};
exports["default"] = EmployeesItem;
//# sourceMappingURL=EmployeesItem.js.map