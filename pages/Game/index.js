import { useState } from "react"


export default function Game() {
    const [isGameRunning, setIsGameRunning] = useState(false)

    function handleGameState(){
        setIsGameRunning(state => !state)
    }
    return(
        <div className="flex items-center justify-center">
            {isGameRunning? 
            <iframe src="http://127.0.0.1:5500/index.html" width="100%" className="h-screen"/>
        :
        <button className="px-48 py-6 mt-72 mb-72 bg-pink rounded-lg shadow-xl" onClick={handleGameState}>Start</button>
        }
            
        </div>
    )
}