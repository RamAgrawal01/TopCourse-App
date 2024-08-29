import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = ({courses, cetegory}) => {
let allCourses = [];

const[likedCourses , setLikedCourses]= useState([]);

    const getCourses = () => {
        if(cetegory==='All'){
        Object.values(courses).forEach((courseCetegory)=>{
            courseCetegory.forEach((courses)=>{
                allCourses.push(courses);
            })
        })
        return allCourses;
    }
    else{
        //only show specific cetegory ka array paas hoga
        return courses[cetegory];
    }
}



    return (
        <div className='flex flex-wrap justify-center gap-8 mb-4 mt-4'>
            {getCourses().map((courses) => {
               return <Card key={courses.id} courses={courses}
               likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            })}
        </div>
    )
        

    
}
export default Cards;