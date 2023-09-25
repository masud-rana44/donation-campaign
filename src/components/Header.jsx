export const Header = ({ searchText, setSearchText, handleSubmit }) => {
  return (
    <div className="relative h-[600px] w-full bg-[url('/bg.jfif')]  bg-center bg-cover flex items-center justify-center">
      <div className="bg-[#FFFFFFF2] inset-0 absolute"></div>
      <div className="flex flex-col gap-10  px-4 lg:px-0 z-10 text-center">
        <h1 className="text-4xl md:text-5xl text-[#0B0B0B] font-bold leading-[50px]">
          I Grow By Helping People In Need
        </h1>
        <form
          onSubmit={handleSubmit}
          className="relative flex w-auto md:w-[470px] mx-auto"
        >
          <input
            type="text"
            placeholder="Search here...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 px-4 py-[13px] rounded-l-lg border-[1px] border-[#DEDEDE focus-visible:ring-0 focus-visible:outline-0 placeholder:text-[14px] placeholder:text-[#0B0B0B66]"
          />
          <button className="font-semibold text-white bg-[#FF444A] px-7 rounded-r-lg transition hover:opacity-90">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
