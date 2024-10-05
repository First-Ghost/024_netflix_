export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer border uppercase">
        Ma<span className="text-3xl mb-6">ul</span>la
      </h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-500 px-6 py-2 rounded cursor-pointer text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};
