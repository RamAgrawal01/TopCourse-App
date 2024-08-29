import React, { useState } from "react";
import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";


const Card = (props ) => {
    let courses = props.courses;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

const clickHandler=()=>{
        if(likedCourses.includes(courses.id)){
            //pehle se like hua pada hua ha
            //ab aage vahi jaenge jinki id is course ki id ke equal nahi h
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==courses.id)))
            toast.warning("Like Removed");
        }
        // else{
        //     //insert karna h liked courses me
        //     if(likedCourses.length===0){
        //         setLikedCourses([courses.id]);
        //     }
            else{
                setLikedCourses((prev)=>[...prev,courses.id]);
                toast.success("Liked Successfully");
            }
            
        }

        const[readmore,setReadmore] = useState(false);
        const fullInfo = readmore? courses.description : `${courses.description.substring(0,100)}...`;

        function readmoreHandler(){
            setReadmore(!readmore);
        }


return(
    <div className="w-[300px]  bg-slate-800 rounded-md overflow-hidden bg-opacitiy-80">
        <div className="relative">
            <img src={courses.image.url} alt="course image"></img>

            <div className="w-[35px] h-[35px] bg-white rounded-full absolute right-2 bottom-3
                grid place-items-center ">
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(courses.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)

                    }
                </button>
            </div>
            </div>

            <div className="p-4">
                <p className="text-orange-300 text-lg font-bold leading-6 font">{courses.title}</p>
                <p className="mt-2 text-white">{fullInfo}
                <span className="text-orange-300 cursor-pointer" onClick={readmoreHandler}>
                    {readmore ? `Read less` : `Read more`}
                </span>
                
                </p>
            </div>


      

        
    </div>
)
}
export default Card;