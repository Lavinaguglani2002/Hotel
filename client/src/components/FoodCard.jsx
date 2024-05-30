import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'
const FoodCard = ({id,name,price,desc,img,handleToast}) => {
  const dispatch=useDispatch();
  return (
    <div className='font-bold w-[250px]  bg-white p-5 flex flex-col rounded-lg gap-3'>
        <img src={img}
        className='w-auto h-[180px]w-[200px] overflow-hidden hover:scale-110 cursor-grap transition-all duration-500 easy-in-out' />
<div className='text-sm flex justify-between'>
    <h2>{name}</h2>
    <span className='text-green-500'> ₹ {price}</span>
</div>
<p className='text-sm font-normal'>{desc}</p>
<div className='flex justify-between'>
    <span className='flex justify-center items-center'> 
        <button onClick ={()=>{
          dispatch(addToCart({
            id,name,price,qty:1,img
          }));
          handleToast(name)
        }}className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>
          Add to cart</button>
    </span>
</div>
    </div>
    
  )
}

export default FoodCard