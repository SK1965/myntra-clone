/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { useState } from "react";

const SubContainer = async({ Categoriesdata  }) => {
    // Ensure that the data length is divisible by 4 by slicing
     
    const  adjustedData =(Categoriesdata && Categoriesdata.slice(0, Categoriesdata.length - (Categoriesdata.length % 4)));
    
    return (
      <div className="min-w-xl p-6 rounded-md shadow-md gradient dark:text-gray-900">
        {/* Create rows dynamically */}
        { adjustedData.map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-8 my-2">
            {/* Map up to 4 items for each row */}
            {adjustedData.slice(rowIndex * 4, rowIndex * 4 + 4).map((c, index) => (
              <div key={index} className="min-w-[300px] p-4 bg-slate-300 hover:bg-gray-500">
                <img
                  src={c.imglink}
                  alt={c.catgoryname}
                  className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="mt-6 mb-2 text-center">
                  <h1 className="text-xl font-semibold tracking-wide">{c.catgoryname}</h1>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default SubContainer;
  