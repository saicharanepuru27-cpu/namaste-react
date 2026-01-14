import { useEffect, useState } from "react";

const Restaurant = () => {
  const [restlist, setrestlist] = useState([]);

  const fetcher = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.2958104&lng=76.6393805&restaurantId=245")
    const json = await data.json();
    setrestlist(json);
    console.log(json)
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div>
      <h1>Restaurant Menu</h1>

      <ul className="items">
        <li>Veg Meals</li>
        <li>North Indian</li>
        <li>South Indian</li>
      </ul>
    </div>
  );
};

export default Restaurant;
