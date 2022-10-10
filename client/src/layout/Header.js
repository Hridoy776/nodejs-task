import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    const style={
        marginLeft:'10px'
    }
    return (
        <nav className='flex justify-center text-xl uppercase'>
            <ul>
                <Link to="/">home</Link>
                <Link className="ml-3" to="/profile">profile</Link>
                <Link className="ml-3" to="/login">login</Link>
                <Link className="ml-3" to="/register">register</Link>
                
            </ul>
        </nav>
    );
};

export default Header;