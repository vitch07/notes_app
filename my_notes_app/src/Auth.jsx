import { useState } from "react";
import "./styles/auth.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

export default function Auth({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCred.user);
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  const login = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCred.user);
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <div className="auth-box">
      <h1>Welcome to the NotesApp</h1>
      <h3>Login / SignUp</h3>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <div className="auth-buttons">
        <button onClick={signup}>SignUp</button>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
