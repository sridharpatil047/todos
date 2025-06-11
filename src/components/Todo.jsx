import { useGlobalContext } from "../context/GlobalContextProvider"

function Todo() {
    const globalContext = useGlobalContext()
    const handleIncrement = () => {
        globalContext.incrementState()
    }
    return (
        <>
            <p>State : {globalContext.state}</p>
            <button onClick={handleIncrement}>+</button>
        </>
    )
}

export default Todo