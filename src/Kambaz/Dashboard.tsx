import { Link } from "react-router-dom"; 
export default function Dashboard() { 
    return ( 
    <div id="wd-dashboard"> 
    <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
    <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr /> 
    <div id="wd-dashboard-courses"> 
        <div className="wd-dashboard-course"> 
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" > 
            <img src="/images/web-development.png" width={200} />
            <div>
            <h5> CS5610 Web Development </h5> 
            <p className="wd-dashboard-course-title"> Web Development </p> 
            <button> Go </button> 
            </div> 
            </Link> 
        </div> 
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" > 
            <img src="/images/algorithms.png" width={200} />
            <div>
            <h5> CS5800 Algorithms </h5> 
            <p className="wd-dashboard-course-title"> Algorithms </p> 
            <button> Go </button> 
            </div> 
            </Link> 
        </div> 
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" > 
            <img src="/images/coop.png" width={200} />
            <div>
            <h5> Fall 2024 Career Preparation </h5> 
            <p className="wd-dashboard-course-title"> COOP </p> 
            <button> Go </button> 
            </div> 
            </Link> 
        </div> 
        <div className="wd-dashboard-course"> 
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" > 
            <img src="/images/program-design-paradigm.png" width={200} />
            <div>
            <h5> CS5010 Program Design Paradigm </h5> 
            <p className="wd-dashboard-course-title"> Program Design Paradigm </p> 
            <button> Go </button> 
            </div> 
            </Link> 
        </div> 
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" > 
            <img src="/images/recitation-for-pdp.png" width={200} />
            <div>
            <h5> CS5011 Recitation - Program Design Paradigm </h5> 
            <p className="wd-dashboard-course-title"> Recitation for PDP </p> 
            <button> Go </button> 
            </div> 
            </Link> 
        </div> 
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" > 
            <img src="/images/ai-in-action.png" width={200} />
            <div>
            <h5> Fall 2024 AI in Action </h5> 
            <p className="wd-dashboard-course-title"> AI in Action : Build your AI Toolkit </p> 
            <button> Go </button> 
            </div> 
            </Link> 
        </div> 
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" > 
            <img src="/images/segaf-student-training.png" width={200} />
            <div>
            <h5> NUTEMPS SEGAF Student Training </h5> 
            <p className="wd-dashboard-course-title"> SEGAF Student Training </p> 
            <button> Go </button> 
            </div> 
            </Link> 
        </div> 
    </div> 
    </div> 
);} 