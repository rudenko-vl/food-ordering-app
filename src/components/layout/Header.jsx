import Link from "next/link";
const Header = () => {
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
        <Link href={"/login"}>Login</Link>
        <Link
          className="bg-primary text-white px-8 py-2 rounded-full"
          href={"/register"}
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
