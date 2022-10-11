import { useState, useEffect } from "react";
import axios from "axios";

const Students = ({ onRegister }) => {
    const [courses, setCourses] = useState([]);
    const [registercourses, setRegisterCourses] = useState([]);
    const [enrolled_courses, setEnrolledCourses] = useState([]);
    const [assignments, setAssignments] = useState([]);





    const getCourses = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_courses", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const courses = data.data.courses
        setCourses(courses)
    }
    useEffect(() => {
        getCourses()
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        if (registercourses.length == 0) {
            alert("select courses")
            return;
        }

        onRegister(registercourses);

        setRegisterCourses("")
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { value, id , checked } = e.target;
        if (checked) {
            setRegisterCourses(prev => [...prev,{id:id,cours_name:value}]);
        }
    };

    const getEnrolledCourses = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_enrolled_courses", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const enrolled_courses = data.data.courses
        setEnrolledCourses(enrolled_courses)
    }

    useEffect(() => {
        getEnrolledCourses()
    }, [])

    const getAssignments = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_assignments", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        console.log(data)
        const assignments = data.data.courses
        setAssignments(assignments)
    }

    useEffect(() => {
        getAssignments()
    }, [])

    return (
        <>

            <form onSubmit={onSubmit} className={'courses-section'}>
                <div className="flex">
                    <div className="courses-register">
                        <h1>Courses Register</h1>
                        <div className="courses">
                            {courses.map((cours, index) => (
                                <div className="checkbox-container">
                                    <input type={"checkbox"}
                                        id={cours._id}
                                        className={"checkbox"}
                                        key={index}
                                        value={cours.cours_name}
                                        onChange={handleChange} />
                                    <label>{cours.cours_name}</label>
                                </div>
                            ))}
                        </div>
                        <input type={"submit"} value="register" className="register-btn" />
                    </div>
                    <div className="courses-register">
                        <h1>Enrolled courses</h1>
                        {enrolled_courses.map((cours, index) => (
                            <div className="enrolled-list" >
                                <ul className="list">
                                    <li>{cours.cours_name}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
            <form >
                <div className="assignment-section">
                    <h1>Assignments</h1>
                    <div className="assignments-list">
                    {assignments.map((assignment, index) => (
                               <li >{assignment.the_assignment}
                               <button>asdf</button></li>
                    ))}
                    
                    </div>
                </div>
            </form>

        </>
    )
}

export default Students