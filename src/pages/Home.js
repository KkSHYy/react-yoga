import React from 'react'
import { meal, recipe } from '../dummy/data'

const Home = () => {



  return (
    <div className='p-2 space-y-3'>
  <h1 className='text-2xl font-bold'>{recipe.name}</h1>
  <div className='img'>
    <img className='h-[200px] w-[200px]' src={recipe.image} alt="" />
  </div>
  <ol>
  <h1 className='text-xl font-bold'>Ingredients</h1>
   {
    recipe.ingredients.map((ing,i)=>{
      return <li key={i}>{`${i+1}.${ing}`}</li>
    })
   }
  </ol>
 
  <ol>
  <h1 className='text-xl font-bold'>Instructions</h1>
   {
    recipe.instructions.map((ins,i)=>{
      return <li key={i}>{`${i+1}.${ins}`}</li>
    })
   }
  </ol>

  <h1 className='text-2xl font-bold'>{meal.strMeal}</h1>
  <ol>
  <h1 className='text-xl font-bold'>Instructions</h1>
  {
    meal.strInstructions.split('.').map((ins,i)=>{
      return <li key={i}>{`${i+1}.${ins}`}</li>
  })
  }
  </ol>

  <ol>
  <h1 className='text-xl font-bold'>Category</h1>
  {
    meal.strCategory.split((you,i)=>
    {
      return <li key={i}>{`${i+1}.${you}`}</li>
    })
  }
  </ol>
  
    {/* <h1>This is a Home Page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sequi amet facere ipsa laborum rem nesciunt totam sapiente aliquam veritatis facilis, eos dignissimos atque placeat sunt hic repellendus natus asperiores.</p>
    <p>-----------------------------------------------------------------------------------------------------------------------------</p> */}
    
    </div>
  )
}

export default Home