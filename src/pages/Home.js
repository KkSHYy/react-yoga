import React from 'react'
import Header from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Header/>
    <h1>This is a Home Page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sequi amet facere ipsa laborum rem nesciunt totam sapiente aliquam veritatis facilis, eos dignissimos atque placeat sunt hic repellendus natus asperiores.</p>
    <p>-----------------------------------------------------------------------------------------------------------------------------</p>
    <div className='navs divide-x-4 divide-slate-950' >
      <NavLink to='/'>Page1</NavLink>
      <NavLink to='page2'>Page2</NavLink>
    </div>

    <Outlet/>
    </div>
  )
}

export default Home