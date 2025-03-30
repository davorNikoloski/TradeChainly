import NotFound from "@/components/notFound/notFound";

export default function NotFoundPage() {
  return (
    <div className="home mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1 px-[14px]">
      <div className="absolute w-full h-screen gradient-bg top-0 z-[-1]">
        {/* Optional: Add any background or gradient here */}
      </div>
      <div className="home-cont w-full h-full flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full">
          <NotFound />
        </div>
      </div>
    </div>
  );
}