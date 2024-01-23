"use client";
import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
} from "@nextui-org/react";

import axios from "axios";

interface Course {
  idcourse: number;
  teachers_idteachers: number;
  desc: string;
  price: string;
  rate: string;
  languages_idlanguages: number;
  // Add other fields if present in your API response
}
const PeakUserSettings = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [course, setCourse] = useState<Course | null>(null);
 

  useEffect(() => {
    axios
      .get<Course>("http://127.0.0.7:8000/courses/oneCourse/1")
      .then((response: any) => {
        setCourse(response.data);
        console.log("123", course);
      })
      .catch((error: any) => {
        console.log("Error fetching course data:", error);
      });
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = ["solid"];

  return (
    <div className="relative rounded-3xl   w-full h-[1861px] overflow-hidden text-left text-[16px] text-peak-primary font-montserrat transition-all duration-800 bg-green-50">
      <div className="flex flex-col flex-wrap gap-4 left-[100px] bg-black-50">
        {variants?.map((variant) => (
          <Breadcrumbs key={variant} variant={variant}>
            <BreadcrumbItem>..Home</BreadcrumbItem>
            <BreadcrumbItem>User Profile</BreadcrumbItem>
          </Breadcrumbs>
        ))}
      </div>

      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center  left-[150px]"
          onClick={toggleDropdown}
        >
          Settings{" "}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className=" mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Update User
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="h-12 relative"></div>
      <div className="absolute top-[118px] left-[348.74px] w-[1037.26px] h-[202.3px] text-center text-5xl bg-white rounded-xl p-8 border border-white">
        <div className="absolute top-[10px] left-[300px] ">
          <h3 className="text-3xl font-bold text-gray-400 ${scrollY > 100 ? 'text-bleu-500' : 'text-indigo-700'} transition-all hover:text-green-500`}">
            Welcome to My Profile!
          </h3>
          <p className="text-lg text-gray-800">
            Feel free to explore and connect.
          </p>
        </div>

        <div className="absolute top-[97.7px] left-0 w-[474.85px] h-[104.6px] text-left text-xl">
          <img
            className="absolute top-0 left-0 w-[105.53px] h-[104.6px] rounded-full transition-all hover:shadow-lg"
            alt=""
            src="image-12@2x.png"
          />
          <b className="absolute top-[8.3px] left-[120px] text-lg text-indigo-800 transition-all hover:text-purple-500">
            amine guezmir
          </b>
          <div className="absolute top-[40.3px] left-[120px] text-lg text-pink-600 transition-all hover:text-indigo-700">
            Product Design
          </div>
          <div className="absolute top-[72.3px] left-[120px] text-base text-gray-600 transition-all hover:text-purple-500">
            Eastern European Time (EET), Cairo UTC +3
          </div>
        </div>
        <div className="absolute top-[106px] left-[629.26px] w-[408px] h-[66px] overflow-hidden flex flex-row items-center justify-start gap-[56px] text-sm text-white-100">
          <div className="rounded-lg bg-pink-500 box-border w-44 h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-0.5 border-[1px] border-solid border-pink-600 transition-all hover:bg-indigo-600 hover:border-indigo-700">
            <b className="relative leading-[150%] text-white">
              📸 Upload New Photo{" "}
            </b>
          </div>
          <div className="rounded-lg bg-indigo-500 box-border w-44 h-14 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-0 text-white border-[1px] border-solid border-indigo-600 transition-all hover:bg-pink-500 hover:border-pink-600">
            <b className="relative leading-[150%]">🗑️ Delete</b>
          </div>
        </div>
      </div>

      <img
        className="absolute top-[374.53px] left-[350.99px] max-h-full w-[1060.01px] rounded-md border-4 border-indigo-700 transition-all hover:border-pink-500"
        alt="132"
        src="user123.png"
      />
      <img
        className="absolute top-[1012px] left-[417px] max-h-full w-[320.01px]"
        alt=""
        src="group-40@2x.png"
      />

      <div className="relative w-[1440px] h-[1138px] hidden" />
      <div className="absolute top-0 left-[275px] w-1 h-full bg-black"></div>
      <div className=" absolute top-[900px] border border-[20px] bg-gray-200 w-[1250px] left-[380px] h-[800px]"></div>
      <div className="absolute top-[997px] left-[392px] w-[363px] h-[444px] text-white font-poppins bg-gradient-to-r from-pink-500 to-purple-500 ">
        <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px]  ">
          <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px] ">
            <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px] text-5xl text-gray-100">
              <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px]">
                <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px]">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-white-100 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[363px] h-[444px]" />
                  <div className="absolute top-[14.39px] left-[20.36px] w-[324.2px] h-[360.53px]">
                    <div className="absolute top-[0px] left-[0px] w-[324.2px] h-[171.74px]">
                      <div className="absolute top-[0px] left-[0.02px] rounded-xl bg-darkslateblue w-[324.18px] h-[171.74px] opacity-[0.1]" />
                    </div>
                    <div className="absolute top-[216.6px] left-[5.85px] text-black font-medium inline-block w-[314.47px] h-[10.41px]">
                      {course?.desc}
                    </div>
                    <div className="absolute top-[275.12px] left-[5.85px] text-lg tracking-[0.02em] leading-[180%] text-slategray-200 text-black inline-block w-[318.35px] h-[73.4px]">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </div>
                  </div>
                  <div className="absolute top-[387.15px] left-[25.85px] w-[335.71px] h-[31.84px] text-lg text-black">
                    <div className="absolute top-[9.2px] left-[60.32px] tracking-[0.02em] font-medium inline-block w-[49.55px] h-[13.44px]">
                      Lina
                    </div>

                    <b className="absolute top-[15.83px] left-[210.21px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[49.5px] h-[13.67px]">
                      {course?.price}
                    </b>
                    <div className="absolute top-[0px] left-[0px] w-[43.06px] h-[31.84px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-[42.71px] h-[31.84px]" />
                      <img
                        className="absolute top-[0px] left-[0.36px] rounded-[22px] w-[42.71px] h-[31.66px] object-cover"
                        alt=""
                        src="image-12@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[200.77px] left-[26.21px] w-[90.27px] h-[15.83px]">
              <div className="absolute top-[0px] left-[30.09px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[60.18px] h-[15.83px]">
                Design
              </div>
              <div className="absolute top-[0.72px] left-[0px] w-[20.38px] h-[15.11px]">
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-[9.71px] h-[7.2px] border-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[7.92px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-[9.71px] h-[7.2px] border-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[7.92px] left-[10.68px] rounded-sm bg-gainsboro-200 box-border w-[9.71px] h-[7.2px] border-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[0px] left-[10.68px] rounded-sm bg-gainsboro-200 box-border w-[9.71px] h-[7.2px] border-[1px] border-solid border-gainsboro-100" />
              </div>
            </div>
            <div className="absolute top-[200.77px] left-[268.38px] w-[93.18px] h-[20.15px]">
              <div className="absolute top-[1.44px] left-[33px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[60.18px] h-[15.83px]">
                3 Month
              </div>
              <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100 inline-block w-[23.29px] h-[20.15px]">
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-[1043px] left-[1230px] rounded-xl w-[99px] h-[108px] object-cover"
        alt=""
        src="https://cdn.alsacreations.net/xmedia/doc/full/php-logo.png"
      />
      <div className="absolute top-[1238px] left-[906px] w-[526px] h-[50px]">
        <div className="absolute top-[0px] left-[184px] rounded-81xl bg-dodgerblue w-[315px] h-[15px]" />
        <div className="absolute top-[6px] left-[370px] rounded-[200px] bg-cornflowerblue [filter:blur(91px)] w-[60px] h-[60px]" />
      </div>
      <div className="absolute top-[1233px] left-[1292px] rounded-81xl bg-steelblue w-[138px] h-5" />
      <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500  left-[1150px] top-[1200px]">
        <CardBody className="justify-center items-center pb-0">
          <CircularProgress
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-white",
              track: "stroke-white/10",
              value: "text-3xl font-semibold text-white top-[80px] left-[50px]",
            }}
            value={70}
            strokeWidth={4}
            showValueLabel={true}
          />
        </CardBody>
        <CardFooter className="justify-center items-center pt-0 ">
          <Chip
            classNames={{
              base: "border-1 border-white/30 ",
              content: "text-white/90 text-small font-semibold ",
            }}
            variant="bordered"
          >
            2800 Data points
          </Chip>
        </CardFooter>
      </Card>
      <div className="absolute top-[908px] left-[469px] text-23xl font-medium font-dm-sans text-black">
        <span className="relative inline-block">
          Courses
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-1"></div>
        </span>
      </div>

      <div className="absolute top-0 left-[980px] transform -translate-x-1/2 w-2 top-[920px] h-[800px] bg-gradient-to-b from-blue-500 to-pink-500 top-[500px]"></div>
      <div className="absolute top-1/2 left-[980px]  transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500"></div>
      <div className="absolute top-[906px] left-[1140px] text-23xl font-medium font-dm-sans text-black">
        <span className="relative inline-block">
          Languages
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-2"></div>
        </span>
      </div>
    </div>
  );
};

export default PeakUserSettings;
