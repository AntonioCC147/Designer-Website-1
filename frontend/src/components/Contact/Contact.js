import Instagram from '../../assets/icons/Instagram.png';
import Facebook from '../../assets/icons/Facebook.png';

import './Contact.css'

export default function Contact() {
    return (
        <div className="containerContact text-center d-flex justify-content-center align-items-center flex-column" id="contact">
            <p className="title1Contact">Contact</p>
            <p className="title2Contact">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            <div className="boxMenuContact">
                <a href="/"><img src={Instagram} className="m-auto socialImageContact" alt="Instagram"/></a>
                <a href="/"><img src={Facebook} className="m-auto socialImageContact" alt="Instagram"/></a>
                <a href="/"><img src={Instagram} className="m-auto socialImageContact" alt="Instagram"/></a>
            </div>
            <p className="title3Contact">xxxx xxx xxx</p>
            <p className="title3Contact">xxxxxx@gmail.com</p>
            <div className="boxMenuContact">
                <a href="/"><p className="menuContact">Home</p></a>
                <a href="#about"><p className="menuContact">About</p></a>
                <a href="#services"><p className="menuContact">Services</p></a>
                <a href="#portofolio"><p className="menuContact">Portofolio</p></a>
                <a href="#pricing"><p className="menuContact">Pricing</p></a>
            </div>
            <p className="copyRight">© {new Date().getFullYear()} Copyright | Website made by{' '}
                <a href="https://antoniocrantea.software/" target="_blank" style={{color: "#FFFFFF"}} rel="noreferrer">
                    Crantea Antonio-Cristian
                </a>
            </p>
        </div>
    )
}