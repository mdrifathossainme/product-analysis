import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:mx-8  lg:mt-12 sm:mx-3 sm:mt-4'>
            <h2 className='text-4xl'>what is is context API ?</h2>
            <p>React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier</p>

            <p className='mt-1'>This new API solves one major problem–prop drilling. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. Component will receive props indirectly and you, the React Developer will have to ensure everything works out right.</p>

            <h2 className='text-4xl lg:mt-8'>What Is Semantic  Tag ?</h2>
            <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a (p ) tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.</p>

          <p className='mt-1'>  On the flip side of this equation, tags such as (b) and (i)  tag are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.</p>
        </div>
    );
};

export default Blogs;