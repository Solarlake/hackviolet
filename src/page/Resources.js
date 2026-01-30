import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "../style/Resources.scss";
import FooterBlob from "../asset/image/footer_blob.png";
import Footer from "../component/Footer";
import Button from "../component/Button";
import StarterData from "../content/starter.json";
import SubmissionData from "../content/submission.json";
import AngleRight from "../asset/svg/angle-right.svg";
import Socials from "../component/Socials";
import Marquee from "../component/Marquee";
import { Link } from "react-router-dom";

const Resources = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const [active, setActive] = React.useState([]);
    
        const toggle = (index) => {
            console.log(index)
            if (active.includes(index)) {
                setActive(active.filter(item => item !== index));
            }
            else {
                setActive([...active, index]);
            }
            console.log(active)
        }

    return (
        <div className="resources">
            <div className="purpleGradContainer"> </div>
            <div id="info" className="landing">
                <div className="header">
                    <Marquee 
                    text=" RESOURCES /" 
                    speed={30}
                    color="#03212B"
                    
                />
                    <div className="copy">
                        {/* <p className="p1">Download the official HackViolet 2025 Information Sheet.</p> */}
                        <p className="p2">Explore this page for additional resources.</p>
                    </div>
                    {/* <div className="buttons">
                        <Button href="https://docs.google.com/document/d/1LnNpdvbG2Scqu0N-5f0t7J-5Xhm32G-6YbswWoQIljQ/edit?usp=sharing" newTab text="Info Sheet" />
                        <Button href="https://forms.gle/9fcnXGye34M52Dyg7" newTab clear text="Judging Preference Form" />
                    </div> */}

                     {/* <div className="socials">
                        <Socials />
                    </div>  */}

                    

                </div>
                </div>
            

            {/* <img className="clouds" src={Clouds} alt="" />
            <div className="rocket_container">
                <img className="rocket" src={Rocket} alt="" />
            </div> */}

            <div className="quicklinks">
                        <Link to="/resources#rules" className="quicklink">Rules & Eligibility</Link>
                        <Link to="/resources#location" className="quicklink">Location</Link>
                        <Link to="/resources#raffle" className="quicklink">Raffle Giveaways</Link>
                        <Link to="/resources#teams" className="quicklink">Teams</Link>
                        <Link to="/resources#themes" className="quicklink">Themes</Link>
                        <Link to="/resources#mentors" className="quicklink">Help & Mentors</Link>
                        <Link to="/resources#judging" className="quicklink">Judging</Link>
                        <Link to="/resources#submission" className="quicklink">Project Submission</Link>
                        <Link to="/resources#starter" className="quicklink">Starter Packs</Link>
                    </div>

            <div id="rules" className="section">
                <p className="header">Rules & Eligibility</p>
                <div className="text">
                    <div className="copy">
                    <p>
                    <ul>
                        <li>Any student enrolled in an undergraduate or graduate program may attend.</li>
                        <li>We are not a female-only event. We invite students of all genders, majors, and backgrounds to participate.</li>
                        <li>Follow our Code of Conduct (adapted from MLH).</li>
                        <li>Most code must be written by you, but public APIs are allowed. You must cite any sources used.</li>
                        <li>All projects will be screened for plagiarism. If your team’s project is suspected of plagiarism by the judges, HackViolet will review your submission to confirm for signs of cheating. If your submission is not found satisfactory, your project will be disqualified.</li>
                        <li className="indented">Invalid submissions can include: missing or broken Github link, missing elements in the Devpost, using code without citing it.</li>
                        <li> HackViolet does NOT provide housing and no one is allowed to stay on campus overnight. Please plan accordingly.</li>
                    </ul>
                    </p>
                    </div>
                </div>
            </div>

            <div id="location" className="section">
                <p className="header">Location</p>
                <div className="text">
                    <div className="copy">
                        <p><strong>PHYSICAL LOCATION</strong></p>
                        <p>Our hackathon will be held mainly at Squires Student Center, on the Virginia Tech campus. Once inside, check-in will be held in Room 226, and then our opening ceremony will be in the Squires Auditorium. Hackers will then be directed to the Commonwealth Ballroom, where they can work on their projects! Specific room locations for all events are detailed in the schedule below.</p>

                        <ul>
                            <li><strong>Squires Student Center Address:</strong> 290 College Ave, Blacksburg, VA 24060</li>
                            <li><strong>Virginia Tech Campus Map:</strong> <a href="https://www.google.com/maps/place/Virginia+Tech/@37.2285035,-80.4193583,15z/data=!3m1!4b1!4m6!3m5!1s0x884b296ba53d92f1:0x3693781f598e7d3c!8m2!3d37.2285035!4d-80.4193583!16zL20vMGNqaGo" target="_blank">Link to the Map</a></li>
                        </ul>

                        <p><strong>DIGITAL LOCATION</strong></p>
                        <p>The primary communication in HackViolet 2026 will take place over the Discord Server. You must have a Discord account to join.</p>

                        {/* <p>Please reference the following guide detailing all of the Discord channels in our server:</p>
                        <p><a href="https://docs.google.com/document/d/1eSeGhcFcXe78csKM_K0T1ZO4PS5DwWlbAE71popDaGk/edit?usp=sharing" target="_blank">HACKERS Discord Guide for HackViolet 2025</a></p> */}

                        <p>New to Discord? This article may be helpful: <a href="https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord" target="_blank">Beginner's Guide to Discord</a></p>
                    </div>
                </div>
            </div>

            <div id="raffle" className="section">
                <p className="header">Raffle Giveaways</p>
                <div className="text">
                    <div className="copy">

                        <p>Instead of using raffle tickets, this year we will use a check-in system. Find a HackViolet officer at the event you attend to fill out the check-in form and earn points to win a prize!</p>
                        <p><strong>Point System:</strong></p>
                        <ul>
                        <li><strong>5 tickets:</strong> Attending Keynote Speaker Panel, Company Career Fair, Company/Engineers’ Panel, or Intern Panel</li>
                        <li><strong>3 tickets:</strong>  Attending a workshop or Mentor Scavenger Hunt</li>
                        </ul>

                        <p><strong>Most Engaged Hacker:</strong>  awarded to the hacker holding the most tickets by Sunday!
24” HD Smart TV
</p>

                        <p><strong>Raffle Winners:</strong> Squishmallows</p>

                        <p>Winners will be announced at the Closing Ceremony on Sunday, Feb 1st @ 6 PM.</p>
                    </div>
                </div>
            </div>

            <div id="teams" className="section">
                <p className="header">Teams</p>
                <div className="text">
                    <div className="copy">
                        <p>If you are planning to demo your project to compete for a prize, you must be in a team of 2-4 people. You can create a team beforehand or find team members in the <strong>#looking-for-team</strong> channel. We'll also have team formation activities and plenty of opportunities for you to meet other people!</p>

                        <p><strong>First-Time Hacker Teams</strong></p>
                        <p>First-time hacker teams are composed of majority first-time hackers, or people who are submitting to a hackathon for the first time. For example, if you have a team of 4, 3 of the members must be first-time hackers to be eligible for first-time hacker prize categories.</p>
                    </div>
                </div>
            </div>

            <div id="themes" className="section">
                <p className="header">Themes</p>
                <div className="text">
                    <div className="copy">
                        <p>There are no strict themes for HackViolet 2026, so you are free to build any project you’d like. You can use these topics for inspiration:</p>
                        <ul>
                            <li><strong>Female-Empowerment: </strong>Create a project that tackles issues that women face, aids female-empowerment, and/or combats the gender gap in tech.</li>
                            <li><strong>Social Good: </strong>Create a project that aims to create a real-world solution. How can we benefit a large number of people and make a positive impact on society?</li>
                            <li><strong>Sustainability</strong>Create a project that is dedicated to supporting sustainability and conservation efforts. How can we live harmoniously with our planet?</li>
                        </ul>
                        <p>You may also want to keep the prize categories in mind and base your project on one or more of those.</p>
                        </div>
                </div>
            </div>

            <div id="mentors" className="section">
                <p className="header">Help & Mentors</p>
                <div className="text">
                    <div className="copy">
                        <p><strong>General Help</strong></p>
                        <ul>
                        <li>Post questions in the appropriate Question channels in the Discord Server, such as <strong>#❓-ask-an-organizer</strong>. You can receive help from mentors, organizers, and fellow hackers!</li>
                        <li>Please check the <strong>#resources</strong> channel before asking your question, as it may be answered there.</li>
                        <li>Please refrain from DMing organizers privately and use the help channels, as DMs are very hard for us to keep track of.</li>
                        <li>Find a HackViolet officer! We will be wearing hoodies that say HackViolet Executive Board.</li>
                        <li>Also find us at our info desk outside of the Commonwealth Ballroom.</li>
                        </ul>

                        <p><strong>Mentor Info</strong></p>
                        <ul>
                        <li>Mentors are a resource for hackers during the hackathon.</li>
                        <li>Mentors will be able to help you in the Commonwealth Ballroom or over the Discord server using a queuing system.</li>                   
                        <li>Learn more about mentors by referencing the # 👋-mentor-intros channel. Additionally, there is a Mentor Speed dating event taking place on January 31st from 11AM-12PM in room 305.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="judging" className="section">
                <p className="header">Judging</p>
                <div className="text">
                    <div className="copy">
                        <p>Judging information coming soon!</p>

                        {/* <p><strong>Judging Preference</strong></p>
                        <ul>
                        <li>One person from each team must fill out the <a href="https://forms.gle/9fcnXGye34M52Dyg7" target="_blank">Judging Preference Form </a> for the entire group, which can be found in the Discord and sent out through email after the start of the Hackathon. Please note: neither option provides a distinct advantage over the other. This form is due on <strong>Feb. 2nd, at 10:30 AM</strong>.</li>
                        </ul>

                        <p><strong>Option 1️⃣: Traditional Judging</strong></p>
                        <ul>
                        <li>Teams create and submit a demo video, along with their code and project to Devpost.</li>
                        <li>Judges will assess and grade the Devpost submissions.</li>
                        </ul>

                        <p><strong>Option 2️⃣: In-Person Judging</strong></p>
                        <ul>
                        <li>Teams have the opportunity to directly present their project to judges in person.</li>
                        <li>Judges will evaluate projects during the presentation and have a chance to ask questions afterwards.</li>
                        <li>Please be sure to arrive 15 minutes before your time slot!</li>
                        <li>The in-person timeline will be emailed to you sometime between 10:30 AM - 12:30 PM, February 2nd. Please check your emails and the Discord!</li>
                        <li>Note: For In-Person Judging, your assigned time slot can be anytime between 1:00 PM - 4:30 PM, so if you choose this option, make sure the team is free during this time block!</li>
                        </ul>

                        <p><strong>Judging Criteria:</strong></p>
                        <ul>
                        <li>Projects will be judged on Creativity, Design, Technology, and Completion.</li>
                        </ul> */}

                    </div>
                </div>
            </div>

            <div id="submission" className="submission">
                <p className="submission_header">Project Submission</p>
                <div className="questions">
                {SubmissionData.map((question, index) => (
                    <div key={index} className="question">
                        <div className="header" onClick={() => toggle(index)}>
                            <p className="question__title">{question.question}</p>
                            <img src={AngleRight} alt="" className={active.includes(index) ? "arrow arrow__down" : "arrow"} />
                        </div>
                        <p 
                            className={active.includes(index) ? "question__answer_show" : "question__answer"} 
                            dangerouslySetInnerHTML={{ __html: question.answer }} 
                        />
                    </div>
                ))}
                </div>
            </div>

            <div id="starter" className="starter">
                <p className="starter_header">Starter Packs & Resources</p>
                <div className="questions">
                {StarterData.map((question, index) => (
                    <div key={index} className="question">
                        <div className="header" onClick={() => toggle(index)}>
                            <p className="question__title">{question.question}</p>
                            <img src={AngleRight} alt="" className={active.includes(index) ? "arrow arrow__down" : "arrow"} />
                        </div>
                        <p 
                            className={active.includes(index) ? "question__answer_show" : "question__answer"} 
                            dangerouslySetInnerHTML={{ __html: question.answer }} 
                        />
                    </div>
                ))}
            </div>
                
            </div>

            <div className="footer">
                <Footer />
                
            </div>
        </div>
    );
};

export default Resources;
