"use client";
import Link from "next/link";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 

export default function StockData(){

    const apiURL            = 'https://jsonmock.hackerrank.com/api/stocks';
    const [data, setData]   = useState([]);
    const [startDate, setStartDate] = useState(new Date('5-January-2000'));

    useEffect(()=>{

        let dtd = startDate.getDate()  + "-" + startDate.toLocaleString('default', { month: 'long' }) + "-" + startDate.getFullYear();
        fetch(apiURL+'?date='+dtd)
        .then((res)=>res.json())
        .then((result)=>{           
            if(result['data'] && result['data']?.length){
                setData(result['data'][0]);
            }
            else{
                console.log('-- Data Not Found ---');
            }
            console.log('-- startDate --',startDate);

        })
        .catch((err)=>{
            console.log('-- Error --',err);
        });

    },[startDate]);
    

    return (
        <main className={styles.main}>
            <h3>Stock-Data</h3>
            <div>                
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            {
                !Object.keys(data).length 
                    ? <div data-testid="no-result">No Results Found</div>
                    : <ol data-testid="stock-data">
                        <li>Open: {data.open}</li>
                        <li>Close: {data.close}</li>
                        <li>High: {data.high}</li>
                        <li>Low: {data.low}</li>
                    </ol>
            }
        </main>
    )
}