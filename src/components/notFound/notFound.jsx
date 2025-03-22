import Link from 'next/link';
import GetStartedButton from "../buttons/GetStartedButton";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h1 className="text-9xl font-bold relative">
        <span className="text-white">4</span>
        <span className="text-purple-500 drop-shadow-[0_0_8px_rgba(128,0,255,0.7)]">0</span>
        <span className="text-white">4</span>
      </h1>
      <p className="text-2xl font-semibold mt-4">We couldn’t reach out to this page!</p>
      <p className="text-gray-400 mt-2 max-w-lg">
        The Page you are looking for doesn’t exist or has been removed by the owner! Try Again later for the update in page.
      </p>
      <div className='pt-[2rem]'>
        <GetStartedButton
            href="/"
            text="Back To Home"
            showArrow={true}
            width="200px"
        />
      </div>
    </div>
  );
}
