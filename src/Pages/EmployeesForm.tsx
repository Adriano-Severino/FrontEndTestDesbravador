import React, { useState, useEffect } from 'react';
import './css/edit.css';
import { useNavigate } from 'react-router-dom';
import { UpdateEmployeesModel } from '../Models/UpdateEmployeesModel';
import { ProjectModels } from '../Models/ProjectModels';
import { useHooksProject } from '../hooks/useHooksProject';

interface EmployeesFormProps {
    initialValues: UpdateEmployeesModel;
    onSubmit: (values: UpdateEmployeesModel) => void;
}

const EmployeesForm: React.FC<EmployeesFormProps> = ({ initialValues, onSubmit }) => {
    const navigate = useNavigate();
    const [values, setValues] = useState<UpdateEmployeesModel>(initialValues);
    const [message, setMessage] = useState<string | null>(null);

    const { projects, GetAllProject } = useHooksProject();

    useEffect(() => {
        GetAllProject();
    }, [GetAllProject]);

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await onSubmit(values);
            setMessage('Salvo com sucesso!');
        } catch (error) {
            setMessage('Ocorreu um erro ao salvar.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
            />
            <input
                type="text"
                name="sobrenome"
                value={values.sobrenome}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
            <select
                name="role"
                value={values.role}
                onChange={handleChange}
            >
                <option value={0}>User</option>
                <option value={1}>Admin</option>
            </select>
            <select
                name="projectId"
                value={values.projectId}
                onChange={handleChange}
            >
                {projects.map((project: ProjectModels) => (
                    <option key={project.id} value={project.id}>
                        {project.projectName}
                    </option>
                ))}
            </select>
            <button className='buttonEditar buttonVoltar' type="submit">Salvar</button>
            {message && <p>{message}</p>}
            <div>
                <button className="buttonEditar buttonVoltar" type="submit" onClick={() => navigate('/list-employee')}>
                    Voltar
                </button>
            </div>
        </form>

    );
};

export default EmployeesForm;
