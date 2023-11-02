
import { CreateProjectModel } from "../Models/CreateProjectModel";
import { ProjectModelsList } from "../Models/ProjectModels";
import { UpdateProjectModels } from "../Models/UpdateProjectModels";
import { API } from "../Providers"

const GetAll = () => API.get<ProjectModelsList>('api/v1/Project/get');
const CreateProject = (CreateProject: CreateProjectModel) => API.post<CreateProjectModel>('api/v1/Project/create', CreateProject);
const UpdateProject = (UpdateProject: UpdateProjectModels) => API.put<UpdateProjectModels>('api/v1/Project/update', UpdateProject);

export const ServiceProject = {
    GetAll,
    CreateProject,
    UpdateProject,
}