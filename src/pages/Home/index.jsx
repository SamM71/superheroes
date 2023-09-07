import React, { useEffect, useState } from 'react';
import { HeroCards, Question, Score } from '../../components';

const Home = () => {
  const powerstatsArray = ["intelligence", "strength", "speed", "durability", "power", "combat"];
  const [randomPowerstat, setRandomPowerstat] = useState('');
  const [score, setScore] = useState(0);
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const increaseScore = () => {
    setScore(prevScore => prevScore + 1);
    fetchNewQuestionAndHeroes();
  };

  useEffect(() => {
    fetchNewQuestionAndHeroes();
  }, []);

  const fetchNewQuestionAndHeroes = async () => {
    // Fetch new heroes
    await fetchHeroes();

    // Generate a new random powerstat
    const randomPowerstat = powerstatsArray[Math.floor(Math.random() * powerstatsArray.length)];
    setRandomPowerstat(randomPowerstat);
  };

  async function fetchHero() {
    const id = Math.floor(Math.random() * 732);
    try {
      const response = await fetch(`https://www.superheroapi.com/api.php/2165233307012823/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      return null;
    }
  }

  async function fetchHeroes() {
    try {
      const newHeroes = [];
      for (let i = 0; i < 2; i++) {
        const hero = await fetchHero();
        if (hero) {
          newHeroes.push(hero);
        }
      }
      setHeroes(newHeroes);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  const errorOrHeroes = error ? error : <HeroCards heroes={heroes} />;

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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : heroes.length > 0 ? (
        <>
          <p>{heroes[0].name}</p>
          <HeroCards heroes={heroes} />
        </>
      ) : (
        <p>No heroes available</p>
      )}
      {/* Button to test score increasing functionality */}
      <button onClick={() => increaseScore()}>Increase Score</button>
      <Score score={score} />
    </>
  );
};

export default Home;
