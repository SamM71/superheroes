import React, { useEffect, useState } from 'react'
import { HeroCards, Question, Score } from '../../components'

const Home = () => {

  const powerstatsArray = ["intelligence", "strength", "speed", "durability", "power", "combat"];
  const [randomPowerstat, setRandomPowerstat] = useState('');

    useEffect(() => {
      const randomPowerstat = powerstatsArray[Math.floor(Math.random() * powerstatsArray.length)];
      setRandomPowerstat(randomPowerstat);
    }, []);


    
  return (
    <>
      <Question randomPowerstat={randomPowerstat} />
      <HeroCards />
      <Score />
    </>
  )
}

export default Home