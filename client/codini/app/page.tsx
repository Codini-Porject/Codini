"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../app/styles/home.module.css";
import { motion } from "framer-motion";
import Head from "next/head";
import { useScroll } from "framer-motion";

const Home = () => {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []); // Trigger on mount
  const { scrollYProgress } = useScroll();

  interface Course {
    title: string;
    instructor: string;
    price: number;
    description: string;
    image: string;
  }

  return (
    <div className="box">
      <div className={styles.designFile}>
        <motion.div
          className="animated-div"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <div className="box">
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img className={styles.blurIcon} alt="" src="/blur@2x.png" />
              <img
                className={styles.groupItem}
                alt=""
                src="/group-499@2x.png"
              />
              <img
                className={styles.groupInner}
                alt=""
                src="/group-498@2x.png"
              />
              <img
                className={styles.groupIcon}
                alt=""
                src="/group-515@2x.png"
              />
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild} />
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleContainer} />
                  <div className={styles.frameParent}></div>
                </div>
              </div>

              <div className={styles.buttonParent}>
              <Link href="/register"><button className='button'><div className={styles.button2} >
        <div className={styles.buttonBase2}>
        <div className={styles.text3}>Get Started</div>
        </div>
        </div></button></Link>
        <div className="cha9fa">
  <div className="left-side">
  <Link href="/register"><div className={styles.button3} >
          
          <div className={styles.buttonBase3}>
          <div className={styles.text3}>subscribe</div>
          </div>
          </div></Link>
    <div className="karta">
      <div className="card-line"></div>
      <div className="buttons"></div>
    </div>
    <div className="post">
      <div className="post-line"></div>
      <div className="screen">
        <div className="dollar">$</div>
      </div>
      <div className="numbers"></div>
      <div className="numbers-line2"></div>
    </div>
  </div>
  <div className="right-side">
    <div className="new"></div>
  </div>
</div>
        

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
                      Learn UI-UX Design skills with weekend UX . The latest
                      online learning system and material that help your
                      knowledge growing.
                    </div>
                  </div>
                  <div className={styles.buttonParent}>
                    <Link href="/register">
                      <button className="button">
                        <div className={styles.button2}>
                          <div className={styles.buttonBase2}>
                            <div className={styles.text3}>Get Started</div>
                          </div>
                        </div>
                      </button>
                    </Link>
                    <div className="cha9fa">
                      <div className="left-side">
                        <Link href="/register">
                          <div className={styles.button3}>
                            <div className={styles.buttonBase3}>
                              <div className={styles.text3}>subscribe</div>
                            </div>
                          </div>
                        </Link>
                        <div className="karta">
                          <div className="card-line"></div>
                          <div className="buttons"></div>
                        </div>
                        <div className="post">
                          <div className="post-line"></div>
                          <div className="screen">
                            <div className="dollar">$</div>
                          </div>
                          <div className="numbers"></div>
                          <div className="numbers-line2"></div>
                        </div>
                      </div>
                      <div className="right-side">
                        <div className="new"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.groupParent}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-518@2x.png"
                    />
                    <div className={styles.publicSpeaking}>Public Speaking</div>
                  </div>
                  <div className={styles.groupParent}>
                    <img
                      className={styles.briefcaseIcon}
                      alt=""
                      src="/briefcase@2x.png"
                    />
                    <div className={styles.publicSpeaking}>Career-Oriented</div>
                  </div>
                  <div className={styles.groupParent}>
                    <img
                      className={styles.briefcaseIcon}
                      alt=""
                      src="/idea@2x.png"
                    />
                    <div className={styles.publicSpeaking}>
                      Creative Thinking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={styles.designFileChild} />
        <div className={styles.frameParent2}>
          <motion.div
            className="animated-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.4 }}
          >
            <div className="ourpacks">
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
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/JavaScript.png"
                            />
                          </div>
                          <b className={styles.interactionDesign}>
                            FullStack developer Courses
                          </b>
                        </div>
                        <div className={styles.lessonsOnDesign}>
                          Lessons on FrontEnd & BackEnd that cover the most
                          recent developments.
                        </div>
                      </div>
                      <div className={styles.learnMoreParent}>
                        <Link href="/register">
                          <button className="button">
                            <div>Learn More</div>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameParent6}>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconContainer}>
                            <img
                              className={styles.icon3}
                              alt=""
                              src="/Python2.png"
                            />
                          </div>
                          <b className={styles.interactionDesign}>
                            Machine Learning
                          </b>
                        </div>
                        <div className={styles.classesInDevelopment}>
                          Lessons on python & more that cover the most recent
                          developments.
                        </div>
                      </div>
                      <div className={styles.learnMoreParent}>
                        <Link href="/register">
                          <button className="button">
                            <div>Learn More</div>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameParent6}>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconFrame}>
                            <img
                              className={styles.icon4}
                              alt=""
                              src="/java2.jpg"
                            />
                          </div>
                          <b className={styles.interactionDesign}>
                            JAVA developing
                          </b>
                        </div>
                        <div className={styles.userInterfaceDesign1}>
                          JAVA full courses to become a Java developer
                        </div>
                      </div>
                      <div className={styles.learnMoreParent}>
                        <Link href="/register">
                          <button className="button">
                            <div>Learn More</div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-521@2x.png"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="explore">
            <div className={styles.frameParent9}>
              <div className={styles.headingAndSupportingText1}>
                <div className={styles.headingAndSubheading}>
                  <div className={styles.subheading}>Explore Our Program</div>
                  <div className={styles.heading}>Our Most Popular Courses</div>
                </div>
                <div className={styles.supportingText}>
                  Let's discover our most famous courses, the knowledge provided
                  will definitely be useful for you to become a software
                  engineer
                </div>
              </div>
              {/* <div className={styles.blogPostCardParent} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}> */}
              <motion.div
                className="animated-div"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.blogPostCardParent}>
                  {/* <div>
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
             ))}
          </div> */}
                  <div className={styles.blogPostCard}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="https://file-uploads.teachablecdn.com/4c16c4adca0d401bb4295cfbda05ecf1/e1c0e6c521414dbfae2fe1ca931c2f8f"
                    />

                    <div className={styles.content2}>
                      <div className={styles.headingAndSubheading2}>
                        <div className={styles.author}>TypeScript</div>
                        <div className={styles.headingAndText}>
                          <div className={styles.headingAndIcon}>
                            <div className={styles.heading2}>
                              TypeScript courses
                            </div>
                            <div className={styles.iconWrap}>
                              <Link href="/register">
                                <button className="button">
                                  <img
                                    className={styles.arrowUpRightIcon}
                                    alt=""
                                    src="/arrowupright@2x.png"
                                  />
                                </button>
                              </Link>
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
                          src="Lovepik_com-450170843-Programmer Holding Laptop.png"
                        />
                        <div className={styles.inputField}>
                          <div className={styles.text5}>Mohammed Amine</div>
                          <div className={styles.supportingText2}>2024</div>
                        </div>
                      </div>
                      <div className={styles.rating2}>
                        <div className={styles.frameParent14}>
                          <div className={styles.group}>
                            <div className={styles.rating1}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.blogPostCard}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="https://i0.wp.com/onlinecoursesgalore.com/wp-content/uploads/2018/01/best-javascript-programming-courses-online.jpg?ssl=1"
                    />
                    <div className={styles.container}></div>

                    <div className={styles.content2}>
                      <div className={styles.headingAndSubheading2}>
                        <div className={styles.author}>JavaScipt</div>
                        <div className={styles.headingAndText}>
                          <div className={styles.headingAndIcon}>
                            <div className={styles.heading2}>JS courses</div>
                            <div className={styles.iconWrap}>
                              <Link href="/register">
                                <button className="button">
                                  <img
                                    className={styles.arrowUpRightIcon}
                                    alt=""
                                    src="/arrowupright@2x.png"
                                  />
                                </button>
                              </Link>
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
                          src="/teacher3.png"
                        />
                        <div className={styles.inputField}>
                          <div className={styles.text5}>Youssef</div>
                          <div className={styles.supportingText2}>2022</div>
                        </div>
                      </div>
                      <div className={styles.rating2}>
                        <div className={styles.frameParent14}>
                          <div className={styles.group}>
                            <div className={styles.rating1}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.blogPostCard}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN"
                    />
                    <div className={styles.container}></div>

                    <div className={styles.content2}>
                      <div className={styles.headingAndSubheading2}>
                        <div className={styles.author}>React</div>
                        <div className={styles.headingAndText}>
                          <div className={styles.headingAndIcon}>
                            <div className={styles.heading2}>
                              React courses for all the levels
                            </div>
                            <div className={styles.iconWrap}>
                              <Link href="/register">
                                <button className="button">
                                  <img
                                    className={styles.arrowUpRightIcon}
                                    alt=""
                                    src="/arrowupright@2x.png"
                                  />
                                </button>
                              </Link>
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
                          src="/teacher2.png"
                        />
                        <div className={styles.inputField}>
                          <div className={styles.text5}>mohamed ali</div>
                          <div className={styles.supportingText2}>2023</div>
                        </div>
                      </div>
                      <div className={styles.rating2}>
                        <div className={styles.frameParent14}>
                          <div className={styles.group}>
                            <div className={styles.rating1}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <img className={styles.frameInner} alt="" src="/group-521@2x.png" />
          <div className="explore2">
            <Link href="/register">
              <button className="button">
                <div className={styles.text1}>Explore All Programs</div>
              </button>
            </Link>
            {/* </div> */}
          </div>

          <div className="founders">
            <div className="founders1">
              <div className={styles.headingAndSubheading}>
                <div className={styles.subheading}>Founders</div>
                <div className={styles.heading}>Meet the Founders</div>
              </div>
              <div className={styles.supportingText}>
                With CODINI you find the best instractors to guide you with
                everythink you need in your journey
              </div>
            </div>

            <div className={styles.content5}>
              <div className={styles.teamMemberWrap}>
                <div className={styles.teamMember}>
                  <img
                    className={styles.avatarIcon3}
                    alt=""
                    src="/guezguez.png"
                  />
                  <div className={styles.textAndSocialLinks}>
                    <div className={styles.nameAndSupportingText}>
                      <div className={styles.nameAndRole}>
                        <div className={styles.name}>Med Amine Guezmir</div>
                        <div className={styles.role}>FullStack Developer</div>
                      </div>
                    </div>
                    <div className={styles.socialIcons}>
                      <Link href="https://www.linkedin.com">
                        <button className="linkedin">
                          <img
                            className={styles.chevronDownIcon}
                            alt=""
                            src="/link.png"
                          />
                        </button>
                      </Link>
                      <Link href="https://github.com">
                        <button className="github">
                          <img
                            className={styles.chevronDownIcon}
                            alt=""
                            src="/github4.png"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.teamMemberWrap}>
                <div className={styles.teamMember}>
                  <img
                    className={styles.avatarIcon3}
                    alt=""
                    src="/mrabet.png"
                  />
                  <div className={styles.textAndSocialLinks}>
                    <div className={styles.nameAndSupportingText}>
                      <div className={styles.nameAndRole}>
                        <div className={styles.name}>Mohamed mrabet</div>
                        <div className={styles.role}>FullStack Developer</div>
                      </div>
                    </div>
                    <div className={styles.socialIcons}>
                      <Link href="https://www.linkedin.com">
                        <button className="linkedin">
                          <img
                            className={styles.chevronDownIcon}
                            alt=""
                            src="/link.png"
                          />
                        </button>
                      </Link>
                      <Link href="https://github.com">
                        <button className="github">
                          <img
                            className={styles.chevronDownIcon}
                            alt=""
                            src="/github4.png"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.teamMemberWrap}>
                <div className={styles.teamMember}>
                  <img className={styles.avatarIcon3} alt="" src="/hamza.png" />
                  <div className={styles.textAndSocialLinks}>
                    <div className={styles.nameAndSupportingText}>
                      <div className={styles.nameAndRole}>
                        <div className={styles.name}>Hamza Ben Jemaa</div>
                        <div className={styles.role}>FullStack Developer</div>
                      </div>
                    </div>
                    <div className={styles.socialIcons}>
                      <Link href="https://www.linkedin.com/feed/">
                        <button className="linkedin">
                          <img
                            className={styles.chevronDownIcon}
                            alt=""
                            src="/link.png"
                          />
                        </button>
                      </Link>
                      <Link href="https://github.com">
                        <button className="github">
                          <img
                            className={styles.chevronDownIcon}
                            alt=""
                            src="/github4.png"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.teamMemberWrap}>
                <div className={styles.teamMember}>
                  <img className={styles.avatarIcon3} alt="" src="/louay.png" />
                  <div className={styles.textAndSocialLinks}>
                    <div className={styles.nameAndSupportingText}>
                      <div className={styles.nameAndRole}>
                        <div className={styles.name}>Louay Sakli</div>
                        <div
                          className={styles.role}
                        >{`FullStack Developer`}</div>
                      </div>
                    </div>
                    <div className={styles.socialIcons}>
                      <Link href="https://www.linkedin.com">
                        <button className="linkedin">
                          <img
                            className={styles.chevronDownIcon}
                            alt=""
                            src="/link.png"
                          />
                        </button>
                      </Link>
                      <Link href="https://github.com">
                        <button className="github">
                          <img
                            className={styles.chevronDownIcon}
                            alt=""
                            src="/github4.png"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="coni">
            <div className={styles.quoteSectionParent}>
              <div className={styles.quoteSection}>
                <div className="card1">
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

          <div className="soon">
            <div className={styles.container2}>
              <div className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">Soon in CODINI</div>
                <div className="notibody">
                  {" "}
                  Packs for multiple courses
                  <div className={styles.content7}>
                    <div className={styles.column}>
                      <div className={styles.blogPostCard3}>
                        <img
                          className={styles.imageIcon}
                          alt=""
                          src="/offer4.jpg"
                        />
                        <div className={styles.content8}>
                          <div className={styles.headingAndSubheading}>
                            <div className={styles.author}>March 30, 2024</div>
                            <div className={styles.headingAndText4}>
                              <div className="ktiba">
                                <div className={styles.heading7}>
                                  backend & databases courses
                                </div>
                              </div>
                              <div className={styles.formerFrontendDev}>
                                full courses with node & express JS , mongoDB &
                                MySQL
                              </div>
                            </div>
                          </div>
                          <div className={styles.categories}>
                            <div className={styles.badge}>
                              <div className={styles.badgeBase}>
                                <div className={styles.text5}>node.js</div>
                              </div>
                            </div>
                            <div className={styles.badge}>
                              <div className={styles.badgeBase}>
                                <div className={styles.text5}>Express.js</div>
                              </div>
                            </div>
                            <div className={styles.badge1}>
                              <div className={styles.badgeBase1}>
                                <div className={styles.text5}>MongoDB</div>
                              </div>
                            </div>
                            <div className={styles.badge1}>
                              <div className={styles.badgeBase1}>
                                <div className={styles.text5}>MySQL</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.blogPostCard3}>
                        <img
                          className={styles.imageIcon}
                          alt=""
                          src="/offer1.jpg"
                        />
                        <div className={styles.content8}>
                          <div className={styles.headingAndSubheading}>
                            <div className={styles.author}>March 16, 2024</div>
                            <div className={styles.headingAndText4}>
                              <div className="ktiba">
                                <div className={styles.heading7}>
                                  full stack courses & meets
                                </div>
                              </div>
                              <div className={styles.formerFrontendDev}>
                                full stack courses with all the technologies to
                                become a fullstack dev
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
                        <img
                          className={styles.imageIcon}
                          alt=""
                          src="/offer2.jpg"
                        />
                        <div className={styles.content8}>
                          <div className={styles.headingAndSubheading}>
                            <div className={styles.author}>
                              February 24, 2024
                            </div>
                            <div className={styles.headingAndText4}>
                              <div className="ktiba">
                                <div className={styles.heading7}>
                                  DevOps courses
                                </div>
                              </div>
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
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/offer3.jpg"
                      />
                      <div className={styles.content10}>
                        <div className={styles.headingAndSubheading}>
                          <div className={styles.author}>april 11, 2024</div>
                          <div className={styles.headingAndIcon3}>
                            <div className="ktiba">
                              <div className={styles.heading2}>
                                JAVA developer
                              </div>
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
          </div>

    </div>
            </div>
             </div>
 

  );
};

export default Home;
