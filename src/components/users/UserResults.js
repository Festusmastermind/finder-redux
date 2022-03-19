import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

function UserResults() {
    //access what you need from the redux-store
    const { loading, users } = useSelector((state) => state.gitHubUserReducer);

    //if loading is false return the data if not ...return spinner
    return !loading ? (
        <div className="row">
            {users.map((user) => (
                <div className="col-md-3 mb-2">
                    <div className="card shadow-lg rounded">
                        <div className="card-body">
                            {" "}
                            <UserItem key={user.id} user={user} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <Spinner />
    );
}

export default UserResults;

