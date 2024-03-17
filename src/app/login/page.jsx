import Header from "@/components/layout/Header";

const Login = () => {
  return (
    <>
      <Header />
      <h1 className="title">Login</h1>
      <form
        action=""
        className="flex items-center flex-col border-2 border-black p-8 w-2/3 mt-4 mx-auto"
      >
        <input
          type="text"
          placeholder="email"
          className="my-4 outline-green-400 p-2 min-w-full border-2"
        />
        <input
          type="text"
          placeholder="password"
          className="my-4 outline-green-400 p-2 min-w-full border-2"
        />
        <button className="bg-primary text-white py-1 px-3 rounded-lg font-semibold mt-2 hover:bg-hover transition ease-in-out delay-150">
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
