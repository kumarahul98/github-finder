import React from "react";
import { FaInfo } from "react-icons/fa";
import PropTypes from "prop-types";

const Alert = ({alert}) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FaInfo /> {alert.msg}
      </div>
    )
  );
};
Alert.propTypes = {
  alert: PropTypes.shape({}),
}
export default Alert;
