import React from "react";
import icon from "../images/Icon.png";
import icon2 from "../images/Icon2.png";
import icon3 from "../images/Incon3.png";
import icon4 from "../images/Icon4.png";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => (
  <div className="  gap-6 text">
    <div className=" w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl  font-bold">Dashboard</h1>
        <div className="flex  space-x-4">
          <div className="bg-white flex items-center">
            <div>10-06-2021</div> <RiArrowDropDownLine />{" "}
          </div>
          <div className="bg-white flex items-center ">
            <div>10-10-2021 </div> <RiArrowDropDownLine />{" "}
          </div>
        </div>
      </div>
      <div className="flex mt-2 w-full space-x-4">
        <div className="bg-white p-4 w-full gap-4 rounded-lg flex">
          <img src={icon} alt="" />
          <p>
            178+ <br /> <span className="text-sm"> Save Products</span>
          </p>
        </div>
        <div className="bg-white p-4 w-full gap-4 rounded-lg flex">
          <img src={icon2} alt="" />
          <p>
            20+
            <br /> <span className="text-sm"> Stock Products</span>
          </p>
        </div>
        <div className="bg-white p-4 w-full gap-4 rounded-lg flex">
          <img src={icon3} alt="" />
          <p>
            190+ <br /> <span className="text-sm"> Sales Products</span>
          </p>
        </div>
        <div className="bg-white p-4 w-full gap-4 rounded-lg flex">
          <img src={icon4} alt="" />
          <p>
            12+ <br /> <span className="text-sm">Job Application</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
