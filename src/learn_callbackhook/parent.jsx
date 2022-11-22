import { useCallback, useState } from "react"
import ChildTodo from "./child"


export const ParentCounter=()=>{

    const [increment,setIncrement] = useState(0)
    const [todo,setTodo] = useState(["Akib Ali Siddiqui"])

    const handleCounter=()=>{
        setIncrement(increment+1)
    }

    const handleTodo= useCallback(()=>{
        console.log("kuc bhi")
    },[todo])

return(
    <div>
        <h1>Parent Component</h1>
        <ChildTodo todo={todo} setTodo={setTodo} handleTodo={handleTodo}/>
         <h3>Value is {increment} </h3>
         <button style={{color:"white", backgroundColor:"black"}} onClick={handleCounter}>Increment</button>
    </div>
)


}