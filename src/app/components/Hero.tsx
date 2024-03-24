export default function HeroPage() {
  return (
    <div className=" flex h-screen w-full flex-col items-center  justify-center bg-[url('/background.jpg')] bg-cover text-white  ">
      <div className=" mt-24 grid justify-items-center gap-y-4 pb-10 text-center max-lg:text-2xl lg:tracking-wide">
        <div className="grid gap-y-4 text-balance font-bold lg:text-5xl">
          <h1>Explore Our World's Wonders</h1>
          <h1>With Just One Simple Click</h1>
        </div>
        <div className="text-lg max-md:text-[1rem]">
          <p>You will see beautiful</p>
          <p>moment you never see before</p>
        </div>
        <button className="mb-8 mt-8 w-32 rounded bg-white p-3 font-bold text-black  hover:bg-gray-300 max-lg:text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
}
