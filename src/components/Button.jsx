import React from 'react'

function Button(props) {
  return (
    <button className='min-w-fit  w-[200px] bg-[#D94100] rounded-md font-semibold text-white md:text-xl text-base text-center md:p-4 p-2'>
      {props.text}
    </button>
  )
}

export default Button
