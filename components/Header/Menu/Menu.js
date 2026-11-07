import React from "react";
import { MENULINKS } from "../../../constants";

const Menu = ({ open, onClose }) => (
  <div
    id="side-menu"
    role="dialog"
    aria-modal={open ? "true" : undefined}
    aria-label="Site navigation"
    aria-hidden={!open}
    className={`menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center ${
      open ? "menu-open" : ""
    }`}
  >
    <div className="flex-none overflow-hidden flex items-center justify-center">
      <div className="text-center opacity-0 overflow-y-auto overflow-x-hidden flex flex-none justify-center items-center max-h-screen">
        <ul className="list-none py-4 px-0 m-0 block max-h-screen">
          {MENULINKS.map((el) => (
            <li key={el.name} className="p-0 m-6 text-2xl block">
              <a
                className="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline"
                href={`#${el.ref}`}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
              >
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Menu;
