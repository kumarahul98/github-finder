import React, { useEffect, useContext } from 'react'
import { FiCheckSquare, FiExternalLink } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import UserRepos from "./UserRepos";
import GithubContext from "../../context/github/githubContext";


const User = ({ match}) => {
  const githubContext = useContext(GithubContext);
  const {getUser, user, repos} = githubContext;
  useEffect(()=> {
    getUser(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const { avatar_url, bio, blog, company, email, followers, following, login, name, public_repos, html_url, hireable } = user;
    return (
      <div className="container">
        <div className="card " style={{margin:".5rem"}}>
          <div className="card-header d-flex justify-content-center">
            @{login}
          </div>
          <div className="card-body row d-flex justify-content-center" style={{ margin: "0rem" }}>
            <div className="span6">
              <h5 className="card-title d-flex justify-content-center">{name}</h5>
              <img src={avatar_url} className="rounded-circle d-flex justify-content-center" style={{width: "15rem",margin: "1rem"}} alt="img" />
              <a href={html_url} className="btn btn-dark d-flex justify-content-center">Github<FiExternalLink/></a>
            </div>
            <div className="span6" style={{marginLeft: "5rem"}} >
              <h3>BIO</h3>
              <p>{bio}</p>
              <hr></hr>
              {login && <h4>UserName: {login}</h4>}
              {company && (<h4>Company: {company}</h4>)}
              {blog&& (<h4>Website: {blog}</h4>)}
              {email && <h4>Email: {email}</h4>}
              <h4><strong>{hireable ? <FiCheckSquare className="text-success" /> : <AiOutlineCloseCircle className="text-danger"/>} Hireable</strong></h4>
            </div>
          </div>
        </div>
        <div className="card row" style={{ margin: ".5rem" }} >
          <div className="d-flex justify-content-center">
          <span className="badge  badge-danger" style={{width: "10rem", margin: "1rem", fontSize:"1rem"}}>Followers:{followers}</span>
            <span className="badge  badge-success" style={{ width: "10rem", margin: "1rem", fontSize: "1rem" }}>Following:{following}</span>
            <span className="badge  badge-primary" style={{ width: "10rem", margin: "1rem", fontSize: "1rem" }}>Public_repos:{public_repos}</span>
          </div>
        </div>
        <div className="card row" style={{ margin: ".5rem" }} >
          {repos.map(repo => <UserRepos key={repo.id} repo={repo} /> )}
        </div>
      </div>
    )

}

export default User;
