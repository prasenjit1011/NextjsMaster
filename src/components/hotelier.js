'use client';
import Link from "next/link";
import { useEffect } from "react";

export function Faqs(){
    return (
        <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-8">
                        <FaqsDetails />
                        <FaqsList />
                    </div>
                    <div className="col-lg-4">
                        <FaqSupport />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

function FaqsDetails(){
    return (
        <>
            <div className="row g-3 mb-5">
                <div className="col-md-6">
                    <img className="img-fluid" src="hotelier/img/room-1.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src="hotelier/img/room-1.jpg" alt="" />
                </div>
            </div>
            <h1 className="mb-4">Freequently Asked Questions</h1>
            <p className="mb-4">
                Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.
            </p>
        </>
    );
}

function FaqSupport(){
    return (
        <>
            <div className="bg-light p-4 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title text-start mb-4">Popular FAQs</h4>
            <div className="d-flex flex-column justify-content-start">
            <a className="h6 fw-medium pb-3 mb-3 border-bottom d-flex align-items-center justify-content-between" href="#"><span>How to build a website?</span> <i className="bi bi-arrow-right ms-3"></i></a>
            <a className="h6 fw-medium pb-3 mb-3 border-bottom d-flex align-items-center justify-content-between" href="#"><span>How long will it take to get a new website?</span> <i className="bi bi-arrow-right ms-3"></i></a>
            <a className="h6 fw-medium pb-3 mb-3 border-bottom d-flex align-items-center justify-content-between" href="#"><span>Do you only create HTML websites?</span> <i className="bi bi-arrow-right ms-3"></i></a>
            <a className="h6 fw-medium pb-3 mb-3 border-bottom d-flex align-items-center justify-content-between" href="#"><span>Will my website be mobile-friendly?</span> <i className="bi bi-arrow-right ms-3"></i></a>
            <a className="h6 fw-medium pb-3 mb-3 border-bottom d-flex align-items-center justify-content-between" href="#"><span>Will you maintain my site for me?</span> <i className="bi bi-arrow-right ms-3"></i></a>
            <a className="h6 fw-medium pb-0 mb-0 border-0 d-flex align-items-center justify-content-between" href="#"><span>When do I pay?</span> <i className="bi bi-arrow-right ms-3"></i></a>
            </div>
            </div>


            <div className="border p-1 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border p-4">
            <h4 className="section-title text-start mb-4">Help & Support</h4>
            <p>Lorem sed erat elitr magna magna labore duo elitr ipsum duo. Et sed duo rebum lorem sed stet sed</p>
            <div className="bg-primary text-center p-3">
            <h4 className="text-white m-0">+012 345 67890</h4>
            </div>
            </div>
            </div>
        </>
    );
}

function FaqsList(){
    return (

                        <div className="accordion accordion-custom" id="accordionExample">

                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How to build a website?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
<h2 className="accordion-header" id="headingTwo">
<button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
How long will it take to get a new website?
</button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div className="accordion-body">
Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
</div>
</div>
</div>
<div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
<h2 className="accordion-header" id="headingThree">
<button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Do you only create HTML websites?
</button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div className="accordion-body">
Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
</div>
</div>
</div>
<div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
<h2 className="accordion-header" id="headingFour">
<button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
Will my website be mobile-friendly?
</button>
</h2>
<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
<div className="accordion-body">
Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
</div>
</div>
</div>
<div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
<h2 className="accordion-header" id="headingFive">
<button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
Will you maintain my site for me?
</button>
</h2>
<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
<div className="accordion-body">
Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
</div>
</div>
</div>
<div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
<h2 className="accordion-header" id="headingSix">
<button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
I’m on a strict budget. Do you have any low cost options?
</button>
</h2>
<div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
<div className="accordion-body">
Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
</div>
</div>
</div>
<div className="accordion-item wow fadeInUp" data-wow-delay="0.7s">
<h2 className="accordion-header" id="headingSeven">
<button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
Will you maintain my site for me?
</button>
</h2>
<div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
<div className="accordion-body">
Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
</div>
</div>
</div>
<div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
<h2 className="accordion-header" id="headingEight">
<button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
I’m on a strict budget. Do you have any low cost options?
</button>
</h2>
<div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
<div className="accordion-body">
Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
</div>
</div>
</div>
                        </div>
                    
    );
}

export function Gallery(){
    return (<>
    <div className="container-xxl py-5">
<div className="container">
<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
<h6 className="section-title text-center text-primary text-uppercase">Gallery</h6>
<h1 className="mb-5">Our Photo <span className="text-primary text-uppercase">Gallery</span></h1>
</div>
<div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
<div className="col-12 text-center">
<ul className="list-inline mb-5" id="portfolio-flters">
<li className="btn btn-outline-primary active" data-filter="*">All Photos</li>
<li className="btn btn-outline-primary" data-filter=".first">Hotel</li>
<li className="btn btn-outline-primary" data-filter=".second">Rooms</li>
<li className="btn btn-outline-primary" data-filter=".third">Beach</li>
</ul>
</div>
</div>
<div className="row g-4 portfolio-container">
<div className="col-lg-4 col-md-6 portfolio-item first wow slideInUp" data-wow-delay="0.1s">
<div className="position-relative rounded overflow-hidden">
<img className="img-fluid" src="hotelier/img/gallery-1.jpg" alt="" />
<div className="portfolio-btn">
<a className="btn btn-square btn-outline-light" href="hotelier/img/gallery-1.jpg" data-lightbox="portfolio"><i className="bi bi-plus"></i></a>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 portfolio-item second wow slideInUp" data-wow-delay="0.2s">
<div className="position-relative rounded overflow-hidden">
<img className="img-fluid" src="hotelier/img/gallery-2.jpg" alt="" />
<div className="portfolio-btn">
<Link className="btn btn-square btn-outline-light" href="hotelier/img/gallery-2.jpg" data-lightbox="portfolio"><i className="bi bi-plus"></i></Link>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 portfolio-item third wow slideInUp" data-wow-delay="0.3s">
<div className="position-relative rounded overflow-hidden">
<img className="img-fluid" src="hotelier/img/gallery-3.jpg" alt="" />
<div className="portfolio-btn">
<Link className="btn btn-square btn-outline-light" href="hotelier/img/gallery-3.jpg" data-lightbox="portfolio"><i className="bi bi-plus"></i></Link>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 portfolio-item first wow slideInUp" data-wow-delay="0.4s">
<div className="position-relative rounded overflow-hidden">
<img className="img-fluid" src="hotelier/img/gallery-4.jpg" alt="" />
<div className="portfolio-btn">
<Link className="btn btn-square btn-outline-light" href="hotelier/img/gallery-4.jpg" data-lightbox="portfolio"><i className="bi bi-plus"></i></Link>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 portfolio-item second wow slideInUp" data-wow-delay="0.5s">
<div className="position-relative rounded overflow-hidden">
<img className="img-fluid" src="hotelier/img/gallery-5.jpg" alt="" />
<div className="portfolio-btn">
<Link className="btn btn-square btn-outline-light" href="hotelier/img/gallery-5.jpg" data-lightbox="portfolio"><i className="bi bi-plus"></i></Link>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 portfolio-item third wow slideInUp" data-wow-delay="0.6s">
<div className="position-relative rounded overflow-hidden">
<img className="img-fluid" src="hotelier/img/gallery-6.jpg" alt="" />
<div className="portfolio-btn">
<Link className="btn btn-square btn-outline-light" href="hotelier/img/gallery-6.jpg" data-lightbox="portfolio"><i className="bi bi-plus"></i></Link>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 portfolio-item first wow slideInUp" data-wow-delay="0.7s">
<div className="position-relative rounded overflow-hidden">
<img className="img-fluid" src="hotelier/img/gallery-7.jpg" alt="" />
<div className="portfolio-btn">
<Link className="btn btn-square btn-outline-light" href="hotelier/img/gallery-7.jpg" data-lightbox="portfolio"><i className="bi bi-plus"></i></Link>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 portfolio-item second wow slideInUp" data-wow-delay="0.8s">
<div className="position-relative rounded overflow-hidden">
<img className="img-fluid" src="hotelier/img/gallery-8.jpg" alt="" />
<div className="portfolio-btn">
<Link className="btn btn-square btn-outline-light" href="hotelier/img/gallery-8.jpg" data-lightbox="portfolio"><i className="bi bi-plus"></i></Link>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 portfolio-item third wow slideInUp" data-wow-delay="0.9s">
<div className="position-relative rounded overflow-hidden">
<img className="img-fluid" src="hotelier/img/gallery-9.jpg" alt="" />
<div className="portfolio-btn">
<Link className="btn btn-square btn-outline-light" href="hotelier/img/gallery-9.jpg" data-lightbox="portfolio"><i className="bi bi-plus"></i></Link>
</div>
</div>
</div>
</div>
</div>
</div>
    </>)
}











export function RoomDetails(){
    return (
        <>

<div className="container-xxl py-5">
<div className="container">
<div className="row g-5">

<div className="col-lg-8">
<div id="room-carousel" className="carousel slide mb-5 wow fadeIn" data-bs-ride="carousel" data-wow-delay="0.1s">
<div className="carousel-inner">
<div className="carousel-item active">
<img className="w-100" src="/hotelier/img/carousel-1.jpg" alt="Image" />
</div>
<div className="carousel-item">
<img className="w-100" src="/hotelier/img/carousel-2.jpg" alt="Image" />
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#room-carousel" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#room-carousel" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>
<div className="d-flex align-items-center mb-4">
<h1 className="mb-0">Junior Suite</h1>
<div className="ps-3">
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
</div>
</div>
<div className="d-flex flex-wrap pb-4 m-n1">
<small className="bg-light rounded py-1 px-3 m-1"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
<small className="bg-light rounded py-1 px-3 m-1"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
<small className="bg-light rounded py-1 px-3 m-1"><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
<small className="bg-light rounded py-1 px-3 m-1"><i className="fa fa-tv text-primary me-2"></i>TV</small>
<small className="bg-light rounded py-1 px-3 m-1"><i className="fa fa-fan text-primary me-2"></i>AC</small>
<small className="bg-light rounded py-1 px-3 m-1"><i className="fa fa-user-cog text-primary me-2"></i>Laundry</small>
<small className="bg-light rounded py-1 px-3 m-1"><i className="fa fa-utensils text-primary me-2"></i>Dinner</small>
</div>
<p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
sit stet no diam kasd vero.
</p>
<p className="mb-5">Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
justo dolore sit invidunt.
</p>
<div className="tab-class wow fadeInUp" data-wow-delay="0.1s">
<ul className="nav nav-pills d-flex justify-content-between border-bottom mb-4">
<li className="nav-item">
<a className="d-flex align-items-center py-3 active" data-bs-toggle="pill" href="#tab-1">
<i className="fa fa-eye text-primary me-2"></i>
<h6 className="mb-0">Overview</h6>
</a>
</li>
<li className="nav-item">
<a className="d-flex align-items-center py-3" data-bs-toggle="pill" href="#tab-2">
<i className="fa fa-dollar text-primary me-2"></i>
<h6 className="mb-0">Pricing</h6>
</a>
</li>
<li className="nav-item">
<a className="d-flex align-items-center py-3" data-bs-toggle="pill" href="#tab-3">
<i className="fa fa-map-marker-alt text-primary me-2"></i>
<h6 className="mb-0">Location</h6>
</a>
</li>
<li className="nav-item">
<a className="d-flex align-items-center py-3" data-bs-toggle="pill" href="#tab-4">
<i className="fa fa-star text-primary me-2"></i>
<h6 className="mb-0">Reviews(3)</h6>
</a>
</li>
</ul>
<div className="tab-content">
<div id="tab-1" className="tab-pane fade show p-0 active">
<p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
sit stet no diam kasd vero.
</p>
<p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
justo dolore sit invidunt.
</p>
</div>
<div id="tab-2" className="tab-pane fade show p-0">
<p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
justo dolore sit invidunt.
</p>
<div className="row g-4">
<div className="col-sm-6 d-flex align-items-center justify-content-between">
<span>Nightly:</span>
<hr className="flex-grow-1 my-0 mx-3" />
<span>$100</span>
</div>
<div className="col-sm-6 d-flex align-items-center justify-content-between">
<span>Weekly:</span>
<hr className="flex-grow-1 my-0 mx-3" />
<span>$100</span>
</div>
<div className="col-sm-6 d-flex align-items-center justify-content-between">
<span>Monthly:</span>
<hr className="flex-grow-1 my-0 mx-3" />
<span>$100</span>
</div>
<div className="col-sm-6 d-flex align-items-center justify-content-between">
<span>Weekends:</span>
<hr className="flex-grow-1 my-0 mx-3" />
<span>$100</span>
</div>
<div className="col-sm-6 d-flex align-items-center justify-content-between">
<span>Additional Guest:</span>
<hr className="flex-grow-1 my-0 mx-3" />
<span>$100</span>
</div>
<div className="col-sm-6 d-flex align-items-center justify-content-between">
<span>Security Deposit:</span>
<hr className="flex-grow-1 my-0 mx-3" />
<span>$100</span>
</div>
</div>
</div>
<div id="tab-3" className="tab-pane fade show p-0">
<div className="row g-4 mb-4">
<div className="col-md-4 d-flex align-items-center">
<div className="flex-shrink-0 border rounded p-1 me-3" style={{width: "45px", height: "45px"}}>
<div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
<i className="fa fa-map-marker-alt text-primary"></i>
</div>
</div>
<span>123 Street, New York, USA</span>
</div>
<div className="col-md-4 d-flex align-items-center">
<div className="flex-shrink-0 border rounded p-1 me-3" style={{width: "45px", height: "45px"}}>
<div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
<i className="fa fa-phone-alt text-primary"></i>
</div>
</div>
<span>+012 345 67890</span>
</div>
<div className="col-md-4 d-flex align-items-center">
<div className="flex-shrink-0 border rounded p-1 me-3" style={{width: "45px", height: "45px"}}>
<div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
<i className="fa fa-envelope text-primary"></i>
</div>
</div>
<span><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="432a2d252c03263b222e332f266d202c2e">[email&#160;protected]</a></span>
</div>
</div>
<iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" style={{minHeight: "350px", border:"0"}} allowfullscreen aria-hidden="false" tabindex="0"></iframe>
</div>
<div id="tab-4" className="tab-pane fade show p-0">
<div className="mb-4">
<h4 className="mb-4">3 Reviews</h4>
<div className="d-flex mb-4">
<img src="/hotelier/img/user.jpg" className="img-fluid rounded" style={{width: "45px", height: "45px"}} alt="" />
<div className="ps-3">
<h6>John Doe <small className="text-body fw-normal fst-italic">01 Jan 2045</small></h6>
<div className="mb-2">
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
</div>
<p className="mb-2">Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
<a href><i className="fa fa-reply me-2"></i> Reply</a>
</div>
</div>
<div className="d-flex mb-4">
<img src="/hotelier/img/user.jpg" className="img-fluid rounded" style={{width: "45px", height: "45px"}} alt="" />
<div className="ps-3">
<h6>John Doe <small className="text-body fw-normal fst-italic">01 Jan 2045</small></h6>
<div className="mb-2">
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
</div>
<p className="mb-2">Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
<a href><i className="fa fa-reply me-2"></i> Reply</a>
</div>
</div>
<div className="d-flex ms-5 mb-4">
<img src="/hotelier/img/user.jpg" className="img-fluid rounded" style={{width: "45px", height: "45px"}} alt="" />
<div className="ps-3">
<h6>John Doe <small className="text-body fw-normal fst-italic">01 Jan 2045</small></h6>
<div className="mb-2">
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
</div>
<p className="mb-2">Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
<a href><i className="fa fa-reply me-2"></i> Reply</a>
</div>
</div>
</div>
<div className="bg-light p-4 p-md-5">
<h4 className="mb-4">Leave A Review</h4>
<form>
<div className="row g-3">
<div className="col-12 d-flex align-items-center">
<h6 className="mb-0 me-2">Rate Me:</h6>
<div id="halfstarsReview" className="fs-3 me-2"></div>
<input type="text" value readonly id="halfstarsInput" className="border-0 bg-transparent" style={{width: "30px"}} />
</div>
<div className="col-12 col-sm-6">
<input type="text" className="form-control bg-white border-0" placeholder="Your Name" style={{height: "55px"}}/>
</div>
<div className="col-12 col-sm-6">
<input type="email" className="form-control bg-white border-0" placeholder="Your Email" style={{height: "55px"}} />
</div>
<div className="col-12">
<input type="text" className="form-control bg-white border-0" placeholder="Website" style={{height: "55px"}} />
</div>
<div className="col-12">
<textarea className="form-control bg-white border-0" rows="5" placeholder="Comment"></textarea>
</div>
<div className="col-12">
<button className="btn btn-primary w-100 py-3" type="submit">Leave Your Review</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>


<RoomsFaq />

</div>
</div>
</div>


        </>
    );
}


export function Contactus(){
    return (
<div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Contact Us</h6>
                    <h1 className="mb-5"><span className="text-primary text-uppercase">Contact</span> For Any Query</h1>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">Booking</h6>
                                <p><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                            </div>
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">General</h6>
                                <p><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                            </div>
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">Technical</h6>
                                <p><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameborder="0" style={{minHeight: "350px", border:"0"}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export function RoomsListPage(){
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <RoomsList />
                    <RoomsFaq />
                </div>
            </div>
        </div>
    );
}

export function RoomsFaq(){
    return (
<div className="col-lg-4">

<div className="bg-light mb-5 wow fadeInUp" data-wow-delay="0.1s">
<div className="border-bottom text-center text-dark p-3 pt-4 mb-3">
<span className="align-top fs-4 lh-base">$</span>
<span className="align-middle fs-1 lh-sm fw-bold">49.00</span>
<span className="align-bottom fs-6 lh-lg">/ Night</span>
</div>
<div className="row g-3 p-4 pt-2">
<div className="col-12">
<div className="date" id="date3" data-target-input="nearest">
<input type="text" className="form-control datetimepicker-input" placeholder="Check in" data-target="#date3" data-toggle="datetimepicker" />
</div>
</div>
<div className="col-12">
<div className="date" id="date4" data-target-input="nearest">
<input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date4" data-toggle="datetimepicker" />
</div>
</div>
<div className="col-12">
<select className="form-select">
<option selected>Adult</option>
<option value="1">Adult 1</option>
<option value="2">Adult 2</option>
<option value="3">Adult 3</option>
</select>
</div>
<div className="col-12">
<select className="form-select">
<option selected>Child</option>
<option value="1">Child 1</option>
<option value="2">Child 2</option>
<option value="3">Child 3</option>
</select>
</div>
<div className="col-12">
<select className="form-select">
<option selected>Night</option>
<option value="1">Night 1</option>
<option value="2">Night 2</option>
<option value="3">Night 3</option>
</select>
</div>
<div className="col-12">
<button className="btn btn-primary py-3 w-100">Book Now</button>
</div>
</div>
</div>


<div className="bg-light p-4 mb-5 wow fadeInUp" data-wow-delay="0.1s">
<h4 className="mb-4">Category</h4>
<a className="d-block position-relative mb-3" href>
<img className="img-fluid" src="/hotelier/img/cat-1.jpg" alt="" />
<div className="d-flex position-absolute top-0 start-0 w-100 h-100 p-3" style={{background: "rgba(0,0,0,.3)"}}>
<h5 className="text-white m-0 mt-auto">luxury Room</h5>
</div>
</a>
<a className="d-block position-relative mb-3" href>
<img className="img-fluid" src="/hotelier/img/cat-2.jpg" alt="" />
<div className="d-flex position-absolute top-0 start-0 w-100 h-100 p-3" style={{background: "rgba(0,0,0,.3)"}}>
<h5 className="text-white m-0 mt-auto">Couple Room</h5>
</div>
</a>
<a className="d-block position-relative" href>
<img className="img-fluid" src="/hotelier/img/cat-3.jpg" alt="" />
<div className="d-flex position-absolute top-0 start-0 w-100 h-100 p-3" style={{background: "rgba(0,0,0,.3)"}}>
<h5 className="text-white m-0 mt-auto">Single Room</h5>
</div>
</a>
</div>


<div className="border p-1 wow fadeInUp" data-wow-delay="0.1s">
<div className="border p-4">
<h4 className="mb-4">Help & Support</h4>
<p>Lorem sed erat elitr magna magna labore duo elitr ipsum duo. Et sed duo rebum lorem sed stet sed</p>
<div className="bg-primary text-center p-3">
<h4 className="text-white m-0">+012 345 67890</h4>
</div>
</div>
</div>

</div>
    );
}

export function RoomsList(){
    return (
<div className="col-lg-8">
<div className="row room-item m-0 mb-4 wow fadeInUp" data-wow-delay="0.1s">
<div className="col-md-5 col-lg-12 col-xl-5 p-0" style={{minHeight: "300px"}}>
<div className="position-relative h-100">
<img className="position-absolute w-100 h-100" src="/hotelier/img/room-1.jpg" alt="" style={{objectFit: "cover"}} />
</div>
</div>
<div className="col-md-7 col-lg-12 col-xl-7 h-100 px-0">
<div className="p-4">
<div className="d-flex align-items-center justify-content-between mb-3">
<small className="bg-primary text-white rounded py-1 px-3">$100/Night</small>
<div className="ps-2">
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
</div>
</div>
<h5 className="mb-3">Junior Suite</h5>
<div className="d-flex mb-3">
<small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
<small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
<small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
</div>
<p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
</div>
<div className="d-flex justify-content-between border-top mt-auto p-4">
<Link className="btn btn-sm btn-primary rounded py-2 px-4" href="/rooms/1">View Detail</Link>
<Link className="btn btn-sm btn-dark rounded py-2 px-4" href="/rooms/1">Book Now</Link>
</div>
</div>
</div>
<div className="row room-item m-0 mb-4 wow fadeInUp" data-wow-delay="0.1s">
<div className="col-md-5 col-lg-12 col-xl-5 p-0" style={{minHeight: "300px"}}>
<div className="position-relative h-100">
<img className="position-absolute w-100 h-100" src="/hotelier/img/room-2.jpg" alt="" style={{objectFit: "cover"}} />
</div>
</div>
<div className="col-md-7 col-lg-12 col-xl-7 h-100 px-0">
<div className="p-4">
<div className="d-flex align-items-center justify-content-between mb-3">
<small className="bg-primary text-white rounded py-1 px-3">$100/Night</small>
<div className="ps-2">
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
</div>
</div>
<h5 className="mb-3">Junior Suite</h5>
<div className="d-flex mb-3">
<small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
<small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
<small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
</div>
<p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
</div>
<div className="d-flex justify-content-between border-top mt-auto p-4">
<Link className="btn btn-sm btn-primary rounded py-2 px-4" href="/rooms/1">View Detail</Link>
<Link className="btn btn-sm btn-dark rounded py-2 px-4" href="/rooms/1">Book Now</Link>
</div>
</div>
</div>
<div className="row room-item m-0 mb-4 wow fadeInUp" data-wow-delay="0.1s">
<div className="col-md-5 col-lg-12 col-xl-5 p-0" style={{minHeight: "300px"}}>
<div className="position-relative h-100">
<img className="position-absolute w-100 h-100" src="/hotelier/img/room-3.jpg" alt="" style={{objectFit: "cover"}} />
</div>
</div>
<div className="col-md-7 col-lg-12 col-xl-7 h-100 px-0">
<div className="p-4">
<div className="d-flex align-items-center justify-content-between mb-3">
<small className="bg-primary text-white rounded py-1 px-3">$100/Night</small>
<div className="ps-2">
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
</div>
</div>
<h5 className="mb-3">Junior Suite</h5>
<div className="d-flex mb-3">
<small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
<small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
<small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
</div>
<p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
</div>
<div className="d-flex justify-content-between border-top mt-auto p-4">
<Link className="btn btn-sm btn-primary rounded py-2 px-4" href="/rooms/1">View Detail</Link>
<Link className="btn btn-sm btn-dark rounded py-2 px-4" href="/rooms/1">Book Now</Link>
</div>
</div>
</div>
<div className="row room-item m-0 mb-4 wow fadeInUp" data-wow-delay="0.1s">
<div className="col-md-5 col-lg-12 col-xl-5 p-0" style={{minHeight: "300px"}}>
<div className="position-relative h-100">
<img className="position-absolute w-100 h-100" src="/hotelier/img/room-1.jpg" alt="" style={{objectFit: "cover"}} />
</div>
</div>
<div className="col-md-7 col-lg-12 col-xl-7 h-100 px-0">
<div className="p-4">
<div className="d-flex align-items-center justify-content-between mb-3">
<small className="bg-primary text-white rounded py-1 px-3">$100/Night</small>
<div className="ps-2">
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
</div>
</div>
<h5 className="mb-3">Junior Suite</h5>
<div className="d-flex mb-3">
<small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
<small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
<small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
</div>
<p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
</div>
<div className="d-flex justify-content-between border-top mt-auto p-4">
<a className="btn btn-sm btn-primary rounded py-2 px-4" href>View Detail</a>
<a className="btn btn-sm btn-dark rounded py-2 px-4" href>Book Now</a>
</div>
</div>
</div>
<div className="row room-item m-0 mb-4 wow fadeInUp" data-wow-delay="0.1s">
<div className="col-md-5 col-lg-12 col-xl-5 p-0" style={{minHeight: "300px"}}>
<div className="position-relative h-100">
<img className="position-absolute w-100 h-100" src="/hotelier/img/room-2.jpg" alt="" style={{objectFit: "cover"}} />
</div>
</div>
<div className="col-md-7 col-lg-12 col-xl-7 h-100 px-0">
<div className="p-4">
<div className="d-flex align-items-center justify-content-between mb-3">
<small className="bg-primary text-white rounded py-1 px-3">$100/Night</small>
<div className="ps-2">
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
<small className="fa fa-star text-primary"></small>
</div>
</div>
<h5 className="mb-3">Junior Suite</h5>
<div className="d-flex mb-3">
<small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
<small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
<small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
</div>
<p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
</div>
<div className="d-flex justify-content-between border-top mt-auto p-4">
<a className="btn btn-sm btn-primary rounded py-2 px-4" href>View Detail</a>
<a className="btn btn-sm btn-dark rounded py-2 px-4" href>Book Now</a>
</div>
</div>
</div>
<div className="row wow fadeInUp" data-wow-delay="0.1s">
<div className="col-12">
<nav aria-label="Page navigation">
<ul className="pagination justify-content-center m-0">
<li className="page-item disabled">
<a className="page-link rounded-0" href="#" aria-label="Previous">
<span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
</a>
</li>
<li className="page-item active"><a className="page-link" href="#">1</a></li>
<li className="page-item"><a className="page-link" href="#">2</a></li>
<li className="page-item"><a className="page-link" href="#">3</a></li>
<li className="page-item">
<a className="page-link rounded-0" href="#" aria-label="Next">
<span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
</a>
</li>
</ul>
</nav>
</div>
</div>
</div>
    );
}


export function Facility(){
    return (
        
        <div className="container-fluid my-5 p-0">
            <div className="row g-0">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="feature-item">
            <h5 className="bg-primary text-white text-center p-4 m-0">Fitness Clab</h5>
            <div className="position-relative overflow-hidden">
            <img className="img-fluid" src="/hotelier/img/feature-1.jpg" alt="" />
            <div className="feature-text text-white text-center">
            <p className="m-0">Clita sed diam est vero elitr ipsum. Et ipsum amet sea sed amet sed dolor justo vero lorem. Vero amet erat eos ipsum stet elitr tempor magna</p>
            </div>
            </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="feature-item">
            <h5 className="bg-dark text-white text-center p-4 m-0">Party Center</h5>
            <div className="position-relative overflow-hidden">
            <img className="img-fluid" src="/hotelier/img/feature-2.jpg" alt="" />
            <div className="feature-text text-white text-center">
            <p className="m-0">Clita sed diam est vero elitr ipsum. Et ipsum amet sea sed amet sed dolor justo vero lorem. Vero amet erat eos ipsum stet elitr tempor magna</p>
            </div>
            </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="feature-item">
            <h5 className="bg-primary text-white text-center p-4 m-0">Restaurant</h5>
            <div className="position-relative overflow-hidden">
            <img className="img-fluid" src="/hotelier/img/feature-3.jpg" alt="" />
            <div className="feature-text text-white text-center">
            <p className="m-0">Clita sed diam est vero elitr ipsum. Et ipsum amet sea sed amet sed dolor justo vero lorem. Vero amet erat eos ipsum stet elitr tempor magna</p>
            </div>
            </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="feature-item">
            <h5 className="bg-dark text-white text-center p-4 m-0">Private Beach</h5>
            <div className="position-relative overflow-hidden">
            <img className="img-fluid" src="/hotelier/img/feature-4.jpg" alt="" />
            <div className="feature-text text-white text-center">
            <p className="m-0">Clita sed diam est vero elitr ipsum. Et ipsum amet sea sed amet sed dolor justo vero lorem. Vero amet erat eos ipsum stet elitr tempor magna</p>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export function FacilityDetails(){
    return (
        <div className="container-xxl py-5">
            <div className="container">
            <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{minHeight: "350px"}}>
            <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
            <img className="position-absolute img-fluid w-100 h-100 rounded" src="/hotelier/img/feature.jpg" style={{objectFit: "cover"}} alt="" />
            <div className="bg-white border p-1 position-absolute top-0 end-0 mt-n4 me-n4">
            <div className="border py-4 px-5">
            <h1 className="display-4 text-primary mb-0">15 <span className="fs-4 text-dark">Years</span></h1>
            <h4>Experience</h4>
            </div>
            </div>
            </div>
            </div>
            <div className="col-lg-6">
            <h6 className="section-title text-start text-primary text-uppercase">Features</h6>
            <h1 className="mb-4">Why <span className="text-primary text-uppercase">Choose</span> Us</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className="row g-4">
            <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex">
            <div className="flex-shrink-0 border rounded p-1" style={{width: "50px", height: "50px"}}>
            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
            <i className="fa fa-bed text-primary"></i>
            </div>
            </div>
            <div className="ps-4">
            <h5>Relux Living</h5>
            <p className="m-0">Clita dolor sit lorem justo lorem. Diam dolore et sed erat, erat est diam dolore kasd sit sed amet sit dolor sed.</p>
            </div>
            </div>
            </div>
            <div className="col-12 wow fadeIn" data-wow-delay="0.2s">
            <div className="d-flex">
            <div className="flex-shrink-0 border rounded p-1" style={{width: "50px", height: "50px"}}>
            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
            <i className="fa fa-shield-alt text-primary"></i>
            </div>
            </div>
            <div className="ps-4">
            <h5>High Security System</h5>
            <p className="m-0">Clita dolor sit lorem justo lorem. Diam dolore et sed erat, erat est diam dolore kasd sit sed amet sit dolor sed.</p>
            </div>
            </div>
            </div>
            <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
            <div className="d-flex">
            <div className="flex-shrink-0 border rounded p-1" style={{width: "50px", height: "50px"}}>
            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
            <i className="fa fa-phone-alt text-primary"></i>
            </div>
            </div>
            <div className="ps-4">
            <h5>24/7 Telephone Support</h5>
            <p className="m-0">Clita dolor sit lorem justo lorem. Diam dolore et sed erat, erat est diam dolore kasd sit sed amet sit dolor sed.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}


export function AboutusContent(){
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                        <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Hotelier</span></h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                        <p className="mb-0">Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                        <p className="mb-0">Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                        <p className="mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/hotelier/img/about-1.jpg" style={{marginTop: "25%"}} />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/hotelier/img/about-2.jpg" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/hotelier/img/about-3.jpg" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/hotelier/img/about-4.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}



export function Header(){
    return (
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                    <Link href="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <img src="/hotelier/logo/hotelier.png" width="70%" height="50%" />
                    </Link>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-0 bg-white d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-envelope text-primary me-2"></i>
                                <p className="mb-0">booking@tulio.design</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                <i className="fa fa-phone-alt text-primary me-2"></i>
                                <p className="mb-0">+971 55 709 3439</p>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                <a className="me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="me-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="me-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="" href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <Link href="/" className="navbar-brand d-block d-lg-none">
                            <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link href="/" className="nav-item nav-link active">Home</Link>
                                <Link href="/aboutus" className="nav-item nav-link">About</Link>
                                <Link href="/service" className="nav-item nav-link">Services</Link>
                                <Link href="/rooms" className="nav-item nav-link">Rooms</Link>
                                <Link href="/our-team" className="nav-item nav-link">Our Team</Link>
                                <Link href="/gallery" className="nav-item nav-link">Gallery</Link>
                                <Link href="/faqs" className="nav-item nav-link">Faqs</Link>
                                <Link href="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        

    );
}


export function Booking(){
    return (
        <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="bg-white shadow" style={{padding: "35px"}}>
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-3">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input"
                                            placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="date" id="date2" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select">
                                        <option selected>Adult</option>
                                        <option value="1">Adult 1</option>
                                        <option value="2">Adult 2</option>
                                        <option value="3">Adult 3</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select">
                                        <option selected>Child</option>
                                        <option value="1">Child 1</option>
                                        <option value="2">Child 2</option>
                                        <option value="3">Child 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary w-100">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}


export function AboutUs(){
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                        <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Hotelier</span></h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                        <p className="mb-0">Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                        <p className="mb-0">Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                        <p className="mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className="btn btn-primary py-3 px-5 mt-2" href="/rooms">Explore More</Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/hotelier/img/about-1.jpg" style={{marginTop: "25%"}} />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/hotelier/img/about-2.jpg" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/hotelier/img/about-3.jpg" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/hotelier/img/about-4.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Room(){
    return (
<div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="/hotelier/img/room-1.jpg" alt="" />
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Junior Suite</h5>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div className="d-flex justify-content-between">
                                    <Link className="btn btn-sm btn-primary rounded py-2 px-4" href="/rooms/1">View Detail</Link>
                                    <Link className="btn btn-sm btn-dark rounded py-2 px-4" href="/rooms/1">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="/hotelier/img/room-2.jpg" alt="" />
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Executive Suite</h5>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div className="d-flex justify-content-between">
                                    <Link className="btn btn-sm btn-primary rounded py-2 px-4" href="/rooms/1">View Detail</Link>
                                    <Link className="btn btn-sm btn-dark rounded py-2 px-4" href="/rooms/1">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="/hotelier/img/room-3.jpg" alt="" />
                                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                            </div>
                            <div className="p-4 mt-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Super Deluxe</h5>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div className="d-flex justify-content-between">
                                    <Link className="btn btn-sm btn-primary rounded py-2 px-4" href="/rooms/1">View Detail</Link>
                                    <Link className="btn btn-sm btn-dark rounded py-2 px-4" href="/rooms/1">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    );
}

export function Service(){
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-hotel fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Rooms & Appartment</h5>
                            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-utensils fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Food & Restaurant</h5>
                            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-spa fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Spa & Fitness</h5>
                            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-swimmer fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Sports & Gaming</h5>
                            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-glass-cheers fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Event & Party</h5>
                            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <a className="service-item rounded" href="">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-dumbbell fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">GYM & Yoga</h5>
                            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}


export function Testimonials(){

    useEffect(()=>{
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 25,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i className="bi bi-arrow-left"></i>',
                '<i className="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                }
            }
        });
    
    }, []);


    return (

        <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="owl-carousel testimonial-carousel py-5">
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                        <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded" src="/hotelier/img/testimonial-1.jpg" style={{width: "45px", height: "45px"}} />
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                    </div>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                        <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded" src="/hotelier/img/testimonial-2.jpg" style={{width: "45px", height: "45px"}} />
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                    </div>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                        <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded" src="/hotelier/img/testimonial-3.jpg" style={{width: "45px", height: "45px"}} />
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                    </div>
                </div>
            </div>
        </div>
        

    );
}


export function Teams(){
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="/hotelier/img/team-1.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="/hotelier/img/team-2.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="/hotelier/img/team-3.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="/hotelier/img/team-4.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}


export function NewsLetter(){
    return (
        <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="row justify-content-center">
                <div className="col-lg-10 border rounded p-1">
                    <div className="border rounded text-center p-1">
                        <div className="bg-white rounded text-center p-5">
                            <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
                            <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                                <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Footer(){
    return (
        <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container pb-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-primary rounded p-4">
                            <Link href="/"><h1 className="text-white text-uppercase mb-3">Hotelier</h1></Link>
                            <p className="text-white mb-0">
								Download <a className="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro">Hotelier – Premium Version</a>, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
							</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></Link>
                            <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row gy-5 g-4">
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <Link className="btn btn-link" href="/aboutus">About Us</Link>
                                <Link className="btn btn-link" href="/contact">Contact Us</Link>
                                <Link className="btn btn-link" href="/privacy">Privacy Policy</Link>
                                <Link className="btn btn-link" href="/term">Terms & Condition</Link>
                                <Link className="btn btn-link" href="/support">Support</Link>
                            </div>
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                <Link className="btn btn-link" href="/restaurant">Food & Restaurant</Link>
                                <Link className="btn btn-link" href="/fitness">Spa & Fitness</Link>
                                <Link className="btn btn-link" href="/sports">Sports & Gaming</Link>
                                <Link className="btn btn-link" href="/event">Event & Party</Link>
                                <Link className="btn btn-link" href="/gym">GYM & Yoga</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
							Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            <br />Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link href="">Home</Link>
                                <Link href="/cookie">Cookies</Link>
                                <Link href="/help">Help</Link>
                                <Link href="/faqs">FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function BackToTopBtn(){
    return (
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
            <i className="bi bi-arrow-up"></i>
        </a>
    );
}

export function PageNotFound(){
    return (
        <div className="container-xxl py-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                <h1 className="display-1">404</h1>
                <h1 className="mb-4">Page Not Found</h1>
                <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                <a className="btn btn-primary py-3 px-5" href>Go Back To Home</a>
              </div>
            </div>
          </div>
        </div>
    );
}

