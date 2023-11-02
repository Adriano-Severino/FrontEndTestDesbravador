import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/home.css';
import { EmployeesService } from '../Services/EmployeesService';


  const App: React.FC = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState<string | null>(null);
  
    const handleImport = async () => {
      if (window.confirm('Voce importara os funcionários de uma api pública e salvara no banco de dados deseja continuar?')) {
        await EmployeesService.SavePublicemployees();
        setMessage('Importado com sucesso!');
      }
    };
    
  return (
    <>
      <div className='container'>
        <h1 className='title'>Boas-vindas!</h1>
        <p>Bem-vindo ao nosso aplicativo. Esperamos que você goste!</p>

        <div>
          <button className="buttonCriar" type="submit" onClick={() => navigate('/create-project')}>
            Criar Projeto
          </button>
        </div>
        <div>
          <button className="buttonCriar" type="submit" onClick={() => navigate('/create-employee')}>
            Criar Funcionarios
          </button>
        </div>
        
        <div>
          <button className="buttonCriar" type="submit" onClick={() => navigate('/list-projects')}>
            Listar os Projetos
          </button>
        </div>

        <div>
          <button className="buttonCriar" type="submit" onClick={() => navigate('/list-employee')}>
            Listar os Funcionarios
          </button>
        </div>

        <div>
        <button className="buttonCriar" type="submit" onClick={handleImport}>
          Salvar Funcionarios da api public
        </button>
        {message && <p>{message}</p>}
      </div>
      </div>
    </>
  );
};

export default App;
