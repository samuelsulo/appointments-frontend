const initialState = {firstName: '', lastName: '', email: ''}

const authReducer = (state ={isLogged: false, user: initialState}, action) => {
    switch(action.type) {
        case 'AUTH': 
            return {...state, isLogged: true, user: action.payload};
        case 'LOGOUT':
            return {...state, isLogged: false, user: initialState};
        default:
            return state;
   }
}

export default authReducer;