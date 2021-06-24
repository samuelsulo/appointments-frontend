import * as api from '../api/index';

export const getAppointments = (email) => async (dispatch) => {
    try {
        const {data} = await api.getAppointments(email);
        
        dispatch({ type: 'GET_APPOINTMENTS', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createAppointment = (appointment, email) => async (dispatch) => {
    try {
        const {data} = await api.createAppointment(appointment, email);

        dispatch({ type: 'CREATE_APPOINTMENT', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateAppointment = (id, updatedAppointment) => async (dispatch) => {
    try {
        const { data } = await api.updateAppointment(id, updatedAppointment);

        dispatch({ type: 'UPDATE_APPOINTMENT', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteAppointment = (id) => async (dispatch) => {
    try {
        await api.deleteAppointment(id);
        
        dispatch({ type: 'DELETE_APPOINTMENT', payload: id});
    } catch (error) {
        console.log(error);
    }
}