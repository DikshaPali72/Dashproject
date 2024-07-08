import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import chat from "../images/ChatImg.png";

import msg1 from "../images/Massage/msg1.png";
import msg2 from "../images/Massage/msg2.png";
import msg3 from "../images/Massage/msg3.png";
import msg4 from "../images/Massage/msg4.png";
import msg5 from "../images/Massage/msg5.png";
import msg6 from "../images/Massage/msg6.png";
import msg7 from "../images/Massage/msg7.png";

const Messages = () => {
  const users = [
    {
      pic: <img src={msg1}></img>,
      name: "Shelby Goode",
      message: "Lorem Ipsum is simply dummy text of the printing",
      time: "1 min ago",
    },
    {
      pic: <img src={msg2}></img>,
      name: "Robert Bacins",
      message: "Lorem Ipsum is simply dummy text of the printing",
      time: "9 min ago",
    },
    {
      pic: <img src={msg3}></img>,
      name: "John Carlio",
      message: "Lorem Ipsum is simply dummy text of the printing",
      time: "15 min ago",
      active: true,
    },
    {
      pic: <img src={msg4}></img>,
      name: "Adriene Watson",
      message: "Lorem Ipsum is simply dummy text of the printing",
      time: "21 min ago",
    },
    {
      pic: <img src={msg5}></img>,
      name: "Jhon Deo",
      message: "Lorem Ipsum is simply dummy text of the printing",
      time: "38 min ago",
    },
    {
      pic: <img src={msg6}></img>,
      name: "Mark Ruffalo",
      message: "Lorem Ipsum is simply dummy text of the printing",
      time: "45 min ago",
    },
    {
      pic: <img src={msg7}></img>,
      name: "Bethany Jackson",
      message: "Lorem Ipsum is simply dummy text of the printing",
      time: "1 hr ago",
    },
  ];
  return (
    <div className="  p-4 flex w-full max-md:flex-col">
      <div>
        <div className="flex justify-between mb-4 w-full">
          <h2 className="text-xl font-bold">Message</h2>
          <button className="p-2 rounded-full bg-purple-500 text-white">
            +
          </button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 mb-4 rounded-md border"
        />
        <div className="flex mb-2">
          <button className="w-1/2 p-2">All</button>
          <button className="w-1/2 p-2 border-b-2 border-purple-500">
            Personal
          </button>
          <button className="w-1/2 p-2">Teams</button>
        </div>
        <div>
          {users.map((user) => (
            <div
              key={user.name}
              className={`flex items-center p-2 ${
                user.active ? "bg-purple-100" : ""
              } rounded-lg mb-2`}
            >
              {/* <img 
            s
            src={`https://via.placeholder.com/40?text=${user.name.charAt(0)}`}
             alt={user.name} className="rounded-full w-10 h-10"/> */}
              <div className="ml-2 flex">
                <div className="">{user.pic}</div>{" "}
                <div>
                  <div className="font-bold">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.message}</div>
                </div>
                <div className="ml-auto text-xs text-gray-400">{user.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ///////////// */}
      <div>
        <div className=" flex flex-col p-4 ml-8 w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={msg3}
                alt="John Carlio"
                className="rounded-full w-10 h-10"
              />
              <div className="ml-2">
                <div className="font-bold">John Carlio</div>
                <div className="text-sm text-green-500">Online</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-gray-200">
                <IoIosCall />
              </button>
              <button className="p-2 rounded-full bg-gray-200">
                <IoIosVideocam />
              </button>
              <button className="p-2 rounded-full bg-gray-200">
                <HiDotsVertical />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 bg-white border rounded-lg">
            <div className="flex mb-4 mr-32 ">
              <div className="bg-blue-500 text-white p-2 rounded-lg ml-auto max-w-xs">
                Lorem Ipsum is simply
              </div>
            </div>
            <div className="flex mb-4 mr-32 ">
              <div className="bg-blue-500 text-white p-2 rounded-lg ml-auto max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="flex mb-4  ml-32">
              <div className="bg-gray-200 p-2 rounded-lg max-w-xs">
                <img src={chat} alt="Screenshot" />
              </div>
            </div>
            <div className="flex mb-4 mr-32  ">
              <div className="bg-blue-500 text-white p-2 rounded-lg ml-auto max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-md border"
            />
            <button className="p-2 ml-2 rounded-full bg-blue-500 text-white">
              <IoIosSend />
            </button>
          </div>
        </div>
      </div>
    </div>

    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  );
};

export default Messages;
