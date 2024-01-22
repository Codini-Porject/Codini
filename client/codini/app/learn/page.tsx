"use client";
import type { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";

interface Lesson {
  videoUrl: string;
  // other properties if any
}
const CoursesOpenPageLaptop: NextPage = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const openVideoPopup = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setShowVideoPopup(true);
  };

  const closeVideoPopup = () => {
    setSelectedLesson(null);
    setShowVideoPopup(false);
  };

  return (
    <div className="w-full relative bg-white-97 h-[3271px] overflow-hidden text-left text-sm text-grey-15 font-be-vietnam-pro">
      <div className="absolute top-[222px] left-[calc(50%_-_700px)] box-border w-[1400px] flex flex-row items-center justify-start pt-0 px-[60px] pb-10 gap-[80px] text-[38px] border-b-[1px] border-solid border-white-90">
        <div className="flex-1 relative leading-[150%] font-semibold">
          The Complete JavaScript Course 2024: From Zero to Expert!
        </div>
        <div className="flex-1 relative text-base leading-[150%] text-grey-35">
          Welcome to our JavaScript Full Course! This extensive program is
          designed to provide you with a thorough understanding of JavaScript,
          one of the most versatile and widely used programming languages.
          Whether you're a beginner or an experienced developer, this course
          covers the fundamentals and advanced concepts of JavaScript.
        </div>
      </div>
      <div className="absolute top-[446px] left-[calc(50%_-_656px)] rounded-3xs w-[1312px] h-[681px] overflow-hidden flex flex-row items-center justify-center p-[100px] box-border bg-[url('https://img-c.udemycdn.com/course/750x422/3351510_6c1e.jpg')] bg-cover bg-no-repeat bg-[top]">
        <div className="rounded-[68px] bg-gray-200 flex flex-row items-start justify-start p-2.5 border-[4px] border-solid border-gray-100">
          <img
            className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/16630.png"
          />
        </div>
      </div>
      <div className="absolute top-[1191px] left-[calc(50%_-_640px)] w-[1280px] flex flex-col items-start justify-start gap-[20px] text-41xl text-grey-20">
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <div className="flex-1 rounded-3xs bg-absolute-white flex flex-col items-end justify-start p-10 gap-[40px]">
            <b className="self-stretch relative leading-[24px] text-grey-15 text-right">
              01
            </b>
            <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[150%] font-semibold">
              JavaScript Basics
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Introduction
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 01
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">45 Minutes</div>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-absolute-white shadow-[0px_0px_0px_4px_#fff4e5] overflow-hidden flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-orange-80">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Funtions
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 02
                  </div>
                </div>
                <div className="rounded-md bg-orange-90 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-30">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">1 Hour</div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Variables
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 03
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">45 Minutes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-3xs bg-absolute-white flex flex-col items-end justify-start p-10 gap-[40px]">
            <b className="self-stretch relative leading-[24px] text-grey-15 text-right">
              02
            </b>
            <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[150%] font-semibold">
              JavaScript Fundamentals
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Introduction to Arrays
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 01
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">1 Hour</div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Introduction to Objects
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 02
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">1 Hour</div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Arrays and Objects
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 03
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">45 Minutes</div>
                </div>
                {/* {showVideoPopup && selectedLesson && (
                  <div className="video-popup-container">
                    <VideoPlayer
                      videoUrl={selectedLesson.videoUrl}
                      onClose={closeVideoPopup}
                    />
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <div className="flex-1 rounded-3xs bg-absolute-white flex flex-col items-end justify-start p-10 gap-[40px]">
            <b className="self-stretch relative leading-[24px] text-grey-15 text-right">
              03
            </b>
            <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[150%] font-semibold">
              Intermediate JavaScript Concepts
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    OOP in Javascript
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    {/* // onClick={() => openVideoPopup(lesson)}
                  > */}
                    Lesson 01
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">1 Hour</div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Higher Order Functions
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 02
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">1 Hour</div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Classes in JavaScript
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 03
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">1 Hour</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xs bg-absolute-white flex flex-col items-end justify-start p-10 gap-[40px]">
            <b className="self-stretch relative leading-[24px] text-grey-15 text-right">
              04
            </b>
            <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[150%] font-semibold">
              Advanced JavaScript Topics
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Inheritance
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 01
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">1 Hour</div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Hoisting
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 02
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">1 Hour</div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Destructuring
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 03
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">45 Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[654px] pl-0">
          <div className="flex-1 rounded-3xs bg-absolute-white flex flex-col items-end justify-start p-10 gap-[40px]">
            <b className="self-stretch relative leading-[24px] text-grey-15 text-right">
              05
            </b>
            <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[150%] font-semibold">
              Node.js and Server-Side JavaScript
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    What is Node.js ?
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 01
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">1 Hour</div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    What do we mean by Server-Side ?
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 02
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">45 Minutes</div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-5 px-6 gap-[6px] border-[1px] border-solid border-white-95">
                <div className="flex-1 flex flex-col items-center justify-start gap-[2px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Implementation
                  </div>
                  <div className="self-stretch relative text-sm leading-[150%] text-grey-35">
                    Lesson 03
                  </div>
                </div>
                <div className="rounded-md bg-white-97 flex flex-row items-start justify-start p-2.5 gap-[4px] text-sm text-grey-35">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/22@2x.png"
                  />
                  <div className="relative">45 Minutes</div>
                </div>
              </div>
            </div>
            <Link href="/quiz" passHref>
              <div className="w-full rounded-md bg-indigo-800 text-white text-center py-4 cursor-pointer hover:bg-indigo-700 transition-colors duration-300">
                Take Quiz
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesOpenPageLaptop;
