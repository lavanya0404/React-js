import { CDN_URL } from '../utils/constants'

const RestroCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla = { deliveryTime },
  } = resData?.info;
  return (
    <div className="w-40 m-2 p-2">
      <div className='m-4 p-4'>
      <img
        src=
          {CDN_URL +
          cloudinaryImageId}
        className="w-[200px]"
      ></img>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(" ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestroCard;