import {Link, useParams} from "react-router-dom";
import * as React from "react";
import {FC, useEffect, useState} from "react";
import EmployeeForm from "./EmployeeForm";
import appStore from "../stores/appStore";
import Employee from "../models/Employee";

const Profile: FC = () => {

    const userId: number = Number(useParams().id);

    const [employee, setEmployee] = useState<Employee>(new Employee(0, '', '', '',
        '', '', '', 0, 0));
    const [isEditing, setIsEditing] = useState<boolean>(false);

    useEffect(() => {
        if (appStore.employees.length !== 0) {
            setEmployee(appStore.getEmployeeById(userId));
        }
    }, [appStore.employees])

    const handleEditProfile = () => {
        setIsEditing(true);
    }

    const handleEditEmployee = (employee: Employee) => {
        appStore.editEmployee(employee);
        setEmployee(appStore.getEmployeeById(userId));
        setIsEditing(false);
    }

    return (
        <section className="profile">

            {employee === undefined ?
                <div className="profile-undefined">
                    <h1 className="profile-undefined__title">Сотрудник не найден</h1>
                    <Link to="/" className="profile__link">На главную</Link>
                </div>
                :
                <>
                    {!isEditing && <Link to="/" className="profile__link">На главную</Link>}

                    <div className="profile__header">
                        <h2 className="profile__title">Профиль сотрудника</h2>
                    </div>

                    <div className="profile__info">
                        {isEditing
                            ?
                            <EmployeeForm employee={employee} handleSubmit={handleEditEmployee}/>
                            :
                            <ul className="profile__list">
                                <li className="profile__list-item">
                                    <p className="profile__list-subtitle">Фамилия: </p>
                                    <p className="profile__list-data">{employee.getSurname()}</p>
                                </li>
                                <li className="profile__list-item">
                                    <p className="profile__list-subtitle">Имя: </p>
                                    <p className="profile__list-data">{employee.getName()}</p>
                                </li>
                                <li className="profile__list-item">
                                    <p className="profile__list-subtitle">Отчество: </p>
                                    <p className="profile__list-data">{employee.getPatronymic()}</p>
                                </li>
                                <li className="profile__list-item">
                                    <p className="profile__list-subtitle">Email: </p>
                                    <p className="profile__list-data">{employee.getEmail()}</p>
                                </li>
                                <li className="profile__list-item">
                                    <p className="profile__list-subtitle">Номер телефона: </p>
                                    <p className="profile__list-data">{employee.getPhone()}</p>
                                </li>
                                <li className="profile__list-item">
                                    <p className="profile__list-subtitle">Дата рождения: </p>
                                    <p className="profile__list-data">{employee.getBirthday()}</p>
                                </li>
                                <li className="profile__list-item">
                                    <p className="profile__list-subtitle">Дней отработано: </p>
                                    <p className="profile__list-data">{employee.getDays()}</p>
                                </li>
                                <li className="profile__list-item">
                                    <p className="profile__list-subtitle">Дневная ставка: </p>
                                    <p className="profile__list-data">{employee.getDaySalary()}</p>
                                </li>

                                <div className="profile__controls">
                                    <button className="profile__btn_edit btn" onClick={handleEditProfile}>Изменить
                                    </button>
                                </div>
                            </ul>
                        }
                    </div>
                </>
            }

        </section>
    );
}

export default Profile;