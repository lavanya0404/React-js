import { CDN_URL } from "../utils/constants"
const RestroCard = (props) => {
  const { resData } = props
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla = { deliveryTime },
  } = resData?.info
  return (
    <div className="p-2 m-3 flex-col w-[300px] h-[500px] bg-slate-200 rounded-md hover:bg-slate-300 hover:shadow-lg">
      <div className="m-2 p-2">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="w-[300px] h-[250px] rounded-md"
        ></img>
      </div>
      <div className="m-2 p-2">
        <h3 className="font-bold">{name}</h3>
        <h4 className="font-semibold italic">{cuisines.join(" ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    </div>
  )
}
export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div className="flex relative">
        <RestroCard {...props} />
        <div className="bg-pink-200 p-2 rounded-md absolute left-0 top-0 ">
          Open
        </div>
      </div>
    )
  }
}
export default RestroCard
