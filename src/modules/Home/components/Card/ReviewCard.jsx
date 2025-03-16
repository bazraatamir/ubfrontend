export default function ReviewCard({ children }) {
  return (
    <article className=" px-11 py-20 w-full text-2xl text-center text-white bg-[#0e1b21] border border-solid border-white border-opacity-40 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      {children}
    </article>
  );
}
