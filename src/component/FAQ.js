import React from "react";
import "../style/FAQ.scss";
import FAQData from "../content/faq.json";
import AngleRight from "../asset/svg/angle-right.svg";

const FAQ = () => {
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
        <div className="questions">
            {FAQData.map((question, index) => (
                <div key={index} className="question">
                    <div className="header" onClick={() => toggle(index)}>
                        <p className="question__title">{question.question}</p>
                        <img src={AngleRight} alt="" className={active.includes(index) ? "arrow arrow__down" : "arrow"}/>
                    </div>
                    <p className={active.includes(index) ? "question__answer_show" : "question__answer"}>{question.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;