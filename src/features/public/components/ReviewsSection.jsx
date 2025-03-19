import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  return (
    <section className="w-full mt-28 flex items-center justify-center bg-[#0e1b21]">
      <div className="w-full max-w-[1980px] flex flex-col items-center justify-center px-4 md:px-16">
        <div className="w-full text-4xl text-center text-lime-500 max-md:text-3xl max-md:mt-8">
          <h2 className="mx-auto w-fit max-md:mt-8">
            Үйлчлүүлэгчдийн сэтгэгдэл
          </h2>
        </div>

        <div className="mt-14 w-full max-w-[1620px] h-px border border-lime-50 border-solid max-md:mt-10" />

        <div className="mt-10 w-full">
          <div className="flex flex-col gap-5 md:flex-row md:gap-10">
            <div className="w-full">
              <ReviewCard>
                Амт чанар цэвэр тохилог орчинтой гоё газар байлаа. Амжилт
              </ReviewCard>
            </div>
            <div className="w-full">
              <ReviewCard>Very nice chef we love this restaurant ♥</ReviewCard>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 w-full max-w-[1620px] h-px border border-lime-50 border-solid" />
      </div>
    </section>
  );
}
