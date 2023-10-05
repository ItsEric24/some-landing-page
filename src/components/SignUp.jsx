function SignUp() {
  return (
    <div className="flex justify-center flex-col items-center bg-slate-400 p-12">
      <h1 className="text-4xl font-semibold mb-5 capitalize">Login</h1>
      <form className="flex flex-col w-[40%]">
        <label htmlFor="username" className="text-lg font-medium mb-1">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="username"
          className=" py-4 px-4 rounded-full mb-2"
        />
        <label htmlFor="password" className="text-lg font-medium mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="password"
          className=" py-4 px-4 rounded-full mb-2"
        />
        <div className="mt-4 flex justify-start items-center gap-2">
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <button className=" py-4 px-4 bg-yellow-400 mt-5 border-none outline-none rounded-full text-lg">
          Login
        </button>
      </form>
      <div className="flex gap-40 items-center p-10 bg-slate-300 mt-7">
        <p className="text-lg cursor-pointer text-black font-medium">
          Don&apos;t have an account?
        </p>
        <p className="text-lg cursor-pointer text-black font-medium">
          Forgot Password?
        </p>
      </div>
    </div>
  );
}
export default SignUp;
