import home2 from '../assets/Image/home2.jpg';
import home from '../assets/Image/home.png';
import home3 from '../assets/Image/home3.PNG';
import home4 from '../assets/Image/home4.PNG';
import home5 from '../assets/Image/home5.PNG';

export const experiences = [
  {
    company: "FRAUNHOFER SCAI",
    position: "Working Student, Frontend Developer",
    year: "Sept 2022 - March 2023",
    responsibilities: [
      "Developed a responsive web application for data visualization using React, TypeScript, and Plotly, and D3.js enabling users to explore and analyze complex data sets related to auto accidents.",
      "Implemented state management and data fetching techniques, including Redux and Axios, to optimize the user experience and ensure the reliability and scalability of the application.",
      "Collaborated with development, product, UX, and UI teams to ensure an innovative design system with excellent alignment and usability."
    ]
  },
  {
    company: "SPACE INNOVATION CONSULTING LTD",
    position: "Junior Frontend Web Developer",
    year: "March 2021 - August 2022",
    responsibilities: [
      "Led the development of a peer-to-peer shipping platform for a startup company, utilizing HTML5, CSS3, JavaScript, and MySQL. Improved website performance and user engagement by implementing responsive design and user-friendly features.",
      "Architected and built a React, TypeScript, and GraphQL app that consumed third-party APIs, resulting in faster API response times and improved user experience.",
      "Utilized design thinking, user experience design, and visual communication skills to create visual representations of user stories using Figma. Achieved more user-centric design and improved user engagement."
    ]
  },
  {
    company: "DANGOTE CEMENT, OBAJANA",
    position: "Logistic Analyst",
    year: "June 2016 - Sept 2019",
    responsibilities: [
      "Tracked and analyzed transportation asset performance indicators using SQL, SAP, and MS Excel, resulting in a 50% reduction in offloading delay and transit time, and a 50% increase in turnaround time.",
      "Implemented preventive maintenance services for transportation assets by utilizing SQL and SAP to track due dates, leading to a significant reduction in equipment downtime.",
      "Identified areas for improvement by analyzing key performance indicators using SQL and MS Excel, implementing solutions that increased efficiency and reduced costs."
    ]
  }
];

export const education = [
  {
    institution: "TECHLABS BOOTCAMP DORTMUND",
    degree: "Web Development",
    year: "Oct 2021 - April 2022",
    courses: [
      "HTML and CSS",
      "JavaScript",
      "React",
      "Fundamentals of Web Designing",
      "Advanced Web Designing"
    ]
  },
  {
    institution: "TECHNISCHE UNIVERSITAT DARMSTADT",
    degree: "M.Sc. Tropical Hydrogeology and Environmental Engineering"
  },
  {
    institution: "FEDERAL UNIVERSITY OF TECHNOLOGY, AKURE",
    degree: "B.Tech. Applied Geophysics"
  }
];


  export const skills = [
    {
      category: 'Technical Skills',
      items: [
        { name: 'html/css', percentage: 90 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'React', percentage: 80 },
        { name: 'Tailwind/Bootstrap', percentage: 80 },
        { name: 'Nodejs', percentage: 80 },
        { name: 'Expressjs/Nextjs', percentage: 50 },
        { name: 'Mongodb/Neo4js', percentage: 40 },
        { name: 'Restful API/GraphQl', percentage: 80 },
        { name: 'Redux/Recoil', percentage: 70 },
        // Add more technical skills here
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Communication', percentage: 100 },
        { name: 'Team player', percentage: 100 },
        { name: 'Attention to detail', percentage: 100 },
        { name: 'Fast learner', percentage: 100 },
        { name: 'Critical thinking', percentage: 100 },
        // Add more soft skills here
      ],
    },
    {
      category: 'Language Skills',
      items: [
        { name: 'English', proficiency: 'Advance Proficiency' },
        { name: 'German', proficiency: 'Basic Proficiency' },
        // Add more language skills here
      ],
    },
  ];

  export const projectData = [
    {
      id: 1,
      imageSrc: home3,
      title: 'Project 1',
      description: 'Personal portfolio website using React and Tailwind styling .',
      githubLink: 'https://github.com/PaulAyere/my-portfolio',
      viewLink: 'https://project1.com',
      tags: ['Tailwind', 'React'],
      status: 'Ongoing',
    },
    {
      id: 2,
      // imageSrc: home2,
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
      tags: ['HTML/CSS', 'Javascript/Typescript'],
      status: 'Ongoing',
    },
    {
      id: 3,
      // imageSrc: home,
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
      tags: ['HTML/CSS', 'Javascript/Typescript'],
      status: 'Ongoing',
    },
    {
      id: 4,
      imageSrc: home4,
      title: 'Project 4',
      description: 'Data visualization using React and D3.js.',
      githubLink: 'https://github.com/PaulAyere/Data-visualization',
      viewLink: 'https://project2.com',
      tags: ['D3.js', 'React'],
      status: 'Ongoing',
    },
    {
      id: 5,
      imageSrc: home,
      title: 'Project 5',
      description: 'Coporate website with HTML,CSS and Javascript.',
      githubLink: 'https://github.com/PaulAyere/BOK-Engineering-website-design-with-HTML-CSS-and-Javascript.git',
      viewLink: 'https://bok-page.netlify.app/',
      tags: ['HTML/CSS', 'Javascript'],
      status: 'Ongoing',
    },
    {
      id: 6,
      // imageSrc: home2,
      title: 'Project 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
     tags: ['React',],
     status: 'Ongoing',
    },
    {
      id: 7,
      imageSrc: home5,
      title: 'Project 7',
      description: 'Digital clock design with HTML,CSS and Javascript',
      githubLink: 'https://github.com/PaulAyere/https---github.com-PaulAyere-Digital-clock-with-html-css-and-javascript',
      viewLink: 'https://silver-sherbet-77e8a0.netlify.app/',
      tags: ['HTML/CSS', 'Javascript'],
      status: 'Completed',
    },
    {
      id: 8,
      imageSrc: home2,
      title: 'Project 8',
      description: 'Basic Landing page with HTML and CSS.',
      githubLink: 'https://github.com/PaulAyere/Asylic.git',
      viewLink: 'https://62892e67dc2b013ce2e8fc8b--acrylicweb.netlify.app/',
      tags: ['HTML/CSS',],
      status: 'Completed',
    },
    // Add two more project objects here
  ];

  export  const personalInformation = [
    { label: 'Surname:', value: 'Aghughu' },
    { label: 'First Name:', value: 'Paulinus Ayere' },
    { label: 'Profession:', value: 'Frontend Web Developer' },
    { label: 'Education Level:', value: "Master's Degree" },
    { label: 'Place of Residence:', value: 'Darmstadt, Germany' },
    { label: 'Relocation possible?:', value: 'Yes' },
  ];

  export const contactInformation = [
    { label: 'Phone Number:', value: '+49 15752801414' },
    { label: 'Email Address:', value: 'paulinusaghughu@gmail.com' },
    { label: 'Open to work?:', value: 'Yes' },
    { label: 'Interested in:', value: 'Remote Work. Office or Hybrid work arrangement' },
    { label: 'LinkedIn:', value: 'https://www.linkedin.com/in/paulinusaghughu' },
    { label: 'GitHub:', value: 'https://github.com/PaulAyere' },
  ];

  export const softwareItems = [
  {
    icon: 'fas fa-figma',
    name: 'Figma',
  },
  {
    icon: 'fas fa-code',
    name: 'VSCode',
  },
  {
    icon: 'fas fa-microphone',
    name: 'Miro',
  },
  {
    icon: 'fab fa-gitlab',
    name: 'GitLab',
  },
  {
    icon: 'fab fa-github',
    name: 'GitHub',
  },
  {
    icon: 'fas fa-cogs',
    name: 'Maven',
  },
  {
    icon: 'fab fa-slack',
    name: 'Slack',
  },
  {
    icon: 'fab fa-jira',
    name: 'Jira',
  },
  {
    icon: 'fas fa-users-cog',
    name: 'Scrum',
  },
  {
    icon: 'fab fa-google',
    name: 'Google Cloud',
  },
  // Add more software items as needed
];

export const facts = [
    {
      icon: 'fas fa-lightbulb',
      text: 'Open to New Challenges',
    },
    {
      icon: 'fas fa-brain',
      text: 'Critical Thinker',
    },
    {
      icon: 'fas fa-bolt',
      text: 'Learn Fast',
    },
    {
      icon: 'fas fa-shield-alt',
      text: 'Strong and Resilient',
    },
  ];
   export const menuItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#project' },
    { label: 'Contact', href: '#contact' },
  ];