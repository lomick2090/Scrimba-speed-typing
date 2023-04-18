import React from 'react'

export default function useWordGame() {
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

    const inputRef = React.useRef(null);

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
        setGamePlaying(true)
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    const calculateWords = (text) => {
        let wordCount = text.split(' ').filter(word => word != '').length;
        setWordCount(wordCount);
    }

    return {
        input,
        timeRemaining,
        gamePlaying,
        wordCount,
        inputRef,
        handleChange,
        incrementTimer,
        startGame
    }
}