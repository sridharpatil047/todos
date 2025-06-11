import { useState, useEffect } from 'react'

function Counter() {
    const [width, setWidth] = useState(1080)
    const [height, setHeight] = useState(300)
    const [image, setImage] = useState(null)
    const [word, setWord] = useState('Hello World')

    const handleWidth = (e) => {
        setWidth(e.target.value)
    }
    const handleHeight = (e) => {
        setHeight(e.target.value)
    }

    const fetchWords = async () => {
        const response = await fetch('https://random-word-api.vercel.app/api?words=2&length=5&type=capitalized&alphabetize=true')
        const words = await response.json()
        console.log(words)
        setWord(words[0] + ' ' + words[1])
    }

    const fetchImage = () => {
        const image = new Image()
        image.src = `https://placehold.co/${width}x${height}?text=${word}`
        setImage(image.src)
    }

    useEffect(() => {
        setImage(null)
        fetchImage()
    }, [width, height, word])

    return (
        <>
            <div>
                <h1>Image Display</h1>
                {console.log(image)}
                {image ? <img src={image} alt="counter" /> : <p>Loading...</p>}
                <h3>{word}</h3>
            </div>
            <div>
                <input type="number" value={width} onChange={handleWidth} />
                <input type="number" value={height} onChange={handleHeight} />
            </div>
            <div>
                <button onClick={fetchWords}>Random</button>
            </div>
        </>
    )
}

export default Counter