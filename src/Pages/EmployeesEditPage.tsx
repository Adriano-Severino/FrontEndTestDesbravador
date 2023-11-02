import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeesForm from './EmployeesForm';
import { UpdateEmployeesModel } from '../Models/UpdateEmployeesModel';
import { useHooksEmployees } from '../hooks/useHooksEmployees';

const EmployeesEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { UpdateEmployees, GetEmployeeById, employees } = useHooksEmployees();
  
  useEffect(() => {
    
    if (id) {
        GetEmployeeById(id);
    }
  }, [id, GetEmployeeById]);
  

  const handleSubmit = (values: UpdateEmployeesModel) => {
    UpdateEmployees(values);
  };

  return (
    <div>
      <h1>Editar Funcionario</h1>
      {employees ? (
        <EmployeesForm initialValues={employees} onSubmit={handleSubmit} />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
  
};

export default EmployeesEditPage;
