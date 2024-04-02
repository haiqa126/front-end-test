import React from "react";
import "./Card.css"

type Props = {
    title: string;
    description_para_1?: string;
    description_para_2?: string;
    description_para_3?: string;
    description_para_4?: string;
    image: string;
};

const FeatureCard: React.FC<Props> = ({ title, description_para_1, description_para_2, description_para_3, description_para_4, image }) => {
    return (
        <div className="card">

            <div className="card-text">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">
                    {description_para_1 && <p>{description_para_1}</p>}
                    {description_para_2 && <p>{description_para_2}</p>}
                    {description_para_3 && <p>{description_para_3}</p>}
                    {description_para_4 && <p>{description_para_4}</p>}
                </p>
            </div>
            <div className="card-img-holder" style={{ background: `url(${image}) lightgray 50% / cover no-repeat` }}>
                <div className="image-overlay"></div>
            </div>
        </div>
    );
};

export default FeatureCard;
