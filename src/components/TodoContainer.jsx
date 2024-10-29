import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoCondainer() {
    const[activityArr,setactivityArr]=useState([
        {
            id:1,
            activity:"go for a walk"
        },
        {
            id:2,
            activity:"Have brush"
        },
        {
            id:3,
            activity:"bath"
        }

    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}></AddTodoForm>
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}></TodoList>

            </div>
        </div>
    )
}
export default TodoCondainer