import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <Image
          className={styles.logo}
          src={"https://fastly.picsum.photos/id/78/200/200.jpg?hmac=P2qNtvmWActric-MfeYNdsN7YuChCioX-9CkJMNUYpk"}
          alt="Next.js Logo"
          width={200}
          height={150}
          priority
        />
    </main>
  );
}
