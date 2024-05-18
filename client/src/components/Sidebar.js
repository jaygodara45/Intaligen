// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  
  return (
    <div className="absolute left-0 top-20 flex flex-col justify-between bg-gradient-to-b from-teal-600 to-purple-400 w-60 py-5 px-5 rounded-r">
      <div>
        <h1 className="text-white text-l font-semibold mb-2">Raqgen Solutions Pvt. Ltd. </h1>
        <hr className='mb-5'/>
        <ul>
          <li className="mb-4">
            
            
            <Link to="/dash" className="text-white px-4 py-2 block">
              Dashboard
            </Link>
            
          </li>
          <li className="mb-4">
            <Link to="/prodplan" className="text-white px-4 py-2 block">
              Production planning
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dash" className="text-white px-4 py-2 block">
              Production departments
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dash" className="text-white px-4 py-2 block">
              Orders
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dash" className="text-white px-4 py-2 block">
              Inventory
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dash" className="text-white px-4 py-2 block">
              Material planning
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dash" className="text-white px-4 py-2 block">
              Purchases
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dash" className="text-white px-4 py-2 block">
               Admin
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dash" className="text-white px-4 py-2 block">
               Master data
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
