import { useState, useEffect } from 'react'
import './App.scss'

function Food({foodId}) {

  console.log(foodId)

  useEffect(() => {
    async function getFoods() {
      // const url = 'https://api.spoonacular.com/food/ingredients/search?query=cheese&apiKey=613d9757cc56440da785de694e6dad2d'
      // console.log(url)
      // const response = await fetch(url)
      // const food = await response.json()
      // console.log(food)
    }
    getFoods()
  })

  return (
    <>
    <header id="header">
      <div className="container">
        <h1 className="display-1">CalorieCraft</h1>
      </div>
    </header>
    <main>
      <section>
        <div className="container">
          <h1>{{foodId}}</h1>
        </div>
      </section>
    </main>
    </>
  )
}

export default Food
