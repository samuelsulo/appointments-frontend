import axios from 'axios';

const API = axios.create({ baseURL: 'https://mern-appointments.herokuapp.com' });

// every request will have the token in the headers
API.interceptors.request.use((req) => {
    if (localStorage.getItem('auth-token'))
        req.headers.Authorization = localStorage.getItem('auth-token');

    return req;
});

// auth apis
export const signIn = (user) => API.post('/user/signin', user);
export const signUp = (user) => API.post('/user/signup', user);
export const getUser = () => API.get('/user');

// appointments apis
export const getAppointments = (userEmail) => API.get('/appointments', { params: { email: userEmail } });
export const createAppointment = (appointment, email) => API.post('/appointments', {appointment: appointment, email: email });
export const updateAppointment = (id , updatedAppointment) => API.patch(`/appointments/${id}`, updatedAppointment);
export const deleteAppointment = (id) => API.delete(`/appointments/${id}`);
