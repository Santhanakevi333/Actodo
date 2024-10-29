import Header from "./components/Header"
import Card from "./components/card"
import TodoCondainer from "./components/TodoContainer"

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import Landing from "./pages/Landing"
import { useState } from "react"


function App()
{
    const[users,setusers]=useState(
        [
            {
                username:"kevin",
                password:"123"
            },
            {
                username:"abc",
                password:"134"
            }
        ]
    )
    return(
<div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/signup' element={<SignUp  users={users} setusers={setusers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>

</div>  
    )
}


export default App

