"use client"
import React, { useEffect, useState } from 'react';

interface Answer {
  option: string;
  answer: Answer[];
}

interface Question {
  rightOption: string;
  question: string;
}

interface QuizData {
  question: Question;
  answers: Answer[];
}

function Quize() {
  const [quizData, setQuizData] = useState<QuizData>({ question : { question: "", rightOption: "" }, answers: [] });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchQuiz = await fetch(`http://localhost:8000/quiz/get/58`);
        const quiz: QuizData = await fetchQuiz.json();

        console.log("Quiz data:", quiz);

        setQuizData(quiz);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOptionClick = (selectedOption: string) => {
    if (selectedOption === quizData.question.rightOption) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const { question, answers } = quizData;

  return (
    <div>
      <h1>Welcome Student</h1>
      <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-md shadow-md">
        <div className="mb-6">
          <p className="text-xl font-semibold">Question:</p>
          <p className="text-gray-300">{question.question}</p>
        </div>

        <div>
          <p className="text-xl font-semibold">Options:</p>

          {answers.map((answer, index) => (
            <div key={index} className="mt-4 flex items-center">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-full"
                onClick={() => handleOptionClick(answer.option)}
              >
                {`Option ${index + 1}`}
              </button>
              <p className="text-gray-300 ml-4">{answer.option}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold mt-4">Score: {score}</p>
      </div>
    </div>
  );
}

export default Quize;
