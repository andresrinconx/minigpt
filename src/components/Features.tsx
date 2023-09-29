
import React from 'react'
import Icon from '../../public/chatgptIcon.png'
import DallIcon from '../../public/dalleIcon.png'
import smartIcon from '../../public/smartaiIcon.png'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='space-y-4'>
      <p className='font-semibold text-gray-700 text-2xl mt-4'>Características</p>
      <div className='bg-emerald-200 p-4 rounded-xl space-y-2'>
        <div className='flex-row items-center space-x-1'>
          <Image src={Icon} alt='hola' className='w-10 h-10' />
          <p className='font-semibold text-gray-700 text-base'>ChatGPT</p>
        </div>
        <p className='text-gray-700 font-medium'>
          ChatGPT es un modelo de lenguaje que puede responder preguntas, proporcionar explicaciones y mantener conversaciones escritas con los usuarios.
        </p>
      </div>

      <div className='bg-purple-200 p-4 rounded-xl space-y-2'>
        <div className='flex-row items-center space-x-1'>
          <Image src={DallIcon} alt='hola2' className='w-10 h-10' />
          <p className='font-semibold text-gray-700 text-base'>DALL-E</p>
        </div>
        <p className='text-gray-700 font-medium'>
          DALL-E es un modelo de inteligencia artificial desarrollado por OpenAI que se centra en la generación de imágenes a partir de descripciones de texto.
        </p>
      </div>

      <div className='bg-cyan-200 p-4 rounded-xl space-y-2'>
        <div className='flex-row items-center space-x-1'>
          <Image src={smartIcon} alt='hola3' className='w-10 h-10' />
          <p className='font-semibold text-gray-700 text-base'>Smart AI</p>
        </div>
        <p className='text-gray-700 font-medium'>
          Un asistente de voz con las habilidades y capacidades que tienen ChatGPT y DALL-E. Provee una mejor experiencia, ofreciendo generacion de texto e imagenes.
        </p>
      </div>
    </div>
  )
}

export default Features