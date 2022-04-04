import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './'

const Header = () => {
    return (
        <nav>
            <Link to="/" >HOME</Link>
            <Link to="/review" >REVIEW</Link>
            <Link to="/deshboard" >DESHBOARD</Link>
            <Link to="/blog" >BLOG</Link>
            <Link to="/about" >ABOUT</Link>
        </nav>
    );
};

export default Header;