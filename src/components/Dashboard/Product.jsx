import React from "react";
import "../Dashboard/Product.css";
import { Doughnut } from "react-chartjs-2";
import { RiArrowDropDownLine } from "react-icons/ri";
import pro1 from "../images/voice/pro1.png"
import pro2 from "../images/voice/pro2.png"
import pro3 from "../images/voice/pro3.png"
import pro4 from "../images/voice/pro4.png"
import pro5 from "../images/voice/pro5.png"
import pro6 from "../images/voice/pro6.png"
import { useNavigate } from "react-router-dom";

const Product = () => {
 
  const data = {
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#4f46e5", "#fbbf24", "#f87171"],
        hoverBackgroundColor: ["#4338ca", "#f59e0b", "#ef4444"],
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
  };

  const navigate=useNavigate()
  return (
    <div className="  flex w-full h-fit justify-between  flex-col">
      <div className="flex w-full h-fit justify-between p-3">
        <h1 className="text-2xl  font-bold"> Product Analytics</h1>
        <div className="flex  space-x-4">
          <div className="bg-white flex  ">
            <div>10-06-2021</div> <RiArrowDropDownLine className="mt-1" />{" "}
          </div>
          <div className="bg-white flex ">
            <div>10-10-2021 </div> <RiArrowDropDownLine className="mt-1" />{" "}
          </div>
        </div>
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
        <button
          
          onClick={()=>{navigate("/AddProduct")}} 
          className=" flex justify-end px-4 py-2 mr-2 rounded-md hover:bg-indigo-600 bg-blue-900 text-white"
        >
          + add product
        </button>
      </div>
      <div className="  flex justify-evenly mt-5  ">
        <div className="flex flex-wrap ">
          <div className=" rounded-lg  w-full  flex justify-evenly ">
            <div className=" rounded-lg shadow p-3  flex ">
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
                    <td className="flex">{product.pic}{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.orders}</td>
                    <td>{product.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="  flex-col">
          <div className="bg-white rounded-lg shadow p-4 w-full ">
            <h2 className="text-xl font-bold mb-4">Product Add by Month</h2>
            {[
              { month: "Jan", value: 23000 },
              { month: "Feb", value: 15000 },
              { month: "Mar", value: 30000 },
              { month: "Apr", value: 22000 },
              { month: "May", value: 10000 },
              { month: "Jun", value: 23000 },
              { month: "Jul", value: 5000 },
            ].map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="w-1/4 ">{item.month}</div>
                <div className="w-3/4 bg-gray-200 rounded-full ">
                  <div
                    className=" h-2 bg-red-300 rounded-full"
                    style={{ width: `${(item.value / 30000) * 100}%` }}
                  ></div>
                </div>
                <div className="ml-2">{item.value}</div>
              </div>
            ))}
          </div>

          
            {/* <div className="flex justify-center items-center">
              <h2 className="text-xl font-bold w-[250px] bg-red-500 relative top-[-35px]">
                Product Sales Analytics
              </h2>
              <div className="relative w-40 h-40  pt-5">
                <div className="w-50 h-50 mt-11">
                  <Doughnut data={data} options={options} />
                  <div className=" inset-0 flex absolute top-20 items-center justify-center">
                    <span className="text-base text-center text-gray-400 font-normal">
                      <span className="font-bold  text-black">80%</span>
                      <br />
                      Transactions 
                    </span>
                  </div>
                  <div className="mt-4 flex bg-red-600 w-full">
                    <p>
                      <span className="text-blue-500 font-semibold">●</span>
                      Total Sales 
                    </p>
                    <p>
                      <span className="text-yellow-500 font-semibold">●</span>
                      Total Order
                    </p>
                    <p>
                      <span className="text-red-500 font-semibold">●</span>
                      Order Cancel
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
             <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Product Sales Analytics</h2>
      <div className="flex justify-center items-center">
        <div className="relative w-40 h-40 bottom-11">
          <div className="w-40 h-40 mt-8">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex ml-24 mt-20 items-center justify-center">
              <span className="text-base text-center text-gray-400 font-normal">
                <span className="font-bold text-2xl text-black"></span>
                
              </span>
            </div>
            <div className="flex justify-around mt-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span>Sale</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <span>Distribute</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <span>Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          
        </div>
      </div>
    </div>
  );
};

export default Product;
