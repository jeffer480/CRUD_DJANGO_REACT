import axios from 'axios';

const usersApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v2/users/',
});

// Función para iniciar sesión
export const loginUser = async (username, password) => {
    try {
        const response = await usersApi.post('login/', {
            username: username,
            password: password
        });
        return response.data; // Retorna los datos de la respuesta del servidor
    } catch (error) {
        // Si hay un error en la solicitud, maneja el error aquí
        throw error;
    }
};
