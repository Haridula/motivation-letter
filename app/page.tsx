import Image from "next/image";
import MotivationLetter from "@/markdown/MotivationLetter.mdx";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-1/3 max-sm:hidden max-md:hidden mx-auto py-10 flex-grow">
        <MotivationLetter />
      </div>
      <div className="md:hidden w-4/5 mx-auto py-10 flex-grow">
        <MotivationLetter />
      </div>
      <footer className="text-center text-subtext w-full py-6">
        2026 Konstantin Razdolski
      </footer>
    </div>
  );
}
