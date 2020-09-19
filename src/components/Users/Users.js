import React from 'react'
import UserItem from './UserItem';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import PropTypes from 'prop-types';

const Users = (props) => {
    if (props.loading) {
        return (
            <Loader type="Puff" color="#00BFFF" style={centered} height={80} width={80} />
        )
    }
    else {
        return (
            <div className="row container " style={center}>
                {props.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
const centered = {
    position: 'fixed', /* or absolute */
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
const center = {
    margin: 'auto',
    padding: '2rem'
}
export default Users
