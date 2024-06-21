import { Banner, BannerAboutus, BannerRooms } from "@/components/banner";
import { AboutusContent, BookRoom, Booking, BookingFrm, Facility, FacilityDetails, NewRoomsList, NewsLetter, Room, RoomDetails, RoomsList, RoomsListPage, Teams } from "@/components/hotelier";
import Image from "next/image";

export default function Rooms(){
    return (
        <>
            <Banner title="Our Rooms" />
            <Booking />
            <RoomDetails />
            <BookingFrm />
            <Room />
            <NewsLetter />
        </>
        
    )
    
    
    ;
}