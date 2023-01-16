import React from 'react'

const Tarifs = () => {
  return (
    <div id='tarifs' className='w-full lg:h-screen py-16'>
      <div className='max-w-[80%] m-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#01647C]'>Tarifs</p>
        <div className='grid  lg:grid-cols-5 gap-8'>

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80' alt="/" />
              </div>
              <div >
                <p className='py-4'>* Prix petit déjeuner compris pour 2 personnes maxi</p>
                <p className='py-4'>* Bébé gratuit</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tarifs
