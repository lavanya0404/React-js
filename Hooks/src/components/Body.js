import RestroCard from './RestroCard'
import resList from '../utils/mockData'

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>
      <div className='res-container'>
        {resList.map((res) => (
           <RestroCard key={res.info.id} resData={res} />
         ))}
      </div>
    </div>
  )
}

export default Body
