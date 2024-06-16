import Image from "next/image";
import styles from "../page.module.css";

export default function AboutusPage(){
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
                />
                <div className={styles.content}>
                    <p>
                        <b>About Us : </b> 
                        In the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
                    </p><br />
                    <p>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
            </div>
        </main>
    )
}