import { useMemo, useState } from "react"

export const LearnCallBackHook=()=>{

    const [incrementOne, setIncrementOne] = useState(0)
    const [incrementTwo, setIncrementTwo] = useState(1)


    const handleIncrementOne=()=>{

        setIncrementOne(incrementOne + 1)
        
    }

    const handleIncrementTwo=()=>{
        setIncrementTwo(incrementTwo + 2)
        
    }

    const IsEven= useMemo(()=>{

    console.log(`Only Relation Increment One Function ${incrementOne}`)

    return incrementOne % 2 == 0
    
    }, [incrementOne])


    return(
        <div>
           <h1>Learn Call Back Hook</h1>

           <div style={{display : "flex" , gap:"30px"}}>
           <button style={{backgroundColor:"black" , color:"white"}} onClick={handleIncrementOne}>Increment One = {incrementOne}</button>

           {IsEven ? "Even" : "Odd"}

           <button style={{backgroundColor:"black" , color:"white"}} onClick={handleIncrementTwo}>Increment Two = {incrementTwo}</button>

           </div>
        </div>
    )
}