import React from 'react'
import UserItem from './UserItem';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Users = (props) => {
    if (props.loading) {
        return (
            <Loader type="Puff" color="#00BFFF" style={centered} height={80} width={80} />
        )
    }
    else {
        return (
            <div className="row">
                {props.users.map(user => (
                    <UserItem id={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const centered = {
    position: 'fixed', /* or absolute */
top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
export default Users
