import React from 'react';
import "./Cohort.css";

function Cohort() {
    return (
        <div className="Parent">
            <nav>
                <div className="logo">
                    <img src="/images/BuildSchool.png" alt="Build School Logo" />
                </div>
                <div className="btn">
                    <button>Register your team</button>
                </div>
            </nav>
            <div className="hero">

                <div className="content">
                    <img src="/images/Frame 32.png" alt="" />
                    <div className="content-btn">
                        <button>Register your team</button>
                        <button className='explore'>Explore our portal</button>
                    </div>
                </div>
                <div className="partners">
                    <img src="/images/OUR PARTNERS.png" alt="" />
                </div>
                <div className="brands">
                    <img src="/images/Frame 36.png" alt="" />
                    <img src="/images/Frame 36.png" alt="" />
                    <img src="/images/Frame 36.png" alt="" />
                    <img src="/images/Frame 36.png" alt="" />
                    <img src="/images/Frame 36.png" alt="" />
                    <img src="/images/Frame 36.png" alt="" />
                    <img src="/images/Frame 36.png" alt="" />
                    <img src="/images/Frame 36.png" alt="" />
                    <img src="/images/Frame 36.png" alt="" />
                    <img src="/images/Frame 36.png" alt="" />
                </div>
            </div>
            <div className="moto">
                <div className="heading-images">
                    <img className='who' src="/images/WHO IS BUILDSCHOOL FOR_.png" alt="" />
                    <img className='bring' src="/images/bringing.png" alt="" />
                </div>
                <div className="templates">
                    <img src="/images/Frame 70.png" alt="" />
                </div>
                <img className='learn' src="/images/Frame 71.png" alt="" />
                <div className="tree">
                    <img className='line'src="/images/Frame 76.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Cohort;
