import {
  fc,
  chat,
  weather,
  ds,
  drone,
  sudoku,
  fb,
  insta,
  linkedin,
  gits,
  mobile,
  backend,
  creator,
  web,
  c,
  hr,
  python,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socials = [
  {
    title: "gits",
    icon: gits,
    visit: "https://github.com/PrateekUp",
  },

  {
    title: "linkedin",
    icon: linkedin,
    visit: "https://www.linkedin.com/in/prateek-kumar-1472p/",
  },
  {
    title: "instagram",
    icon: insta,
    visit: "https://www.instagram.com/_prateek147/",
  },
  {
    title: "facebook",
    icon: fb,
    visit: "https://www.facebook.com/profile.php?id=100057138720125",
  },
];

const technologies = [
  {
    name: "c++",
    icon: c,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "lead",
    icon: hr,
  },
];

const experiences = [
  {
    title: "Coordinator, Sponsorship and Marketing",
    company_name: "Anwesha '23 IIT Patna",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2022 - April 2023",
    points: [
      "Successfully revived ANWESHA, the cultural management fest of IIT Patna after a 3-year hiatus. Overcame challenges, secured funding, and reassembled a dedicated team to reestablish its position on campus.",
      "Implemented effective budgeting, financing, and brand collaborations, optimizing resources and enhancing ANWESHA's visibility. Strengthened connections with external organizations, expanding its network and industry reach.",
      "Executed comprehensive marketing campaigns, leveraging social media, campus ambassadors, and interactive events to restore ANWESHA's legacy. Actively sought collaborations and attracted renowned artists, enhancing the festival's offerings.",
    ],
  },
  {
    title: "Coordinator, Tech (Web Developer)",
    company_name: "Finance Club IIT Patna",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2022 - Feb 2023",
    points: [
      "Developed and maintained the Finance Club's official website using ExpressJS and MongoDB. Implemented a Blogs API to streamline content management and ensured a seamless viewing experience.",
      "Collaborating with cross-functional teams including club's executive committee, updated website content, and provided technical support.",
      "Actively volunteered in club activities, contributing to event planning, coordination, and execution, fostering a collaborative and engaging environment within the club.",
    ],
  },
  {
    title: "Mentor @CODEPEAK",
    company_name: "Codepeak '22",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Guided participants in contributing to my project which was developing and enhancing features of the MERN-based realtime chat application 'Chit-Chat.' Provided mentorship in open-source development, problem-solving, and project management throughout the program.",
      "Reviewed code submissions from participants, providing constructive feedback, and approving high-quality PRs that enhanced the functionality and performance of the projects.",
      "Identified areas of improvement and created issues to address specific bugs, enhancements, or feature requests",
    ],
  },
];

const projects = [
  {
    name: "Finance Club IITP Website",
    description:
      "Developed IIT Patna Finance Club's official website(responsive) on ExpressJS and EJS. Integrated a Blogs API with MongoDB, enabling seamless blog storage and viewing without the need for individual blog pages.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: fc,
    source_code_link: "https://github.com/PrateekUp/Finance-Club-IITP",
  },
  {
    name: "SUDOKU",
    description:
      "Developed a Sudoku Solver Game on the MERN Stack. Utilized a recursion algorithm for solving Sudoku puzzles. Frontend client-side built with ReactJS, while Express and Node.js were used for the server-side. Implemented functionalities for clearing the game, obtaining solutions, and checking correctness.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: sudoku,
    source_code_link: "https://github.com/PrateekUp/SUDOKU-WEB",
  },
  {
    name: "WeatherHub",
    description:
      "WeatherHub is a real-time weather application developed using ReactJS and powered by the OpenWeatherMap API. Users can access current weather information, 7-day forecasts, and view weather details for any location worldwide.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/PrateekUp/Weather-Application",
  },
  {
    name: "SDG scores - NITI Aayog",
    description:
      "This project analyzed SDG scores for 2020-21 by NITI Aayog using data science techniques. Employing data visualization, hypothesis testing, and machine learning, SDG 10, 11, and 12 were analyzed. Normality was assessed, followed by two-tailed t-tests. Linear regression achieved a 70% accuracy on test data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "datascience",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: ds,
    source_code_link:
      "https://github.com/PrateekUp/AnalysisOfSDGscores2020-21DataScience",
  },
  {
    name: "Chit-Chat",
    description:
      "Chit-Chat is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/PrateekUp/CHIT-CHAT-CHAT-APP",
  },
  {
    name: "Autonomous Quadcopter",
    description:
      "Developed an autonomous model using Parrot AR Drone 2.0 that detects colors and sends corresponding commands. Generated a 2D map through OpenCV FAST algorithm by stitching images captured from the drone's bottom camera. Integrated GPS, NRF Wifi module, and displayed real-time navigation and sensor data.",
    tags: [
      {
        name: "OpenCv",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "robotics",
        color: "pink-text-gradient",
      },
    ],
    image: drone,
    source_code_link: "https://github.com/KartuzGupta/ME395_Quadcopter",
  },
];

export { socials, technologies, experiences, projects };
