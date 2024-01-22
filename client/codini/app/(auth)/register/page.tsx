"use client";
import styles from "../../styles/register.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useIdentity } from "../IdentityContext";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [role, setRole] = useState("student");
  const { user, setUser, clearUser } = useIdentity();

  //   const { setUser } = useIdentity();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/register", {
        name: username,
        email: userEmail,
        password: userPassword,
        role: role,
      });

      if (response.status === 201) {
        const { data } = response;

        Cookies.set("authToken", data.token, { expires: 7 });
        setSuccessMessage("Registration successful");

        router.push("/login");
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Error during registration. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleloginClick = () => {
    router.push("/login");
  };

  return (
    <div className={styles.login}>
      <div className={styles.register}>
        <div className={styles.registerInner}>
          <div className={styles.loremIpsumIsSimplyParent}>
            <b className={styles.loremIpsumIs}>Lorem Ipsum is simply</b>
            <div className={styles.loremIpsumIs1}>Lorem Ipsum is simply</div>
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
          <form className={styles.registerForm} onSubmit={handleSignup}>
            <div className={styles.rectangleGroup}>
              <input
                type="text"
                placeholder="Enter your User name"
                value={username}
                onChange={(e) => handleInputChange(e, setUsername)}
                className={styles.groupInner}
              />
              <div className={styles.userName}>User name</div>
            </div>
            <div className={styles.rectangleContainer}>
              <input
                type="text"
                placeholder="Enter your Email Address"
                value={userEmail}
                onChange={(e) => handleInputChange(e, setUserEmail)}
                className={styles.groupInner}
              />
              <div className={styles.userName}>Email Address</div>
            </div>
            <div className={styles.groupDiv}>
              <input
                type="password"
                placeholder="Enter your Password"
                value={userPassword}
                onChange={(e) => handleInputChange(e, setUserPassword)}
                className={styles.groupInner}
              />

              <div className={styles.userName}>Password</div>
            </div>
            <div className={styles.mrabet}>
              {/* <label htmlFor="role">Select Role:</label> */}
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={styles.mrabet}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild2} />
            <button className="button" style={{backgroundColor:"transparent"}} type="submit">
            {errorMessage && (
              <div className={styles.errorMessage}>{errorMessage}</div>
              )}
            {successMessage && (
              <div className={styles.successMessage}>{successMessage}</div>
              )}
              Register</button>
          </div>
              </form>
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

export default Register;
