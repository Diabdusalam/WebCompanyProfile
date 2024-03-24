import React from "react";
import Image from "next/image";

type CardTeamProps = {
  image: string;
  name: string;
  email: string;
};
export default function CardTeam({ image, name, email }: CardTeamProps) {
  return (
    <>
      <div className="relative  overflow-hidden rounded-lg bg-gray-100 shadow-lg transition duration-300 group-hover:shadow-xl">
        <Image
          loading="lazy"
          src={image}
          alt="image"
          width={150}
          height={150}
          className="h-72 w-72 object-cover"
        />
        <div className="p-4">
          <h1 className="mb-2 text-xl font-semibold text-gray-800 transition duration-300 group-hover:text-yellow-500 md:text-2xl lg:text-3xl">
            {name}
          </h1>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
    </>
  );
}
