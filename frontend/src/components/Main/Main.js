import { useInView } from 'react-intersection-observer';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Avatar from '../../assets/images/Avatar.png';

import NavbarComponent from '../Navbar/Navbar';
import SocialIcons from '../SocialIcons/SocialIcons';

import './Main.css'

export default function Main() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <div className="containerMain" id="home">
            <NavbarComponent/>
            <Row>
                <SocialIcons/>
                <Col sm={12} md={6} ref={ref} className={`textContainerWrapper ${inView ? 'textContainerWrapperVisible' : ''}`}>
                    <p className="title1Main">Hello, I'm</p>
                    <p className="title2Main">Lorem Ipsum</p>
                    <p className="title3Main">Professional Freelance Web Designer</p>
                    <p className="title4Main">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                    <Button className="buttonMain">Hire me</Button>
                </Col>
                    <Col sm={12} md={6} ref={ref} className={`imageContainerWrapper ${inView ? 'imageContainerWrapperVisible' : ''}`}>
                    <img src={Avatar} className="imageMain" alt="Avatar"/>
                </Col>
            </Row>
        </div>
    )
}