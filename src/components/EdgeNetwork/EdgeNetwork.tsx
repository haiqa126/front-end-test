import React from "react";
import "./EdgeNetwork.css"

import edgeNetworkMap from "../../assets/images/Edge Network Map.png";

const EdgeNetwork: React.FC = () => {
    return (

        <section className="edgeNetwork-sec">
            <div className="container">
                <div className="title-wrapper">
                    <h2 className="sec-title">Edge Network</h2>
                    <p className="sec-description">
                        Scale your business on the most distributed compute, security, and delivery
                        platform — from cloud to edge. New core compute regions launched. <a href="#" className="text-link">Learn
                            more.</a>
                    </p>
                </div>

                <img src={edgeNetworkMap} className="main-map" alt="Edge Network Map" />
            </div>
        </section>
    );
};

export default EdgeNetwork;
