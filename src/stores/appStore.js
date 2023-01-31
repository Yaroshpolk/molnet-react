"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var mobx_1 = require("mobx");
var AppStore = /** @class */ (function () {
    function AppStore() {
        var _this = this;
        this.employees = [];
        this.setEmployees = function (newEmployees) {
            _this.employees = newEmployees;
        };
        this.addEmployee = function (employee) {
            _this.setEmployees(__spreadArray(__spreadArray([], _this.employees, true), [employee], false));
        };
        this.getEmployeeById = function (id) {
            return _this.employees.find(function (employee) { return employee.getId() === Number(id); });
        };
        this.editEmployee = function (employee) {
            var curIndex = _this.employees.findIndex(function (item) { return item.getId() === employee.getId(); });
            if (curIndex !== -1) {
                _this.employees[curIndex] = employee;
            }
            else {
                return undefined;
            }
        };
        (0, mobx_1.makeAutoObservable)(this);
    }
    return AppStore;
}());
exports["default"] = new AppStore();
//# sourceMappingURL=appStore.js.map