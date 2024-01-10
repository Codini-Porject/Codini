import  Link  from 'next/link';
import styles from "../app/styles/home.module.css";


const Home = () => {
  
  // const handleGetStartedClick = () => {
  //   navigation.push('@/app/(auth)/register/page.tsx');
  // };

  // const handleFreeTrialClick = () => {
  //   navigation.push('@/app/(auth)/register/page.tsx');
  // };
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
        <Link href="/register"><button><div className={styles.button2} >
        <div className={styles.buttonBase2}>
        <div className={styles.text3}>Get Started</div>
        </div>
        </div></button></Link>
        <Link href="/register"><button><div className={styles.button3} >
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
                <Link href="/register"><button><div className={styles.learnMore}>Learn More</div>
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
                <Link href="/register"><button><div className={styles.learnMore}>Learn More</div>
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
                <Link href="/register"><button><div className={styles.learnMore}>Learn More</div>
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
          <img className={styles.frameInner} alt="" src="/group-521@2x.png" />
          <div className={styles.button4}>
          <Link href="/register"><button > <div className={styles.buttonBase4}>
              <div className={styles.text1}>Explore All Programs</div>
            </div>
            </button>
            </Link>
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
        <div className={styles.container2}>
          <div className={styles.heading6}>Our recent blogs</div>
          <div className={styles.content7}>
            <div className={styles.column}>
              <div className={styles.blogPostCard3}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <div className={styles.content8}>
                  <div className={styles.headingAndSubheading}>
                    <div className={styles.author}>November 16, 2014</div>
                    <div className={styles.headingAndText4}>
                      <div className={styles.heading7}>
                        Three Pillars of User Delight
                      </div>
                      <div className={styles.formerFrontendDev}>
                        Delight can be experienced viscerally, behaviourally,
                        and reflectively. A great design is ...
                      </div>
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.text5}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text5}>UI UX</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogPostCard3}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <div className={styles.content8}>
                  <div className={styles.headingAndSubheading}>
                    <div className={styles.author}>September 24, 2017</div>
                    <div className={styles.headingAndText4}>
                      <div className={styles.heading7}>UX Mapping Methods</div>
                      <div className={styles.formerFrontendDev}>
                        Visual-design principles can be applied consistently
                        throughout the process of creating a polished UX map...
                      </div>
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.text5}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text5}>UI Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard5}>
              <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
              <div className={styles.content10}>
                <div className={styles.headingAndSubheading}>
                  <div className={styles.author}>March 13, 2014</div>
                  <div className={styles.headingAndIcon3}>
                    <div className={styles.heading2}>
                      Agile Development Projects and Usability
                    </div>
                  </div>
                  <div
                    className={styles.formerFrontendDev}
                  >{`Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. `}</div>
                </div>
                <div className={styles.categories2}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase4}>
                      <div className={styles.text5}>Programming</div>
                    </div>
                  </div>
                  <div className={styles.badge5}>
                    <div className={styles.badgeBase5}>
                      <div className={styles.text5}>Research</div>
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

export default Home;
