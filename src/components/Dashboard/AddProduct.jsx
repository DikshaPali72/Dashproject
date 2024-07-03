import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import pro1 from "../images/voice/pro1.png"
import pro2 from "../images/voice/pro2.png"
import pro3 from "../images/voice/pro3.png"
import pro4 from "../images/voice/pro4.png"
import pro5 from "../images/voice/pro5.png"
import pro6 from "../images/voice/pro6.png"

const AddProduct = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: 'Male',
      });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  return (
    <div className="  flex w-full h-fit justify-between  flex-col">
      <div className="flex w-full h-fit justify-between p-3">
        <h1 className="text-2xl  font-bold"> Product Analytics</h1>
        {/* <div className="flex  space-x-4">
          <div className="bg-white flex  ">
            <div>10-06-2021</div> <RiArrowDropDownLine className="mt-1" />{" "}
          </div>
          <div className="bg-white flex ">
            <div>10-10-2021 </div> <RiArrowDropDownLine className="mt-1" />{" "}
          </div>
        </div> */}
      </div>
      <div className="flex items-center gap-2 rounded-md justify-between ">
        <div className=" flex justify-around w-56 ">
          <button
            className="px-4 py-2 rounded-md  hover:bg-indigo-600 bg-blue-600"
           
          >
            product
          </button>
          <button
            className="px-4 py-2 rounded-md hover:bg-indigo-600 bg-blue-600 "
           
          >
            customer
          </button>
        </div>
        {/* <button
          
          onClick={()=>{navigate("/AddProduct")}} 
          className=" flex justify-end px-4 py-2 mr-2 rounded-md hover:bg-indigo-600 bg-blue-900 text-white"
        >
          + add product
        </button> */}
      </div>
      <div className="  flex justify-evenly mt-5  ">
        <div className="flex flex-wrap ">
          <div className=" rounded-lg shadow w-full  flex justify-evenly ">
            <div className="bg-white rounded-lg shadow p-3  flex ">
              <div>
                <h2 className=" font-bold">Total Product</h2>
                <p className=" font-semibold text-2xl">5,00,874</p>
              </div>
              <p className="text-green-500 text-sm ml-10 items-center">
                +1400 New Added
              </p>
            </div>
            <div className="rounded-lg shadow p-6 flex  ">
              <div>
                <h2 className="text-xl font-bold">Total Sales</h2>
                <p className="font-semibold text-2xl">2,34,888</p>
              </div>
              <p className="text-green-500 text-sm ml-10 items-center">
                +1000 Sales Today
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 w-full mt-2">
            <h2 className="text-xl font-bold mb-4">Top Selling Products</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Total Order</th>
                  <th>Total Sales</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    pic:<img src={pro1}></img>,
                    id: 1,
                    name: "Bluetooth Devices",
                    price: "$10",
                    orders: "34,666",
                    sales: "$3,46,660",
                  },
                  {
                    pic:<img src={pro2}></img>,
                    id: 2,
                    name: "Airdot",
                    price: "$15",
                    orders: "20,000",
                    sales: "$3,00,000",
                  },
                  {
                    pic:<img src={pro3}></img>,
                    id: 3,
                    name: "Shoes",
                    price: "$10",
                    orders: "15,000",
                    sales: "$1,50,000",
                  },
                  {
                    pic:<img src={pro4}></img>,
                    id: 4,
                    name: "Kids T-Shirt",
                    price: "$12",
                    orders: "10,000",
                    sales: "$1,20,000",
                  },
                  {
                    pic:<img src={pro5}></img>,
                    id: 5,
                    name: "Smart Watch",
                    price: "$12",
                    orders: "10,000",
                    sales: "$1,20,000",
                  },
                  {
                    pic:<img src={pro6}></img>,
                    id: 6,
                    name: "Girls Top",
                    price: "$12",
                    orders: "10,000",
                    sales: "$1,20,000",
                  },
                ].map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td className='flex'> {product.pic}{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.orders}</td>
                    <td>{product.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    
    <div>
         <div className=" max-w-md p-2 space-y-6 bg-white rounded shadow-md ">
        <h2 className="text-xl font-bold ">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 mb-4 overflow-hidden bg-gray-200 rounded-full">
              <svg
                className="w-full h-full text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </div>
            <input
              type="file"
              className="hidden"
              id="file-upload"
              accept="image/*"
            />
            <label
              htmlFor="file-upload"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
            >
              Upload Photo
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mackbook Pro 2021 14”"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">Brand</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Apple"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              name="text"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="$1200"
            />
          </div>
         
          <div className="mb-4">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-700">Description</label>
            <p className='text-sm text-stone-400'>This the New creation Of apple  This the New creation Of apple This the New creation Of
            apple This the New creation Of apple.</p>
          </div>
        
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default AddProduct