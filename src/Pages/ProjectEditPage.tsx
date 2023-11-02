import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHooksProject } from '../hooks/useHooksProject';
import ProjectForm from './ProjectForm';
import { UpdateProjectModels } from '../Models/UpdateProjectModels';

const ProjectEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { UpdateProject, GetProjectById, project } = useHooksProject();
  
  useEffect(() => {
    
    if (id) {
      GetProjectById(id);
    }
  }, [id, GetProjectById]);
  

  const handleSubmit = (values: UpdateProjectModels) => {
    UpdateProject(values);
  };

  return (
    <div>
      <h1>Editar Projeto</h1>
      {project ? (
        <ProjectForm initialValues={project} onSubmit={handleSubmit} />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
  
};

export default ProjectEditPage;
