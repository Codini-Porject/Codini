"use client";
import styles from "../../styles/login.module.css";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.login}>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img
                className={styles.groupItem}
                alt=""
                src="/rectangle-79@2x.png"
              />
              <div className={styles.login1}>Login</div>
              <div className={styles.register} onClick={handleRegisterClick}>
                Register
              </div>
            </div>
            <div className={styles.welcomeToLorem}>Welcome to Codini..!</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleGroup}>
              <input
                type="text"
                placeholder="Enter your User name"
                className={styles.groupInner}
              />
              <div className={styles.userName}>User name</div>
              <div className={styles.enterYourUser}></div>
            </div>
            <div className={styles.groupParent1}>
              <div className={styles.rectangleContainer}>
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
            <div className={styles.loremIpsumIs}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild1} />
            <div className={styles.rememebrMe}>Rememebr me</div>
            <div className={styles.forgotPassword}>Forgot Password ?</div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild2} />
            <div className={styles.login2}>Login</div>
          </div>
        </div>
        <img
          className={styles.lovelyTeenageGirlWithCurlyIcon}
          alt=""
          src="/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin-1@2x.png"
        />
      </div>
    </div>
  );
};

export default SignUp;
