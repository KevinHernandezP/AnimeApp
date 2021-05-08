import React from "react";
import './Toolbar.css';
import { NavDropdown,Navbar,Nav } from 'react-bootstrap';


const Toolbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  className="dark px-4">
                <Navbar.Brand href="#home" className="py-1 text-white fw-bold logo px-5">AnimeApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto ">
                   
                        </Nav>
                    <Nav className="py-1 p-3 p-4">
                        <Nav.Link href="#deets" className="text-white texto " style={{color:"blue"}}>Home</Nav.Link>
                        <Nav.Link href="#deets" className="text-white texto btn-custom">Animes</Nav.Link>
                        <Nav.Link href="#deets" className="text-white texto">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>





        </div>

    )
};

export default Toolbar;


