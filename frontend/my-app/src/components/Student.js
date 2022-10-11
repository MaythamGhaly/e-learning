import { useState, useEffect } from "react";
import axios from "axios";

const Students = ({onRegister}) => {
    const [courses, setCourses] = useState([]);
    const [registercourses, setRegisterCourses] = useState([]);



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
        console.log(registercourses)
        if (registercourses.length == 0){
            alert("select courses") 
            return;
        }

        onRegister( registercourses );

        setRegisterCourses("")
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { value, checked } = e.target;
        if (checked) {
            setRegisterCourses(prev => [...prev, value]);
          }
    };
    

    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>Courses Register</h1>
                <div className="courses-register">
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
            </form>
        </>
    )
}

export default Students