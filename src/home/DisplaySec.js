import React from 'react'

const DisplaySec = () => {
  return (
    <div className='grid grid-cols-2 items-center sm:grid-cols-1 sm:mb-12'>
      <div className='dis-img h-[400px]'>
      <dotlottie-player src="https://lottie.host/88e634de-5358-4c82-a0de-cba237a72806/lzkBWD0p4B.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
       </div>

       <div className='dis-info space-y-2 sm:text-center sm:px-4' >
       <h1 className='text-3xl font-bold'>Hi, I am Kelley </h1>
        <p className='text-pink-700 italic'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
       </div>

    </div>
  )
}

export default DisplaySec