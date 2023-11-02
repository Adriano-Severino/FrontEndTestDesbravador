import React, { useState, useEffect } from 'react';
import { UpdateProjectModels } from '../Models/UpdateProjectModels';
import './css/edit.css';
import { useNavigate } from 'react-router-dom';

interface ProjectFormProps {
    initialValues: UpdateProjectModels;
    onSubmit: (values: UpdateProjectModels) => void;
}
const ProjectForm: React.FC<ProjectFormProps> = ({ initialValues, onSubmit }) => {
    const navigate = useNavigate();
    const [values, setValues] = useState<UpdateProjectModels>(initialValues);
    const [message, setMessage] = useState<string | null>(null);

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
                name="projectName"
                value={values.projectName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="projectDescription"
                value={values.projectDescription}
                onChange={handleChange}
            />
            <select
                name="projectRiskEnum"
                value={values.projectRiskEnum}
                onChange={handleChange}
            >
                <option value={0}>Baixo risco</option>
                <option value={1}>Médio risco</option>
                <option value={2}>Alto risco</option>
            </select>

            <button className='buttonEditar buttonVoltar' type="submit">Salvar</button>
            {message && <p>{message}</p>}
            <div>
                <button className="buttonEditar buttonVoltar" type="submit" onClick={() => navigate('/list-projects')}>
                    Voltar
                </button>
            </div>
        </form>
    );
};

export default ProjectForm;
