import { useState, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import socketClient from 'socket.io-client'
const ENDPOINT = 'http://localhost:3000/'
const socket = socketClient(ENDPOINT)

const HomePage = () => {
  const [response, setResponse] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    socket.on('test', (data) => {
      setResponse(data)
    })

    return () => socket.disconnect()
  }, [])

  const handleClick = () => {
    socket.emit('test')
  }

  const handleMessageChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  const socketEmit = (type, value) => () => {
    socket.emit(type, value)
  }

  const sendMessage = (message) => {
    return () => {
      setMessage('')
      socket.emit('message', message)
    }
  }

  return (
    <>
      <div>
        <h1 className="p3">Skele</h1>
        <button onClick={handleClick}>test</button>
        <input
          type="text"
          value={message}
          onChange={(e) => handleMessageChange(e)}
        />
        <button onClick={sendMessage(message)}>send message</button>
      </div>
    </>
  )
}

export default HomePage
