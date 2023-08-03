import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="/" />
      </div>

       {/* card */}
       <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Sea Foods </p>
          <p className="px-2">Daily Added</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" alt="/" />
      </div>

       {/* card */}
       <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver The Best Swallow</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://media.istockphoto.com/id/1387397101/photo/nigerian-egusi-melon-soup-with-garri-eba-for-lunch-nigerian-food.jpg?s=612x612&w=0&k=20&c=v92qeavxfgQkZdrFekzzDnVkCVN1gZGglr-rV3FsCx0=" alt="/" />
      </div>
    </div>
  );
};

export default HeadlineCards;
