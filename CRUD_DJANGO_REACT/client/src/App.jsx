import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// page
import { TasksPage } from './pages/TasksPage';
import { TasksFormPage } from './pages/TasksFormPage';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/login';
// components
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navigation } from './components/Navigation';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    // Lógica de autenticación (puedes implementarla como sea necesario)
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    // Lógica de cierre de sesión (puedes implementarla como sea necesario)
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path='/' element={<Navigate to='/tasks' />} />
          <Route path='/tasks' element={<TasksPage />} />
          <Route path='/tasks-create' element={<TasksFormPage />} />
          <Route path='/tasks/:id' element={<TasksFormPage />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} isLoggedIn={isLoggedIn} /> */}
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />} >
            <Route path='/admin' element={<Dashboard />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;

