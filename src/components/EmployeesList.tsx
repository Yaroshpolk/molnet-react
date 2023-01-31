import EmployeesItem from "./EmployeesItem";
import EmployeesTotalSalary from "./EmployeesTotalSalary";
import EmployeeForm from "./EmployeeForm";
import appStore from "../stores/appStore";
import {observer} from "mobx-react-lite";
import * as React from "react";
import {FC} from "react";
import Employee from "../models/Employee";

const EmployeesList: FC = () => {

    let employees: Employee[] = appStore.employees;

    return (
        <ul className="employees__list">
            <div className="employees__list-content">
                <div className="employees__list-header employees__list-row">
                    <p className="employees__list-field employees__list-field_centered">
                        №
                    </p>

                    <p className="employees__list-field employees__list-field_centered">
                        ФИО
                    </p>

                    <p className="employees__list-field employees__list-field_centered">
                        Email
                    </p>

                    <p className="employees__list-field employees__list-field_centered">
                        Телефон
                    </p>

                    <p className="employees__list-field employees__list-field_centered">
                        Дата рождения
                    </p>

                    <p className="employees__list-field employees__list-field_centered">
                        Отработано
                    </p>

                    <p className="employees__list-field employees__list-field_centered">
                        Дневная ставка
                    </p>

                    <p className="employees__list-field employees__list-field_centered">
                        Оклад
                    </p>
                </div>

                {employees.map((item, index) =>
                    <EmployeesItem key={item.getId()} employee={item} index={index + 1}/>
                )}
            </div>

            <div className="employees__list-footer">
                <EmployeeForm handleSubmit={appStore.addEmployee}/>
                <EmployeesTotalSalary/>
            </div>
        </ul>
    );
}

export default observer(EmployeesList)