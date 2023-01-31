import * as React from "react";
import {FC} from "react";
import {Link} from "react-router-dom";
import EmployeesItemTypes from "../types/EmployeesItemTypes";

const EmployeesItem: FC<EmployeesItemTypes> = ({employee, index}) => {

    return (
        <li className="employees__item employees__list-row">
            <p className="employees__list-field employees__list-field_centered">
                {index}
            </p>

            <p className="employees__list-field">
                <Link to={"/employee/" + employee.getId()} className="link">
                    {employee.getSurname() + ' ' + employee.getName() + ' ' + employee.getPatronymic()}
                </Link>
            </p>

            <p className="employees__list-field">
                {employee.getEmail()}
            </p>

            <p className="employees__list-field employees__list-field_centered">
                {employee.getPhone()}
            </p>

            <p className="employees__list-field employees__list-field_centered">
                {employee.getBirthday()}
            </p>

            <p className="employees__list-field employees__list-field_centered">
                {employee.getDays()}дн.
            </p>

            <p className="employees__list-field employees__list-field_centered">
                {employee.getDaySalary()}руб.
            </p>

            <p className="employees__list-field employees__list-field_centered">
                {employee.getDaySalary() * employee.getDays()}руб.
            </p>
        </li>
    );
}

export default EmployeesItem;