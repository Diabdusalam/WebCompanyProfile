import CardTestimoni from "./Fragments/CardTestimoni";

function Testimoni() {
  return (
    <section className="justify-center bg-gray-100 md:h-screen">
      <div className="mx-auto flex  flex-wrap justify-center gap-12 px-4 py-16">
        <CardTestimoni
          icon="SU"
          name="SUNARYO"
          description="It was truly fantastic! I couldn't stop myself from cheering 'wohooo' throughout. Thank you immensely!"
          trip="Trip to Sahara"
        />
        <CardTestimoni
          icon="BU"
          name="BUDI"
          description="The journey was absolutely incredible, and there was something so captivating about that island that ignites a desire within me to delve deeper and learn more"
          trip="Trip to Turki"
        />
        <CardTestimoni
          icon="AS"
          name="ASEP"
          description="The journey was absolutely incredible, and there was something so captivating about that island that ignites a desire within me to delve deeper and learn more"
          trip="Trip to Japan"
        />
      </div>
    </section>
  );
}

export default Testimoni;
