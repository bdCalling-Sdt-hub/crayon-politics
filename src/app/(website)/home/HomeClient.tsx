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
import { MapPinned } from 'lucide-react';
import { GiVote } from 'react-icons/gi';
import Issue from '@/ui/home/Issue';
import Link from 'next/link';
import { BackTop, ConfigProvider, Timeline } from 'antd';
import { FaArrowUpLong } from 'react-icons/fa6';
import NewsLetter from '@/ui/home/NewsLetter';
import Faq from '@/ui/home/Faq';
import LearnAboutElection from '@/ui/home/LearnAboutElection';
// import CandidateSlider from '@/ui/home/CandidateSlider';


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

const HomeClient = () => {
    const [openLocation, setLocationOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const electionRef = useRef<HTMLDivElement | null>(null);
    const locationRef = useRef<HTMLDivElement | null>(null);
    const [Index, setIndex] = useState(0) 
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);


    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            setShowBackTop(scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [color, setColor] = useState("")
    const handleScrollToSection = (index: number, color:string) => {
        setColor(color)
        const section = document.getElementById(`candidate-${index + 1}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveIndex(index);
    };

    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        // Intersection Observer for tracking candidate sections
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry:any) => {
                    if (entry?.isIntersecting) {
                        const index = sectionRefs.current.indexOf(entry.target);
                        setActiveIndex(index); // Update active index based on visibility
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold for better results
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            <div className='container'>

                {/* heading */}
                <div className='justify-center flex lg:flex-row flex-col  items-center gap-3 mt-20'>
                    <p className='text-[#242424] text-[16px] lg:leading-6 leading-3 font-normal'>Meet your Candidates for the</p>
 <div className=' flex items-center'>
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

                    <p className='text-[#242424] text-[16px] leading-6 font-normal px-1'>in</p>
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
                   
                </div>


                {/* candidate list section */}
                <div className='mt-20 max-w-[1020px] mx-auto flex items-center justify-center gap-10 flex-wrap pb-[98px] lg:pb-[0px]'>
                    {
                        candidates?.map((candidate:ICandidateProps, index:number)=>{
                            return(
                                <Link href={`#candidate-1`} key={index}>
                                    <div className='mx-auto' onClick={()=>( setColor(candidate?.color), setIndex(index)) }>
                                        <Image
                                            alt='Candidate'
                                            width={150}
                                            height={150}
                                            src={candidate.image}
                                            style={{
                                                borderRadius: "100%",
                                                borderWidth: 3,
                                                borderColor: candidate.color
                                            }}
                                        />
                                        <p className='text-[#242424] text-[16px] text-center leading-6 mt-4 font-normal'>{candidate.name}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                
                <Link href={"#candidate-1"}>
                    <p className='cursor-pointer hidden lg:block text-center text-[#242424] text-[16px] leading-6 font-normal lg:py-[98px] pt-[40px] '>Learn how they acted on the key voting issues below</p>
                </Link>
                
                <div className='flex lg:flex-row flex-col-reverse   items-start justify-between lg:gap-16 gap-6'>
                    
                    <div className='lg:w-[80%] w-[100%]'>
                        <div className='grid grid-cols-1 overflow-y-auto snap-y gap-10'>
                            {
                                candidates?.map((candidate: ICandidateProps, index: number) => {
                                    return (
                                        <section 
                                            ref={(el:any) => (sectionRefs.current[index] = el)}
                                            id={`candidate-${index + 1}`} key={index} 
                                            className="scroll-smooth snap-start snap-always flex items-center justify-center lg:h-[calc(100vh-84px)] h-[60vh] w-full"
                                        >
                                            <div className={`w-full flex lg:flex-row flex-col gap-5 lg:gap-10 `}>
                                                <div>
                                                    <Image
                                                        src={candidate.image}
                                                        alt='candidate photo' 
                                                        width={150}
                                                        height={200} 
                                                        className=' mx-auto '
                                                        style={{ borderRadius: "100%", borderWidth: 2, borderColor: candidate.color }}
                                                    />
                                                    <p className='text-center lg:px-0 px-4 text-[#07254A] whitespace-nowrap lg:text-[24px] text-[20px] lg:leading-[36px] leading-[20px] font-medium lg:mt-6 mt-4'>{candidate?.name}</p>
                                                    <p className="text-[#8F8F8F] whitespace-nowrap text-sm text-center leading-[21px] font-normal">({candidate?.party})</p>
                                                </div>
                                                <div className='w-full'>
                                                    <div className='border-b-[2px] border-[#BEBEBE] lg:mb-6 mb-4'>
                                                        <h1 style={{ borderBottom: `3px solid ${candidate.color}` }} className={`text-[#07254A] w-fit pb-1 font-medium lg:text-[24px] text-[22px] lg:leading-[36px] leading-6 `}>Key Voter Issues</h1>
                                                    </div>
                                                    <Issue />
                                                </div>
                                            </div>
                                        </section>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    
                    <section className='lg:w-[20%] w-[100%] sticky lg:top-[15%] top-0 z-10 bg-[white] pt-4 pb-[0px] '>
            <ConfigProvider
                theme={{
                    components: {
                        Timeline: {
                            itemPaddingBottom: isMobile ? 0 : 50,
                            algorithm: true, 
                        },
                    },
                }}
            >
                <Timeline 
                // @ts-ignore
                    mode={isMobile ? 'bottom' : 'left'}
                    className={`flex ${isMobile ? 'flex-wrap gap-4 ' : 'lg:flex-col'}`}
                >
                    {candidates?.map((person: ICandidateProps, indexItem: number) => (
                        <Timeline.Item
                            key={indexItem}
                            dot={
                                <div
                                    onClick={() => handleScrollToSection(indexItem, person.color)}
                                    style={{
                                        background: activeIndex === indexItem ? person.color : "#525252",
                                    }}
                                    className={`w-3 h-3 cursor-pointer rounded-full`}
                                />
                            }
                        >
                            <p
                                className={`text-[#525252] ${
                                    person.color === color ? "font-semibold" : "font-normal"
                                } transition-all ease-linear duration-150`}
                            >
                                {person.name}
                            </p>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </ConfigProvider>
        </section>

                    
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

            <LearnAboutElection/>
            <Faq/>
            <NewsLetter/>
        </>
    )
}

export default HomeClient