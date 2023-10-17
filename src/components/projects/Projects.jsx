import React from 'react'
import Card from './Card'

const Projects = () => {

  const cardOptions = [
    { image: 'https://i.pinimg.com/originals/3d/01/ae/3d01ae9732806364793330042cdfdfe2.jpg', title: 'Digital Bank', text: 'Migracion de una website ya existente durante la pasantia de up-camp, cuenta con registro de usuarios, transacciones, depositos, etc.', badge: 'Storybook'}
  ]

  return (
    <div className='mt-28 mx-auto w-full '>
      <h2 className='text-3xl font-semibold text-center mb-6'>Ptojects</h2>
      <div className='flex justify-center'>
        {cardOptions.map((card, index) => {
          const { image, title, text, badge } = card
          return (
            <div key={index} >
              <Card image={image} title={title} text={text} badge={badge} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
