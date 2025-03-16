import LocationCard from "../Card/LocationCard";
export default function LocationSection() {
  const locations = [
    "WVF8+5V8 Ard Ayush Ave, BGD - 13 khoroo, Ulaanbaatar 16091",
    "WVF8+5V8 Ard Ayush Ave, BGD - 13 khoroo, Ulaanbaatar 16091",
    "WVF8+5V8 Ard Ayush Ave, BGD - 13 khoroo, Ulaanbaatar 16091",
  ];

  return (
    <div className="w-full  h-[600px] flex items-center justify-center bg-gradient-to-b from-[#0e1b21] to-[#1A2E38] transition-all duration-1000 ease-in-out">
      <section className="w-full max-w-[1920px] px-4">
        <h2 className="salbar text-4xl text-center text-lime-500 font-bold max-md:mt-10 font-['Mon_University']">
          Салбар байршил
        </h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mt-12 text-2xl text-center text-white max-md:gap-6">
          {locations.map((address, index) => (
            <LocationCard key={index} address={address} />
          ))}
        </div>
      </section>
    </div>
  );
}
