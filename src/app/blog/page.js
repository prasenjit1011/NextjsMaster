import Link from "next/link";
import styles from "../page.module.css";

export default function BlogPage(){
    return (
        <main className={styles.main}>
            <h3>Blog Us</h3>
            <Link href="/">Home</Link>
        </main>
    )
}