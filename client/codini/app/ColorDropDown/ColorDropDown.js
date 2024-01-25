import React, { useState, useEffect } from "react";
// import dropTri from "../../images/drop-tri.svg";
import { motion } from "framer-motion";
import { dropVariant } from "../models/animations";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function ColorDropDown(props) {
  const [isOpen, toggleOpen] = useState(false);
  const [colors, setColors] = useState([]);

  // Updates colors array to all colors except currently selected color
  useEffect(() => {
    const allColors = [
      "linear-gradient(212.42deg, #7EF3B4 14.47%, #56A078 85.83%)",
      "linear-gradient(212.25deg, #F08E37 14.04%, #AB6628 85.8%)",
      "linear-gradient(208.77deg, #B43EF4 13.44%, #8B2FBD 85.66%)",
      "linear-gradient(207.53deg, #58BAF8 7.7%, #3A7FAB 85.19%)",
      "linear-gradient(203.89deg, #6DEDE2 13.82%, #43938C 83.21%)",
    ];
    const filteredList = allColors.filter(
      (color) => color !== props.currentColor
    );
    setColors(filteredList);
  }, [props.currentColor]);

  // Click handler for top block
  const handleCurrentClick = () => {
    toggleOpen(!isOpen);
  };

  // Click handler for drop down items
  const handleColorClick = (e) => {
    const targ = e.target.closest(".ColorDropDown-color");
    props.setCurrentColor(targ.id);
    toggleOpen(!isOpen);
  };

  return (
    <div className="ColorDropDown">
      <div className="ColorDropDown-current" onClick={handleCurrentClick}>
        <div
          className="ColorDropDown-colorBox"
          style={{ background: props.currentColor }}
        ></div>
        <div>
          <ArrowDropDownIcon />
        </div>
      </div>
      <motion.ul
        className="ColorDropDown-list"
        style={{ originY: 0 }}
        variants={dropVariant}
        initial="initial"
        animate={isOpen ? "animate" : "initial"}
      >
        {colors.map((color) => (
          <li
            className="ColorDropDown-color"
            id={color}
            key={color}
            onClick={handleColorClick}
          >
            <div
              className="ColorDropDown-colorBox"
              style={{ background: color }}
            ></div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
