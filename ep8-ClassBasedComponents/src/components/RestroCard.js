import { CDN_URL } from '../utils/constants'
const stylecard = {
  backgroundColor: '#fff0f0',
  color :'#000000'
}
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
    <div className="res-card" style={stylecard}>
      <img
        src=
          {CDN_URL +
          cloudinaryImageId}
        className="res-img"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(" ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestroCard;