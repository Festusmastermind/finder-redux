import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container py-5">
            <div className="mx-auto py-5">
                <div className="text-center py-5">
                    <h1 className="fs-1 fw-bolder">Oops!</h1>
                    <p className="fs-1">404 - Page Not Found!</p>
                    <Link className="btn btn-primary btn-lg" to="/">
                        <FaHome className="mr-2" />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
