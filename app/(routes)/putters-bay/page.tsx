'use client'

import Navbar from "@/components/Navbar"
import PuttersBayBody from "@/components/PuttersBayBody";

export default function PuttersBayPage() {
  return (
    <div>
        <div >
          <div className="bg-neutral-900">
            <Navbar /></div><div className="h-[95vh] bg-neutral-900 flex flex-col text-center">
            <h1 className="text-6xl font-black my-auto">
              
                Putter&apos;s Bay Case
            </h1>
            </div>
        </div>
        <div>
       <PuttersBayBody />
        </div>
    </div>
  );
}
