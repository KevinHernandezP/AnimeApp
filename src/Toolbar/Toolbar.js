import React from "react";
import './Toolbar.css';
import { NavDropdown,Navbar,Nav } from 'react-bootstrap';


const Toolbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  className="dark">
                <Navbar.Brand href="#home" className="p-2 text-white fw-bold m-2">AnimeApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto ">
                   
                        </Nav>
                    <Nav className="p-3">
                        <Nav.Link href="#deets" className="text-white texto" style={{color:"blue"}}>Home</Nav.Link>
                        <Nav.Link href="#deets" className="text-white texto btn-custom">Animes</Nav.Link>
                        <Nav.Link href="#deets" className="text-white texto">Contact us</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>





        </div>

    )
};

export default Toolbar;


