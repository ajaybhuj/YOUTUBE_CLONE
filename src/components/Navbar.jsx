import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="">
      <div className="px-5 flex justify-between ">
        <div className=" flex items-center gap-3 ">
          <GiHamburgerMenu className="ml-3" />
          <img
            width={"120px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="youtube_logo"
          />
        </div>
        <div className=" ">
          <div>
            <input
              type="text"
              className="border 
          outline-none border-gray-200"
            />
          </div>
          <button>Search</button>
        </div>
        <div className="flex items-center ">
          <IoIosNotificationsOutline size={"24px"} />
          <CiVideoOn size={"24px"} />
          <Avatar src="profileImage.png" size={50} round={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
