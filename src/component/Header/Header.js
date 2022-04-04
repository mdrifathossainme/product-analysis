import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <nav className='flex justify-center	py-8 bg-[#2e3267] sticky'>
            <CustomLink className="px-5 font-semibold text-lg" to="/" >HOME</CustomLink>
            <CustomLink className="px-5 font-semibold text-lg" to="/review" >REVIEW</CustomLink>
            <CustomLink className="px-5 font-semibold text-lg" to="/deshboard" >DESHBOARD</CustomLink>
            <CustomLink className="px-5 font-semibold text-lg" to="/blogs" >BLOG</CustomLink>
            <CustomLink className="px-5 font-semibold text-lg" to="/about" >ABOUT</CustomLink>
            <hr/>
        </nav>
    );
};

export default Header;