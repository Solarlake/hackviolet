import React, { useState, useEffect } from "react";
import CountdownTimer from "react-countdown";
import "../style/Countdown.scss";

const Countdown = () => {
    const targetDate = new Date("2025-02-02T10:30:00-05:00").getTime();

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>Time's up!</span>;
        }
        else {
            const format = (num) => String(num).padStart(2, "0");

            return (
                <div className="timer">
                    <div className="timer_item">
                        <div className="timer_number">{format(hours)}</div>
                        <div className="timer_label"></div>
                    </div>
                    <div className="timer_item">
                        <div className="colon">:</div>
                    </div>
                    <div className="timer_item">
                        <div className="timer_number">{format(minutes)}</div>
                        <div className="timer_label"></div>
                    </div>
                    <div className="timer_item">
                        <div className="colon">:</div>
                    </div>
                    <div className="timer_item">
                        <div className="timer_number">{format(seconds)}</div>
                        <div className="timer_label"></div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="countdown_container">
            <CountdownTimer date={targetDate} renderer={renderer}/>
            <p className="subtext">
                until initial submissions are due @ Devpost (Feb 2 @ 10:30am)
            </p>
        </div>
    );
}

export default Countdown;