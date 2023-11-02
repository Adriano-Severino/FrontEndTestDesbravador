import { CreateEmployeesModels } from "../Models/CreateEmployeesModels";
import { EmployeesModelsList } from "../Models/EmployeesModels";
import { UpdateEmployeesModel } from "../Models/UpdateEmployeesModel";
import { API } from "../Providers"

const GetAll = () => API.get<EmployeesModelsList>('api/v1/Employees/get');
const CreateEmployees = (createEmployees: CreateEmployeesModels) => API.post<CreateEmployeesModels>('api/v1/Employees/create', createEmployees);
const UpdateEmployees = (updateEmployees: UpdateEmployeesModel) => API.put<UpdateEmployeesModel>('api/v1/Employees/update', updateEmployees);

export const EmployeesService = {
    GetAll,
    CreateEmployees,
    UpdateEmployees
}