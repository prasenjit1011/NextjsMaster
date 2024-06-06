"use client";
import Link from "next/link";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; 

export default function HotelListPage(){

    //const apiURL = 'https://gh4csx-3000.csb.app/api/hotels/list/';
    const apiHost   = 'http://localhost:3000/';
    const apiURL    = apiHost + 'api/hotels/list/';
    const [data, setData]   = useState([]);

    useEffect(()=>{

        fetch(apiURL)
        .then((res)=>res.json())
        .then((result)=>{
            //console.log(result);
            if(result && result?.length){
                setData(result);
            }
            else{
                console.log('-- Data Not Found ---');
            }
        })
        .catch((err)=>{
            console.log('-- Error --',err);
        });

    },[]);
    

    return (
        <main className={styles.main}>
            {
                !Object.keys(data).length 
                ? <div data-testid="no-result">No Results Found</div>
                : <div data-testid="hotelList">
                    {
                        data.map((value, key)=>{
                            return (
                                <div className={styles.hotelBox} key={value['_id']}>
                                    <div className={styles.hotelImgBox}>
                                        <img src={apiHost+value['imageUrl']} className={styles.hotelImg} />
                                    </div>
                                    <div className={styles.hotelNameBox}>
                                        <Link href={ "/hotels/"+value['_id']} >{value['name']}</Link>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            }

        </main>
    )
}