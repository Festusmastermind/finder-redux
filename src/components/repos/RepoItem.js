import React from 'react'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoItem({ name, description, html_url, forks, open_issues, watchers_count, stargazers_count }) {

    return (
        <div className="card mb-2 bg-dark text-white">
            <div className="card-body">
                <h3 className="mb-2">
                    <a href={html_url}>
                        <FaLink className="mr-1" /> {name}
                    </a>
                </h3>
                <p className="mb-3">{description}</p>
                <div>
                    <span className="badge rounded-pill bg-primary mr-1">
                        <FaEye className="mr-2" /> {watchers_count}
                    </span>
                    <div className="badge rounded-pill bg-warning mr-1">
                        <FaStar className="mr-2" /> {stargazers_count}
                    </div>
                    <div className="badge rounded-pill bg-success mr-1">
                        <FaInfo className="mr-2" /> {open_issues}
                    </div>
                    <div className="badge rounded-pill bg-info mr-1">
                        <FaUtensils className="mr-2" /> {forks}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RepoItem