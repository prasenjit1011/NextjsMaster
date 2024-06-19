import Image from "next/image";
import styles from "./page.module.css";
import { BackToTopBtn, Banner, Booking, AboutUs, Footer, Header, NewsLetter, Room, Service, Teams, Testimonials } from "@/components/hotelier";

export default function Home() {
  return (
    <>
      <Banner />
      <Booking />
      <AboutUs />
      <Room />
      <Service />
      <Testimonials />
      <Teams />
      <NewsLetter />
    </>
  );
}
