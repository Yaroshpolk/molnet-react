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
var react_1 = require("react");
var appStore_1 = __importDefault(require("../stores/appStore"));
var EmployeesTotalSalary = function () {
    var _a = (0, react_1.useState)(0), totalSalary = _a[0], setTotalSalary = _a[1];
    var employees = appStore_1["default"].employees;
    var countSalary = function (employees) {
        var res = 0;
        employees.forEach(function (item) { return res += item.getDays() * item.getDaySalary(); });
        setTotalSalary(res);
    };
    (0, react_1.useEffect)(function () {
        countSalary(employees);
    }, [employees]);
    return (React.createElement("div", { className: "employees__list-total" },
        React.createElement("p", { className: "employees__list-field" }, "\u0421\u0443\u043C\u043C\u0430\u0440\u043D\u044B\u0439 \u043E\u043A\u043B\u0430\u0434"),
        React.createElement("p", { className: "employees__list-field" },
            totalSalary,
            "\u0440\u0443\u0431.")));
};
exports["default"] = EmployeesTotalSalary;
//# sourceMappingURL=EmployeesTotalSalary.js.map