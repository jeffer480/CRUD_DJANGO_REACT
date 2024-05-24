import { useState } from "react"
import { loginUser } from '../api/users.api';
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const userData = await loginUser(username, password);
            // Manejar la respuesta del servidor, por ejemplo, redireccionar al usuario a otra página
            //console.log(userData); // Mostrar los datos del usuario en la consola
            localStorage.setItem("isLoggedIn", "true");
            navigate('/');
        } catch (error) {
            setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            {error && <p>{error}</p>}
            <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br></br>
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
};
