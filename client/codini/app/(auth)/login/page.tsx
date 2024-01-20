"use client";
import styles from "../../styles/login.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { useIdentity } from "../IdentityContext";
import Cookies from "js-cookie";

const Login = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [userRole, setUserRole] = useState("");
  const { setUser } = useIdentity();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      if (!selectedRole) {
        setErrorMessage("Please select a role");
        return;
      }
      
      const response = await axios.post("http://localhost:8000/auth/login", {
        email: userEmail,
        password: userPassword,
        role: selectedRole,
      });
      console.log(response.data);
      
      const { token, userId, role } = response.data;
      
      if (token && userId && role) {
       console.log("hhhhhhhh",userId);
       
        setUser({
          id: userId,
          role: role,
          email: userEmail,
          password: userPassword,
        });
        
        Cookies.set("authToken", token, { expires: 60 * 60 * 24 });
        router.push(`teacher/${userId}`);
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setErrorMessage("Error during login. Please try again.");
      console.error("Error during login:", error);
    }
  };

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
                placeholder="Enter your Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className={styles.groupInner}
              />
              <div className={styles.userName}>Email</div>
              <div className={styles.enterYourUser}></div>
            </div>
            <div className={styles.groupParent1}>
              <div className={styles.rectangleContainer}>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
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
          </div>
          <div className={styles.rectangleParent1}>
            {/* <div className={styles.groupChild1} /> */}
          </div>
          <div className={styles.rectangleParent2}>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className={styles.roleSelect}
            >
              <option value="">Select Role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className={styles.rectangleParent2}>
            <button className={styles.login2} onClick={handleSubmit}>
              Login
            </button>
            {errorMessage && (
              <div className={styles.errorMessage}>{errorMessage}</div>
            )}
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

export default Login;
