"use client"
import React from 'react'

function page() {
  return (
  
    <div className="quiz-question-container">
      <div className="question">Your Question Goes Here?</div>
      <div className="answers">
        <input type="text" placeholder="Option 1" />
        <input type="text" placeholder="Option 2" />
        <input type="text" placeholder="Option 3" />
        <input type="text" placeholder="Option 4" />
        <input type="text" placeholder="Option 5" />
      </div>
    </div>
  );
};


export default page