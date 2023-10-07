"use client"

import { useState, useRef } from 'react'
import { apiCall } from '../../api/openAI'
import Image from 'next/image'
import { TrashIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Bot from '../../../public/bot.png'
import Features from '@/components/Features'

export default function HomePage() {

  const [messages, setMessages] = useState<any[]>([])
  const [result, setResult] = useState('')
  const ScrollViewRef = useRef()

  const clear = () => {
    setMessages([])
  }

  const send = () => {
    if(result.trim().length > 0) {
      let newMessages: any = [...messages]
      newMessages.push({role: 'user', content: result.trim()})
      setMessages([...newMessages] as any)
      setResult('')
      updateScrollView()

      apiCall(result.trim(), newMessages)
        .then(res => {
          if(res.success) {
            setMessages([...res.data] as any)
            updateScrollView()
            setResult('')
          } else {
            setResult('')
            updateScrollView()
          }
        }
      )
    }
  }

  const updateScrollView = () => {
    // setTimeout(() => {
    //   ScrollViewRef?.current?.scrollToEnd({animated: true})
    // }, 200);
  }

  return (
    <div className='flex-1 h-[100vh] bg-white'>
      <div className='flex flex-col items-center mx-5 pt-10'>
        {/* icon */}
        <div className='flex flex-row justify-center'>
          <Image src={Bot} alt='bot-image' className='w-32 h-32' />
        </div>

        {/* features */}
        {
          messages.length > 0
            ? (
              <div className='space-y-2 w-[80%]'>
                <p className='font-semibold p-gray-700 p-2xl mt-4'>Asistente</p>
                <div className='bg-neutral-200 w-full rounded-3xl p-4 h-[88%] max-h-[88%]'>
                  <div className='space-y-4 pb-10'>
                    {
                      messages.map((message, index) => {
                        if(message.role == 'assistant') {
                          if(message.content.includes('https')) {
                            // Image
                            return (
                              <div className='flex flex-row justify-start w-60' key={index}>
                                <div className='bg-emerald-200 rounded-2xl flex p-2 rounded-tl-none'>
                                  <Image
                                    className='rounded-2xl'
                                    width={50}
                                    height={50}
                                    src={message.content} 
                                    style={{width: 230, height: 230,}} 
                                    alt='image'
                                  />
                                </div>
                              </div>
                            )
                          } else {
                            // p
                            return (
                              <div className='flex flex-row justify-start w-full max-w-4xl' key={index}>
                                <div className='bg-emerald-200 rounded-xl p-2 rounded-tl-none'>
                                  <p className='p-base text-gray-700'>{message.content}</p>
                                </div>
                              </div>
                            )
                          }
                        } else {
                          // user input
                          return (
                            <div className='flex flex-row justify-end w-full' key={index}>
                              <div className='bg-white rounded-xl p-2 rounded-tr-none'>
                                <p className='p-base text-gray-700'>{message.content}</p>
                              </div>
                            </div>
                          )
                        }
                      })
                    }
                  </div>
                </div>
              </div>
            ) : (
              <Features />
            )
        }

        {/* input */}
        <div className='flex flex-row items-center w-[80%] h-24 pt-4 rounded-t-lg space-x-4 pb-10'>

          <div className={`bg-emerald-300 flex flex-row items-center h-full ${messages.length > 0 ? 'w-[95%]' : 'w-[100%]'} rounded-3xl flex-row justify-between items-center p-1`}>
            <input className='w-[80%] pl-6 p-xl p-[#666] bg-emerald-300 focus:outline-none'
              placeholder='Mensaje'
              value={result}
              onChange={e => setResult(e.target.value)}
            />
            {result.trim().length > 0
              && (
                <button onClick={() => send()} className='rounded-full bg-white p-2'>
                  <PaperAirplaneIcon className='h-5 w-5' color='rgb(110 231 183)' />
                </button>    
              )
            }
          </div>
          {
            messages.length > 0
              && (
                <button onClick={() => clear()} className='bg-neutral-400 rounded-3xl p-2'>
                  <TrashIcon className='h-5 w-5' color='white' />
                </button>
              )
          }
        </div>
      </div>
    </div>
  )
}