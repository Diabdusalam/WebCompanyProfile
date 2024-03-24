import CardProduct from "./Fragments/CardProduct";

export default function ProductOurServices() {
  return (
    <section className="md:h-screen">
      <div className="flex h-full w-full flex-col items-center justify-center  py-12">
        <div className="w-full gap-y-8 py-10 text-center  text-4xl font-bold tracking-wide text-gray-800">
          <p> Create Timeless </p>
          <p> Memories </p>
        </div>

        <div className="flex justify-center gap-8  max-md:flex-wrap">
          <CardProduct
            image="/bali.jpg"
            country="INDONESIA"
            city="DERATAN,BALI"
            price="Rp.10.000/Person"
          />
          <CardProduct
            image="/dubai.jpg"
            country="MIDDLE EAST"
            city="DUBAI, UAE"
            price="Rp.2.500/Person"
          />
          <CardProduct
            image="/tokyo.jpg"
            country="JEPANG"
            city="TOKYO"
            price="Rp.13.000/Person"
          />
          <CardProduct
            image="/cappadocia.jpg"
            country="TURKI"
            city="CAPPADOCIA"
            price="Rp.11.500/Person"
          />
        </div>
      </div>
    </section>
  );
}
