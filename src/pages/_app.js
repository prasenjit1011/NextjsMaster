// src/pages/_app.js
import PagesLayout from "./layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <PagesLayout>
      <Component {...pageProps} />
    </PagesLayout>
  );
}
