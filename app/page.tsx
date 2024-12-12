import HeroPage from "@/components/Hero";
import TeamPage from "@/components/MeetTheTeam";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
     <HeroPage />
     <TeamPage />
    </>
  );
}
