import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighlightText from './HighlightText'; 
import CourseCard from './CourseCard';
const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

  return (
    <div>
      <div className='text-4xl font-semibold text-center'>
        Unlock the
        <HighlightText text={"Power of coding"} />
      </div>

      <p className='text-center text-sm text-richblack-300 mt-3'>
        Learn to build anything you can imagine
      </p>

      <div className='hidden lg:flex gap-5 mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full 
      font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] mb-60'>
        {
            tabsName.map((element, index) => {
                return(
                    <div 
                    className={`text-[16px] flex flex-row items-center gap-2
                    ${currentTab === element
                       ? "bg-richblack-900 text-richblack-5 font-medium "
                       : "text-richblack-200"
                     } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 `}
                       key={index}
                       onClick={()=> setMyCards(element)}>
                            {element}
                    </div>
                )
            })

        }
        <div className="lg:absolute gap-10 justify-center lg:gap-2 flex flex-wrap lg:justify-between lg:bottom-[0] 
        lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[120%] text-black lg:mb-0 mb-12 lg:px-0 px-3 w-full lg:mt-5">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
      </div>
    </div>
  )
}

export default ExploreMore
