import React, { useEffect } from 'react';
import { useHooksEmployees } from '../hooks/useHooksEmployees';
import { useNavigate } from 'react-router-dom';
import { EmployeesService } from '../Services/EmployeesService';
import { RoleEnum } from '../Models/RoleEnum';

const EmployeesPage: React.FC = () => {
  const navigate = useNavigate();
  const { tasks, GetAllEmployees } = useHooksEmployees();

  useEffect(() => {
    GetAllEmployees();
  }, [GetAllEmployees,tasks]);

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.nome}</td>
              <td>{task.sobrenome}</td>
              <td>{task.email}</td>
              <td>{task.password}</td>
              <td>{RoleEnum[task.role]}</td>
              <td>
                <div className='buttonContainer'>
                  <button className='botaoEditar' onClick={() => navigate(`/edit-employees/${task.id}`)}>Editar</button>
                  <button className='BotaoDeletar' onClick={() => { if (window.confirm('Tem certeza que deseja deletar este item?')) { EmployeesService.DeleteEmployees(task.id) };}}>Deletar</button>
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

export default EmployeesPage;
