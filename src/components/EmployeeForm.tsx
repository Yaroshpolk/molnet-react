import * as React from "react";
import {FC, useEffect, useState} from "react";
import InputMask from "react-input-mask";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';
import EmployeeFormTypes from "../types/EmployeeFormTypes";
import Employee from "../models/Employee";
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('ru', ru)

const EmployeeForm: FC<EmployeeFormTypes> = ({handleSubmit, employee}) => {

    const [id, setId] = useState<number>(Date.now);
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [patronymic, setPatronymic] = useState<string>("");
    const [birthday, setBirthday] = useState<Date | string>(new Date());
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [days, setDays] = useState<number>(0);
    const [daySalary, setDaySalary] = useState<number>(0);
    const [errors, setErrors] = useState({
        birthday: undefined,
        email: undefined,
        patronymic: undefined,
        phone: undefined,
        surname: undefined,
        name: undefined,
        days: undefined,
        daySalary: undefined
    });

    const handleFormSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();

        if (checkFormValidity()) {
            handleSubmit(new Employee(id,
                name,
                surname,
                patronymic,
                new Date(birthday).toLocaleDateString(),
                phone,
                email,
                days,
                daySalary));

            resetForm();
        }
    }

    const resetForm = () => {
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
    }

    const validateEmail = (email: string) => {
        let regExp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regExp.test(email);
    }

    const validatePhone = (phone: string) => {
        return !String(phone).includes("_");
    }

    const checkFormValidity = () => {
        let validity: boolean = true;
        let errs: {
            name: undefined | string, surname: undefined | string, patronymic: undefined | string,
            birthday: undefined | string, phone: undefined | string, email: undefined | string,
            days: undefined | string, daySalary: undefined | string
        };

        errs = {
            birthday: undefined,
            email: undefined,
            patronymic: undefined,
            phone: undefined,
            surname: undefined,
            name: undefined,
            days: undefined,
            daySalary: undefined
        }

        if (name === "") {
            validity = false;
            errs.name = "Введите имя сотрудника"
        }

        if (surname === "") {
            validity = false;
            errs.surname = "Введите фамилию сотрудника"
        }

        if (patronymic === "") {
            validity = false;
            errs.patronymic = "Введите отчество сотрудника"
        }

        if (birthday === "" || birthday === null) {
            validity = false;
            errs.birthday = "Введите дату рождения сотрудника"
        }

        if (phone === "") {
            validity = false;
            errs.phone = "Введите номер телефона сотрудника"
        } else if (!validatePhone(phone)) {
            validity = false;
            errs.phone = "Введите корректный номер телефона сотрудника"
        }

        if (email === "") {
            validity = false;
            errs.email = "Введите email сотрудника"
        } else if (!validateEmail(email)) {
            validity = false;
            errs.email = "Введите корректный email сотрудника"
        }

        if (!days && days !== 0) {
            validity = false;
            errs.days = "Введите кол-во отработанных дней"
        } else if (days < 0) {
            validity = false;
            errs.days = "Кол-во дней не может быть меньше 0"
        }

        if (!daySalary && daySalary !== 0) {
            validity = false;
            errs.daySalary = "Введите дневную ставку сотрудника"
        } else if (daySalary < 0) {
            validity = false;
            errs.daySalary = "Дневная ставка сотрудника не может быть меньше 0"
        }

        setErrors(errs)
        return validity;
    }

    useEffect(() => {
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
    }, [])

    return (
        <form className="form form_employee" onSubmit={handleFormSubmit} noValidate>

            <label className="form__field">
                <p className="form__label">Фамилия:</p>
                <input type="text" name="surname" placeholder="Фамилия"
                       className={`form__input ${errors.surname && "form__input_invalid"}`}
                       required
                       value={surname}
                       onChange={evt => setSurname(evt.target.value)}
                />
                <p className="form__field-error">
                    {errors.surname}
                </p>
            </label>

            <label className="form__field">
                <p className="form__label">Имя:</p>
                <input type="text" name="name" placeholder="Имя"
                       className={`form__input ${errors.name && "form__input_invalid"}`} required
                       value={name}
                       onChange={evt => setName(evt.target.value)}
                />
                <p className="form__field-error">
                    {errors.name}
                </p>
            </label>

            <label className="form__field">
                <p className="form__label">Отчество:</p>
                <input type="text" name="patronymic" placeholder="Отчество"
                       className={`form__input ${errors.patronymic && "form__input_invalid"}`}
                       required
                       value={patronymic}
                       onChange={evt => setPatronymic(evt.target.value)}
                />
                <p className="form__field-error">
                    {errors.patronymic}
                </p>
            </label>

            <label className="form__field">
                <p className="form__label">Email:</p>
                <input type="email" name="email" placeholder="Email"
                       className={`form__input ${errors.email && "form__input_invalid"}`} required
                       value={email}
                       onChange={evt => setEmail(evt.target.value)}
                />
                <p className="form__field-error">
                    {errors.email}
                </p>
            </label>

            <label className="form__field">
                <p className="form__label">Телефон:</p>
                <InputMask mask='+7(999) 999-99-99' name="phone"
                           className={`form__input ${errors.phone && "form__input_invalid"}`} required
                           value={phone}
                           onChange={evt => setPhone(evt.target.value)}
                           type="tel"
                           placeholder="Номер телефона"
                />
                <p className="form__field-error">
                    {errors.phone}
                </p>
            </label>

            <label className="form__field">
                <p className="form__label">Дата рождения:</p>
                <DatePicker selected={new Date(birthday) || new Date} name="birthday"
                            className={`form__input ${errors.birthday && "form__input_invalid"}`} required
                            onChange={date => {
                                setBirthday(date)
                            }}
                            dateFormat="dd.MM.yyyy"
                            placeholderText="Дата рождения"
                />
                <p className="form__field-error">
                    {errors.birthday}
                </p>
            </label>

            <label className="form__field">
                <p className="form__label">Отработано:</p>
                <input type="number" name="days" placeholder="Отработано дней"
                       className={`form__input ${errors.days && "form__input_invalid"}`} required
                       value={days}
                       onChange={evt => setDays(parseInt(evt.target.value))}
                />
                <p className="form__field-error">
                    {errors.days}
                </p>
            </label>

            <label className="form__field">
                <p className="form__label">Дневная ставка:</p>
                <input type="number" name="daySalary" placeholder="Дневная ставка"
                       className={`form__input ${errors.daySalary && "form__input_invalid"}`}
                       required
                       value={daySalary}
                       onChange={evt => setDaySalary(parseInt(evt.target.value))}
                />
                <p className="form__field-error">
                    {errors.daySalary}
                </p>
            </label>

            <div className="form__controls">
                <input className="form__submit" type="submit" value='Сохранить'/>
            </div>
        </form>
    );
};

export default EmployeeForm;