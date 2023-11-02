import { CreateEmployeesModels } from "../Models/CreateEmployeesModels";
import { EmployeesModelsList } from "../Models/EmployeesModels";
import { UpdateEmployeesModel } from "../Models/UpdateEmployeesModel";
import { API } from "../Providers"

const GetAllEmployees = () => API.get<EmployeesModelsList>('api/v1/Employees/get');
const CreateEmployees = (createEmployees: CreateEmployeesModels) => API.post<CreateEmployeesModels>('api/v1/Employees/create', createEmployees);
const UpdateEmployees = (updateEmployees: UpdateEmployeesModel) => API.put<UpdateEmployeesModel>('api/v1/Employees/update', updateEmployees);
const DeleteEmployees = (id: string) => API.delete(`api/v1/Employees/${id}`);
const GetEmployeesById = (id: string) => API.get<UpdateEmployeesModel>(`api/v1/Employees/${id}`);

export const EmployeesService = {
    GetAllEmployees,
    CreateEmployees,
    UpdateEmployees,
    DeleteEmployees,
    GetEmployeesById
}