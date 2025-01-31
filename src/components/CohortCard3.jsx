import React from 'react';

const CohortCard3 = (props) => {
    return (
        <div className="Cards">
            <div className="profile-card">
                <div className="image-container">
                    <img src={props.img} alt={props.name} />
                </div>
                <div className="content">
                    <h2>{props.name}</h2>
                    <p className="role">{props.role}</p>
                    <p className="description">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CohortCard3;