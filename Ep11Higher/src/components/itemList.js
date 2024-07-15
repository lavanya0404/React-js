import { CDN_URL } from "../utils/constants"

const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        <div>
          {items.map((item) => (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
            >
              <div className="w-9/12 flex flex-col justify-between">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    {" ₹ "}
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}{" "}
                  </span>
                </div>
                <p className="text-xs italic m-auto">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-2">
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full rounded-md shadow-lg "
                ></img>
                <button className="p-2 m-3 bg-white shadow-lg mx-5 rounded-lg">
                  ADD ➕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ItemList
