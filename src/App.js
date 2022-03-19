import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import NotFound from "./pages/NotFound";
import User from "./pages/User";



//import Footer from "./components/layout/Footer";


function App() {
   
    return (
        <Provider store={store} >
            <Router>
                <ToastContainer />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user/:login" element={<User />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/*" element={<NotFound />} /> {/**This means that all pages that does not existed */}
                </Routes>
                {/* <Footer /> */}
            </Router>
        </Provider>
       
    );
}

export default App;
