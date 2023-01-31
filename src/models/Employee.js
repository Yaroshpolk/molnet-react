"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(id, name, surname, patronymic, birthday, phone, email, days, daySalary) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._patronymic = patronymic;
        this._birthday = birthday;
        this._phone = phone;
        this._email = email;
        this._days = days;
        this._daySalary = daySalary;
    }
    Employee.prototype.getId = function () {
        return this._id;
    };
    Employee.prototype.setId = function (value) {
        this._id = value;
    };
    Employee.prototype.getName = function () {
        return this._name;
    };
    Employee.prototype.setName = function (value) {
        this._name = value;
    };
    Employee.prototype.getSurname = function () {
        return this._surname;
    };
    Employee.prototype.setSurname = function (value) {
        this._surname = value;
    };
    Employee.prototype.getPatronymic = function () {
        return this._patronymic;
    };
    Employee.prototype.setPatronymic = function (value) {
        this._patronymic = value;
    };
    Employee.prototype.getBirthday = function () {
        return this._birthday;
    };
    Employee.prototype.setBirthday = function (value) {
        this._birthday = value;
    };
    Employee.prototype.getPhone = function () {
        return this._phone;
    };
    Employee.prototype.setPhone = function (value) {
        this._phone = value;
    };
    Employee.prototype.getEmail = function () {
        return this._email;
    };
    Employee.prototype.setEmail = function (value) {
        this._email = value;
    };
    Employee.prototype.getDays = function () {
        return this._days;
    };
    Employee.prototype.setDays = function (value) {
        this._days = value;
    };
    Employee.prototype.getDaySalary = function () {
        return this._daySalary;
    };
    Employee.prototype.setDaySalary = function (value) {
        this._daySalary = value;
    };
    return Employee;
}());
exports["default"] = Employee;
//# sourceMappingURL=Employee.js.map