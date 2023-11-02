import React, { useState } from 'react';
import { useHooksProject } from '../hooks/useHooksProject';
import { useNavigate } from 'react-router-dom';
import './css/create.css';
import { ProjectRiskEnum } from '../Models/ProjectRiskEnum';
import { CreateProjectModel } from '../Models/CreateProjectModel';


const CreateProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState<CreateProjectModel>({
    ProjectName: '',
    ProjectDescription: '',
    ProjectRiskEnum: ProjectRiskEnum['Baixo risco'],
  });

  const { CreateProject } = useHooksProject();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProject({ ...project, ProjectRiskEnum: Number(e.target.value) });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await CreateProject(project);
      alert('Projeto criado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar o projeto.');
    }
  };

  return (
    <div className="container">
      <h3 className="title">Criar um projeto</h3>

      <form onSubmit={handleSubmit}>
        <div className="containerInput">
          <input
            type="text"
            name="ProjectName"
            placeholder="Nome do projeto"
            value={project.ProjectName}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="ProjectDescription"
            placeholder="Descrição do projeto"
            value={project.ProjectDescription}
            onChange={handleChange}
          />
          <br />
          <select
            name="ProjectRiskEnum"
            value={project.ProjectRiskEnum}
            onChange={handleSelectChange}
          >
            {Object.keys(ProjectRiskEnum)
              .filter(key => isNaN(Number(key)))
              .map((key) => (
                <option key={ProjectRiskEnum[key as any]} value={ProjectRiskEnum[key as any]}>
                  {key}
                </option>
              ))}
          </select>
          <br />
          <button className="buttonCriar" type="submit">
            Criar Projeto
          </button>
        </div>
        <div>
          <button className="buttonCriar" type="submit" onClick={() => navigate('/')}>
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectPage;
