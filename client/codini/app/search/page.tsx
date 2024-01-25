"use client"
import type { NextPage } from "next";
import React , {useEffect,useState}from 'react'
interface TeacherItem {
  id: number;
  name: string;
  description: string;
  image:string,
}

interface LanguageItem {
  id: number;
  name: string;
  description: string;
  image:string;
}


const Search: NextPage = () =>{


  const [teacherData, setTeacherData] = useState<TeacherItem[]>([]);
  const [languageData, setLanguageData] = useState<LanguageItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredTeacherData, setFilteredTeacherData] = useState<TeacherItem[]>([]);
  const [filteredLanguageData, setFilteredLanguageData] = useState<LanguageItem[]>([]);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  useEffect(() => {
    
    fetch('http://127.0.0.7:8000/teacher/getAll')
      .then(response => response.json())
      .then(data => setTeacherData(data))
      .catch(error => console.error('Error fetching teacher data:', error));
  }, []);

  useEffect(() => {
   
    fetch('http://127.0.0.7:8000/languages/')
      .then(response => response.json())
      .then(data => setLanguageData(data))
      .catch(error => console.error('Error fetching language data:', error));
  }, []);

  useEffect(() => {
    const filteredResults = teacherData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTeacherData(filteredResults);
  }, [searchQuery, teacherData]);

  useEffect(() => {
   
    const filteredResults = languageData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredLanguageData(filteredResults);
  }, [searchQuery, languageData]);

  return (
    <div className="w-[80%] top-[800px] bg-white h-[5200px] overflow-hidden  text-3xl text-black font-poppins  right-[20px]">
      <div className=" top-[0px] left-[122px] bg-white w-[1967px] h-[6000px] overflow-hidden">
        <div className=" top-[42px] left-[0px] w-[1220px] h-[326px] text-5xl text-gray-100 font-font-awesome-5-free">
          <img
            className="absolute top-[185px] left-[0px] w-[1920px] h-[326px] object-cover"
            alt=""
            src="/rectangle-180@2x.png"
          />
          <div className="absolute top-[220px] left-[298px] w-[1324px] h-[166px]">
            <div className="absolute top-[0px] left-[5px] w-[1319px] h-[73px] text-white font-poppins">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1319px] h-[73px]" />
              <div className="absolute top-[5px] left-[1130.25px] w-[183.16px] h-[63px]">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-lightseagreen w-[183.16px] h-[63px]" />
                <b className="absolute top-[16px] left-[41.32px] inline-block w-[99.4px] h-[31px]">
                  Search
                </b>
              </div>

              <div className="relative">
      <input
        type="text"
        placeholder="Search your favourite course"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        className="text-xl tracking-[0.04em] text-lightslategray-200 text-center inline-block w-[345.11px]"
        style={{ position: 'absolute', top: '21px', left: '34.62px' }}
      />
      {isInputFocused && (
        <div>
            <ul className="bg-white border border-white text-black w-[1300px]" style={{ position: 'absolute', top: '74px', left: '0', zIndex: 1 }}>
  {filteredTeacherData.map(item => (
    <React.Fragment key={item.id}>
      <li className="text-black hover:bg-gray-200 cursor-pointer">{item.name}</li>
    </React.Fragment>
  ))}
</ul>
          <ul className="bg-white border border-white text-black w-[1300px]" style={{ position: 'absolute', top: '74px', left: '0', zIndex: 1 }}>
            {filteredLanguageData.map(item => (
              <li key={item.id} className="text-black hover:bg-gray-200 cursor-pointer">{item.name}</li>
              
            ))}
          </ul>
        </div>
      )}
    </div>

            </div>
            <div className="absolute top-[93px] left-[0px] w-[170px] h-[73px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[170px] h-[73px]" />
          
              <div className="absolute top-[18px] left-[18px] tracking-[0.04em] font-medium font-poppins text-center inline-block w-[109px]">
               
Javascript              </div>
            </div>
            <div className="absolute top-[93px] left-[190px] w-[170px] h-[73px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[170px] h-[73px]" />
          
              <div className="absolute top-[18px] left-[18px] tracking-[0.04em] font-medium font-poppins text-center inline-block w-[109px]">
                Python
              </div>
            </div>
            <div className="absolute top-[93px] left-[380px] w-48 h-[73px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-48 h-[73px]" />
              <div className="absolute top-[16px] left-[18.28px] w-[156.99px] h-9">
              
                <div className="absolute top-[0px] left-[0px] tracking-[0.04em] font-medium font-poppins text-center inline-block w-[128.75px]">
                  React
                </div>
              </div>
            </div>
            <div className="absolute top-[93px] left-[592px] w-[209px] h-[73px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[209px] h-[73px]" />
              <div className="absolute top-[18px] left-[18.99px] w-[176.76px] h-9">
               
                <div className="absolute top-[0px] left-[0px] tracking-[0.04em] font-medium font-poppins text-center inline-block w-[143.41px]">
                  Java
                </div>
              </div>
            </div>
            <div className="absolute top-[93px] left-[821px] w-[216px] h-[73px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[216px] h-[73px]" />
             
              <div className="absolute top-[18px] left-[18px] tracking-[0.04em] font-medium font-poppins text-center inline-block w-[153px]">
                Next js
              </div>
            </div>
            <div className="absolute top-[93px] left-[1057px] w-[267px] h-[73px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[267px] h-[73px]" />
              <div className="absolute top-[18px] left-[18.91px] w-[235.08px] h-9">
               
                <div className="absolute top-[0px] left-[0px] tracking-[0.04em] font-medium font-poppins text-center inline-block w-[197.16px]">
                  Learning Type
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[3416px] left-[59px] w-[1672px] h-[1025px] text-lg text-slategray-100">
          <div className="absolute top-[0px] left-[29px] w-[1643px] h-[45px] text-11xl text-black">
            <div className="absolute top-[0px] left-[0px] tracking-[0.02em] font-medium">{`Teachers `}</div>
            <b className="absolute top-[8px] left-[1576px] text-xl text-lightseagreen">
              See all
            </b>
          </div>
          <div className="absolute top-[95px] left-[0px] w-[1670px] h-[461px]">
            <div className="absolute top-[20px] left-[0px] w-[516px] h-[441px]">
              <div className="absolute top-[138px] left-[0px] bg-white shadow-[2px_2px_10px_2px_rgba(0,_0,_0,_0.25)] w-[516px] h-[303px]" />
              <img
                className="absolute top-[0px] left-[120px] w-[278px] h-[277px] object-cover"
                alt=""
                src="teacher3.png"
              />
              <div className="absolute top-[348px] left-[69px] tracking-[0.02em] leading-[180%] inline-block w-[379px] h-[63px]">
                FrontEnd developer
              </div>
              <div className="absolute top-[299px] left-[177px] text-5xl font-medium text-gray-100 inline-block w-[164px] h-7">
                Jane Cooper
              </div>
            </div>
            <div className="absolute top-[0px] left-[590px] w-[516px] h-[441px]">
              <div className="absolute top-[138px] left-[0px] bg-white shadow-[2px_2px_10px_2px_rgba(0,_0,_0,_0.25)] w-[516px] h-[303px]" />
              <img
                className="absolute top-[0px] left-[120px] w-[278px] h-[277px] object-cover"
                alt=""
                src="teacher4.png"
              />
              <div className="absolute top-[348px] left-[69px] tracking-[0.02em] leading-[180%] inline-block w-[379px] h-[63px]">
                Backend developer
              </div>
              <div className="absolute top-[299px] left-[219px] text-5xl font-medium text-gray-100 inline-block w-[76px] h-7">
                Adam
              </div>
            </div>
            <div className="absolute top-[0px] left-[1154px] w-[516px] h-[441px]">
              <div className="absolute top-[138px] left-[0px] bg-white shadow-[2px_2px_10px_2px_rgba(0,_0,_0,_0.25)] w-[516px] h-[303px]" />
              <img
                className="absolute top-[0px] left-[120px] w-[278px] h-[277px] object-cover"
                alt=""
                src="ellipse-126@2x.png"
              />
              <div className="absolute top-[348px] left-[69px] tracking-[0.02em] leading-[180%] inline-block w-[379px] h-[63px]">
                Design structure
              </div>
              <div className="absolute top-[297px] left-[215px] text-5xl font-medium text-gray-100 inline-block w-[105px] h-7">
                Tomara
              </div>
            </div>
          </div>
          <div className="absolute top-[584px] left-[26px] w-[1644px] h-[441px]">
            <div className="absolute top-[0px] left-[0px] w-[516px] h-[441px]">
              <div className="absolute top-[138px] left-[0px] bg-white shadow-[2px_2px_10px_2px_rgba(0,_0,_0,_0.25)] w-[516px] h-[303px]" />
              <img
                className="absolute top-[0px] left-[120px] w-[278px] h-[277px] object-cover"
                alt=""
                src="/image-10@2x.png"
              />
              <div className="absolute top-[348px] left-[69px] tracking-[0.02em] leading-[180%] inline-block w-[379px] h-[63px]">
                Fullstack js develloper
              </div>
              <div className="absolute top-[299px] left-[177px] text-5xl font-medium text-gray-100 inline-block w-[164px] h-7">
                Jane Cooper
              </div>
            </div>
            <div className="absolute top-[0px] left-[564px] w-[516px] h-[441px]">
              <div className="absolute top-[138px] left-[0px] bg-white shadow-[2px_2px_10px_2px_rgba(0,_0,_0,_0.25)] w-[516px] h-[303px]" />
              <img
                className="absolute top-[0px] left-[120px] w-[278px] h-[277px] object-cover"
                alt=""
                src="ellipse-124@2x.png"
              />
              <div className="absolute top-[348px] left-[69px] tracking-[0.02em] leading-[180%] inline-block w-[379px] h-[63px]">
                Senior js developer
              </div>
              <div className="absolute top-[299px] left-[177px] text-5xl font-medium text-gray-100 inline-block w-[164px] h-7">
                Jane Cooper
              </div>
            </div>
            <div className="absolute top-[0px] left-[1128px] w-[516px] h-[441px]">
              <div className="absolute top-[138px] left-[0px] bg-white shadow-[2px_2px_10px_2px_rgba(0,_0,_0,_0.25)] w-[516px] h-[303px]" />
              <img
                className="absolute top-[0px] left-[120px] w-[278px] h-[277px] object-cover"
                alt=""
                src="ellipse-123@2x.png"
              />
              <div className="absolute top-[348px] left-[69px] tracking-[0.02em] leading-[180%] inline-block w-[379px] h-[63px]">
                Junior Js developer
              </div>
              <div className="absolute top-[299px] left-[177px] text-5xl font-medium text-gray-100 inline-block w-[164px] h-7">
                Jane Cooper
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[810px] left-[0px] w-[1270px] h-[1296px] text-sm text-slategray-100">
          <div className="absolute top-[0px] left-[-10px] w-[882px] h-[1296px]">
            <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-100">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <div className="absolute top-[0px] left-[0px] w-[334.02px] h-[238.66px]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-xl w-[334px] h-[238.66px] object-cover"
                          alt=""
                          src="https://i.ytimg.com/vi/o1IaduQICO0/maxresdefault.jpg"
                        />
                        <div className="absolute top-[0px] left-[0.02px] rounded-xl bg-darkslateblue w-[334px] h-[238.66px] opacity-[0.1]" />
                      </div>
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        The complete Javascript course 2024{" "}
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        This JavaScript course covers fundamental concepts such
                        as variables, functions.
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Lina
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-200 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[51px] h-[19px]">
                        $80
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Javscript
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[679px] left-[0px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-100">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/1592289020495421231ab-786d-4a4a-9074-1ce0fa1730b2.jpg"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        Python Course 2024
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        This python course covers fundamental concepts such as
                        variables, functions .
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Nada
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-200 items-center w-[42px] h-[19px]">
                        $150
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[51px] h-[19px]">
                        $122
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Python
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[436px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-100">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="https://external-preview.redd.it/raflk1nwWV94jXyRnJMI-DmE2Y6ZsccZwyz4QXzhGbc.jpg?auto=webp&s=3ec2ec98cafcb9d1c121153decfae26cd843dffe"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        React Course 2024
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        Python, JS, & React | Build a Blockchain &
                        Cryptocurrency
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Michaelle
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-200 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[51px] h-[19px]">
                        $65
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="https://www.profilebakery.com/wp-content/uploads/2023/03/AI-Profile-Picture.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  React
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[679px] left-[436px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-100">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="https://th.bing.com/th/id/OIP.oghVkk2PrCkVZgzNHRhGggHaEK?rs=1&pid=ImgDetMain"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        Data Science in Python: Classification Modeling
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        Learn Python for Data Science &amp; Supervised Machine
                        Learning, and build classification models with fun.
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Hedi
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-200 items-center w-[42px] h-[19px]">
                        $154
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[51px] h-[19px]">
                        $75
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="https://media.istockphoto.com/id/1497142422/fr/photo/portrait-photo-en-gros-plan-dun-jeune-entrepreneur-prosp%C3%A8re-dun-investisseur-homme.webp?b=1&s=170667a&w=0&k=20&c=6mAbuPteQodS_6T_vtwt1QHMH8bDoza6zEw54Ya4RmM="
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Data Sience
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[872px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-100">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="https://th.bing.com/th/id/OIP.Lh9pGJru8o4FG1GqEHRnuwHaEK?rs=1&pid=ImgDetMain"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        Redux courses
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        Complete React Developer (w/ Redux, Hooks, GraphQL)
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Sahar
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-200 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[51px] h-[19px]">
                        $74.99
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="image-10@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Redux
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[679px] left-[872px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-100">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="https://th.bing.com/th/id/OIP.o1g5NNXD6trpe5WZtPtPYAHaDt?rs=1&pid=ImgDetMain"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        Typescript courses
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        Boost your JavaScript projects with TypeScript: Learn
                        all about core types
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Sarra
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-200 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[51px] h-[19px]">
                        $20
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="teacher4.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Typescript
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100">
                  
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[1308px] w-[374px] h-[617px] text-5xl text-gray-100">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                  <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                    <img
                      className="absolute top-[0px] left-[0px] w-[334px] h-[238.66px] object-cover"
                      alt=""
                      src="data:image/jpeg;base64,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"
                    />
                    <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                      Next js courses
                    </div>
                    <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                      Boost your JavaScript projects with next js: Learn all
                      about core types
                    </div>
                  </div>
                  <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black">
                    <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                      Mamadou
                    </div>
                    <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-200 items-center w-[42px] h-[19px]">
                      $100
                    </i>
                    <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[51px] h-[19px]">
                      $54
                    </b>
                    <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                      <img
                        className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                        alt=""
                        src="teacher2.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[679px] left-[1308px] w-[374px] h-[617px]">
              <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px] text-5xl text-gray-100">
                <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                  <div className="absolute top-[0px] left-[0px] w-[374px] h-[617px]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_18.829999923706055px_47.08px_rgba(47,_50,_125,_0.1)] w-[374px] h-[617px]" />
                    <div className="absolute top-[20px] left-[20.98px] w-[334.02px] h-[501px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[334px] h-[238.66px] object-cover"
                        alt=""
                        src="https://th.bing.com/th/id/OIP.fotHI5X6-Q0ojxBkYJnIjQHaEK?rs=1&pid=ImgDetMain"
                      />
                      <div className="absolute top-[301px] left-[6.02px] font-medium inline-block w-[324px] h-[77px]">
                        Angular courses
                      </div>
                      <div className="absolute top-[399px] left-[6.02px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[328px] h-[102px]">
                        Boost your Java projects with Angular: Learn all about
                        core types
                      </div>
                    </div>
                    <div className="absolute top-[538px] left-[26.63px] w-[328.37px] h-[44.25px] text-lg text-black">
                      <div className="absolute top-[12.78px] left-[62.15px] tracking-[0.02em] font-medium inline-block w-[51.05px] h-[18.68px]">
                        Mohamed
                      </div>
                      <i className="absolute top-[22px] left-[221.37px] [text-decoration:line-through] tracking-[0.02em] flex font-light text-gray-200 items-center w-[42px] h-[19px]">
                        $100
                      </i>
                      <b className="absolute top-[22px] left-[277.37px] text-5xl tracking-[0.02em] flex text-lightseagreen items-center w-[51px] h-[19px]">
                        $85.4
                      </b>
                      <div className="absolute top-[0px] left-[0px] w-[44.37px] h-[44.25px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-100 w-11 h-[44.25px]" />
                        <img
                          className="absolute top-[0px] left-[0.37px] rounded-3xl w-11 h-11 object-cover"
                          alt=""
                          src="teacher3.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[279px] left-[27px] w-[93px] h-[22px]">
                <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  Angular
                </div>
                <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[279px] left-[259px] w-24 h-7">
                <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                  3 Month
                </div>
                <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[280px] left-[1335px] w-[328px] h-7">
            <div className="absolute top-[0px] left-[0px] w-[93px] h-[22px]">
              <div className="absolute top-[0px] left-[31px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                Next js
              </div>
              <div className="absolute top-[1px] left-[0px] w-[21px] h-[21px]">
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-200 box-border w-2.5 h-2.5 border-[1px] border-solid border-gainsboro-100" />
              </div>
            </div>
            <div className="absolute top-[0px] left-[232px] w-24 h-7">
              <div className="absolute top-[2px] left-[34px] tracking-[0.02em] leading-[180%] font-medium inline-block w-[62px] h-[22px]">
                3 Month
              </div>
              <div className="absolute top-[0px] left-[0px] text-5xl font-font-awesome-5-free text-gainsboro-100">
                
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2170px] left-[-120px] w-[1520px] h-[894px] text-11xl">
          <div className="absolute top-[0px] left-[0px] bg-lightskyblue w-[1920px] h-[894px] opacity-[0.2]" />
          <div className="absolute top-[70px] left-[139px] w-[1644px] h-[744px]">
            <div className="absolute top-[115px] left-[0px] rounded-[40px] bg-white w-[1444px] h-[629px]" />
            <div className="absolute top-[0px] left-[3px] w-[1580px] h-[710px]">
              <div className="absolute top-[0px] left-[10px] tracking-[0.02em] font-medium">
                What our students have to say
              </div>
              <div className="absolute top-[195px] left-[103px] w-[1477px] h-[515px] text-gray-100">
                <img
                  className="absolute top-[0px] left-[0px] w-[522px] h-[515px]"
                  alt=""
                  src="/group-368.svg"
                />
                <b className="absolute top-[53px] left-[635px] inline-block w-[299px] h-8">
                  Savannah Nguyen
                </b>
                <div className="absolute top-[116px] left-[635px] text-5xl font-medium inline-block w-[315px] h-7">
                  tanya.hill@example.com
                </div>
                <div className="absolute top-[163px] left-[635px] text-lg tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[527px] h-[201px]">
                  <p className="m-0">
                    An engaging and knowledgeable teacher with a passion for
                    fostering learning, adept at simplifying complex concepts,
                    and creating an inclusive classroom environment. Proficient
                    in adapting teaching styles to cater to diverse student
                    needs, encouraging critical thinking, and instilling a love
                    for the subject matter.
                  </p>
                </div>
                <img
                  className="absolute top-[102px] left-[1198px] rounded-[50%] w-[79px] h-[79px] object-cover"
                  alt=""
                  src="/ellipse-123@2x.png"
                />
                <img
                  className="absolute top-[310px] left-[1198px] rounded-[50%] w-[79px] h-[79px] object-cover"
                  alt=""
                  src="/ellipse-125@2x.png"
                />
                <img
                  className="absolute top-[206px] left-[1198px] rounded-[50%] w-[79px] h-[79px] object-cover"
                  alt=""
                  src="/ellipse-124@2x.png"
                />
                <img
                  className="absolute top-[414px] left-[1198px] rounded-[50%] w-[79px] h-[79px] object-cover"
                  alt=""
                  src="/ellipse-126@2x.png"
                />
                <img
                  className="absolute top-[395px] left-[656.54px] w-[124.46px] h-[87.92px]"
                  alt=""
                  src="/group-372.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
