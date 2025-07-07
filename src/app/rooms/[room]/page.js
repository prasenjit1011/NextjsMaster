// app/rooms/[room]/page.tsx or page.js (for App Router)
// or pages/rooms/[room].js (for Pages Router)

import dynamic from 'next/dynamic';
import { Banner } from "@/components/banner";
import {RoomDetails, Booking, BookingFrm, Room, NewsLetter} from "@/components/hotelier";

// 👇 Optional: If data needs to be fetched
export async function generateStaticParams() {
  return [
    { room: 'deluxe' },
    { room: 'suite' },
    { room: 'standard' },
  ];
}

export default function RoomPage({ params }) {
  const { room } = params;

  return (
    <>
      <Banner title="Our Rooms" />
      <Booking />
      <RoomDetails room={room} />
      <BookingFrm />
      <Room />
      <NewsLetter />
    </>
  );
}
