import { Banner, BannerService } from "@/components/banner";
import { AboutUs, AboutusContent, BannerAboutus, Booking, Facility, FacilityDetails, NewsLetter, Room, Service, Teams, Testimonials } from "@/components/hotelier";
import Image from "next/image";

export default function Aboutus(){
    return (
        <>
            <Banner title="Our Services" />
            <Booking />
            <Service />
            <Testimonials />
            <Teams />
            <NewsLetter />
        </>
        
    )
    
    
    ;
}