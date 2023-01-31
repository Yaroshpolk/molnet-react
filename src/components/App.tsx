import * as React from "react";
import {FC} from "react";
import Employees from "./Employees";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import appStore from "../stores/appStore";
import Employee from "../models/Employee";

const App: FC = () => {

    appStore.setEmployees([
        new Employee(1, 'Олег', 'Ганчаровский', 'Игоревич',
            '01.01.2000', '+7(919) 231-22-53', 'oleg@yandex.ru',
            30, 3000),
        new Employee(2, 'Виталий', 'Шепофалов', 'Алексеевич',
            '12.04.1993', '+7(919) 848-22-01', 'vitaliy@yandex.ru',
            15, 1200),
        new Employee(3, 'Алексей', 'Свинцов', 'Генадиевич',
            '02.12.1996', '+7(919) 916-26-17', 'alex@yandex.ru',
            21, 2000),
        new Employee(4, 'Николай', 'Меншиков', 'Генадиевич',
            '01.12.1995', '+7(919) 916-28-43', 'nik@yandex.ru',
            30, 1000),
        new Employee(5, 'Енакентий', 'Племянников', 'Стасов',
            '01.12.1998', '+7(919) 916-47-12', 'enakentiy@yandex.ru',
            3, 3000),
    ]);

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={<Employees/>}
                />
                <Route
                    path="/employee/:id"
                    element={<Profile/>}
                />
                <Route
                    path="*"
                    element={<Employees/>}
                />
            </Routes>
        </div>
    );
}

export default App;
