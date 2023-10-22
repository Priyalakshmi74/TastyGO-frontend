import { useState } from "react";
import { foodData } from '../data/foodData.js';
const Dish =()=>{

    const[ dishes, setDishes]=useState(foodData);
    console.log(foodData);
 const filterType=(category)=>{
     const newDishes=foodData.filter((item)=>item.category===category);
     setDishes(newDishes);
     console.log(newDishes);

 }
 const filterPrice=(price)=>{
    const newDishes=foodData.filter((item)=>item.price===price);
    
    setDishes(newDishes);
    console.log("newDishes",newDishes);

 }
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

    <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
             <div className='flex justfiy-between flex-wrap gap-2'>
                    <button onClick={()=>setDishes(foodData)}className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">All</button>
                    <button onClick={()=>filterType('salad')} className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">Salad</button>
                    <button onClick={()=>filterType("chicken")} className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">Chicken</button>
                    <button onClick={()=>filterType("burger")} className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">Burger</button>
                    <button onClick={()=>filterType("pizza")} className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">Pizza</button>
                    <button onClick={()=>filterType("Indian")} className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">Indian</button>
             </div>
        </div>

        <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className="flex justfiy-between flex-wrap gap-2">
                    <button onClick={()=>filterPrice("$2")}className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">$2</button>
                    <button onClick={()=>filterPrice("$3")} className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">$3</button>
                    <button onClick={()=>filterPrice("$4")} className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">$4</button>
                    <button onClick={()=>filterPrice("$5")} className="border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-xl border-2 m-1">$5</button>
                </div>
        </div>
    </div>
            <div className="grid md:grid-cols-4 sm-grid-cols-2  gap-4">
                {dishes.map((item,index)=>(
                    <div key={index} className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
                        <img src={item.image} alt={item.name} className=" w-[300px] h-[250px] object-cover rounder-t-lg mx-auto mt-4"/>
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p className="flex flex-col"><span className="bg-orange-600 text-white rounded-full py-1 px-2 w-10 ml-9 mb-2">{item.price}</span> 
                            <button className="border-orange-600 text-black rounded-full py-1 px-2 ml-2 hover:text-white hover:bg-orange-600 border-2">Add to Cart</button></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dish;