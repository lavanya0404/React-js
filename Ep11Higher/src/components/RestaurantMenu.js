import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { CDN_URL } from "../utils/constants"

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
  //console.log(resInfo)
  const { itemCards = [] } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card || {}

  return (
    <div className="Rest-menu">
      <div className="flex m-3 p-4 justify-center">
        <div className="mt-3 mb-0 pt-4 pb-0">
          <img
            className="w-[200px] h-[200px] rounded-md hover:shadow-2xl"
            src={CDN_URL + cloudinaryImageId}
          ></img>
        </div>
        <div className="ml-5 m-4 pt-10">
          <h1 className="font-bold">{name}</h1>
          <h2 className="font-mono from-neutral-900">{cuisines.join(" ")}</h2>
          <h2 className="font-bold italic">{costForTwoMessage}</h2>
          <h3>{avgRating} ⭐</h3>
        </div>
      </div>
      <div className="flex justify-center">
      <div>
        <h2 className="font-bold text-lg"> Menu 😋</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-2">  
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>{item?.card?.info?.name}</li>
            ))}
          </ul>
        </div>
        <div className="p-2">
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id} className="">
                {"Rs "}{" "}{" - "}{item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}{" "}
                
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default RestaurantMenu
