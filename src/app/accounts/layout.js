 import { Inter } from "next/font/google";
import styles from "../page.module.css";
import auth from "../accounts/auth.module.css";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import React from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login | Registration",
  description: "User Login | Registration",
};


export default function RootLayout({ children }) {



  return (
        <div className={styles.main} style={{border:"1px solid #F00", flexDirection:"row"}}>
            <div className={auth.authLeftSide} >
              <Image
                className={auth.logo}
                src="/bsb-logo-light.svg"
                alt="Next.js Logo"
                width={100}
                height={200}
              />                  
            </div>
            <div className={auth.authRightSide}>                  
              <Link href="/accounts/login">Login</Link> &nbsp;| &nbsp;
              <Link href="/accounts/registration?refCode=45">Registation</Link>
              <br /><hr /><br />
              {children}
            </div>          
        </div>
  );
}
