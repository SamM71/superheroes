import React from 'react'
import { HeroCard } from '..'

const HeroCards = ({ heroes, clickFn }) => {
  return (
    <div className='grid-container'>
      {
        heroes.map(hero => <HeroCard key={hero.id} hero={hero} clickFn={clickFn}/>)
      }

    </div>
  )
}

export default HeroCards