import {
  mobile,
  backend,
  creator,
  web,
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
  shakudo,
  project,
  keyrus,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  django,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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

const services = [
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "NextJS",
    icon: nextjs,
  },
  {
    title: "Django",
    icon: django,
  },
  {
    title: "Node",
    icon: nodejs,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End React Developer",
    company_name: "Shakudo",
    icon: shakudo,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Built a responsive web application using React and Next.js on an AWS infrastructure, enabling secure deployment in clients’ VPCs.",
      "Developed complex UI components and integrated RESTful APIs with optimized performance using AWS S3, CloudFront, and Amplify.",
      "Managed UI/UX alongside a senior developer and collaborated in a Scrum team to deliver features, refine designs, and incorporate client feedback."
    ],
  },
  {
    title: "Angular Developer Intern",
    company_name: "keyrus",
    icon: keyrus,
    iconBg: "#383E56",
    date: "May 2021 - Aug 2022",
    points: [
      "Developed modular UI components using Angular and TypeScript, improving UI consistency and reducing bugs by 30%.",
      "Built SPAs with RxJS for smooth data handling and responsive client-side interactivity.",
      "Collaborated in code reviews and paired programming to enhance code quality and learn industry best practices."

    ],
  },
  {
    title: "Personal Project",
    company_name: "CarZone",
    icon: project,
    iconBg: "#383E56",
    points: [
      "Built a full-stack car listing platform using Django, enabling users to manage car listings with advanced search and filter options, and integrated Stripe API for secure payment processing.",
      "Utilized Django’s ORM for database management and implemented role-based access control for safe user interactions. Tools Used: Django, VSCode, Git, TailwindCSS, Chrome DevTools.",
    ],
  },
  // {
  //   title: "title",
  //   company_name: "company_name",
  //   icon: web,
  //   iconBg: "#383E56",
  //   date: "date",
  //   points: [
  //     "description",
  //   ],
  // },
  // {
  //   title: "title",
  //   company_name: "company_name",
  //   icon: web,
  //   iconBg: "#383E56",
  //   date: "date",
  //   points: [
  //     "description",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };