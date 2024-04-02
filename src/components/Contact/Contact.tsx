import React from "react";
import "./Contact.css"

const Contact: React.FC = () => {
    return (

        <section className="contact-sec">
            <div className="container">
                <div className="title-wrapper">
                    <h3 className="sec-title">Ready to get started or have questions?</h3>
                    <p className="sec-description">
                        Set up your free account today or contact a sales consultant to learn more.
                    </p>
                </div>

                <div className="btn-wrapper">
                    <button className="create-account-btn">Create Account</button>
                    <button className="contact-btn">Contact Sales</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
