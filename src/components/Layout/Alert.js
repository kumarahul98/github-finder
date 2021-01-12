import React, {useContext} from "react";
import { FaInfo } from "react-icons/fa";
import AlertContext from "../../context/alert/AlertContext";
import AlertState from '../../context/alert/AlertState';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <FaInfo /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
