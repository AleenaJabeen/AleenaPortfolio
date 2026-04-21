import React from 'react'

function Button(props) {
  return (
    <button className='cursor-pointer min-w-fit  w-[200px] bg-[#116a9f] rounded-md font-semibold text-white md:text-xl text-base text-center md:p-4 p-2'>
      {props.text}
    </button>
  )
}

export default Button
