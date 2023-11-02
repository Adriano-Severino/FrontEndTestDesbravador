import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/home.css';

const App: React.FC = () => {
  const navigate = useNavigate();

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
          <button className="buttonCriar" type="submit" onClick={() => navigate('/save-public-employees')}>
            Salvar Funcionarios da api public
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
