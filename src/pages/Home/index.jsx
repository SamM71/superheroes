import React, { useEffect, useState } from 'react';
import { HeroCards, Question, Score } from '../../components';

const Home = () => {
  const powerstatsArray = ["intelligence", "strength", "speed", "durability", "power", "combat"];
  const [randomPowerstat, setRandomPowerstat] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const randomPowerstat = powerstatsArray[Math.floor(Math.random() * powerstatsArray.length)];
    setRandomPowerstat(randomPowerstat);
  }, []);


  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <>
      <Question randomPowerstat={randomPowerstat} increaseScore={increaseScore} />
      <HeroCards />
      <Score score={score} />
    </>
  );
}

export default Home;
