"use client";
import styles from "../styles/aboutUs.module.css";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";

import "./about.css";
const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUsInner}>
        <div className={styles.featuresSectionParent}>
          <div className={styles.featuresSection}>
            <div className={styles.imageBg} />
            <motion.img
              initial={{ rotate: "0deg" }}
              animate={{ rotate: "0deg" }}
              className={styles.sectionImgIcon}
              alt=""
              src="/codini3C.jpg"
            />
            <div className={styles.sectionData}>
              <b className={styles.features}>
                Learn Coding with the best & modern way
              </b>
              <div className={styles.weAreAlways}>
                CODINI provides you with the best teachers and courses, catering
                to both beginners and advanced learners..
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.atWeekenduxThe}>
                  our primary goal is to empower students by helping them
                  clarify their objectives, fostering consistency in their
                  ambitions, and instilling confidence in their journey over
                  time. We are committed to providing a supportive environment
                  that encourages personal and professional growth, ensuring our
                  students are well-prepared for the challenges they may
                  encounter along their educational path.
                </div>
                {/* <div className={styles.youWillFindContainer}>
                  <p className={styles.youWillFind}>
                    You will find every little thing on the internet in just a
                    click of hand, but here we admire that without knowledge and
                    practice the internet may even also fail you in your life.
                  </p>
                </div> */}
              </div>
              {/* <div className={styles.button}>
              <Link href="/"><button><div className={styles.contactUs}>Learn More</div>
                </button></Link>
                <img
                  className={styles.materialSymbolsarrowForwardIcon}
                  alt=""
                  src="/materialsymbolsarrowforwardrounded@2x.png"
                />
              </div> */}
            </div>
          </div>
          <div className={styles.benefitsSection}>
            <b className={styles.ourBenefits}>Our Benefits</b>
            <div className={styles.byJoiningWeekens}>
              By Joining CODINI Platform, One Can Avail a Lot Of Benefits.
            </div>
            <div className={styles.installOurTopRated}>
              create an account by your phone or your laptop to can access to
              the courses & become a developer from your home..
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.featureCardContent}>
                <div className={styles.cardNumber}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.div}>01</div>
                  </div>
                </div>
                <div className={styles.standardization}>
                  Free starting courses
                </div>
                <div className={styles.whenWorkingInContainer}>
                  <span>{`By creating your account, CODINI provides you with some free courses to start..`}</span>
                </div>
              </div>
            </div>
            <div className={styles.benefitCard1}>
              <div className={styles.featureCardContent}>
                <div className={styles.cardNumber}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.groupItem} />
                    <div className={styles.div}>04</div>
                  </div>
                </div>
                <div className={styles.standardization}>Affordable Pricing</div>
                <div className={styles.whenWorkingInContainer}>
                  <span>
                    {`With CODINI, there’s no cost to reproduce materials and, thanks to web learning ... `}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.benefitCard2}>
              <div className={styles.featureCardContent}>
                <div className={styles.cardNumber}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.groupInner} />
                    <div className={styles.div}>02</div>
                  </div>
                </div>
                <div className={styles.standardization}>
                  Contemporary mentors
                </div>
                <div className={styles.whenWorkingInContainer}>
                  <span>{`Explore coding with our platform's contemporary mentors, guiding you through the latest in technology and programming..`}</span>
                </div>
              </div>
            </div>
            <div className={styles.benefitCard3}>
              <div className={styles.featureCardContent}>
                <div className={styles.cardNumber}>
                  <div className={styles.groupDiv}>
                    <div className={styles.ellipseDiv} />
                    <div className={styles.div}>05</div>
                  </div>
                </div>
                <div className={styles.standardization}>
                  Learner Satisfaction
                </div>
                <div className={styles.whenWorkingInContainer}>
                  <span>{`Maximize learner satisfaction with our platform, featuring contemporary mentors, engaging quizzes, and exceptional courses for an unparalleled learning experience.`}</span>
                </div>
              </div>
            </div>
            <div className={styles.benefitCard4}>
              <div className={styles.featureCardContent}>
                <div className={styles.cardNumber}>
                  <div className={styles.groupDiv}>
                    <div className={styles.ellipseDiv} />
                    <div className={styles.div}>03</div>
                  </div>
                </div>
                <div className={styles.standardization}>More Customization</div>
                <div className={styles.whenWorkingInContainer}>
                  <span>{`ust like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ... `}</span>
                </div>
              </div>
            </div>
            <div className={styles.benefitCard5}>
              <div className={styles.featureCardContent}>
                <div className={styles.cardNumber}>
                  <div className={styles.groupDiv}>
                    <div className={styles.groupChild2} />
                    <div className={styles.div}>06</div>
                  </div>
                </div>
                <div className={styles.standardization}>Best Methods</div>
                <div className={styles.whenWorkingInContainer}>
                  <span>{`One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ... `}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleGroup} />

          <div className={styles.frameParent}>
            <div className={styles.frameGroup}></div>
          </div>
        </div>
      </div>
      <div className={styles.aboutUsSection}>
        <div className={styles.aboutUsSectionChild} />
        <img className={styles.aboutUsSectionItem} alt="" src="/codini2C.jpg" />
        <img
          className={styles.aboutUsSectionInner}
          alt=""
          src="/codini1C.jpg"
        />
        <div className={styles.sectionData1}>
          <b className={styles.aboutUs2}>About Us</b>
          <div className={styles.weekendUxProvidingContainer}>
            <span>CODINI</span>
            <span className={styles.providingTheBest}>
              {" "}
              providing the best opportunities to the students from anywhere..
            </span>
          </div>
          <div className={styles.sectionContent1}>
            <div className={styles.atWeekenduxThe}>
              Codini offers unparalleled opportunities for students worldwide to
              excel in the field of coding. Our online coding school is
              dedicated to providing top-notch education, empowering learners to
              thrive in a global tech landscape. With a comprehensive curriculum
              and expert instructors, Codini ensures that students receive the
              best resources and support to sharpen their coding skills. Join us
              as we pave the way for your success, turning coding aspirations
              into thriving careers on a global scale
            </div>
          </div>
          {/* <div className={styles.button3}>
          <Link href="/login"><button><div className={styles.contactUs}>Join Us</div></button></Link>
            <img
              className={styles.materialSymbolsarrowForwardIcon}
              alt=""
              src="/materialsymbolsarrowforwardrounded@2x.png"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
