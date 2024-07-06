import React from 'react'

const Firstcard = () => {
  return (
    <>
      <div className="bg-slate-200  grid place-content-center">
      <h1 className="my-2 text-3xl text-center font-bold text-slate-900">
        Nitin Rajput
      </h1>
      <div className="p-6 max-w-sm mx-auto bg-black shadow-lg rounded-xl flex items-center space-x-4">
        <div >
          <div>
            <img className="h-12 m-3"
              src="https://img.freepik.com/premium-photo/rajput-warrior-rajput-logo-with-elephants-curved-swords-tshirt-tattoo-ink-outline-cnc-design_655090-2101570.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="text-2xl font-medium">
            <h4 className="text-white">Tailwind CSS</h4>
            <p className="text-gray-300 text-base">By Nitin Patil</p>
          </div>
        </div>
      </div>

      <div className="p-6 my-2 max-w-sm mx-auto bg-black shadow-lg rounded-xl">
        <div className="mx-2">
          <div>
            <img className="mx-auto"
              src="https://img.freepik.com/premium-photo/rajput-warrior-rajput-logo-with-elephants-curved-swords-tshirt-tattoo-ink-outline-cnc-design_655090-2101570.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="text-2xl font-medium text-center">
            <h4 className="text-white">Tailwind CSS</h4>
            <p className="text-gray-300 text-base">By Nitin Patil</p>
          </div>
        </div>
      </div>

      <button className="font-bold dark:bg-red-500 bg-sky-600 rounded-xl p-5 hover:bg-slate-700 hover:text-white active:border-b-4">Buy Now</button>

    </div>
    </>
  )
}

export default Firstcard
