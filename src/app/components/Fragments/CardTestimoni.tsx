import React from "react";

type CardTestimoniProps = {
  icon: string;
  name: string;
  description: string;
  trip: string;
};

export default function CardTestimoni({
  icon,
  name,
  description,
  trip,
}: CardTestimoniProps) {
  return (
    <div className="h-96 w-80 ">
      <div className=" relative flex h-full w-full flex-col  gap-y-4 rounded-lg border bg-white p-6 text-center shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
          <p className="font-bold text-white">{icon}</p>
        </div>

        <p className="font-bold text-blue-600">- {name} -</p>
        <p className="mb-4 text-lg text-gray-800">{description}</p>
        <p className=" absolute inset-x-0 bottom-0 mb-10 border-t pt-2  text-center  text-sm font-semibold text-gray-600">
          {trip}
        </p>
      </div>
    </div>
  );
}
