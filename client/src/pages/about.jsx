/* eslint-disable react/no-unescaped-entities */

import myImg from './../assets/saye.jpeg';
import { Images } from './images';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { useState, useRef } from 'react';

function About() {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    const slideLeft = () => {
        setSlideIndex((prevIndex) => {
          if (prevIndex === 0) {
            return Images.length - 1; // Wrap around to the last index
          } else {
            return prevIndex - 1; // Shift to the left for other indices
          }
        });
        scrollToSlide(slideIndex - 1);
      };

      const slideRight= () => {
        setSlideIndex((prevIndex) => {
          if (prevIndex === Images.length -1) {
            return 0; // Wrap around to the last index
          } else {
            return prevIndex + 1; // Shift to the left for other indices
          }
        });
        scrollToSlide(slideIndex + 1);
      };
      const scrollToSlide = (index) => {
        if (sliderRef.current) {
          const slideWidth = sliderRef.current.children[0].offsetWidth;
          sliderRef.current.scrollLeft = index * slideWidth;
        }
      };
      
  return (
    <>
     <style>
        {`
          #slider::-webkit-scrollbar {
            width: 0;
            height: 0;
          }
        `}
      </style>
      <div id="about">
      <h1 className='text-5xl p-5  text-white font-bold font-serif text-center'> About Me</h1>
        <div className=' display:block md:flex justify-center align-middle bg-slate-800 rounded-t-lg rounded-r-none rounded-b-lg rounded-l-none m-5 p-8'>
         <div className="mx-auto bg-gradient-to-b rounded-xl w-80 h-80 relative overflow-hidden">
            <img src={myImg} alt="sorry image not available" />
          </div>
          <div className='text-center'>
            
            <p className='text-md py-5 leading-8 max-w-xl mx-auto md:text-xl'>Greetings, I'm Smon Ftwi,<br></br> <br></br>
            I am a recent graduate with a degree in Computer Networking from the Higher Colleges of Technology in the UAE.
             My professional interests span across Networking,Web Development, App Development, and the captivating field of Artificial Intelligence 
              and Machine Learning (AI/ML). currently my focus lies on advancing machine learning, particularly in areas like Natural Language Processing (NLP), Large Language Models (LLM), Computer Vision (CV), and other AI technologies.</p>
          </div>
          
        </div>
        <div className='m-10'>
          <h2 className='text-4xl p-5 text-center  text-white font-bold font-serif'>My Skills</h2>
          <div className='flex justify-center items-center'>
          <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40}> <CaretLeft size={32} /> </div>
          <div
          id='slider'
          ref={sliderRef}
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-4' 
          >
            {Images.map((item) => (
              <div key={item.id} className=' w-32 md:w-[170px]  inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 text-center'>
                <img src={item.img} alt={item.desc} className=' w-60' />
                <h4>{item.desc}</h4>
              </div>
            ))}
          </div>
          <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40}> <CaretRight size={32} /> </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default About;
