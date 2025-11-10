import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.png'
import '../assets/styles/navbar.scss'

const navLinkStyles = ({isActive}) => ({
    background: isActive ? "#d9d9d9" : "#f3722c",
    border: isActive ? "3px solid #cddafd" : "2px solid #f8961e",
    fontWeight: isActive ? "bolder" : "bold",
    padding: isActive ? "1.2em" : "1em",
});


function Navbar({ scrollpos }){
    function handleScroll(){
        console.log(window.scroll);
    }

    function handleClick(){
        // let burger_menu_but = document.querySelector('.mobile-menu');
        let burger_menu_lines = document.querySelectorAll('.mobile-menu span');
        let overlay = document.querySelector("#overlay");
        let body = document.querySelector("body");
        let menu = document.querySelector(".menu");
        // let burg_react = [burger_menu_but, overlay];
        
        burger_menu_lines[2].classList.toggle('direction_changer');
        burger_menu_lines[1].classList.toggle('disappear_block');
        burger_menu_lines[0].classList.toggle('direction_changer_2');
        menu.classList.toggle('transfer_block');
        overlay.classList.toggle('disappear_block');
        body.classList.toggle('overfloq_hide');
    }

    return createPortal(
        <section>
            <div id='overlay' className='disappear_block' onClick={handleClick}></div>
            <div className="menu"  onClick={handleClick}>
                <NavLink to="/main_page/en" style={navLinkStyles}>English Version</NavLink>
                <NavLink to="/main_page/pl" style={navLinkStyles}>Polska Wersja</NavLink>
                <NavLink to="/info_page" style={navLinkStyles}>Informacja</NavLink>
                <NavLink to="/sources" style={navLinkStyles}>Żródłą</NavLink>
            </div>
            <div className='main-block'>
                <div className='mobile-menu' onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='desktop-menu'>
                    <NavLink to="/main_page/en" style={navLinkStyles}>English Version</NavLink>
                    <NavLink to="/main_page/pl" style={navLinkStyles}>Polska Wersja</NavLink>
                    <NavLink to="/info_page" style={navLinkStyles}>Informacja</NavLink>
                    <NavLink to="/sources" style={navLinkStyles}>Żródłą</NavLink>
                </div>
                <img alt='Logo' src={logo} className='logo'/>
            </div>
        </section>,
        document.body
    );
}

export default Navbar;