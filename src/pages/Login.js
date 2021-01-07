import React from 'react';
import { F_LOGIN } from '../stores';
import { useHistory, Link } from 'react-router-dom';

function LoginPage() {

    let history = useHistory();

    const [loginState, setLoginState] = React.useState({username: "", password: ""})
    const handleChange = e => setLoginState({...loginState, [e.target.name]: e.target.value});
    const handleSubmit = e => {
        e.preventDefault();
        F_LOGIN(loginState, (err, data) => {
            if (data) {
                history.push('/main')
            }
        })
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'
        }}>
            <form onSubmit={handleSubmit} style={{marginBottom: '100px'}}>
                <h1>Login</h1>
                <div>
                    <input type="text" name="username" onChange={handleChange} />
                </div>
                <div>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <div style={{marginTop: '10px'}}>
                    <button type="submit">Login</button>
                </div>
                <Link to="/register">
                    <h4>{`Register =>`}</h4>
                </Link>
            </form>
            
        </div>
    )
};

export default LoginPage;