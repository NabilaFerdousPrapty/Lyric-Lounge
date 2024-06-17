import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-6xl">Welcome to Lyric Lounge</h1>

    </div>
    </div>
  );
}
