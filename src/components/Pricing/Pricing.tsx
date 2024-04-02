import React from "react";
import "./Pricing.css"

import PricingCard from "./PricingCard";


const Pricing: React.FC = () => {
    return (

        <section className="pricing-sec">
            <div className="container">
                <div className="title-wrapper">
                    <h2 className="sec-title">Pricing</h2>
                    <p className="sec-description">
                        Cut your cloud bills in half with bundled extras like DDoS Protection,
                        cloud firewalls, and generous transfer.
                    </p>
                </div>

                <div className="pricing-cards-wrapper">
                    <PricingCard
                        title="Standard"
                        price={9}
                        description={[
                            "10 GB of space",
                            "Unlimited Traffic",
                            "Forum Access",
                            "Support at $25/hour",
                        ]}
                    />
                    <PricingCard
                        title="Professional"
                        price={49}
                        description={[
                            "30 GB of space",
                            "Unlimited Traffic",
                            "Forum Access",
                            "Support at $5/hour",
                        ]}
                    />
                    <PricingCard
                        title="Enterprise"
                        price={159}
                        description={[
                            "50 GB of space",
                            "Unlimited Traffic",
                            "Forum Access",
                            "Free Support",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
