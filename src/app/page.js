import Image from "next/image";
import styles from "./page.module.css";
import {SiteMenu, Loader, Banner, Facility, LearnMore, BecomeTeacher, Appointment, Teams, Testimonial, TestimonialList, Footer, ArrowBtn} from "@/components/common";

export default function Home() {
  return (
    <>
      <Banner />
      <Facility />
      <LearnMore />
      <BecomeTeacher />
      <Appointment />
      <Teams />
      <Testimonial />
    </>
  );
}
