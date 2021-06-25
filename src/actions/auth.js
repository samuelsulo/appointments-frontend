import * as api from '../api/index';

export const auth = (user, history, isSignup, setError) => async (dispatch) => {
    try {
        let res;
        if (isSignup)
            res = await api.signUp(user);
        else
            res = await api.signIn(user);

        const { data } = res;

        dispatch({ type: 'AUTH', payload: data.user });

        localStorage.setItem('auth-token', data.token);

        history.push('/');
    } catch (error) {
        setError(error.response.data.message);
    }
}

export const verifyToken = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('auth-token');

        if (!token) return;
        
        const { data } = await api.getUser(token);

        dispatch({ type: 'AUTH', payload: data.user});

    } catch (error) {
        console.log(error);
    }
}