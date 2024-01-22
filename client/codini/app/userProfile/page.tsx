"use client";
import type { NextPage } from "next";
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
    // <div className="relative rounded-3xl   w-full h-[1861px] overflow-hidden text-left text-[16px] text-peak-primary font-montserrat transition-all duration-800 bg-green-50">
    //   <div className="flex flex-col flex-wrap gap-4 left-[100px] bg-black-50">
    //     {variants?.map((variant) => (
    //       <Breadcrumbs key={variant} variant={variant}>
    //         <BreadcrumbItem>..Home</BreadcrumbItem>
    //         <BreadcrumbItem>User Profile</BreadcrumbItem>
    //       </Breadcrumbs>
    //     ))}
    //   </div>

    //   <div className="relative inline-block">
    //     <button
    //       type="button"
    //       className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center  left-[150px]"
    //       onClick={toggleDropdown}
    //     >
    //       Settings{" "}
    //       <svg
    //         className="w-2.5 h-2.5 ml-2.5"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 10 6"
    //       >
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           stroke-width="2"
    //           d="m1 1 4 4 4-4"
    //         />
    //       </svg>
    //     </button>

    //     {isOpen && (
    //       <div className=" mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
    //         <ul
    //           role="menu"
    //           aria-orientation="vertical"
    //           aria-labelledby="options-menu"
    //         >
    //           <li>
    //             <a
    //               href="#"
    //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //             >
    //               Update User
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //               onClick={closeDropdown}
    //             >
    //               Log Out
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    //   <div className="h-12 relative"></div>
    //   <div className="absolute top-[118px] left-[348.74px] w-[1037.26px] h-[202.3px] text-center text-5xl bg-white rounded-xl p-8 border border-white">
    //     <div className="absolute top-[10px] left-[300px] ">
    //       <h3 className="text-3xl font-bold text-gray-400 ${scrollY > 100 ? 'text-bleu-500' : 'text-indigo-700'} transition-all hover:text-green-500`}">
    //         Welcome to My Profile!
    //       </h3>
    //       <p className="text-lg text-gray-800">
    //         Feel free to explore and connect.
    //       </p>
    //     </div>

    //     <div className="absolute top-[97.7px] left-0 w-[474.85px] h-[104.6px] text-left text-xl">
    //       <img
    //         className="absolute top-0 left-0 w-[105.53px] h-[104.6px] rounded-full transition-all hover:shadow-lg"
    //         alt=""
    //         src="image-12@2x.png"
    //       />
    //       <b className="absolute top-[8.3px] left-[120px] text-lg text-indigo-800 transition-all hover:text-purple-500">
    //         amine guezmir
    //       </b>
    //       <div className="absolute top-[40.3px] left-[120px] text-lg text-pink-600 transition-all hover:text-indigo-700">
    //         Product Design
    //       </div>
    //       <div className="absolute top-[72.3px] left-[120px] text-base text-gray-600 transition-all hover:text-purple-500">
    //         Eastern European Time (EET), Cairo UTC +3
    //       </div>
    //     </div>
    //     <div className="absolute top-[106px] left-[629.26px] w-[408px] h-[66px] overflow-hidden flex flex-row items-center justify-start gap-[56px] text-sm text-white-100">
    //       <div className="rounded-lg bg-pink-500 box-border w-44 h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-0.5 border-[1px] border-solid border-pink-600 transition-all hover:bg-indigo-600 hover:border-indigo-700">
    //         <b className="relative leading-[150%] text-white">
    //           📸 Upload New Photo{" "}
    //         </b>
    //       </div>
    //       <div className="rounded-lg bg-indigo-500 box-border w-44 h-14 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-0 text-white border-[1px] border-solid border-indigo-600 transition-all hover:bg-pink-500 hover:border-pink-600">
    //         <b className="relative leading-[150%]">🗑️ Delete</b>
    //       </div>
    //     </div>
    //   </div>

    //   <img
    //     className="absolute top-[374.53px] left-[350.99px] max-h-full w-[1060.01px] rounded-md border-4 border-indigo-700 transition-all hover:border-pink-500"
    //     alt="132"
    //     src="user123.png"
    //   />
    //   <img
    //     className="absolute top-[1012px] left-[417px] max-h-full w-[320.01px]"
    //     alt=""
    //     src="group-40@2x.png"
    //   />

    //   <div className="relative w-[1440px] h-[1138px] hidden" />
    //   <div className="absolute top-0 left-[275px] w-1 h-full bg-black"></div>
    //   <div className=" absolute top-[900px] border border-[20px] bg-gray-200 w-[1250px] left-[380px] h-[800px]"></div>
    //   <div className="absolute top-[997px] left-[392px] w-[363px] h-[444px] text-white font-poppins bg-gradient-to-r from-pink-500 to-purple-500 ">
    //     <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px]  ">
    //       <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px] ">
    //         <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px] text-5xl text-gray-100">
    //           <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px]">
    //             <div className="absolute top-[0px] left-[0px] w-[363px] h-[444px]">
    //               <div className="absolute top-[0px] left-[0px] rounded-xl bg-white-100 shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[363px] h-[444px]" />
    //               <div className="absolute top-[14.39px] left-[20.36px] w-[324.2px] h-[360.53px]">
    //                 <div className="absolute top-[0px] left-[0px] w-[324.2px] h-[171.74px]">
    //                   <div className="absolute top-[0px] left-[0.02px] rounded-xl bg-darkslateblue w-[324.18px] h-[171.74px] opacity-[0.1]" />
    //                 </div>
    //                 <div className="absolute top-[216.6px] left-[5.85px] text-black font-medium inline-block w-[314.47px] h-[10.41px]">
    //                   {course?.desc}
    //                 </div>
    //                 <div className="absolute top-[275.12px] left-[5.85px] text-lg tracking-[0.02em] leading-[180%] text-slategray-200 text-black inline-block w-[318.35px] h-[73.4px]">
    //                   Lorem ipsum dolor sit amet, consectetur adipising elit,
    //                   sed do eiusmod tempor
    //                 </div>
    //               </div>
    //               <div className="absolute top-[387.15px] left-[25.85px] w-[335.71px] h-[31.84px] text-lg text-black">
    //                 <div className="absolute top-[9.2px] left-[60.32px] tracking-[0.02em] font-medium inline-block w-[49.55px] h-[13.44px]">
    //                   Lina
    //                 </div>

    //                 <b className="absolute top-[15.83px] left-[210.21px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[49.5px] h-[13.67px]">
    //                   {course?.price}
    //                 </b>
    //                 <div className="absolute top-[0px] left-[0px] w-[43.06px] h-[31.84px]">
    //                   <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-[42.71px] h-[31.84px]" />
    //                   <img
    //                     className="absolute top-[0px] left-[0.36px] rounded-[22px] w-[42.71px] h-[31.66px] object-cover"
    //                     alt=""
    //                     src="image-12@2x.png"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="absolute top-[200.77px] left-[26.21px] w-[90.27px] h-[15.83px]">
    //           <div className="absolute top-[0px] left-[30.09px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[60.18px] h-[15.83px]">
    //             Design
    //           </div>
    //           <div className="absolute top-[0.72px] left-[0px] w-[20.38px] h-[15.11px]">
    //             <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-[9.71px] h-[7.2px] border-[1px] border-solid border-gainsboro-100" />
    //             <div className="absolute top-[7.92px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-[9.71px] h-[7.2px] border-[1px] border-solid border-gainsboro-100" />
    //             <div className="absolute top-[7.92px] left-[10.68px] rounded-sm bg-gainsboro-200 box-border w-[9.71px] h-[7.2px] border-[1px] border-solid border-gainsboro-100" />
    //             <div className="absolute top-[0px] left-[10.68px] rounded-sm bg-gainsboro-200 box-border w-[9.71px] h-[7.2px] border-[1px] border-solid border-gainsboro-100" />
    //           </div>
    //         </div>
    //         <div className="absolute top-[200.77px] left-[268.38px] w-[93.18px] h-[20.15px]">
    //           <div className="absolute top-[1.44px] left-[33px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[60.18px] h-[15.83px]">
    //             3 Month
    //           </div>
    //           <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100 inline-block w-[23.29px] h-[20.15px]">
    //             
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <img
    //     className="absolute top-[1043px] left-[1230px] rounded-xl w-[99px] h-[108px] object-cover"
    //     alt=""
    //     src="https://cdn.alsacreations.net/xmedia/doc/full/php-logo.png"
    //   />
    //   <div className="absolute top-[1238px] left-[906px] w-[526px] h-[50px]">
    //     <div className="absolute top-[0px] left-[184px] rounded-81xl bg-dodgerblue w-[315px] h-[15px]" />
    //     <div className="absolute top-[6px] left-[370px] rounded-[200px] bg-cornflowerblue [filter:blur(91px)] w-[60px] h-[60px]" />
    //   </div>
    //   <div className="absolute top-[1233px] left-[1292px] rounded-81xl bg-steelblue w-[138px] h-5" />
    //   <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500  left-[1150px] top-[1200px]">
    //     <CardBody className="justify-center items-center pb-0">
    //       <CircularProgress
    //         classNames={{
    //           svg: "w-36 h-36 drop-shadow-md",
    //           indicator: "stroke-white",
    //           track: "stroke-white/10",
    //           value: "text-3xl font-semibold text-white top-[80px] left-[50px]",
    //         }}
    //         value={70}
    //         strokeWidth={4}
    //         showValueLabel={true}
    //       />
    //     </CardBody>
    //     <CardFooter className="justify-center items-center pt-0 ">
    //       <Chip
    //         classNames={{
    //           base: "border-1 border-white/30 ",
    //           content: "text-white/90 text-small font-semibold ",
    //         }}
    //         variant="bordered"
    //       >
    //         2800 Data points
    //       </Chip>
    //     </CardFooter>
    //   </Card>
    //   <div className="absolute top-[908px] left-[469px] text-23xl font-medium font-dm-sans text-black">
    //     <span className="relative inline-block">
    //       Courses
    //       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
    //       <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-1"></div>
    //     </span>
    //   </div>

    //   <div className="absolute top-0 left-[980px] transform -translate-x-1/2 w-2 top-[920px] h-[800px] bg-gradient-to-b from-blue-500 to-pink-500 top-[500px]"></div>
    //   <div className="absolute top-1/2 left-[980px]  transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500"></div>
    //   <div className="absolute top-[906px] left-[1140px] text-23xl font-medium font-dm-sans text-black">
    //     <span className="relative inline-block">
    //       Languages
    //       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
    //       <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-2"></div>
    //     </span>
    //   </div>
    // </div>

    <div className="w-full relative rounded-xl bg-color-gray-10 h-[933px] flex flex-row items-center justify-start gap-[32px] text-left text-base text-color-gray-100 font-inter">
      <div className="self-stretch w-60 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-color-gray-10 shadow-[0px_14px_42px_rgba(8,_15,_52,_0.06)] flex flex-col items-center justify-between p-8 box-border text-color-gray-90">
        <div className="w-[146px] flex flex-col items-center justify-start gap-[48px]">
          <div className="w-[146px] flex flex-row items-center justify-start gap-[9px]">
            <div className="w-10 rounded-41xl bg-purple h-10 flex flex-row items-center justify-center p-1.5 box-border">
              <img className="w-5 relative h-5" alt="" src="/star-6.svg" />
            </div>
            <div className="self-stretch flex-1 relative uppercase font-extrabold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#702dff,_#7550fb_29.73%,_#4a3aff_70.74%,_#4a3aff_96.19%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center">
              cOURSUE
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-start py-2 px-0">
              <div className="flex-1 relative uppercase font-semibold">
                OVERVIEW
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[8px] text-color-gray-100">
              <div className="self-stretch rounded-21xl bg-color-gray-10 flex flex-row items-center justify-start py-2 px-0 gap-[12px] text-purple">
                <img
                  className="w-4 relative h-4"
                  alt=""
                  src="/vuesaxlinearhome.svg"
                />
                <div className="flex-1 relative font-medium">Dashboard</div>
              </div>
              <div className="self-stretch rounded-21xl flex flex-row items-center justify-start py-2 px-0 gap-[12px]">
                <img
                  className="w-4 relative h-4"
                  alt=""
                  src="/vuesaxlineardirectinbox.svg"
                />
                <div className="flex-1 relative font-medium">Inbox</div>
              </div>
              <div className="self-stretch rounded-21xl flex flex-row items-center justify-start py-2 px-0 gap-[12px]">
                <img
                  className="w-4 relative h-4"
                  alt=""
                  src="/vuesaxlinearfolderopen.svg"
                />
                <div className="flex-1 relative font-medium">Lesson</div>
              </div>
              <div className="self-stretch rounded-21xl flex flex-row items-center justify-start py-2 px-0 gap-[12px]">
                <img
                  className="w-4 relative h-4"
                  alt=""
                  src="/vuesaxlineartasksquare.svg"
                />
                <div className="flex-1 relative font-medium">Task</div>
              </div>
              <div className="self-stretch rounded-21xl flex flex-row items-center justify-start py-2 px-0 gap-[12px]">
                <img
                  className="w-4 relative h-4"
                  alt=""
                  src="/vuesaxlinearpeople.svg"
                />
                <div className="flex-1 relative font-medium">Group</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-start py-2 px-0">
              <div className="flex-1 relative uppercase font-semibold">
                FRIENDS
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[20px] text-sm text-color-gray-100">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="w-6 relative h-6 object-cover"
                    alt=""
                    src="/mask-group@2xx.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch relative capitalize font-medium">
                      Prashant
                    </div>
                    <div className="self-stretch relative text-5xs capitalize">
                      software Developer
                    </div>
                  </div>
                  <div className="rounded-lg bg-purple hidden flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                    <div className="relative capitalize font-medium">
                      Follow
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="w-6 relative h-6 object-cover"
                    alt=""
                    src="/mask-group@2xx.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch relative capitalize font-medium">
                      Prashant
                    </div>
                    <div className="self-stretch relative text-5xs capitalize">
                      software Developer
                    </div>
                  </div>
                  <div className="rounded-lg bg-purple hidden flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                    <div className="relative capitalize font-medium">
                      Follow
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="w-6 relative h-6 object-cover"
                    alt=""
                    src="/mask-group@2xx.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch relative capitalize font-medium">
                      Prashant
                    </div>
                    <div className="self-stretch relative text-5xs capitalize">
                      software Developer
                    </div>
                  </div>
                  <div className="rounded-lg bg-purple hidden flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                    <div className="relative capitalize font-medium">
                      Follow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[146px] flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative uppercase font-semibold">
              SETTINGS
            </div>
          </div>
          <div className="self-stretch rounded-21xl flex flex-row items-center justify-start py-2 px-0 gap-[12px] text-color-gray-100">
            <img
              className="w-4 relative h-4"
              alt=""
              src="/vuesaxlinearsetting2.svg"
            />
            <div className="flex-1 relative font-medium">Settings</div>
          </div>
          <div className="self-stretch rounded-21xl flex flex-row items-center justify-start py-2 px-0 gap-[12px] text-crimson">
            <img
              className="w-4 relative h-4"
              alt=""
              src="/vuesaxlinearlogout.svg"
            />
            <div className="flex-1 relative font-medium">Logout</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-center justify-start pt-5 px-0 pb-0 gap-[24px] text-xs">
        <div className="self-stretch flex flex-row items-start justify-center gap-[12px] text-color-gray-60">
          <div className="flex-1 rounded-xl bg-color-gray-10 flex flex-row items-center justify-center py-5 px-4 gap-[10px] border-[1px] border-solid border-lightgray-100">
            <img
              className="w-4 relative h-4"
              alt=""
              src="/vuesaxlinearsearchnormal.svg"
            />
            <div className="self-stretch flex-1 relative font-medium flex items-center">
              Search your course here....
            </div>
          </div>
          <div className="self-stretch w-14 rounded-31xl flex flex-row items-center justify-center p-3 box-border min-w-[40px]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vuesaxlinearfilter.svg"
            />
          </div>
        </div>
        <div className="self-stretch relative rounded-xl bg-purple h-[181px] overflow-hidden shrink-0 text-color-gray-10">
          <img
            className="absolute h-[calc(100%_-_101px)] top-[45px] right-[77px] bottom-[56px] max-h-full w-20"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="absolute h-[calc(100%_-_101px)] top-[93px] right-[7px] bottom-[8px] max-h-full w-20"
            alt=""
            src="/star-4.svg"
          />
          <img
            className="absolute h-[calc(100%_-_63px)] top-[122px] right-[148px] bottom-[-59px] max-h-full w-20"
            alt=""
            src="/star-5.svg"
          />
          <img
            className="absolute h-[calc(100%_-_63px)] top-[-59px] right-[26px] bottom-[122px] max-h-full w-[61px]"
            alt=""
            src="/star-2.svg"
          />
          <img
            className="absolute h-[calc(100%_-_121px)] top-[20px] right-[157px] bottom-[101px] max-h-full w-[61px]"
            alt=""
            src="/star-3.svg"
          />
          <div className="absolute h-[calc(100%_-_40px)] top-[20px] bottom-[20px] left-[24px] w-[328px]">
            <div className="absolute top-[31px] left-[0px] text-[24px] font-semibold whitespace-pre-wrap">
              <p className="m-0">Sharpen Your Skills With</p>
              <p className="m-0">Professional Online Courses</p>
            </div>
            <div className="absolute top-[0px] left-[0px] uppercase">
              Online Course
            </div>
            <div className="absolute h-[calc(100%_-_105px)] top-[105px] bottom-[0px] left-[0px] rounded-21xl bg-color-gray-100 flex flex-row items-center justify-start py-2 px-3 box-border gap-[12px] text-right">
              <div className="relative font-medium">Join Now</div>
              <div className="w-5 rounded-31xl bg-color-gray-10 h-5 flex flex-row items-center justify-center p-1.5 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vuesaxlinearplay.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[13px] text-color-gray-80">
          <div className="flex-1 rounded-xl bg-color-gray-10 shadow-[0px_14px_42px_rgba(8,_15,_52,_0.06)] flex flex-row items-center justify-center p-3 gap-[17px]">
            <div className="rounded-31xl bg-blueviolet flex flex-row items-center justify-center p-3">
              <img
                className="w-4 relative h-4"
                alt=""
                src="/vuesaxlinearnotification.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative">2/8 Watched</div>
              <div className="self-stretch relative font-semibold text-color-gray-100">
                Product Design
              </div>
            </div>
            <img
              className="w-6 relative h-6 object-contain"
              alt=""
              src="/vuesaxlinearmore@2x.png"
            />
          </div>
          <div className="flex-1 rounded-xl bg-color-gray-10 shadow-[0px_14px_42px_rgba(8,_15,_52,_0.06)] flex flex-row items-center justify-center p-3 gap-[17px]">
            <div className="rounded-31xl bg-blueviolet flex flex-row items-center justify-center p-3">
              <img
                className="w-4 relative h-4"
                alt=""
                src="/vuesaxlinearnotification.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative">2/8 Watched</div>
              <div className="self-stretch relative font-semibold text-color-gray-100">
                Product Design
              </div>
            </div>
            <img
              className="w-6 relative h-6 object-contain"
              alt=""
              src="/vuesaxlinearmore@2x.png"
            />
          </div>
          <div className="flex-1 rounded-xl bg-color-gray-10 shadow-[0px_14px_42px_rgba(8,_15,_52,_0.06)] flex flex-row items-center justify-center p-3 gap-[17px]">
            <div className="rounded-31xl bg-blueviolet flex flex-row items-center justify-center p-3">
              <img
                className="w-4 relative h-4"
                alt=""
                src="/vuesaxlinearnotification.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative">2/8 Watched</div>
              <div className="self-stretch relative font-semibold text-color-gray-100">
                Product Design
              </div>
            </div>
            <img
              className="w-6 relative h-6 object-contain"
              alt=""
              src="/vuesaxlinearmore@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[20px] text-base">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="self-stretch flex-1 relative capitalize font-medium flex items-center">
              Continue watching
            </div>
            <div className="flex flex-row items-center justify-end gap-[12px]">
              <div className="w-6 rounded-31xl box-border h-6 flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-color-gray-60">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vuesaxlineararrowleft.svg"
                />
              </div>
              <div className="w-6 rounded-31xl box-border h-6 flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-color-gray-60">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vuesaxlineararrowright.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[18px] text-5xs">
            <div className="flex-1 rounded-xl bg-color-gray-10 shadow-[0px_14px_42px_rgba(8,_15,_52,_0.06)] flex flex-col items-start justify-center p-3 relative gap-[10px]">
              <img
                className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[113px] shrink-0 object-cover z-[0]"
                alt=""
                src="/unsplashqq9lains6ti@2x.png"
              />
              <div className="rounded-lg bg-blueviolet h-[15px] flex flex-row items-center justify-center p-3 box-border z-[1] text-purple">
                <div className="relative uppercase">Frontend</div>
              </div>
              <div className="self-stretch relative text-sm capitalize font-medium z-[2]">
                <p className="m-0">{`Beginner’s Guide to becoming a `}</p>
                <p className="m-0">professional frontend developer</p>
              </div>
              <div className="self-stretch relative h-1.5 z-[3]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl bg-gainsboro" />
                  <div className="absolute h-full w-[51.06%] top-[0%] right-[48.94%] bottom-[0%] left-[0%] rounded-31xl bg-purple" />
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-xl flex flex-row items-center justify-start gap-[8px] z-[4] text-3xs">
                <img
                  className="w-6 relative h-6 object-cover"
                  alt=""
                  src="/mask-group@2xx.png"
                />
                <div className="flex-1 bg-color-gray-10 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative capitalize font-medium">
                    Prashant Kumar singh
                  </div>
                  <div className="self-stretch relative text-5xs capitalize">
                    software Developer
                  </div>
                </div>
              </div>
              <div className="w-5 my-0 mx-[!important] absolute top-[22px] right-[22px] rounded-31xl bg-lightgray-200 h-5 flex flex-row items-center justify-center p-1.5 box-border z-[5]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-color-gray-10 shadow-[0px_14px_42px_rgba(8,_15,_52,_0.06)] flex flex-col items-start justify-center p-3 relative gap-[10px]">
              <img
                className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[113px] shrink-0 object-cover z-[0]"
                alt=""
                src="/unsplashqq9lains6ti@2x.png"
              />
              <div className="rounded-lg bg-blueviolet h-[15px] flex flex-row items-center justify-center p-3 box-border z-[1] text-purple">
                <div className="relative uppercase">Frontend</div>
              </div>
              <div className="self-stretch relative text-sm capitalize font-medium z-[2]">
                <p className="m-0">{`Beginner’s Guide to becoming a `}</p>
                <p className="m-0">professional frontend developer</p>
              </div>
              <div className="self-stretch relative h-1.5 z-[3]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl bg-gainsboro" />
                  <div className="absolute h-full w-[51.06%] top-[0%] right-[48.94%] bottom-[0%] left-[0%] rounded-31xl bg-purple" />
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-xl flex flex-row items-center justify-start gap-[8px] z-[4] text-3xs">
                <img
                  className="w-6 relative h-6 object-cover"
                  alt=""
                  src="/mask-group@2xx.png"
                />
                <div className="flex-1 bg-color-gray-10 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative capitalize font-medium">
                    Prashant Kumar singh
                  </div>
                  <div className="self-stretch relative text-5xs capitalize">
                    software Developer
                  </div>
                </div>
              </div>
              <div className="w-5 my-0 mx-[!important] absolute top-[22px] right-[22px] rounded-31xl bg-lightgray-200 h-5 flex flex-row items-center justify-center p-1.5 box-border z-[5]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-color-gray-10 shadow-[0px_14px_42px_rgba(8,_15,_52,_0.06)] flex flex-col items-start justify-center p-3 relative gap-[10px]">
              <img
                className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[113px] shrink-0 object-cover z-[0]"
                alt=""
                src="/unsplashqq9lains6ti@2x.png"
              />
              <div className="rounded-lg bg-blueviolet h-[15px] flex flex-row items-center justify-center p-3 box-border z-[1] text-purple">
                <div className="relative uppercase">Frontend</div>
              </div>
              <div className="self-stretch relative text-sm capitalize font-medium z-[2]">
                <p className="m-0">{`Beginner’s Guide to becoming a `}</p>
                <p className="m-0">professional frontend developer</p>
              </div>
              <div className="self-stretch relative h-1.5 z-[3]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl bg-gainsboro" />
                  <div className="absolute h-full w-[51.06%] top-[0%] right-[48.94%] bottom-[0%] left-[0%] rounded-31xl bg-purple" />
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-xl flex flex-row items-center justify-start gap-[8px] z-[4] text-3xs">
                <img
                  className="w-6 relative h-6 object-cover"
                  alt=""
                  src="/mask-group@2xx.png"
                />
                <div className="flex-1 bg-color-gray-10 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative capitalize font-medium">
                    Prashant Kumar singh
                  </div>
                  <div className="self-stretch relative text-5xs capitalize">
                    software Developer
                  </div>
                </div>
              </div>
              <div className="w-5 my-0 mx-[!important] absolute top-[22px] right-[22px] rounded-31xl bg-lightgray-200 h-5 flex flex-row items-center justify-center p-1.5 box-border z-[5]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[20px] text-base">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="self-stretch flex-1 relative capitalize font-medium flex items-center">
              Your Mentor
            </div>
            <div className="flex flex-row items-center justify-end text-right text-xs text-royalblue-100">
              <div className="relative [text-decoration:underline] capitalize">
                See All
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-t-xl rounded-b-none bg-color-gray-10 shadow-[0px_14px_42px_rgba(8,_15,_52,_0.06)] flex flex-col items-center justify-start py-5 px-6 gap-[24px] text-3xs">
            <div className="self-stretch flex flex-row items-center justify-center gap-[56px] text-center text-5xs text-color-gray-90">
              <div className="flex-1 relative uppercase font-semibold text-left">{`instructor name & date`}</div>
              <div className="relative uppercase font-semibold">
                COURSE TYPE
              </div>
              <div className="flex-1 relative uppercase font-semibold">
                COURSE TITLE
              </div>
              <div className="w-20 relative uppercase font-semibold flex items-center justify-center shrink-0">
                ACTIONS
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[56px]">
              <div className="flex-1 flex flex-row items-center justify-center gap-[8px] text-sm">
                <img
                  className="w-6 relative h-6 object-cover"
                  alt=""
                  src="/mask-group@2xx.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative capitalize font-medium">
                    Prashant Kumar Singh
                  </div>
                  <div className="self-stretch relative text-2xs capitalize text-color-gray-80">
                    25/2/2023
                  </div>
                </div>
                <div className="rounded-lg bg-purple hidden flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                  <div className="relative capitalize font-medium">Follow</div>
                </div>
              </div>
              <div className="rounded-lg bg-blueviolet h-[15px] flex flex-row items-center justify-center p-3 box-border text-purple">
                <div className="relative uppercase">Frontend</div>
              </div>
              <div className="flex-1 relative text-xs capitalize text-center">
                Understanding Concept of React
              </div>
              <div className="rounded-lg bg-royalblue-200 h-[15px] flex flex-row items-center justify-center p-3 box-border text-royalblue-100">
                <div className="relative uppercase">SHOW DETAILS</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[56px]">
              <div className="flex-1 flex flex-row items-center justify-center gap-[8px] text-sm">
                <img
                  className="w-6 relative h-6 object-cover"
                  alt=""
                  src="/mask-group@2xx.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative capitalize font-medium">
                    ravi Kumar
                  </div>
                  <div className="self-stretch relative text-2xs capitalize text-color-gray-80">
                    25/2/2023
                  </div>
                </div>
                <div className="rounded-lg bg-purple hidden flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                  <div className="relative capitalize font-medium">Follow</div>
                </div>
              </div>
              <div className="rounded-lg bg-blueviolet h-[15px] flex flex-row items-center justify-center p-3 box-border text-purple">
                <div className="relative uppercase">Frontend</div>
              </div>
              <div className="flex-1 relative text-xs capitalize text-center">
                Understanding Concept of React
              </div>
              <div className="rounded-lg bg-royalblue-200 h-[15px] flex flex-row items-center justify-center p-3 box-border text-royalblue-100">
                <div className="relative uppercase">SHOW DETAILS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-color-gray-10 shadow-[0px_14px_42px_rgba(8,_15,_52,_0.06)] flex flex-col items-center justify-start py-8 px-6 gap-[36px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="self-stretch w-[94px] relative capitalize font-medium flex items-center shrink-0">
            Your Profie
          </div>
          <img
            className="w-5 relative h-5 object-contain"
            alt=""
            src="/vuesaxlinearmore@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 gap-[16px] text-center">
          <div className="flex flex-row items-center justify-center relative">
            <img
              className="w-[100px] relative h-[100px] z-[0]"
              alt=""
              src="/group-33.svg"
            />
            <img
              className="w-[72px] absolute my-0 mx-[!important] top-[14px] left-[14px] h-[72px] object-cover z-[1]"
              alt=""
              src="/mask-group@2xx.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <div className="self-stretch relative capitalize font-medium">
              good Morning Prashant
            </div>
            <div className="self-stretch relative text-xs capitalize font-medium text-color-gray-70">
              continue your journey and achieve Your Target
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-end gap-[24px]">
                <div className="rounded-31xl flex flex-row items-center justify-center p-3 border-[1px] border-solid border-color-gray-60">
                  <img
                    className="w-4 relative h-4"
                    alt=""
                    src="/vuesaxlinearnotification.svg"
                  />
                </div>
                <div className="rounded-31xl flex flex-row items-center justify-center p-3 border-[1px] border-solid border-color-gray-60">
                  <img
                    className="w-4 relative h-4"
                    alt=""
                    src="/vuesaxlineardirectnormal.svg"
                  />
                </div>
                <div className="rounded-31xl flex flex-row items-center justify-center p-3 border-[1px] border-solid border-color-gray-60">
                  <img
                    className="w-4 relative h-4"
                    alt=""
                    src="/vuesaxlineardirectnormal.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[204px] h-[116px] flex flex-row items-end justify-center gap-[12px]">
          <div className="flex-1 relative h-[40.02px]">
            <div className="absolute top-[21.47px] left-[0px] bg-system-colors-magenta-400 w-[31.2px] h-[18.56px]" />
            <div className="absolute top-[12.19px] left-[0px] bg-system-colors-magenta-300 w-[31.2px] h-[9.28px]" />
            <div className="absolute top-[4.69px] left-[0px] bg-system-colors-magenta-200 w-[31.2px] h-[7.49px]" />
            <div className="absolute top-[0px] left-[0px] rounded-t rounded-b-none bg-system-colors-magenta-100 w-[31.2px] h-[4.69px]" />
          </div>
          <div className="flex-1 relative h-[71.7px]">
            <div className="absolute top-[40.56px] left-[0px] bg-system-colors-magenta-400 w-[31.2px] h-[31.15px]" />
            <div className="absolute top-[25.43px] left-[0px] bg-system-colors-magenta-300 w-[31.2px] h-[15.13px]" />
            <div className="absolute top-[8.28px] left-[0px] bg-system-colors-magenta-200 w-[31.2px] h-[17.15px]" />
            <div className="absolute top-[0px] left-[0px] rounded-t rounded-b-none bg-system-colors-magenta-100 w-[31.2px] h-[8.28px]" />
          </div>
          <div className="flex-1 relative h-[91.27px]">
            <div className="absolute top-[51.07px] left-[0px] bg-system-colors-magenta-400 w-[31.2px] h-[40.21px]" />
            <div className="absolute top-[32.4px] left-[0px] bg-system-colors-magenta-300 w-[31.2px] h-[18.67px]" />
            <div className="absolute top-[11.39px] left-[0px] bg-system-colors-magenta-200 w-[31.2px] h-[21.01px]" />
            <div className="absolute top-[0px] left-[0px] rounded-t rounded-b-none bg-system-colors-magenta-100 w-[31.2px] h-[11.39px]" />
          </div>
          <div className="flex-1 relative h-[108.19px]">
            <div className="absolute top-[61.44px] left-[0px] bg-system-colors-magenta-400 w-[31.2px] h-[46.75px]" />
            <div className="absolute top-[37.59px] left-[0px] bg-system-colors-magenta-300 w-[31.2px] h-[23.85px]" />
            <div className="absolute top-[11.39px] left-[0px] bg-system-colors-magenta-200 w-[31.2px] h-[26.2px]" />
            <div className="absolute top-[0px] left-[0px] rounded-t rounded-b-none bg-system-colors-magenta-100 w-[31.2px] h-[11.39px]" />
          </div>
          <div className="flex-1 relative h-[94.96px]">
            <div className="absolute top-[52.84px] left-[0px] bg-system-colors-magenta-400 w-[31.2px] h-[42.12px]" />
            <div className="absolute top-[32.54px] left-[0px] bg-system-colors-magenta-300 w-[31.2px] h-[20.29px]" />
            <div className="absolute top-[11.35px] left-[0px] bg-system-colors-magenta-200 w-[31.2px] h-[21.2px]" />
            <div className="absolute top-[0px] left-[0px] rounded-t rounded-b-none bg-system-colors-magenta-100 w-[31.2px] h-[11.35px]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="w-[230px] flex flex-row items-center justify-between">
            <div className="self-stretch w-[94px] relative capitalize font-medium flex items-center shrink-0">
              Your Mentor
            </div>
            <div className="w-6 rounded-31xl box-border h-6 flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-color-gray-60">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vuesaxlinearadd.svg"
              />
            </div>
          </div>
          <div className="rounded-xl bg-color-gray-10 flex flex-col items-center justify-center py-4 px-3 gap-[16px] text-3xs">
            <div className="w-56 flex flex-row items-center justify-center gap-[8px]">
              <img
                className="w-6 relative h-6 object-cover"
                alt=""
                src="/mask-group@2xx.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative capitalize font-medium">
                  Prashant Kumar singh
                </div>
                <div className="self-stretch relative text-5xs capitalize text-color-gray-80">
                  software Developer
                </div>
              </div>
              <div className="rounded-lg bg-purple flex flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                <div className="relative capitalize font-medium">Follow</div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line-3.svg"
            />
            <div className="w-56 flex flex-row items-center justify-center gap-[8px]">
              <img
                className="w-6 relative h-6 object-cover"
                alt=""
                src="/mask-group@2xx.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative capitalize font-medium">
                  Prashant Kumar singh
                </div>
                <div className="self-stretch relative text-5xs capitalize text-color-gray-80">
                  software Developer
                </div>
              </div>
              <div className="rounded-lg bg-purple flex flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                <div className="relative capitalize font-medium">Follow</div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line-3.svg"
            />
            <div className="w-56 flex flex-row items-center justify-center gap-[8px]">
              <img
                className="w-6 relative h-6 object-cover"
                alt=""
                src="/mask-group@2xx.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative capitalize font-medium">
                  Prashant Kumar singh
                </div>
                <div className="self-stretch relative text-5xs capitalize text-color-gray-80">
                  software Developer
                </div>
              </div>
              <div className="rounded-lg bg-purple flex flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                <div className="relative capitalize font-medium">Follow</div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line-3.svg"
            />
            <div className="w-56 flex flex-row items-center justify-center gap-[8px]">
              <img
                className="w-6 relative h-6 object-cover"
                alt=""
                src="/mask-group@2xx.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative capitalize font-medium">
                  Prashant Kumar singh
                </div>
                <div className="self-stretch relative text-5xs capitalize text-color-gray-80">
                  software Developer
                </div>
              </div>
              <div className="rounded-lg bg-purple flex flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                <div className="relative capitalize font-medium">Follow</div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line-3.svg"
            />
            <div className="w-56 flex flex-row items-center justify-center gap-[8px]">
              <img
                className="w-6 relative h-6 object-cover"
                alt=""
                src="/mask-group@2xx.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative capitalize font-medium">
                  Prashant Kumar singh
                </div>
                <div className="self-stretch relative text-5xs capitalize text-color-gray-80">
                  software Developer
                </div>
              </div>
              <div className="rounded-lg bg-purple flex flex-row items-center justify-center py-1 px-2 text-center text-5xs text-color-gray-10">
                <div className="relative capitalize font-medium">Follow</div>
              </div>
            </div>
          </div>
          <div className="w-[226px] rounded-21xl bg-blueviolet flex flex-row items-center justify-center py-2 px-3 box-border gap-[12px] text-right text-xs text-purple">
            <div className="relative font-medium">See All</div>
            <div className="w-5 rounded-31xl bg-color-gray-10 h-5 hidden flex-row items-center justify-center p-1.5 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vuesaxlinearplay.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeakUserSettings;
