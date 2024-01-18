"use client";
import styles from "../../styles/register.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleloginClick = () => {
    router.push("/login");
  };

  return (
    <div className={styles.login}>
        <div className={styles.registerInner}>
          <div className={styles.loremIpsumIsSimplyParent}>
            <b className={styles.loremIpsumIs}>{`Lorem Ipsum is simply `}</b>
            <div
              className={styles.loremIpsumIs1}
            >{`Lorem Ipsum is simply `}</div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.login1} onClick={handleloginClick}>
                Login
              </div>
              <img
                className={styles.groupItem}
                alt=""
                src="/rectangle-79@2x.png"
              />
              <div className={styles.register1}>Register</div>
            </div>
            <div className={styles.welcomeToLorem}>Welcome to Codini..!</div>
          </div>
          <div className={styles.rectangleGroup}>
            <input
              type="text"
              placeholder="Enter your User name"
              className={styles.groupInner}
            />
            <div className={styles.userName}>User name</div>
            <div className={styles.enterYourUser}></div>
          </div>
          <div className={styles.rectangleContainer}>
            <input
              type="text"
              placeholder="Enter your Email Address"
              className={styles.groupInner}
            />
            <div className={styles.userName}>Email Address</div>
            <div className={styles.enterYourUser}></div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleParent1}>
              <input
                type="text"
                placeholder="Enter your Password"
                className={styles.groupInner}
              />
              <div className={styles.userName}>Password</div>
              <div className={styles.enterYourUser}></div>
            </div>
            <img
              className={styles.invisible1Icon}
              alt=""
              src="/invisible-1@2x.png"
            />
          </div>
          <div className={styles.loremIpsumIs2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild2} />
            <div className={styles.register2}>Register</div>
          </div>
        </div>
        <img
          className={styles.lovelyTeenageGirlWithCurlyIcon}
          alt=""
          src="/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin-1@2x.png"
        />
      </div>
  );
};

export default Login;
