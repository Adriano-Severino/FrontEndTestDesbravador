import { useCallback, useState } from 'react'
import { ServiceProject } from '../Services/ServiceProject';
import { ProjectModelsList } from '../Models/ProjectModels';
import { CreateProjectModel } from '../Models/CreateProjectModel';
import { UpdateProjectModels } from '../Models/UpdateProjectModels';

export const useHooksProject = () => {
    const [projects, setTasks] = useState<ProjectModelsList>([]);

    const GetAllProject = useCallback(async () => {
        const { status, data } = await ServiceProject.GetAllProject();

        if (status != 200) throw new Error();

        setTasks(data);
    }, []);

    const CreateProject = useCallback(async (createProject: CreateProjectModel) => {
        const { status } = await ServiceProject.CreateProject(createProject);
        if (status != 200) throw new Error();
    }, [])

    const UpdateProject = useCallback(async (updateProject: UpdateProjectModels) => {
        const { status } = await ServiceProject.UpdateProject(updateProject);
        if (status != 200) throw new Error();
    }, [])

    const [project, setProject] = useState<UpdateProjectModels | null>(null);

    const GetProjectById = useCallback(async (id: string) => {
        const { status, data } = await ServiceProject.GetProjectById(id);

        if (status !== 200) throw new Error();

        setProject(data);
    }, []);


    return {
        projects,
        project,
        GetAllProject,
        CreateProject,
        UpdateProject,
        GetProjectById,
    };
};