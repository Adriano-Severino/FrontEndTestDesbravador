import React, { useState, useEffect } from 'react';
import { useHooksEmployees } from '../hooks/useHooksEmployees';
import { useNavigate } from 'react-router-dom';
import { EmployeesService } from '../Services/EmployeesService';
import { RoleEnum } from '../Models/RoleEnum';

const EmployeesPage: React.FC = () => {
  const navigate = useNavigate();
  const { employeesList, GetAllEmployees } = useHooksEmployees();
  const [deletedEmployee, setDeletedEmployee] = useState(false);

  useEffect(() => {
    GetAllEmployees();
    setDeletedEmployee(false);
  }, [GetAllEmployees, deletedEmployee]);

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja deletar este item?')) {
      await EmployeesService.DeleteEmployees(id);
      setDeletedEmployee(true);
    }
  };

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
          {employeesList.map((employeesList) => (
            <tr key={employeesList.id}>
              <td>{employeesList.nome}</td>
              <td>{employeesList.sobrenome}</td>
              <td>{employeesList.email}</td>
              <td>{employeesList.password}</td>
              <td>{RoleEnum[employeesList.role]}</td>
              <td>
                <div className='buttonContainer'>
                  <button className='botaoEditar' onClick={() => navigate(`/edit-employees/${employeesList.id}`)}>Editar</button>
                  <button className='BotaoDeletar' onClick={() => handleDelete(employeesList.id)}>Deletar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="buttonCriar" type="submit" onClick={() => navigate('/home')}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default EmployeesPage;
