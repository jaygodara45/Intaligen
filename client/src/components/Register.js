import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fname, email, password, cpassword } = inpval;

        if (fname === "") {
            toast.warning("Please enter your name!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("Please enter email!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("Please enter valid email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("Please enter the password!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("Minimum length of password must be 6!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("Please confirm the password!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.error("Minimum length of confirm password must be 6!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("Passwords do not match!", {
                position: "top-center"
            });
        } else {
            // console.log("user registration succesfully done");


            const data = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });

            const res = await data.json();
            // console.log(res.status);

            if (res.status === 201) {
                toast.success("Registration is successful!", {
                    position: "top-center"
                });
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
            }
        }
    }

    
    return (
  <>
    <section className="w-full py-10 min-h-screen">
      <div className="form_data max-w-md w-full mx-auto p-6 bg-white shadow-md rounded flex flex-col items-center">
        <div className="form_heading mb-10">
          <h1 className="text-3xl text-blue-900">Sign Up</h1>
        </div>

        <form className="w-full">
          <div className="form_input">
            <label htmlFor="fname" className="block font-semibold text-gray-700 text-sm mb-2">Name</label>
            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" className="w-full px-3 py-2 border rounded outline-none text-gray-700 leading-tight focus:border-blue-500 mb-3" placeholder="Enter Your Name" />
          </div>
          <div className="form_input">
            <label htmlFor="email" className="block font-semibold text-gray-700 text-sm mb-2">Email</label>
            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" className="w-full px-3 py-2 border rounded outline-none text-gray-700 leading-tight focus:border-blue-500 mb-3" placeholder="Enter Your Email Address" />
          </div>
          <div className="form_input">
            <label htmlFor="password" className="block font-semibold text-gray-700 text-sm mb-2">Password</label>
            <div className="two relative">
              <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" className="w-full px-3 py-2 border rounded outline-none text-gray-700 leading-tight focus:border-blue-500 mb-3" placeholder="Enter Your password" />
              <div className="showpass absolute top-0 right-0 px-2 py-1 mr-1 mt-0.5 font-semibold text-blue-900 bg-gray-200 border rounded cursor-pointer" onClick={() => setPassShow(!passShow)}>
                {!passShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>

          <div className="form_input">
            <label htmlFor="cpassword" className="block font-semibold text-gray-700 text-sm mb-2">Confirm Password</label>
            <div className="two relative">
              <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" className="w-full px-3 py-2 border rounded-lg outline-none text-gray-700 leading-tight focus:border-blue-500 mb-6" placeholder="Confirm password" />
              <div className="showpass absolute top-0 right-0 px-2 py-1 mr-1 mt-0.5 font-semibold text-blue-900 bg-gray-200 border rounded cursor-pointer" onClick={() => setCPassShow(!cpassShow)}>
                {!cpassShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>

          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full" onClick={addUserdata}>Sign Up</button>
          <p className="text-sm mt-4 text-center">Already have an account? <NavLink to="/" className="text-violet-500">Login</NavLink></p>
        </form>
        <ToastContainer />
      </div>
    </section>
  </>
);

}

export default Register