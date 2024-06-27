import RestroCard from './RestroCard'
import resList from '../utils/mockData'
const Body = () => {
  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            Console.log('Button-clicked')
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {resList.map(res => (
          <RestroCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  )
}

export default Body
