"use client";
import { useState } from "react";
import Image from "next/image";
import { Loader } from "@/components/layout/Loader";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const isEmail = email.length;
  const isPass = password.length;

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: '/'});

    setLoginInProgress(false);
    clearInputs();
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 font-bold">
        Login
      </h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          name="email"
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          name="password"
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={isEmail && isPass ? false : true}>
          {loginInProgress ? <Loader size={20} /> : "Login"}
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button type="button" onClick={()=> signIn('google', {callbackUrl: '/'})} className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="google-logo" width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
