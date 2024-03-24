export default function HeroPageAbout() {
  return (
    <div className=" flex h-screen w-full flex-col items-center  justify-center bg-[url('/HeroAbout.jpg')] bg-cover text-white  ">
      <div className=" mt-24 grid justify-items-center gap-y-4 pb-10 text-center max-lg:text-2xl lg:tracking-wide ">
        <div className=" text-balance font-bold tracking-wide md:text-7xl ">
          <h1>Who we Are ?</h1>
        </div>
      </div>
    </div>
  );
}
