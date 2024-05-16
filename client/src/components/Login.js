import React, { useState } from 'react'
import { NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const history = useNavigate();

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


    const loginuser = async(e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {
            // console.log("user login succesfully done");


            const data = await fetch("/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     email, password
                })
            });

            const res = await data.json();
            //  console.log(res);

            if(res.status === 201){
                localStorage.setItem("usersdatatoken",res.result.token);
                history("/dash")
                setInpval({...inpval,email:"",password:""});
            }
        }
    }

    return (
  <>
    <section className="w-full py-10 min-h-screen">
      <div className="form_data max-w-lg w-full mx-auto p-6 bg-white shadow-md rounded flex flex-col items-center">
        <div className="form_heading mb-10"> {/* Reduced margin from mb-6 to mb-4 */}
          <h1 className="text-2xl text-blue-900">Login to Intaligen</h1>
        </div>

        <form className="w-full">
          <div className="form_input">
            <label htmlFor="email" className="block font-semibold text-gray-700 text-sm mb-2">Email</label>
            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" className="w-full px-3 py-2 border rounded outline-none text-gray-700 leading-tight focus:border-blue-500 mb-3" placeholder="Enter Your Email Address" />
          </div>
          <div className="form_input">
            <label htmlFor="password" className="block font-semibold text-gray-700 text-sm mb-2">Password</label>
            <div className="two relative">
              <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" className="w-full px-3 py-2 border rounded outline-none text-gray-700 leading-tight focus:border-blue-500 mb-6" placeholder="Enter Your password" />
              <div className="showpass absolute top-0 right-0 px-2 py-1 mr-1 mt-0.5 font-semibold text-blue-900 bg-gray-200 border rounded cursor-pointer" onClick={() => setPassShow(!passShow)}>
                {!passShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>

          
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full" onClick={loginuser}>Login</button>

          <p className="text-sm mt-4 text-center">Don't have an Account? <NavLink to="/register" className="text-violet-500">Sign Up</NavLink> </p>
        </form>
        <ToastContainer />
      </div>
    </section>
  </>
);


}

export default Login