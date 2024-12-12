import MemberCard from "./MemberCard"

export default function TeamPage(){
    const TeamInfo = [
        {
            name: "Emilio Lugo",
            image: "/images/emilio.jpeg",
            intro:"Hello, I am Emilio Lugo, I am originally from Mexico, but I have lived in Saint Louis, Missouri for the past 10 years. I am currently pursuing a Major in Finance and a minor in Computer Science. I am very interested in technology, and I am looking forward to create my own tech business in the future. I am eager to learn more as I continue my career at university and the professional world. Feel free to reach out for anything!",
            linkedin: "https://www.linkedin.com/in/emilio23lugo/",
            email:"emlugo@iu.edu",

        },
        {
            name: "Ryan Cortes",
            image: "/images/ryan.jpg",
            intro:"Hello, my name is Ryan Cortes and I’m from San Francisco, California. I’m currently pursuing a major in Finance and a minor in Mathematics. I’ve gained experience through internships and jobs across customer service, finance, operations, and real estate. I intend to further develop my skills by joining clubs and workshops and pursuing additional opportunities. I’m eager to apply my knowledge and continue growing as I explore new opportunities. ",
            linkedin: "www.linkedin.com",
            email:"emlugo@iu.edu",

        },
        {
            name: "Kelly Freeman",
            image: "/images/kelly.jpg",
            intro:"Hello, my name is Kelly Freeman, and I am a freshman at the Kelley School of Business, majoring in Finance. I am a driven and passionate student, eager to learn and grow both academically and professionally. I am a member of the Sales Club, and I plan to get involved in many other organizations to make the most of the opportunities at Indiana University. I am excited to expand my skills and experiences to contribute meaningfully to the business world in the future.",
            linkedin: "https://www.linkedin.com/in/kelly-freeman-5a801a25b/",
            email:"kellfree@iu.edu",
        },
        {
            name: "Alex Huelsman",
            image: "/images/alex.jpg",
            intro:"Hi, I’m Alex Huelsman and I am from Lincolnshire, Illinois. I am pursuing a double major in Kelley with accounting and information systems. I am working towards this by staying dedicated to my education which I would like to use to open different career paths for myself. I am involved in different sports organizations at IU and try to apply that teamwork to work environments. I am excited to apply my experiences from Kelley to help me become successful in the future.",
            linkedin: "www.linkedin.com",
            email:"alehuels@iu.edu",
        },
        {
            name: "Kelly Freeman",
            image: "/images/placeholder-square.jpg",
            intro:"Hello, my name is Kelly Freeman, and I am a freshman at the Kelley School of Business, majoring in Finance. I am a driven and passionate student, eager to learn and grow both academically and professionally. Currently, I am a member of the Sales Club, and I plan to get involved in many other organizations to make the most of the incredible opportunities at Indiana University. I am excited to expand my skills and experiences to contribute meaningfully to the business world in the future.",
            linkedin: "www.linkedin.com",
            email:"emlugo@iu.edu",
        },
        
        
    ]

    return(
        <div className="h-auto bg-zinc-300">
            <h2 className="text-6xl font-bold p-10 text-stone-900">
                Meet the Team
            </h2>
        <div className="grid-cols-3 grid gap-10 p-20">
            {TeamInfo.map((teammate, index) =>(
                <MemberCard 
                name={teammate.name}
                image={teammate.image}
                intro = {teammate.intro}
                linkedin={teammate.linkedin}
                email = {teammate.email}
                color = {index%2==0 ? "bg-gradient-to-r from-gray-300 to-gray-400":"bg-gray-400"}/>
            ))}
        </div>
        </div>

    )
}