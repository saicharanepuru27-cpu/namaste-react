import { useState } from "react"
import { Link } from "react-router-dom"

const Header =()=>{
    const [login,setLogin]=useState("Login")
    return(
        <div className="headercomponet">
            <div >
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/016/271/090/original/food-logo-design-restaurant-logo-design-free-vector.jpg"/>
            </div>
            <div className="Items">
               <ul className="list">
                 <li><Link to='/'>Home</Link></li>
                 <li><Link to='/about'>About</Link></li>
                 <li><Link to='/cart'>Cart</Link></li>
                 <button onClick={
                    ()=>{
                      login==="Login"?setLogin("Logout"):setLogin("Login")
                    }
                 }>{login}</button>
               </ul>
            </div>
        </div>
    )
}
export default Header