import React, { useEffect, useState } from 'react';

const Question = ({ randomPowerstat }) => {
  const [question, setQuestion] = useState('');

  useEffect(() => {

    const questionText = `Which hero has higher ${randomPowerstat}?`;
    setQuestion(questionText);
  }, [randomPowerstat]);

  return (
    <div>
      <h1>{question}</h1>
    </div>
  );
};

export default Question;
