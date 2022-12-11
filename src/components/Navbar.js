import React from "react";
import {FaSearch} from "react-icons/fa"

const Navbar =()=>{
    return(
        <div className="navbar">
            <div className="row container">
                <div className="col-1">
                    <h2><span>MULTI</span><span>SHOP</span></h2>
                </div>
                <div className="col-2">
                    <form action="">
                        <input type="text" placeholder="Search For Product" />
                        <button><FaSearch/></button>
                    </form>
                </div>
                <div className="col-3">
                    <p>Customer Service</p>
                    <big>+012 345 6789</big>
                </div>
            </div>
        </div>
    )
}

export default Navbar;