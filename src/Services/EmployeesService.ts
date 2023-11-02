import { CreateEmployeesModels } from "../Models/CreateEmployeesModels";
import { EmployeesModelsList } from "../Models/EmployeesModels";
import { LoginModel } from "../Models/LoginModel";
import { UpdateEmployeesModel } from "../Models/UpdateEmployeesModel";
import { API } from "../Providers"

const GetAllEmployees = () => API.get<EmployeesModelsList>('api/v1/Employees/get');
const CreateEmployees = (createEmployees: CreateEmployeesModels) => API.post<CreateEmployeesModels>('api/v1/Employees/create', createEmployees);
const UpdateEmployees = (updateEmployees: UpdateEmployeesModel) => API.put<UpdateEmployeesModel>('api/v1/Employees/update', updateEmployees);
const DeleteEmployees = (id: string) => API.delete(`api/v1/Employees/${id}`);
const GetEmployeesById = (id: string) => API.get<UpdateEmployeesModel>(`api/v1/Employees/${id}`);
const SavePublicemployees = () => API.get(`api/v1/Employees/get-employees-api`);
const Login = (Login: LoginModel) => API.post(`api/v1/Employees/login`, Login);

export const EmployeesService = {
    GetAllEmployees,
    CreateEmployees,
    UpdateEmployees,
    DeleteEmployees,
    GetEmployeesById,
    SavePublicemployees,
    Login
}