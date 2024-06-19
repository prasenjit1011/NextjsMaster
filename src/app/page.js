import Image from "next/image";
import styles from "./page.module.css";
import { BackToTopBtn, Booking, AboutUs, Footer, Header, NewsLetter, Room, Service, Teams, Testimonials } from "@/components/hotelier";
import { BannerHome } from "@/components/banner";


export default function Home() {
  return (
    <>
      <BannerHome />
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
