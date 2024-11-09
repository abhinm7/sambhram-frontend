import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>




            <div class="invite-container">
                <video className='head-video'
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="header_video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="header-overlay"></div>

                <div class="content">
                    <h1 className="title-sd">
                        Shree Devi
                    </h1>

                    <h1 class="title">SAMBHRAM'24</h1>
<img src="fahiz.jpg" alt="" />

                    <p class="description">
                        We cordially invite you to our national level college fest of 2024
                    </p>
                    <p class="date">On Dec 06, 07 & 08</p>
                    <button class="btn-white" href="#">
                        Discover
                    </button>
                </div>
            </div>



        </>
    )

}

export default Header