import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from "../components/core/Homepage/HighlightText"; 
import CTAButton from "../components/core/Homepage/Button";
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/Homepage/CodeBlocks';
import TimelineSection from '../components/core/Homepage/TimelineSection';
import LearningLanguageSection from '../components/core/Homepage/LearningLanguageSection';
import InstructorSection from '../components/core/Homepage/InstructorSection';
import ExploreMore from '../components/core/Homepage/ExploreMore';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
   <div>
    <div className = 'relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
      {/*Section 1 */}
      <Link to = {"/signup"}>
        <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
        transition-all duration-200 hover:scale-95 w-fit'>
            <div className='flex flex-row items-center gap-2 rounded-full px-7 py-[4px]
            transition-all duration-200 group-hover:bg-richblack-900'>
                <p>Become an Instructor</p>
                <FaArrowRight /> 
            </div>
        </div>
      </Link>

      <div className='text-center text-4xl font-semibold mt-6'>
        Empower Your Future with
        <HighlightText text={"Coding Skills"}/>
      </div>

      <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a 
        wealth of resources, including hands-on projects, quizes and pesonalized feedback from instructors. 
      </div>

      <div className='flex flex-row gap-7 mt-8'>
        <CTAButton active={true} linkto={"/signup"}>
          Learn More 
        </CTAButton>
        <CTAButton active={false} linkto={"/login"}>
          Book a Demo
        </CTAButton>
      </div>

      <div className='mx-3 my-12 shadow-blue-200'>
        <video className='shadow-[20px_20px_rgba(255, 255, 255)]'
          muted
          loop
          autoPlay
        >
          <source src={Banner} type='video/mp4'/>
        </video>
      </div>

      <div>
        <CodeBlocks 
          position={"lg:flex-row "}
          heading={
            <div className='text-4xl font-semibold'>
              Unlock Your
              <HighlightText text={"Coding potential "}/>
               with our online courses.
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={
            {
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }
          }
          ctabtn2={
            {
              btnText: "Learn more",
              linkto: "/login",
              active: false
            }
          }

          codeblock={`  <<!DOCTYPE html>>
                        <html>
                        <head><title>Example</title><linkrel="stylesheet"href="styles.css">
                        </head>
                        <body>
                        <h1><a href="/">Header</a></h1>
                        <nav><a href="/one">One</a><a href="/two">Two</a><a href= "/three">Three</a></nav>
                        </body>
                        </html>`}
         codeColor={"text-yellow-25"}   
        //  gradient={"size-18 rounded-full bg-radial-[at_75%_100%] from-sky-200 via-blue-400 to-indigo-900 to-90%"}    
        />
        
      </div>

      {/* Code section 2 */}
      <div >
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"Coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={
            {
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }
          }
            ctabtn2={
            {
              btnText: "Learn more",
              linkto: "/login",
              active: false
            }
          }
            codeColor={"text-blue-100"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}

          />
      </div>

      <ExploreMore/>

    </div>
    {/* Section 2 */}
    <div className='bg-pure-greys-5 text-richblack-700 '>
      <div className='homepage_bg h-[210px]'>
        <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
          
          <div className='h-[150px]'></div>
            <div className='flex flex-row gap-7 text-white'>
              <CTAButton active={true} linkto={"/signup"}>
                  <div className='flex items-center gap-3'>
                    Explore Full Catalog
                    <FaArrowRight/>
                  </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                  <div>
                    Learn More
                  </div>
              </CTAButton>
            </div>
        </div>
      </div>


        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 '>
          <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
            <div className='text-3xl font-semibold w-[50%]'>
              Get the Skills you need for a
              <HighlightText text={"Job that is in demand"}/>
            </div>
          

            <div className='flex flex-col gap-10 w-[47%] items-start '>
              <div className='text-[18px] font-semibold'>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>
                  Learn More
                </div>
              </CTAButton>
             </div> 
             
          </div>
          <TimelineSection/>
          <LearningLanguageSection />
        </div>
          

    </div>

    {/* Section 3 */}
    <div className=' w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-8
      bg-richblack-900 text-white '>
      <InstructorSection/>

        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
    </div>
    <Footer/>
  </div>   
  )
}

export default Home
