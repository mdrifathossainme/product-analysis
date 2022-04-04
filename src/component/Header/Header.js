import React from 'react';
import CustomLink from '../CustomLink/CustomLink'
import './Header.css'

const Header = () => {
    return (
        <nav className=' cu flex justify-center	py-8 bg-[#2e3267] sticky'>
            <li><CustomLink className="  sm:px-0 font-semibold" to="/" >HOME</CustomLink></li>
            <li><CustomLink className="   font-semibold" to="/review" >REVIEW</CustomLink></li>
            <li> <CustomLink className="  font-semibold" to="/deshboard" >DESHBOARD</CustomLink></li>
            <li><CustomLink className="  font-semibold" to="/blogs" >BLOG</CustomLink>
          </li>
             
            <hr/>
        </nav>
    );
};

export default Header;