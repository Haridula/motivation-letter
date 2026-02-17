import Image from "next/image";
import MotivationLetter from "@/markdown/MotivationLetter.mdx";


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-1/3 mx-auto py-10">
        <MotivationLetter />
      </div>
      <footer className="text-center text-subtext absolute bottom-4 w-full">
        2026 Konstantin Razdolski
      </footer>
    </div>
  );
}
