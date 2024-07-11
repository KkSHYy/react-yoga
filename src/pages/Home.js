import React from 'react'

const Home = () => {

  const numbers = [22,44,66,88];

  return (
    <div>
  {numbers.map((e,i)=>
  {
    return <h1 key={i}>{'hello ${e} sddfg'}</h1>
  })}
  
    <h1>This is a Home Page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sequi amet facere ipsa laborum rem nesciunt totam sapiente aliquam veritatis facilis, eos dignissimos atque placeat sunt hic repellendus natus asperiores.</p>
    <p>-----------------------------------------------------------------------------------------------------------------------------</p>
    </div>
  )
}

export default Home