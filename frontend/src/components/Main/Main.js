import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Avatar from '../../assets/images/Avatar.png';

import './Main.css'

import NavbarComponent from '../Navbar/Navbar';

export default function Main() {
    return (
        <div className="containerMain">
            <NavbarComponent/>
            <Row className="containerCols">
                <Col sm={12} md={6}>
                    <p className="title1Main">Hello, I'm</p>
                    <p className="title2Main">Bogdan Andries</p>
                    <p className="title3Main">Professional Freelance Web Designer</p>
                    <p className="title4Main">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                    <Button className="buttonMain">Hire me</Button>
                </Col>
                <Col sm={12} md={6} className="imageContainer">
                    <img src={Avatar} className="imageMain" alt="Avatar"/>
                </Col>
            </Row>
        </div>
    )
}