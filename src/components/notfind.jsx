import { Link } from "react-router-dom";
import Navbar from "./navbar";
import '../assets/styles/notfind.module.scss';

// Doesn't work? Use link in index.html

function NotFind(){
    return (
        <>
            <Navbar />
            <img className="err" alt="404 NOT FOUND IMAGE" src="/media/images/errimg.png" />
        </>
    );
}

export default NotFind;