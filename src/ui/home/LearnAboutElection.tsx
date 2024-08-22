import Image, { StaticImageData } from 'next/image';
import React from 'react';
import photo1 from "@/assets/vote.png";
import photo2 from "@/assets/candidate.png";
import photo3 from "@/assets/law.png";
import photo4 from "@/assets/process.png";
import photo5 from "@/assets/alart.png";
import photo6 from "@/assets/result.png";
import Heading from '../shared/Heading';


interface IAboutProps{
    name: string;
    image: StaticImageData
}

const about: IAboutProps[] = [
    {
        name: "State and Local elections",
        image: photo1,
    },
    {
        name: "primaries and caucuses",
        image: photo2
    },
    {
        name: "Laws and legal issues",
        image: photo3
    },
    {
        name: "presidential election process",
        image: photo4
    },
    {
        name: "Disasters and emergencies",
        image: photo5
    },
    {
        name: "Find results of elections",
        image: photo6
    }
]

const LearnAboutElection:React.FC = () => {
    return (
        <div className='container lg:my-20 my-10 '>
            <Heading 
                name="Learn about U.S elections" 
                style="font-normal w-fit lg:text-[32px] text-[28px] border-b-[4px] lg:pb-3 border-[#9C1E2E] lg:leading-[48px] text-[#3E3E3E] lg:mb-10 mb-6" 
            />

            <div className='grid lg:grid-cols-3 grid-cols-2 gap-6'>
                {
                    about?.map((item: IAboutProps, index: number)=>{
                        return(
                            <div key={index} className='group bg-[#F6F6F6] hover:bg-[#07254A] transition-all duration-200 ease-in  rounded-lg px-3 py-6' >
                                <Image
                                    src={item.image}
                                    alt='about icon'
                                    width={50}
                                    height={50}
                                    style={{margin: "0 auto"}}
                                    className='group-hover:brightness-0 group-hover:invert transition-all duration-200 ease-in'
                                />
                                <p className=' text-[#07254A] group-hover:text-white transition-all duration-200 ease-in text-[20px] leading-[30px] font-normal text-center mt-5'>{item?.name}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default LearnAboutElection;