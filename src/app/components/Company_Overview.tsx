import React from "react";
import Image from "next/image";
export default function Company_Overview() {
  return (
    <section className=" flex h-screen items-center justify-center bg-gray-100 py-12 max-md:h-[1000px]">
      <div className="container mx-auto  items-center justify-items-center py-12 md:flex  md:h-screen">
        <div className="w-full ">
          <h1 className="mb-16 text-3xl font-bold text-gray-900 md:text-4xl">
            Overview
          </h1>
          <p className="md:text- mb-4 text-lg leading-relaxed text-gray-800">
            Discover our array of curated travel experiences designed to ignite
            your wanderlust. From luxurious retreats on secluded islands to
            adrenaline-fueled expeditions in exotic locales, each journey
            promises unparalleled excitement and relaxation. Start your
            adventure today
          </p>
        </div>
        <div className="mt-6 w-full md:ml-10 md:mt-0">
          <Image
            loading="lazy"
            src="/Bali.jpg"
            alt="image"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    // <section className=" flex h-screen items-center justify-center bg-gray-100 py-12">
    //   <div className="container mx-auto items-center justify-items-center md:flex">
    //     <div className="w-full md:ml-24 ">
    //       <h1 className="mb-16 text-3xl font-bold text-gray-900 max-md:mt-12 max-md:text-center md:text-4xl">
    //         Overview
    //       </h1>
    //       <p className="text-lg leading-relaxed text-gray-800 md:text-xl">
    //         Discover our array of curated travel experiences designed to ignite
    //         your wanderlust. From luxurious retreats on secluded islands to
    //         adrenaline-fueled expeditions in exotic locales, each journey
    //         promises unparalleled excitement and relaxation. Start your
    //         adventure today
    // //       </p>
    //     </div>
    //     <div className="mt-6 w-full md:ml-10 md:mt-0">
    //       <Image
    //         loading="lazy"
    //         src="/Bali.jpg"
    //         alt="image"
    //         width={300}
    //         height={300}
    //         className="rounded-lg shadow-lg"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}
