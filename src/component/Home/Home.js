import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../asscet/img/img.png'
import useReview from '../../hook/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const Home = () => {

    const [reviews]=useReview()
    console.log(reviews)
    return (
      <>
        <div className='home-content grid md:grid-cols-2 sm:grid-cols-1 gap-8 lg:py-20'>
            <div className="right-part lg:my-20  md:mt-12 pl-20">
               <h1 className='lg:text-8xl md:text-5xl font-bold ' >Your Next Car</h1>
               <h1 className='lg:text-8xl md:text-5xl font-bold mt-6 text-red-600'>Your Best Car</h1>
               <p  className='mt-12'>After the CHIRON and CHIRON Sport, the CHIRON Pur Sport showed the ferocious personality of a hyper sports car made for corners and lateral agility. Now, with the CHIRON Super Sport, we are following our long tradition of combining extreme high speed with absolute luxury, to offer a whole new dimension of the BUGATTI experience</p>
             <div className='mt-12'>
             <a className='px-16 text-lg font-bold  border-solid border-2 border-indigo-600  bg-indigo-500 py-5 hover:bg-transparent hover:border-white' 
             href="https://www.bugatti.com/models/chiron-models/chiron-super-sport/" target="_black"> More Info</a>
             </div>
            </div>
            <div className="left-part">
         <img className='lg:w-full pr-12' src={img} alt="rge" />
            </div>
        </div>
        <div className="review">
            <h1 className='text-center text-6xl uppercase font-semibold tracking-widest	'>Customer Review</h1>
            <div className="review mx-12 mt-16 gap-8 grid grid-cols-2">
                {
                   reviews.slice(0,3).map(review=><ReviewDetails key={review.id} review={review}></ReviewDetails>)
                }
            </div>
            <div className='text-center my-12'>
            <Link to="/review" className=' text-lg uppercase font-semibold px-16 text-lg font-bold  border-solid border-2 border-indigo-600  bg-indigo-500 py-5 hover:bg-transparent hover:border-white '>See All Reviwe</Link>
            </div>
        </div>
            
    </>
    );
};

export default Home;