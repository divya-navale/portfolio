import illiad from '../assets/illiad.png';
import transactify from '../assets/transactify.png';
import ats from '../assets/ats.png';
import campusmart from '../assets/campusmart.png';
const projects = [
    {
        image: illiad,
        title: "ILLIAD DATAHUB",
        description: "I built a full-stack application using React, Express.js, and MySQL to streamline student data management from large Excel files. I created an automated script to load the data into the database, enabling users to retrieve student details via Purdue name or student ID number. Access was restricted to authorized personnel, ensuring data security. I also deployed the system, optimizing performance to achieve a response time of under 1 second, improving data retrieval efficiency and management."
    },
    {
        image: transactify,
        title: "TRANSACTIFY",
        description: "The Library Transactify project is a full-stack application built with React.js, Express.js, and MySQL, designed to help the Library Director visualize student usage of library services. The challenge was to merge data from two different sources: the library's own website and a third-party API from Springshare. I integrated both data sources, processed and combined the information, and created a graphical representation for easier visualization during meetings. This solution allowed the director to efficiently access and present library usage data, overcoming the difficulty of managing and displaying data from disparate systems."
    },
    {
        image: ats,
        title: "ATTENDANCE TRACKING SYSTEM",
        description: "Developed an attendance tracking system for Purdue lecturers using React and Material UI for a responsive frontend, with Firebase as the backend to ensure real-time data updates and secure user authentication. I implemented Firebase Authentication for seamless and secure user login, and leveraged Firebase Realtime Database to manage dynamic attendance data, supporting real-time updates and scalability. This system provides lecturers with an efficient and secure way to track attendance, ensuring a smooth user experience while allowing for scalable data management.",
        link: "https://attendance-tracking-weba-f327c.web.app/",
        github: "https://github.com/Taleef7/PFW-AttendanceTrackingWebApp",
    },
    {
        image: campusmart,
        title: "CAMPUS MART",
        description: "Developed a specialized e-commerce platform for Purdue students using React, Node.js, and MongoDB, addressing the limitations of informal WhatsApp marketplaces with structured product listings and enhanced communication. Built secure REST APIs for user authentication and product management, integrating Cloudinary for optimized image storage to support efficient media handling. Crafted an intuitive, responsive UI with Bootstrap and SCSS, providing a user-friendly experience tailored to the needs of the campus community.",
        link: "https://campusmart-purdue.vercel.app/",
        github : "https://github.com/divya-navale/campusMart.Api",

    },
    // {
    //     image: "",
    //     title: "INTELLIGENT TEXT-BASED FORM GENERATION AND MANAGEMENT",
    //     description: "Developed a streamlined solution as part of an office hackathon to simplify the creation and management of questionnaire-based applications. The solution was designed to efficiently generate forms based on an instruction set file."
    // },
    // {
    //     image: "",
    //     title: "IDENTIFICATION OF NEAR-DUPLICATE DOCUMENTS USING SIMHASH ALGORITHM",
    //     description: "Implemented simhash algorithm which uses map and reduce techniques to detect duplicate documents using Python."
    // },
    // {
    //     image: "../assets/bankingSystem.png",
    //     title: "BANKING SYSTEM",
    //     description: "The Banking system is a Console-based application that uses hashing and CSV files for storing and accessing the data. It has withdrawal, deposit, and transfer of money from one to another account and other banking operations. (C++, CSV files)"
    // }
];

export default projects;