import React from "react";
import './Spinner.css';
const Spinner = () => {
    return(
        <div className="bg-slate-600 w-[100vw] h-[100vh] flex flex-col items-center space-y-6 mt-10 ">
            
            <div className="spinner"></div>
            <p className="text-3rem bg-gradient-to-r from-red-600 px-2 rounded-md to-yellow-300 text-bgDark font-semibold">Loading...</p>
        </div>
        
       
    )
}
export default Spinner;