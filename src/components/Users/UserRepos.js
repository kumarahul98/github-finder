import React from 'react';
import PropTypes from 'prop-types';

const UserRepos = ({ repo }) => {

    return <div className="card" style={{ display: "inline", fontSize: "1rem", padding: "1rem" }}><a href={repo.html_url}> {repo.name}</a> {repo.description && <span>: {repo.description}</span>}</div>;
}

UserRepos.propTypes = {
    repo: PropTypes.shape([]).isRequired,
};
// #endregion

export default UserRepos;