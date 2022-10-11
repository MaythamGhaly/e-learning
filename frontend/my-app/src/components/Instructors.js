import { useState, useEffect } from "react";
import axios from "axios";

const Instructors = ({ onAddStudent, onAddAssignment, onAddAnnouncement }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUser_type] = useState('student');
    const [assignment, setAssignment] = useState('');
    const [courses, setCourses] = useState([]);
    const [cours_id, setCoursId] = useState('');
    const [announcement, setAnnouncement] = useState('');



    // const [cours_name, setCours_name] = useState('');
    // const [instructors, setInstructors] = useState([])
    // const [instructor_id, setInstructorId] = useState('')


    // const getInstructors = async () => {

    //     const data = await axios.get("http://127.0.0.1:8000/api/get_instructors", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
    //     const users = data.data.instructors
    //     setInstructors(users)
    // }

    // useEffect(() => {
    //     getInstructors()
    // }, [])


    const onSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !name) alert("fill all the informations");

        onAddStudent({ name, email, password, user_type });

        setName("");
        setEmail("");
        setPassword("");
    };

    const getCourses = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_courses", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const courses = data.data.courses
        setCourses(courses)
    }

    useEffect(() => {
        getCourses()
    }, [])

    const onAdd = (e) => {
        e.preventDefault();

        if (!assignment || !cours_id) alert("fill all the informations");

        onAddAssignment({ assignment, cours_id });

        setAssignment("");
        setCoursId("")
    };
    
    const onAddannouncements = (e) => {
        e.preventDefault();

        if (!announcement) alert("write an announcement");

        onAddAnnouncement({ announcement }); 

        setAssignment("");
        setCoursId("")
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
                        <input type={"submit"} value="Add Student" className="login-btn" />
                    </div>
                </form>
                <form onSubmit={onAdd}>
                    <div className="instructors-section">
                        <h2 className="center">Add assignment</h2>
                        <input
                            className="assingment-input"
                            type="text"
                            placeholder="  write an assignment"
                            value={assignment}
                            onChange={(e) => setAssignment(e.target.value)}
                        />
                        <select onChange={(e) => setCoursId(e.target.value)} className="dropdown">

                            {courses.map((cours, index) => (
                                <option key={index} value={cours._id}>
                                    {cours.cours_name}
                                </option>
                            ))}
                        </select>
                        <input type={"submit"} value="Add Assignment" className="login-btn" />
                    </div>
                </form>
                <form onSubmit={onAddannouncements}>
                    <div className="instructors-section">
                        <h2 className="center">Add announcement</h2>
                        <input
                            className="assingment-input"
                            type="text"
                            placeholder="  write the announcement"
                            value={announcement}
                            onChange={(e) => setAnnouncement(e.target.value)}
                        />
                        <input type={"submit"} value="Add Announcement" className="login-btn" />
                    </div>
                </form>

            </div>
        </>
    )
}

export default Instructors