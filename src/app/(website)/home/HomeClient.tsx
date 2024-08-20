"use client";
import React, { useEffect, useRef, useState } from 'react';
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
import { MapPinned, Vote } from 'lucide-react';
import { GiVote } from 'react-icons/gi';
import TimeLine from '@/ui/home/TimeLine';
import Issue from '@/ui/home/Issue';
import Link from 'next/link';
import { BackTop } from 'antd';
import { FaArrowUpLong } from 'react-icons/fa6';


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
        color: "#6788DF",
        party: "Democratic Party"
    },
    {
        name: "Robert Kennedy Jr.",
        image: candidate2,
        color: "#A6A6A6",
        party: "Democratic Party"
    },
    {
        name: "Chose Oliver",
        image: candidate3,
        color: "#F5E3A4",
        party: "Democratic Party"
    },
    {
        name: "Jason Palmer",
        image: candidate4,
        color: "#6788DF",
        party: "Democratic Party"
    },
    {
        name: "Lady Gaga",
        image: candidate5,
        color: "#9CE7A3",
        party: "Democratic Party"
    },
    {
        name: "Donald Trump",
        image: candidate6,
        color: "#FF7072",
        party: "Democratic Party"
    },
    {
        name: "Cenk Uygur",
        image: candidate7,
        color: "#FF7072",
        party: "Democratic Party"
    },
    {
        name: "Cornel West",
        image: candidate8,
        color: "#000000",
        party: "Democratic Party"
    },
    {
        name: "Marianne Williamson",
        image: candidate9,
        color: "#6788DF",
        party: "Democratic Party"
    },
]

const HomeClient = () => {
    const [openLocation, setLocationOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const electionRef = useRef<HTMLDivElement | null>(null);
    const locationRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (electionRef.current && !electionRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
                setLocationOpen(false);
            }
        };

        if (openLocation) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openLocation]);

    const [showBackTop, setShowBackTop] = useState(false);

    // Monitor scroll event
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowBackTop(scrollY > 300); // Adjust 300 to the height at which you want to show the button
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className='container'>

            {/* heading */}
            <div className='justify-center flex items-center gap-3 mt-20'>
                <p className='text-[#242424] text-[16px] leading-6 font-normal'>Meet your Candidates for the</p>

                <div onClick={()=>setOpen(!open)} className='bg-[#F8FFE5] relative cursor-pointer flex items-center gap-1 py-1 px-2 rounded-md'>
                    <GiVote color='#666666' size={24} />
                    <p className='text-[#666666] text-[16px] leading-6 font-normal'>2024 Senate Election</p>

                    <div ref={electionRef} style={{display: open ? "block" : "none"}} className='absolute top-10 left-0 w-full bg-white shadow-md'>
                        <ul>
                            <li className='border-b-[1px] text-[16px] text-[#5c5c5c] leading-[18px] font-normal py-[11px] px-4 border-[#DDDDDD]'>2024 Senate Election</li>
                            <li className='text-[16px] leading-[18px] text-[#5c5c5c] font-normal py-[11px] px-4'>2024 House Election</li>
                        </ul>
                    </div>
                </div>

                <p className='text-[#242424] text-[16px] leading-6 font-normal'>in</p>
                <div onClick={()=>setLocationOpen(!openLocation)}  className='bg-[#F8FFE5] relative cursor-pointer flex items-center gap-1 py-1 px-2 rounded-md'>
                    <MapPinned color='#666666' size={24} />
                    <p className='text-[#666666] text-[16px] leading-6 font-normal'>California</p>

                    <div ref={locationRef} style={{display: openLocation ? "block" : "none"}} className='absolute top-10 left-0 w-full bg-white shadow-md'>
                        <ul>
                            <li className='border-b-[1px] text-[#5c5c5c] text-[16px] leading-[18px] font-normal py-[11px] px-4 border-[#DDDDDD]'>Boston</li>
                            <li className='border-b-[1px] text-[#5c5c5c] text-[16px] leading-[18px] font-normal py-[11px] px-4 border-[#DDDDDD]'>California</li>
                            <li className='border-b-[1px] text-[#5c5c5c] text-[16px] leading-[18px] font-normal py-[11px] px-4 border-[#DDDDDD]'>Arizona</li>
                            <li className='border-b-[1px] text-[#5c5c5c] text-[16px] leading-[18px] font-normal py-[11px] px-4 border-[#DDDDDD]'>Alabama</li>
                            <li className='border-b-[1px] text-[#5c5c5c] text-[16px] leading-[18px] font-normal py-[11px] px-4 border-[#DDDDDD]'>Illinois</li>
                            <li className='border-b-[1px] text-[#5c5c5c] text-[16px] leading-[18px] font-normal py-[11px] px-4 border-[#DDDDDD]'>Iowa</li>
                            <li className='py-[11px] text-[#5c5c5c] text-[16px] leading-[18px] font-normal px-4'>Alaska</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* candidate list section */}
            <div className='mt-20 max-w-[1020px] mx-auto flex items-center justify-center gap-10 flex-wrap'>
                {
                    candidates?.map((candidate:ICandidateProps, index:number)=>{
                        return(
                            <Link href={`#candidate-${index + 1}`} key={index}>
                                <div className='mx-auto'>
                                    <Image
                                        alt='Candidate'
                                        width={150}
                                        height={150}
                                        src={candidate.image}
                                        style={{borderRadius: "100%"}}
                                        className={`border-2 border-[${candidate.color}]`}
                                    />
                                    <p className='text-[#242424] text-[16px] text-center leading-6 mt-4 font-normal'>{candidate.name}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            
            <Link href={"#candidate-1"}>
                <p className='cursor-pointer text-center text-[#242424] text-[16px] leading-6 font-normal py-[98px]'>Learn how they acted on the key voting issues below</p>
            </Link>
            
            {/* candidate information time line */}
            <div>
                {
                    candidates?.map((candidate:ICandidateProps, index: number)=>{
                        return(
                            <section id={`candidate-${index + 1}`} key={index} className="scroll-smooth  grid grid-cols-12 items-center h-screen">
                                <div className='col-span-9'>

                                    <div className='flex gap-10'>
                                        <div className=''>
                                            <Image
                                                src={candidate.image}
                                                alt='candidate photo'
                                                width={150}
                                                height={200}
                                                style={{borderRadius: "100%",margin: "0 auto", borderWidth:2, borderColor: candidate.color }}
                                            />
                                            <p className='text-center text-[#07254A] whitespace-nowrap text-[24px] leading-[36px] font-medium amt-6'>{candidate?.name}</p>
                                            <p className="text-[#8F8F8F] whitespace-nowrap text-sm text-center leading-[21px] font-normal">({candidate?.party})</p>
                                        </div>

                                        <div className='w-full'>
                                            <div  className='border-b-[2px] border-[#BEBEBE] mb-6'>
                                                <h1 style={{borderBottom: `3px solid ${candidate.color}`}} className={`text-[#07254A] w-fit pb-1 font-medium text-[24px] leading-[36px]`}>Key Voter Issues</h1>
                                            </div>
                                            <Issue/>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-3  my-auto'>
                                    <TimeLine name={candidate?.name} color={candidate?.color} />
                                </div>
                            </section>
                        )
                    })
                }     
            </div>

            <BackTop>
                <div
                    className={`fixed bottom-10 right-10 transition-all duration-300 transform ${
                        showBackTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    } bg-[#FF7072] w-10 h-10 rounded-full flex items-center justify-center text-black`}
                >
                    <FaArrowUpLong color='white' size={20} />
                </div>
            </BackTop>

        </div>
    )
}

export default HomeClient