import Image from "next/image";

type TypeProduct = {
  image: string;
  country: string;
  city: string;
  price: string;
};

export default function CardProduct({
  image,
  country,
  city,
  price,
}: TypeProduct) {
  return (
    <div className="relative ">
      <Image
        loading="lazy"
        src={image}
        alt="image"
        width={250}
        height={250}
        className="  h-full rounded-lg  shadow-lg brightness-75 "
      />

      <div className="absolute top-0 mx-auto mt-8  w-full   text-center font-sans text-white ">
        <h1 className="text-lg">{country}</h1>
        <p className="text-xl">{city}</p>
      </div>
      <div className="absolute bottom-0 mx-auto mb-8 flex w-full justify-center text-center font-sans text-white ">
        <p>{price}</p>
      </div>
    </div>
  );
}
