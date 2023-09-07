import React from 'react'
import { HeroCards, Question, Score } from '../../components'

const Home = () => {

  const powerstatsArray = ["intelligence", "strength", "speed", "durability", "power", "combat"];

  // attribute, list of cards and that attribute
  return (
    <>
      <Question powerstatsArray={powerstatsArray} />
      <HeroCards />
      <Score />
    </>
  )
}

export default Home