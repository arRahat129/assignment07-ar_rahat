import Banner from "@/components/HomePage/Banner";
import Divider from "@/components/HomePage/Divider";
import Stats from "@/components/HomePage/Stats";
import Friends from "./friends/page";

export default function Home() {
  return (
    <div className="mt-20 space-y-10">
      <Banner />
      <Stats />
      <Divider />
      <Friends />
    </div>
  );
}
