import { useState } from "react";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onSubmit = (e) => {
      e.preventDefault();

      if(!email || !password){
        alert("email or password incorrect")
        return
      }
  
      onLogin({ email, password });
  
      setEmail("");
      setPassword("");
    };
    return (
        <>
            <form className="flex center login-container" onSubmit={onSubmit}>
                <div className="login-section">
                    <input
                        className="login-input"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input type={"submit"} value="Login" className="login-btn" />
                    
                </div>
            </form>
        </>
    )
}

export default Login