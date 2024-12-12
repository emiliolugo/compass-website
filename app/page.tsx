import HeroPage from "@/components/Hero";
import TeamPage from "@/components/MeetTheTeam";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
     <HeroPage />
     <TeamPage />
    </>
  );
}
