import React from "react";
import Image from "next/image";
import CardTeam from "./fragment/Cardteam";
export const Teams = () => {
  return (
    <>
      <section className="md:h-screen">
        <div className="flex h-full w-full flex-col items-center justify-center  py-12">
          <div className="mt-8 w-full gap-y-8 py-10 text-center font-bold tracking-wide text-gray-800">
            <p className="text-4xl"> Our Team </p>
          </div>

          <div className="flex justify-center gap-8  max-md:flex-wrap">
            <CardTeam
              image="/person/person1.jpg"
              name="Susi"
              position="Vice President"
            />
            <CardTeam
              image="/person/person2.jpg"
              name="Baud"
              position="Manajer Pemasaran"
            />
            <CardTeam
              image="/person/person3.jpg"
              name="Eko"
              position="Asisten Kantor"
            />
            <CardTeam
              image="/person/person4.jpg"
              name="Susilo"
              position="Staff"
            />
          </div>
        </div>
      </section>
    </>
  );
};
