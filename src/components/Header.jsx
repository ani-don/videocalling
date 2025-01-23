import React from 'react'
import Blob from './Bolb'
import { useState } from 'react'

const Header = () => {

    const  [input, setInput]=useState('')


    const submitHandler =()=>{
        if (input) {
            window.location.href = `/room/${input}`;
        }
    }
  return (



    <div class="bg-white">
   

    <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 py-10 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p class="text-base font-semibold tracking-wider text-blue-600 uppercase">A media for across make connections </p>
                    <h1 class="mt-4 text-4xl font-light text-black lg:mt-8 sm:text-6xl xl:text-8xl">Meet With your 
                        Family & Friends
                    </h1>
                    <p class="mt-4 text-base text-red-400 lg:mt-8 sm:text-xl">Start a Free conference cALL With your friends . family or team members sign up </p>

                    <button href="#" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                        Join for free
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <div class="relative p-2 mt-4 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e)=>setInput(e.target.value)}
                                    name=""
                                    id=""
                                    placeholder="Enter Room Id"
                                    class="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                    required=""
                                />
                                <div class="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                    <button onClick={submitHandler} type="submit" class="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Join</button>
                                </div>
                            </div>
                    <p class="mt-5 text-gray-600">Already joined us? <a href="#" title="" class="text-black transition-all duration-200 hover:underline">Log in</a></p>
                </div>
           

                <div>
                  <Blob/>  <img  class="w-full" src=""alt=""   />
                </div>
            </div>
        </div>
    </section>
</div>

  )
}

export default Header
