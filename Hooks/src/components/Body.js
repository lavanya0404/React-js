import RestroCard from "./RestroCard"
import resList from "../utils/mockData"
import {useState} from "react";

const Body = () => {
  const [listOfRest,setlistOfRest] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRest.filter((rest) => rest.info.avgRating > 4.5)
            setlistOfRest(filteredList)
          }}
        >
          Top rated restaurent
        </button>
      </div>
      <div className="res-container">
        {listOfRest.map((res) => (
          <RestroCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
