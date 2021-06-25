import React from 'react';
import { useSelector } from 'react-redux';

// components
import Appointments from '../Appointments/Appointments';


function Home() {
    const state = useSelector(state => state.authReducer);

    return (
        <div>
            {state.isLogged ? <Appointments /> : 
             "Welcome to the home page Sign in to save all your appointments"}
        </div>
    )
}

export default Home
