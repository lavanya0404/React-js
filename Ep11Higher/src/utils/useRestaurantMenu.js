import { useEffect, useState } from "react";
import { MenuURL } from "./constants";
const useRestaurantMenu=(resId)=>{
  const [resInfo,setResInfo] =useState(null);
  useEffect(() => {
    fetchMenu()
  }, [])
  const fetchMenu = async () => {
    const info = await fetch(MenuURL + resId)
    const json = await info.json()
    setResInfo(json)
    //console.log(json);
  }
  return resInfo;

}
export default useRestaurantMenu;