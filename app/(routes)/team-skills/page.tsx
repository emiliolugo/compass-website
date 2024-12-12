'use client'

import Navbar from "@/components/Navbar"
import TeamSkillsBody from "@/components/TeamSkillsBody";

export default function PuttersBayPage() {
  return (
    <div>
        <div >
          <div className="bg-neutral-900">
            <Navbar /></div><div className="h-[95vh] bg-neutral-900 flex flex-col text-center">
            <h1 className="text-6xl font-black my-auto">
              
                Team Skills
            </h1>
            </div>
        </div>
        <div>
       <TeamSkillsBody />
        </div>
    </div>
  );
}
