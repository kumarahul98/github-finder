import React, { Component } from 'react'
import UserItem from './UserItem';
class Users extends Component {
    state = {
        User: [
            {
                id: "1",
                user: "@kumarahul",
                avtar_url: "https://avatars1.githubusercontent.com/u/32619505?s=400&u=0bca6817342ae9eba8acb2749851fcf653cb8184&v=4",
                profile_url: "https://github.com/kumarahul98"

            },
            {
                id: "2",
                user: "@kumarahul",
                avtar_url: "https://avatars1.githubusercontent.com/u/32619505?s=400&u=0bca6817342ae9eba8acb2749851fcf653cb8184&v=4",
                profile_url: "https://github.com/kumarahul98"

            },
            {
                id: "3",
                user: "@kumarahul",
                avtar_url: "https://avatars1.githubusercontent.com/u/32619505?s=400&u=0bca6817342ae9eba8acb2749851fcf653cb8184&v=4",
                profile_url: "https://github.com/kumarahul98"

            }]
    };
    render() {
        return (
            <div className="row">
                {this.props.users.map(user => (
                    <UserItem id={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default Users
