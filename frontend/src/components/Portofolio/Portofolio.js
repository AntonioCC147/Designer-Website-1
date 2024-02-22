import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';

import Line from '../../assets/icons/Line.png';
import Project from '../../assets/images/Project.jpg'

import "react-multi-carousel/lib/styles.css";
import './Portofolio.css';

export default function Portofolio() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="containerPortofolio">
            <Button className="buttonPortofolio">All Works</Button>
            <p className="title1Portofolio">Portofolio</p>
            <p className="title2Portofolio">Latest Projects</p>
            <img src={Line} alt="Line"/>
            <Carousel responsive={responsive} className="carousel text-center">
                <div>
                    <div>
                        <img src={Project} className="imageCarousel" alt="Project"/>
                    </div>
                    <div>
                        <p className="titleCarousel">Website Design Portofolio</p>
                        <p className="descriptionCarousel">Web Design</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Project} className="imageCarousel" alt="Project"/>
                    </div>
                    <div>
                        <p className="titleCarousel">Website Design Portofolio</p>
                        <p className="descriptionCarousel">Web Design</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Project} className="imageCarousel" alt="Project"/>
                    </div>
                    <div>
                        <p className="titleCarousel">Website Design Portofolio</p>
                        <p className="descriptionCarousel">Web Design</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Project} className="imageCarousel" alt="Project"/>
                    </div>
                    <div>
                        <p className="titleCarousel">Website Design Portofolio</p>
                        <p className="descriptionCarousel">Web Design</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Project} className="imageCarousel" alt="Project"/>
                    </div>
                    <div>
                        <p className="titleCarousel">Website Design Portofolio</p>
                        <p className="descriptionCarousel">Web Design</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}