import React from 'react'
import MT4 from "../images/MsgT4.png";
import { useNavigate } from "react-router-dom";

const CalMonth = () => {
    const navigate=useNavigate()
  const daysInMonth = new Array(31).fill(null).map((_, i) => i + 1);

  const events = {
    2: [{ label: 'Free day', color: 'bg-teal-500' }, { label: 'Party Time', color: 'bg-pink-500' }],
    16: [{ label: 'Victory day', color: 'bg-orange-500' }],
    21: [{ label: 'Invited by friends', color: 'bg-pink-500' }],
    25: [{ label: 'Christmas Day', color: 'bg-teal-500' }],
  };
  return (
    <div className="flex flex-col">
         <div className="flex justify-between m-4">
                <h1 className="font-bold text-lg">Calender</h1>
                <div className=" space-x-3 ">
                   <button className="bg-gray-200 hover:bg-indigo-600 rounded-lg px-4 py-1 "onClick={()=>{navigate("/Calendar")}}>Day</button>
                   <button className="bg-gray-200 hover:bg-indigo-600 rounded-lg px-4 py-1 ">Week</button>
                   <button className="bg-gray-200 hover:bg-indigo-600 rounded-lg px-4 py-1 "onClick={()=>{navigate("/CalMonth")}}>Month</button>
                   <button className="bg-gray-200 hover:bg-indigo-600 rounded-lg px-4 py-1 "onClick={()=>{navigate("/CalYear")}}>Year</button>
                </div>
            </div>
      <div className="flex flex-row justify-between bg-gray-200 p-4">
        <button className="bg-blue-500 ml-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + Create Schedule
        </button>
      </div>
     
   <div className="flex">
   <div>
      <div class="max-w-sm w-full shadow-lg">
              <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
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
                <div class="flex items-center justify-between pt-12 overflow-x-auto">
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
      <div className="max-w-3xl mx-auto mt-8 ml-5">
      <h2 className="text-xl font-bold mb-4">December 2021</h2>
      <div className="grid grid-cols-7 gap-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {daysInMonth.map((day) => (
          <div key={day} className="h-24 border rounded p-1">
            <div className="text-right">{day < 10 ? `0${day}` : day}</div>
            <div className="space-y-1 mt-1">
              {events[day] && events[day].map((event, index) => (
                <div key={index} className={`${event.color} text-white text-xs rounded px-1`}>
                  {event.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default CalMonth;
