import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TourHotelier",
  description: "Hotels in Dubai",
};


import { BackToTopBtn, Banner, Booking, AboutUs, Footer, Header, NewsLetter, Room, Service, Teams, Testimonials } from "@/components/hotelier";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>TourHotelier</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="" name="keywords" />
            <meta content="" name="description" />
            <link href="/hotelier/logo/icon.png" rel="icon" />
            <link rel="shortcut icon" href="/hotelier/logo/icon.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/hotelier/logo/icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/hotelier/logo/icon.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/hotelier/logo/icon.png"/>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />  
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
            <link href="/hotelier/lib/animate/animate.min.css" rel="stylesheet" />
            <link href="/hotelier/lib/lightbox/css/lightbox.min.css" rel="stylesheet"  />
            <link href="/hotelier/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
            <link href="/hotelier/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
            <link href="/hotelier/css/bootstrap.min.css" rel="stylesheet" />
            <link href="/hotelier/css/style.css" rel="stylesheet" />
        </head>        
        <body className={inter.className}>
            
            <div class="container-xxl bg-white p-0">
                <Header />
                {children}                
                <Footer />
                <BackToTopBtn />
            </div>

            <script data-cfasync="false" ></script>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" defer></script>
            <script src="/hotelier/lib/wow/wow.min.js" defer></script>
            <script src="/hotelier/lib/easing/easing.min.js" defer></script>
            <script src="/hotelier/lib/waypoints/waypoints.min.js" defer></script>
            <script src="/hotelier/lib/counterup/counterup.min.js" defer></script>
            <script src="/hotelier/lib/lightbox/js/lightbox.min.js" defer></script>
            <script src="/hotelier/lib/owlcarousel/owl.carousel.min.js" defer></script>
            <script src="/hotelier/lib/tempusdominus/js/moment.min.js" defer></script>
            <script src="/hotelier/lib/tempusdominus/js/moment-timezone.min.js" defer></script>
            <script src="/hotelier/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js" defer></script>
            <script src="/hotelier/js/main.js" defer></script>            
        </body>
    </html>
  );
}
