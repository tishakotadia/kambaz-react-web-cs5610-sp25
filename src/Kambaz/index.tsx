import { Routes, Route, Navigate } from "react-router";
import Account from "./Account/index";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KambazNavigation from "./Navigation";
import "./styles.css";
import { useSelector } from "react-redux"; // ✅ Import Redux state
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kambaz() {
  // ✅ Get courses dynamically from Redux
  const courses = useSelector((state: any) => state.coursesReduccer.courses);

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          
          {/* ✅ Dashboard is now fully protected */}
          <Route path="/Dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

          {/* ✅ Courses now fetches courses from Redux automatically */}
          <Route path="/Courses/:cid/*" element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />

          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>   
    </div>
  );
}
