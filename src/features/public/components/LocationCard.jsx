export default function LocationCard({ address }) {
  return (
    <div className="flex items-center justify-center gap-5 self-stretch my-auto w-[30%] max-md:w-full">
      <div className="shrink-0 w-px border border-white border-solid h-[121px]" />
      <div className="flex items-center justify-center flex-auto gap-1.5 my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e618dfbc6e0e1335288cb63f1fd6bd58e9ec07e68f1b39636140df6de8646074?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          alt="Location icon"
          className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
        />
        <address className="self-stretch my-auto text-center not-italic flex-1">
          {address}
        </address>
      </div>
    </div>
  );
}
