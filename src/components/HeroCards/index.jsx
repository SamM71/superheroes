import React from 'react'
import { HeroCard } from '..'

const HeroCards = ({ heroes }) => {
  return (
    <div className='grid-container'>
      {
        heroes.map(hero => <HeroCard key={hero.id} hero={hero}/>)
      }

    </div>
  )
}

export default HeroCards