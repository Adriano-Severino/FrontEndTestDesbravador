import {useCallback, useState} from 'react'
import { ServiceProject } from '../Services/ServiceProject';
import { ProjectModelsList } from '../Models/ProjectModels';
import { CreateProjectModel } from '../Models/CreateProjectModel';
import { UpdateProjectModels } from '../Models/UpdateProjectModels';

export const useHooksProject = () =>{
    const [tasks,setTasks] = useState<ProjectModelsList>([]);

    const GetAll = useCallback(async () => {
   const { status, data } = await ServiceProject.GetAll();

   if (status != 200) throw new Error();
   
   setTasks(data);
    },[]);

    const CreateProject = useCallback(async (createProject: CreateProjectModel) => {
        const { status } = await ServiceProject.CreateProject(createProject);
        if (status != 200) throw new Error();
    },[])

    const UpdateProject = useCallback(async (updateProject: UpdateProjectModels) => {
        const { status } = await ServiceProject.UpdateProject(updateProject);
        if (status != 200) throw new Error();
    },[])

    return{
        tasks,
        GetAll,
        CreateProject,
        UpdateProject,
    };
};