import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function Header(){

    console.log('---here----');
    return (
        <div style={{padding:"20px"}}>
            <Image 
                className={styles.logo}
                src="/hotel.png"
                alt="Hotel"
                width={120}
                height={25}
                priority
            /> &nbsp; &nbsp; &nbsp; 
            <Link href="/">Home</Link> &nbsp;| &nbsp;
            <Link href="/aboutus">About Us</Link> &nbsp;| &nbsp;
            <Link href="/contactus">Contact Us</Link> &nbsp;| &nbsp;
            <Link href="/hotels">Hotels</Link> &nbsp;| &nbsp; &nbsp; &nbsp; &nbsp;

            <Link href="/accounts/login">Accounts</Link> &nbsp;| &nbsp; &nbsp; &nbsp;
            
            <Link href="/user" style={{display:"none"}}>Profile</Link>
            <Link href="/user/wishlist" style={{display:"none"}}>Customer</Link>
            <Link href="/notfound" style={{display:"none"}}>404 Page</Link>
        </div>
    );
}