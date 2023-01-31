import Employee from "../models/Employee";

export default interface EmployeeFormTypes {
    handleSubmit: (employee: Employee) => void,
    employee?: Employee,
}