import Link from "next/link";
import styles from "../../page.module.css";

export default function UserBlogPage(){
    return (
        <main className={styles.main}>
            <h3>Blog Customer Page</h3>
            <Link href="/">Home</Link>
        </main>
    )
}