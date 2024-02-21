import Instagram from '../../assets/icons/Instagram.png';
import Facebook from '../../assets/icons/Facebook.png';

import './SocialIcons.css';

export default function SocialIcons() {
    return (
        <div>
            <div className="socialBox">
                <div className="imageBox">
                    <a href="/">
                        <img src={Instagram} className="m-auto socialImage" alt="Instagram"/>
                    </a>
                </div>
                <div className="imageBox">
                    <a href="/">
                        <img src={Instagram} className="m-auto socialImage" alt="Instagram"/>
                    </a>
                </div>
                <div className="imageBox">
                    <a href="/">
                        <img src={Instagram} className="m-auto socialImage" alt="Instagram"/>
                    </a>
                </div>
            </div>
        </div>
    )
}