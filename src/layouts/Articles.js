import './Articles.css'
import axios from "axios";
import React, {useEffect, useState} from "react";
import ConvertToShamsiDate from "../components/ConverToShamsiDate";
import Skeleton from "../components/Skeleton";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";
import {Link} from "react-router-dom";


function Articles(props) {

    function removeHtmlTags(str) {
        // Step 1: Remove HTML tags
        const noTags = str.replace(/<\/?[^>]+(>|$)/g, "");
        // Step 2: Decode HTML entities
        const textArea = document.createElement("textarea");
        textArea.innerHTML = noTags;
        return textArea.value;
    }
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState();

    function  getArticles(){
        axios.get(process.env.REACT_APP_API+"articles", )
            .then(response => {
                setArticles(response.data.articles);
                setLoading(false);
            })
            .catch(error => {
                if (!error.response)
                    console.log("network")
                console.log(error);;
                setLoading(false);
            });
    }
    useEffect(() => {
        getArticles()
    }, []);
    return (
        <section className="articles w-100">
            <div className="row">
                <div className="col-12 section-top">
                    <div className="section-header">
                        <h3 className="head">
                            اخبار و مقالات آموزشی
                        </h3>
                        <h4 className="notice mb-0">
                            مقالات آموزشی بازی مافیا مناسب سطوح مختلف
                        </h4>
                    </div>
                    <Link style={{position : "absolute", top : -2, left : 15}} to="/articles/archive?page=1">
                    <div className="header-more">
                            <svg className="more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.52 23.48">
                                <path
                                    d="M.58,13.13c.4.65.97,1.17,1.66,1.49.33.15.46.54.31.87s-.54.46-.87.31h0c-.26-.13-.51-.27-.75-.44.72,2.12,2.7,3.55,4.94,3.55h.04c-.04-.36-.05-.72-.03-1.08.29-3.48,3.22-6.14,6.71-6.09h3.71c.36,0,.65-.29.65-.65h0c0-1.08.88-1.96,1.96-1.96h1.96c.36.03.63.34.6.7-.03.32-.28.57-.6.6h-1.96c-.36,0-.65.29-.65.65h0c0,1.08-.87,1.96-1.95,1.96,0,0,0,0,0,0h-3.71c-2.8-.05-5.16,2.08-5.41,4.87-.03.49,0,.99.12,1.47.03.13.06.25.1.38.04.15.1.3.16.45l.02.04c.62,1.49,1.9,2.62,3.46,3.05h.05c.12.04.24.07.36.09.06.01.12.02.19.03.09.01.18.03.27.03.16.01.33.02.49.02,1.65,0,3.2-.79,4.18-2.11-.31-.2-.61-.41-.89-.65-.26-.25-.28-.66-.03-.92.23-.24.6-.28.87-.08,3.32,2.76,8.24,2.31,11-1.01.33-.4.63-.83.87-1.29-.35-.48-.62-1.01-.79-1.57-.1-.35.09-.71.44-.81.35-.1.71.09.81.44.61,2.07,2.78,3.26,4.86,2.65,2.07-.61,3.26-2.78,2.65-4.86-.31-1.04-1.03-1.91-2-2.4-.08.38-.19.75-.33,1.11-.14.33-.52.49-.86.35-.32-.14-.48-.5-.36-.82.2-.53.34-1.08.4-1.64.01-.09.02-.17.02-.26.01-.16.02-.31.02-.47,0-2.83-1.82-5.34-4.52-6.2.2.31.39.64.55.97.16.32.04.71-.29.88-.32.16-.71.04-.88-.29,0-.02-.01-.03-.02-.05-1.56-3.29-5.49-4.69-8.78-3.13-.24.11-.48.24-.7.39-.3.2-.71.11-.91-.19s-.11-.71.19-.91c.1-.06.2-.12.3-.18-1.38-.66-3-.56-4.3.25.3.27.57.57.81.9.21.3.13.7-.16.91-.3.21-.7.13-.91-.16h0c-.31-.44-.7-.81-1.16-1.09h0c-1.7-1.06-3.92-.65-5.13.94.26.07.51.17.75.28.33.15.46.54.31.87s-.54.46-.87.31c-1.96-.92-4.29-.08-5.2,1.88-.1.22-.19.45-.25.69.35-.13.71-.23,1.09-.28.36-.05.69.2.74.55s-.2.69-.55.74c-.6.09-1.16.31-1.66.65h0C-.02,9.05-.5,11.34.57,13.11c0,0,0,.02,0,.02Z"/>
                            </svg>
                            مشـاهـده بیـشـتـر
                    </div>
                    </Link>
                </div>
                {!loading ?
                    <div className="w-100">
                        <div className="d-flex d-md-none pr-3">

                            <Swiper
                                slidesPerView={"auto"}
                                spaceBetween={20}
                                modules={[FreeMode,]}
                                className="pl-3"
                                freeMode={true}
                            >
                                {articles.map((item, index) => {
                                    return <SwiperSlide className="mobile-article" key={index}>
                                        <div key={index} className="mt-2 mb-3">
                                            <article className="article">
                                                <div className="img-container curve">
                                                    <Link to={`/article/${item.slug}`}>
                                                    {item.image ?
                                                        <img src={item.image} alt={item.title}/>
                                                        :
                                                        <svg className="blank-image" xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 426.67 426.67">
                                                            <path
                                                                d="M12.37,362.88l-.43.43c-5.76-12.59-9.39-26.88-10.88-42.67,1.49,15.57,5.55,29.65,11.31,42.24ZM149.33,178.77c28.04,0,50.78-22.73,50.78-50.77s-22.73-50.78-50.77-50.78h0c-28.04,0-50.77,22.74-50.77,50.78,0,28.04,22.73,50.77,50.77,50.77Z"/>
                                                            <path
                                                                d="M302.72,0H123.95C46.29,0,0,46.29,0,123.95v178.77c0,23.25,4.05,43.52,11.95,60.59,18.35,40.53,57.6,63.36,112,63.36h178.77c77.65,0,123.95-46.29,123.95-123.95V123.95C426.67,46.29,380.37,0,302.72,0ZM391.89,224c-16.64-14.29-43.52-14.29-60.16,0l-88.75,76.16c-16.64,14.29-43.52,14.29-60.16,0l-7.25-5.97c-15.15-13.23-39.25-14.51-56.32-2.99l-79.79,53.55c-4.69-11.95-7.47-25.81-7.47-42.03V123.95c0-60.16,31.79-91.95,91.95-91.95h178.77c60.16,0,91.95,31.79,91.95,91.95v102.4l-2.77-2.35Z"/>
                                                        </svg>
                                                    }
                                                    </Link>
                                                </div>
                                                {/*<div className="share">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.38 13.2">
                                                        <path
                                                            d="M10.06,8.56c-.74,0-1.43.35-1.86.95l-3.66-1.87c.16-.5.13-1.03-.07-1.51l3.83-2.3c.83.96,2.29,1.07,3.26.24.96-.83,1.07-2.29.24-3.26-.83-.96-2.29-1.07-3.26-.24-.51.44-.8,1.08-.8,1.76,0,.29.06.57.16.83l-3.84,2.31c-.84-.96-2.31-1.06-3.27-.22-.96.84-1.06,2.31-.22,3.27.84.96,2.31,1.06,3.27.22.14-.12.26-.25.36-.4l3.65,1.87c-.07.22-.11.45-.11.68,0,1.28,1.04,2.32,2.32,2.32s2.32-1.04,2.32-2.32-1.04-2.32-2.32-2.32h0Z"/>
                                                    </svg>
                                                </div>*/}
                                                <ul className="content">
                                                    <li className="head">
                                                        <Link to={`/article/${item.slug}`}>
                                                        <h5>{item.title}</h5>
                                                        </Link>
                                                    </li>
                                                    <li className="description">
                                                        <p>
                                                            {removeHtmlTags(item.description).substring(0, 100)}
                                                            ...
                                                        </p>
                                                    </li>
                                                    <li className="footer">
                                                        <ul className="foot-items">
                                                            <li className="item">
                                                                {item.comment}
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                                     x="0" y="0" viewBox="0 0 24 24">
                                                                    <g>
                                                                        <path
                                                                            d="M24 11.247A12.012 12.012 0 1 0 12.017 24H19a5.005 5.005 0 0 0 5-5v-7.753ZM22 19a3 3 0 0 1-3 3h-6.983a10.041 10.041 0 0 1-7.476-3.343 9.917 9.917 0 0 1-2.476-7.814 10.043 10.043 0 0 1 8.656-8.761 10.564 10.564 0 0 1 1.3-.082A9.921 9.921 0 0 1 18.4 4.3a10.041 10.041 0 0 1 3.6 7.042Z"></path>
                                                                        <path
                                                                            d="M8 9h4a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2ZM16 11H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2ZM16 15H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z"></path>
                                                                    </g>
                                                                </svg>
                                                            </li>
                                                            <li className="item">
                                                                {item.like}
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                                     x="0" y="0" viewBox="0 0 24 24">
                                                                    <g>
                                                                        <path
                                                                            d="M17.5 1.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 0 0 6.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 0 0-6.5-7.05Zm-3.585 18.4a2.973 2.973 0 0 1-3.83 0C4.947 16.006 2 11.87 2 8.967a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05 1 1 0 0 0 2 0 4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 2.903-2.947 7.039-8.085 11.346Z">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </li>
                                                            <li className="item release">
                                                                <ConvertToShamsiDate gregorianDate={item.created_at}
                                                                                     article={1}/>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 18.1 18.1">
                                                                    <path
                                                                        d="M9.96,18.1h-4.53c-.5,0-.9-.4-.9-.9s.4-.9.9-.9h4.53c3.12,0,5.75-2.24,6.25-5.32.28-1.67-.12-3.35-1.11-4.73-.99-1.38-2.45-2.29-4.13-2.56-.33-.05-.68-.08-1.03-.08-3.18,0-5.89,2.39-6.29,5.55-.06.49-.51.84-1.01.78-.49-.06-.84-.51-.78-1C2.39,4.88,5.86,1.81,9.96,1.81c.44,0,.88.04,1.3.1,2.16.35,4.04,1.52,5.31,3.29s1.77,3.92,1.42,6.07c-.65,3.95-4.03,6.82-8.03,6.83ZM7.24,15.39H2.71c-.5,0-.9-.4-.9-.9s.4-.9.9-.9h4.53c.5,0,.9.4.9.9s-.4.9-.9.9ZM5.43,12.67H.9c-.5,0-.9-.4-.9-.9s.4-.9.9-.9h4.53c.5,0,.9.4.9.9s-.4.9-.9.9ZM9.96,10.86c-.5,0-.9-.4-.9-.9v-3.62c0-.5.4-.9.9-.9s.9.4.9.9v3.62c0,.5-.4.9-.9.9ZM11.77,1.8h-3.62c-.5,0-.9-.4-.9-.9s.4-.9.9-.9h3.62c.5,0,.9.4.9.9s-.4.9-.9.9Z"/>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                            </article>
                                        </div>
                                    </SwiperSlide>
                                    /*<SwiperSlide key={index}>
                                        <div className="col-lg-4 mt-2 mb-3">
                                            <article className="article">
                                                <div className="img-container">
                                                    <Skeleton border={1} width={"100%"} height={"100%"}/>
                                                    <svg className="blank-image position-absolute"
                                                         style={{zIndex: 5, fill: "rgb(211 211 211)"}}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 426.67 426.67">
                                                        <path
                                                            d="M12.37,362.88l-.43.43c-5.76-12.59-9.39-26.88-10.88-42.67,1.49,15.57,5.55,29.65,11.31,42.24ZM149.33,178.77c28.04,0,50.78-22.73,50.78-50.77s-22.73-50.78-50.77-50.78h0c-28.04,0-50.77,22.74-50.77,50.78,0,28.04,22.73,50.77,50.77,50.77Z"/>
                                                        <path
                                                            d="M302.72,0H123.95C46.29,0,0,46.29,0,123.95v178.77c0,23.25,4.05,43.52,11.95,60.59,18.35,40.53,57.6,63.36,112,63.36h178.77c77.65,0,123.95-46.29,123.95-123.95V123.95C426.67,46.29,380.37,0,302.72,0ZM391.89,224c-16.64-14.29-43.52-14.29-60.16,0l-88.75,76.16c-16.64,14.29-43.52,14.29-60.16,0l-7.25-5.97c-15.15-13.23-39.25-14.51-56.32-2.99l-79.79,53.55c-4.69-11.95-7.47-25.81-7.47-42.03V123.95c0-60.16,31.79-91.95,91.95-91.95h178.77c60.16,0,91.95,31.79,91.95,91.95v102.4l-2.77-2.35Z"/>
                                                    </svg>
                                                </div>
                                                <ul className="content">
                                                    <li className="head">
                                                        <Skeleton width={"100px"} height={"20px"}/>
                                                    </li>
                                                    <li className="description mb-3">
                                                        <Skeleton width={"100%"} height={"10px"}/>
                                                        <Skeleton width={"100%"} height={"10px"}/>
                                                        <Skeleton width={"70%"} height={"10px"}/>
                                                    </li>
                                                    <li className="footer">
                                                        <Skeleton width={"100%"} border={1} height={"30px"}/>
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                    </SwiperSlide>*/
                                })}
                            </Swiper>
                        </div>

                        <div className="d-md-flex d-none ">
                            {articles.map((item, index) => (
                                <div key={index} className="col-lg-4 mt-2 mb-3">
                                    <article className="article">
                                        <div className="img-container">
                                            <Link to={`/article/${item.slug}`}>
                                                {item.image ?
                                                    <img src={item.image} alt={item.title}/>
                                                    :
                                                    <svg className="blank-image" xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 426.67 426.67">
                                                        <path
                                                            d="M12.37,362.88l-.43.43c-5.76-12.59-9.39-26.88-10.88-42.67,1.49,15.57,5.55,29.65,11.31,42.24ZM149.33,178.77c28.04,0,50.78-22.73,50.78-50.77s-22.73-50.78-50.77-50.78h0c-28.04,0-50.77,22.74-50.77,50.78,0,28.04,22.73,50.77,50.77,50.77Z"/>
                                                        <path
                                                            d="M302.72,0H123.95C46.29,0,0,46.29,0,123.95v178.77c0,23.25,4.05,43.52,11.95,60.59,18.35,40.53,57.6,63.36,112,63.36h178.77c77.65,0,123.95-46.29,123.95-123.95V123.95C426.67,46.29,380.37,0,302.72,0ZM391.89,224c-16.64-14.29-43.52-14.29-60.16,0l-88.75,76.16c-16.64,14.29-43.52,14.29-60.16,0l-7.25-5.97c-15.15-13.23-39.25-14.51-56.32-2.99l-79.79,53.55c-4.69-11.95-7.47-25.81-7.47-42.03V123.95c0-60.16,31.79-91.95,91.95-91.95h178.77c60.16,0,91.95,31.79,91.95,91.95v102.4l-2.77-2.35Z"/>
                                                    </svg>
                                                }
                                            </Link>
                                        </div>
                                        {/*<div className="share">*/}
                                        {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.38 13.2">*/}
                                        {/*        <path*/}
                                        {/*            d="M10.06,8.56c-.74,0-1.43.35-1.86.95l-3.66-1.87c.16-.5.13-1.03-.07-1.51l3.83-2.3c.83.96,2.29,1.07,3.26.24.96-.83,1.07-2.29.24-3.26-.83-.96-2.29-1.07-3.26-.24-.51.44-.8,1.08-.8,1.76,0,.29.06.57.16.83l-3.84,2.31c-.84-.96-2.31-1.06-3.27-.22-.96.84-1.06,2.31-.22,3.27.84.96,2.31,1.06,3.27.22.14-.12.26-.25.36-.4l3.65,1.87c-.07.22-.11.45-.11.68,0,1.28,1.04,2.32,2.32,2.32s2.32-1.04,2.32-2.32-1.04-2.32-2.32-2.32h0Z"/>*/}
                                        {/*    </svg>*/}
                                        {/*</div>*/}
                                        <ul className="content">
                                            <li className="head">
                                                <Link to={`/article/${item.slug}`}>
                                                    <h5>{item.title}</h5>
                                                </Link>
                                            </li>
                                            <li className="description">
                                                <p>
                                                    {removeHtmlTags(item.description).substring(0, 100)+"  ..."}
                                                </p>
                                            </li>
                                            <li className="footer">
                                                <ul className="foot-items">
                                                    <li className="item">
                                                        {item.comment}
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                             x="0" y="0" viewBox="0 0 24 24">
                                                            <g>
                                                                <path
                                                                    d="M24 11.247A12.012 12.012 0 1 0 12.017 24H19a5.005 5.005 0 0 0 5-5v-7.753ZM22 19a3 3 0 0 1-3 3h-6.983a10.041 10.041 0 0 1-7.476-3.343 9.917 9.917 0 0 1-2.476-7.814 10.043 10.043 0 0 1 8.656-8.761 10.564 10.564 0 0 1 1.3-.082A9.921 9.921 0 0 1 18.4 4.3a10.041 10.041 0 0 1 3.6 7.042Z"></path>
                                                                <path
                                                                    d="M8 9h4a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2ZM16 11H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2ZM16 15H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z"></path>
                                                            </g>
                                                        </svg>
                                                    </li>
                                                    <li className="item">
                                                        {item.like}
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                             x="0" y="0" viewBox="0 0 24 24">
                                                            <g>
                                                                <path
                                                                    d="M17.5 1.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 0 0 6.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 0 0-6.5-7.05Zm-3.585 18.4a2.973 2.973 0 0 1-3.83 0C4.947 16.006 2 11.87 2 8.967a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05 1 1 0 0 0 2 0 4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 2.903-2.947 7.039-8.085 11.346Z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </li>
                                                    <li className="item release">
                                                        <ConvertToShamsiDate gregorianDate={item.created_at}
                                                                             article={1}/>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.1 18.1">
                                                            <path
                                                                d="M9.96,18.1h-4.53c-.5,0-.9-.4-.9-.9s.4-.9.9-.9h4.53c3.12,0,5.75-2.24,6.25-5.32.28-1.67-.12-3.35-1.11-4.73-.99-1.38-2.45-2.29-4.13-2.56-.33-.05-.68-.08-1.03-.08-3.18,0-5.89,2.39-6.29,5.55-.06.49-.51.84-1.01.78-.49-.06-.84-.51-.78-1C2.39,4.88,5.86,1.81,9.96,1.81c.44,0,.88.04,1.3.1,2.16.35,4.04,1.52,5.31,3.29s1.77,3.92,1.42,6.07c-.65,3.95-4.03,6.82-8.03,6.83ZM7.24,15.39H2.71c-.5,0-.9-.4-.9-.9s.4-.9.9-.9h4.53c.5,0,.9.4.9.9s-.4.9-.9.9ZM5.43,12.67H.9c-.5,0-.9-.4-.9-.9s.4-.9.9-.9h4.53c.5,0,.9.4.9.9s-.4.9-.9.9ZM9.96,10.86c-.5,0-.9-.4-.9-.9v-3.62c0-.5.4-.9.9-.9s.9.4.9.9v3.62c0,.5-.4.9-.9.9ZM11.77,1.8h-3.62c-.5,0-.9-.4-.9-.9s.4-.9.9-.9h3.62c.5,0,.9.4.9.9s-.4.9-.9.9Z"/>
                                                        </svg>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </article>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    :
                    Array.from({length: 3}).map((_, index) => {
                        return <div key={index} className="col-lg-4 mt-2 mb-3">
                            <article className="article">
                                <div className="img-container">
                                    <Skeleton border={1} width={"100%"} height={"100%"}/>
                                    <svg className="blank-image position-absolute"
                                         style={{zIndex: 5, fill: "rgb(211 211 211)"}}
                                         xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 426.67 426.67">
                                        <path
                                            d="M12.37,362.88l-.43.43c-5.76-12.59-9.39-26.88-10.88-42.67,1.49,15.57,5.55,29.65,11.31,42.24ZM149.33,178.77c28.04,0,50.78-22.73,50.78-50.77s-22.73-50.78-50.77-50.78h0c-28.04,0-50.77,22.74-50.77,50.78,0,28.04,22.73,50.77,50.77,50.77Z"/>
                                        <path
                                            d="M302.72,0H123.95C46.29,0,0,46.29,0,123.95v178.77c0,23.25,4.05,43.52,11.95,60.59,18.35,40.53,57.6,63.36,112,63.36h178.77c77.65,0,123.95-46.29,123.95-123.95V123.95C426.67,46.29,380.37,0,302.72,0ZM391.89,224c-16.64-14.29-43.52-14.29-60.16,0l-88.75,76.16c-16.64,14.29-43.52,14.29-60.16,0l-7.25-5.97c-15.15-13.23-39.25-14.51-56.32-2.99l-79.79,53.55c-4.69-11.95-7.47-25.81-7.47-42.03V123.95c0-60.16,31.79-91.95,91.95-91.95h178.77c60.16,0,91.95,31.79,91.95,91.95v102.4l-2.77-2.35Z"/>
                                    </svg>
                                </div>
                                <ul className="content">
                                    <li className="head">
                                        <Skeleton width={"100px"} height={"20px"}/>
                                    </li>
                                    <li className="description mb-3">
                                        <Skeleton width={"100%"} height={"10px"}/>
                                        <Skeleton width={"100%"} height={"10px"}/>
                                        <Skeleton width={"70%"} height={"10px"}/>
                                    </li>
                                    <li className="footer">
                                        <Skeleton width={"100%"} border={1} height={"30px"}/>
                                    </li>
                                </ul>
                            </article>
                        </div>
                    })
                }
            < /div>
            <div className="space-50"></div>
            <div className="space-25"></div>
        </section>

    );
}

export default Articles;