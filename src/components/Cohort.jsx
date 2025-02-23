import React from 'react';
import "./Cohort.css";
import Session from './Session';
import CohortCard from './CohortCard';
import CohortCard2 from './CohortCard2';
import CohortCard3 from './CohortCard3';

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
const teammates = [
    {
        id: 1,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KlpkftVZnoIt82QHzxBAFwaV1EG85baIDw&s",
        name: "Rahul Mishra",
        role: "sdckmckcmdokcsdkockcos",
        description: "docodciocjcci"
    },
    {
        id: 2,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KlpkftVZnoIt82QHzxBAFwaV1EG85baIDw&s",
        name: "Rahul Mishra",
        role: "sdckmckcmdokcsdkockcos",
        description: "docodciocjcci"
    },
    {
        id: 3,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KlpkftVZnoIt82QHzxBAFwaV1EG85baIDw&s",
        name: "Rahul Mishra",
        role: "sdckmckcmdokcsdkockcos",
        description: "docodciocjcci"
    },
    {
        id: 4,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KlpkftVZnoIt82QHzxBAFwaV1EG85baIDw&s",
        name: "Rahul Mishra",
        role: "sdckmckcmdokcsdkockcos",
        description: "docodciocjcci"
    },
    {
        id: 5,
        imgURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KlpkftVZnoIt82QHzxBAFwaV1EG85baIDw&s",
        name: "Rahul Mishra",
        role: "sdckmckcmdokcsdkockcos",
        description: "docodciocjcci"
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
function createCard4(teammate) {
    return (
        <CohortCard3
            img={teammate.imgURL}
            name={teammate.name}
            role={teammate.role}
            description={teammate.description} />
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
                    <div className="headline">
                        <span className="white">Build</span><span className="blue">School</span>
                        <span className="white">: Your Launchpad to </span>
                        <span className="italic-blue">transform</span>
                        <span className="white"> Ideas</span>
                    </div>
                    <div className="subtext">
                        <span>Join an exclusive circle of India’s most promising college founders. Get the tools, mentorship, and network to launch and scale your venture in 11 weeks.</span>
                    </div>
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
                <div className="carding" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px"
                }}>
                    {mentors.map(createCard3)}
                </div>
            </div>
            <div className="team">
                <div className="head">
                    <p>OUR CORE TEAM</p>
                    <p>Why we built Build School and how we’re shaping India’s next generation of founders</p>
                </div>
                <div className="carding" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px"
                }}>
                    {teammates.map(createCard4)}
                </div>
            </div>
        </div>
    );
}

export default Cohort;
