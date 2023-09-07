import React, { useEffect, useState } from 'react'
import { HeroCards, Question, Score } from '../../components'

const Home = () => {

  const powerstatsArray = ["intelligence", "strength", "speed", "durability", "power", "combat"];
  const [randomPowerstat, setRandomPowerstat] = useState('');
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(prevScore => prevScore + 1);
  };

  useEffect(() => {
    const randomPowerstat = powerstatsArray[Math.floor(Math.random() * powerstatsArray.length)];
    setRandomPowerstat(randomPowerstat);
  }, []);



  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchHeroes()
  }, [])

  async function fetchHero() {
    if (heroes.length < 2) {
      const id = Math.floor(Math.random() * 732)
      const response = await fetch(`https://www.superheroapi.com/api.php/2165233307012823/${id}`)
      const data = await response.json()
      console.log(data)
      // if (heroes.length < 2)
      heroes.push(data)
      // setHeroes(heroes)
    }
  }

  async function fetchHeroes() {
    try {
      await fetchHero()
      await fetchHero()
      console.log(heroes)
      setLoading(false)
    } catch (error) {
      setError(error.message)
    }
  }

  const errorOrHeroes = error ? error : <HeroCards heroes={heroes} />

 

  function compareStats(randomPowerstat) {
    if (heroes.length >= 2) {
      const hero1 = heroes[0].powerstats[randomPowerstat];
      const hero2 = heroes[1].powerstats[randomPowerstat];
  
      if (hero1 > hero2) {
        return true;
      } else if (hero1 < hero2) {
        return false;
      } else {
        console.log('Stats are equal');
        return true;
      }
    } else {
      return 'Error: not enough heroes for comparison';
    }
  }
  
  


  return (
    <>
      <Question randomPowerstat={randomPowerstat} />
      {
        loading ? <p>Loading...</p> : errorOrHeroes
      }
      {/* button to test score increasing functionality */}
      <button onClick = {() => increaseScore()}>Increase Score</button>
      
      <Score score={score} />
    </>
  )
}

export default Home