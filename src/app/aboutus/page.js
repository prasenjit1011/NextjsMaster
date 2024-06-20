import { Banner, BannerAboutus } from "@/components/banner";
import { AboutusContent, Booking, Facility, FacilityDetails, NewsLetter, Teams } from "@/components/hotelier";
import Image from "next/image";

export default function Aboutus(){
    return (
        <>
            <Banner title="About Us" />
            <Booking />
            <AboutusContent />
            <Facility />
            <FacilityDetails />
            <Teams />
            <NewsLetter />
        </>
        
    )
    
    
    ;
}