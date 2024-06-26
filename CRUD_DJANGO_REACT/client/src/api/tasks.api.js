import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
});

export const getAllTasks = () => tasksApi.get('/');
export const getTask = (id) => tasksApi.get(`/${id}/`);
export const createTasks = (task) => tasksApi.post('/', task);
export const deleteTasks = (id) => tasksApi.delete(`/${id}`);
export const updateTasks = (id, task) => tasksApi.put(`/${id}/`, task);