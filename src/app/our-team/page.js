import { Banner, BannerAboutus } from "@/components/banner";
import { AboutusContent, Booking, Facility, FacilityDetails, NewsLetter, Teams } from "@/components/hotelier";
import Image from "next/image";

export default function OurTeam(){
    return (
        <>
            <Banner title="Our Team" />
            <Booking />
            <Teams />
            <NewsLetter />
        </>   
    );
}