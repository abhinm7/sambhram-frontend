import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true); // Set the state to true when the video is ready
    };

    return (
        <>
            <div className={`invite-container ${isVideoLoaded ? 'loaded' : 'loading'}`}>
                <video 
                    className='head-video'
                    autoPlay
                    loop
                    muted
                    playsInline
                    onCanPlayThrough={handleVideoLoad} // Trigger when video can play through
                >
                    <source src="header-comp.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="header-overlay"></div>

                {isVideoLoaded && (
                    <div className="content">
                        <h1 className="title-sd">
                            Shree Devi
                        </h1>
                        <h1 className="title">SAMBHRAM'24</h1>
                        <p className="description">
                            We cordially invite you to our national level college fest of 2024
                        </p>
                        <p className="date">On Dec 06, 07 & 08</p>
                        <button className="btn-white" href="#">
                            Discover
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
