 import { memo } from "react"
 const ChildTodo=({todo,settodo,handleTodo})=>{

    console.log("child component Todo App")

    return(
        <div>
            <h2>Child Todo App</h2>
            <ul>
                <li>{todo}</li>
            </ul>
        </div>
    )
}

export default memo(ChildTodo)