import React, { useRef, useState } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'



const game = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  scene: {
    init: function() {
      this.load.image("blue","/assets/red-card.png")
    },
    create: function() {
    const image = this.add.image(400,400, "blue")
    },
    update: function() {
      
    }
  }
}

export default function App () {
  const gameRef = useRef(null)
  const [initialize, setInitialize] = useState(false)
  const destroy = () => {
    if (gameRef.current) {
      gameRef.current.destroy()
    }
    setInitialize(false)
  }
  return (
      <>    
        <div className='mt-10'>
            <IonPhaser ref={gameRef} game={game} initialize={initialize} />
        </div>
        <div className='flex justify-around pt-48 pb-48'>
            {!initialize?
                <button className='px-48 py-6 mt-12 bg-green rounded-lg shadow-xl' onClick={() => setInitialize(true)}>
                    <p className='text-5xl font-sans '>Play</p>
                </button>:
                <button className='px-48 py-6 mt-12 bg-pink rounded-lg shadow-xl' onClick={destroy}>Quit Game</button>
            }

             
        </div>
    </>

  )
}

