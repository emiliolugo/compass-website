'use client'



export default function HeroPage(){

    

    return(
        <div className="w-full h-screen relative bg-gradient-to-r from-neutral-800 to-neutral-900 z-0">
            <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="flex flex-col items-center w-[50vw]">
                <h1 className="text-5xl xl:text-6xl font-black text-white tracking-tighter">
                    The Academic Weapons
                </h1>
                <p className="text-center hidden md:block mx-5">
                    Hello! We are The Academic Weapons, a group from Keith Dayton&apos;s 6:30 section of BUS-T 175.
                </p></div>
            </div>
    <div className="absolute w-[55vw] h-[80vh] bottom-0 z-20 bg-gradient-to-r from-neutral-900 to-neutral-900 shadow-lg">
    </div>

    <div className="absolute w-[40vw] h-screen bottom-0 z-10 bg-black shadow-xl">
    </div>
    
</div>
    )
}