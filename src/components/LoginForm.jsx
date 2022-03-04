import React from 'react'

const LoginForm = () => {
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = () => {
        
    }
}


export default function LoginForm() {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter your username" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                required
            />
            <input 
                type="password" 
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required    
            />
            <div style={{ alignContent: 'center' }}>
                <button type="submit"className="btn-signin">
                    <span>Sign in</span>
                </button>
            </div>
        </form>
    </div>
    
  )
}
