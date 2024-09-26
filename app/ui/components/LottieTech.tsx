// LottieAnimation.js
"use client";

import React from 'react';
import Lottie from 'lottie-react';
import animationData from "../lottie/tech-animation.json"
const LottieTech = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="">
            <Lottie 
                animationData={animationData} 
                loop={true} 
                autoplay={true} 
                rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice'
                }}
            />
        </div>
    );
};

export default LottieTech;