import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Tokenomix from "@/components/Tokenomic";
import InfoComponent from "../components/info";

export default function Home() {
  return (
    <div className="bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('/bg.png')" }}>
      <HeroSection />
      <AboutSection />
      {/* <Tokenomix /> */}
      <InfoComponent/>
      
    </div>
  );
}
