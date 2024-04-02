import React from "react";
import "./HeroSection.css";

import googleIcon from "../../assets/images/google-icon.png";
import envelopIcon from "../../assets/images/envelop-icon.png";
import githubIcon from "../../assets/images/github-icon.png";

const Hero: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="container hero-wrapper">
                <div className="col col-left">
                    <div className="content-wrapper">
                        <h2 className="title">Cloud Computing Developers Trust</h2>
                        <p className="description">
                            Build, run, and secure your cloud workloads on <b>SuperNet Connected
                                Cloud</b>, a massively distributed edge and cloud platform. <a href="#" className="text-link" > Sign up </a>
                            today or <a href="#" className="text-link"> contact us</a> to learn more.
                        </p>
                    </div>
                </div>

                <div className="col col-right form">
                    <div className="sign-up-form form-wrapper">
                        <a className="sign-btn google-btn"> <img src={googleIcon} alt="googleIcon" /> Sign up with Google</a>
                        <div className="divider"></div>
                        <a className="sign-btn github-btn"> <img src={githubIcon} alt="githubIcon" />Github</a>
                        <a className="sign-btn email-btn"> <img src={envelopIcon} alt="envelopIcon" />Email</a>

                        <p className="terms">
                            By providing your email address or using a single sign-on provider
                            to create an account, you agree to our <a href="#" className="text-link">Terms of Service</a> and that
                            you have reviewed our <a href="#" className="text-link" >Privacy Policy</a> and <a href="#" className="text-link" >Cookie Policy.</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
