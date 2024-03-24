import React from "react";
import { Handshake, Speech, UserRoundPlus, Clock1 } from "lucide-react";
import CardCulture from "./fragment/CardCulture";
export const Culture = () => {
  return (
    <section className=" flex items-center justify-center bg-gray-100 md:h-screen ">
      <div className="mx-auto flex flex-wrap justify-center gap-4  px-4 py-16">
        <CardCulture
          icon={<Handshake className=" mb-4 h-12 w-12" />}
          title="Amazing Teams"
          desc="Amazing teams thrive on collaboration, trust, and diversity, achieving extraordinary results through synergy and mutual support"
        />
        <CardCulture
          icon={<Speech className=" mb-4 h-12 w-12" />}
          title="Commitment to Excellence"
          desc="We are dedicated to achieving the highest standards of excellence in every aspect of our work"
        />
        <CardCulture
          icon={<UserRoundPlus className=" mb-4 h-12 w-12" />}
          title="Positive Impact"
          desc="e not only focus on business success, but also on making a positive impact on the world around us through social actions and corporate social responsibility"
        />
        <CardCulture
          icon={<Clock1 className=" mb-4 h-12 w-12" />}
          title="Respect for Time"
          desc="In our company culture, we highly value punctuality and efficiency, recognizing that time is a precious resource. We prioritize promptness in our work processes and meetings"
        />
      </div>
    </section>
  );
};
