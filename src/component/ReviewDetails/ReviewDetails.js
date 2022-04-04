import React from 'react';

const ReviewDetails = ({review}) => {
  const{name ,img ,date, reviews,rating}=review
    return (
        <div className=' flex gap-4 border-solid border-2 border-white items-center px-10 py-8 rounded-lg'>
           <div>
               <img src={img} className="w-56 h-32 rounded-full

            " alt="" />
           </div>
           <div>
               <h2 className='text-2xl font-semibold my-2' >Name: {name}</h2>
               <h5>Date: {date}</h5>
               <p className='text-xl mt-2'>Rating : {rating}</p>
               <p className='text-xl text-red-200 mt-4 font-semibold'> {reviews}</p>
           </div>
        </div>
    );
};

export default ReviewDetails;