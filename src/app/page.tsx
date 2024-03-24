import dynamic from "next/dynamic";
const Company_Overview = dynamic(() => import("./components/Company_Overview"));
const HeroPage = dynamic(() => import("./components/Hero"));
const ProductOurServices = dynamic(
  () => import("./components/ProductOurServices"),
);
const Testimoni = dynamic(() => import("./components/Testimoni"));

export default function Home() {
  return (
    <main className=" bg-stone-200">
      <HeroPage />
      <Company_Overview />
      <ProductOurServices />
      <Testimoni />
    </main>
  );
}
