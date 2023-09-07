import React, { useEffect, useState } from 'react';

const Question = ({ randomPowerstat }) => {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    let questionText = '';

    if (randomPowerstat === 'intelligence') {
      questionText = 'Who is more intelligent?';
    } else if (randomPowerstat === 'strength') {
      questionText = 'Who is stronger?';
    } else if (randomPowerstat === 'speed') {
      questionText = 'Who is faster?';
    } else if (randomPowerstat === 'durability') {
      questionText = 'Who is more durable?';
    } else if (randomPowerstat === 'power') {
      questionText = 'Who wields more power?';
    } else if (randomPowerstat === 'combat') {
      questionText = 'Who has higher combat ability?';
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
