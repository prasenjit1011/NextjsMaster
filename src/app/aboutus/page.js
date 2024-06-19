import { AboutusContent, BannerAboutus, Booking, Facility, FacilityDetails, NewsLetter, Teams } from "@/components/hotelier";
import Image from "next/image";

export default function Aboutus(){
    return (
        <>
            <BannerAboutus />
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