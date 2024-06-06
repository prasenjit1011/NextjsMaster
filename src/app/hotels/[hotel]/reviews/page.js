"use client";

import Link from "next/link";
import styles from "../../../page.module.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 


export default function ReviewListPage({params}){
    const hotelId   = params.hotel;
    const apiHost   = 'http://localhost:3000/';
    const apiURL    = apiHost + 'api/hotels/list/';
    const reviewURL = apiHost + 'api/hotels/'+hotelId+'/review';
    const [data, setData]   = useState([]);
    const [reviewList, setReview] = useState([]);
    const [startDate, setStartDate] = useState(new Date('5-January-2000'));

    useEffect(()=>{

        let dtd = startDate.getDate()  + "-" + startDate.toLocaleString('default', { month: 'long' }) + "-" + startDate.getFullYear();
        fetch(apiURL+'?date='+dtd)
        .then((res)=>res.json())
        .then((result)=>{
            if(result && result?.length){
                let hotelDetails = result.filter((value, key)=> {return value['_id'] == hotelId});
                if(hotelDetails[0]){
                    console.log('-: hotelDetails :-',hotelDetails[0]);
                    setData(hotelDetails[0]);
                }
                else{
                    console.log('-: Data Not Found :-');
                }
            }
            else{
                console.log('-- Data Not Found ---');
            }
            console.log('-- startDate --',startDate);

        })
        .catch((err)=>{
            console.log('-- Error --',err);
        });

        
        fetch(reviewURL)
        .then((res)=>res.json())
        .then((result)=>{
            if(result && result?.length){
                console.log('review url : ',reviewURL);
                console.log(result);
                setReview(result);
            }
            else{
                console.log('-- Data Not Found ---');
            }
            console.log('-- startDate --',startDate);

        })
        .catch((err)=>{
            console.log('-- Error --',err);
        });

    },[]);
    

    //console.log(reviewList);


    return (
        <main className={styles.main}>
            {
                !Object.keys(data).length 
                ? <div data-testid="no-result">Not Found</div>
                : <div className={styles.hotelDetailsPage}>
                    
                    <div className={styles.hotelDetailsImg}>
                        <img src={apiHost+data['imageUrl']} className={styles.hotelImg} />
                    </div>
                    <div className={styles.hotelDetails}>
                        <p className={styles.title}>{data['name']}</p>
                        <p>Price : {data['price']}</p>
                        <b>Tour Date : </b>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        <br />
                        <br />
                        <br />
                        <p className={styles.subtitle}>Review List</p>
                        {
                            reviewList.map((review, key)=>{
                                return (
                                    <p className={styles.reviewBox}>
                                        {review['title']} &nbsp;
                                        <Link href={ "/hotels/"+hotelId+"/reviews/"+review["_id"]} className={styles.readmore} >Read More</Link>
                                    </p>
                                );
                            })
                        }
                    </div>
                </div>
            }
        </main>
    )
}