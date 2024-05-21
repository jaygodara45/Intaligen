// import React, { useState, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { LoginContext } from './ContextProvider/Context';

// const Sidebar = () => {
//   const { logindata, setLoginData } = useContext(LoginContext);
//   const location = useLocation(); // get the current location
//   const [selected, setSelected] = useState(location.pathname); // initialize state with the current path

//   // List of sidebar items
//   const sidebarItems = [
//     { path: '/dash', label: 'Dashboard' },
//     { path: '/prodplan', label: 'Production planning' },
//     { path: '/departments', label: 'Production departments' },
//     { path: '/orders', label: 'Orders' },
//     { path: '/inventory', label: 'Inventory' },
//     { path: '/material', label: 'Material planning' },
//     { path: '/purchases', label: 'Purchases' },
//     { path: '/admin', label: 'Admin' },
//     { path: '/masterdata', label: 'Master data' }
//   ];

//   if (logindata.ValidUserOne) {
//     return (
//       <div className="absolute left-0 top-20 flex flex-col justify-between bg-gradient-to-b from-teal-600 to-purple-400 w-60 py-5 px-5 rounded-r">
//         <div>
//           <h1 className="text-white text-l font-sans mb-2">Raqgen Solutions Pvt. Ltd.</h1>
//           <hr className="mb-5" />
//           <ul>
//             {sidebarItems.map(item => (
//               <li key={item.path} className="mb-4">
//                 <Link
//                   to={item.path}
//                   className={`font-sans px-4 py-2 block ${
//                     selected === item.path ? 'bg-blue-500 text-white border-white-500 border-2 rounded-md' : 'text-white'
//                   }`}
//                   onClick={() => setSelected(item.path)}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

// export default Sidebar;

import React, { useState, useContext } from 'react';
import {BiChevronLeft} from 'react-icons/bi';
import SidebarData from './SidebarData';
import { LoginContext } from './ContextProvider/Context';

const Sidebar = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  if (logindata.ValidUserOne){
  return(
    <div className={` sidebar-container font-sans top-0 left-0`}>
        
        
        <SidebarData/>
        {/* <div className='absolute top-[7rem] flex justify-center items-center -left-3 w-10 h-10 bg-blue-500 rounded-full cursor-pointer'>
          <BiChevronLeft className={`text-3xl transition-all duration-300`} />
        </div> */}
    </div>
  )
}
}

export default Sidebar;
