import React from 'react';
import image from '../Image/image.webp'

const Blog = () => {
    return (+
        <div className='my-5'>
            <h2 className='font-bold text-3xl text-center'>Blog</h2>
            <img src={image} alt="" />
        </div>
    );
};

export default Blog;