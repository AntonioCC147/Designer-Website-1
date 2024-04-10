import { useInView } from 'react-intersection-observer';

import Line from '../../assets/icons/Line.png';
import Design from '../../assets/icons/Design.png';

import './Services.css';

export default function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <div className="containerServices text-center" id="services">
            <p className="title1Services">Services</p>
            <p className="title2Services">Service I Provide</p>
            <img src={Line} alt="Line"/>
            <div ref={ref} className={`containerBox boxContainerWrapper ${inView ? 'boxContainerWrapperVisible' : ''}`}>
                <div className="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Logo Design</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div className="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Signature Design</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div className="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Avatar</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div className="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Graphic Designer</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div className="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Figma Website</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div className="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">3D Model</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
            </div>
        </div>
    )
}