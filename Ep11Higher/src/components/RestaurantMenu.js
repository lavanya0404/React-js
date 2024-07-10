import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { CDN_URL } from "../utils/constants"
import RestaurantCategory from "./RestaurantCategories"

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)
  // if (resInfo === null) <Shimmer />
  const {
    name = "",
    cuisines = [],
    costForTwoMessage = "",
    avgRating = "",
    cloudinaryImageId = "",
  } = resInfo?.data?.cards[2]?.card?.card?.info || {}

  const { itemCards = [] } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card || {}

  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  console.log(categories)
  return (
    <div className="Rest-menu">
      <div className="flex m-3 p-4 justify-center">
        <div className="m-3 mb-0 pt-4 pb-0">
          <img
            className="w-[200px] h-[200px] rounded-md hover:shadow-2xl"
            src={CDN_URL + cloudinaryImageId}
          ></img>
        </div>
        <div className="ml-5 m-7 pt-10">
          <h1 className="font-bold justify-center">{name}</h1>
          <h2 className="font-mono from-neutral-900">{cuisines.join(" ")}</h2>
          <h2 className="font-bold italic">{costForTwoMessage}</h2>
          <h3>{avgRating} ⭐</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <h2 className="font-bold text-lg"> Menu 😋</h2>
        </div>
        {categories.map((category) => (
          <RestaurantCategory />
        ))}
      </div>
      <div className="flex justify-center"></div>
    </div>
  )
}
export default RestaurantMenu
