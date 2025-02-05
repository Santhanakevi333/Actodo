import { useState } from "react"
import TodoItem from "./Todoitem"


function TodoList(props)
{
const activityArr =props.activityArr
const setactivityArr = props.setactivityArr
    
    return(
<div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow  ">
                    <h1 className="text-2xl font-medium">Today's Activity</h1>
                    
                    {
                        activityArr.length===0?<p>You haven't added any activity yet</p>:""
                    }
                    {
                        activityArr.map(function(item,index){
                             return <TodoItem id={item.id} item={item} index={index} activityArr={activityArr} setactivityArr={setactivityArr}></TodoItem>
                        })
                    }
                </div>
    )
}
export default TodoList