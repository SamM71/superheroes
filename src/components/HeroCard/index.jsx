import React from 'react'

const HeroCard = ({ hero }) => {
  // get random hero
  // contain stat
  console.log(hero)
  return (
    <div>
      <div>
        <img src={hero.image.url} alt={hero.name} />
      </div>
      <h2>{hero.name}</h2>
    </div>
  )
}

export default HeroCard