
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    redux,
    html,
    css,
    reactjs,
    web3,
    postgresql,
    nodejs,
    mongodb,
    git,
    flask,
    flutter,
    carrent,
    jobit,
    tripguide,
    threejs,
    fontina,
    shriyam1,
    diycam,
    hrx_web,
    evently,
    hostel_app,
    GIS_project
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
        title: "AI ML Enthusiast",
        icon: mobile,
    },
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    {
        title: "Flutter Developer",
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
        name: "Redux",
        icon: redux,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Web3",
        icon: web3,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
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
        name: "flask",
        icon: flask,
    },
    {
        name: "flutter",
        icon: flutter,
    },
];

const experiences = [
    {
        title: "Mobile App Developer",
        company_name: "Fontina Digital",
        icon: fontina,
        iconBg: "#383E56",
        date: "Dec 2021 - Mar 2022",
        points: [
            " App for selling different vehicles.",
            "I was the lead developer and made the whole App from Scratch including the Documentation, Frontend , Backend and Database(We have used Firebase)",
            "In this App users can upload a new Ad, edit the Ads, sort the vehicle by their category, can chat with the seller, fetch the Ads by location and also can buy subscription for uploading more new Ads.",
        ],
    },
    {
        title: "MACHINE LEARNING INTERN",
        company_name: "DIYCAM INDIA PVT. LTD",
        icon: diycam,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - June 2022",
        points: [
            " Successfully developed an end-to-end Number Plate Recognition System utilizing state-of-the-art technologies such as YOLOv3 and pytesseract.",
            "Implemented effective camera module deployment strategies to minimize image distortion, ensuring accurate and reliable number plate recognition",
            "Thoroughly tested the model on real-world data, validating its robustness and performance in various scenarios.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Shiryam Technologies",
        icon: shriyam1,
        iconBg: "#383E56",
        date: "Feb 2023 - May 2023",
        points: [
            "As an intern in backend development with a focus on Python, Flask, FastAPI to create API endpoints for data retrieval and manipulation and Redis for efficient caching and messaging",
            "I have gained experience in building and maintaining RESTful APIs and handling databases using SQL.",
            "Along with my technical skills, I have proven to be a dedicated and collaborative team player, consistently seeking feedback and striving for excellence.",
        ],
    },
];

const Achievements = [
    {
        Achievements:
            "Successfully obtained copyright registration (ROC number L-123685/2023) for the hostel registration system.",
        certificate_link: "https://iraj.in/journal/IJEEDC//paper_detail.php?paper_id=19761&nameAlzheimer",
        no: "1"
    },
    {
        Achievements:
            "Accepted conference paper on \"ALZHEIMER’S DISEASE STAGES CLASSIFICATION USING MRI AND DEEP LEARNING\" at The International Conference on Artificial Intelligence and Soft Computing ICAISC 2023.",
        certificate_link: "https://iraj.in/journal/IJEEDC//paper_detail.php?paper_id=19761&nameAlzheimer",
        no: "2"

    },
    {
        Achievements:
            "Finalist in ElasticRun's #Possibilities Hackathon 2022.",
        certificate_link: "https://iraj.in/journal/IJEEDC//paper_detail.php?paper_id=19761&nameAlzheimer",
        no: "3"

    },
    {
        Achievements:
            "Attended ACM India Winter School on topic 'Optimization for Machine Learning and Operations Research' ",
        certificate_link: "https://drive.google.com/file/d/1bl1bOQa5XUclAbNawfI-99b_M61pKXAI/view",
        no: "4"

    },

];

const projects = [
    {
        name: "Evently",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "NextJs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Stripe",
                color: "pink-text-gradient",
            },
        ],
        image: evently,
        source_code_link: "https://github.com/jaydeore-007/evently",
    },
    {
        name: "Hostel_App",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "Dart",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
        ],
        image: hostel_app,
        source_code_link: "https://github.com/jaydeore-007/Hostel_App",
    },
    {
        name: "Logistic Route Optimization",
        description:
            "Optimizing logistic solution for delivering products in a given radius using Geographic Information System (GIS).",
        tags: [
            {
                name: "SpringBoot",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
        ],
        image: GIS_project,
        source_code_link: "https://github.com/orgs/Final-Year-Project-GIS-Solutions/repositories",
    },

    {
        name: "HRX_NewWebDesign",
        description:
            "A fresh take on HRX's user interface using HTML, React, and Tailwind CSS. This project showcases an innovative redesign of HRX's web interface, with a primary focus on exploring the capabilities of Tailwind CSS. ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: hrx_web,
        source_code_link: "https://github.com/jaydeore-007/HRX_NewWebDesign",
    },
];

export { services, technologies, experiences, Achievements, projects };