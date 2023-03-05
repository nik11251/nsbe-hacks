import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";



const Home = () => {
  const [companyName, setCompanyName] = useState("");
  const [showImages, setShowImages] = useState(false);
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");

  const fetchData = async (input) => {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `Complete this sentence: "${input}"`,
        model: 'text-davinci-002',
        max_tokens: 100,
        temperature: 1,
        n: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );

    return response.data.choices[0].text;
  };

  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
    }
  }


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

<div>

<div class="grid-container">
  <div class="grid-item">
    {/* <!-- Left column content goes here --> */}
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
  <div class="grid-item">
    <div class="top-row">
      {/* <!-- Top row of right column content goes here --> */}
      <h2>Chat Bot</h2>
           <textarea
            value={input}
             onChange={(event) => setInput(event.target.value)}
             rows={10} cols={40}
             placeholder="Type Here..."

           />
           <button className="button" onClick={handleClick}>
             Complete Sentence
           </button>
    </div>
    <div class="bottom-row">
      {/* <!-- Bottom row of right column content goes here --> */}
      {completedSentence && (
             <div className="completed-sentence">Completed sentence: {completedSentence}</div>
       )}
    </div>
  </div>
</div>

</div>


  );
};

export default Home;

