import React from 'react'

function Header() {
  return (
        <div className='h-20 flex justify-around items-center bg-[#78c043]'>
            <div><h1 className='text-4xl'>LOGO</h1></div>
            <div className=''>
                <a href="" className='mx-4 pb-0.5 bg-secondary hover:border-b-2 border-[#a6e72a]'>About Us</a>
                <a href="" className='mx-4 pb-0.5 bg-secondary hover:border-b-2 border-[#a6e72a]'>Services</a>
                <a href="" className='mx-4 pb-0.5 bg-secondary hover:border-b-2 border-[#a6e72a]'>Portfolio</a>
                <a href="" className='mx-4 pb-0.5 bg-secondary hover:border-b-2 border-[#a6e72a]'>Careers</a>
                <a href="" className='mx-4 pb-0.5 bg-secondary hover:border-b-2 border-[#a6e72a]'>Contact Us</a>
            </div>
            <div><button className='bg-black text-white px-4 py-2 rounded'>GET STARTED</button></div>
        </div>
  )
}

export default Header