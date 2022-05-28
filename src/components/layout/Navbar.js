import { FaGithub } from "react-icons/fa";
import { Link} from "react-router-dom";



function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="#" className="navbar-brand"> <FaGithub className="d-inline-block align-text-top" /> GitHub-Finder</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                         {/* <li className="nav-item" >
                            <NavLink to="/" style={({isActive}) => isActive 
                            ? {color: '#fff', background: '#7600dc'} 
                            : {color: '#545e6f', background: '#f0f0f0'}} >
                            Home</NavLink>
                         </li> */}
                         <li className="nav-item" >
                            <Link className="nav-link text-uppercase" to="/">Home</Link>
                         </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link text-uppercase" to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
