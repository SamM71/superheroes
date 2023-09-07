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

  const decreaseScore = () => {
    setScore(prevScore => prevScore - 1);
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

  const errorOrHeroes = error ? error : <HeroCards heroes={heroes}  />;

  
 

  function compareStats(index) {


    if (heroes.length >= 2) {
      const hero0 = heroes[0].powerstats[randomPowerstat];
      const hero1 = heroes[1].powerstats[randomPowerstat];
  
      if (hero0 > hero1 && index == 0) {
        increaseScore()
      } else if (hero0 < hero1 && index == 1) {
        increaseScore()
      } else if (hero0 == hero1) {
        console.log('Stats are equal');
        increaseScore()
      } else {
        decreaseScore()
      }
    } else {
      return 'Error: not enough heroes for comparison';
    }
  }
  
  const buttons = heroes.length > 0 ? (
    <>
      <button onClick={() => compareStats(0)}>{heroes[0].name}</button>
      {heroes.length > 1 && (
        <button onClick={() => compareStats(1)}>{heroes[1].name}</button>
      )}
    </>
  ) : <p>No heroes available</p>;

  return (
    <>
      {/* <ClickContext.Provider value={increaseScore()}> */}
      <Question randomPowerstat={randomPowerstat} />
      {
        loading ? <p>Loading...</p> : errorOrHeroes
      }
      {
      loading ? <p>Loading...</p> : buttons
      }

      <Score score={score} />
      {/* </ClickContext.Provider> */}
    </>
  );
};

export default Home;
