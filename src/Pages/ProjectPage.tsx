import React, { useEffect } from 'react';
import './css/project.css';
import { useHooksProject } from '../hooks/useHooksProject';
import { ProjectRiskEnum } from '../Models/CreateProjectModel';
import { useNavigate } from 'react-router-dom';

const ProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const { tasks, GetAll } = useHooksProject();

  useEffect(() => {
    GetAll();
  }, [GetAll]);

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
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.projectName}</td>
              <td>{task.projectDescription}</td>
              <td>{new Date(task.startDate).toLocaleDateString()}</td>
              <td>{task.endDate ? new Date(task.endDate).toLocaleDateString() : 'Indeterminado'}</td>
              <td>{ProjectRiskEnum[task.projectRiskEnum]}</td>
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
