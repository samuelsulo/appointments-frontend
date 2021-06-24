import React, {useState} from 'react';
import TextField from '../SubComponents/TextField';
import Button from '../SubComponents/Button';
import './auth.css';


function ResetPassword() {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = () => {

    }

    return (
        <div className="auth-section">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Reset your password</h2>
                <p>To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process.</p>
                <TextField type="text" name="email" label="Email" focus={true} value={email} onChange={handleChange}/>
                <Button class="user-btn" type="submit" value="Send email" />
            </form>
        </div>
    )
}

export default ResetPassword;
