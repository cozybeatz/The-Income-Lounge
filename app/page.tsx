import Image from "next/image";
import Header from "./components/Header";
import SocialProof from "./components/SocialProof";
import TheOtherSide from "./components/TheOtherSide";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <SocialProof />
      <TheOtherSide />
    </main>
  );
}
