import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Divya Navale",
  initials: "DN",
  url: "https://divyanavale.vercel.app/",
  location: "Indiana, USA",
  locationLink: "https://www.google.com/maps/place/indiana",
  description:
    "Software Engineer. I love building things.",
  summary:
    "Full-stack software engineer with 5 years of experience designing and building scalable web applications using React, Node.js, and cloud platforms. Skilled in API development, system design, and CI/CD automation. Currently pursuing a [Master’s in Computer Science at Purdue University](/#education), where I develop internal tools to streamline data workflows and enhance operational efficiency. Passionate about writing clean, maintainable code and continuously learning emerging technologies.",
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.jpeg",
  skills: [
    "Angular",
    "AWS",
    "Bitbucket",
    "C++",
    "CSS",
    "Docker",
    "Firebase",
    "Git",
    "Github",
    "Go",
    "Google Cloud",
    "HTML",
    "Java",
    "JavaScript",
    "Jenkins",
    "MongoDB",
    "MUI",
    "MySQL",
    "Next.js",
    "Node.js",
    "Postgres",
    "Python",
    "React",
    "Redis",
    "REST APIs",
    "TailwindCSS",
    "Typescript",
    "Kubernetes",
    "Express.js",
    "SASS",
    "Jest",
    "Cypress",
    "Cloudinary",
    "SendGrid",
    "JWT",
    "Semantic Release",
    "DocuSign",
    "XML",
    "PDF Generation",
    "IIS",
    "CI/CD",
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
      start: "October 2021",
      end: "Present",
      description:
        "Built 5+ full-stack apps with React, Node.js, and MySQL for internal data workflows. Automated Excel processing and API integrations (e.g. Springshare). Deployed secure admin portals on IIS/Windows Server. Maintained 5+ production systems with 100% uptime, managing features, bugs, and stakeholder feedback.",
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
        "Built four client-facing demo products that secured new deals and increased revenue. Developed REST APIs and integrated third-party services. Automated deployments via CI/CD using Semantic Release, Docker, and Jenkins. Streamlined document workflows with DocuSign and dynamic PDF/XML generation. Managed secrets with AWS Secrets Manager and data storage via S3. Deployed code to client-aligned demo environments. Documented workflows and POCs in Confluence.",
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
      start: "2016",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Application Directory Webpage",
      href: "https://www.pfw.edu/digitalhumanities", // Replace with actual link if available
      dates: "Aug 2025",
      active: true,
      description:
        "Designed and deployed a static HTML/CSS webpage f or Purdue’s Digital Arts & Humanities Lab to showcase all internal applications. Focused on simplicity and maintainability for non-technical staff. Hosted on an internal IIS server to improve tool discoverability.",
      technologies: [
        "HTML5",
        "CSS",
        "Internet Information Services (IIS)"
      ],
      links: [
        {
          type: "Website",
          href: "https://tools.library.pfw.edu/illiad-datahub-app/",
          icon: <Icons.globe className="size-3" />,
        },
        { 
          type: "Source", 
          href: "https://tools.library.pfw.edu/illiad-datahub-app/",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "", // Add image link if applicable
      video: "",
    },
    {
      title: "Purdue FindingAid",
      href: "", // Add link if available
      dates: "Jun 2025 - Jul 2025",
      active: true,
      description:
        "Built a full-stack archival management tool for Purdue Libraries with role-based CRUD for admin users and advanced hierarchical filtering (Collection → Box → Folder). Designed an intuitive interface for librarians and deployed on IIS.",
      technologies: [
        "React.js",
        "Express.js",
        "MySQL",
        "Internet Information Services (IIS)",
        "API Integration",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Visit Tracker Application",
      href: "", // Add link if available
      dates: "May 2025",
      active: true,
      description:
        "Developed a lightweight app for tracking visitor activity in Purdue’s Digital Arts & Humanities Lab. Logged individual and class visits with a simple frontend and stored data in MySQL for integration with a statistics dashboard.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "CSS",
        "Internet Information Services (IIS)",
      ],
      links: [],
      image: "",
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
        "Internet Information Services (IIS)"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Illiad DataHub",
      href: "https://tools.library.pfw.edu/illiad-datahub-app/",
      dates: "Jan 2025",
      active: true,
      description:
        "Created a secure full-stack system to manage large Excel-based student datasets for Purdue Library. Implemented fast (<1s) search by name or ID and deployed on IIS. Included automated ETL scripts and access control.",
      technologies: [
        "React.js",
        "Express.js",
        "Node.js",
        "MySQL",
        "SASS",
        "Internet Information Services (IIS)"
      ],
      links: [
        {
          type: "Website",
          href: "https://tools.library.pfw.edu/illiad-datahub-app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Purdue ATS",
      href: "", // Add link if available
      dates: "Sep 2024 - Dec 2024",
      active: true,
      description:
        "Built an attendance tracking system for Professor Amar Khalifa’s lectures. Restricted to authorized users, with real-time updates via Firebase and a mobile-friendly UI built in React Native.",
      technologies: [
        "React Native",
        "React.js",
        "Firebase Realtime DB",
        "Cloud Firestore",
        "Material-UI",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "CampusMart",
      href: "", // Add link if available
      dates: "Oct 2024 - Nov 2024",
      active: true,
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
      links: [],
      image: "",
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
