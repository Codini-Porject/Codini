import { useState, useRef, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import ColorDropDown from "../ColorDropDown/ColorDropDown";

export default function ListToolBar({
  setCurrentMethod,
  currentMethod,
  currentColor,
  setCurrentColor,
  setValue,
  setIndex,
  updateNodes,
  value,
  indexValue,
  length,
}) {
  const [isValid, setIsValid] = useState(true);
  const ref = useRef();
  let inputs;

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (currentMethod === "remove" || currentMethod === "set") {
      if (length > 0 && length > indexValue) {
        setIsValid(true);
        updateNodes();
      } else {
        setIsValid(false);
      }
    } else if (currentMethod === "insert") {
      if (length >= indexValue) {
        setIsValid(true);
        updateNodes();
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(true);
      updateNodes();
    }
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleIndexChange = (e) => {
    const currentValue = e.target.value;
    const regex = /^\d+$/;

    if (regex.test(currentValue)) {
      setIndex(parseInt(currentValue));
    } else if (currentValue === "") {
      setIndex("");
    } else {
      setIsValid(false);
    }
  };

  if (currentMethod === "push" || currentMethod === "unshift") {
    inputs = (
      <>
        <div className="ListToolBar-colorContainer">
          <div className="ListToolBar-label">color</div>
          <ColorDropDown
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
          />
        </div>
        <div className="ListToolBar-valueContainer">
          <label htmlFor="valueInput" className="ListToolBar-label">
            value
          </label>
          <input
            ref={ref}
            value={value}
            id="valueInput"
            type="text"
            className="ListToolBar-valueInput"
            onChange={handleValueChange}
          />
        </div>
      </>
    );
  } else if (currentMethod === "set" || currentMethod === "insert") {
    inputs = (
      <>
        <div className="ListToolBar-colorContainer">
          <div className="ListToolBar-label">color</div>
          <ColorDropDown
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
          />
        </div>
        <div className="ListToolBar-valueContainer">
          <label htmlFor="valueInput" className="ListToolBar-label">
            value
          </label>
          <input
            value={value}
            id="valueInput"
            type="text"
            className="ListToolBar-valueInput"
            onChange={handleValueChange}
          />
        </div>

        <div className="ListToolBar-indexContainer">
          <label htmlFor="indexInput" className="ListToolBar-label">
            Index #{" "}
            {isValid === false ? (
              <span className="ListToolBar-valid">
                {currentMethod === "set"
                  ? `(0 - ${length - 1})`
                  : `(0 - ${length})`}
              </span>
            ) : null}
          </label>
          <input
            value={indexValue}
            id="indexInput"
            type="text"
            className="ListToolBar-indexInput"
            onChange={handleIndexChange}
          />
        </div>
      </>
    );
  } else if (currentMethod === "remove") {
    inputs = (
      <>
        <div className="ListToolBar-indexContainer">
          <label htmlFor="indexInput" className="ListToolBar-label">
            Index #{" "}
            {isValid === false ? (
              <span className="ListToolBar-valid">{`(0 - ${length - 1})`}</span>
            ) : null}
          </label>
          <input
            value={indexValue}
            id="indexInput"
            type="text"
            className="ListToolBar-indexInput"
            onChange={handleIndexChange}
          />
        </div>
      </>
    );
  }

  return (
    <form className="ListToolBar" onSubmit={handleFormSubmit}>
      <div className="ListToolBar-methodContainer">
        <div className="ListToolBar-label">Method</div>
        <DropDown
          setCurrentMethod={setCurrentMethod}
          currentMethod={currentMethod}
        />
      </div>

      {inputs ? inputs : null}

      <div className="ListToolBar-submitContainer">
        <button className="ListToolBar-submit">Run</button>
      </div>
    </form>
  );
}
