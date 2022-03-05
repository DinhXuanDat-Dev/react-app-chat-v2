import axios from 'axios';
import React, { useState } from 'react'

const LoginForm = () => {
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    // const projectID = "80db972d-9f56-498d-a4df-caa52f752383"

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authLogin = {
            'Project-ID' : process.env.REACT_APP_PROJECT_ID,
            'User-Name' : userName,
            'User-Secret' : password
        }
        console.log('headers', { authLogin });
        console.log('headers', authLogin );

        try {
            //await axios.get('https://api.chatengine.io/chats', { headers: { authLogin} });
            await axios.get('https://api.chatengine.io/chats', { headers: authLogin });

            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        }
        catch (err) {
            setError('Username or password is incorrect!');
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="form-login">
                <input 
                    type="text" 
                    placeholder="Enter your username" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-input"
                    required
                />
                <input 
                    type="password" 
                    placeholder="Enter your password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"    
                    required
                />
                <div className="btn-wrapper">
                    <button type="submit"className="btn-signin">
                        <span>Sign in</span>
                    </button>
                </div>
                <h2>{error}</h2>
            </form>

            <div className="form-account">
                <h1>Account Login:</h1>
                <div>TestUser01 / xuandat@123</div>
            </div>
        </div>
    )
}


export default LoginForm;