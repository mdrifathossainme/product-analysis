import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../asscet/img/img.png'
import useReview from '../../hook/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './homr.css'


const Home = () => {

    const [reviews]=useReview()
    return (
      <>
        <div className='home-content grid md:grid-cols-2 sm:grid-cols-1 gap-8 lg:py-20'>
            <div className="right-part lg:my-20 md:ml-10 md:mt-12 lg:pl-20">
               <h1 className=' car lg:text-7xl md:text-5xl font-bold' >Your Next Car</h1>
               <h1 className=' car lg:text-7xl md:text-5xl font-bold lg:mt-6 md:mt-3 text-red-600'>Your Best Car</h1>
               <p  className=' para mt-12 lg:text-xl md:text-sm'>After the CHIRON and CHIRON Sport, the CHIRON Pur Sport showed the ferocious personality of a hyper sports car made for corners and lateral agility. Now, with the CHIRON Super Sport, we are following our long tradition of combining extreme high speed with absolute luxury, to offer a whole new dimension of the BUGATTI experience</p>
             <div className=' btn mt-12'>
             <a className=' lg:px-16 lg:py-5 md:py-3 md:px-10 text-lg md:text-sm font-bold  border-solid border-2 border-indigo-600  bg-indigo-500  hover:bg-transparent hover:border-white' 
             href="https://www.bugatti.com/models/chiron-models/chiron-super-sport/" target="_black"> More Info</a>
             </div>
            </div>
            <div className="left-part">
         <img className=' img lg:w-full md:w-80 md:mt-20 pr-12' src={img} alt="rge" />
            </div>
        </div>
        <div className="review md:mt-20">
            <h1 className='coust text-center lg:text-6xl md:text-3xl md:mt-12 uppercase font-semibold tracking-widest	'>Customer Review</h1>
            <div className="review lg:mx-12 md:mx-6 lg:mt-16 md:mt-10 lg:gap-8 md:gap-4 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
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