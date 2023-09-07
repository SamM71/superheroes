import React, {useState, useEffect} from 'react'
import { HeroCards, Question, Score } from '../../components'

const Home = () => {
  // attribute, list of cards and that attribute
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchHeroes()
  }, [])

  async function fetchHero() {
    const id = Math.floor(Math.random() * 732)
    const response = await fetch(`https://www.superheroapi.com/api.php/2165233307012823/${id}`)
    const data = await response.json()
    console.log(data)
    heroes.push(data)
    // setHeroes(heroes)
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

  return (
    <>
      <Question />
      {
        loading ? <p>Loading...</p> : errorOrHeroes
      }
      <Score />
    </>
  )
}

export default Home