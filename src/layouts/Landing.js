
import CubeIcon from "../assets/icons/cube.svg";
import ChairIcon from "../assets/icons/chair.svg";
import CupIcon from "../assets/icons/cup.svg";
import BadgeIcon from "../assets/icons/badge.svg";
import GoldenBadgeIcon from "../assets/icons/goldenbadge.svg";
import Symbol from "../assets/Symbol.png";
import Avatar from "../assets/avatar.png";
import LogoFade from "../assets/21logo-fade.svg";

import './Landing.css'
function Landing(props) {
    return (
        <section className="landing">
            <div className="space-50 d-md-none"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 landing-content">
                        <img src={LogoFade} alt="logo-fade" className="logo-fade"/>
                        <div className="content">
                            <h1 className="name">مجموعه ورزشی بیست و یک پلاس</h1>
                            <div className="title">هر روز با داستانی جدید</div>
                            <div className="notice">
                                ما با خود قرار گذاشته ایم تا به وقت تمام بی خیالی ها، شما را از دنیای خود خارج کرده و به
                                دنیایی پر از رنگ، شادی، بازی و... وارد کنیم
                            </div>
                            <ul className="buttons">
                                <li className="chair">
                                    <img src={ChairIcon} alt="chair"/>
                                    رزور آنلاین صندلی
                                </li>
                                <li className="cube">
                                    <img src={CubeIcon} alt="cube"/>
                                    ورود به بخش کیوب ها
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="symbol-container">
                            <img loading={"lazy"} src={Symbol} alt="symbol"/>
                        </div>
                    </div>
                    <div className="col-12">
                        {!props.isLoading ?
                            <div className="top-player">
                                <div className="player-card">
                                    <div className="player-avatar">
                                        <img src={Avatar} alt="user"/>
                                    </div>
                                    <ul className="user-info">
                                        <li className="name">
                                            <div className="username">
                                                {props.weekChampion.name+" "+props.weekChampion.family}
                                            </div>
                                            <div className="date">
                                                {props.weekChampion.nickname ? props.weekChampion.nickname : "بدون نام کاربری"}
                                            </div>
                                        </li>
                                        <li className="awards">
                                            <div className="item">
                                                <img src={BadgeIcon} alt="badge"/>
                                                <span className="strong">{props.weekChampion.win}</span>
                                                برد
                                            </div>
                                            <div className="item">
                                                <img src={CupIcon} alt="cup"/>
                                                <span className="strong">{props.weekChampion.score}</span>
                                                امتیاز
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="side-card">
                                    <img className="golden-badge" src={GoldenBadgeIcon} alt="golden-badge"/>
                                    <ul className="content">
                                        <li className="en">week champ</li>
                                        <li className="fa">بــازیـکــن بـرتـر هـفـتـه</li>
                                    </ul>
                                    <div className="arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20.33 14.79">
                                            <path
                                                d="M20.06,6.74L13.59.27c-.36-.36-.95-.36-1.31,0-.36.36-.36.95,0,1.31l4.89,4.89H.92C.41,6.47,0,6.88,0,7.39s.41.92.92.92h16.25l-4.89,4.89c-.36.36-.36.95,0,1.31s.95.36,1.31,0l6.47-6.47c.36-.36.36-.95,0-1.31,0,0,0,0,0,0h0Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            : null
                        }
                        <ul className="landing-social d-md-flex d-none">
                            <li>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.89 57.89">
                                        <path
                                            d="M43.58,17.88c-.63-1.64-1.93-2.93-3.56-3.56-1.12-.41-2.3-.63-3.49-.65-1.98-.09-2.57-.11-7.58-.11s-5.61.02-7.58.11c-1.19.01-2.37.23-3.49.65-1.64.63-2.93,1.93-3.56,3.56-.41,1.12-.63,2.3-.65,3.49-.09,1.98-.11,2.57-.11,7.58s.02,5.61.11,7.58c.01,1.19.23,2.37.65,3.49.63,1.64,1.93,2.93,3.56,3.56,1.12.41,2.3.63,3.49.65,1.98.09,2.57.11,7.58.11s5.61-.02,7.58-.11c1.19-.01,2.37-.23,3.49-.65,1.64-.63,2.93-1.93,3.56-3.56.41-1.12.63-2.3.65-3.49.09-1.98.11-2.57.11-7.58s-.02-5.61-.11-7.58c-.01-1.19-.23-2.37-.65-3.49ZM28.96,38.58h-.01,0c-5.32,0-9.64-4.32-9.64-9.64s4.31-9.64,9.64-9.64,9.64,4.31,9.64,9.64c0,5.32-4.31,9.64-9.63,9.64ZM38.96,21.18c-1.24,0-2.25-1.01-2.25-2.25s1.01-2.25,2.25-2.25,2.25,1.01,2.25,2.25-1.01,2.25-2.25,2.25Z"/>
                                        <path
                                            d="M28.95,22.69h0c-3.46,0-6.26,2.8-6.26,6.26s2.8,6.26,6.26,6.26,6.26-2.8,6.26-6.26c0-3.45-2.8-6.26-6.25-6.26Z"/>
                                        <path
                                            d="M28.94,0C12.96,0,0,12.96,0,28.95c0,15.99,12.96,28.94,28.95,28.94,15.99,0,28.94-12.96,28.94-28.95,0-15.99-12.96-28.95-28.95-28.95ZM47.6,36.68c-.03,1.56-.33,3.1-.87,4.56-.98,2.52-2.97,4.51-5.49,5.49-1.46.55-3,.84-4.56.87-2,.09-2.64.11-7.74.11s-5.74-.02-7.74-.11c-1.56-.03-3.1-.33-4.56-.87-2.52-.98-4.51-2.97-5.49-5.49-.55-1.46-.84-3-.87-4.56-.09-2-.11-2.64-.11-7.74s.02-5.74.11-7.74c.03-1.56.33-3.1.87-4.56.98-2.52,2.97-4.51,5.49-5.49,1.46-.55,3-.84,4.56-.87,2-.09,2.64-.1,7.74-.1s5.74.02,7.74.11c1.56.03,3.1.33,4.56.87,2.52.98,4.51,2.97,5.49,5.49.55,1.46.84,3,.87,4.56.09,2,.11,2.64.11,7.74s-.02,5.73-.11,7.73Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.67 38.67">
                                        <polygon
                                            points="10.89 9.44 24.75 29.27 27.76 29.27 13.9 9.44 10.89 9.44"/>
                                        <path
                                            d="M19.33,0C8.65,0,0,8.66,0,19.33s8.66,19.33,19.33,19.33c10.68,0,19.33-8.66,19.33-19.33,0-10.68-8.66-19.33-19.33-19.33ZM23.83,30.68l-6.06-8.82-7.59,8.82h-1.96l8.68-10.09L8.22,7.96h6.62l5.74,8.35,7.19-8.35h1.96l-8.28,9.62,9,13.1h-6.62Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.67 38.67">
                                        <path
                                            d="M14.7,17.58c-1.28,0-2.37.96-2.51,2.24-.16,1.39.84,2.64,2.22,2.8s2.64-.84,2.8-2.22c.08-1.47-1.04-2.73-2.51-2.82Z"/>
                                        <path
                                            d="M23.98,17.58c-1.28,0-2.37.96-2.51,2.24-.16,1.39.84,2.64,2.22,2.8s2.64-.84,2.8-2.22h0c.08-1.48-1.04-2.73-2.51-2.82Z"/>
                                        <path
                                            d="M19.33,0C8.65,0,0,8.66,0,19.33s8.66,19.33,19.33,19.33c10.68,0,19.33-8.66,19.33-19.33,0-10.68-8.66-19.33-19.33-19.33ZM33.15,26.45c-2.11,1.56-4.47,2.76-6.99,3.53-.04.01-.08,0-.1-.03-.53-.74-1.01-1.51-1.43-2.32-.02-.04,0-.1.04-.12,0,0,0,0,0,0,.75-.28,1.48-.63,2.18-1.04.04-.03.06-.08.03-.12,0,0-.01-.02-.02-.03-.15-.11-.29-.23-.43-.34-.03-.02-.06-.03-.09-.01-4.45,2.09-9.59,2.09-14.04,0-.03-.01-.06,0-.09.01-.14.11-.29.23-.43.34-.04.03-.05.09-.02.13,0,0,.02.02.03.02.7.4,1.43.75,2.18,1.04.05.02.07.07.05.11,0,0,0,0,0,.01-.41.81-.89,1.59-1.43,2.32-.02.03-.06.04-.1.03-2.51-.77-4.87-1.96-6.98-3.53-.02-.02-.03-.04-.04-.07-.57-5.62.89-11.27,4.13-15.9,0-.01.02-.03.04-.03,1.81-.83,3.72-1.43,5.69-1.76.04,0,.07.01.09.04.27.47.51.96.72,1.46,2.12-.32,4.27-.32,6.39,0,.21-.5.45-.98.71-1.46.02-.03.05-.05.09-.04,1.96.34,3.88.93,5.69,1.76.02,0,.03.02.04.03,3.25,4.63,4.72,10.28,4.13,15.9,0,.03-.02.05-.04.06h0Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.67 38.67">
                                        <path
                                            d="M19.33,0C8.65,0,0,8.66,0,19.33s8.66,19.33,19.33,19.33c10.68,0,19.33-8.66,19.33-19.33,0-10.68-8.66-19.33-19.33-19.33ZM19.33,33.98c-8.09,0-14.65-6.56-14.65-14.65s6.56-14.65,14.65-14.65,14.65,6.56,14.65,14.65-6.56,14.65-14.65,14.65Z"/>
                                        <path
                                            d="M25.9,13.67c-.17-.11-.37-.17-.57-.17-.55.01-1.4.31-5.46,2-1.43.59-4.27,1.82-8.54,3.68-.69.27-1.06.54-1.09.81-.06.51.67.66,1.58.96.74.26,1.5.45,2.28.54.58-.03,1.13-.23,1.59-.59,3.99-2.69,6.05-4.06,6.18-4.09.1-.04.21-.03.3.03.06.07.09.17.07.26-.07.31-3.82,3.72-4.04,3.94-.83.86-1.76,1.38-.32,2.33,1.25.83,1.98,1.35,3.27,2.2.82.54,1.47,1.18,2.32,1.1.39-.03.79-.4,1-1.5.49-2.59,1.44-8.22,1.66-10.53.02-.19,0-.39-.02-.58-.02-.15-.09-.3-.21-.4Z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="space-25"></div>
        </section>
    );
}

export default Landing;