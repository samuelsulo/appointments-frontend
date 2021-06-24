import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../actions/auth';

import TextField from '../../components/SubComponents/TextField';
import Button from '../../components/SubComponents/Button';
import { IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import './auth.css';

const initialState = { firstName: '', lastName: '', email: '', password: ''};

function Auth() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [isSignup, setIsSignup] = useState(false);
    // form data
    const [user, setUser] = useState(initialState);
    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    // show hide password
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    // error
    const [error, setError] = useState('');

    const switchMode = () => {
        setError('');
        setUser(initialState);
        setIsSignup(!isSignup);
        setShowPassword(false);
    }

    // form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(auth(user, history, isSignup));
    };

    return (
        <div className="auth-section">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{isSignup ? 'Sign Up': ' Sign in'}</h2>
                {error ? <p className="error">{error}</p> : null}
                {isSignup && (<>
                    <TextField type="text" name="firstName" label="First Name" focus={isSignup} value={user.firstName} onChange={handleChange}/>
                    <TextField type="text" name="lastName" label="Last Name" value={user.lastName} onChange={handleChange}/>
                </>
                )}
                <TextField type="text" name="email" label="Email" focus={true} value={user.email} onChange={handleChange}/>
                <div className="costum-password">
                    <TextField type={showPassword ? "text" : "password"} name="password" label="Password" value={user.password} onChange={handleChange}/>
                    <span className="show-hide-password"><IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton></span>
                </div>  
                <Button class="user-btn" type="submit" value={isSignup ? 'Sign Up': ' Sign in'} />
                <div className="links">
                    {!isSignup &&  <Link className="link" to="/account/reset/password">Forgot your password?</Link>}
                    <span className="link" onClick={switchMode}>{isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }</span>
                </div>
            </form>
        </div>
    )
}

export default Auth;
