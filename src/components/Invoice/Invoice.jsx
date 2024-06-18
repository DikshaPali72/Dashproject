import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Invoice = () => {
  const invoices = [
    { id: "#876364", name: "Arron Guar", email: "arronguar@gmail.com", date: "12 Dec, 2020", status: "Complete" },
    { id: "#876123", name: "James Mullican", email: "jamesmullican@gmail.com", date: "10 Dec, 2020", status: "Pending" },
    { id: "#876213", name: "Robert Bacins", email: "robertbacins@gmail.com", date: "09 Dec, 2020", status: "Complete" },
    { id: "#876987", name: "Bethany Jackson", email: "bethanyjackson@gmail.com", date: "09 Dec, 2020", status: "Cancel" },
    { id: "#873145", name: "Anne Jacob", email: "annejacob@gmail.com", date: "10 Dec, 2020", status: "Complete" },
    { id: "#873245", name: "Bethany Jackson", email: "bethanyjackson@gmail.com", date: "10 Dec, 2020", status: "Pending" },
    { id: "#873246", name: "James Mullican", email: "jamesmullican@gmail.com", date: "10 Dec, 2020", status: "Complete" },
    { id: "#873245", name: "Jhon Deo", email: "jhondeo32@gmail.com", date: "08 Dec, 2020", status: "Pending" },
    { id: "#873364", name: "Bethany Jackson", email: "bethanyjackson@gmail.com", date: "02 Dec, 2020", status: "Cancel" },
    { id: "#873679", name: "James Mullican", email: "jamesmullican@gmail.com", date: "01 Dec, 2020", status: "Pending" }
  ];

  const statusColors = {
    Complete: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Cancel: 'bg-red-100 text-red-700'
  };

  return (
    <div className="min-h-screen bg-gray-100 mx-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Invoice List</h2>
          <div>
          <input placeholder='search' className='m-3 bg-slate-200 rounded-lg outline-none p-2' type="text" />
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600" onClick={()=>{
            navigate('/AddCustomer')}}>
            + Add New
          </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                </th>
                <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
                <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><MdDelete/></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="px-6 py-1 whitespace-nowrap">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-500">{invoice.id}</td>
                  <td className="px-6 py-1 whitespace-nowrap flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={`https://ui-avatars.com/api/?name=${encodeURIComponent(invoice.name)}&background=random`} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{invoice.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-500">{invoice.email}</td>
                  <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-500">{invoice.date}</td>
                  <td className="px-6 py-1 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[invoice.status]}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 12l6 6m-6-6l6-6" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Invoice