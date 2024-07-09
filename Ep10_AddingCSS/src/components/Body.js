import RestroCard from "./RestroCard"
import { useState } from "react"
import { useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus'
const Body = () => {
  const [listOfRest, setlistOfRest] = useState([])
  const [filteredRest, setFilteredRest] = useState([])
  const [searchText, setSearchText] = useState("")
 
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550"
    )
    const jsonData = await data.json()
    // console.log(jsonData)
    setlistOfRest(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRest(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }
  if(useOnlineStatus===false){
    return(
      <h1>Network low check your internet connection</h1>
    )
  };
  // if (listOfRest.length == 0) {
  //   return <Shimmer />
  // }
  return (
    <div className="body">
      <div className="flex justify-between items-center">
        <div className="m-4 p-5">
          <input
            type="text"
            className="px-4 mx-4 h-[50px] w-[280px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
            placeholder="Search restaurant"
          />
          <button
            className="p-4 mx-2 bg-green-300 rounded-lg"
            onClick={() => {
              const filteredList = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredRest(filteredList)
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4">
          <button
            className="bg-yellow-200 p-2 rounded-lg"
            onClick={() => {
              filteredList = listOfRest.filter(
                (rest) => rest.info.avgRating > 4
              )
              setlistOfRest(filteredList)
            }}
          >
            Top rated restaurent
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRest.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestroCard resData={res} />{" "}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Body
