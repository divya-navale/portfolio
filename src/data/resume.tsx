import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Divya Navale",
  initials: "DN",
  url: "https://divyanavale.vercel.app/",
  location: "Indiana, USA",
  locationLink: "https://www.google.com/maps/place/indiana",
  description:
    "Software Engineer | Full-Stack Developer",
  summary:
    "I'm a full-stack software engineer with 5 years of experience building production-ready web applications that accelerate workflows and automate complex processes. Currently pursuing a Master’s in Computer Science at Purdue University, I lead the development of internal tools using React, Node.js, and MySQL-delivering scalable solutions used daily by faculty and library leadership. Previously at Sureify, I built client-facing platforms and automated deployment pipelines across cloud environments. I thrive in ownership-driven roles and bring a strong focus on clean architecture, reliability, and user-centered design.",
  // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.jpeg",
  skills: [
    {
      category: "Languages & Frameworks",
      items: [
        "JavaScript", "TypeScript", "Python", "Java", "C++", "Go",
        "React", "Next.js", "Node.js", "Express.js", "HTML", "CSS",
        "TailwindCSS", "MUI", "SASS"
      ]
    },
    {
      category: "DevOps & Cloud",
      items: [
        "AWS", "Google Cloud", "Firebase", "Docker", "Kubernetes",
        "CI/CD", "Jenkins", "Bitbucket", "Git", "Github", "Internet Information Services (IIS)"
      ]
    },
    {
      category: "Databases & Testing",
      items: [
        "MySQL", "Postgres", "MongoDB", "Redis",
        "Jest", "Cypress"
      ]
    },
    {
      category: "Tools & Analytics",
      items: [
        "REST APIs", "JWT", "Cloudinary", "SendGrid",
        "Semantic Release", "DocuSign", "XML", "PDF Generation",
        "Google Analytics", "Google Tag Manager"
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Machine Learning", "Deep Learning", "NLP", "Data Analysis", "pandas", "NumPy", "scikit-learn", "TensorFlow", "Keras"
      ]
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "divyanavale.dn@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/divya-navale",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/divyanavale/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:divyanavale.dn@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      leetcode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/divya_n/",
        icon: Icons.leetcode,
        navbar: true,
      }
    },
  },
  work: [
    {
      company: "Purdue University",
      badges: [],
      href: "https://shopify.com",
      location: "On-site",
      title: "Software Engineer",
      logoUrl: "/purdue.png",
      start: "October 2024",
      end: "Present",
      description:
        "Designed and developed over 5 full-stack applications using React, Node.js, and MySQL to streamline internal data workflows, reporting, and student engagement tracking. Automated processing of more than 10,000 Excel records and integrated third-party APIs like Springshare, reducing data retrieval time to under one second and improving reporting accuracy. Created secure, role-based admin portals with advanced search and filtering features to manage over 2,000 archival items, deploying solutions on IIS/Windows Server for internal staff use. As the sole developer responsible for multiple production systems, I ensure 100% uptime while promptly addressing bugs, implementing feature enhancements, and incorporating stakeholder feedback to continuously improve operational efficiency.",
    },
    {
      company: "Sureify",
      href: "https://www.sureify.com/",
      badges: [],
      location: "On-site",
      title: "Software Engineer II",
      logoUrl: "/sureify.png",
      start: "Dec 2020",
      end: "Aug 2024",
      description:
        "Led development of four tailored client demo platforms that helped secure key enterprise deals, driving an increase in company's revenue. Built and deployed REST APIs with third-party integrations, automated deployments via CI/CD pipelines using Docker, Jenkins, and Semantic Release, and created dynamic PDF/XML mapping and DocuSign workflows to streamline data capture. Secured infrastructure with AWS Secrets Manager and S3, and collaborated cross-functionally with DevOps and product teams to deliver stable, client-aligned demo environments.",
    },
  ],
  education: [
    {
      school: "Purdue University",
      href: "https://www.purdue.edu/",
      degree: "Masters in Computer Science",
      logoUrl: "/purdue.png",
      start: "August 2024",
      end: "May 2026",
    },
    {
      school: "Osmania University",
      href: "https://www.osmania.ac.in/",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/osmania.png",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "SemEval 2026 - Machine-Generated Code Detection",
      href: "",
      dates: "Oct 2025 – Present",
      active: true,
      description:
        "Contributing to SemEval-2026 Task 13 (Subtask 1), focused on detecting machine-generated code across diverse programming languages and generator families. Building a binary classification model to distinguish fully human-written from fully machine-generated code snippets. Addresses generalization challenges in modern code generation techniques using NLP and code analysis strategies.",
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "Data Analysis",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI-Powered Outfit Recommendation System",
      href: "",
      dates: "Oct 2025 – Present",
      active: true,
      description:
        "Building a deep learning-based outfit recommendation system for Purdue’s Career Development Center, designed to assist students in selecting professional attire from the Career Closet. The tool analyzes skin tone to generate personalized color palettes (warm, cool, or deep), then recommends clothing items that match the user’s palette. Designed to enhance styling confidence and streamline decisions through an interactive UI connected to a smart backend API and wardrobe inventory.",
      technologies: [
        "Python",
        "React.js",
        "Next.js",
        "Node.js",
        "Deep Learning",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Library Google Analytics Dashboard",
      href: "https://library.pfw.edu/",
      dates: "Sep 2025 - Oct 2025",
      active: true,
      description:
        "Developed a Google Analytics dashboard to monitor user interactions across the Purdue Library site. Configured custom tags, triggers, and variables for key pages and buttons, including tracking for Writing Center access and database searches across Helmke, All Databases, and Purdue systems. Created categorized visual data using custom charts for library leadership insights.",
      technologies: [
        "Google Analytics 4",
        "Google Tag Manager",
        "JavaScript",
        "Custom Variables & Events"
      ],
      links: [
        {
          type: "Website",
          href: "https://library.pfw.edu/",
          icon: <Icons.globe className="size-3" />,
        },
      ],

      image: "/libraryAnalytics.png",
      video: "",
    },
    {
      title: "Digital Arts Application Directory",
      href: "https://tools.library.pfw.edu/DigitalLabsLinks/homepage.html",
      dates: "Aug 2025",
      active: false,
      description:
        "Designed and deployed a static HTML/CSS webpage for Purdue’s Digital Arts & Humanities Lab to showcase all internal applications. Focused on simplicity and maintainability for non-technical staff. Hosted on an internal IIS server to improve tool discoverability.",
      technologies: [
        "HTML5",
        "CSS",
        "IIS Server"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://tools.library.pfw.edu/DigitalLabsLinks/homepage.html",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // { 
        //   type: "Source", 
        //   href: "https://tools.library.pfw.edu/DigitalLabsLinks/homepage.html",
        //   icon: <Icons.github className="size-3" />,
        // }
      ],
      image: "/ApplicationDirectoryWebpage.png",
      video: "",
    },
    {
      title: "FindingAid",
      href: "https://sites.library.pfw.edu/findingaid-app/",
      dates: "Jun 2025 - Jul 2025",
      active: false,
      description:
        "Built a full-stack archival management tool for Purdue Libraries with role-based CRUD for admin users and advanced hierarchical filtering (Collection → Box → Folder). Designed an intuitive interface for librarians and deployed on IIS.",
      technologies: [
        "React.js",
        "Express.js",
        "MySQL",
        "IIS Server",
        "API Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://sites.library.pfw.edu/findingaid-app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/findingAid.png",
      video: "",
    },
    {
      title: "Visit Tracker",
      href: "https://tools.library.pfw.edu/dahlab-visit-app/",
      dates: "May 2025",
      active: false,
      description:
        "Developed a lightweight app for tracking visitor activity in Purdue’s Digital Arts & Humanities Lab. Logged individual and class visits with a simple frontend and stored data in MySQL for integration with a statistics dashboard.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "CSS",
        "IIS Server",
      ],
      links: [],
      image: "/visitTracker.png",
      video: "",
    },
    {
      title: "Library Statistics",
      href: "https://sites.library.pfw.edu/statistics/collections-data",
      dates: "Feb 2025 - Apr 2025",
      active: true,
      description:
        "Built a data visualization platform for Purdue’s Library Director to track and present student service usage. Integrated data from Springshare API and internal systems, displaying results via interactive graphs deployed on IIS.",
      technologies: [
        "React.js",
        "Express.js",
        "MySQL",
        "Node.js",
        "API Integration",
        "IIS Server",
        "Chart.js",
        "SASS"
      ],
      links: [
        {
          type: "Website",
          href: "https://sites.library.pfw.edu/statistics/collections-data",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/statistics.png",
      video: "",
    },
    {
      title: "Illiad DataHub",
      href: "https://tools.library.pfw.edu/illiad-datahub-app/",
      dates: "Jan 2025",
      active: false,
      description:
        "Created a secure full-stack system to manage large Excel-based student datasets for Purdue Library. Implemented fast (<1s) search by name or ID and deployed on IIS. Included automated ETL scripts and access control.",
      technologies: [
        "React.js",
        "Express.js",
        "Node.js",
        "MySQL",
        "SASS",
        "IIS Server",
      ],
      links: [],
      image: "/illiad.png",
      video: "",
    },
    {
      title: "Attendance Tracker",
      href: "https://attendance-tracking-weba-f327c.web.app/login",
      dates: "Sep 2024 - Dec 2024",
      active: false,
      description:
        "Built an attendance tracking system for Professor Amar Khalifa’s lectures. Restricted to authorized users, with real-time updates via Firebase and a mobile-friendly UI built in React Native.",
      technologies: [
        "React Native",
        "React.js",
        "Firebase Realtime DB",
        "Cloud Firestore",
        "Material-UI",
        "Firebase Auth",
        "Firebase Hosting"
      ],
      links: [
        {
          type: "Website",
          href: "https://attendance-tracking-weba-f327c.web.app/login",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Taleef7/PFW-AttendanceTrackingWebApp/",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/attendancetracker.png",
      video: "",
    },
    {
      title: "CampusMart",
      href: "https://campusmart-purdue.vercel.app",
      dates: "Oct 2024 - Nov 2024",
      active: false,
      description:
        "Built a centralized marketplace platform for international students to buy/sell items easily, solving cluttered chat issues in WhatsApp groups. Included notifications, wishlist, secure auth, image uploads (Cloudinary), and separate user dashboards.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "JWT",
        "Cloudinary",
        "SendGrid",
        "Jest",
        "Cypress"
      ],
      links: [
        {
          type: "Website",
          href: "https://campusmart-purdue.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Frontend Source",
          href: "https://github.com/divya-navale/campusMart.App",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend Source",
          href: "https://github.com/divya-navale/campusMart.Api",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/campusMart.png",
      video: "",
    }
  ]
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],
} as const;
