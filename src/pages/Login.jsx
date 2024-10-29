import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const navigate=useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [ruser,setRuser] = useState(true)

    const users = props.users
    
    
    function handleUInput(evt) {
        setEusername(evt.target.value)
    }
    function handlePInput(evt) {
        setEpassword(evt.target.value)
    }
    function checkUser() {
        
        var userfound = false
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) 
            {
                console.log("login successful")
                userfound=true
                navigate("/landing",{state:{user:eusername}})
            }
           
        })
        if (userfound === false)
        {
            console.log("login failed")
            setRuser(false)
        }

    }
    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded">
                <h1 className="text-3xl font-medium">Hey Hi!</h1>
                {ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">*Please sign up before you Login*</p>}
                
                <div className="flex flex-col gap-2 mt-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleUInput}></input>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={handlePInput}></input>

                    <button className="bg-purple-600 w-24 border rounded-md p-1" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">SignUp</Link> </p>
                </div>
            </div>

        </div>
    )
}

export default Login

