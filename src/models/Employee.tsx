export default class Employee {

    private _id: number;
    private _name: string;
    private _surname: string;
    private _patronymic: string;
    private _birthday: string;
    private _phone: string;
    private _email: string;
    private _days: number;
    private _daySalary: number;

    constructor(id: number, name: string, surname: string, patronymic: string, birthday: string, phone: string,
                email: string, days: number, daySalary: number) {
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


    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getSurname(): string {
        return this._surname;
    }

    setSurname(value: string) {
        this._surname = value;
    }

    getPatronymic(): string {
        return this._patronymic;
    }

    setPatronymic(value: string) {
        this._patronymic = value;
    }

    getBirthday(): string {
        return this._birthday;
    }

    setBirthday(value: string) {
        this._birthday = value;
    }

    getPhone(): string {
        return this._phone;
    }

    setPhone(value: string) {
        this._phone = value;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(value: string) {
        this._email = value;
    }

    getDays(): number {
        return this._days;
    }

    setDays(value: number) {
        this._days = value;
    }

    getDaySalary(): number {
        return this._daySalary;
    }

    setDaySalary(value: number) {
        this._daySalary = value;
    }
}