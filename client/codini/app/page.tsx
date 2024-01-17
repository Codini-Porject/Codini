import Link from "next/link";
import styles from "../app/styles/home.module.css";

const Home = () => {
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
              src="/progress-circle@2x.png"
            />
            <b className={styles.k}>5K+</b>
            <div className={styles.onlineCourses}>Online Courses</div>
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.div1}>
            <img className={styles.icon} alt="" src="/icon@2x.png" />
            <div className={styles.content1}>
              <b className={styles.k}>2K+</b>
              <div className={styles.onlineCourses}>Video Courses</div>
            </div>
          </div>
          <div className={styles.div2}>
            <img className={styles.icon} alt="" src="/icon@2x.png" />
            <div className={styles.inputField}>
              <div className={styles.tutors}>Tutors</div>
              <b className={styles.b}>250+</b>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.upYourSkillsToAdvanceYourParent}>
                <b className={styles.upYourSkillsContainer}>
                  <p className={styles.upYourSkills}>
                    <span>{`up your `}</span>
                    <span className={styles.skills}>skills</span>
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
                E-learning provides access to educational resources and courses from anywhere in the world.
                Students can connect with instructors and fellow learners globally, breaking down geographical barriers.
                </div>
              </div>
              <div className={styles.buttonParent}>
                <div className={styles.button2}>
                  <div className={styles.buttonBase2}>
                    <div className={styles.text3}><Link href={"/login"}>Get Started</Link> </div>
                  </div>
                </div>
                <div className={styles.button3}>
                  <div className={styles.buttonBase3}>
                    <div className={styles.text3}>Get free trial</div>
                  </div>
                </div>
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
              <div className={styles.subheading}>Our Services</div>
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
                      <img className={styles.icon2} alt="" src="/icon@2x.png" />
                    </div>
                    <b className={styles.interactionDesign}>
                      Interaction Design
                    </b>
                  </div>
                  <div className={styles.lessonsOnDesign}>
                    Lessons on design that cover the most recent developments.
                  </div>
                </div>
                <div className={styles.learnMoreParent}>
                  <div className={styles.learnMore}>Learn More</div>
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
                      <img className={styles.icon3} alt="" src="/icon@2x.png" />
                    </div>
                    <b className={styles.interactionDesign}>UX Design Course</b>
                  </div>
                  <div className={styles.classesInDevelopment}>
                    Classes in development that cover the most recent
                    advancements in web.
                  </div>
                </div>
                <div className={styles.learnMoreGroup}>
                  <div className={styles.learnMore}>Learn More</div>
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
                      <img className={styles.icon4} alt="" src="/icon@2x.png" />
                    </div>
                    <b className={styles.interactionDesign}>
                      User Interface Design
                    </b>
                  </div>
                  <div className={styles.userInterfaceDesign1}>
                    User Interface Design courses that cover the most recent
                    trends
                  </div>
                </div>
                <div className={styles.learnMoreGroup}>
                  <div className={styles.learnMore}>Learn More</div>
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
              <div className={styles.subheading}>Explore Programs</div>
              <div className={styles.heading}>Our Most Popular Class</div>
            </div>
            <div className={styles.supportingText}>
              Let's join our famous class, the knowledge provided will
              definitely be useful for you.
            </div>
          </div>
          <div className={styles.blogPostCardParent}>
            <div className={styles.blogPostCard}>
              <div className={styles.image}>
                <div className={styles.parent}>
                  <img className={styles.icon5} alt="" src="/22@2x.png" />
                  <div className={styles.hr12Mins}>08 hr 12 mins</div>
                </div>
              </div>
              <div className={styles.content2}>
                <div className={styles.headingAndSubheading2}>
                  <div className={styles.author}>Design</div>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <div className={styles.heading2}>
                        Figma UI UX Design..
                      </div>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      Use Figma to get a job in UI Design, User Interface, User
                      Experience design.
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
                    <div className={styles.text5}>Jane Cooper</div>
                    <div className={styles.supportingText2}>2001 Enrolled</div>
                  </div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.frameParent14}>
                    <div className={styles.group}>
                      <div className={styles.hr12Mins}>4.3</div>
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
                    <div className={styles.div4}>(16,325)</div>
                  </div>
                </div>
                <b className={styles.b1}>$17.84</b>
              </div>
            </div>
            <div className={styles.blogPostCard}>
              <div className={styles.image1}>
                <div className={styles.container}>
                  <img className={styles.icon5} alt="" src="/22@2x.png" />
                  <div className={styles.hr12Mins}>06 hr 3 mins</div>
                </div>
              </div>
              <div className={styles.content2}>
                <div className={styles.headingAndSubheading2}>
                  <div className={styles.author}>Design</div>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <div className={styles.heading2}>Learn With Shoaib</div>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      Design Web Sites and Mobile Apps that Your Users Love and
                      Return to Again.
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
                      <div className={styles.hr12Mins}>3.9</div>
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
                <b className={styles.b1}>$8.99</b>
              </div>
            </div>
            <div className={styles.blogPostCard}>
              <div className={styles.image2}>
                <div className={styles.container}>
                  <img className={styles.icon5} alt="" src="/22@2x.png" />
                  <div className={styles.hr12Mins}>01 hr 2 mins</div>
                </div>
              </div>
              <div className={styles.content2}>
                <div className={styles.headingAndSubheading2}>
                  <div className={styles.author}>Design</div>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <div className={styles.heading2}>
                        Building User Interface..
                      </div>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      Learn how to apply User Experience (UX) principles to your
                      website designs.
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
                    <div className={styles.text5}>Esther Howard</div>
                    <div className={styles.supportingText2}>2001 Enrolled</div>
                  </div>
                </div>
                <div className={styles.rating4}>
                  <div className={styles.frameParent14}>
                    <div className={styles.group}>
                      <div className={styles.hr12Mins}>4.2</div>
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
                    <div className={styles.div4}>(125)</div>
                  </div>
                </div>
                <b className={styles.b1}>$11.70</b>
              </div>
            </div>
          </div>
          <img className={styles.frameInner} alt="" src="/group-521@2x.png" />
          <div className={styles.button4}>
            <div className={styles.buttonBase4}>
              <div className={styles.text1}>Explore All Programs</div>
            </div>
          </div>
        </div>
        <div className={styles.headingAndSupportingTextContainer}>
          <div className={styles.headingAndSupportingText2}>
            <div className={styles.headingAndSubheading}>
              <div className={styles.subheading}>Tutors</div>
              <div className={styles.heading}>Meet the Heroes</div>
            </div>
            <div className={styles.supportingText}>
              On Weekend UX, instructors from all over the world instruct
              millions of students. We offer the knowledge and abilities.
            </div>
          </div>
          <div className={styles.content5}>
            <div className={styles.teamMemberWrap}>
              <div className={styles.teamMember}>
                <img
                  className={styles.avatarIcon3}
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className={styles.textAndSocialLinks}>
                  <div className={styles.nameAndSupportingText}>
                    <div className={styles.nameAndRole}>
                      <div className={styles.name}>Theresa Webb</div>
                      <div className={styles.role}>
                        Application Support Analyst Lead
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      Former co-founder of Opendoor. Early staff at Spotify and
                      Clearbit.
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/social-icon@2x.png"
                    />
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
                  src="/avatar@2x.png"
                />
                <div className={styles.textAndSocialLinks}>
                  <div className={styles.nameAndSupportingText}>
                    <div className={styles.nameAndRole}>
                      <div className={styles.name}>Courtney Henry</div>
                      <div className={styles.role}>
                        Director, Undergraduate Analytics and Planning
                      </div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      Lead engineering teams at Figma, Pitch, and Protocol Labs.
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/social-icon@2x.png"
                    />
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
                  src="/avatar@2x.png"
                />
                <div className={styles.textAndSocialLinks}>
                  <div className={styles.nameAndSupportingText}>
                    <div className={styles.nameAndRole}>
                      <div className={styles.name}>Albert Flores</div>
                      <div className={styles.role}>Career Educator</div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      <p className={styles.formerPmFor}>
                        Former PM for Linear, Lambda School, and On Deck.
                      </p>
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/social-icon@2x.png"
                    />
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
                  src="/avatar@2x.png"
                />
                <div className={styles.textAndSocialLinks}>
                  <div className={styles.nameAndSupportingText}>
                    <div className={styles.nameAndRole}>
                      <div className={styles.name}>Marvin McKinney</div>
                      <div
                        className={styles.role}
                      >{`Co-op & Internships Program & Operations Manager`}</div>
                    </div>
                    <div className={styles.formerFrontendDev}>
                      Former frontend dev for Linear, Coinbase, and Postscript.
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/social-icon@2x.png"
                    />
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
                    src="/image-2@2x.png"
                  />
                  <div className={styles.quote}>
                    Courses was fantastic! It is Master platform for those
                    looking to start a new career, or need a refresher.
                  </div>
                  <div className={styles.avatarAndText}>
                    <img
                      className={styles.avatarIcon7}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className={styles.textAndSupportingText3}>
                      <div className={styles.name}>Jacob Jones</div>
                      <div className={styles.formerFrontendDev}>
                        Student, National University
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.frameInner} alt="" src="/group-521@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
