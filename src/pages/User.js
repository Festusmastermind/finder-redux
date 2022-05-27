import { useEffect } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDatas } from "../redux"
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

    //using useSelector to access the State in the Store 
    const { user, repos, loading } = useSelector((state) => state.gitHubUserReducer);

    //NB: to create alias e.g. location: LocateMe
    const { name, type, avatar_url, location, bio, blog, twitter_username, login, html_url, followers, following,
        public_repos,
        public_gists,
        hireable,
    } = user;

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="container mt-5 py-2">
            <div className="mb-2">
                <Link to="/" className="btn btn-outline-secondary"><h6>Back to Search</h6></Link>
            </div>
            <div className="d-flex mb-4">
                <div className="card bg-dark text-white imgContainer">
                    <img src={avatar_url} className="card-img" alt="profile pics" />
                    <div className="card-img-overlay">
                        <div className="card-body justify-end">
                            <h2 className="card-title mb-0"><small>{name}</small></h2>
                            <p>{login}</p>
                        </div>
                    </div>
                </div>
                {/* create another flex item that will contain my designs.. */}
                <div className="detailStyle">
                    <h2 className="hStyle mb-2">{name}</h2>
                    <p>{bio}</p>
                    <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-secondary"> Visit Github Profile</a>

                    <div className="addressContainer">
                        <div className="card bg-secondary mt-5 text-white">
                            <div className="addressStyle">
                                {location && (
                                    <div className="locateStyle">
                                        <h5>Location</h5>
                                        <h6>{location}</h6>
                                    </div>
                                )}
                                {blog && (
                                    <div className="locateStyle">
                                        <h5>Website</h5>
                                        <h6>{blog}</h6>
                                    </div>
                                )}
                                {twitter_username && (
                                    <div className="locateStyle">
                                        <h5>Website</h5>
                                        <h6 className="linkStyle"><a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">{twitter_username}</a></h6>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Statistics Information */}
            <div className="parentContainer">
                <div className="card">
                    <div className="statContainer">
                        <div className="followerCont">
                            <div className="leftText"><h5>Followers</h5><span>{followers}</span></div>
                        </div>
                        <FaUsers size={'4rem'} />
                    </div>
                </div>
                <div className="card">
                    <div className="statContainer">
                        <div className="followerCont">
                            <div className="leftText"><h6>Following</h6><span>{following}</span></div>
                        </div>
                        <FaUserFriends size={'4rem'} />
                    </div>
                </div>
                <div className="card">
                    <div className="statContainer">
                        <div className="followerCont">
                            <div className="leftText"><h5>Public Repos</h5><span>{public_repos}</span></div>
                        </div>
                        <FaCodepen size={'4rem'} />
                    </div>
                </div>
                <div className="card">
                    <div className="statContainer">
                        <div className="followerCont">
                            <div className="leftText"><h5>Public Gists</h5><span>{public_gists}</span>
                            </div>
                        </div>
                        <FaStore size={'4rem'} color={'purple'}/>
                    </div>
                </div>
            </div>


            {/* List of respositories of the users is shown in the Repolist component */}
            <RepoList repos={repos} />
        </div>
    );
}

export default User;
