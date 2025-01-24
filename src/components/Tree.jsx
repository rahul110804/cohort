import React from "react";
import "./Tree.css"; // Make sure to include the extracted CSS in this file

const timelineItems = [
  {
    session: 1,
    title:
      "Why BuildSchool? Ideation, Founder-Market Fit & Finding Your Co-Founder.",
    description:
      "Kick off your BuildSchool journey by aligning passion with real market needs. Discover how structured learning, relentless networking, and personal growth set the stage for your founder success.",
    highlight: true,
  },
  {
    session: 2,
    title: "Building in Public – Leveraging Transparency for Growth.",
    description:
      "Embrace radical openness to win over early adopters and build a loyal following. From content-led marketing to personal brand building, learn to turn transparency into traction.",
    highlight: false,
  },
  {
    session: 3,
    title:
      "Business Models, Market Research & Problem-Solving Through System/Design Thinking.",
    description:
      "Master the art of identifying viable markets and crafting disruptive business models. Dive deep into problem-solving frameworks that turn bold ideas into profitable realities.",
    highlight: true,
  },
  {
    session: 4,
    title: "Building Your First Product.",
    description:
      "Kick off your BuildSchool journey by aligning passion with real market needs. Discover how structured learning, relentless networking, and personal growth set the stage for your founder success.",
    highlight: false,
  },
  {
    session: 5,
    title: "Building Your MVP - No-Code & AI Tools for Rapid Prototyping.",
    description:
      "Launch faster than ever by tapping into the power of no-code and AI automation. Transform raw ideas into functional prototypes without writing a single line of code.",
    highlight: true,
  },
  {
    session: 6,
    title:
      "Tech 101 - System Design, Cloud Infrastructure, Automation & Security.",
    description:
      "Lay the technical foundation your startup deserves. From choosing the right cloud stack to automating deployments, learn the essentials of building a secure, scalable product.",
    highlight: false,
  },
  {
    session: 7,
    title: "Design 101 for Founders - Understanding the Importance of UI/UX.",
    description:
      "Elevate user experiences through thoughtful design. Discover why aesthetics, usability, and empathy can make or break your product's adoption and retention.",
    highlight: true,
  },
  {
    session: 8,
    title: "Marketing 101 & GTM.",
    description:
      "Turn your product into a movement with sharp marketing tactics. Learn how to build early buzz, secure your first thousand users, and set the stage for sustainable growth.",
    highlight: false,
  },
  {
    session: 9,
    title:
      "Mastering the Pitch - How to Sell Your Startup to Investors & Customers.",
    description:
      "Nail your story and capture attention, whether you're facing VCs, angel investors, or prospective customers. Perfect your deck and Q&A to stand out in crowded markets.",
    highlight: true,
  },
  {
    session: "DEMO DAY !",
    title: "Demo Day",
    description:
      "Step into the spotlight and showcase what you've built. Impress investors, industry leaders, and peers, and open doors to mentorship, funding, and real-world impact.",
    highlight: false,
  },
];

function Timeline() {
  return (
    <div className="Main">
      <div className="timeline-Main">
        <div className="timeline-line"></div>
        {timelineItems.map((item, index) => {
          const isLeft = index % 2 !== 0;
          const isLastItem = index === timelineItems.length - 1;

          return (
            <div
              key={index}
              className={`timeline-item ${
                isLastItem
                  ? "center"
                  : `${isLeft ? "left" : "right"}`
              }`}
            >
              <div
                className={`timeline-circle ${
                  item.highlight ? "highlight" : "default"
                } ${
                  isLastItem ? "top" : "default-position"
                }`}
              ></div>

              <div
                className={`timeline-content ${
                  isLastItem ? "center" : isLeft ? "left" : "right"
                }`}
              >
                <span className="timeline-session">
                  {typeof item.session === "number"
                    ? `Session ${item.session}:`
                    : item.session}
                </span>
                {!isLastItem && (
                  <h3 className="timeline-title">{item.title}</h3>
                )}
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
