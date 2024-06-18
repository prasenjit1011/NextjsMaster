'use client';
 
import {SiteMenu, Loader, Banner, Facility, LearnMore, BecomeTeacher, Appointment, Teams, Testimonial, TestimonialList, Footer, ArrowBtn} from "@/components/common";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>Kider</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="" name="keywords" />
            <meta content="" name="description" />
        
            <link href="kider/img/favicon.ico" rel="icon" />
        
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap" rel="stylesheet" />

            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
            
            <link href="kider/lib/animate/animate.min.css" rel="stylesheet" />
            <link href="kider/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
            
            <link href="kider/css/bootstrap.min.css" rel="stylesheet" />    
            <link href="kider/css/style.css" rel="stylesheet" />
        </head>
        <body >
            <SiteMenu />
            <Loader />
            {children}


            <Footer />
            <ArrowBtn />
            
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="kider/lib/wow/wow.min.js"></script>
            <script src="kider/lib/easing/easing.min.js"></script>
            <script src="kider/lib/waypoints/waypoints.min.js"></script>
            <script src="kider/lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="kider/js/main.js"></script>

        </body>
    </html>
  );
}



function AllComponent(){
    return (
        <h1>All Component 04</h1>
    );
}