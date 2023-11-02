import React, { useEffect } from 'react';
import './css/project.css';
import { useHooksProject } from '../hooks/useHooksProject';
import { useNavigate } from 'react-router-dom';
import { ServiceProject } from '../Services/ServiceProject';
import { ProjectModels } from '../Models/ProjectModels';
import { ProjectRiskEnum } from '../Models/ProjectRiskEnum';
import { StatusProjectEnum } from '../Models/StatusProjectEnum';

const ProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const { projects, GetAllProject } = useHooksProject();

  useEffect(() => {
    GetAllProject();
  }, [GetAllProject, projects]);

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>Nome do Projeto</th>
            <th>Descrição do Projeto</th>
            <th>Data de Início</th>
            <th>Data de Término</th>
            <th>Risco do Projeto</th>
            <th>Estatus do Projeto</th>
            <th>Funcionários</th>
            <th>Editar e Deletar</th>
          </tr>
        </thead>
        <tbody>
        {projects.map((project: ProjectModels) => (
          <tr key={project.id}>
            <td>{project.projectName}</td>
            <td>{project.projectDescription}</td>
            <td>{new Date(project.startDate).toLocaleDateString()}</td>
            <td>{project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Indeterminado'}</td>
            <td>{ProjectRiskEnum[project.projectRiskEnum]}</td>
            <td>{StatusProjectEnum[project.statusProjectEnum]}</td>
            <td> {/* Adicione uma célula para os funcionários */}
              {project.employees.map((employee) => (
                <div key={employee.id}>{employee.nome}</div>
              ))}
            </td>
              <td>
                <div className='buttonContainer'>
                  <button className='botaoEditar' onClick={() => navigate(`/edit-projects/${project.id}`)}>Editar</button>
                  <button className='BotaoDeletar' onClick={() => { if (window.confirm('Tem certeza que deseja deletar este item?')) { ServiceProject.DeleteProject(project.id) }; }}>Deletar</button>
                </div>
              </td>

            </tr>
          ))}

        </tbody>
      </table>
      <div>
        <button className="buttonCriar" type="submit" onClick={() => navigate('/')}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
