import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

import { CiLocationOn } from "react-icons/ci";
import MT4 from "../images/MsgT4.png";

const Schedule = () => {
  const meetings = [
    {
      date: "01 Dec, 2021",
      time: "04:30PM",
      location: "Meeting Outside",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
    {
      date: "02 Dec, 2021",
      time: "10:15AM",
      location: "Friends",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
    {
      date: "04 Dec, 2021",
      time: "11:15AM",
      location: "Office Meeting",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
    {
      date: "04 Dec, 2021",
      time: "01:25PM",
      location: "Home",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
    {
      date: "05 Dec, 2021",
      time: "10:15AM",
      location: "Meeting Outside",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
    {
      date: "07 Dec, 2021",
      time: "01:20PM",
      location: "Home",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
    {
      date: "08 Dec, 2021",
      time: "12:15PM",
      location: "Office Meeting",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
    {
      date: "09 Dec, 2021",
      time: "11:45AM",
      location: "Friends Zune",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
    {
      date: "10 Dec. 2021",
      time: "11:20AM",
      location: "Home",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
    {
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
      edit: <CiEdit />,
      icon: <MdDelete />,
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-xl font-bold">Invoice List</h2>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          + Add New
        </button>
      </div>
      <div className="">
        <div className="flex w-full max-md:flex-col">
          <div>
            <div class="max-w-sm w-full shadow-lg">
              <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
                <div className="flex flex-row justify-between p-4">
                  <button className="bg-blue-500 ml-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    + Create Schedule
                  </button>
                </div>
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
                    <span className="text-gray-500">
                      laboanovskiy@gmail.com
                    </span>
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
                    <span className="text-gray-500">
                      tkacheveanton@gmail.com
                    </span>
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

          <div className="min-h-screen   p-8 ">
            <div className="bg-white p-4 rounded-lg shadow-md h-full">
              <div className="overflow-x-auto h-full ">
                <table className="min-w-full divide-y divide-gray-200 h-full">
                  <thead>
                    <tr className="text-xs font-semibold text-gray-700 bg-gray-100">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>

                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {meetings.map((meeting) => (
                      <tr
                        key={meeting.date}
                        className="border-b flex-1 border-gray-200 hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap flex-1">
                          <input
                            type="checkbox"
                            className="form-checkbox  h-4 w-4 text-blue-600"
                          />
                        </td>
                        <td className="flex-1 flex items-center  mr-4">
                          <span className="material-icons text-blue-500 mr-2">
                            <CiCalendarDate />
                          </span>
                          <span>{meeting.date}</span>
                        </td>
                        {/* <td className="  px-3 py-2  gap-2 items-center  w-30  ">
                          <MdOutlineAccessTimeFilled />
                          {meeting.time}
                        </td> */}
                        <td className="flex-1  items-center mr-4">
                          <span className="material-icons text-gray-500 mr-2">
                            <MdOutlineAccessTimeFilled />
                          </span>
                          <span>{meeting.time}</span>
                        </td>

                        <td className="px-3 py-2 flex-1 flex gap-2 items-center  ">
                          <CiLocationOn />
                          {meeting.location}
                        </td>
                        <td className="px-3 py-2">{meeting.edit}</td>
                        <td className="px-3 py-2">{meeting.icon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
