import Image from "next/image";
import styles from "../page.module.css";

export default function ContactusPage(){
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
                        <b>Contact Us : </b> 
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                    </p><br />
                    <p>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
            </div>
        </main>
    )
}