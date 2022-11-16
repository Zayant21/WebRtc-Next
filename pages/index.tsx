import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import logo from '../img/main/logo.png'

export default function Home() {
  const router = useRouter()
  const [roomName, setRoomName] = useState('')

  const joinRoom = () => {
    router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`)
  }

  return (
    
    <div className={styles.index_container}>
      
      <Head>
        <title>WebRTC with Next.js, Socket.io</title>
        <meta name="description" content="Native WebRTC" />
        <link rel="icon" href="/video-chat.ICO" />
      </Head>
      
      <div className={styles.heading}>
      <h2>WebRTC with Next.js Socket.io (Beta)</h2>
      </div>
  
      <main className={styles.main}>
      <h1>Lets Join a Room !</h1>
      
       <input onChange={(e) => setRoomName(e.target.value)} value={roomName} className={styles.heading2} />
       <button onClick={joinRoom} type="button" className={styles.fancybutton}>Join Room</button>
      </main>
      </div>
  )
}
