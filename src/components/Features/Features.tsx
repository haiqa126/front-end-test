import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css";

import edgeNetworkImg from "../../assets/Edge Network.png";
import securityImg from "../../assets/Security.png";
import ddosProtectionImg from "../../assets/DDOS Protection.png";
import backupsImg from "../../assets/Backups.png";

const Features: React.FC = () => {
    return (
        <section className="features-sec features">
            <div className="container">
                <div className="title-wrapper">
                    <h2 className="sec-title">Features</h2>
                    <p className="sec-description">
                        From edge locations world wide, to unparalleled security and DDOS
                        protection, we've got you covered.
                    </p>
                </div>

                <div className="cards-wrapper">
                    <FeatureCard
                        title="EDGE NETWORK"
                        description_para_1="Discover our industry leading edge network, with over 300 edge nodes scattered around the globe."
                        description_para_2="Give your customers the best performance in every corner of the world."
                        image={edgeNetworkImg}
                    />
                    <FeatureCard
                        title="SECURITY"
                        description_para_1="Stay safe from threats without slowing down."
                        description_para_2="SuperNet surrounds and protects your entire ecosystem — clouds, apps, APIs, and users."
                        image={securityImg}
                    />
                    <FeatureCard
                        title="DDOS PROTECTION"
                        description_para_1="Highly rated web, application & network DDoS protection. "
                        description_para_2="Keeping bots and malicious users at bay."
                        image={ddosProtectionImg}
                    />
                    <FeatureCard
                        title="BACKUPS"
                        description_para_1="Fully managed automatic daily, weekly, and biweekly backups of your Compute Instances."
                        description_para_2="Have peace of mind knowing that your data is always safe."
                        image={backupsImg}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
