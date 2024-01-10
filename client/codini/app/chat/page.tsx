"use client";
import { useState } from "react";
import { NextPage } from "next";
import AuthPage from "../authPage/page";
import ChatsPage from "../chatsPage/page";

interface User {
  username: string;
  secret: string;
}

const App: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <AuthPage onAuth={(userData: User) => setUser(userData)} />;
  } else {
    return <ChatsPage user={user} />;
  }
};

export default App;
