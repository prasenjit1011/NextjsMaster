'use client'
import Image from "next/image";
import styles from "../page.module.css";
import auth from "../accounts/auth.module.css";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function ContactusPage(){
    return (
        <div className={styles.main} style={{border:"1px solid #F00", flexDirection:"row"}}>
            <Contactus />
            <App />
        </div>  
    )
}


function ContactusFrm(){
  const [status, setStatus] = useState(0);
  return (
    <div className={auth.authRightSide}>
        <div className={auth.authPage}>
            {
                status 
                ? <div>{msg}</div>
                : <App />
            }
            
        </div>
    </div>
  )
}

function App() {
  const [file, setFile] = useState()
  
  const [frmdata, setFrmdata] = useState({
    _id:"",
    createdAt:"",
    firstName:"",
    lastName:"",
    mobileNumber:"",
    userEmail:"",
    imgSrc:"q30-9.jpeg",
    msg:""
  })

  const submit = async (event) => {
    event.preventDefault()
  
    console.log(frmdata);

    const formData = new FormData()
    formData.append("image", file)
    formData.append("firstName", frmdata['firstName']);
    formData.append("lastName", frmdata['lastName']);
    formData.append("mobileNumber", frmdata['mobileNumber']);
    formData.append("userEmail", frmdata['userEmail']);
    formData.append("msg", frmdata['msg']);

  
    const result = await axios.post(
                      'http://localhost:3000/api/contactus', 
                      formData, 
                      { headers: {'Content-Type': 'multipart/form-data'}}
                    );
    setFrmdata(result.data.details)
  }

  const changeData = (e) => {
    setFrmdata({
      ...frmdata,
      [e.target.name]:e.target.value
    });

    console.log(e.target.name);
    console.log(e.target.value);
    console.log(frmdata);
    console.log('------------------------------');
  }

  const src = `http://localhost:3000/`+frmdata.imgSrc;
  return (
    <div className={auth.authRightSide}>
      <div className={auth.authPage}>
        <form onSubmit={submit}>
          
        <input
            onChange={changeData} 
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <input
            onChange={changeData} 
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <input
            onChange={changeData} 
            type="text"
            placeholder="Mobile Number"
            name="mobileNumber"
          />
          <input
            onChange={changeData} 
            type="text"
            placeholder="Email Id"
            name="userEmail"
          />
          <textarea
            onChange={changeData} 
            placeholder="details"
            name="msg"
          ></textarea>
          
          <input
            filename={file} 
            onChange={e => setFile(e.target.files[0])} 
            type="file" 
            accept="image/*"
          />
          
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <table style={{width:"100%", border:"1px solid #000", textAlign:"left", marginTop:"30px"}}>
        <tr>
            <td>Id</td>
            <td>{frmdata._id}</td>
          </tr>
          <tr>
            <td>createdAt</td>
            <td>{frmdata.createdAt}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{frmdata.firstName} {frmdata.lastName}</td>
          </tr>
          <tr>
            <td>mobileNumber</td>
            <td>{frmdata.mobileNumber}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{frmdata.userEmail}</td>
          </tr>
          <tr>
            <td>msg</td>
            <td>{frmdata.msg}</td>
          </tr>
          <tr>
            <td>
              Image
            </td>
            <td>
              <Image  loader={() => src} src={src} width={100} height={100} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}


function Contactus(){
    return (
        <div className={auth.authLeftSide} >
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            <p>
                <b>Contact Us : </b> 
                I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
            </p><br />
            <p>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
        </div>
    );
}