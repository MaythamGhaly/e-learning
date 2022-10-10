import { useState } from "react";

const Admin = ({ onAddUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUser_type] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !name || !user_type) {
            alert("fill all the informations")
            return
        }

        onAddUser({ name, email, password, user_type });

        setName("");
        setEmail("");
        setPassword("");
        setUser_type("");

    };
    return (
        <>
            <form className="flex add-user-container" onSubmit={onSubmit}>
                <div className="login-section">
                    <h2 className="center">Add User</h2>
                    <input
                        className="login-input"
                        type="text"
                        placeholder="Enter a name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <input
                        className="login-input"
                        type="text"
                        placeholder="student or instructor"
                        value={user_type}
                        onChange={(e) => setUser_type(e.target.value)}
                    />
                    <input type={"submit"} value="Add User" className="login-btn" />
                </div>
                <div>
                    
                </div>
            </form>
        </>
    )
}

export default Admin