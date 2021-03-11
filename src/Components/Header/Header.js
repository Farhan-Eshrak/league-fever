import React from 'react';
import './Header.css'
import { Jumbotron } from 'react-bootstrap';
const Header = () => {
    return (
        
<Jumbotron fluid id='header'>
    <div className="container ">
        <h1 className='text-light d-flex justify-content-center align-items-cenetr mt-5'>
            League Fever
        </h1>
    </div>
</Jumbotron>
       
    );
};

export default Header;