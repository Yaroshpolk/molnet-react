import * as React from "react";
import {FC, useEffect, useState} from "react";
import appStore from "../stores/appStore";
import Employee from "../models/Employee";

const EmployeesTotalSalary: FC = () => {

    const [totalSalary, setTotalSalary] = useState<number>(0);

    const employees: Employee[] = appStore.employees;

    const countSalary = (employees: Employee[]) => {
        let res: number = 0;
        employees.forEach(item => res += item.getDays() * item.getDaySalary());
        setTotalSalary(res);
    }

    useEffect(() => {
        countSalary(employees);
    }, [employees]);

    return (
        <div className="employees__list-total">
            <p className="employees__list-field">Суммарный оклад</p>
            <p className="employees__list-field">{totalSalary}руб.</p>
        </div>
    );
}

export default EmployeesTotalSalary;