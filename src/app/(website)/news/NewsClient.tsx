"use client";
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

import { MdOutlineArrowOutward } from "react-icons/md";
import Heading from "@/ui/shared/Heading";

interface INewsProps {
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
        <div className="container mx-auto px-4 py-10">

            {/* Heading */}
            <Heading
                name="Today's Top Events"
                style="font-normal lg:w-fit w-full text-[24px] lg:text-[32px] border-b-[4px] pb-3 border-[#9C1E2E] leading-[36px] lg:leading-[48px] text-[#3E3E3E] mb-6"
            />

            {/* News Container */}
            <div className="grid grid-cols-12 gap-6">
                {/* Main News Section */}
                <div className="lg:col-span-7 col-span-12">
                    <div className="border-b-[1px] border-[#D0D0D0] pb-6">
                        {/* Latest News */}
                        <div className="relative h-[300px] lg:h-[400px] w-full border mb-4">
                            <Image
                                alt="new image"
                                src={News10}
                                fill
                                className="object-cover w-auto h-auto"
                            />
                        </div>
                        <div>
                            <h1 className="text-[#242424] text-[24px] lg:text-[32px] font-semibold leading-[36px] lg:leading-[48px]">
                                What Kamala Harris and Beyoncé have in common
                            </h1>
                            <p className="text-[#5C5C5C] my-2 text-[14px] font-normal leading-[21px]">
                                Our society demands Black women be “twice as good.” Beyoncé has found a solution that Harris seems keen to copy.
                            </p>
                            <Link
                                href={`news-details/1`}
                                className="flex items-center gap-2 text-[#07254A] font-normal text-[14px] leading-6 underline"
                            >
                                Visit Now
                                <MdOutlineArrowOutward size={20} color="#07254A" />
                            </Link>
                        </div>
                    </div>

                    {/* Other News */}
                    <div className="mt-6">
                        {news?.map((news: INewsProps, index: number) => (
                            <div key={index} className="flex lg:flex-row flex-col-reverse gap-4 border-b-[1px] border-[#D0D0D0] pb-3 mb-3">
                                <div className="flex-1">
                                    <h1 className="text-[#242424] text-[20px] lg:text-[24px] font-semibold leading-[30px] lg:leading-[36px]">
                                        What Kamala Harris and Beyoncé have in common
                                    </h1>
                                    <p className="text-[#5C5C5C] text-[14px] lg:text-[16px] my-2 lg:my-[6px] font-normal leading-[21px] lg:leading-[24px]">
                                        Our society demands Black women be “twice as good.” Beyoncé has found a solution that Harris seems keen to copy.
                                    </p>
                                    <Link
                                        href={`news-details/${index + 1}`}
                                        className="flex items-center gap-2 text-[#07254A] font-medium text-[14px] leading-6 underline"
                                    >
                                        Visit Now
                                        <MdOutlineArrowOutward size={20} color="#07254A" />
                                    </Link>
                                </div>
                                <div className="relative h-[150px] lg:h-[150px] w-full lg:w-[250px] border">
                                    <Image
                                        alt="new image"
                                        src={news.image}
                                        fill
                                        className="object-cover w-auto h-auto"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar News Section */}
                <div className="lg:col-span-5 col-span-12">
                    {news.slice(0, 3)?.map((news: INewsProps, index: number) => (
                        <div key={index} className="flex lg:flex-row flex-col-reverse gap-4 border-b-[1px] border-[#D0D0D0] pb-3 mb-3">
                            <div className="flex-1">
                                <h1 className="text-[#242424] text-[16px] font-semibold leading-6">
                                    What Kamala Harris and Beyoncé have in common
                                </h1>
                                <p className="text-[#5C5C5C] text-[14px] font-normal leading-[21px]">
                                    Our society demands Black women be “twice as good.” Beyoncé has found a...
                                </p>
                                <Link
                                    href={`news-details/${index + 1}`}
                                    className="flex items-center gap-2 text-[#07254A] font-medium text-[14px] leading-6 underline"
                                >
                                    Visit Now
                                    <MdOutlineArrowOutward size={20} color="#07254A" />
                                </Link>
                            </div>
                            <div className="relative h-[130px] lg:h-[130px] w-full lg:w-[250px] border">
                                <Image
                                    alt="new image"
                                    src={news.image}
                                    fill
                                    className="object-cover w-auto h-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-6">
                <Pagination
                    itemRender={itemRender}
                    current={parseInt(page)}
                    onChange={(page) => setPage(page.toString())}
                    total={50}
                />
            </div>
        </div>
    );
};

export default NewsClient;
