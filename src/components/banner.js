import Link from "next/link";

export function Banner({title}){
    console.log('*****************');
    console.log(title);
    return (
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(hotelier/img/carousel-1.jpg)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Rooms</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        
    );
}

export function BannerRooms(){
    return (
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(hotelier/img/carousel-1.jpg)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Our Rooms</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Rooms</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        
    );
}



export function BannerService(){
    return (
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(hotelier/img/carousel-2.jpg)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Our Service</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        
    );
}


export function BannerAboutus(){
    return (
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(hotelier/img/carousel-1.jpg)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        
    );
}

export function BannerHome(){
    return (
        <div className="container-fluid p-0 mb-5">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="hotelier/img/carousel-1.jpg" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                                <Link href="/rooms" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</Link>
                                <Link href="/rooms" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="hotelier/img/carousel-2.jpg" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                                <Link href="/rooms" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</Link>
                                <Link href="/rooms" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
