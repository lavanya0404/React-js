import RestroCard from "./RestroCard"
import resList from "../utils/mockData"
import { useState } from "react"
import { useEffect } from "react"
import Shimmer from "./Shimmer"
const Body = () => {
  const [listOfRest, setlistOfRest] = useState([]) 
  const [searchText, setSearchText] = useState("")
  console.log("Body rendered")
  //after rendering of body function after the render cycle useEffect will call the callback function
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.96340&lng=77.58550"
    )
    const jsonData = await data.json()
    console.log(jsonData)
    setlistOfRest(
      jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    )
  }
  if (listOfRest.length == 0) {
    return <Shimmer />
  }
  return (
    <div className="body">
      <div className="filter-bar">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
            placeholder="Search restaurant"
          />
          <button className="search-btn" onClick={() => {
            const filteredList = listOfRest.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setlistOfRest(filteredList);
          }}>
            Search
          </button>
        </div>
        <div className="top-rated">
          <button
            className="filter-btn"
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
      <div className="res-container">
        {listOfRest.map((res) => (
          <RestroCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  )
}
export default Body
