import React from "react";
import Image from "next/image";
type CardTeamProps = { image: string; name: string; position: string };
export default function CardTeam({ image, name, position }: CardTeamProps) {
  return (
    <>
      <div className="flex flex-col items-center   ">
        <Image
          loading="lazy"
          src={image}
          width={250}
          alt="image"
          height={250}
          className="rounded-lg drop-shadow-xl"
        />
        <h1 className="mt-4 text-2xl font-semibold ">{name}</h1>
        <p className="text-gray-600">- {position} -</p>
      </div>
    </>
  );
}
