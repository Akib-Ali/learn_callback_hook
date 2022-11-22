 import { memo } from "react"
 const Child=(props)=>{
    console.log("Child Component")

    return(
        <div>
            <h3>Child Component</h3>
            <button style={{color:"red" , backgroundColor:"black"}} onClick={props.handleIncrementFive}>{`Increment fIVE ==  ${props.incrementFive}`}</button>
        </div>
    )
}

export  default memo(Child)