import React, { useEffect, useState } from 'react';

const Question = ({ randomPowerstat }) => {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    let questionText = '';

    if (randomPowerstat === 'intelligence') {
      questionText = 'Who is the most intelligent?';
    } else if (randomPowerstat === 'strength') {
      questionText = 'Who is the strongest?';
    } else if (randomPowerstat === 'speed') {
      questionText = 'Who is the fastest?';
    } else if (randomPowerstat === 'durability') {
      questionText = 'Who is the most durable?';
    } else if (randomPowerstat === 'power') {
      questionText = 'Who wields the most power?';
    } else if (randomPowerstat === 'combat') {
      questionText = 'Who has the highest combat ability?';
    }

    setQuestion(questionText);
  }, [randomPowerstat]);

  return (
    <div>
      <h1>{question}</h1>
    </div>
  );
};

export default Question;
