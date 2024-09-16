"use client";
import React, { useEffect, useRef, useState } from 'react';
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
import { useCandidateQuery, useElectionQuery, useStateQuery } from '@/redux/apiSlices/webSlice';
import { imageUrl } from '@/redux/api/baseApi';


interface ICandidateProps{
    name: string;
    image: StaticImageData,
    color: string,
    politicalAffiliation?: string;
    issues?: [string];
}



const HomeClient = () => {
    const [limit, setLimit] = useState(10)
    const [openLocation, setLocationOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const electionRef = useRef<HTMLDivElement | null>(null);
    const locationRef = useRef<HTMLDivElement | null>(null);
    const [Index, setIndex] = useState(0) 
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);
    const {data: states} = useStateQuery(limit);
    const {data: elections} = useElectionQuery(undefined)
    const [state, setState] = useState<string>("")
    const [election, setElection] = useState<string>("");
    const {data: candidates} = useCandidateQuery({election: election, state: state})

    useEffect(()=>{
        if(states){
            setLimit(states?.pagination?.total)
        }
    }, [states])

    useEffect(()=>{
        if(elections?.data[0] || states?.data[0]){
            setElection(elections?.data[0]?.name)
            setState(states?.data[0]?.name)
        }
    }, [elections, states])


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
            sectionRefs?.current?.forEach((ref) => {
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
                            <p className='text-[#666666] text-[16px] leading-6 font-normal'>{ election || elections?.data[0]?.name}</p>

                            <div ref={electionRef} style={{display: open ? "block" : "none"}} className='absolute top-10 left-0 w-full bg-white shadow-md'>
                                <ul>
                                    {
                                        elections?.data?.map((item: any, index:number)=>{
                                            return(
                                                <li 
                                                    key={index}
                                                    onClick={()=>setElection(item?.name)}  
                                                    className=' heading
                                                        border-b-[1px] text-[16px] text-[#5c5c5c] 
                                                        leading-[18px] font-normal py-[11px] px-4 
                                                        border-[#DDDDDD]
                                                    '
                                                >
                                                    <p className='heading'>
                                                        {item?.name}
                                                    </p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <p className='text-[#242424] text-[16px] leading-6 font-normal px-1'>in</p>
                        <div onClick={()=>setLocationOpen(!openLocation)}  className='bg-[#F8FFE5] relative cursor-pointer flex items-center gap-1 py-1 px-2 rounded-md'>
                            <MapPinned color='#666666' size={24} />
                            <p className='text-[#666666] text-[16px] leading-6 font-normal'>{ state || states?.data[0]?.name}</p>

                            <div 
                                ref={locationRef} 
                                style={{display: openLocation ? "block" : "none"}} 
                                className='absolute overflow-y-auto h-[410px] top-10 left-0 w-fit bg-white shadow-md'
                            >
                                <ul>
                                    {
                                        states?.data?.map((item: any, index:number)=>{
                                            return(
                                                <li 
                                                    key={index}
                                                    onClick={()=>setState(item?.name)} 
                                                    className='
                                                        border-b-[1px] text-[#5c5c5c] text-[16px] 
                                                        leading-[18px] font-normal 
                                                        py-[11px] px-4 border-[#DDDDDD]
                                                    '
                                                >
                                                    <p className='heading whitespace-nowrap'>
                                                        {item?.name}
                                                    </p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                {/* candidate list section */}
                <div className='mt-20 max-w-[1020px] mx-auto flex items-center justify-center gap-10 flex-wrap pb-[98px] lg:pb-[0px]'>
                    {
                        candidates?.data?.map((candidate:ICandidateProps, index:number)=>{
                            return(
                                <Link href={`#candidate-${index + 1}`} key={index}>
                                    <div className='mx-auto' onClick={()=>( setColor(candidate?.color), setIndex(index)) }>
                                        {
                                            candidate?.image
                                            &&
                                            <Image
                                                alt='Candidate'
                                                width={150}
                                                height={150}
                                                src={`${imageUrl}${candidate.image}`}
                                                style={{
                                                    borderRadius: "100%",
                                                    borderWidth: 3,
                                                    borderColor: candidate.color
                                                }}
                                            />
                                        }
                                        <p className='text-[#242424] heading text-[16px] text-center leading-6 mt-4 font-medium'>{candidate.name}</p>
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
                    <div className='lg:w-[80%] w-[100%] flex items-center justify-center'>
                        <div className='w-full py-6 home grid grid-cols-1 gap-10 h-screen lg:h-[calc(100vh-180px)] overflow-y-auto snap-y snap-mandatory'>
                            {
                                candidates?.data?.map((candidate: ICandidateProps, index: number) => {
                                    return (
                                        <section 
                                            ref={(el:any) => (sectionRefs.current[index] = el)}
                                            id={`candidate-${index + 1}`} key={index} 
                                            className="scroll-smooth lg:h-[calc(100vh-180px)] mt-4 h-screen md:h-[60vh] snap-start px-0 sm:px-0 p-8 flex items-center justify-center w-full"
                                            
                                        >
                                            <div className={`w-full flex lg:flex-row flex-col gap-5 lg:gap-10 rounded  p-10`}
                                                style={{
                                                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                                                }}
                                            >
                                                <div>
                                                    {
                                                        candidate?.image
                                                        &&
                                                        <Image
                                                            alt='Candidate'
                                                            width={150}
                                                            height={150}
                                                            src={`${imageUrl}${candidate.image}`}
                                                            style={{
                                                                margin: "0 auto",
                                                                borderRadius: "100%",
                                                                borderWidth: 3,
                                                                borderColor: candidate.color
                                                            }}
                                                        />
                                                    }
                                                    <p className='heading text-center lg:px-0 px-4 text-[#07254A] whitespace-nowrap lg:text-[24px] text-[20px] lg:leading-[36px] leading-[20px] font-medium lg:mt-6 mt-4'>{candidate?.name}</p>
                                                    <p className="text-[#8F8F8F] whitespace-nowrap text-sm text-center leading-[21px] font-normal">({candidate?.politicalAffiliation})</p>
                                                </div>
                                                <div className='w-full'>
                                                    <div className='border-b-[2px] border-[#BEBEBE] lg:mb-6 mb-4'>
                                                        <h1 style={{ borderBottom: `3px solid ${candidate.color}` }} className={`heading text-[#07254A] w-fit pb-1 font-medium lg:text-[24px] text-[22px] lg:leading-[36px] leading-6 `}>Key Voter Issues</h1>
                                                    </div>
                                                    <Issue issue={candidate?.issues} />
                                                </div>
                                            </div>
                                        </section>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    
                    <section className='lg:w-[20%] hidden w-[100%] my-auto sticky lg:top-[15%] top-0 z-10 h-full md:flex items-center justify-center bg-[white] pt-4 pb-[0px] '>
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
                                {candidates?.data?.map((person: ICandidateProps, indexItem: number) => (
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
                                            className={`text-[#525252] heading ${
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
            </div>

            <Faq/>
            <LearnAboutElection/>
        </>
    )
}

export default HomeClient