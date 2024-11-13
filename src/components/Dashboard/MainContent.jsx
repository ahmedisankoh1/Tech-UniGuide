import { Route, Routes, Navigate } from "react-router-dom";
import Overview from "./DashboardSections/Overview";
import Careers from "./DashboardSections/Careers";
import Settings from "./DashboardSections/Settings";
import DashboardHome from "./DashboardSections/DashboardHome";
import DashboardNavbar from "./DashboardNavbar";
import Universities from "./DashboardSections/Universities";

import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <DashboardNavbar />
      <Routes>
        <Route path="/home" element={<DashboardHome />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/explore-universities" element={<Universities />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/home" replace />} />{" "}
      </Routes>
    </div>
  );
}

export default MainContent;
