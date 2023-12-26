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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    compsci,
    western,
    mii,
    wss,
    earls,
    earls2,
    calc,
    java,
    python,
    excel,
    msAccess,
    affinityPhoto,
    sql,
    asst4,
    dungeon,
    cribbage,
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
      title: "Computer Science",
      icon: compsci,
    },
    {
      title: "Student",
      icon: mii,
    },
    {
      title: "Western University",
      icon: western,
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
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Excel",
      icon: excel,
    },
    {
      name: "msAccess",
      icon: msAccess,
    },
    {
      name: "Affinity",
      icon: affinityPhoto,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Teacher Assistant",
      company_name: "Westminster",
      icon: wss,
      iconBg: "#383E56",
      date: "Jan 2021 - June 2021",
      points: [
        "Collaborated with teaching staff to implement coordinated educational strategies and student support networks.",
        "Provided classroom support by standing in for teachers to supervise classes, deliver lessons and administer tests.",
        "Assisted in grading tests and checking homework assignments.",
        "Documented relevant information in student records to track progress and monitor student achievement.",
      ],
    },
    {
      title: "Recruit",
      company_name: "Earls",
      icon: earls,
      iconBg: "#E6DEDD",
      date: "June 2021 - July 2021",
      points: [
        "Demonstrated reliability and dependability by opening and closing the restaurant as required, helping to maintain a smooth and consistent daily operation.",
        "Actively contributed to a well-organized and efficient work environment by sweeping, mopping, and taking out the trash on a regular basis.",
        "Ensured a seamless dining experience for guests by operating the dishwasher and manually washing dishes to keep all chinaware, silverware, and cooking utensils spotless and ready for use.",
        "Maintained high standards of cleanliness and hygiene in the kitchen through diligent washing, labelling, and storage of food items.",
      ],
    },
    {
      title: "Food Preperation Worker",
      company_name: "Earls",
      icon: earls2,
      iconBg: "#383E56",
      date: "July 2021 - Sep 2021",
      points: [
        "Ensured efficient kitchen operations by setting up and preparing cooking supplies and workstations during opening and closing.",
        "Ensured the smooth functioning of the restaurant by opening and closing it as required.",
        "Assembled, stored, and disposed of food using proper food handling, labelling and safety techniques.",
      ],
    },
    {
      title: "Mathematics Tutor",
      company_name: "Self-Employed",
      icon: calc,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Jan 2023",
      points: [
        "Provided personalized math instruction to students of all levels, from basic arithmetic to advanced calculus, to help them improve their understanding and proficiency in the subject.",
        "Utilized a variety of techniques, including problem-solving exercises, interactive lessons, and real-world examples, to make math more engaging and relevant for students.",
        "Improved many students' grades and helped build their confidence in the subject, resulting in a deeper understanding of mathematical concepts.",
        "Demonstrated a deep understanding of mathematical concepts, allowing for effective instruction and guidance to help students achieve their goals.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Western University",
      icon: western,
      iconBg: "#383E56",
      date: "Oct 2023 - Present",
      points: [
        "Creating engaging and informative web pages for various research departments. This includes conceptualizing layouts, integrating content, and ensuring a user-friendly experience.",
        "Working closely with research teams to accurately translate their work and achievements into compelling digital narratives. This collaboration is key to presenting the research in a manner that is both accessible and engaging to a broader audience.",
        "Ensuring that all web pages are responsive and accessible, adhering to the latest web standards and best practices. This includes optimizing for different devices and ensuring compliance with accessibility guidelines.",
        "Utilizing content management systems to update and manage web content effectively, ensuring that the latest research findings and departmental updates are reflected promptly and accurately.",
      ],
    },  
  ];
  
  const testimonials = [
    {
      testimonial:
        " ",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "File System Visualizer",
      description:
        "Designed and implemented an algorithm to print the structure of the file system on a computer. This project involved creating a non-linear linked data structure using the NLNode class, which can store information about files and folders, and using an ADT Iterator to process the data items one at a time. I also implemented the FileStructure class to create a linked structure representing the file system, using a recursive algorithm to explore the folder and create nodes corresponding to the file objects contained in it. ",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "data structures & algorithms",
          color: "green-text-gradient",
        },
        {
          name: "recursion",
          color: "pink-text-gradient",
        },
      ],
      image: asst4,
      source_code_link: "https://github.com/Izz-A7/File-Explorer",
    },
    {
      name: "Dungeon Escape",
      description:
        "Designed and implemented a Java program to help a warrior escape from the dungeons of the evil Black Queen. The program used a priority queue to find the shortest possible path from the initial chamber to the exit, taking into account the different types of chambers, including empty chambers, dragon chambers, wall chambers, and the exit chamber. This project helped me develop my skills in implementing priority queues, problem-solving, and algorithm design in Java.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "priority queues",
          color: "green-text-gradient",
        },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: dungeon,
      source_code_link: "https://github.com/Izz-A7/Find-Shortest-Path-In-Dungeon",
    },
    
    {
      name: "Cribbage Scoring Program",
      description:
        "Designed and implemented a program in Java to help players calculate their scores during the counting phase of the popular card game, Cribbage. The program includes functionality to calculate points based on pairs, runs, fifteen, flush, and his knobs. I utilized collections that work for generic types, sets and power sets, linked lists, loops, and conditionals to create a program that adheres to specifications. The Card class includes two different rank getter methods to account for the different ranks of cards when dealing with runs and summing to fifteen. Through this project, I gained experience in problem-solving, working with collections and linked lists, and programming according to specifications.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "linked lists",
          color: "green-text-gradient",
        },
        {
          name: "problem solving",
          color: "pink-text-gradient",
        },
      ],
      image: cribbage,
      source_code_link: "https://github.com/Izz-A7/Scribbage-Counter-Calculator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
