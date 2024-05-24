import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export function ProtectedRoute({ element, isLoggedIn, ...rest }) {
  // Si el usuario está autenticado, renderiza el elemento; de lo contrario, redirige a la página de inicio de sesión
  return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
}
