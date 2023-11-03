import React, { useState } from 'react';
import { LoginModel } from '../Models/LoginModel';
import { ResponseLogin } from '../Models/ResponseLogin';
import { useHooksEmployees } from '../hooks/useHooksEmployees';
import './css/starpage.css';
import { useNavigate } from 'react-router-dom';

const StartPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { Login } = useHooksEmployees();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const loginData: LoginModel = { email, password };
        const loginResult: ResponseLogin = await Login(loginData);
        if (loginResult.success) {
            localStorage.setItem('token', loginResult.token);
            alert('Login efetuado com sucesso!');
            navigate('/home');
        } else {
            alert('Falha no login: ' + loginResult.message);
        }
    };


    return (
        <div className='container'>
            <div className='container'>
                <label className='startTitle'>
                    <p>Para ter acesso de Administrador use o usuario ja cadastrado no sistema que tem as permisão de Administrador</p>
                   <p> Email: admin@admin.com</p>
                   <p> Senha: 123</p>
                </label>
            </div>
            <form onSubmit={handleSubmit}>
                <label className='email'>
                    Email:
                    <input placeholder='admin@admin.com' type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label className='senha'>
                    Senha:
                    <input placeholder='123' type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <button className="StartButton" type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default StartPage;
