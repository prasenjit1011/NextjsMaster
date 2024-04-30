import Link from "next/link";
import styles from "../page.module.css";

export default function AboutusPage(){
    return (
        <main className={styles.main}>
            <h3>About Us</h3>
            <Link href="/">Home</Link>
        </main>
    )
}