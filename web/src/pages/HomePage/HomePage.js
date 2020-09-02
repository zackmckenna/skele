import { useState, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import socketClient from 'socket.io-client'
const ENDPOINT = 'http://localhost:3000/'
const socket = socketClient(ENDPOINT)

const HomePage = () => {
  const [response, setResponse] = useState('')

  useEffect(() => {
    socket.on('test', (data) => {
      setResponse(data)
    })

    return () => socket.disconnect()
  }, [])

  const handleClick = () => {
    socket.emit('test')
  }

  return (
    <>
      <div>
        <h1 className="p3">Skele</h1>
        <button onClick={() => handleClick()}>test</button>
      </div>
    </>
  )
}

export default HomePage
