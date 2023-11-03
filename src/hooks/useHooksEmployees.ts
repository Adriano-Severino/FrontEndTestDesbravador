import { useCallback, useState } from 'react'
import { EmployeesService } from '../Services/EmployeesService'
import { EmployeesModelsList } from '../Models/EmployeesModels';
import { CreateEmployeesModels } from '../Models/CreateEmployeesModels';
import { UpdateEmployeesModel } from '../Models/UpdateEmployeesModel';
import { ResponseLogin } from '../Models/ResponseLogin';
import { LoginModel } from '../Models/LoginModel';

export const useHooksEmployees = () => {
    const [employeesList, setTasks] = useState<EmployeesModelsList>([]);

    const GetAllEmployees = useCallback(async () => {
        const { status, data } = await EmployeesService.GetAllEmployees();

        if (status != 200) throw new Error();

        setTasks(data);
    }, [])

    const CreateEmployees = useCallback(async (createEmployees: CreateEmployeesModels) => {
        const { status } = await EmployeesService.CreateEmployees(createEmployees);
        if (status != 200) throw new Error();
    }, [])

    const UpdateEmployees = useCallback(async (updateEmployees: UpdateEmployeesModel) => {
        const { status } = await EmployeesService.UpdateEmployees(updateEmployees);
        if (status != 200) throw new Error();
    }, [])

    const [employees, setEmployees] = useState<UpdateEmployeesModel | null>(null);

    const GetEmployeeById = useCallback(async (id: string) => {
        const { status, data } = await EmployeesService.GetEmployeesById(id);

        if (status !== 200) throw new Error();

        setEmployees(data);
    }, []);

    const [loginResult, setLogin] = useState<LoginModel | null>(null);

    const Login = async (loginData: LoginModel): Promise<ResponseLogin> => {
        const { status, data } = await EmployeesService.Login(loginData);

        if (status != 200) throw new Error();

        return data;
    }


    return {
        employeesList,
        employees,
        loginResult,
        GetAllEmployees,
        CreateEmployees,
        UpdateEmployees,
        GetEmployeeById,
        Login,
    };
};