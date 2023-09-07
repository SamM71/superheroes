import React from 'react'
import { HeroCard } from '..'

const HeroCards = ({ heroes }) => {
  return (
    <div>
      {
        heroes.map(hero => <HeroCard key={hero.id} hero={hero}/>)
      }

    </div>
  )
}

export default HeroCards