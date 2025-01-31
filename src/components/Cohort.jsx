import React from 'react';
import "./Cohort.css";
import Session from './Session';
import CohortCard from './CohortCard';
import CohortCard2 from './CohortCard2';

const members = [
    {
        id: 1,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KlpkftVZnoIt82QHzxBAFwaV1EG85baIDw&s",
        title: "Rahul Mishra",
        description: "sdckmckcmdokcsdkockcos"
    },
    {
        id: 2,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJq0VhibtTvyOAKkFAedrlj2bNzkp2jSOLbQ&s",
        title: "Md.ShabbirUddin",
        description: "sdckmckcmdokcsdkockcos"
    },
    {
        id: 3,
        imgURL:
            "https://subhashautomobiles.in/wp-content/uploads/2020/05/talbros.jpg",
        title: "Piyush Kr.Singh",
        description: "sdckmckcmdokcsdkockcos"

    }
];
const mentors = [
    {
        id: 1,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KlpkftVZnoIt82QHzxBAFwaV1EG85baIDw&s",
        name: "Rahul Mishra",
        pos: "sdckmckcmdokcsdkockcos"
    },
    {
        id: 2,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KlpkftVZnoIt82QHzxBAFwaV1EG85baIDw&s",
        name: "Rahul Mishra",
        pos: "sdckmckcmdokcsdkockcos"
    },
    {
        id: 3,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KlpkftVZnoIt82QHzxBAFwaV1EG85baIDw&s",
        name: "Rahul Mishra",
        pos: "sdckmckcmdokcsdkockcos"

    }
];
function createCard2(member) {
    return (
        <CohortCard
            img={member.imgURL}
            title={member.title}
            description={member.description}
        />
    );
}
function createCard3(mentor) {
    return (
        <CohortCard2
            img={mentor.imgURL}
            name={mentor.name}
            pos={mentor.pos} />
    );
}
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
                    <img src="/images/Frame 32 (1).png" alt="" />
                    <div className="contentBtn" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                        <div className='register'>
                            <button>Register your team</button>
                        </div>
                        <div>
                            <button className='explore'>Explore our portal</button>
                        </div>
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
                <div className="heading-text">
                    <p className="who">WHO IS BUILDSCHOOL FOR?</p>
                    <p className="bring"> Bringing together a new generation of risk-takers, innovators, and doers.</p>
                </div>
                <div className="templates">
                    {members.map(createCard2)}
                </div>
                <p className="learn">YOUR 11-WEEKS IMMERSION PROGRAM</p>
                <p className="learn-2">Learn. Build. Launch. Repeat.</p>
                <div className="tree">
                    <Session />
                </div>
            </div>
            <div className="mentors">
                <div className="head">
                    <p>MEET YOUR MENTORS</p>
                    <p>Real founders, operators and industry pros guiding you every step of the way</p>
                </div>
                <div className="carding">
                    {mentors.map(createCard3)}
                </div>
            </div>
            <div className="team">
                <div className="head">
                    <p>OUR CORE TEAM</p>
                    <p>Why we built Build School and how we’re shaping India’s next generation of founders</p>
                </div>
                <div className="Cards">
                    <div className="profile-card">
                        <div className="image-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg" alt="Neha Kapoor" />
                        </div>
                        <div className="content">
                            <h2>Neha Kapoor</h2>
                            <p className="role">PRESIDENT</p>
                            <p className="description">
                                Leads the strategic vision and execution of Build School, ensuring a transformative experience for aspiring entrepreneurs.
                            </p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="image-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg" alt="Neha Kapoor" />
                        </div>
                        <div className="content">
                            <h2>Neha Kapoor</h2>
                            <p className="role">PRESIDENT</p>
                            <p className="description">
                                Leads the strategic vision and execution of Build School, ensuring a transformative experience for aspiring entrepreneurs.
                            </p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="image-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg" alt="Neha Kapoor" />
                        </div>
                        <div className="content">
                            <h2>Neha Kapoor</h2>
                            <p className="role">PRESIDENT</p>
                            <p className="description">
                                Leads the strategic vision and execution of Build School, ensuring a transformative experience for aspiring entrepreneurs.
                            </p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="image-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg" alt="Neha Kapoor" />
                        </div>
                        <div className="content">
                            <h2>Neha Kapoor</h2>
                            <p className="role">PRESIDENT</p>
                            <p className="description">
                                Leads the strategic vision and execution of Build School, ensuring a transformative experience for aspiring entrepreneurs.
                            </p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="image-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg" alt="Neha Kapoor" />
                        </div>
                        <div className="content">
                            <h2>Neha Kapoor</h2>
                            <p className="role">PRESIDENT</p>
                            <p className="description">
                                Leads the strategic vision and execution of Build School, ensuring a transformative experience for aspiring entrepreneurs.
                            </p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="image-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg" alt="Neha Kapoor" />
                        </div>
                        <div className="content">
                            <h2>Neha Kapoor</h2>
                            <p className="role">PRESIDENT</p>
                            <p className="description">
                                Leads the strategic vision and execution of Build School, ensuring a transformative experience for aspiring entrepreneurs.
                            </p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="image-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg" alt="Neha Kapoor" />
                        </div>
                        <div className="content">
                            <h2>Neha Kapoor</h2>
                            <p className="role">PRESIDENT</p>
                            <p className="description">
                                Leads the strategic vision and execution of Build School, ensuring a transformative experience for aspiring entrepreneurs.
                            </p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="image-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg" alt="Neha Kapoor" />
                        </div>
                        <div className="content">
                            <h2>Neha Kapoor</h2>
                            <p className="role">PRESIDENT</p>
                            <p className="description">
                                Leads the strategic vision and execution of Build School, ensuring a transformative experience for aspiring entrepreneurs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cohort;
