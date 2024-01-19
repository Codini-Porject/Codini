"use client"
import { useIdentity } from "../(auth)/IdentityContext";
import React, { useState } from 'react';


const QuizComponent = () => {
  const [answers, setAnswers] = useState(Array(4).fill('')); // Initial state for answers

//   const handleAnswerChange = (index, value) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = value;
//     setAnswers(newAnswers);
//   };

  const handleSubmit = () => {
    // Handle the submission of answers
    console.log('Submitted Answers:', answers);
  };

  return (
    <div className="container1 mt-sm-5 my-1">
    <div className="question ml-sm-5 pl-sm-5 pt-2">
      <div className="py-2 h5"><b>Q. which option best describes your job role?</b></div>
      <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
        <label className="options">Small Business Owner or Employee
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="options">Nonprofit Owner or Employee
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="options">Journalist or Activist
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="options">Other
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
    <div className="d-flex align-items-center pt-3">
      <div id="prev">
        <button className="button">Previous</button>
      </div>
      <div className="ml-auto mr-sm-5">
        <button className="button1">Next</button>
      </div>
    </div>
  </div>
  );
};

export default QuizComponent;