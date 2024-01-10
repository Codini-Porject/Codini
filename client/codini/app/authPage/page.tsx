import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuthData {
  username: string;
  secret: string;
  email?: string;
  first_name?: string;
  last_name?: string;
}

const AuthPage: React.FC<{ onAuth: (userData: AuthData) => void }> = ({
  onAuth,
}) => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [first_name, setFirstName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        secret,
      });
      console.log(response.data);

      if (response && response.data) {
        onAuth({ ...response.data, secret });
      } else {
        console.log("Invalid response format");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(JSON.stringify(error.response.data));
      } else {
        console.log("Error during login:", error.message);
      }
    }
  };

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      });
      if (response && response.data) {
        onAuth({ ...response.data, secret });
      } else {
        console.log("Invalid response format");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(JSON.stringify(error.response.data));
      } else {
        console.log("Error during signup:", error.message);
      }
    }
  };
  return (
    <div className="login-page">
      <div className="card">
        <form onSubmit={onLogin}>
          <div className="title">Login</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit">LOG IN</button>
        </form>

        <form onSubmit={onSignup}>
          <div className="title">or Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">SIGN UP</button>
        </form>
      </div>

      <style>{`
      .login-page { width: 100vw; height: 100vh; padding-top: 6vw; background: linear-gradient(180deg, rgba(117,84,160,1) 7%, rgba(117,84,160,1) 17%, rgba(106,95,168,1) 29%, rgba(99,103,174,1) 44%, rgba(87,116,184,1) 66%, rgba(70,135,198,1) 83%, rgba(44,163,219,1) 96%, rgba(22,188,237,1) 100%, rgba(0,212,255,1) 100%); }
      .card { width: 200px; position: relative; left: calc(50vw - 100px); text-align: center; }
      .title { padding-top: 32px; font-size: 22px; color: white; font-weight: 700; }
      input { width: calc(100% - 16px); margin-top: 12px; padding: 8px; background-color: #e6f7ff; outline: none; border: 1px solid #e6f7ff; }
      button { margin-top: 12px; width: 100%; padding: 8px; }
      `}</style>
    </div>
  );
};

export default AuthPage;
