import Image, { StaticImageData } from 'next/image';
import React from 'react';
import photo1 from "@/assets/vote.png";
import photo2 from "@/assets/candidate.png";
import photo3 from "@/assets/law.png";
import photo4 from "@/assets/process.png";
import photo5 from "@/assets/alart.png";
import photo6 from "@/assets/result.png";
import Heading from '../shared/Heading';
import { useLearnQuery } from '@/redux/apiSlices/webSlice';
import { imageUrl } from '@/redux/api/baseApi';
import Link from 'next/link';


interface IAboutProps{
    title: string;
    image: string;
    url:string;
}

const LearnAboutElection:React.FC = () => {
    const {data: learns} = useLearnQuery(undefined)
    return (
        <div className='container lg:my-20 my-10 '>
            <Heading 
                name="Learn about U.S elections" 
                style="font-normal heading w-fit lg:text-[32px] text-[26px] border-b-[4px] lg:pb-3 border-[#9C1E2E] lg:leading-[48px] text-[#3E3E3E] lg:mb-10 mb-6" 
            />

            <div className='grid lg:grid-cols-3 grid-cols-2 gap-6'>
                {
                    learns?.data?.map((item: IAboutProps, index: number)=>{
                        return(
                            <Link  key={index} href={`${item.url}`} target='_blank'>
                                <div className='group bg-[#F6F6F6] hover:bg-[#07254A] transition-all duration-200 ease-in  rounded-lg px-3 py-6' >
                                    {
                                        item?.image
                                        &&
                                        <Image
                                            src={`${imageUrl}${item?.image}`}
                                            alt='about icon'
                                            width={50}
                                            height={50}
                                            style={{margin: "0 auto"}}
                                            className='group-hover:brightness-0 group-hover:invert transition-all duration-200 ease-in'
                                        />
                                    }
                                    <p className='heading text-[#07254A] group-hover:text-white transition-all duration-200 ease-in text-[16px] md:text-[20px] leading-[30px] font-normal text-center mt-5'>{item?.title}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default LearnAboutElection;