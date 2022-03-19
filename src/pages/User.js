import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getUserDatas } from "../redux"
import Spinner from "../components/layout/Spinner"
import RepoList from "../components/repos/RepoList"



function User() {
    const dispatch = useDispatch();
    const params = useParams();
    //console.log(params.login);  this is the username gotten from the URL (which name is login)

    //NB: GetUser and UserRepos on load of this component...
    useEffect(() => {
       
        dispatch(getUserDatas(params.login)) //invoke the functions..
    }, [dispatch, params.login]);

    //using useSelector to access the States in the Store 
    const { user, repos, loading} = useSelector((state) => state.gitHubUserReducer);
    //console.log(user)  //i don't know why this is consoling out three times..
    //destructured the user object even further
    const {name, type, avatar_url, location, bio, blog, twitter_username, login, html_url, followers, following,
        public_repos,
        public_gists,
        hireable,
    } = user;

   if(loading){
      return  <Spinner />
   }

    return (
        <div className="container mt-5 py-2">
            <div className="mb-2">
                <Link to="/" className="btn btn-outline-secondary"><b>Back to Search</b></Link>
            </div>
            <div className="d-flex">
                <div className="card bg-dark text-white">
                    <img src={avatar_url} className="card-img" alt="profile pics" height={400} />
                    <div className="card-img-overlay">
                        <div className="card-body justify-end">
                            <h2 className="card-title mb-0">{name}</h2>
                            <p>{login}</p>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
            <RepoList repos={repos} />
        </div>
    );
}

export default User;
