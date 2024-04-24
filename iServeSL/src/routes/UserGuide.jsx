import React from "react";
import Sidebar from "../components/Sidebar";
import UserGuideContent from "../components/UserGuideContent";
import "../styles/sidebar.css";

const UserGuide = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <UserGuideContent />
      </div>
    </div>
  );
};

export default UserGuide;
