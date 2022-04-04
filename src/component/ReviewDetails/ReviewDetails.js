import React from 'react';

const ReviewDetails = ({review}) => {
  const{name ,img ,date, reviews,rating}=review
    return (
        <div className=' flex gap-4 border-solid border-2 border-white items-center lg:px-10 md:px-2 md:py-0 lg:py-2 rounded-lg'>
           <div>
               <img src={img} className=" sm:hidden md:block lg:w-56 md:w-44 md:h-24 rounded-full

            " alt="" />
           </div>
           <div>
               <h2 className='lg:text-2xl md:text-xl md:m-1 md:p-0 font-semibold my-2' >Name: {name}</h2>
               <h5 className='md:hidden lg:block'>Date: {date}</h5>
               <p className='lg:text-xl m-0 p-0'>Rating : {rating}</p>
               <p className='lg:text-sm md:text-2xl text-red-200 mt-4 lg:font-semibold'> {reviews}</p>
           </div>
        </div>
    );
};

export default ReviewDetails;