import  Link  from 'next/link';
import { useScroll } from "framer-motion"
import { motion, useAnimation } from "framer-motion";
import styles from "../app/styles/home.module.css";


const Home =()=>{

  interface Course {
    title: string;
    instructor: string;
    price: number;
    description: string;
    image: string;
}
const courses: Course[] = [
  // { title: "JavaScript Fundamentals", instructor: "Jane Cooper", price: 57.84, ... },
  // { title: "Python for Beginners", instructor: "Jenny Wilson", price: 48.99, ... },
  // { title: "PHP for Beginners", instructor: "Jenny Wilson", price: 48.99, ... },
];
  return (
    <div className={styles.designFile}>
      <div className={styles.designFileInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.blurIcon} alt="" src="/blur@2x.png" />
          <img className={styles.groupItem} alt="" src="/group-499@2x.png" />
          <img className={styles.groupInner} alt="" src="/group-498@2x.png" />
          <img className={styles.groupIcon} alt="" src="/group-515@2x.png" />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleContainer} />
              <div className={styles.frameParent}></div>
            </div>
          </div>
          <div className={styles.maskGroup}>
            <div className={styles.frameChild} />
            <div className={styles.placeholder} />
            <div className={styles.placeholder1} />
          </div>
          <div className={styles.ellipseDiv} />
          <div className={styles.div}>
            <img
              className={styles.progressCircleIcon}
              alt=""
              src="/teacher.jpg"
            />
            <b className={styles.k}>+20</b>
            <div className={styles.onlineCourses}>software teacher</div>
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />  
          <div className={styles.div1}>
            <img className={styles.icon} alt="" src="/JavaScript.png" />
            <div className={styles.content1}>
              <b className={styles.k}>+50</b>
              <div className={styles.onlineCourses}>Video Courses</div>
            </div>
          </div>
          <div className={styles.div2}>
            <img className={styles.icon} alt="" src="/react1.png" />
            <div className={styles.inputField}>
              <div className={styles.tutors}>Courses</div>
              <b className={styles.b}>+40</b>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.upYourSkillsToAdvanceYourParent}>
                <b className={styles.upYourSkillsContainer}>
                  <p className={styles.upYourSkills}>
                    <span>{`up your `}</span>
                    <span className={styles.skills}>software skills</span>
                  </p>
                  <p className={styles.toAdvanceYourCareerPath}>
                    <span className={styles.to}>{`to `}</span>
                    <span>advance</span>
                    <span className={styles.to}>{` your `}</span>
                    <span className={styles.skills}>career</span>
                    <span className={styles.to}> path</span>
                  </p>
                </b>  
                <div className={styles.learnUiUxDesign}>
                  Learn software languages online with CODINI.  The latest online
                  learning system that help your coding knowledge growing...
                  </div>
                  </div>
              <div className={styles.buttonParent}>
        <Link href="/register"><button className='button'><div className={styles.button2} >
        <div className={styles.buttonBase2}>
        <div className={styles.text3}>Get Started</div>
        </div>
        </div></button></Link>
        <Link href="/register"><button className='button'><div className={styles.button3} >
          
        <div className={styles.buttonBase3}>
        <div className={styles.text3}>Get free trial</div>
        </div>
        </div></button></Link>
        </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-518@2x.png"
                />
                <div className={styles.publicSpeaking}>online Teachers</div>
              </div>
              <div className={styles.groupParent}>
                <img
                  className={styles.briefcaseIcon}
                  alt=""
                  src="/briefcase@2x.png"
                />
                <div className={styles.publicSpeaking}>Full Courses</div>
              </div>
              <div className={styles.groupParent}>
                <img
                  className={styles.briefcaseIcon}
                  alt=""
                  src="/idea@2x.png"
                />
                <div className={styles.publicSpeaking}>Quiz </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.designFileChild} />
      <div className={styles.frameParent2}>
        <div className={styles.headingAndSupportingTextParent}>
          <div className={styles.headingAndSupportingText}>
            <div className={styles.headingAndSubheading}>
              <div className={styles.subheading}>Our Packs</div>
              <div
                className={styles.heading}
              >{`Fostering a playful & engaging learning environment`}</div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.iconWrapper}>
                      <img className={styles.icon2} alt="" src="/JavaScript.png" />
                    </div>
                    <b className={styles.interactionDesign}>
                         FullStack developer Courses        
                                     </b>
                  </div>
                  <div className={styles.lessonsOnDesign}>
                    Lessons on FrontEnd & BackEnd that cover the most recent developments.
                  </div>
                </div>
                <div className={styles.learnMoreParent}>
                <Link href="/register"><button className="button"><div>Learn More</div>
                </button></Link>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.iconContainer}>
                      <img className={styles.icon3} alt="" src="/Python2.png" />
                    </div>
                    <b className={styles.interactionDesign}>HTML & CSS courses</b>
                  </div>
                  <div className={styles.classesInDevelopment}>
                  html 5 & css 3 courses to learn how build your web page..
                  </div>
                </div>
                <div className={styles.learnMoreGroup}>
                <Link href="/register"><button  className="button"><div className={styles.learnMore}>Learn More</div>
                </button></Link>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.iconFrame}>
                      <img className={styles.icon4} alt="" src="/java2.jpg" />
                    </div>
                    <b className={styles.interactionDesign}>
                      JAVA developing
                    </b>
                  </div>
                  <div className={styles.userInterfaceDesign1}>
                    JAVA full courses to become a Java developer 
                  </div>
                </div>
                <div className={styles.learnMoreGroup}>
                <Link href="/register"><button  className="button"><div className={styles.learnMore}>Learn More</div>
                </button></Link>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
            </div>
            <img className={styles.frameInner} alt="" src="/group-521@2x.png" />
          </div>
        </div>
        <div className={styles.headingAndSupportingTextGroup}>
          <div className={styles.headingAndSupportingText1}>
            <div className={styles.headingAndSubheading}>
            <div className={styles.subheading}>Explore Our Program</div>
              <div className={styles.heading}>Our Most Popular Courses</div>
            </div>
            <div className={styles.supportingText}>
              Let's discover our most famous courses, the knowledge provided will
              definitely be useful for you to become a software engineer
            </div>
          </div>


          {/* <div className={styles.blogPostCardParent} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}> */}
          <div className={styles.blogPostCardParent}>
          {/* <div>
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
             ))}
          </div> */}
            <div className={styles.blogPostCard}>
              <div className={styles.image1}>
                <div className={styles.container}>
                  <img className={styles.icon5} alt="" src="/22@2x.png" />
                  <div className={styles.hr12Mins}>43 hr 50 mins</div>
                </div>
              </div>
              <div className={styles.content2}>
                <div className={styles.headingAndSubheading2}>
                  <div className={styles.author}>HTML & CSS</div>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <div className={styles.heading2}>Python courses for all the levels</div>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                    free access for the first courses
                    </div>
                  </div>
                </div>
                <div className={styles.avatarLabelGroup}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="teacher4.png"
                  />
                  <div className={styles.inputField}>
                    <div className={styles.text5}>Simone Shivora</div>
                    <div className={styles.supportingText2}>2024</div>
                  </div>
                </div>
                <div className={styles.rating2}>
                  <div className={styles.frameParent14}>
                    <div className={styles.group}>
                      <div className={styles.hr12Mins}>7.4</div>
                      <div className={styles.rating1}>
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-1@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-2@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-3@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-4@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-5@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.div4}>(832)</div>
                  </div>
                </div>
                <b className={styles.b1}>$58.99</b>
              </div>
              
            </div>
            
            <div className={styles.blogPostCard}>
              <div className={styles.image1}>
                <div className={styles.container}>
                  <img className={styles.icon5} alt="" src="/22@2x.png" />
                  <div className={styles.hr12Mins}>33 hr 50 mins</div>
                </div>
              </div>
              <div className={styles.content2}>
                <div className={styles.headingAndSubheading2}>
                  <div className={styles.author}>Python</div>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <div className={styles.heading2}>Python courses for all the levels</div>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                    free access for the first courses
                    </div>
                  </div>
                </div>
                <div className={styles.avatarLabelGroup}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <div className={styles.inputField}>
                    <div className={styles.text5}>Jenny Wilson</div>
                    <div className={styles.supportingText2}>2001 Enrolled</div>
                  </div>
                </div>
                <div className={styles.rating2}>
                  <div className={styles.frameParent14}>
                    <div className={styles.group}>
                      <div className={styles.hr12Mins}>7.9</div>
                      <div className={styles.rating1}>
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-1@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-2@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-3@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-4@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-5@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.div4}>(832)</div>
                  </div>
                </div>
                <b className={styles.b1}>$48.99</b>
              </div>
                  
            </div>
            <div className={styles.blogPostCard}>
              <div className={styles.image1}>
                <div className={styles.container}>
                  <img className={styles.icon5} alt="" src="/22@2x.png" />
                  <div className={styles.hr12Mins}>33 hr 50 mins</div>
                </div>
              </div>
              <div className={styles.content2}>
                <div className={styles.headingAndSubheading2}>
                  <div className={styles.author}>Python</div>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <div className={styles.heading2}>Python courses for all the levels</div>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                    free access for the first courses
                    </div>
                  </div>
                </div>
                <div className={styles.avatarLabelGroup}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <div className={styles.inputField}>
                    <div className={styles.text5}>Jenny Wilson</div>
                    <div className={styles.supportingText2}>2001 Enrolled</div>
                  </div>
                </div>
                <div className={styles.rating2}>
                  <div className={styles.frameParent14}>
                    <div className={styles.group}>
                      <div className={styles.hr12Mins}>7.9</div>
                      <div className={styles.rating1}>
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-1@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-2@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-3@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-4@2x.png"
                        />
                        <img
                          className={styles.ratingChild}
                          alt=""
                          src="/star-5@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.div4}>(832)</div>
                  </div>
                </div>
                <b className={styles.b1}>$48.99</b>
              </div>
            </div>
          </div>
          </div>
          <img className={styles.frameInner} alt="" src="/group-521@2x.png" />
          <div className={styles.button4}>
          <Link href="/register"><button className='button'>Explore All Programs
            </button>
            </Link>
          {/* </div> */}
        </div>
        <div className={styles.headingAndSupportingTextContainer}>
          <div className={styles.headingAndSupportingText2}>
            <div className={styles.headingAndSubheading}>
              <div className={styles.subheading}>Teachers</div>
              <div className={styles.heading}>Meet the Instractors</div>
            </div>
            <div className={styles.supportingText}>
              With CODINI you find the best instractors to guide you with everythink you need 
              in your journey
            </div>
          </div>
          <div className={styles.content5}>
            <div className={styles.teamMemberWrap}>
              <div className={styles.teamMember}>
                <img
                  className={styles.avatarIcon3}
                  alt=""
                  src="/mme1.png"
                />
                <div className={styles.textAndSocialLinks}>
                  <div className={styles.nameAndSupportingText}>
                    <div className={styles.nameAndRole}>
                      <div className={styles.name}>Sofia berrardi</div>
                      <div className={styles.role}>
                        FrontEnd Software engineer
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                     +12y experience 
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/social-icon@2x.png"
                    />
                    {/* <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/social-icon@2x.png"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.teamMemberWrap}>
              <div className={styles.teamMember}>
                <img
                  className={styles.avatarIcon3}
                  alt=""
                  src="/teacher2.png"
                />
                <div className={styles.textAndSocialLinks}>
                  <div className={styles.nameAndSupportingText}>
                    <div className={styles.nameAndRole}>
                      <div className={styles.name}>Henry Mosh</div>
                      <div className={styles.role}>
                        IT teacher
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      IT engineer with over 8y experience 
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                  
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/social-icon@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.teamMemberWrap}>
              <div className={styles.teamMember}>
                <img
                  className={styles.avatarIcon3}
                  alt=""
                  src="/teacher3.png"
                />
                <div className={styles.textAndSocialLinks}>
                  <div className={styles.nameAndSupportingText}>
                    <div className={styles.nameAndRole}>
                      <div className={styles.name}>Mohammad Anwar</div>
                      <div className={styles.role}>FullStack Developer</div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      <p className={styles.formerPmFor}>
                        Former fullstack developer for google, over 6y experience.
                      </p>
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/social-icon@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.teamMemberWrap}>
              <div className={styles.teamMember}>
                <img
                  className={styles.avatarIcon3}
                  alt=""
                  src="/teacher4.png"
                />
                <div className={styles.textAndSocialLinks}>
                  <div className={styles.nameAndSupportingText}>
                    <div className={styles.nameAndRole}>
                      <div className={styles.name}>Simone Shivora</div>
                      <div
                        className={styles.role}
                      >{`BackEnd Developer`}</div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      Former BackEnd dev for Facebook 
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/social-icon@2x.png"
                    />
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quoteSectionParent}>
          <div className={styles.quoteSection}>
            <div className={styles.container1}>
              <div className={styles.nameAndRole}>
                <div className={styles.quoteAndAttribution}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/codiniblack2.png"
                  />
                  <div className={styles.quote}>
                    Courses was fantastic! It is Master platform for those
                    looking to start a new career, or need a refresher.
                  </div>
                  <div className={styles.avatarAndText}>
                    <img
                      className={styles.avatarIcon7}
                      alt=""
                      src="/student.png"
                    />
                    <div className={styles.textAndSupportingText3}>
                      <div className={styles.name}>Youssef BenAli</div>
                      <div className={styles.formerFrontendDev}>
                        Student, CODINI SCHOOL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.heading6}>Our recent offers</div>
          <div className={styles.content7}>
            <div className={styles.column}>
              <div className={styles.blogPostCard3}>
                <img className={styles.imageIcon} alt="" src="/offer1.jpg" />
                <div className={styles.content8}>
                  <div className={styles.headingAndSubheading}>
                    <div className={styles.author}>November 16, 2023</div>
                    <div className={styles.headingAndText4}>
                      <div className={styles.heading7}>
                      full stack courses & meets
                      </div>
                      <div className={styles.formerFrontendDev}>
                        full stack courses with all the technologies to become a fullstack dev 
                      </div>
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.text5}>JS</div>
                      </div>
                    </div>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.text5}>Express.js</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text5}>React JS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogPostCard3}>
                <img className={styles.imageIcon} alt="" src="/offer2.jpg" />
                <div className={styles.content8}>
                  <div className={styles.headingAndSubheading}>
                    <div className={styles.author}>January 4, 2024</div>
                    <div className={styles.headingAndText4}>
                      <div className={styles.heading7}>DevOps courses</div>
                      <div className={styles.formerFrontendDev}>
                       a hight quality devops courses 
                      </div>
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.text5}>Python</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text5}>GIT</div>
                      </div>
                    </div>
                    <div className={styles.badge}>
                    <div className={styles.badgeBase4}>
                      <div className={styles.text5}>Docker</div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard5}>
              <img className={styles.imageIcon2} alt="" src="/offer3.jpg" />
              <div className={styles.content10}>
                <div className={styles.headingAndSubheading}>
                  <div className={styles.author}>november 24, 2023</div>
                  <div className={styles.headingAndIcon3}>
                    <div className={styles.heading2}>
                      JAVA developer 
                        </div>
                  </div>
                  <div
                    className={styles.formerFrontendDev}
                  >{`become a JAVA developer with 8 of the best teacher you can have`}</div>
                </div>
                <div className={styles.categories2}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase4}>
                      <div className={styles.text5}>JAVA</div>
                    </div>
                  </div>
                  <div className={styles.badge5}>
                    <div className={styles.badgeBase5}>
                      <div className={styles.text5}>GIT & GITHUB</div>
                    </div>
                  </div>
                  <div className={styles.badge6}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text5}>Developments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home ;
// {
//   const { scrollYProgress } = useScroll();

//   return (
//     <>
//       <motion.div
//         className="progress-bar"
//         style={{ scaleX: scrollYProgress }}
//       />
//       <h1>
//         <code>useScroll</code> demo
//       </h1>
//       <LoremIpsum />
//     </>
//   );
// }
