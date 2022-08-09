import React from "react";
import "./Updates.css";
import Profile from "../../imgs/profile.png"

const Updates = (props) => {
  return (
    <div className="Updates">
      {props.users.map((update) => {
        return (
          <div key={update.user_id} className="update">
            <img src={Profile} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span><b>{update.name}</b></span>
                <span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa possimus placeat iusto nam, est quisquam.</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
