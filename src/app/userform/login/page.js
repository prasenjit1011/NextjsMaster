'use client';
import { useState } from "react";


export default function LoginFrm(){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" name="username" value={formData.username} onChange={handleChange} />
                                <label for="name">User Name / Email Id</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input type="password" className="form-control" id="email" placeholder="Your Password"  name="password" value={formData.password} onChange={handleChange} />
                                <label for="email">Password</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

