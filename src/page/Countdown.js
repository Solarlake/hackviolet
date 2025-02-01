import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import CountdownTimer from "react-countdown";
import LogoWhite from "../asset/image/logo_white_full.png";
import "../style/Countdown.scss";

const Countdown = () => {
    const location = useLocation();
    
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);


    const targetDate = new Date("2025-02-02T12:30:00-05:00").getTime();

    const renderer = ({ hours, minutes, seconds, completed }) => {
        const format = (num) => String(num).padStart(2, "0");

        const dec2bcd = (dec) => {
            const binary = parseInt(dec.toString(10),16).toString(2).padStart(8, "0")
            return [binary.slice(0, 4), binary.slice(4, 8)]
        }
        

        return (
            <div className="timer">
                <div className="binary">
                        {[...dec2bcd(hours)].map((digit, index) => (
                            <div className="binary_digit">
                                {[...digit].map((bit, index) => (
                                    <div className={`bit ${bit === "1" ? "on" : "off"}`}></div>
                                ))}
                            </div>
                            )
                        )}
                        {[...dec2bcd(minutes)].map((digit, index) => (
                            <div className="binary_digit">
                                {[...digit].map((bit, index) => (
                                    <div className={`bit ${bit === "1" ? "on" : "off"}`}></div>
                                ))}
                            </div>
                            )
                        )}
                        {[...dec2bcd(seconds)].map((digit, index) => (
                            <div className="binary_digit">
                                {[...digit].map((bit, index) => (
                                    <div className={`bit ${bit === "1" ? "on" : "off"}`}></div>
                                ))}
                            </div>
                            )
                        )}
                </div>
                
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
    };

    return (
        <div className="countdown_container">
            <CountdownTimer date={targetDate} renderer={renderer}/>
            <p className="subtext">
                until coding stops and final submissions are due @ Devpost (Feb. 2 @ 12:30pm)
            </p>
            <a href="/" className="logo_link">
                <img src={LogoWhite} alt="" className="logo_white" />
            </a>
        </div>
    );
}

export default Countdown;