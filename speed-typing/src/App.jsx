import React from "react"


function App() {
    const [input, setInput] = React.useState('');
    const [timeRemaining, setTimeRemaining] = React.useState(0);
    const [gamePlaying, setGamePlaying] = React.useState(false);
    const [wordCount, setWordCount] = React.useState(null)


    const handleChange = (e) => {
        const {value} = e.target
        setInput(value)
    }

    React.useEffect(() => {
        if (gamePlaying) {
            incrementTimer()
        }
    }, [timeRemaining, gamePlaying])

    const incrementTimer = () => {
        if (timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevTimeRemaining => {
                return prevTimeRemaining - 1
            })
        }, 1000)
        } else {
            calculateWords(input)
            setGamePlaying(false)
        }
    }

    const startGame = () => {
        setInput('')
        setTimeRemaining(10)
        setGamePlaying(true);
    }

    const calculateWords = (text) => {
        let wordCount = text.split(' ').filter(word => word != '').length;
        setWordCount(wordCount);
    }

    return (
        <div>
            <h1>How fast do you Type?</h1>
            <textarea 
                disabled={!gamePlaying}
                value={input}
                onChange={handleChange}
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