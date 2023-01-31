import {makeAutoObservable} from "mobx";
import Employee from "../models/Employee";

class AppStore {
    employees: Employee[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setEmployees = (newEmployees: Employee[]) => {
        this.employees = newEmployees;
    }

    addEmployee = (employee: Employee) => {
        this.setEmployees([...this.employees, employee])
    }

    getEmployeeById = (id: number) => {
        return this.employees.find(employee => employee.getId() === Number(id));
    }

    editEmployee = (employee: Employee): any => {
        const curIndex: number = this.employees.findIndex(item => item.getId() === employee.getId());

        if (curIndex !== -1) {
            this.employees[curIndex] = employee;
        } else {
            return undefined;
        }
    }
}

export default new AppStore();