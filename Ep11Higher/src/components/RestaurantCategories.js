import React, { useState } from "react"
import ItemList from "./itemList"
const RestaurantCategory = ({ data }) => {
  const [showList,setShowList] = useState(false);
  const handleClick=()=>{
  // console.log("handleClick")
   setShowList(!showList);
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showList &&
        <ItemList items={data.itemCards} />
        }
      </div>
    </div>
  )
}
export default RestaurantCategory
