import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MenuURL } from "../utils/constants"
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
   const { restaurantId } = useParams();
  useEffect(() => {
    fetchMenu()
  }, [])
  fetchMenu = async () => {
    const data = await fetch(
     {MenuURL}+restaurantId
    );
    const jsonData = await data.json()
    
    setResInfo(jsonData)
  }
  if (resInfo == null) <Shimmer />
  const { name = "", cuisines = [], costForTwoMessage = "", avgRating = "" } =
    resInfo?.data?.cards[2]?.card?.card?.info || {}

  const { itemCards = [] } =
    resInfo?.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[3].card
      .card || {}
  
  return (
    <div className="Rest-menu">
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <h2>{cuisines}</h2>
        <h3>{costForTwoMessage}</h3>
        <h3>{avgRating} star rating</h3>
      </div>
      <div>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item?.card?.info?.name}-{item?.card?.info?.price || item?.card?.info?.defaultPrice}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default RestaurantMenu
