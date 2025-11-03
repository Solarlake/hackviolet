import React from "react";
import "../style/FAQ.scss";
import FAQData from "../content/faq.json";
import AngleRight from "../asset/svg/angle-right.svg";
import Plus from "../asset/svg/faqIcons/plus.svg";
import Minus from "../asset/svg/faqIcons/minus.svg";
import faq1 from "../asset/svg/faqIcons/faq1.svg";
import faq2 from "../asset/svg/faqIcons/faq2.svg";
import faq3 from "../asset/svg/faqIcons/faq3.svg";
import faq4 from "../asset/svg/faqIcons/faq4.svg";
import faq5 from "../asset/svg/faqIcons/faq5.svg";
import faq6 from "../asset/svg/faqIcons/faq6.svg";
import faq7 from "../asset/svg/faqIcons/faq7.svg";
import faq8 from "../asset/svg/faqIcons/faq8.svg";


const FAQ = () => {
    const [active, setActive] = React.useState([]);

    const faqIcons = [faq1, faq2, faq3, faq4, faq5, faq6, faq7, faq8];

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
        <div className="questions">
            {FAQData.map((question, index) => (
                <div key={index} className="question">
                    <div className="header" onClick={() => toggle(index)}>
                        {/* icon container*/}
                        <div className="faq-icon-container">
                            <img src={faqIcons[index]} alt="" className="faq-icon"/>
                        </div>
                        
                        <p className="question__title">{question.question}</p>
                        
                        {/* plus/minus */}
                        <div className="toggle-circle">
                            <img 
                                src={active.includes(index) ? Minus : Plus} 
                                alt="" 
                                className="toggle-icon"
                            />
                        </div>
                    </div>
                    <p className={active.includes(index) ? "question__answer_show" : "question__answer"}>{question.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;