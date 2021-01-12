import React, { useContext} from 'react'
import UserItem from './UserItem';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext)
    const {loading, users} = githubContext;
    console.log(users);
    if (loading || !users ) {
        return (
            <Loader type="Puff" color="#00BFFF" style={centered} height={80} width={80} />
        )
    }
    else {
        return (
            <div className="row container " style={center}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
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
const center = {
    margin: 'auto',
    padding: '2rem'
}
export default Users
