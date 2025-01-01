import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from "react-icons/io5";
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData();
    const {gadgetId} = useParams();
    const id = parseInt(gadgetId);

  const gadgets = data.find(gadget => gadget.product_id === id);

    const {product_title, product_image,price,description,specification, rating, availability} = gadgets;
    return (
        <div className=' my-10'>
            <div className=' bg-[#9538E2] text-center p-4 text-3xl font-bold text-white rounded-xl my-3'>
                <h3>Products Details</h3>
                <p className=' text-sm font-normal text-gray-50 my-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="hero w] shadow-2xl rounded-2xl border-2 border-white w-2/3 mx-auto">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={product_image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{product_title}</h1>
      <p className=' my-3 font-semibold text-xl text-gray-600'>Price: $ {price}</p>
      <div className=' border border-green-700 rounded-full w-32 p-1 text-center bg-green-50 text-green-700'>
      {
        availability ? <p>In Stock</p> : <p>Out Of Stock</p>
      }
      </div>
      <p className="py-6 text-gray-500">
       {description}
      </p>
      <p className=' text-2xl font-bold'>Specifiction:</p>
      <div className=' mb-3'>
      {
        specification.map((item, idx)=> <div key={idx}>
          <p className=' text-gray-600 text-lg my-1'>{idx + 1}. {item}</p>
        </div>)
      }
      <p className=' text-xl font-bold'>Rating: <span className=' bg-base-200 font-normal px-2 text-center rounded-xl'>{rating}</span></p>
      </div>
      <div className=' flex'>
      <button className=" bg-[#9538E2] text-white font-bold text-center rounded-full btn hover:text-black">Add To Cart <IoCartOutline className=' text-xl'></IoCartOutline></button>
      <button className=' ml-4 text-2xl border px-3 border-gray-200 rounded-full btn bg-white'><CiHeart></CiHeart></button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetails;