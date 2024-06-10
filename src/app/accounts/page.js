import Link from "next/link";
import styles from "../page.module.css";

export default function BlogPage(){
    return (
        
            <div>
                <h3>Blog Page</h3>
                <p>Blog List</p>
                

                <br />
                <br />
                <hr />
                <br />
                <Link href="/" style={{color:"#00f"}}>Home</Link>
            </div>
    )
}