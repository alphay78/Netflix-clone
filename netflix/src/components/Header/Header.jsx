import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/Images/Netflix_Logo_PMS.png";
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

import { RiAccountBoxFill } from "react-icons/ri";

import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <FaSearch />{" "}
            </li>
            <li>
              <IoIosNotificationsOutline />
            </li>{" "}
            <li>
              <RiAccountBoxFill />
            </li>
            <li>
              <IoMdArrowDropdown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
