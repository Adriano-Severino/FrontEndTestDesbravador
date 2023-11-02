
import { CreateProjectModel } from "../Models/CreateProjectModel";
import { ProjectModelsList } from "../Models/ProjectModels";
import { UpdateProjectModels } from "../Models/UpdateProjectModels";
import { API } from "../Providers"

const GetAllProject = () => API.get<ProjectModelsList>('api/v1/Project/get');
const CreateProject = (CreateProject: CreateProjectModel) => API.post<CreateProjectModel>('api/v1/Project/create', CreateProject);
const UpdateProject = (UpdateProject: UpdateProjectModels) => API.put<UpdateProjectModels>('api/v1/Project/update', UpdateProject);
const DeleteProject = (id: string) => API.delete(`api/v1/Project/${id}`);
const GetProjectById = (id: string) => API.get<UpdateProjectModels>(`api/v1/Project/${id}`);

export const ServiceProject = {
  GetAllProject,
  CreateProject,
  UpdateProject,
  DeleteProject,
  GetProjectById,
};
