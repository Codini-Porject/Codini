// import NextAuth from "next-auth";
// import { authConfig } from "./app/authconfig";

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ["/((?!api|static|.*\\..*|_next).*)"],
// };

const middleware = (req, res, next) => {
  // Middleware logic implementation
  console.log("Middleware is working!");
};

export default middleware;
