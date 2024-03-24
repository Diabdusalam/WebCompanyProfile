import React from "react";
type CardCultureProps = { icon: JSX.Element; title: string; desc: string };
export default function CardCulture({ icon, title, desc }: CardCultureProps) {
  return (
    <section>
      <div className="flex  h-96 w-64   items-center justify-center rounded-lg   ">
        <div className="flex flex-col items-center  text-center">
          {icon}
          <h1 className="mb-4 text-xl font-bold text-gray-800">{title}</h1>
          <p className="text-md text-gray-600">{desc}</p>
        </div>
      </div>
    </section>
  );
}
