'use client';
import { Banner, BannerAboutus } from "@/components/banner";
import { Contactus, Expertise, NewsLetter, Teams } from "@/components/hotelier";
import Image from "next/image";
import { useState } from "react";





export default function AuthLayout({ children }){
    

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">Hotelier Login</h6>
                        <h1 className="mb-5"><span className="text-primary text-uppercase">Contact</span> For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <h6 className="section-title text-start text-primary text-uppercase">Booking</h6>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>book@tourhotelier.com</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="section-title text-start text-primary text-uppercase">General</h6>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>info@tourhotelier.com</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="section-title text-start text-primary text-uppercase">Enquiry</h6>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>enquiry@tourhotelier.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <iframe className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameborder="0" style={{minHeight: "350px", border:"0"}} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                        </div>
                        { children }
                    </div>
                </div>
            </div>
            <NewsLetter />
        </> 
    );
}