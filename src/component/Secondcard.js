import React from 'react'

const Secondcard = () => {
  return (
    <>
     <div className="p-8  bg-slate-200 rounded-xl">
        <div className='mx-auto  max-w-sm grid h-screen place-content-center md:flex'>
            <div >
                <img className=' object-cover md:max-w-xl md:w-48' style={{width:"30rem"}} src="https://m.media-amazon.com/images/I/61aEvQakwOL._AC_UF894,1000_QL80_.jpg" alt=""/>
            </div>
            <div className='p-6 '>
                <h4 className='text-orange-600 text-md font-medium md:max-w-xl md:text-base uppercase' style={{width:"18rem"}}>Shree Chatrapati Shivaji Maharaj</h4>
                <p className='text-slate-600 md:text-md md:font-normal text-justify'>One of Indian history's enlightened and bravest rulers is the legendary Shivaji Maharaj. He was the one who laid the foundation of the Maratha Empire and welded the Marathas into a nation by infusing the new spirit of dignity and unity into the 96 clans of Marathas. <span className='text-zinc-700 bg-yellow-200 p-1'> " The great Shivaji was born in the year 1630 AD."</span></p>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Secondcard
