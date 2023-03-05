import React, { useState, useEffect } from "react";
import "./Home.css";


const Home = () => {
  const [companyName, setCompanyName] = useState("");
  const [index, setIndex] = useState(0);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const name = "This project has been developed for the hackathon NSBE. It is meant to assist minorities by easing their troubles my providing them access to well trusted therapists working on pro bono cases. Furthermore, the website utilizes an API from OpenAi to integrate a chat bot for users to ask general or inquisitive questions. We have also provided users with the ability to speak to like minded individuals about their problems via webcams and mic, while allowing them to rate their experience at the end of a call. These ratings will be used ti match those of similar levels together, hopefully bettering the experience for users. We pride ourselves in inclusivity and are always working towards supporting those in need.";
    let interval;

    const updateCompanyName = () => {
      setCompanyName((prevName) => {
        const nextIndex = prevName.length + 1;
        return name.substring(0, nextIndex);
      });
    };

    const startTypingAnimation = () => {
      interval = setInterval(updateCompanyName, 25);
    };

    const stopTypingAnimation = () => {
      clearInterval(interval);
      setCompanyName(name);
      setShowImages(true);
    };

    startTypingAnimation();

    setTimeout(stopTypingAnimation, name.length * 25 + 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="header">


        <h1 className="login">NSBE</h1>


        
        <img src={require("./Uoft.png")} className="image" alt="Uoft logo" />
      </div>

      <div className="company-name">
        <b>{companyName}</b>
      </div>

      {showImages && (
        <div className="image-container">
        <img src={require("./people.jpg")} alt="people" />
      </div>
      )}
    </div>
  );
};

export default Home;

