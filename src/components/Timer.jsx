import { useState } from "react"

function Timer(){
    const [mm, setMm] = useState(0)
    const [ss, setSs] = useState(0)
    const [time, setTime] = useState(0)

    const handleOnChange = (event) => {
        setTime(event.target.value)
        console.log(event.target.value)
    }

    const handleOnClick = () => {

    }
    return (
        <>
        <h1>Timer</h1>
        <div>
            <h3>{mm + ':' + ss}</h3>
        </div>
        <div>
            <input type="number" value={time} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>START</button>
        </div>
        </>
    )
}

export default Timer