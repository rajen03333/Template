import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        
        <span>React Template</span>
      </div>

      <div className="user-profile">
        <div className="profile-image">
         
        </div>
        <p className="user-type">Name</p>
        <p className="user-name">John Doe</p>
      </div>

      <ul className="sidebar-nav">
        
       
      </ul>
      <div className="powered-by">
        
      </div>
    </div>
  );
}
export default React.memo(Sidebar);
