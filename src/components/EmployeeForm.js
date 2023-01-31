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
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var react_datepicker_1 = __importStar(require("react-datepicker"));
var ru_1 = __importDefault(require("date-fns/locale/ru"));
var Employee_1 = __importDefault(require("../models/Employee"));
require("react-datepicker/dist/react-datepicker.css");
(0, react_datepicker_1.registerLocale)('ru', ru_1["default"]);
var EmployeeForm = function (_a) {
    var handleSubmit = _a.handleSubmit, employee = _a.employee;
    var _b = (0, react_1.useState)(Date.now), id = _b[0], setId = _b[1];
    var _c = (0, react_1.useState)(""), name = _c[0], setName = _c[1];
    var _d = (0, react_1.useState)(""), surname = _d[0], setSurname = _d[1];
    var _e = (0, react_1.useState)(""), patronymic = _e[0], setPatronymic = _e[1];
    var _f = (0, react_1.useState)(new Date()), birthday = _f[0], setBirthday = _f[1];
    var _g = (0, react_1.useState)(""), phone = _g[0], setPhone = _g[1];
    var _h = (0, react_1.useState)(""), email = _h[0], setEmail = _h[1];
    var _j = (0, react_1.useState)(0), days = _j[0], setDays = _j[1];
    var _k = (0, react_1.useState)(0), daySalary = _k[0], setDaySalary = _k[1];
    var _l = (0, react_1.useState)({
        birthday: undefined,
        email: undefined,
        patronymic: undefined,
        phone: undefined,
        surname: undefined,
        name: undefined,
        days: undefined,
        daySalary: undefined
    }), errors = _l[0], setErrors = _l[1];
    var handleFormSubmit = function (evt) {
        evt.preventDefault();
        if (checkFormValidity()) {
            handleSubmit(new Employee_1["default"](id, name, surname, patronymic, new Date(birthday).toLocaleDateString(), phone, email, days, daySalary));
            resetForm();
        }
    };
    var resetForm = function () {
        setId(Date.now);
        setName('');
        setSurname('');
        setPatronymic('');
        setBirthday(new Date());
        setPhone('');
        setEmail('');
        setDays(0);
        setDaySalary(0);
        setErrors({
            birthday: undefined,
            email: undefined,
            patronymic: undefined,
            phone: undefined,
            surname: undefined,
            name: undefined,
            days: undefined,
            daySalary: undefined
        });
    };
    var validateEmail = function (email) {
        var regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regExp.test(email);
    };
    var validatePhone = function (phone) {
        return !String(phone).includes("_");
    };
    var checkFormValidity = function () {
        var validity = true;
        var errs;
        errs = {
            birthday: undefined,
            email: undefined,
            patronymic: undefined,
            phone: undefined,
            surname: undefined,
            name: undefined,
            days: undefined,
            daySalary: undefined
        };
        if (name === "") {
            validity = false;
            errs.name = "Введите имя сотрудника";
        }
        if (surname === "") {
            validity = false;
            errs.surname = "Введите фамилию сотрудника";
        }
        if (patronymic === "") {
            validity = false;
            errs.patronymic = "Введите отчество сотрудника";
        }
        if (birthday === "" || birthday === null) {
            validity = false;
            errs.birthday = "Введите дату рождения сотрудника";
        }
        if (phone === "") {
            validity = false;
            errs.phone = "Введите номер телефона сотрудника";
        }
        else if (!validatePhone(phone)) {
            validity = false;
            errs.phone = "Введите корректный номер телефона сотрудника";
        }
        if (email === "") {
            validity = false;
            errs.email = "Введите email сотрудника";
        }
        else if (!validateEmail(email)) {
            validity = false;
            errs.email = "Введите корректный email сотрудника";
        }
        if (!days && days !== 0) {
            validity = false;
            errs.days = "Введите кол-во отработанных дней";
        }
        else if (days < 0) {
            validity = false;
            errs.days = "Кол-во дней не может быть меньше 0";
        }
        if (!daySalary && daySalary !== 0) {
            validity = false;
            errs.daySalary = "Введите дневную ставку сотрудника";
        }
        else if (daySalary < 0) {
            validity = false;
            errs.daySalary = "Дневная ставка сотрудника не может быть меньше 0";
        }
        setErrors(errs);
        return validity;
    };
    (0, react_1.useEffect)(function () {
        if (employee) {
            setId(employee.getId());
            setName(employee.getName());
            setSurname(employee.getSurname());
            setPatronymic(employee.getPatronymic());
            setBirthday(employee.getBirthday().split(".").reverse().join("."));
            setPhone(employee.getPhone());
            setEmail(employee.getEmail());
            setDays(employee.getDays());
            setDaySalary(employee.getDaySalary());
        }
    }, []);
    return (React.createElement("form", { className: "form form_employee", onSubmit: handleFormSubmit, noValidate: true },
        React.createElement("label", { className: "form__field" },
            React.createElement("p", { className: "form__label" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:"),
            React.createElement("input", { type: "text", name: "surname", placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", className: "form__input ".concat(errors.surname && "form__input_invalid"), required: true, value: surname, onChange: function (evt) { return setSurname(evt.target.value); } }),
            React.createElement("p", { className: "form__field-error" }, errors.surname)),
        React.createElement("label", { className: "form__field" },
            React.createElement("p", { className: "form__label" }, "\u0418\u043C\u044F:"),
            React.createElement("input", { type: "text", name: "name", placeholder: "\u0418\u043C\u044F", className: "form__input ".concat(errors.name && "form__input_invalid"), required: true, value: name, onChange: function (evt) { return setName(evt.target.value); } }),
            React.createElement("p", { className: "form__field-error" }, errors.name)),
        React.createElement("label", { className: "form__field" },
            React.createElement("p", { className: "form__label" }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E:"),
            React.createElement("input", { type: "text", name: "patronymic", placeholder: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E", className: "form__input ".concat(errors.patronymic && "form__input_invalid"), required: true, value: patronymic, onChange: function (evt) { return setPatronymic(evt.target.value); } }),
            React.createElement("p", { className: "form__field-error" }, errors.patronymic)),
        React.createElement("label", { className: "form__field" },
            React.createElement("p", { className: "form__label" }, "Email:"),
            React.createElement("input", { type: "email", name: "email", placeholder: "Email", className: "form__input ".concat(errors.email && "form__input_invalid"), required: true, value: email, onChange: function (evt) { return setEmail(evt.target.value); } }),
            React.createElement("p", { className: "form__field-error" }, errors.email)),
        React.createElement("label", { className: "form__field" },
            React.createElement("p", { className: "form__label" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),
            React.createElement(react_input_mask_1["default"], { mask: '+7(999) 999-99-99', name: "phone", className: "form__input ".concat(errors.phone && "form__input_invalid"), required: true, value: phone, onChange: function (evt) { return setPhone(evt.target.value); }, type: "tel", placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430" }),
            React.createElement("p", { className: "form__field-error" }, errors.phone)),
        React.createElement("label", { className: "form__field" },
            React.createElement("p", { className: "form__label" }, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:"),
            React.createElement(react_datepicker_1["default"], { selected: new Date(birthday) || new Date, name: "birthday", className: "form__input ".concat(errors.birthday && "form__input_invalid"), required: true, onChange: function (date) {
                    setBirthday(date);
                }, dateFormat: "dd.MM.yyyy", placeholderText: "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F" }),
            React.createElement("p", { className: "form__field-error" }, errors.birthday)),
        React.createElement("label", { className: "form__field" },
            React.createElement("p", { className: "form__label" }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E:"),
            React.createElement("input", { type: "number", name: "days", placeholder: "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0434\u043D\u0435\u0439", className: "form__input ".concat(errors.days && "form__input_invalid"), required: true, value: days, onChange: function (evt) { return setDays(parseInt(evt.target.value)); } }),
            React.createElement("p", { className: "form__field-error" }, errors.days)),
        React.createElement("label", { className: "form__field" },
            React.createElement("p", { className: "form__label" }, "\u0414\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430:"),
            React.createElement("input", { type: "number", name: "daySalary", placeholder: "\u0414\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430", className: "form__input ".concat(errors.daySalary && "form__input_invalid"), required: true, value: daySalary, onChange: function (evt) { return setDaySalary(parseInt(evt.target.value)); } }),
            React.createElement("p", { className: "form__field-error" }, errors.daySalary)),
        React.createElement("div", { className: "form__controls" },
            React.createElement("input", { className: "form__submit", type: "submit", value: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C' }))));
};
exports["default"] = EmployeeForm;
//# sourceMappingURL=EmployeeForm.js.map