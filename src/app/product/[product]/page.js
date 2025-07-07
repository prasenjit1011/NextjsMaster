// src/app/product/[product]/page.tsx

import { ProductDetails } from "@/components/common";

// Accept `params` for dynamic route
export default function ProductDetailsPage() {
  return <ProductDetails />;
}

// Required for static export builds
export async function generateStaticParams() {
  // Option 1: From static list
  const products = ['product-1', 'product-2', 'product-3'];

  return products.map((slug) => ({
    product: slug,
  }));

  // Option 2: Fetch from API (if available)
  /*
  const res = await fetch("https://your-api.com/products");
  const products = await res.json();
  return products.map((item: any) => ({ product: item.slug }));
  */
}


// export default function ProductDetailsPage({ params }: { params: { product: string } }) {
//   return <ProductDetails slug={params.product} />;
// }

// import { ProductDetails } from "@/components/common";

// export default function ProductDetailsPage(){
//   return (
//     <ProductDetails />
//   );
// }