"use client";
import Image from "next/image";
import React from "react";
import Details from "@/assets/news2.png";
import Heading from "@/ui/shared/Heading";
import { useNewsDetailsQuery } from "@/redux/apiSlices/webSlice";
import { imageUrl } from "@/redux/api/baseApi";

interface IDetailsProps{
    newsId: string;
}

const NewsDetailsClient: React.FC<IDetailsProps> = ({newsId}) => {
    const {data: news} = useNewsDetailsQuery(newsId);
    console.log(news)
    return (
        <div className="container my-10">
            <div className="w-full h-[456px] relative">
                {
                    news?.data?.image
                    &&
                    <Image
                        alt="new image"
                        src={`${imageUrl}${news?.data?.image}`}
                        fill={true}
                        priority={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-auto h-auto  object-fill object-center"
                    />
                }

                <div
                    className="absolute left-0 -bottom-4 bg-[#07254A] w-fit lg:px-6 px-2 lg:rounded-r-lg rounded-r-lg py-2 "
                    style={{
                        boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    }}
                >
                    <Heading
                        name={`${news?.data?.title}`}
                        style="font-normal lg:text-[32px] text-[20px]  lg:leading-[48px] leading-[30px] text-[#FDFDFD]"
                    />
                </div>
            </div>

            <p className="text-[#767676] text-[16px] leading-[21px] font-normal mt-10 text-justify">{news?.data?.description}</p>
        </div>
    );
};

export default NewsDetailsClient;
