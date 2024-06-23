import { Banner, BannerAboutus, BannerRooms } from "@/components/banner";
import { AboutusContent, BookRoom, Booking, BookingFrm, Facility, FacilityDetails, NewRoomsList, NewsLetter, Room, RoomDetails, RoomsList, RoomsListPage, Teams } from "@/components/hotelier";
import Image from "next/image";

export default function Rooms({room}){
    console.log('Room : '+room);

    return (
        <>
            <Banner title="Our Rooms" />
            <Booking />
            <RoomDetails room={room} />
            <BookingFrm />
            <Room />
            <NewsLetter />
        </>
        
    )
    
    
    ;
}