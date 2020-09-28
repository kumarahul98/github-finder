import React from "react";
import { FaInfo } from "react-icons/fa";

const Alert = ({alert}) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FaInfo /> {alert.msg}
      </div>
    )
  );
};
export default Alert;
