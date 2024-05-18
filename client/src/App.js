import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Prodplan from "./components/Prodplan";
import Error from "./components/Error";
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";
import Sidebar from "./components/Sidebar";

function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    // const res = await fetch("/validuser", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": token
    //   }
    // });

    // const data = await res.json();
    
    const data = {
        status:200,
      ValidUserOne:{

        "id" : "12345",
        "name" : "John Doe",
        "email": "john.doe@example.com",
        "age": "30"
      }
    };

    if (data.status == 401 || !data) {
      console.log("User not valid");
       
    } else {
      console.log("login dataa is set");
      setLoginData(data)
      history("/dash");
    }
  
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },1000)

  }, [])


  
  return (
    
  <div className="flex flex-col h-screen">
    <div className=" fixed top-0 w-full z-10 mb-10"> 
      <Header />
    </div>
   

    
    
    <div className=" mt-20 flex flex-col justify-center items-center flex-grow">
      {
        data ? (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dash" element={<Dashboard />} />
            
            <Route path="/prodplan" element={<Prodplan/>} />
            <Route path="*" element={<Error />} />

          </Routes>
        ) : (
          <div className="flex justify-center items-center flex-col flex-grow">
            Loading...
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )
      }
    </div>
  </div>
);


}

export default App;
