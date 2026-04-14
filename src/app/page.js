import Banner from "@/components/HomePage/Banner";
import Divider from "@/components/HomePage/Divider";
import Friends from "@/components/HomePage/Friends";
import Stats from "@/components/HomePage/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-20 container mx-auto space-y-10">
      <Banner />
      <Stats />
      <Divider />
      <Friends />
    </div>
  );
}
