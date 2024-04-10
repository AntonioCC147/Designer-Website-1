import { useInView } from 'react-intersection-observer';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProgressBar from './ProgressBar';

import Avatar from '../../assets/images/AboutAvatar.png';
import Line from '../../assets/icons/Line.png';

import './About.css';

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className="containerAbout" id="about">
            <Row>
                <Col xs={12} sm={12} md={6} className="alignCol">
                    <div ref={ref} className={`imageAboutWrapper ${inView ? 'imageAboutWrapperVisible' : ''}`}>
                        <img src={Avatar} className="imageAbout" alt="Avatar" />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <p className="title1About">About</p>
                    <p className="title2About">Why You Hire Me?</p>
                    <img src={Line} alt="Line" />
                    <p className="title3About">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
                    <div className="containerBar">
                        <p className="title4About">UI / UX Design</p>
                        <span className="procentBar">80%</span>
                    </div>
                    <ProgressBar percentage={80} />
                    <div className="containerBar">
                        <p className="title4About">Web Design</p>
                        <span className="procentBar">70%</span>
                    </div>
                    <ProgressBar percentage={70} />
                    <div className="containerBar">
                        <p className="title4About">Web Develompent</p>
                        <span className="procentBar">50%</span>
                    </div>
                    <ProgressBar percentage={50} />
                    <div className="containerBar">
                        <p className="title4About">Performance</p>
                        <span className="procentBar">70%</span>
                    </div>
                    <ProgressBar percentage={70} />
                </Col>
            </Row>
        </div>
    )
}