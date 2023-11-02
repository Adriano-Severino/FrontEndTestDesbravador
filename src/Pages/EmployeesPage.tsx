import React, { useEffect } from 'react';
import { useHooksEmployees } from '../hooks/useHooksEmployees';

const EmployeesPage: React.FC = () => {
  const { tasks, GetAll } = useHooksEmployees();

  useEffect(() => {
    GetAll();
  }, [GetAll]);

  return (
    <div className='container'>
      {tasks.map((task) => (
        <div  key={task.id}>
          <h2>{task.nome} {task.sobrenome}</h2>
          <p>Email: {task.email}</p>
          <p>Senha: {task.password}</p>
          <p>Cargo: {task.role}</p>
          <p>ID do Projeto: {task.projectId || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeesPage;
