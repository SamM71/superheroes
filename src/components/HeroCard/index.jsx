import React from 'react'

const HeroCard = ({ hero, clickFn }) => {
  // get random hero
  // contain stat
  console.log(hero)
  // const clicker = useContext(ClickContext)
  return (
    <div className="grid-child">
      <div>
        <img className="hero-img" src={hero.image.url} alt={hero.name} onClick={clickFn} />
      </div>
      <h2>{hero.name}</h2>
    </div>
  )
}

export default HeroCard