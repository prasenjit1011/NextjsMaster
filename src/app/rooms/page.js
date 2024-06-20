import { Banner, BannerAboutus, BannerRooms } from "@/components/banner";
import { AboutusContent, Booking, Facility, FacilityDetails, NewRoomsList, NewsLetter, RoomsList, RoomsListPage, Teams } from "@/components/hotelier";
import Image from "next/image";

export default function Rooms(){
    return (
        <>
            <Banner title="Our Rooms" />
            <Booking />
            <RoomsListPage />
            <NewsLetter />
        </>
        
    )
    
    
    ;
}