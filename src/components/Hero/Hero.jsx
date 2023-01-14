import React from 'react'
import Header from '../Header/Header'
import "./Hero.css"

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-s">
                <Header />

                {/* quote part */}

                <div className="quote">
                    <div></div>
                    <span>the best fitness club in the town</span>

                </div>

                {/* text part */}
                <div className="hero-text">
                    <div>
                        <span>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                </div>

            </div>
            <div className="right-s">
                right side

            </div>
        </div>
    )
}

export default Hero