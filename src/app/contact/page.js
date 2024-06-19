import { Banner, BannerAboutus } from "@/components/banner";
import { AboutusContent, Booking, Contactus, Facility, FacilityDetails, NewsLetter, Teams } from "@/components/hotelier";
import Image from "next/image";

export default function Aboutus(){
    return (
        <>
            <Banner title="Contact US" />
            <Booking />
            <Contactus />
            <NewsLetter />
        </>
        
    )
    
    
    ;
}