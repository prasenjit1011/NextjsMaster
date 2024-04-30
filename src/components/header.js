import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function Header(){

    console.log('---here----');
    return (
        <div style={{padding:"20px"}}>
            <Image 
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={120}
                height={25}
                priority
            /> &nbsp; &nbsp; &nbsp; 
            <Link href="/">Home</Link> &nbsp;
            <Link href="/aboutus">About Us</Link> &nbsp;
            <Link href="/blog">Blog</Link> &nbsp;
            <Link href="/blog/customer">Customer</Link> &nbsp;
            <Link href="/blog/one">Blog1</Link> &nbsp;
            <Link href="/blog/two">Blog2</Link> &nbsp;
        </div>
    );
}