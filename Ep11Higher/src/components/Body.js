import RestroCard from "./RestroCard"
import { useState,useEffect,useContext } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { withPromotedLabel } from "./RestroCard"
import UserContext from "../utils/userContext"
const Body = () => {
  const [listOfRest, setlistOfRest] = useState([])
  const [filteredRest, setFilteredRest] = useState([])
  const [searchText, setSearchText] = useState("")
  const RestaurantWithPromoted = withPromotedLabel(RestroCard);
  //console.log(listOfRest)
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550"
    )
    const jsonData = await data.json()
     //console.log(jsonData)
    setlistOfRest(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    )
    setFilteredRest(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    )
  }
  if (useOnlineStatus === false) {
    return <h1>Network low check your internet connection</h1>
  }
  // if (listOfRest.length == 0) {
  //   return <Shimmer />
  // }
  const {loggedInUser,setUserName} = useContext(UserContext)
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
          <label>User Name : </label>
          <input
            type="text"
            className="px-4 mx-4 h-[50px] w-[280px]"
            placeholder="Change User Name"
            value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value)}
          />
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
            {res.info.isOpen ? (
              <RestaurantWithPromoted resData={res} />
            ) : (
              <RestroCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Body
