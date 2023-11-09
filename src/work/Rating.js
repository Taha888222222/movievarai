import React from 'react'
import {Rate} from 'antd'

const desc=['terrible','bad','normal','good','wonderful']
const Rating = ({MovieRating,isMovieRating,rating,setRating}) => {
    const handlechange=value=>{
        setRating(value);
    };
  return (
    
        isMovieRating ?
   <span className='RatingContent'>
    <Rate disabled value={MovieRating} />
   </span>
   :
   <sapn className ='ratiContent'>
   <Rate tooltips={desc} onChange={handlechange} value={rating}></Rate>
   </sapn>
  )
}

export default Rating