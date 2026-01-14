import { useState,useEffect } from "react";
import data from "../utils/data";
import Shimmer from "./Shimmer";
import Card from "./Card";
const Body =()=>{
    const [listofResto,setlistofResto]= useState([]);
    const [searchText,setSearchText]=useState("");
    const [filterListResto,setfilterListResto]=useState([]);

   useEffect(()=>{
        fetchD();
    },[])

    const fetchD = async() =>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING/restaurants/list/v5?lat=12.2958104&lng=76.6393805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=  await data.json();
        setlistofResto(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilterListResto(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
   if (listofResto.length===0){
    return(<Shimmer/>)
   }

  return(
    
    <div className="body">
        <div>
            <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
            <button onClick={
             ()=>{const searchbar=
                listofResto.filter(
                    (rest) => (rest).info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                console.log(searchbar)
                setfilterListResto(searchbar)
             }
            }>Search</button>
        </div>
        <div>
            <button onClick={
                ()=>{
                  const dude=  listofResto.filter(
                        (res) => res.info.avgRating >4.5
                    )
                    console.log(dude)
                    setfilterListResto(dude)
                }
            }>TopRated Resto</button>
        </div>
       <div className="resto-Container">
              {
                filterListResto.map(
                    (restaurant) =>( <Card key={restaurant.info.id} resdata={restaurant}/>)
                )
              }
              
       </div> 
    
    </div>
  )
}
export default Body