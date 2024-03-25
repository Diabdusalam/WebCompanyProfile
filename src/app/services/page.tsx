import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      {/* hero */}
      <div className=" flex h-screen w-full flex-col items-center  justify-center bg-[url('/Services.jpg')] bg-cover text-white  ">
        <div className=" mt-24 grid justify-items-center gap-y-4 pb-10 text-center max-lg:text-2xl lg:tracking-wide ">
          <div className=" text-balance font-bold tracking-wide md:text-7xl ">
            <h1>Services</h1>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="my-40 h-full w-full">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="max:md:text-xl py-4 text-3xl font-bold max-md:text-center">
            IT'S TIME TO START YOUR ADVENTURES
          </h1>

          <div className="grid gap-4 gap-y-8 md:grid-cols-2 md:place-content-center md:p-10">
            <div className="flex flex-col items-center justify-center p-4">
              <Image
                loading="lazy"
                src="/Photography_Tours.jpg"
                alt="image"
                width={400}
                height={300}
                className="shadow-2xl"
              />
              <h1 className="mt-4 text-center text-2xl font-semibold">
                Photography Tours
              </h1>
              <p>
                For amateur or professional photographers, provide guided tours
                led by experienced photographers to help them capture the best
                images of tourist destinations
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <Image
                loading="lazy"
                src="/solo_travel.jpg"
                alt="image"
                width={400}
                height={300}
                className="shadow-2xl"
              />
              <h1 className="mt-4 text-center text-2xl font-semibold">
                Solo Travel Packages
              </h1>
              <p>
                For solo travelers, provide safe and comfortable packages with
                suitable accommodations and social activities to meet other
                travelers.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <Image
                loading="lazy"
                src="/CompanyHistory.jpg"
                alt="image"
                width={400}
                height={300}
                className="shadow-2xl"
              />
              <h1 className="mt-4 text-center text-2xl font-semibold">
                Family Trips
              </h1>
              <p>
                Develop special packages for families with kid-friendly
                facilities, activities suitable for all ages, and accommodations
                that are family-friendly.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <Image
                loading="lazy"
                src="/businis.jpg"
                alt="image"
                width={400}
                height={300}
                className="shadow-2xl"
              />
              <h1 className="mt-4 text-center text-2xl font-semibold">
                Business Travel Packages
              </h1>
              <p>
                Specialized services for business travel that include hotel
                reservations, transportation, and conference or business meeting
                facilities at the destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
