import { useState, useEffect } from "react";
import axios from "axios";

const Admin = ({ onAddUser, onAddCours }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUser_type] = useState('');
    const [cours_name, setCours_name] = useState('');
    const [instructors, setInstructors] = useState([])
    const [instructor_id, setInstructorId] = useState('')


    const getInstructors = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_instructors", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const users = data.data.instructors
        setInstructors(users)
    }

    useEffect(() => {
        getInstructors()
    }, [])


    const onSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !name || !user_type) alert("fill all the informations");

        onAddUser({ name, email, password, user_type });

        setName("");
        setEmail("");
        setPassword("");
        setUser_type("");
    };

    const onAdd = (e) => {
        e.preventDefault();

        if (!cours_name || !instructor_id) alert("fill all the informations");

        onAddCours({ cours_name, instructor_id });

        setCours_name("");
        setInstructorId("")
    };

    return (
        <>
            <div className="flex admin-container">
                <form onSubmit={onSubmit}>
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
                </form>
                <form onSubmit={onAdd}>
                    <div className="instructors-section">
                        <h2 className="center">Add courses ans assign to instructor</h2>
                        <input
                            className="login-input"
                            type="text"
                            placeholder="Name of the cours"
                            value={cours_name}
                            onChange={(e) => setCours_name(e.target.value)}
                        />
                        <select onChange={(e) => setInstructorId(e.target.value)} className="dropdown">

                            {instructors.map((instructor, index) => (
                                <option key={index} value={instructor._id}>
                                    {instructor.name}
                                </option>
                            ))}
                        </select>
                        <input type={"submit"} value="Add Cours" className="login-btn" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Admin