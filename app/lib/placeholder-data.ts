const companies = [
  {
    id: '64a10f4c-5e07-41c0-a5e9-172b84f9eac1',
    name: 'Bloomberg',
    position: 'Incoming Software Engineer',
    image_url: '/bloomberg.jpg',
    info: "Incoming Summer 2025",
    info_url:"/mike.jpeg"
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Bloomberg',
    position: 'Software Engineer Intern',
    image_url: '/bloomberg.jpg',
    info: "Joined Bloomberg Law on the Integrations and Workflows Team, where I developed an Artificial Intelligence tool to improve litigation workflows. Implemented sophisticated Retrieval-Augmented (RAG) methodologies to minimize hallucinations and deliver accurate results. Additionally, was tasked with implementing pixel perfect front end designs in Vue.js based off of provided designs, ensuring a seamless and visually consistent user experience.",
    info_url: "/mike.jpeg"
  },
  {
    id: "b4700944-1bf2-43a2-904b-fe63f3ed43a3",
    name: "DnR Studios",
    position: "Software Engineer Intern",
    image_url: "/dnr.jpg",
    info: "Enhanced the iOS and Android DnRCast 2.0 app by introducing new features such as interactive games and dynamic app features. Additionally, I designed and implemented engaging in-app games, achieving a significant 29% increase in user interaction and activity",
    info_url: "/dnr_app.png"
  },
  {
    id: "a74c2250-1167-412d-8917-06f0a375d124",
    name: "Queens College",
    position: "Computer Science Tutor",
    image_url: "/QC.jpg",
    info: "Tailored lesson plans to align with individualized study objectives for students, focusing on key areas in Computer Science. Additionally, I developed educational materials, including handouts, guides, and assessments, contributing to a 20% increase in average student performance",
    info_url: "/LC.jpg"
  }
];


const projects = [
  {
    title: "Portfolio Website",
    about: "This is what you are viewing right now! This was made using Tailwind CSS to create appealing front end designs, and Next.js with Typescript to effectively build a modern portfolio. Additionally, this portfolio fetches company and project data from a PostgreSQL database hosted on Vercel, utilizing the platform's serveless functions for efficient data retrieval and seamless integration!",
    tech: "Next.js, PostgreSQL, Tailwind CSS, Vercel",
    site: "https://justin-espinal.vercel.app",
    github: "https://github.com/justinespinal/justin-espinal"
  },
  {
    title: "Bloomberg Stock Messenger",
    about: "Collaborated with Bloomberg engineers to design and implement a robust stock ticker message queue system using RabbitMQ, Docker, and Python, enhancing real-time data processing and communication between producer and consumer components. Developed a deeper understanding of core Python/CS concepts as well as financial domain knowledge",
    tech: "Python, Docker, RabbitMQ",
    github: "https://github.com/justinespinal/Bloomberg-Messaging-System"
  },
  {
    title: "GreenIQ",
    about: "Constructed an interactive website for the DevFest ‘24 hackathon that engages users in an educational game with a focus on environmental awareness and conservation. Built using React.js, ensuring a user-friendly interface, and Firebase",
    tech: "React, Firebase",
    site: "https://host-testing123.web.app/",
    github: "https://github.com/justinespinal/environmental-education"
  },
  {
    title: "DnR Sudoku Mobile Game",
    about: "Created an engaging Sudoku game for the DnRCast 2.0 app, utilizing Xamarin Forms and C#. Designed to entertain users while they listen to their favorite podcasts. This new addition to the app significantly boosted user engagement by 29%",
    tech: "Xamarin, C#",
    github: "https://github.com/DNR-Studios-Interns/SudokuGame"
  },
  {
    title: "Queens College Grade Calculator",
    about: "Developed a Grade Calculator in Java for the Code for All Club at Queens College. This application enables club members to efficiently calculate their semester GPA in accordance with university grade standards. Leveraged packages such as javax.swing, java.awt, and java.util to build a user-friendly interface and functionality",
    tech: "Java",
    github: "https://github.com/justinespinal/Discord-Tutor-Bot/tree/main"
  },
  {
    title: "Computer Science Tutor Discord Bot",
    about: "Programmed a JavaScript-based Discord bot for Code for All. This enables members to request free tutoring sessions from board members through ticket submissions, providing 1,500+ members with support every day. Utilized the Discord.js library to seamlessly and efficiently integrate this feature into the club's Discord server, enhancing its interactive functionality",
    tech: "Javascript",
    github: "https://github.com/justinespinal/Discord-Tutor-Bot/tree/main"
  }
]
export { companies, projects }