import { useState, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import socketClient from 'socket.io-client'
const ENDPOINT = 'http://localhost:3000/'

const HomePage = () => {
  const [response, setResponse] = useState('')

  useEffect(() => {
    const socket = socketClient(ENDPOINT)
    socket.on('test', (data) => {
      setResponse(data)
    })

    return () => socket.disconnect()
  }, [])

  return (
    <>
      <div>
        <h1 className="p3">Skele</h1>
      </div>
    </>
  )
}

export default HomePage
