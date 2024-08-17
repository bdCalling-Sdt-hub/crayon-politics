"use client";
// import Heading from "@/components/shared/Heading";
import React, { useState } from "react";
import News1 from "@/assets/news1.png";
import News2 from "@/assets/news2.png";
import News3 from "@/assets/news3.png";
import News4 from "@/assets/news4.png";
import News5 from "@/assets/news5.png";
import News6 from "@/assets/news6.png";
import News7 from "@/assets/news7.png";
import News8 from "@/assets/news8.png";
import News9 from "@/assets/news9.png";
import News10 from "@/assets/news10.png";
import Image, { StaticImageData } from "next/image";
import { Pagination, PaginationProps } from "antd";
import Link from "next/link";
import Heading from "@/ui/shared/Heading";
import { MdOutlineArrowOutward } from "react-icons/md";

interface INewsProps{
    image: StaticImageData;
    news: JSX.Element;
}

const NewsClient = () => {
    const [page, setPage] = useState<string>("1");

    const news: INewsProps[]=[
        {
            image: News1,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        },
        {
            image: News2,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        },
        {
            image: News3,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        },
        {
            image: News4,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        }, 
        {
            image: News5,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        },
        {
            image: News6,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        },
        {
            image: News7,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        },
        {
            image: News8,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        },
        {
            image: News9,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        },
        {
            image: News10,
            news: <>
                The EAC Celebrates National Poll Worker Recruitment Day,
                <br /> 
                Inspiring New Generation of Election Workers 
                <br/> 
                <p className="text-[14px] leading-[21px] font-normal mt-2">Today, the U.S. Election Assistance Commission (EAC) released ....</p>
            </>
        }
    ]

    const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };

    return (
        <div className="container py-10">

            {/* heading  */}
            <Heading name="Today's Top Events"  style="font-normal w-fit text-[32px] border-b-[4px] pb-3 border-[#9C1E2E]  leading-[48px] text-[#3E3E3E] mb-6" />

            {/* news container */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">

                {
                    news?.map((news:INewsProps, index:number) => {
                        return (
                            <div
                                key={index}
                                className="flex relative bg-red-200 items-end group overflow-hidden cursor-pointer"
                            >
                                <Image 
                                    alt="PHOTO" 
                                    src={news.image} 
                                    width={1300} 
                                    height={300} 
                                    style={{objectFit: "fill"}}
                                />

                                <div className="absolute w-full left-0  p-4">
                                    <div className="translate-y-[59px]  transition-all duration-500 group-hover:translate-y-0">
                                        <p className="text-[#FAFAFA] font-semibold text-[16px] leading-8">{news.news}</p>
                                        <Link href={`news-details/${index + 1}`} className="flex items-center gap-2 text-[#C7C7C7] font-medium text-[14px] leading-6 underline">
                                            Visit Now
                                            <MdOutlineArrowOutward size={20} color="#C7C7C7" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        );
                    })
                }
            </div>

            {/* pagination */}
            <div className="flex items-center justify-center mt-6">
                <Pagination 
                    itemRender={itemRender} 
                    current={parseInt(page)} 
                    onChange={(page)=> setPage(page.toString())}
                    total={50}
                />
            </div>
        </div>
    );
};

export default NewsClient;