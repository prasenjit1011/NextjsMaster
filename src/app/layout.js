'use client';
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <meta charSet="utf-8" />
        <title>TuliOutlet - Vegetable Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap" rel="stylesheet" precedence="default" /> 
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" precedence="default"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" precedence="default" />
        <link href="html/lib/lightbox/css/lightbox.min.css" rel="stylesheet" precedence="default" />
        
        <link href="html/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" precedence="default" />
        <link href="html/css/bootstrap.min.css" rel="stylesheet" precedence="default" />
        <link href="html/css/style.css" rel="stylesheet" precedence="default" />
        <link rel="icon" type="image/x-icon" href="/html/img/bag.png" />
        <body >
            <AllComponent />



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
        <h1>All Component 02</h1>
    );
}