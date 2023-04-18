import React from "react"
import useWordGame from './hooks/useWordGame'


function App() {
    const {
        input,
        timeRemaining,
        gamePlaying,
        wordCount,
        inputRef,
        handleChange,
        incrementTimer,
        startGame
    }                       = useWordGame()

   





    return (
        <div>
            <h1>How fast do you Type?</h1>
            <textarea 
                disabled={!gamePlaying}
                value={input}
                onChange={handleChange}
                ref={inputRef}
            />

            <h4>Time remaining: {timeRemaining}</h4>

            <button 
                disabled={gamePlaying}
                onClick={startGame}
            >   StartGame
            </button>

            {(!gamePlaying && wordCount) && <h1>{'Word count: ' + wordCount}</h1>}
        </div>
    )
}

export default App