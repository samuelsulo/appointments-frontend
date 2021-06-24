const appointmentsReducer = (state = {appointments: []} , action) => {
    switch(action.type) {
        case 'GET_APPOINTMENTS':
            return {...state, appointments: action.payload };
        case 'CREATE_APPOINTMENT':
            return {...state, appointments: [...state.appointments, action.payload] };
        case 'UPDATE_APPOINTMENT':
            return {...state, appointments: state.appointments.map((x) => x._id === action.payload._id ? action.payload : x)};
        case 'DELETE_APPOINTMENT':
            return {...state, appointments: state.appointments.filter((x) => x._id !== action.payload)};
        default: return state;
    }
}

export default appointmentsReducer;