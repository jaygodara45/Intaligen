import React from 'react'
import Tableitems, { SelectColumnFilter } from './components/Tableitems' 
import Sidebar from "./components/Sidebar"
const getData = () => {
  // const data = null;
  const data = [
  {
    "CODE": "P001",
    "NAME": "Product A",
    "STANDARD_UNIT": "pcs",
    "JOB_RATE": 50,
    "HSN": "123456",
    "COST_PRICE": 30,
    "SALE_PRICE": 70,
    "TAX": 18,
    "RAW_MATERIAL": "Material X",
    "MIN_LEVEL": 100,
    "MAX_LEVEL": 500,
    "CONSUMPTION_MODE": "FIFO"
  },
  {
    "CODE": "P002",
    "NAME": "Product B",
    "STANDARD_UNIT": "kg",
    "JOB_RATE": 75,
    "HSN": "234567",
    "COST_PRICE": 40,
    "SALE_PRICE": 90,
    "TAX": 12,
    "RAW_MATERIAL": "Material Y",
    "MIN_LEVEL": 50,
    "MAX_LEVEL": 300,
    "CONSUMPTION_MODE": "LIFO"
  },
  {
    "CODE": "P003",
    "NAME": "Product C",
    "STANDARD_UNIT": "liters",
    "JOB_RATE": 60,
    "HSN": "345678",
    "COST_PRICE": 20,
    "SALE_PRICE": 50,
    "TAX": 5,
    "RAW_MATERIAL": "Material Z",
    "MIN_LEVEL": 200,
    "MAX_LEVEL": 600,
    "CONSUMPTION_MODE": "FIFO"
  },
  {
    "CODE": "P004",
    "NAME": "Product D",
    "STANDARD_UNIT": "meters",
    "JOB_RATE": 100,
    "HSN": "456789",
    "COST_PRICE": 50,
    "SALE_PRICE": 120,
    "TAX": 18,
    "RAW_MATERIAL": "Material W",
    "MIN_LEVEL": 10,
    "MAX_LEVEL": 100,
    "CONSUMPTION_MODE": "FIFO"
  },
  {
    "CODE": "P005",
    "NAME": "Product E",
    "STANDARD_UNIT": "boxes",
    "JOB_RATE": 85,
    "HSN": "567890",
    "COST_PRICE": 60,
    "SALE_PRICE": 140,
    "TAX": 28,
    "RAW_MATERIAL": "Material V",
    "MIN_LEVEL": 30,
    "MAX_LEVEL": 200,
    "CONSUMPTION_MODE": "LIFO"
  }
]

  return [...data, ...data, ...data]
}

export default function Items() {

  const columns = React.useMemo(() => [
  {
    "Header": "Code",
    "accessor": "CODE"
  },
  {
    "Header": "Name",
    "accessor": "NAME"
  },
  {
    "Header": "Standard Unit",
    "accessor": "STANDARD_UNIT"
  },
  {
    "Header": "Job Rate",
    "accessor": "JOB_RATE"
  },
  {
    "Header": "HSN",
    "accessor": "HSN"
  },
  {
    "Header": "Cost Price",
    "accessor": "COST_PRICE"
  },
  {
    "Header": "Sale Price",
    "accessor": "SALE_PRICE"
  },
  {
    "Header": "Tax",
    "accessor": "TAX"
  },
  {
    "Header": "Raw Material",
    "accessor": "RAW_MATERIAL"
  },
  {
    "Header": "Min Level",
    "accessor": "MIN_LEVEL"
  },
  {
    "Header": "Max Level",
    "accessor": "MAX_LEVEL"
  },
  {
    "Header": "Consumption Mode",
    "accessor": "CONSUMPTION_MODE",
    // "Filter": "SelectColumnFilter",
    "filter": "includes"
  }
]
, [])

  const data = React.useMemo(() => getData(), [])
  
  return (
    // <div className="min-h-screen bg-blue-100 text-gray-900">
    //   <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        // <div>
          // {/* <Sidebar/> */}
        // {/* <div className="mt-4 ">
        //   <Tableitems columns={columns} data={data}/>
        // </div> */}
        // </div>
    //   </main>
    // </div>

    <div className="w-full h-[100%] mt-0 flex flex-col">
          
        <Sidebar/>
        <div className="absolute right-0 w-[80%] h-auto  px-10 py-10">
          <h1 className='text-4xl font-sans'>LIST OF ITEMS</h1>
          <div className="ml-15 flex flex-col mt-5"> 
                <div className='flex flex-row'>
                <button  className="mr-5 w-48 mt-1 font-sans btn bg-gradient-to-r from-purple-400 to-teal-600 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline">Add new item</button>
                <button  className="mr-5 w-48 mt-1 font-sans btn bg-gradient-to-r from-teal-600 to-purple-400 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline">Import items</button>
                <button  className="mr-5 w-48 mt-1 font-sans btn bg-gradient-to-r from-teal-600 to-purple-400 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline">Import BOM</button>
               
                </div>
                <Tableitems columns={columns} data={data}/>
        </div>
        </div>
        </div>
  );
}

