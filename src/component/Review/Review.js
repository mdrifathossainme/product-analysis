import React from 'react';
import useReview from '../../hook/useReview';
import Ditails from './Ditails';

const Review = () => {
    const [reviews]=useReview()
    return (
            <div>
                <h1 className='text-center text-3xl font-bold my-12 tracking-widest'>All Reviews</h1>
                 <div className="review mx-12 mt-16 gap-8 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                {
                   reviews.map(review=><Ditails key={review.id} review={review}></Ditails >)
                }
            </div>
            </div>
        
    );
};

export default Review;