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
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var React = __importStar(require("react"));
var EmployeeForm_1 = __importDefault(require("./EmployeeForm"));
var appStore_1 = __importDefault(require("../stores/appStore"));
var Employee_1 = __importDefault(require("../models/Employee"));
var Profile = function () {
    var userId = Number((0, react_router_dom_1.useParams)().id);
    var _a = (0, react_1.useState)(new Employee_1["default"](0, '', '', '', '', '', '', 0, 0)), employee = _a[0], setEmployee = _a[1];
    var _b = (0, react_1.useState)(false), isEditing = _b[0], setIsEditing = _b[1];
    (0, react_1.useEffect)(function () {
        if (appStore_1["default"].employees.length !== 0) {
            setEmployee(appStore_1["default"].getEmployeeById(userId));
        }
    }, [appStore_1["default"].employees]);
    var handleEditProfile = function () {
        setIsEditing(true);
    };
    var handleEditEmployee = function (employee) {
        appStore_1["default"].editEmployee(employee);
        setEmployee(appStore_1["default"].getEmployeeById(userId));
        setIsEditing(false);
    };
    return (React.createElement("section", { className: "profile" }, employee === undefined ?
        React.createElement("div", { className: "profile-undefined" },
            React.createElement("h1", { className: "profile-undefined__title" }, "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"),
            React.createElement(react_router_dom_1.Link, { to: "/", className: "profile__link" }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"))
        :
            React.createElement(React.Fragment, null,
                !isEditing && React.createElement(react_router_dom_1.Link, { to: "/", className: "profile__link" }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"),
                React.createElement("div", { className: "profile__header" },
                    React.createElement("h2", { className: "profile__title" }, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430")),
                React.createElement("div", { className: "profile__info" }, isEditing
                    ?
                        React.createElement(EmployeeForm_1["default"], { employee: employee, handleSubmit: handleEditEmployee })
                    :
                        React.createElement("ul", { className: "profile__list" },
                            React.createElement("li", { className: "profile__list-item" },
                                React.createElement("p", { className: "profile__list-subtitle" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F: "),
                                React.createElement("p", { className: "profile__list-data" }, employee.getSurname())),
                            React.createElement("li", { className: "profile__list-item" },
                                React.createElement("p", { className: "profile__list-subtitle" }, "\u0418\u043C\u044F: "),
                                React.createElement("p", { className: "profile__list-data" }, employee.getName())),
                            React.createElement("li", { className: "profile__list-item" },
                                React.createElement("p", { className: "profile__list-subtitle" }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: "),
                                React.createElement("p", { className: "profile__list-data" }, employee.getPatronymic())),
                            React.createElement("li", { className: "profile__list-item" },
                                React.createElement("p", { className: "profile__list-subtitle" }, "Email: "),
                                React.createElement("p", { className: "profile__list-data" }, employee.getEmail())),
                            React.createElement("li", { className: "profile__list-item" },
                                React.createElement("p", { className: "profile__list-subtitle" }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430: "),
                                React.createElement("p", { className: "profile__list-data" }, employee.getPhone())),
                            React.createElement("li", { className: "profile__list-item" },
                                React.createElement("p", { className: "profile__list-subtitle" }, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: "),
                                React.createElement("p", { className: "profile__list-data" }, employee.getBirthday())),
                            React.createElement("li", { className: "profile__list-item" },
                                React.createElement("p", { className: "profile__list-subtitle" }, "\u0414\u043D\u0435\u0439 \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E: "),
                                React.createElement("p", { className: "profile__list-data" }, employee.getDays())),
                            React.createElement("li", { className: "profile__list-item" },
                                React.createElement("p", { className: "profile__list-subtitle" }, "\u0414\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430: "),
                                React.createElement("p", { className: "profile__list-data" }, employee.getDaySalary())),
                            React.createElement("div", { className: "profile__controls" },
                                React.createElement("button", { className: "profile__btn_edit btn", onClick: handleEditProfile }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")))))));
};
exports["default"] = Profile;
//# sourceMappingURL=Profile.js.map