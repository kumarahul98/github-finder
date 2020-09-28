import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  //Destructure
  const { login, avatar_url } = props.user;
  return (
    <Fragment>
      <div
        className="card col-md-2 "
        style={{ width: "11rem", margin: "1rem" }}
      >
        <img
          className="card-img-top rounded-circle"
          src={avatar_url}
          alt="user-avatar"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{login}</h5>
          <Link to={`/user/${login}`}>
            <button className="btn-dark">More</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default UserItem;
