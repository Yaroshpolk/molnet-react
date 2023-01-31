import * as React from "react";
import {FC} from "react";
import EmployeesList from "./EmployeesList";

const Employees: FC = () => {

    return (
        <section className="employees">
            <EmployeesList/>
        </section>
    );
}

export default Employees;