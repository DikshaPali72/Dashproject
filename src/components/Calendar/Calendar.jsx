import React from "react";
import Tasklist from "../Calendar/Tasklist";
import Taskli from "../Calendar/Taskli";

import Top from "./Top";
import Tasklie from "./Tasklie";

const Calendar = () => {
  return (
    <div className=" p-1 flex bg-gray-100 flex-col w-svw">
      {/*  111111111111111111111111111111111111111111111111111111111111111111111111111 */}

      <div className="  bg-white  w-full h-[105px] items-center font-bold px-5 flex justify-between m-2">
        <div className="text-2xl">Task Preview</div>

        <div>
          <button className=" bg-blue-500 rounded-full p-3 ">
            {" "}
            + Add Task{" "}
          </button>
        </div>
      </div>

      {/* 1111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
      <div className="p-2">
        <Top />
      </div>

      {/* 11111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}

      <div className="p-2">
        <Tasklist />
      </div>

      <div className="p-2">
        <Taskli />
      </div>
      <div className="p-2">
        <Tasklie />
      </div>

      {/*first & last */}
    </div>
  );
};

export default Calendar;
