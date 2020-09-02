import { useState, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import socketClient from 'socket.io-client'
const ENDPOINT = 'http://localhost:3000/'
const socket = socketClient(ENDPOINT)

const HomePage = () => {
  return (
    <>
      <div>
        <h1 className="p3">Skele</h1>
        <h2>welcome to skel</h2>
      </div>
    </>
  )
}

export default HomePage
