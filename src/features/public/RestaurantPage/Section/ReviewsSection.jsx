import ReviewCard from "../Card/ReviewCard";

export default function ReviewsSection() {
  return (
    <section className="w-full mt-28 flex items-center justify-center bg-[#0e1b21] ">
      <div className="w-1980px flex flex-col items-center justify-center">
        {/* Title */}
        <div className="flex flex-col self-stretch pr-7 pl-16  w-full text-4xl text-center text-lime-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="self-center w-[243px] max-md:mt-10">
            Үйлчлүүлэгчдийн сэтгэгдэл
          </h2>
        </div>

        {/* Divider */}
        <div className="shrink-0 mt-14 max-w-full h-px border border-lime-50 border-solid w-[1620px] max-md:mt-10" />

        {/* Review Cards */}
        <div className="mt-10 w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-full max-md:ml-0 max-md:w-full">
              <ReviewCard>
                Амт чанар цэвэр тохилог орчинтой гоё газар байлаа. Амжилт
              </ReviewCard>
            </div>
            <div className="ml-5 w-full max-md:ml-0 max-md:w-full">
              <ReviewCard>Very nice chef we love this restaurant ♥</ReviewCard>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="shrink-0 mt-10 max-w-full h-px border border-lime-50 border-solid w-[1620px]" />
      </div>
    </section>
  );
}
