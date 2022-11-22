import { useState } from "react"
import Child from "./child"
// import Child  from "./child"

export const Parent=()=>{


    const [incrementOne, setIncrementOne] = useState(0)
    const [incrementFive, setIncrementFive] = useState(5)

    const handleIncrementOne=()=>{

        setIncrementOne(incrementOne+1)
    }

    const handleIncrementFive=()=>{

        setIncrementFive(incrementFive +5)
    }

    return(
        <div>
             {/* <Child/> */}
             <Child handleIncrementFive={handleIncrementFive} setIncrementFive={setIncrementFive} incrementFive={incrementFive}/>
            <h3>Parent Component</h3>
            <button style={{color:"white", backgroundColor:"black"}} onClick={handleIncrementOne}>Increment By One == {incrementOne}</button>
        </div>

    )
}