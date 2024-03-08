import { useInView } from 'react-intersection-observer';

import Button from 'react-bootstrap/Button';

import Shape from '../../assets/images/Shape.png';
import Line from '../../assets/icons/Line.png';
import Verify from '../../assets/icons/Verify.png';
import NotVerify from '../../assets/icons/NotVerify.png';

import './Pricing.css';

export default function Pricing() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <div className="containerPricing text-center" id="pricing">
            <div class="containerShape">
                <img src={Shape} class="imageShape" alt="Shape"/>
            </div>
            <p className="title1Pricing">Pricing</p>
            <p className="title2Pricing">Pricing Plans</p>
            <img src={Line} alt="Line"/>
            <div ref={ref} className={`containerBoxPricing pricingContainerWrapper ${inView ? 'pricingContainerWrapperVisible' : ''}`}>
                <div class="cardBoxPricing" style={{marginTop: "50px", marginBottom: "25px"}}>
                    <p className="cardTitle">Basic</p>
                    <p className="cardPrice">25 EUR</p>
                    <p className="cardDescription">1 basic text logo without any drawing or symbol + png</p>
                    <hr/>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">1 concept included</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Logo transparency</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Printable file</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Include source file</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Include 3D mockup</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Include social media kit</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Vector file</span>
                    </div>
                    <div className="text-center">
                        <Button className="buttonPricing" href="#contact">Choose Plan</Button>
                    </div>
                </div>
                <div class="cardBoxPricing" style={{marginTop: "25px", marginBottom: "50px"}}>
                    <p className="cardTitle">Standard</p>
                    <p className="cardPrice">35 EUR</p>
                    <p className="cardDescription">2 logo design concept, JPG + PNG + PDF + Ai source file + 3D mockup</p>
                    <hr/>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">2 concept included</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Logo transparency</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Printable file</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Include source file</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Include 3D mockup</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Include social media kit</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Vector file</span>
                    </div>
                    <div className="text-center">
                        <Button className="buttonPricing" href="#contact">Choose Plan</Button>
                    </div>
                </div>
                <div className="cardBoxPricing" style={{marginTop: "0%"}}>
                    <p className="cardTitle">Premium</p>
                    <p className="cardPrice">60 EUR</p>
                    <p className="cardDescription">3 detalied logo concepts JPG + PNG + EPS vector source + social media kit</p>
                    <hr/>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">3 concept included</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Logo transparency</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Printable file</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Include source file</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Include 3D mockup</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Include social media kit</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Vector file</span>
                    </div>
                    <div className="text-center">
                        <Button className="buttonPricing" href="#contact">Choose Plan</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}