// SponsorPage.js
import React from 'react';
import './SponsorPage.scss';

const SponsorPage = () => {
    return (
        <div className="container">
            <main className="row justify-content-center">
                <section className="col-lg-8">
                    <section className="SupportSection">
                        <a href="/" className="home-link">
                            <img src="../assets/img/icons/go-back.svg" alt="Go Back" />
                            <span>Home</span>
                        </a>
                        <h1>
                            <strong className="SupportTitle">help support</strong> HackViolet 2025!
                        </h1>
                        <br />
                        <p>Hello Potential Sponsor!</p>
                        <p>
                            HackViolet is an annual 24-hour <strong>female-empowerment hackathon</strong> at Virginia Tech,
                            scheduled for <strong>February 1–2, 2025</strong>. While we operate and are funded independently,
                            we share a mission with our sister organization, the Association for Women in Computing (AWC),
                            to support and uplift women in technology.
                        </p>
                        <p>
                            HackViolet serves as a unique platform to empower young women in the male-dominated field of
                            technology. Our organization offers participants invaluable opportunities to acquire
                            <strong> new skills</strong>, establish <strong> mentor relationships</strong>, and engage in a
                            <strong> supportive community</strong>. We warmly welcome all participants—regardless of gender
                            identity—to showcase their creativity and make an impact in the field of technology.
                        </p>
                        <p>
                            With over 500 expected participants attending this in-person hackathon, we need your help to
                            create an incredible experience for all of our future innovators in a safe, inclusive environment!
                        </p>

                        <h4>Why Sponsor HackViolet?</h4>
                        <ul>
                            <li>Enhance brand visibility through event materials</li>
                            <li>Showcase your technology</li>
                            <li>Engage with top talent</li>
                            <li>Demonstrate Corporate Social Responsibility</li>
                        </ul>

                        <h4>Join us in 2025!</h4>
                        <p>
                            Help us shape the lives of young, future innovators and prepare them for the field of emerging
                            technologies! Please have a look at our sponsorship tiers above and reach out if you are
                            interested in becoming an official HackViolet 2025 sponsor!
                        </p>

                        <p><strong>Thank you for your time,<br />HackViolet Board</strong></p>

                        <hr className="divider" />
                        <h1>Sponsorship Tiers</h1>
                        <br />
                    </section>

                    <section className="Rtable js-RtableTabs">
                        <div className="Rtable-grid">
                            <div className="Rtable-cell Rtable-cell-blank"></div>
                            <div className="Rtable-cell Rtable-cell--head Rtable-cell-Byte">Byte<br />$2,000</div>
                            <div className="Rtable-cell Rtable-cell--head Rtable-cell-Kilo">Kilo<br />$3,000</div>
                            <div className="Rtable-cell Rtable-cell--head Rtable-cell-Mega">Mega<br />$5,000</div>
                            <div className="Rtable-cell Rtable-cell--head Rtable-cell-Giga">Giga<br />$7,000</div>
                            <div className="Rtable-cell Rtable-cell--head Rtable-cell-Tera">Tera<br />$10,000</div>
                            <div className="Rtable-cell Rtable-cell--head Rtable-cell-Peta">Peta<br />$16,000</div>

                            {/* Contribution Row */}
                            <div className="Rtable-category-cell Rtable-category-cell-full">Contribution</div>
                            <div className="Rtable-cell">$2,000</div>
                            <div className="Rtable-cell">$3,000</div>
                            <div className="Rtable-cell">$5,000</div>
                            <div className="Rtable-cell">$7,000</div>
                            <div className="Rtable-cell">$10,000</div>
                            <div className="Rtable-cell">$16,000</div>

                            {/* General Section Header */}
                            <div className="Rtable-category-cell">General</div>
                            <div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div>

                            {/* Mentors at Event */}
                            <div className="Rtable-category-cell">Mentors at Event</div>
                            <div className="Rtable-cell">✔️</div>
                            <div className="Rtable-cell">✔️</div>
                            <div className="Rtable-cell">✔️</div>
                            <div className="Rtable-cell">✔️</div>
                            <div className="Rtable-cell">✔️</div>
                            <div className="Rtable-cell">✔️</div>

                            {/* Opening Session Talk */}
                            <div className="Rtable-category-cell">Opening Session Talk</div>
                            <div className="Rtable-cell"></div>
                            <div className="Rtable-cell">1 min</div>
                            <div className="Rtable-cell">2 min</div>
                            <div className="Rtable-cell">3 min</div>
                            <div className="Rtable-cell">5 min</div>
                            <div className="Rtable-cell">10 min</div>

                            {/* Provide a Prize */}
                            <div className="Rtable-category-cell">Provide a Prize</div>
                            <div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell">✔️</div><div className="Rtable-cell">✔️</div><div className="Rtable-cell">✔️</div><div className="Rtable-cell">✔️</div>

                            {/* Panel Discussion */}
                            <div className="Rtable-category-cell">Panel Discussion</div>
                            <div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell">✔️</div><div className="Rtable-cell">✔️</div><div className="Rtable-cell">✔️</div>

                            {/* Closing Ceremony Talk */}
                            <div className="Rtable-category-cell">Closing Ceremony Talk</div>
                            <div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell">5 min</div><div className="Rtable-cell">8 min</div><div className="Rtable-cell">12 min</div>

                            {/* Sponsored Side Event */}
                            <div className="Rtable-category-cell">Sponsored Side Event (Limited Slots)</div>
                            <div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell">30 min</div><div className="Rtable-cell">60 min</div>

                            {/* Branded Mini Game */}
                            <div className="Rtable-category-cell">Branded Mini Game</div>
                            <div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell">✔️</div>

                            {/* Provide Additional Prize */}
                            <div className="Rtable-category-cell">Provide Additional Prize</div>
                            <div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell"></div><div className="Rtable-cell">✔️</div>
                        </div>

                        <hr className="divider" />
                        <section className="ConnectSection">
                            <h2>Connect</h2>
                            <div>
                                <img src="../assets/img/icons/globe.svg" alt="HackViolet Homepage" />
                                <a href="https://hackviolet.org">https://hackviolet.org</a>
                            </div>
                            <div>
                                <img src="../assets/img/icons/email.svg" alt="Email" />
                                <a className="SponsorEmail" href="mailto:sponsorship@hackviolet.org">sponsorship@hackviolet.org</a>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default SponsorPage;
