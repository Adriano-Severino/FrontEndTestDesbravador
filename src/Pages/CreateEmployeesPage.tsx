import React, { useState } from 'react';
import { useHooksEmployees } from '../hooks/useHooksEmployees';
import { CreateEmployeesModels } from '../Models/CreateEmployeesModels';
import './css/create.css';
import { useNavigate } from 'react-router-dom';

const CreateEmployeesPage: React.FC = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<CreateEmployeesModels>({
    nome: '',
    sobrenome: '',
    email: '',
    password: '',
  });

  const { CreateEmployees } = useHooksEmployees();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await CreateEmployees(employee);
      alert('Funcionário criado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar o funcionário.');
    }
  };

  return (
    <div className="container">
      <h3 className="title">Criar um funcionário</h3>

      <form onSubmit={handleSubmit}>
        <div className="containerInput">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={employee.nome}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            value={employee.sobrenome}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={employee.password}
            onChange={handleChange}
          />
          <br />
          <button className="buttonCriar" type="submit">
            Criar Funcionário
          </button>
   
          <button className="buttonCriar" type="submit" onClick={() => navigate('/home')}>
            Voltar
          </button>

        </div>
      </form>
    </div>
  );
};

export default CreateEmployeesPage;
