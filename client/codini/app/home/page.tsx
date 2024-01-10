"use client"

import type { NextPage } from "next";
import styles from "./index.module.css";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

const HomePage: React.FC = () => {


interface Languages {
  id: number;
  name: string;
  image: string;
}


const [langua, setLangua] = useState<Languages[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchlanguages = await fetch("http://localhost:8000/languages/");
        const langua = await fetchlanguages.json();
        console.log("here",langua);
        
        setLangua(langua);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);



  return (
    
 <div className={styles.homePage}>
      <div className={styles.course}>
        <div className={styles.polygonParent}>
          <img className={styles.groupChild} alt="" src="/polygon-2.svg" />
        </div>
        <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
        <img className={styles.rectangleIcon1} alt="" src="/rectangle.svg" />
        <div className={styles.groupParent}>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild3}
              alt=""
              src="/rectangle-86.svg"
            />
            <img
              className={styles.groupChild4}
              alt=""
              src="/rectangle-87.svg"
            />
            <div className={styles.div}></div>
            <div className={styles.div1}></div>
          </div>
          <div className={styles.welcomeBackReadyForYourNParent}>
            <div className={styles.welcomeBackReady}>
              Welcome back, ready for your next lesson?
            </div>
            <div className={styles.choiceFavouriteCourse}>
              Choice favourite course from top category
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.groupDiv}>
                <div className={styles.groupDiv}>
                  <div className={styles.groupChild5} />
                  <div className={styles.groupParent1}>
                    <div className={styles.rectangleParent1}>
                      <img
                        className={styles.groupChild6}
                        alt=""
                        src="/rectangle-32@2x.png"
                      />
                      <div className={styles.groupChild7} />
                    </div>
                    <div className={styles.awsCertifiedSolutions}>
                      AWS Certified Solutions Architect
                    </div>
                  </div>
                  <div className={styles.lina}>Lina</div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild8} />
                    <img
                      className={styles.image12Icon}
                      alt=""
                      src="/image-12@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild9} />
                  <div className={styles.groupChild10} />
                </div>
                <div className={styles.lesson5Of}>Lesson 5 of 7</div>
              </div>
              <div className={styles.groupParent2}>
                <div className={styles.groupDiv}>
                  <div className={styles.groupChild5} />
                  <div className={styles.groupParent3}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-40@2x.png"
                    />
                    <div className={styles.awsCertifiedSolutions1}>
                      AWS Certified Solutions Architect
                    </div>
                  </div>
                  <div className={styles.lina}>Lina</div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild8} />
                    <img
                      className={styles.image12Icon}
                      alt=""
                      src="/image-12@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild9} />
                  <div className={styles.groupChild10} />
                </div>
                <div className={styles.lesson5Of}>Lesson 5 of 7</div>
              </div>
              <div className={styles.groupParent4}>
                <div className={styles.groupDiv}>
                  <div className={styles.groupChild5} />
                  <div className={styles.groupParent3}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-40@2x.png"
                    />
                    <div className={styles.awsCertifiedSolutions1}>
                      AWS Certified Solutions Architect
                    </div>
                  </div>
                  <div className={styles.lina}>Lina</div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild8} />
                    <img
                      className={styles.image12Icon}
                      alt=""
                      src="/image-12@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild9} />
                  <div className={styles.groupChild10} />
                </div>
                <div className={styles.lesson5Of}>Lesson 5 of 7</div>
              </div>
            </div>
            <b className={styles.viewHisotry}>View hisotry</b>
          </div>
        </div>
        <div className={styles.rectangleParent10}>
          <img className={styles.rectangleIcon2} alt="" src="/rectangle.svg" />
          <div className={styles.groupParent6}>
            <div className={styles.recommendedForYouParent}>
              <div className={styles.recommendedForYou}>
                Recommended for you
              </div>
              <b className={styles.seeAll}>See all</b>
            </div>
            <div className={styles.groupParent7}>
              <div className={styles.groupFrame}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupFrame}>
                      <div className={styles.groupChild20} />
                      <div className={styles.groupParent9}>
                        <div className={styles.rectangleParent12}>
                          <img
                            className={styles.groupChild21}
                            alt=""
                            src="/rectangle-32@2x.png"
                          />
                          <div className={styles.groupChild22} />
                        </div>
                        <div className={styles.awsCertifiedSolutions3}>
                          AWS Certified solutions Architect
                        </div>
                        <div className={styles.loremIpsumDolor}>
                          Lorem ipsum dolor sit amet, consectetur adipising
                          elit, sed do eiusmod tempor
                        </div>
                      </div>
                      <div className={styles.linaParent}>
                        <div className={styles.lina3}>Lina</div>
                        <i className={styles.i}>$100</i>
                        <b className={styles.b}>$80</b>
                        <div className={styles.rectangleParent13}>
                          <div className={styles.groupChild23} />
                          <img
                            className={styles.image12Icon3}
                            alt=""
                            src="/image-12@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.designParent}>
                  <div className={styles.design}>Design</div>
                  <div className={styles.rectangleParent14}>
                    <div className={styles.groupChild24} />
                    <div className={styles.groupChild25} />
                    <div className={styles.groupChild26} />
                    <div className={styles.groupChild27} />
                  </div>
                </div>
              </div>
              <div className={styles.groupParent10}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupFrame}>
                      <div className={styles.groupChild20} />
                      <div className={styles.groupParent9}>
                        <div className={styles.rectangleParent12}>
                          <img
                            className={styles.groupChild21}
                            alt=""
                            src="/rectangle-32@2x.png"
                          />
                          <div className={styles.groupChild22} />
                        </div>
                        <div className={styles.awsCertifiedSolutions3}>
                          AWS Certified solutions Architect
                        </div>
                        <div className={styles.loremIpsumDolor}>
                          Lorem ipsum dolor sit amet, consectetur adipising
                          elit, sed do eiusmod tempor
                        </div>
                      </div>
                      <div className={styles.linaParent}>
                        <div className={styles.lina3}>Lina</div>
                        <i className={styles.i}>$100</i>
                        <b className={styles.b}>$80</b>
                        <div className={styles.rectangleParent13}>
                          <div className={styles.groupChild23} />
                          <img
                            className={styles.image12Icon3}
                            alt=""
                            src="/image-12@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.designParent}>
                  <div className={styles.design}>Design</div>
                  <div className={styles.rectangleParent14}>
                    <div className={styles.groupChild24} />
                    <div className={styles.groupChild25} />
                    <div className={styles.groupChild26} />
                    <div className={styles.groupChild27} />
                  </div>
                </div>
              </div>
              <div className={styles.groupParent12}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupFrame}>
                      <div className={styles.groupChild20} />
                      <div className={styles.awsCertifiedSolutionsArchitParent}>
                        <div className={styles.awsCertifiedSolutions5}>
                          AWS Certified solutions Architect
                        </div>
                        <div className={styles.loremIpsumDolor2}>
                          Lorem ipsum dolor sit amet, consectetur adipising
                          elit, sed do eiusmod tempor
                        </div>
                      </div>
                      <div className={styles.linaParent}>
                        <div className={styles.lina3}>Lina</div>
                        <i className={styles.i}>$100</i>
                        <b className={styles.b}>$80</b>
                        <div className={styles.rectangleParent13}>
                          <div className={styles.groupChild23} />
                          <img
                            className={styles.image12Icon3}
                            alt=""
                            src="/image-12@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.designParent}>
                  <div className={styles.design}>Design</div>
                  <div className={styles.rectangleParent14}>
                    <div className={styles.groupChild24} />
                    <div className={styles.groupChild25} />
                    <div className={styles.groupChild26} />
                    <div className={styles.groupChild27} />
                  </div>
                </div>
              </div>
              <div className={styles.groupParent13}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupFrame}>
                      <div className={styles.groupChild20} />
                      <div className={styles.groupParent9}>
                        <img
                          className={styles.groupChild43}
                          alt=""
                          src="/rectangle-32@2x.png"
                        />
                        <div className={styles.awsCertifiedSolutions3}>
                          AWS Certified solutions Architect
                        </div>
                        <div className={styles.loremIpsumDolor}>
                          Lorem ipsum dolor sit amet, consectetur adipising
                          elit, sed do eiusmod tempor
                        </div>
                      </div>
                      <div className={styles.linaParent}>
                        <div className={styles.lina3}>Lina</div>
                        <i className={styles.i}>$100</i>
                        <b className={styles.b}>$80</b>
                        <div className={styles.rectangleParent13}>
                          <div className={styles.groupChild23} />
                          <img
                            className={styles.image12Icon3}
                            alt=""
                            src="/image-12@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.designParent}>
                  <div className={styles.design}>Design</div>
                  <div className={styles.rectangleParent14}>
                    <div className={styles.groupChild24} />
                    <div className={styles.groupChild25} />
                    <div className={styles.groupChild26} />
                    <div className={styles.groupChild27} />
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.groupChild49}
              alt=""
              src="/rectangle-33@2x.png"
            />
            <img
              className={styles.groupChild50}
              alt=""
              src="/rectangle-33@2x.png"
            />
          </div>
        </div>
        <div className={styles.groupParent15}>
          <div className={styles.recommendedForYouParent}>
            <div className={styles.recommendedForYou}>
              Get choice of your course
            </div>
            <b className={styles.seeAll}>See all</b>
          </div>
          <div className={styles.groupParent7}>
            <div className={styles.groupFrame}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.groupParent9}>
                      <div className={styles.rectangleParent12}>
                        <img
                          className={styles.groupChild21}
                          alt=""
                          src="/rectangle-32@2x.png"
                        />
                        <div className={styles.groupChild22} />
                      </div>
                      <div className={styles.awsCertifiedSolutions3}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
            <div className={styles.groupParent10}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.groupParent9}>
                      <div className={styles.rectangleParent12}>
                        <img
                          className={styles.groupChild21}
                          alt=""
                          src="/rectangle-32@2x.png"
                        />
                        <div className={styles.groupChild22} />
                      </div>
                      <div className={styles.awsCertifiedSolutions3}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
            <div className={styles.groupParent12}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.awsCertifiedSolutionsArchitParent}>
                      <div className={styles.awsCertifiedSolutions5}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor2}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
            <div className={styles.groupParent13}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.groupParent9}>
                      <img
                        className={styles.groupChild43}
                        alt=""
                        src="/rectangle-32@2x.png"
                      />
                      <div className={styles.awsCertifiedSolutions3}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.groupChild49}
            alt=""
            src="/rectangle-33@2x.png"
          />
          <img
            className={styles.groupChild50}
            alt=""
            src="/rectangle-33@2x.png"
          />
        </div>
        <div className={styles.groupParent24}>
          <div className={styles.recommendedForYouParent}>
            <div className={styles.recommendedForYou}>
              The course in personal development
            </div>
            <b className={styles.seeAll}>See all</b>
          </div>
          <div className={styles.groupParent7}>
            <div className={styles.groupFrame}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.groupParent9}>
                      <div className={styles.rectangleParent12}>
                        <img
                          className={styles.groupChild21}
                          alt=""
                          src="/rectangle-32@2x.png"
                        />
                        <div className={styles.groupChild22} />
                      </div>
                      <div className={styles.awsCertifiedSolutions3}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
            <div className={styles.groupParent10}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.groupParent9}>
                      <div className={styles.rectangleParent12}>
                        <img
                          className={styles.groupChild21}
                          alt=""
                          src="/rectangle-32@2x.png"
                        />
                        <div className={styles.groupChild22} />
                      </div>
                      <div className={styles.awsCertifiedSolutions3}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
            <div className={styles.groupParent12}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.awsCertifiedSolutionsArchitParent}>
                      <div className={styles.awsCertifiedSolutions5}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor2}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
            <div className={styles.groupParent13}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.groupParent9}>
                      <img
                        className={styles.groupChild43}
                        alt=""
                        src="/rectangle-32@2x.png"
                      />
                      <div className={styles.awsCertifiedSolutions3}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.groupChild49}
            alt=""
            src="/rectangle-33@2x.png"
          />
          <img
            className={styles.groupChild50}
            alt=""
            src="/rectangle-33@2x.png"
          />
        </div>
        <div className={styles.groupParent33}>
          <div className={styles.recommendedForYouParent}>
            <div className={styles.recommendedForYou}>Student are viewing</div>
            <b className={styles.seeAll}>See all</b>
          </div>
          <div className={styles.groupParent7}>
            <div className={styles.groupFrame}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.groupParent9}>
                      <div className={styles.rectangleParent12}>
                        <img
                          className={styles.groupChild21}
                          alt=""
                          src="/rectangle-32@2x.png"
                        />
                        <div className={styles.groupChild22} />
                      </div>
                      <div className={styles.awsCertifiedSolutions3}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
            <div className={styles.groupParent10}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.groupParent9}>
                      <div className={styles.rectangleParent12}>
                        <img
                          className={styles.groupChild21}
                          alt=""
                          src="/rectangle-32@2x.png"
                        />
                        <div className={styles.groupChild22} />
                      </div>
                      <div className={styles.awsCertifiedSolutions3}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
            <div className={styles.groupParent12}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.awsCertifiedSolutionsArchitParent}>
                      <div className={styles.awsCertifiedSolutions5}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor2}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
            <div className={styles.groupParent13}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild20} />
                    <div className={styles.groupParent9}>
                      <img
                        className={styles.groupChild43}
                        alt=""
                        src="/rectangle-32@2x.png"
                      />
                      <div className={styles.awsCertifiedSolutions3}>
                        AWS Certified solutions Architect
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina3}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>$80</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild23} />
                        <img
                          className={styles.image12Icon3}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent14}>
                  <div className={styles.groupChild24} />
                  <div className={styles.groupChild25} />
                  <div className={styles.groupChild26} />
                  <div className={styles.groupChild27} />
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.groupChild49}
            alt=""
            src="/rectangle-33@2x.png"
          />
          <img
            className={styles.groupChild50}
            alt=""
            src="/rectangle-33@2x.png"
          />
        </div>
        <div className={styles.courseChild} />
        <div className={styles.groupParent42}>
          <div className={styles.rectangleParent68}>
            <div className={styles.groupChild147} />
            <img
              className={styles.groupChild148}
              alt=""
              src={langua[0]?.image}
            />
            <div className={styles.design16}>{langua[0]?.name}</div>
            <div className={styles.loremIpsumDolor17}>
            JavaScript est un langage de programmation de scripts principalement 
            employé dans les pages web interactives et à ce titre est une partie essentielle des applications web
            </div>
          </div>
          <div className={styles.rectangleParent69}>
            <div className={styles.groupChild147} />
            <img
              className={styles.groupChild148}
              alt=""
              src={langua[1]?.image}
            />
            <div className={styles.development}>{langua[1]?.name}</div>
            <div className={styles.loremIpsumDolor17}>
            Hypertext Preprocessor, plus connu sous son sigle PHP, est un langage de programmation libre,
             principalement utilisé pour produire des pages Web dynamiques via un serveur web
            </div>
          </div>
          <div className={styles.rectangleParent70}>
            <div className={styles.groupChild147} />
            <img
              className={styles.groupChild148}
              alt=""
              src={langua[2]?.image}
            />
            <div className={styles.development}>{langua[2]?.name}</div>
            <div className={styles.loremIpsumDolor17}>
              Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets,
            </div>
          </div>
          <div className={styles.rectangleParent71}>
            <div className={styles.groupChild147} />
            <img
              className={styles.groupChild148}
              alt=""
              src={langua[3]?.image}
            />
            <div className={styles.business}>{langua[3]?.name}</div>
            <div className={styles.loremIpsumDolor17}>
            Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5,
            est le langage de balisage conçu pour représenter les pages web
            </div>
          </div>
          <div className={styles.rectangleParent72}>
            <div className={styles.groupChild147} />
            <img
              className={styles.groupChild148}
              alt=""
              src={langua[4]?.image}
            />
            <div className={styles.marketing}>{langua[4]?.name}</div>
            <div className={styles.loremIpsumDolor17}>
            jQuery est une bibliothèque JavaScript libre et multiplateforme créée pour faciliter l'écriture de 
            scripts côté client dans le code HTML des pages web
            </div>
          </div>
          <div className={styles.rectangleParent73}>
            <div className={styles.groupChild147} />
            <img
              className={styles.groupChild148}
              alt=""
              src={langua[5]?.image}
            />
            <div className={styles.photography}>{langua[5]?.name}</div>
            <div className={styles.loremIpsumDolor17}>
            Next.js est un framework gratuit et open source s'appuyant sur 
            la bibliothèque JavaScript React et sur la technologie Node.js
            </div>
          </div>
          <div className={styles.rectangleParent74}>
            <div className={styles.groupChild147} />
            <img
              className={styles.groupChild148}
              alt=""
              src={langua[6]?.image}
            />
            <div className={styles.acting}>{langua[6]?.name}</div>
            <div className={styles.loremIpsumDolor17}>
            Node.js est une plateforme logicielle libre en JavaScript.
            </div>
          </div>
          <div className={styles.rectangleParent75}>
            <div className={styles.groupChild147} />
            <img
              className={styles.groupChild148}
              alt=""
              src={langua[7]?.image}
            />
            <div className={styles.business}>{langua[7]?.name}</div>
            <div className={styles.loremIpsumDolor17}>
            TypeScript est un langage de programmation libre et open source développé 
            par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript.
            </div>
          </div>
        </div>
        {/* <img className={styles.image16Icon} alt="" src="/image-16@2x.png" /> */}
      </div>
    </div>
  );
  
        }



  
  export default HomePage;
  
  
