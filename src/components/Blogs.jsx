import React from 'react'
import setting from '/assets/setting.png';
import { WiDirectionRight } from "react-icons/wi";

import { blogs } from '../data/data';
const Blogs = () => {
  return (
    <div className='pb-8 pt-16 px-4 md:px-20 w-full h-max bg-white'>
        <div className='flex flex-col-reverse md:flex-row md:justify-between'>
 
 <div className='flex text-xm md:text-md items-center gap-10 pt-4 px-1'>
<div className='underline font-semibold '>All</div>
<div className='text-gray-700'>NEWS</div>
<div className='text-gray-700'>BLOGS</div>
 </div>
 <div className='flex items-center '>
<img src={setting} alt='setting' className='h-5 mr-3'></img>
<p className='text-[16px] font-semibold'>FILTER</p>
 </div>
 </div>
 <div className='py-6'>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white overflow-hidden">
                        <img src={blog.img} alt={blog.description} className="w-full h-68 object-cover" />
                        <div className="py-4">
                            <h3 className=" text-gray-700">{blog.tag}</h3>
                            <p className="mt-2 text-[16px] font-semibold">{blog.description}</p>
                            <div className='flex'>
                                <p className='font-semibold pt-2'>VIEW</p>
                                <WiDirectionRight className='text-4xl text-red-500'/></div>
                        </div>
                    </div>
                ))}
            </div>
 </div>
    </div>
  )
}

export default Blogs
