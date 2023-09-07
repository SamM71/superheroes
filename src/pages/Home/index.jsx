import React from 'react'
import { HeroCards, Question, Score } from '../../components'

const Home = () => {
  // attribute, list of cards and that attribute
  return (
    <>
      <Question />
      <HeroCards />
      <Score />
    </>
  )
}

export default Home