"use client"
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Image from 'next/image';

interface OneTeacher {
  id: number;
  name: string;
  desc: string;
  image:string;
  rate: number;
  reviews: number;
}

const fetchDetail: React.FC = () => {
    const [teacher, setTeacher] = useState<OneTeacher>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchTeacher = await fetch('http://localhost:8000/teacher/getOne/2');
        const teacher= await fetchTeacher.json();
        console.log(teacher);
        setTeacher(teacher);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className={styles.literatureCourse}>
       
  <Image 
  src=""
  width={100}
  height={100}
  className={styles.literatureCourseChild}
  alt=""
/>
  
    
      <div className={styles.literatureCourseItem} />
      <img
        className={styles.literatureCourseInner}
        alt=""
        src={teacher?.image}
        height={10}
        width={50}
      />
    <div className={styles.literatureCourseParent}>
        {/* <div className={styles.literatureCourse1}>{teacher.}</div> */}
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupChild5} />
                <div className={styles.rectangleParent1}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-196@2x.png"
                  />
                  <div className={styles.allBenefitsOfPlusParent}>
                    <div className={styles.allBenefitsOf}>
                      All Benefits of PLUS
                    </div>
                    <div className={styles.div}>$24</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild5} />
                <div className={styles.rectangleParent1}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-196@2x.png"
                  />
                  <div className={styles.allBenefitsOfPlusParent}>
                    <div className={styles.allBenefitsOf}>
                      All Benefits of PLUS
                    </div>
                    <div className={styles.div}>$24</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent4}>
                <div className={styles.groupChild5} />
                <div className={styles.rectangleParent1}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-196@2x.png"
                  />
                  <div className={styles.allBenefitsOfPlusParent}>
                    <div className={styles.allBenefitsOf}>
                      All Benefits of PLUS
                    </div>
                    <div className={styles.div}>$24</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupParent1}>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupChild5} />
                <div className={styles.rectangleParent1}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-196@2x.png"
                  />
                  <div className={styles.allBenefitsOfPlusParent}>
                    <div className={styles.allBenefitsOf}>
                      All Benefits of PLUS
                    </div>
                    <div className={styles.div}>$24</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild5} />
                <div className={styles.rectangleParent1}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-196@2x.png"
                  />
                  <div className={styles.allBenefitsOfPlusParent}>
                    <div className={styles.allBenefitsOf}>
                      All Benefits of PLUS
                    </div>
                    <div className={styles.div}>$24</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent4}>
                <div className={styles.groupChild5} />
                <div className={styles.rectangleParent1}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-196@2x.png"
                  />
                  <div className={styles.allBenefitsOfPlusParent}>
                    <div className={styles.allBenefitsOf}>
                      All Benefits of PLUS
                    </div>
                    <div className={styles.div}>$24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent12}>
        <div className={styles.groupChild16} />
        <div className={styles.groupParent2}>
          <div className={styles.groupParent3}>
            <div className={styles.rectangleParent13}>
              <div className={styles.groupChild17} />
              <b className={styles.enrollNow}>Enroll Now</b>
            </div>
            <div className={styles.loremIpsumDolor}>
             {teacher?.desc}
            </div>
            <div className={styles.johnAnderson}>{teacher?.name}</div>
          </div>
          <div className={styles.groupParent4}>
            <div className={styles.groupParent5}>
              <div className={styles.studentsParent}>
                <div className={styles.students}>1,592 Students</div>
                <div className={styles.div6}></div>
              </div>
              <div className={styles.instructorRatingParent}>
                {/* <div className={styles.instructorRating}>
                  {teacher?.rate}
                </div>
                <div className={styles.div7}></div> */}
              </div>
              <div className={styles.coursesParent}>
                <div className={styles.courses1}>Courses</div>
                <div className={styles.div6}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default fetchDetail;
