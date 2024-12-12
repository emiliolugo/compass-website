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
            image: "/images/alex1.png",
            intro:"Hi, I’m Alex Huelsman and I am from Lincolnshire, Illinois. I am pursuing a double major in Kelley with accounting and information systems. I am working towards this by staying dedicated to my education which I would like to use to open different career paths for myself. I am involved in different sports organizations at IU and try to apply that teamwork to work environments. I am excited to apply my experiences from Kelley to help me become successful in the future.",
            email:"alehuels@iu.edu",
        },
        {
            name: "Jonathan Brennan",
            image: "/images/johnathan.jpg",
            intro: "Hi, my name is Jonathan Brennan, and I’m from Greenwich, Connecticut. I’m currently pursuing a major in Finance, a field I’m deeply passionate about. I’ve gained valuable experience through internships at private equity firms, as well as leadership roles in community service, including serving as Youth Director at the Boys and Girls Club of Greenwich. I’m eager to continue expanding my knowledge and expertise in finance by exploring new opportunities and internships that challenge and inspire me.",
            email:"emlugo@iu.edu",
        },
        
        
    ]

    return(
        <div className="h-auto bg-zinc-300 pb-20">
            <h2 className="text-6xl font-bold p-10 text-stone-900">
                Meet the Team
            </h2>
        <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid gap-10 md:p-20">
            {TeamInfo.map((teammate, index) =>(
                <MemberCard 
                key={index}
                name={teammate.name}
                image={teammate.image}
                intro = {teammate.intro}
                email = {teammate.email}
                color = {index%2==0 ? "bg-gradient-to-r from-gray-300 to-gray-400":"bg-gray-400"}/>
            ))}
        </div>
        </div>

    )
}