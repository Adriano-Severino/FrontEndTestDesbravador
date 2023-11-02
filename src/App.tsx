import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProjectPage from './Pages/ProjectPage';
import CreateProjectPage from './Pages/CreateProjectPage';
import CreateEmployeesPage from './Pages/CreateEmployeesPage';
import EmployeesPage from './Pages/EmployeesPage';
import ProjectEditPage from './Pages/ProjectEditPage';
import EmployeesEditPage from './Pages/EmployeesEditPage';
import StartPage from './Pages/StartPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/create-project" element={<CreateProjectPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/create-employee" element={<CreateEmployeesPage />} />
        <Route path="/list-projects" element={<ProjectPage />} />
        <Route path="/list-employee" element={<EmployeesPage />} />
        <Route path="/edit-projects/:id" element={<ProjectEditPage />} />
        <Route path="/edit-employees/:id" element={<EmployeesEditPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
