"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Header = () => {
  const session = useSession();
  console.log(session);
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <header className="flex items-center justify-between border-b p-3 shadow-md shadow-black/25">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="">
          ST PIZZA
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={"#menu"}>Menu</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#contact"}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === "authenticated" ? (
          <>
            <Link className="whitespace-nowrap" href={"/profile"}>
              Hello, {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-primary text-white px-8 py-2 rounded-full"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              className="bg-primary text-white px-8 py-2 rounded-full"
              href={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
