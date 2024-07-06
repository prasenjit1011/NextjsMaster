import { Banner, BannerAboutus } from "@/components/banner";
import { Login, NewsLetter, Teams } from "@/components/hotelier";
import Image from "next/image";

export default function Aboutus(){
    return (
        <>
            <Login />
            <NewsLetter />
        </>
        
    );
}