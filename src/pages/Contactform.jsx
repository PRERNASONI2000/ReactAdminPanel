import React, { useState, useEffect } from "react";
import axios from "axios";



// Apne contact form ke handleSubmit me fetch ya axios se API call karo:

const ContactForm = () => {
    const [formdata, setFromdata] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [error , setError] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target
        setFromdata((prev) => ({ ...prev, [ name ] : value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
 try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata),
        });

        const data = await response.json();
        console.log(data);
        alert("Form submitted successfully!");
    } catch (error) {
        console.error("Error:", error);
    }
        const newErros = {}
        if(!formdata.name) newErros.name = "Name is Required"
        if(!formdata.email) newErros.email = "Email is Required"
        if(!formdata.message) newErros.message = "Message is Required"
        if(Object.keys(newErros).length !== 0){
            setError(newErros)
        }else{
            console.log ("form Submitted", formdata);
        }
        
       //Normal HTML form submit hote hi page reload ho jaata hai.React me hume page reload nahi chahiye, hum khud control karna chahte hain ki data kaise handle ho.Isliye hum preventDefault() likhte hain taaki form reload na ho aur hum JS code se data check + submit kar saken.
    }

return (
    <div className="flex justify-center items-center">
        <form className="bg-base-100 flex flex-col gap-2 md:w-md w-sm border border-base-200 p-8 rounded-sm shadow-lg">
            <h2 className="font-semibold text-2xl text-center">Contact Form</h2>
            <label htmlFor="name" className="lable-text">Name</label>
            <input type="text" className={`input rounded p-2 input-bordered w-full ${error.name ? "input-error" : ""}`} name="name" id="name" placeholder="Enter Your Name" value={formdata.name} onChange={handleChange}></input>
            {error.name && <small className="text-error">{error.name}</small>}

            <label htmlFor="email">Email</label>
            <input type="email" className={`input rounded p-2 input-bordered w-full ${error.name ? "input-error" : ""}`} name="email" id="email" placeholder="Enter Your Email" value={formdata.email} onChange={handleChange}></input>
            {error.email && <small className="text-error">{error.email}</small>}

            <label htmlFor="message">Message</label>
            <textarea type="text" className={`textarea rounded p-2 textarea-bordered w-full ${error.message ? "textarea-error" : ""}`} name="message" id="message" placeholder="Enter Your Message" rows="4" value={formdata.message} onChange={handleChange}></textarea>
            {error.message && <small className="text-error">{error.message}</small>}

            <button className="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
        </form>



        {/* <form class="max-w-md mx-auto">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                    </div>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form> */}


    </div>
)
}

export default ContactForm;


//2. const newErrors = {};
// Ye ek empty object banate hain jisme hum galtiyan (errors) store karenge
//Example: Agar naam nahi diya, to object me { name: "Name is Required" } save ho jaayega.


// if (Object.keys(newErrors).length !== 0)
// Object.keys(newErrors) ek array deta hai jisme sabhi error fields ke naam hote hain.
// Example: { name: "Name is Required" } → ["name"]
// length !== 0 ka matlab: agar errors object khali nahi hai, matlab kuch galtiyan hain.
// Tab hum setError(newErrors) call karke errors dikhate hain.