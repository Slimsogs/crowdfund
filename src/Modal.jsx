import React from "react"
import closeMenu from './images/closeMenu.svg';
import "./Modal.css";


const Modal = ({open,handleOnClose1}) => {
    if(!open) return null;

    return(
        <div className="overlay">
            <div className="modalContainer">
                    <img src= {closeMenu} alt="" id="close" onClick={handleOnClose1}/>
                <ul className={`navlist ${open ? 'navlist-active' : '' }`}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Get Started</a></li>

                </ul>
            </div>
        </div>
    )
}
export default Modal