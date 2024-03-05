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
                    <p className="cardPrice">100 lei</p>
                    <p className="cardDescription">Ceva text aici</p>
                    <hr/>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Minimalist logo</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Simple design</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Creative logo</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Colored design</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Animated logo</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Premium design</span>
                    </div>
                    <div className="text-center">
                        <Button className="buttonPricing">Choose Plan</Button>
                    </div>
                </div>
                <div class="cardBoxPricing" style={{marginTop: "25px", marginBottom: "50px"}}>
                    <p className="cardTitle">Standard</p>
                    <p className="cardPrice">200 lei</p>
                    <p className="cardDescription">Ceva text aici</p>
                    <hr/>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Minimalist logo</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Simple design</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Creative logo</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Colored design</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Animated logo</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={NotVerify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Premium design</span>
                    </div>
                    <div className="text-center">
                        <Button className="buttonPricing">Choose Plan</Button>
                    </div>
                </div>
                <div className="cardBoxPricing" style={{marginTop: "0%"}}>
                    <p className="cardTitle">Premium</p>
                    <p className="cardPrice">300 lei</p>
                    <p className="cardDescription">Ceva text aici</p>
                    <hr/>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Minimalist logo</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Simple design</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Creative logo</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Colored design</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Animated logo</span>
                    </div>
                    <div style={{paddingBottom: "15px"}}>
                        <img src={Verify} className="imageVerify" alt="Verify"/>
                        <span className="cardTextBenefits">Premium design</span>
                    </div>
                    <div className="text-center">
                        <Button className="buttonPricing">Choose Plan</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}