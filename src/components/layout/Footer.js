import React from "react";
import "../../index.css";

function Footer() {
    const footerYear = new Date().getFullYear();
    return (
        <div className="fixed-bottom">
            <footer className="footer bg-dark">
                <div className="container mx-auto">
                    <span className="text-center text-white">
                        Place sticky footer content here.
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
