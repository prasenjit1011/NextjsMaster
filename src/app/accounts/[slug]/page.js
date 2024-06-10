'use client'

import Link from "next/link";
import auth from "../auth.module.css";
import { FormEvent } from 'react'
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function UserBlogPage(){

    const params = useParams();
    const searchParams = useSearchParams();
    let pageType = params.slug;
    let refCode  = searchParams.get('refCode');

    console.log('-: Page Name : ',pageType);
    console.log('-: refCode : ',refCode);


    return (
        <div className={auth.authPage}>
            {
                pageType == 'login'
                    ? <Login page={pageType} />
                    : <Registratiion page={pageType} refCode={refCode} />
            }
            <br /><br />
            <Link href={"/accounts/policy"}>Our Privacy Policy refCode : {refCode} :</Link>
        </div>
    )
}


function Login({page}){
    //async function onSubmit(event) {
        // event.preventDefault()
     
        // const formData = new FormData(event.currentTarget)
        // const response = await fetch('/api/submit', {
        //   method: 'POST',
        //   body: formData,
        // })
     
        // // Handle response if necessary
        // const data = await response.json()
        // ...
    //}


    return (
        <>
            <h3>User {page}</h3>
            <form>
                <input type="email" name="userName" placeholder="Email Id or Mobile Nuber" /> <br />
                <input type="password" name="userPassword" placeholder="Password" /> <br />
                <input type="submit" name="sbmtBtn" value="Login" />
            </form>
        </>
    )
}

function Registratiion({page, refCode}){
    return (
        <>
            <h3>User {page}</h3>
            <input type="text" name="firstName" placeholder="First Name" /> <br />
            <input type="text" name="lastName" placeholder="Last Name" /> <br />
            <input type="text" name="mobileNumber" placeholder="Mobile Number" /> <br />
            <input type="text" name="refCode" placeholder="Reference Code" value={refCode} /> <br />
            <input type="email" name="userName" placeholder="Email Id" /> <br />
            <input type="password" name="userPassword" placeholder="Password" /> <br />
            <input type="submit" name="sbmtBtn" value="Login" />
        </>
    )
}