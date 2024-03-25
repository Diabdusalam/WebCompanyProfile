import Image from "next/image";
export const CompanyHistory = () => {
  return (
    <section className=" relative flex h-screen items-center justify-center bg-gray-100 py-12 max-md:h-[1000px] ">
      <div className="container mx-auto my-12 items-center justify-items-center md:flex  md:h-screen">
        <div className="w-full ">
          <h1 className="mb-16 text-3xl font-bold text-gray-900 max-md:text-center md:text-4xl">
            Our Journey
          </h1>
          <p className="md:text- mb-4 text-lg leading-relaxed text-gray-800">
            We embarked on our journey in the world of travel back in 2018, with
            one clear goal: to inspire and provide unforgettable experiences for
            travelers worldwide. Since our inception, we've been committed to
            delivering the finest services and making every adventure a precious
            story. With each step and milestone, we continue to chart a course
            that brings us closer to our vision of becoming your trusted
            companion in your travels.
          </p>
        </div>
        <div className="mt-6 w-full md:ml-10 md:mt-0">
          <Image
            loading="lazy"
            src="/CompanyHistory.jpg"
            alt="image"
            width={500}
            height={300}
            className=" shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
