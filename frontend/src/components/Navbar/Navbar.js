import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../assets/icons/FreeLancer.png';

import './Navbar.css';

export default function NavbarComponent() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize(); // Verificăm dimensiunea ferestrei când componenta este montată

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`navbarContainer ${scrolling ? 'scrolled' : ''}`}>
            <Navbar fixed="top" collapseOnSelect expand="xl" className={`navbar ${scrolling ? 'scrolled' : ''}`}>
                <Container>
                    <img src={Logo} className="imageLogo" alt="Logo"/>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={`me-auto navbarCenter ${scrolling ? 'scrolled' : ''}`}>
                            <Nav.Link href="#home" className={`navbarText ${scrolling ? 'scrolled' : ''}`}>Home</Nav.Link>
                            <Nav.Link href="#about" className="navbarText">About</Nav.Link>
                            <Nav.Link href="#services" className="navbarText">Services</Nav.Link>
                            <Nav.Link href="#portofolio" className="navbarText">Portofolio</Nav.Link>
                            <Nav.Link href="#pricing" className="navbarText">Pricing</Nav.Link>
                            <Nav.Link href="#contact" className="navbarText">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}