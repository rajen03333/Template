import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../_actions";
function Navbar(props) {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="navbar-title"></div>
      <div className="navbar-menu">
        <li>
          <button
            onClick={() => {
              dispatch(userActions.logout());
            }}
            className="btn"
          >
            Sign Out
          </button>
        </li>
      </div>
    </div>
  );
}
export default React.memo(Navbar);
