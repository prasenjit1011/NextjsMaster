function ContactusDetails(){
    return (
        <>
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 className="mb-3">Get In Touch</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                    eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4 mb-5">
                <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: "75px", height: "75px"}}>
                        <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                    </div>
                    <h6>123 Street, New York, USA</h6>
                </div>
                <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: "75px", height: "75px"}}>
                        <i className="fa fa-envelope-open fa-2x text-primary"></i>
                    </div>
                    <h6>info@example.com</h6>
                </div>
                <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                    <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: "75px", height: "75px"}}>
                        <i className="fa fa-phone-alt fa-2x text-primary"></i>
                    </div>
                    <h6>+012 345 6789</h6>
                </div>
            </div>
        </>
    );
}

function ContactusFrm(){
    return (
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
                <form>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                                <label for="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                                <label for="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                                <label for="subject">Subject</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
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
    );
}

function ContactusMap(){
    return (
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: "400px"}}>
            <div className="position-relative h-100">
                <iframe className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0" style={{minHeight: "400px", border:"0"}} allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
            </div>
        </div>
    );
}

export function Contactus(){
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <ContactusDetails />                
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <ContactusFrm />
                        <ContactusMap />
                    </div>
                </div>
            </div>
        </div>
    );
}