// import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import universities from "../../../data/universitiesData";
import Sidebar from "../Sidebar";
import DashboardNavbar from "../DashboardNavbar";
import "./UniversityDetail.css";

function UniversityDetail() {
    const navigate = useNavigate();
    const { universityId } = useParams();
    const university = universities.find((uni) => uni.id === universityId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!university) return <p>University not found</p>;

    return (
        <div className="university-detail-page">
            <Sidebar />
            <div className="university-detail-container">
                
                <div className="heading">
                    <h1>{university.name}</h1>
                    <p>{university.description}</p>
                </div>

                <section className="details">
                    <div className="university-logo">
                        <img
                            src={university.logo}
                            alt={university.name}
                            className="university-detail-logo"
                        />
                    </div>
                    <div className="university-info">
                        <h2>About {university.name}</h2>
                        <p>{university.about}</p>
                        <h3>Location</h3>
                        <p>{university.location}</p>
                        <h3>Type</h3>
                        <p>{university.type}</p>
                        <h3>Available Tech Courses</h3>
                        <ul className="uni-detail">
                            {university.techCourses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>

                        <h3>Facilities & Features</h3>
                        <ul className="uni-detail">
                            {university.facilities.map((facility, index) => (
                                <li key={index}>{facility}</li>
                            ))}
                        </ul>
                    </div>
                </section>
                
                <h3>Contact Information</h3>
                <p>Email: {university.contactInfo.email}</p>
                <p>Phone: {university.contactInfo.phone}</p>
                <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website-link"
                >
                    Visit {university.name} Website
                </a>
            </div>
        </div>
    );
}

export default UniversityDetail;
