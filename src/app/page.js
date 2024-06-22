import { Footer, Header, BannerHome, HeaderSearch, ProductList, ProductCategory, BannerCategory, ProductRegular, TotalSale, OurService, FooterMenu, Testimonial } from "@/components/common";


export default function Home() {
  return (
    <>
      <BannerHome />
      <ProductCategory />
      <BannerCategory />
      <ProductRegular />
      <TotalSale />
      <Testimonial />
      <OurService />
    </>
  );
}
