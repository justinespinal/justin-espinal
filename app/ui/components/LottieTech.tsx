// LottieAnimation.js
"use client";

import React from 'react';
import Lottie from 'lottie-react';
import animationData from "../lottie/tech-animation.json"
const LottieTech = () => {
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