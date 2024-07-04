import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)
  if (resInfo === null) <Shimmer />
  const { name = "", cuisines = [], costForTwoMessage = "", avgRating = "" } =
    resInfo?.cards[2]?.card?.card?.info || {}

  const { itemCards = [] } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card || {}

  return (
    <div className="Rest-menu">
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <h2>{cuisines.join(" ")}</h2>
        <h3>{costForTwoMessage}</h3>
        <h3>{avgRating} star rating</h3>
      </div>
      <div>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item?.card?.info?.name}
              {" - "}
              {"Rs "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default RestaurantMenu
