import React from 'react';
import '../style/Innovation.scss';
import Nightwatch from '../asset/image/Nightwatch.jpg';
import fern from '../asset/image/fern.jpg';
import fundher from '../asset/image/fundher.png';
import safetrek from '../asset/image/safetrek.jpg';



const Innovation = () => {
  return (
    <div className="main-container">
        <h2 className="innovation-title">Celebrating Innovation</h2>
        <p className="innovation-description">
            Every year, we’re proud to empower innovators of all genders to build impactful solutions. 
            Explore some of the inspiring projects that came to life at <strong>HackViolet 2025 </strong> and meet the
             amazing hackers who made them possible!
        </p>

        <div className="projects-columns">

            <div className="column1"> 
                <div className="project-card">
                    <img className="nightwatch" src={Nightwatch} alt="" />
                    <h4>BEST HACK TO SUPPORT WOMEN CATEGORY</h4>
                    <h3 className="project-title">NightWatch</h3>
                    <p>
                        NightWatch is a hands-free safety system that detects distress signals and 
                        potential threats in real time. Despite challenges like night detection and 
                        false positives, the team delivered a thoughtful, creative solution with strong 
                        real-world potential to protect women when it matters most.
                    </p>
                    <a className="button"
                                href="https://devpost.com/software/a-7v843g?_gl=1*15wq1sn*_gcl_au*MTQ1MzA4NTAzOC4xNzYzMDU1MjYz*_ga*OTEwNjI3MTkyLjE3MDcwNjk2MzE.*_ga_0YHJK3Y10M*czE3NjMwNTUyNjIkbzE5JGcxJHQxNzYzMDU3ODc4JGoxNiRsMCRoMA.."
                                target="_blank"  
                                rel="noopener noreferrer" 
                                >
                                Devpost → 
                            </a>

                    <hr class="separator" />
                    
                    <img className="fern" src={fern} alt="" />
                    <h4>BEST UI/UX CATEGORY</h4>
                    <h3 className="project-title">Fern</h3>
                    <p>
                        Fern's polished, approachable design
                         made a sensitive health topic feel empowering. Its personalized PCOS 
                         tools demonstrated thoughtful, user-centered innovation tailored to women’s real needs.
                    </p>
                    <a className="button"
                                href="https://devpost.com/software/fern-mdqlrw?_gl=1*1ss4ktp*_gcl_au*MTQ1MzA4NTAzOC4xNzYzMDU1MjYz*_ga*OTEwNjI3MTkyLjE3MDcwNjk2MzE.*_ga_0YHJK3Y10M*czE3NjMwNTUyNjIkbzE5JGcxJHQxNzYzMDU3ODM4JGo1NiRsMCRoMA.."
                                target="_blank"  
                                rel="noopener noreferrer" 
                                >
                                Devpost → 
                            </a>
                         

                </div>
            </div>

            <div className="column2">
                <div className="fundher-card">
                <img className="fundher" src={fundher} alt="" />
                    <h4>BEST OVERALL CATEGORY + ARCFIELD BEST UI/UX FOR AI DATA LABELING CATEGORY</h4>
                    <h3 className="project-title">FundHer</h3>
                    <p>
                        FundHer impressed judges with its polished UI and powerful tech stack, using web
                         scraping, embeddings, and a vector database to match women with scholarships tailored to their backgrounds and goals. 
                    </p>

                    <hr class="separator" />

                    <div className="italics-quote">
                    <p>
                        "It stood out as a practical, high-impact tool that could genuinely expand financial access for women. We would love to see it go live!"
                    </p>
                    <p>- Judges board</p>
                    </div>

                    <a className="button"
                                href="https://devpost.com/software/fundher?_gl=1*1jei016*_gcl_au*MTQ1MzA4NTAzOC4xNzYzMDU1MjYz*_ga*OTEwNjI3MTkyLjE3MDcwNjk2MzE.*_ga_0YHJK3Y10M*czE3NjMwNTUyNjIkbzE5JGcxJHQxNzYzMDU3ODU5JGozNSRsMCRoMA.."
                                target="_blank"  
                                rel="noopener noreferrer" 
                                >
                                Devpost → 
                            </a>
                </div>

                <hr class="separator" />

                <h3>How do I make a successful project?</h3>
                <p>
                    A successful project starts with a clear problem, a thoughtful solution, 
                    and a team that communicates well throughout the process. A clean design, 
                    intentional choices, and a smooth demo will help your idea shine. And above
                     all, build an application that feels real, useful, and thoughtfully executed. 
                     The judges love projects that show both heart and a solid technical effort!
                </p>
            </div>

            <div className="column3">
                <p className="judging-info-title">
                    Last year, the HackViolet team developed an Excel formulated sheet to perform judging. 
                    We handpicked our judges to ensure varying perspectives and have provided them training to 
                    ensure the most fair process for our hackers.
                </p>

                <hr class="separator" />

                <img className="safetrek" src={safetrek} alt="" />
                    <h4>BEST FIRST TIME HACK CATEGORY</h4>
                    <h3 className="project-title">SafeTrek</h3>
                    <p>
                        SafeTrek won Best First Time Hack for building a polished,
                         AI-powered travel safety companion using brand-new tools. 
                         The project demonstrated strong promise, thoughtful execution, and a 
                         clear commitment to helping women travel with confidence.
                    </p>
                    <a className="button"
                                href="https://devpost.com/software/safetrek-s4elz5?_gl=1*vwvyff*_gcl_au*MTQ1MzA4NTAzOC4xNzYzMDU1MjYz*_ga*OTEwNjI3MTkyLjE3MDcwNjk2MzE.*_ga_0YHJK3Y10M*czE3NjMwNTUyNjIkbzE5JGcxJHQxNzYzMDU1NzI3JGozMyRsMCRoMA.."
                                target="_blank"  
                                rel="noopener noreferrer" 
                                >
                                Devpost → 
                            </a>
            </div>
        </div>

    </div>


  );
};

export default Innovation;
        