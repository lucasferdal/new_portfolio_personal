import React from 'react'

const Skill = ({name, icon, imageWidth}) => {
  return (
    <div className='bg-[#f2f2f2] drop-shadow-md rounded-2xl w-32 h-40 pt-5 grid justify-items-center my-2'>
      <img src={icon} alt={name} width={imageWidth}/>
      <p>{name}</p>
    </div>
  )
}

export default Skill