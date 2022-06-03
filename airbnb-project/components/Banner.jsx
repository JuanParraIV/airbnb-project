import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h-[700px] '>
      <Image
      src='https://links.papareact.com/0fm'
      layout='fill'
      objectFit='cover'
      alt='banner'

      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button
        className='bg-white text-purple-500 py-4 px-10 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-200 '
        type="button">
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
