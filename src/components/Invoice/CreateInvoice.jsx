import React from "react";
import Jvoice from "../images/Jvoice.png";
const CreateInvoice = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold ">Create New Invoice</h2>
        <form>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="mx-auto rounded-full h-24 w-24 mb-2"
            />
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mb-4 ">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Invoice Id
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value="#876370"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-right">
                Date
              </label>
              <input
                type="date"
                className=" text-right mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value="2021-01-12"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value="Alison G."
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-right">
                Email
              </label>
              <input
                type="email"
                className=" text-right mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value="Example@gmail.com"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Street"
              />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Product Description</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      QTY
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">ipod 2021</td>
                    <td className="px-6 py-4 whitespace-nowrap">$1000</td>
                    <td className="px-6 py-4 whitespace-nowrap">10 Pcs</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-500">
                      $10,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Apple Macbook
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">$1500</td>
                    <td className="px-6 py-4 whitespace-nowrap">10 Pcs</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-500">
                      $150,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">i phone 12</td>
                    <td className="px-6 py-4 whitespace-nowrap">$885</td>
                    <td className="px-6 py-4 whitespace-nowrap">10 Pcs</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-500">
                      $8,850
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Invoice
            </button>
            <button
              type="button"
              className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Invoice
            </button>
          </div>
        </form>
      </div>

      {/* <div className="flex justify-center items-center min-h-screen bg-gray-100"> */}
      <div className="  bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Preview</h2>
        <div className="flex justify-between items-center mb-8">
          <div>
            <img src={Jvoice} alt="" />
          </div>
          <div className="text-right ">
            <div className=" text-xs text-gray-500">@ your.mail@gmail.com</div>
            <div className=" text-xs text-gray-500">m +386 969 271 3115</div>
          </div>
        </div>
        <div>
          
            <h3 className="text-xl font-bold">Recipient</h3>
            <p className=" text-xs text-gray-500">John Smith</p>
            <p className=" text-xs text-gray-500">4304 Liberty Avenue</p>
            <p className=" text-xs text-gray-500">92680 Tustin, CA</p>
            <p className=" text-xs text-gray-500">VAT No.: 12345678</p>
            <p className=" text-xs text-gray-500">@ company.mail@gmail.com</p>
            <p className=" text-xs text-gray-500">m +386 714 505 8385</p>
          
          <div className=" text-right ">
            <h3 className="text-xl font-bold">Invoice</h3>

            
              <p>Invoice No.</p>
              <p className=" text-xs text-gray-500">001/2021</p>
              <p>Invoice Date</p>
              <p className=" text-xs text-gray-500"> January 1, 2021</p>
            
          </div>
        </div>
        <div className="mb-8 overflow-x-auto">
          <table className=" divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                  Task Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hours
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-xs ">
                  Website redesign
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs">60</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs">15 USD</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs">
                  900,00 USD
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-xs ">
                  Newsletter template design
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs">20</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs">12 USD</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs">
                  240,00 USD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" ">
          <div className="flex  justify-end gap-52">
            <div className="text-xs text-gray-500">Subtotal</div>
            <div className="text-xs">1140,00 USD</div>
          </div>
          <div className="flex justify-end gap-48">
            <div className="text-xs text-gray-500">Discount 5%</div>
            <div className="text-xs">57,00 USD</div>
          </div>
          <div className="flex justify-end gap-48 font-bold">
            <div className="text-xs ">Total</div>
            <div className=" text-blue-800">1083,00 USD</div>
          </div>
        </div>
        <div className="mb-8">
          <p className=" text-xs text-gray-500">
            Transfer the amount to the business account below. Please include
            invoice number on your check.
          </p>
          <p className=" text-xs text-gray-500">
            Bank: <span className=" text-black">FTSBUS33</span>
          </p>
          <p className=" text-xs text-gray-500">
            IBAN:<sapn className=" text-black">GB82-1111-2222-3333</sapn>{" "}
          </p>
        </div>
        <div className="mb-8">
          <h3 className=" font-bold">Notes</h3>
          <p className=" text-xs text-gray-500">
            All amounts are in dollars. Please make the payment within 15 days
            from the issue of date of this invoice. Tax is not charged on the
            basis of paragraph 1 of Article 94 of the Value Added Tax Act (I am
            not liable for VAT).
          </p>
          <p className=" text-xs text-gray-500">
            Thank you for your confidence in my work.
          </p>
          <p className=" text-xs text-gray-500">Signature</p>
        </div>
        <div className="text-xs text-gray-500 flex">
          <div>
            <p>Your Company</p>
            <p>1531 Hart Ridge Road, 48346 Gaines, MI</p>
          </div>
          <div>
            <p>@ your.mail@gmail.com | m +386 969 271 3115</p>
          </div>
          <div>
            <p>
              The company is registered in the business register under no.
              7566000
            </p>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default CreateInvoice;
