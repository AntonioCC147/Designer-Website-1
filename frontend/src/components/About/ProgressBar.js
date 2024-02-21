import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import './About.css';

const ProgressBar = ({ percentage }) => {
    const [progress, setProgress] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    const increment = percentage / 100;
                    const newProgress = prevProgress + increment;
                    return newProgress >= percentage ? percentage : newProgress;
                });
            }, 20);

            return () => clearInterval(interval);
        }
    }, [percentage, inView]);

    return (
        <div ref={ref} className="progressContainer">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
    );
};

export default ProgressBar;