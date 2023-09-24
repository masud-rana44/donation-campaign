export const Header = () => {
  return (
    <div className="relative h-[600px] w-full bg-[url('/bg.jfif')]  bg-center bg-cover flex items-center justify-center">
      <div className="bg-[#FFFFFFF2] inset-0 absolute"></div>
      <div className="flex flex-col gap-10 z-10">
        <h1 className="text-5xl text-[#0B0B0B] font-bold">
          I Grow By Helping People In Need
        </h1>
        <form className="relative flex w-[470px] mx-auto">
          <input
            type="text"
            placeholder="Search here...."
            className="flex-1 px-4 py-[13px] rounded-l-lg border-[1px] border-[#DEDEDE focus-visible:ring-0 focus-visible:outline-0 placeholder:text-[14px] placeholder:text-[#0B0B0B66]"
          />
          <button className="font-semibold text-white bg-[#FF444A] px-7 rounded-r-lg">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
