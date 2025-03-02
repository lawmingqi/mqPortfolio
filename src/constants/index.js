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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  githubbies1,
  githubbies2,
  githubbies3,
  githubbies4,
  avizion1,
  avizion2,
  avizion3,
  vehiclesg1,
  vehiclesg2,
  vehiclesg3,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "Githubbies",
    description:
      "GitHubbies is a full-stack web application designed for real-time ad management and distribution across connected televisions.",
    tags: [
      {
        name: "React",
        color: "red-text-gradient",
      },
      {
        name: "Socket.io",
        color: "red-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "red-text-gradient",
      },
      {
        name: "NodeJS",
        color: "red-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "red-text-gradient",
      },
      {
        name: "AWS S3",
        color: "red-text-gradient",
      },
    ],
    images: [githubbies1, githubbies2, githubbies3, githubbies4], // Array of images
    source_code_link: "https://github.com/lawmingqi/fsdp_githubbies",
  },
  {
    name: "AviZion",
    description:
      "AviZion is a UI/UX-focused travel companion that simplifies trip planning while keeping travelers informed with real-time health and safety updates.",
    tags: [
      {
        name: "Figma",
        color: "red-text-gradient",
      },
    ],
    images: [avizion1, avizion2, avizion3], 
    source_code_link:
      "https://www.figma.com/proto/8FQNAEFB5nECZS8O79dZjD/DUX_Assg1_P03_Law-Ming-Qi?node-id=0-1&t=N670VFINOszVTe6P-1",
  },

  {
    name: "VehicleSG",
    description:
      "VehicleSG is a Front-End Development project that aims to provide a one-stop platform to serve the needs and requirements of Singapore motorists as well as educate them on road safety and driving rules through gamification.",
    tags: [
      {
        name: "Figma",
        color: "red-text-gradient",
      },
      {
        name: "LeafletJs",
        color: "red-text-gradient",
      },
      {
        name: "BootStrap",
        color: "red-text-gradient",
      },
      {
        name: "HTML",
        color: "red-text-gradient",
      },
      {
        name: "CSS",
        color: "red-text-gradient",
      },
      {
        name: "JavaSsript",
        color: "red-text-gradient",
      },
    ],
    images: [vehiclesg1, vehiclesg2, vehiclesg3],
    source_code_link:
      "https://github.com/Isa-AcTiEw/VehicleSg_Website_S10257760_S10257808",
  },
];

export { services, technologies, experiences, testimonials, projects };
