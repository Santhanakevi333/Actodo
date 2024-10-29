import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function SignUp(props) {
    const navigate=useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()


    function handleUInput(evt) {
        setEusername(evt.target.value)
    }
    function handlePInput(evt) {
        setEpassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate('/')
    }



    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded">
                <h1 className="text-3xl font-medium">Hey Hi!</h1>
                <p>SignUp here :)</p>
                <div className="flex flex-col gap-2 mt-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleUInput}></input>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={handlePInput}></input>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Confirm Password"></input>
                    <button className="bg-yellow-500 w-24 border rounded-md p-1" onClick={addUser}>SignUp</button>
                    <p>Already have an account ? <Link to={"/"} className="underline">Login</Link> </p>
                </div>
            </div>

        </div>
    )
}

export default SignUp