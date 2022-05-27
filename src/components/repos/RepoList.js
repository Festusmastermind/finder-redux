import React from 'react'
import RepoItem from "./RepoItem"

function RepoList({ repos }) {

    return (
        <div className="card mt-5 shadow-lg rounded">
            <div className="card-body p-5"><h2><b>Lastest Repositories</b></h2>
                {
                    repos.map((repo) => {
                        return <RepoItem key={repo.id} {...repo} />
                    })
                }
            </div>
        </div>
    )
}

export default RepoList