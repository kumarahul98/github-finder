import React, { Fragment } from "react";

const UserItem = (props) => {
  //Destructure 
  const { id, login, avatar_url, html_url } = props.user;
  return (
    <Fragment>
      <div className="card " style={{ width: '11rem', margin: '1rem' }}>
        <img className="card-img-top rounded-circle" src={avatar_url} alt="user-avatar" />
        <div className="card-body text-center">
          <h5 className="card-title">{login}</h5>
          <a href={html_url}><button className="btn-dark" >More</button></a>
        </div>
      </div>
    </Fragment >
  );

}

export default UserItem;