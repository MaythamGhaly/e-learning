import { useState, useEffect } from "react";
import axios from "axios";

const Student = (onSubmit) => {
    const [courses, setCourses] = useState([]);


    const getCourses = async () => {

        const data = await axios.get("http://127.0.0.1:8000/api/get_courses", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const courses = data.data.courses
        console.log(courses)
        setCourses(courses)
    }
    useEffect(() => {
        getCourses()
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        if (!courses) alert("fill all the informations");

        onRegisterCourses({ courses });

        setCourses("")
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="courses-register">
                    <div className="courses">
                        {courses.map((cours, index) => (
                            <div className="checkbox-container">

                                <input type={"checkbox"}
                                    key={index}
                                    id={cours._id}
                                    className={"checkbox"}
                                    value={cours}
                                    onChange={(e) => setCourses(e.target.value)} />
                                <label>{cours.cours_name}</label>
                            </div>
                        ))}
                    </div>
                    <input type={"submit"} value="register" className="register-btn" />
                </div>
            </form>
        </>
    )
}

export default Student