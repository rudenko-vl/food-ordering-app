"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit (ev) {
    ev.prventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
  
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
    setError(true);
    }
    setCreatingUser(false);
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && 
      (<div className="my-4 text-center">
          User created.<br/> 
          Now you can{' '}
          <Link className="underline" href={'/login'}>Login &raquo</Link>
        </div>)}

        {error && 
      (<div className="my-4 text-center">
          Error<br/> 
          Please try again later
        </div>)}

      <form action="" className="block mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={creatingUser}>Register</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image
            src={"/google.png"}
            alt="google-logo"
            width={24}
            height={24}
            className=""
          />
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
