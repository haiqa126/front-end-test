import React from "react";
import "./PricingCard.css"

import waves from "../../assets/images/Background Waves.png"


type Props = {
    title: string;
    price: number;
    description: string[];
};

const PricingCard: React.FC<Props> = ({ title, price, description }) => {
    return (
        <div className="pricing-card">
            <div className="title-wrapper">
                <h2>${price}/mo</h2>
                <h3>{title}</h3>
            </div>
            <div className="waves">
                <img src={waves} alt="" />
            </div>
            <div className="features-list">
                {description.map((item, i) => (
                    <p key={i}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default PricingCard;
