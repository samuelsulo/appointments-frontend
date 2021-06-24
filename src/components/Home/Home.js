import React from 'react';
import { useSelector } from 'react-redux';

// components
import Appointments from '../Appointments/Appointments';


function Home() {
    const state = useSelector(state => state.authReducer);

    return (
        <div>
            {state.isLogged ? <Appointments /> : null}
        </div>
    )
}

export default Home
