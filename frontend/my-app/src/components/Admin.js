import { useState , useEffect } from "react";
import axios from "axios";

const Admin = ({ onAddUser, onAddCours }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUser_type] = useState('');
    const [cours_name, setCours_name] = useState('');
    const [inst, setInst] = useState('')
    const [instructorid, setInstructorId] = useState('')


    const getInstructors = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_instructors", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const users = data.data.instructors
        users.map((instructor) => {
            console.log(instructor.name)
        })
        setInst(users)
    }

    

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

    useEffect(() => {
        getInstructors()
    }, [])

    return (
        <>
            <div className="flex add-user-container">
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
                <div className="line"></div>
                <form onSubmit={onSubmit}>
                    <div className="instructors-section">
                        <h2 className="center">Add courses ans assign to instructor</h2>
                        <input
                            className="login-input"
                            type="text"
                            placeholder="Name of the cours"
                            value={cours_name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <select onChange={(e) => setInstructorId(e.target.value)}>

                            {/* {inst.map((instructor) => (
                                <option value={instructor._id}>
                                    {instructor.name}
                                </option>
                            ))} */}
                        </select>


                    </div>
                </form>
            </div>
        </>
    )
}

export default Admin