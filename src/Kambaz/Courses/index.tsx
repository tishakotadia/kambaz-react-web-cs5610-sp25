import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { useSelector } from "react-redux"; // ✅ Import useSelector
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import AssignmentEditorView from "./Assignments/AssignmentEditorView";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  
  // ✅ Select courses from Redux state
  const courses = useSelector((state: any) => state.coursesReduccer.courses);

  // ✅ Find the course dynamically based on updated state
  const course = courses.find((course: any) => course._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course Not Found"} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Zoom" element={<h2>Zoom</h2>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Assignments/:aid/AssignmentEditorView" element={<AssignmentEditorView />} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<h2>Grades</h2>} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Settings" element={<h2>Settings</h2>} />
            <Route path="AssignmentEditor" element={<AssignmentEditor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
