import { useState, useEffect } from "react";
import axios from "axios";

const Students = ({ onRegister, onSubmitAnswer }) => {
    const [courses, setCourses] = useState([]);
    const [registercourses, setRegisterCourses] = useState([]);
    const [enrolled_courses, setEnrolledCourses] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [announcements, setAnnouncement] = useState([]);
    const [answer, setAnswer] = useState('');

    // fetch api to get the courses
    const getCourses = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_courses", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const courses = data.data.courses
        setCourses(courses)
    }
    useEffect(() => {
        getCourses()
    }, [])

    // courses registration
    const onSubmit = (e) => {
        e.preventDefault();
        if (registercourses.length == 0) {
            alert("select courses")
            return;
        }

        onRegister(registercourses);

        setRegisterCourses("")
    };
     
    // take the checked courses
    const handleChange = (e) => {
        e.preventDefault();
        const { value, id, checked } = e.target;
        if (checked) {
            setRegisterCourses(prev => [...prev, { id: id, cours_name: value }]);
        }
    };

    // Submit answer
    const onAnswer = (e) => {
        e.preventDefault();
        if (!answer) {
            alert("write an answer")
            return;
        }

        onSubmitAnswer(answer);

        setAnswer("")
    };

    // get enrolled courses
    const getEnrolledCourses = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_enrolled_courses", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const enrolled_courses = data.data.courses
        setEnrolledCourses(enrolled_courses)
    }

    useEffect(() => {
        getEnrolledCourses()
    }, [])

    // get asignments
    const getAssignments = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_assignments", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const assignments = data.data.courses
        setAssignments(assignments)
    }

    useEffect(() => {
        getAssignments()
    }, [])

    //  get announcement
    const getAnnouncement = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_announcements", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const announcements = data.data.courses
        setAnnouncement(announcements)
    }

    useEffect(() => {
        getAnnouncement()
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
            <form onSubmit={onAnswer} className="section-two" >
                <div className="assignment-section">
                    <h1>Assignments</h1>
                    <div className="assignments-list">
                        {assignments.map((assignment, index) => (
                            <div className="answer-section">
                                <h4> {assignment.the_assignment} </h4>
                                <input
                                    id={index}
                                    type={'text'}
                                    className='answer-input'
                                    placeholder="Enter your answer here"
                                    value={answer}
                                    key={index}
                                    onChange={(e) => setAnswer(e.target.value)} />
                                <input type={"submit"} value="Submit" className="submit-btn" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="announcement-section">
                    <h1>Announcement</h1>
                    {announcements.map((announcement, index) => (
                        <div className="answer-section">
                            <h4> {announcement.the_Announcement} </h4>
                        </div>
                    ))}
                </div>
            </form>

        </>
    )
}

export default Students