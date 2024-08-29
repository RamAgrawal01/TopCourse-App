import React from 'react';
const Filter = (props)=>{

    const filterData= props.filterData;
    const cetegory = props.cetegory;
    const setCetegory = props.setCetegory;

    const filterHandler = (title) => {
        console.log(title);
        setCetegory(title);
      };

    return(
        <div className='flex flex-wrap max-w-max space-x-4  mx-auto w-11/12 py-4 justify-center -mt-6'>
            {filterData.map((data)=>{
               return( <button className={`text-lg px-3 py-1 rounded-md font-medium mt-4
               text-white bg-black hover:bg-opacity-30 hover:scale-110 border-2 transition-all duration-200
               ${cetegory===data.title ? "bg-opacity-50 border-white" : "bg-opacity-40 border-transparent"}`} 
               key={data.id} onClick={() => filterHandler(data.title)} >
                    {data.title}
                </button>)
            })}
        </div>
    )
    
}
export default Filter;