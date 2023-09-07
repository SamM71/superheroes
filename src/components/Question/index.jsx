import React, { useEffect, useState } from 'react';

const Question = ({ powerstatsArray }) => {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    // Get random powerstat 
    const randomPowerstat = powerstatsArray[Math.floor(Math.random() * powerstatsArray.length)];

    // Create question based on random powerstat
    const questionText = `Which hero has a higher ${randomPowerstat}?`;
    setQuestion(questionText);
  }, []);

  return (
    <div>
      <h1>{question}</h1>
    </div>
  );
};

export default Question;
