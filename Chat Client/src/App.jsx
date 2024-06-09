import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState("");

  return !user ? (
    <AuthPage onAuth={(user) => setUser(user)} />
  ) : (
    <ChatsPage user={user} />
  );
}

export default App;
