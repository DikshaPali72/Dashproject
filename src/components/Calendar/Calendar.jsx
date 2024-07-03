import React from "react";
import { useNavigate } from "react-router-dom";
import MT4 from "../images/MsgT4.png";
const Calendar = () => {
    const navigate=useNavigate()
    return (
        <div className="flex flex-col  w-full">
            <div className="flex justify-between m-4">
                <h1 className="font-bold text-lg">Calender</h1>
                <div className=" space-x-3 ">
                   <button className="bg-gray-200 hover:bg-indigo-600 rounded-lg px-4 py-1 "onClick={()=>{navigate("/Calendar")}}>Day</button>
                   <button className="bg-gray-200 hover:bg-indigo-600 rounded-lg px-4 py-1 ">Week</button>
                   <button className="bg-gray-200 hover:bg-indigo-600 rounded-lg px-4 py-1 "onClick={()=>{navigate("/CalMonth")}}>Month</button>
                   <button className="bg-gray-200 hover:bg-indigo-600 rounded-lg px-4 py-1 "onClick={()=>{navigate("/CalYear")}}>Year</button>
                </div>
            </div>
          <div className="flex flex-row justify-between  p-2">
            <button onClick={()=>{navigate("/CreateEvent")}} className="bg-blue-500 ml-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              + Create Schedule
            </button>
          </div>
         
       <div className="flex">
       <div>
          <div class="max-w-sm w-full shadow-lg">
                  <div class="md:p-8 p-2 dark:bg-gray-800 bg-white rounded-t">
                    <div class="px-4 flex items-center justify-between">
                      <span
                        tabindex="0"
                        class="focus:outline-none  text-base  dark:text-gray-100 text-gray-800"
                      >
                        December 2, 2021
                      </span>
    
                      <div class="flex items-center">
                        <button
                          aria-label="calendar backward"
                          class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-chevron-left"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                          </svg>
                        </button>
                        <button
                          aria-label="calendar forward"
                          class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler  icon-tabler-chevron-right"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between  overflow-x-auto">
                      <table class="w-full">
                        <thead>
                          <tr>
                            <th>
                              <div class="w-full flex justify-center">
                                <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                  S
                                </p>
                              </div>
                            </th>
                            <th>
                              <div class="w-full flex justify-center">
                                <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                  S
                                </p>
                              </div>
                            </th>
                            <th>
                              <div class="w-full flex justify-center">
                                <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                  M
                                </p>
                              </div>
                            </th>
                            <th>
                              <div class="w-full flex justify-center">
                                <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                  T
                                </p>
                              </div>
                            </th>
                            <th>
                              <div class="w-full flex justify-center">
                                <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                  W
                                </p>
                              </div>
                            </th>
                            <th>
                              <div class="w-full flex justify-center">
                                <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                  T
                                </p>
                              </div>
                            </th>
                            <th>
                              <div class="w-full flex justify-center">
                                <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                  F
                                </p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="pt-6">
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td class="pt-6">
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td class="pt-6">
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  1
                                </p>
                              </div>
                            </td>
                            <td class="pt-6">
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  2
                                </p>
                              </div>
                            </td>
                            <td class="pt-6">
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100">
                                  3
                                </p>
                              </div>
                            </td>
                            <td class="pt-6">
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100">
                                  4
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  5
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  6
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  7
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="w-full h-full">
                                <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                  <a
                                    role="link"
                                    tabindex="0"
                                    class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                                  >
                                    8
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  9
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100">
                                  10
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100">
                                  11
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  12
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  13
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  14
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  15
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  16
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100">
                                  17
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100">
                                  18
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  19
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  20
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  21
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  22
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  23
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100">
                                  24
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100">
                                  25
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  26
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  27
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  28
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  29
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                  30
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
          <div className="flex flex-col p-4 w-96">
            <h1 className="text-xl font-bold">People</h1>
            <input
              type="text"
              placeholder="Search for People"
              className="border border-gray-200 rounded p-2 mb-4 "
            />
            <div className="flex flex-col space-y-2">
              <div className="flex   bg-gray-100 p-2 hover:bg-gray-200 rounded">
                <div className="">
                  <img src={MT4}></img>
                </div>
    
                <div className="flex flex-col ml-3">
                  <span>Eddie Lobanovskiy</span>
                  <span className="text-gray-500">laboanovskiy@gmail.com</span>
                </div>
              </div>
              <div className="flex   bg-gray-100 p-2 hover:bg-gray-200 rounded">
                <div className="">
                  <img src={MT4}></img>
                </div>
    
                <div className="flex flex-col ml-3">
                  <span>Alexey Stave</span>
                  <span className="text-gray-500">alexeyst@gmail.com</span>
                </div>
              </div>
              <div className="flex   bg-gray-100 p-2 hover:bg-gray-200 rounded">
                <div className="">
                  <img src={MT4}></img>
                </div>
    
                <div className="flex flex-col ml-3">
                  <span>Anton Tkacheve</span>
                  <span className="text-gray-500">tkacheveanton@gmail.com</span>
                </div>
              </div>
             
              <div className="ml-20">
              <button className="py-1 px-2 rounded mt-16  text-blue-800 bg-slate-100 hover:bg-slate-200 ">
                MY Schedule
              </button>
              </div>
            </div>
          </div>
          </div>
    
          <div className="container mx-auto px-4 ">
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="w-full md:w-3/5 m-4">
                <div className="flex flex-col space-y-2 m-4">
                  <div>
                    <span className="text-gray-700">December 2, 2021</span>
                    {/* <span className="text-gray-700">Invited by friends</span> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">09.00 AM</span>
                    <span className="text-white bg-orange-400 rounded-xl text-sm p-2">
                      Invited By Friend
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">10.00 AM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">11.00 AM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between  text-green-500">
                    <span className="text-gray-700 mt-3">12.00 PM</span>
                    <span className="text-white bg-sky-400 rounded-xl text-sm p-2">
                      Prayer Time
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">01.00 PM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">02.00 PM</span>
                    <span className="text-white  bg-orange-400  rounded-xl text-sm p-2">
                      Lunch Time
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">03.00 PM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">04.00 PM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">05.00 PM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">06.00 PM</span>
                    <span className="text-black bg-lime-500 rounded-xl text-sm p-2">
                      Prayer Time
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">07.00 PM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">08.00 PM</span>
                    <span className="text-white bg-blue-700 rounded-xl text-sm p-2">
                      Dinner Time
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">09.00 PM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">10.00 PM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">11.00 PM</span>
                    <span className="text-gray-700"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 mt-3">12.00 PM</span>
                    <span className="text-gray-700"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
        </div>
      );
};

export default Calendar;
