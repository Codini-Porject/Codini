"use client";
import React, { useState, useEffect } from "react";

import Node from "../Node/Node";
import { LayoutGroup } from "framer-motion";
// import Header from "../(Header)/Header";
import ListToolBar from "../ListToolBar/ListToolBar";
import ListModel from "../models/SingleLinkListModel";

// initial singly linked list nodes
const initList = new ListModel();
initList.push(
  "bread",
  "linear-gradient(212.42deg, #7EF3B4 14.47%, #56A078 85.83%)"
);
initList.push(
  "milk",
  "linear-gradient(212.42deg, #7EF3B4 14.47%, #56A078 85.83%)"
);
initList.push(
  "butter",
  "linear-gradient(212.42deg, #7EF3B4 14.47%, #56A078 85.83%)"
);

export default function SingleLinkList() {
  // array of node objects
  const [list, setList] = useState([]);
  // selected drop down method
  const [currentMethod, setCurrentMethod] = useState("unshift");
  // value of value input
  const [value, setValue] = useState("");
  // value of index input
  const [indexValue, setIndex] = useState("");
  // selected color from drop down in the form of a gradient
  const [currentColor, setCurrentColor] = useState(
    "linear-gradient(212.42deg, #7EF3B4 14.47%, #56A078 85.83%)"
  );
  // value of current length of list
  const [length, setLength] = useState(3);

  useEffect(() => {
    convertListToArray();
  }, []);

  const convertListToArray = () => {
    const arr = [];
    let node = initList.head;
    while (node) {
      arr.push(node);
      node = node.next;
    }
    setList(arr);
  };

  const updateNodes = (e) => {
    switch (currentMethod) {
      case "push":
        initList.push(value, currentColor);
        break;
      case "pop":
        initList.pop();
        break;
      case "shift":
        initList.shift();
        break;
      case "unshift":
        initList.unshift(value, currentColor);
        break;
      case "set":
        initList.set(value, currentColor, indexValue);
        break;
      case "insert":
        initList.insert(value, currentColor, indexValue);
        break;
      case "remove":
        initList.remove(indexValue);
        break;
      case "reverse":
        initList.reverse();
        break;
      default:
        break;
    }
    setLength(initList.length);
    convertListToArray();
  };

  return (
    <div className="SingleLinkList">
      {/* <Header theme="dark" /> */}
      <div className="SingleLinkList-wrapper wrapper">
        <ListToolBar
          setCurrentMethod={setCurrentMethod}
          currentMethod={currentMethod}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          setValue={setValue}
          setIndex={setIndex}
          updateNodes={updateNodes}
          value={value}
          indexValue={indexValue}
          length={length}
        />
        <h2 className="SingleLinkList-header">Singly Linked List</h2>
        <LayoutGroup>
          <section className="SingleLinkList-nodeContainer">
            {list.map((item, index) => {
              return (
                <Node
                  key={item.key}
                  value={item.value}
                  next={item.next ? item.next.value : "null"}
                  index={index}
                  color={item.color}
                />
              );
            })}
          </section>
        </LayoutGroup>
      </div>
    </div>
  );
}
