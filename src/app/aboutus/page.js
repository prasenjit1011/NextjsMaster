import { Banner, BannerAboutus } from "@/components/banner";
import { AboutUs, AboutusContent, Booking, Facility, FacilityDetails, NewsLetter, Teams } from "@/components/hotelier";
import Image from "next/image";

export default function Aboutus(){
    return (
        <>
            <AboutUs />
            <Facility />
            <FacilityDetails />
            <Teams />
            <NewsLetter />
        </>
        
    );
}