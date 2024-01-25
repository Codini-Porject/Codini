import React, { useState, useEffect } from "react";
// import dropTri from "../../images/drop-tri.svg";
import { motion } from "framer-motion";
import { dropVariant } from "../models/animations";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function DropDown(props) {
  const [isOpen, toggleOpen] = useState(false);
  const [items, setItems] = useState([]);

  // Updates items to all items except currently selected method
  useEffect(() => {
    const allMethods = [
      "push",
      "pop",
      "shift",
      "unshift",
      "set",
      "insert",
      "remove",
      "reverse",
    ];
    const filteredList = allMethods.filter(
      (item) => item !== props.currentMethod
    );
    setItems(filteredList);
  }, [props.currentMethod]);

  // Click handler for top block
  const handleCurrentClick = () => {
    toggleOpen(!isOpen);
  };

  // Click handler for drop down items
  const handleItemClick = (e) => {
    props.setCurrentMethod(e.target.id);
    toggleOpen(!isOpen);
  };

  return (
    <div className="DropDown">
      <div className="DropDown-current" onClick={handleCurrentClick}>
        <span className="DropDown-currentText">{props.currentMethod}</span>
        <div>
          <ArrowDropDownIcon />
        </div>
      </div>
      <motion.ul
        className="DropDown-list"
        style={{ originY: 0 }}
        variants={dropVariant}
        initial="initial"
        animate={isOpen ? "animate" : "initial"}
      >
        {items.map((item) => (
          <li
            className="DropDown-item"
            id={item}
            onClick={handleItemClick}
            key={item}
          >
            {item}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
