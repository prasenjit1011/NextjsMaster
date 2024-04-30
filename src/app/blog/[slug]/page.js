import Link from "next/link";
import styles from "../../page.module.css";

export default function UserBlogPage({params}){
    console.log(789)
    return (
        <main className={styles.main}>
            <h3>Blog {params.slug}</h3>
            <Link href="/">Home</Link>
        </main>
    )
}