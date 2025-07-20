import React from 'react';

const SponsorPage = () => {
    return (
        <div className="container">
            <main className="row justify-content-center">
                <section className="col-lg-10">
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
                    </section>

                    <h1 className="tier-header">Sponsorship Tiers</h1>

                    <div className="tier-table">
                        <div className="row header">
                            <div className="cell header-cell blank"></div>
                            <div className="cell header-cell byte">Byte<br />$2,000</div>
                            <div className="cell header-cell kilo">Kilo<br />$3,000</div>
                            <div className="cell header-cell mega">Mega<br />$5,000</div>
                            <div className="cell header-cell giga">Giga<br />$7,000</div>
                            <div className="cell header-cell tera">Tera<br />$10,000</div>
                            <div className="cell header-cell peta">Peta<br />$16,000</div>
                        </div>

                        {/* Contribution */}
                        <div className="row category-row">
                            <div className="cell category">Contribution</div>
                            <div className="cell">$2,000</div>
                            <div className="cell">$3,000</div>
                            <div className="cell">$5,000</div>
                            <div className="cell">$7,000</div>
                            <div className="cell">$10,000</div>
                            <div className="cell">$16,000</div>
                        </div>

                        {/* General Section */}
                        <div className="row category-label">
                            <div className="cell section-label" colSpan="7">General</div>
                        </div>
                        <FeatureRow title="Mentors at Event" values={["✔️", "✔️", "✔️", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Opening Session Talk" values={["", "1 min", "2 min", "3 min", "5 min", "10 min"]} />
                        <FeatureRow title="Provide a Prize" values={["", "", "✔️", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Panel Discussion" values={["", "", "", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Closing Ceremony Talk" values={["", "", "", "5 min", "8 min", "12 min"]} />
                        <FeatureRow title="Sponsored Side Event (Limited Slots)" values={["", "", "", "", "30 min", "60 min"]} />
                        <FeatureRow title="Branded Mini Game" values={["", "", "", "", "", "✔️"]} />
                        <FeatureRow title="Provide Additional Prize" values={["", "", "", "", "", "✔️"]} />

                        {/* Recruiting Section */}
                        <div className="row category-label">
                            <div className="cell section-label" colSpan="7">Recruiting</div>
                        </div>
                        <FeatureRow title="Reserved Table" values={["✔️", "✔️", "✔️", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Access to Hacker Contact Info" values={["", "✔️", "✔️", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Recruiters Present (active recruitment)" values={["", "✔️", "✔️", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Access to Resumes" values={["", "", "✔️", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Bootcamp Sponsorship Fair" values={["", "", "", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Recruitment Event Shoutout (on social media)" values={["", "✔️", "✔️", "✔️", "1 event", "2 events"]} />
                        <FeatureRow title="Pre-Event Email to All Hackers" values={["", "", "✔️", "✔️", "✔️", "✔️"]} />

                        {/* Marketing Section */}
                        <div className="row category-label">
                            <div className="cell section-label" colSpan="7">Marketing</div>
                        </div>
                        <FeatureRow title="Logo on Shirt & Website" values={["✔️", "✔️", "✔️", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Distribute Marketing Materials & Merch" values={["✔️", "✔️", "✔️", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Social Media Shoutout" values={["", "✔️", "✔️", "✔️", "✔️", "✔️"]} />
                        <FeatureRow title="Cohosted By" values={["", "", "", "", "", "✔️"]} />

                        {/* Add-ons Section */}
                        <div className="row category-label">
                            <div className="cell section-label" colSpan="7">Restricted Add-Ons</div>
                        </div>
                        <FeatureRow title="Custom Sponsor Marketing Video" values={["", "", "", "2 min ($350)", "2 min (✔️)", "4 min (✔️)"]} />
                    </div>
                </section>
            </main>
        </div>
    );
};

const FeatureRow = ({ title, values }) => (
    <div className="row">
        <div className="cell feature-label">
            <span>{title}</span>
        </div>
        {values.map((val, index) => (
            <div className="cell" key={index}>{val}</div>
        ))}
    </div>
);

export default SponsorPage;
