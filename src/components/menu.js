import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuIcon from "./icons/menuIcon";
import DeleteIcon from "./icons/deleteIcon";
import EditIcon from "./icons/editIcon";

Menu.propTypes = {};

function Menu(props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="static w-8 h-8 p-1 place-self-end hover:bg-blue-300 rounded-md hover:shadow-md cursor-pointer"
      onClick={() => setOpen(!open)}
      id="options-menu"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <MenuIcon />
      {open === true && (
        <div
          className="w-52 origin-top-right transform translate-x-1 z-50 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 opacity-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <EditIcon />
              <span>Edit</span>
            </a>
            
          </div>
          <div className="py-1">
            
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <DeleteIcon />
              
              <span>Delete</span>
              
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
