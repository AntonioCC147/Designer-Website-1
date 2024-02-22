import Line from '../../assets/icons/Line.png';
import Design from '../../assets/icons/Design.png';

import './Services.css';

export default function Services() {
    return (
        <div className="containerServices text-center" id="services">
            <p className="title1Services">Services</p>
            <p className="title2Services">Service I Provide</p>
            <img src={Line} alt="Line"/>
            <div class="containerBox">
                <div class="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Graphic Designer</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div class="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Graphic Designer</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div class="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Graphic Designer</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div class="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Graphic Designer</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div class="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Graphic Designer</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
                <div class="cardBox">
                    <img src={Design} className="imageCard" alt="Design"/>
                    <p className="cardTitle">Graphic Designer</p>
                    <p className="cardDescription">Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum Lorem ipsum is a lorem ipsum</p>
                </div>
            </div>
        </div>
    )
}