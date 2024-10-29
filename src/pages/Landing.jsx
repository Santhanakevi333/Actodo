import Header from "../components/Header"
import Card from "../components/card"
import TodoCondainer from "../components/TodoContainer"
import { data } from "autoprefixer"
import { useLocation } from "react-router-dom"
function Landing()
{
    const data =useLocation()
return(
    <div className="bg-black p-16">
      <div className="bg-white p-10 border rounded-md">
        {/* Header */}
        <Header username={data.state.user}></Header>
        {/* Card */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Avudaiyarkovil"}></Card>
        <Card bgcolor={"#FD6663"} title={"July-20"} subtitle={"07:30:01"}></Card>
        <Card bgcolor={"yellow"} title={"Build Using"} subtitle={"React"}></Card>
        </div>
        {/* Todocontainer */}
        <TodoCondainer></TodoCondainer>
        
       
        
</div>
    </div>
)
}
export default Landing