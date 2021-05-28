import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () =>{
    return(
        <div className="header">
            <h2>Re LuCa</h2>
            <h3>Noleggio auto di lusso</h3>
        </div>
    );
}

export default Header;