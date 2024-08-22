"use client";
import React, { useEffect, useState } from 'react';
import candidate1 from "@/assets/joe biden.png";
import candidate2 from "@/assets/robert Kennedy jr.png";
import candidate3 from "@/assets/Chose Oliver.png";
import candidate4 from "@/assets/Jason Palmer.png";
import candidate5 from "@/assets/Laby Gaga.png";
import candidate6 from "@/assets/Donald Trump.png";
import candidate7 from "@/assets/Cenk Uygur.png";
import candidate8 from "@/assets/Cornel West.png";
import candidate9 from "@/assets/Marianne Williamson.png";
import Image, { StaticImageData } from 'next/image';
import Issue from './Issue';
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


interface ICandidateProps{
    name: string;
    image: StaticImageData,
    color: string,
    party?: string;
}

const candidates: ICandidateProps[] = [
    {
        name: "Joe Biden",
        image: candidate1,
        color: "#FF7D29",
        party: "Democratic Party"
    },
    {
        name: "Robert Kennedy Jr.",
        image: candidate2,
        color: "#E4003A",
        party: "Democratic Party"
    },
    {
        name: "Chose Oliver",
        image: candidate3,
        color: "#EB3678",
        party: "Democratic Party"
    },
    {
        name: "Jason Palmer",
        image: candidate4,
        color: "#FB773C",
        party: "Democratic Party"
    },
    {
        name: "Lady Gaga",
        image: candidate5,
        color: "#A1DD70",
        party: "Democratic Party"
    },
    {
        name: "Donald Trump",
        image: candidate6,
        color: "#B43F3F",
        party: "Democratic Party"
    },
    {
        name: "Cenk Uygur",
        image: candidate7,
        color: "#00712D",
        party: "Democratic Party"
    },
    {
        name: "Cornel West",
        image: candidate8,
        color: "#7C00FE",
        party: "Democratic Party"
    },
    {
        name: "Marianne Williamson",
        image: candidate9,
        color: "#3795BD",
        party: "Democratic Party"
    },
]

const CandidateSlider = ({index}: {index: number}) => {
    const [slideIndex, setSlideIndex] = useState(0);


    useEffect(()=>{
        setSlideIndex(index);
    }, [index])

    const CustomDot = ({ onClick, active, name, color }: { onClick: () => void; active: boolean; name: string, color: string }) => (
        <button
          className={`custom-dot  ${active ? `custom-dot-active bg-[${color}]` : ""} flex items-center gap-5 mb-14`}
          onClick={onClick}
        >
          <span className={`${active ? "font-bold" : ""} w-[100%] text-right`}>{name}</span>
          <span className={`dot-indicator`} style={{ backgroundColor: active ? color : "#242424" }} />
        </button>
      );
    

    const ArrowLeft = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
        <button
            {...props}
            className="prev absolute z-[1] top-[50%] left-0 bg-black bg-opacity-[30%] w-9 h-9 rounded-full flex items-center justify-center"
        >
            <BiChevronLeft size={24} color="#EEEEEE" className="mx-auto " />
        </button>
    );
    
    const ArrowRight = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
        <button
            {...props}
            className="next bg-black bg-opacity-[30%] w-9 h-9 rounded-full flex items-center justify-center absolute top-[50%] right-0"
        >
            <BiChevronRight size={24} color="#EEEEEE" className="mx-auto" />
        </button>
    );
    
    const settings: Settings = {
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        beforeChange: (current, next) => setSlideIndex(next),
        customPaging: (i) => (
            <CustomDot
                active={i === slideIndex}
                onClick={() => setSlideIndex(i)}
                name={candidates[i].name}
                color={candidates[i].color}
            />
        ),
        dotsClass: "slick-dots custom-dots",
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true
        
    };

    return(
        <div className=''>
            <Slider {...settings} className=''>
            {
                candidates.map((item:ICandidateProps, index:number)=>{
                    return(
                        <section 
                            key={index}  
                            className="h-[500px]"
                        >
                            <div className='w-[80%]   flex gap-10 shadow-lg p-6'>
                                <div>
                                    <Image
                                        src={item.image}
                                        alt='candidate photo'
                                        width={150}
                                        height={200}
                                        style={{ borderRadius: "100%", margin: "0 auto", borderWidth: 2, borderColor: item.color }}
                                    />
                                    <p className='text-center text-[#07254A] whitespace-nowrap text-[24px] leading-[36px] font-medium mt-6'>{item?.name}</p>
                                    <p className="text-[#8F8F8F] whitespace-nowrap text-sm text-center leading-[21px] font-normal">({item?.party})</p>
                                </div>
                                <div className='w-full'>
                                    <div className='border-b-[2px] border-[#BEBEBE] mb-6'>
                                        <h1 style={{ borderBottom: `3px solid ${item.color}` }} className={`text-[#07254A] w-fit pb-1 font-medium text-[24px] leading-[36px]`}>Key Voter Issues</h1>
                                    </div>
                                    <Issue />
                                </div>
                            </div>
                        </section>
                    )
                })
            }
            </Slider>
        </div>
    )
}

export default CandidateSlider