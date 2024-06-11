import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import resumep from '../../assets/images/resume prev.png'
import chatp from '../../assets/images/chatb.png'
import prof from '../../assets/images/engineering logo.jpg'
import poet from '../../assets/images/gitpic.png'
import ghost from '../../assets/images/ghost.png'
import php from '../../assets/images/php.png'
import pyth from '../../assets/images/python-logo.png'
import whywashu from '../../assets/images/whywashu.png'
import reel from '../../assets/images/instagram-reel.png'
import tok from '../../assets/images/tok1.png'
import commence from '../../assets/images/commence.png'
import intgit from '../../assets/images/interngit.png'
import { db } from '../../firebase';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    const resumeLink = "https://docs.google.com/document/d/1opfi2e2yLjNfGfBIZZnjSLrqXNv8ffGhipHT9X0fUEM/edit"; // Replace with your resume link
    const resumeImage = resumep; // Replace with the path to your resume image

    const chatbotLink = "https://www.facebook.com/WashU/"; // Replace with your chatbot link
    const chatbotImage = chatp; // Replace with the path to your chatbot image

    const profileLink = "https://engineering.wustl.edu/academics/student-profiles/Jake-Hoffman.html"; // Replace with your chatbot link
    const profileImage = prof; // Replace with the path to your chatbot image

    const poetLink = "https://github.com/hjake22/poetrepo?tab=readme-ov-file"; // Replace with your chatbot link
    const poetImage = poet;

    const ghostLink = "http://ec2-3-145-204-168.us-east-2.compute.amazonaws.com/~hjake22/poetrepofolder/html_and_css/poem10_2_23.html"; // Replace with your chatbot link
    const ghostImage = ghost;

    const phpLink = "http://ec2-3-145-204-168.us-east-2.compute.amazonaws.com/~hjake22/poetrepofolder/php/poemsharing.html"; // Replace with your chatbot link
    const phpImage = php;

    const pythLink = "https://github.com/hjake22/poetrepo/blob/main/python/poemregex.py"; // Replace with your chatbot link
    const pythImage = pyth;

    const whyLink = "https://www.youtube.com/watch?v=PQTB9Maclns&t=9s"; // Replace with your chatbot link
    const whyImage = whywashu;

    const reelLink = "https://www.instagram.com/reel/CyEDOCEra0S/";
    const reelImage = reel;
    
    const tokLink = "https://www.tiktok.com/@washu/video/7332941574424333610";
    const tokImage = tok;

    const commLink = "https://www.tiktok.com/@washu/video/7332941574424333610";
    const commImage = commence;

    const intLink = "https://github.com/hjake22/washusocial24summerintern";
    const intImage = intgit;
    

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="showcase-container">
                    <div className="showcase-item">
                        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={resumeImage}
                                alt="Resume"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>Professional Resume</h2></div>
                            </div>
                        </a>
                    </div>
                    <div className="showcase-item">
                        <a href={chatbotLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={chatbotImage}
                                alt="Chatbot"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>WashU Chatbot, made with chatfuel</h2></div>
                            </div>
                        </a>
                    </div>
                    <div className="showcase-item">
                        <a href={profileLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={profileImage}
                                alt="StudentProfile"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>McKelvey Engineering Student Profile</h2></div>
                            </div>
                        </a>
                    </div>

                    <div className="showcase-item">
                        <a href={intLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={intImage}
                                alt="DataSciIntern"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>Summer Intern Marketing & DataSci Repo</h2></div>
                            </div>
                        </a>
                    </div>


                    <div className="showcase-item">
                        <a href={poetLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={poetImage}
                                alt="PoetRepo"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>Poetry Repository (PoetRepo)</h2></div>
                            </div>
                        </a>
                    </div>

                    <div className="showcase-item">
                        <a href={ghostLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={ghostImage}
                                alt="htmlcss"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>HTML & CSS example (PoetRepo)</h2></div>
                            </div>
                        </a>
                    </div>

                    <div className="showcase-item">
                        <a href={phpLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={phpImage}
                                alt="phpex"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>PHP example (PoetRepo) (user1, user1pass)</h2></div>
                            </div>
                        </a>
                    </div>

                    <div className="showcase-item">
                        <a href={pythLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={pythImage}
                                alt="pythonex"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>Python example (PoetRepo) </h2></div>
                            </div>
                        </a>
                    </div>

                    <div className="showcase-item">
                        <a href={whyLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={whyImage}
                                alt="whywashu"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>Why WashU? (Social Media Host) </h2></div>
                            </div>
                        </a>
                    </div>

                    <div className="showcase-item">
                        <a href={reelLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={reelImage}
                                alt="reel"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>Instagram Reel (content example)</h2></div>
                            </div>
                        </a>
                    </div>

                    <div className="showcase-item">
                        <a href={tokLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={tokImage}
                                alt="tok"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>Creative/Comedy Tik Tok (example 2)</h2></div>
                            </div>
                        </a>
                    </div>

                    <div className="showcase-item">
                        <a href={commLink} target="_blank" rel="noopener noreferrer" className="showcase-link">
                            <img
                                src={commImage}
                                alt="commencement tok"
                                className="showcase-image"
                            />
                            <div className="overlay">
                                <div className="text"><h2>Commencement Tik Tok (example 3)</h2></div>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
            <Loader type="ball-grid-pulse" />
        </>
    );
}

export default Portfolio;