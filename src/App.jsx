import { useState, useEffect } from 'react'
import './App.scss'
//import { motion } from "framer-motion"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function getFoods() {
      const url = 'https://api.spoonacular.com/food/ingredients/search?query=cheese&apiKey=613d9757cc56440da785de694e6dad2d'
      console.log(url)
      const response = await fetch(url)
      const food = await response.json()
      console.log(food)
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
          <div id="controls" className='my-5'>
            <input className="form-control" type="text" placeholder='Type some foods' />
          </div>
          <div className="row">
            <div className="food col-12 col-md-4">
              <img src="https://assets2.devourtours.com/wp-content/uploads/ajeet-panesar-_Tci2omfmHI-unsplash-scaled.jpg" alt="" />
              <h2>Food name</h2>
              <button className="btn btn-primary px-5">Nutrition values</button>
            </div>
          </div>
          <div className='text-center mt-5'>
            <button className="btn btn-primary btn-lg px-5">Next</button>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
