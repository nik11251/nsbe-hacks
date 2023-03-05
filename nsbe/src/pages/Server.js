import React, { useState } from 'react';
import openai from 'openai';

const apiKey = "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"; // replace with your own API key
const gpt3 = new openai.GPT3({
  apiKey: apiKey
});

const Server = () => {
  const [response, setResponse] = useState('');

  const generateResponse = () => {
    const prompt = "Hello, I'm ChatGPT. How can I help you today?";
    const params = {
      prompt: prompt,
      maxTokens: 50,
      temperature: 0.7,
      n: 1,
      stop: "\n"
    };

    gpt3.complete(params).then((response) => {
      setResponse(response.choices[0].text);
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div>
      <button onClick={generateResponse}>Generate Response</button>
      <p>{response}</p>
    </div>
  );
};

export default Server;
