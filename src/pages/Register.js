import React from 'react';
import { F_REGISTER } from '../stores';
import { useHistory } from 'react-router-dom';

function RegisterPage() {

    let history = useHistory();

    const [loginState, setLoginState] = React.useState({username: "", password: ""})
    const handleChange = e => setLoginState({...loginState, [e.target.name]: e.target.value});
    const handleSubmit = e => {
        e.preventDefault();
        F_REGISTER(loginState, (err, data) => {
            if (data) {
                history.push('/')
            }
        })
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'
        }}>
            <form onSubmit={handleSubmit} style={{marginBottom: '100px'}}>
                <h1>Register</h1>
                <div>
                    <input type="text" name="username" onChange={handleChange} />
                </div>
                <div>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <div style={{marginTop: '10px'}}>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
};

export default RegisterPage;