const courses = {
    "data-science": {
        title: "Data Science:",
        description: " Description: Data Scientists are responsible for extracting insights and knowledge from large datasets using statistical and machine learning techniques. They collect, clean, and analyze data to identify patterns, trends, and correlations.",
        jobs: "Job Opportunities: Data Scientist, Data Analyst, Data Engineer, Machine Learning Engineer, Statistician",
        image: "./assets/course-img-1.jpg"
    },

    "cyber-security": {
        title: "Cyber Security:",
        description: "Cyber Security professionals are responsible for protecting computer systems, networks, and data from unauthorized access, theft, damage, or disruption. They design, implement, and maintain security measures to prevent and detect cyberattacks.",
        jobs: " Cyber Security Analyst, Penetration Tester, Security Architect, Incident Responder, Digital Forensics Analyst",
        image: "./assets/course-img-2.jpg"
    },

    "software-engineering": {
        title: "Software Engineering:",
        description: "Description: Software Engineers are responsible for the design, development, and testing of software applications. They work with programming languages, software development methodologies, and quality assurance techniques to create high-quality software.",
        jobs: "Job opportunities: Software Engineer, Software Developer, Software Architect, Systems Analyst, Quality Assurance Engineer",
        image: "./assets/course-img-3.jpg"
    },

    "digital-media": {
        title: "Digital Media:",
        description: "Description: Digital Media professionals are responsible for the creation, production, and distribution of digital content. They work with various digital tools and technologies to create and manage content for websites, social media, and other digital platforms.",
        jobs: "Job Opportunities: Graphic Designer, Digital Artist, Video Editor, Social Media Manager, Content Creator",
        image: "./assets/course-img-4.jpg"
    },

    "information-technology": {
        title: "Information Technology:",
        description: "Description: IT professionals are responsible for the planning, implementation, and maintenance of computer systems and networks. They work with hardware, software, and networks to support organizational operations.",
        jobs: "Job Opportunities: IT Support Specialist, Network Administrator, Systems Engineer, Software Developer, Database Administrator",
        image: "./assets/course-img-6.jpg"
    },
    "business-information-technology": {
        title: "Business Information Technology:",
        description: "Description: Business Information Technology professionals combine business knowledge with IT skills to support organizational goals and improve efficiency. They analyze business processes, identify opportunities for technology-enabled solutions, and implement IT systems to drive business growth.",
        jobs: "Job Opportunities: Business Systems Analyst, IT Consultant, ERP Specialist, CRM Specialist, Business Intelligence Analyst",
        image: "./assets/course-img-7.jpg"
    },
    "info-communication-technology": {
        title: "Information & Communication Technology:",
        description: "Description: ICT professionals are responsible for the design, development, implementation, and management of information and communication systems. They work with hardware, software, networks, and telecommunications technologies to support organizational operations.",
        jobs: "Job Opportunities: IT Support Specialist, Network Administrator, Systems Engineer, Software Developer, Telecommunications Engineer",
        image: "./assets/course-img-9.jpg"
    },
    "information-systems": {
        title: "Information Systems:",
        description: ": Information Systems professionals are responsible for designing, developing, implementing, and managing information systems to meet the needs of an organization. They analyze business processes, gather requirements, and select appropriate technologies to support organizational goals.",
        jobs: " Systems Analyst, Business Analyst, Project Manager, IT Manager, Database Administrator",
        image: "./assets/course-img-8.jpg"
    },
    "digital-marketing": {
        title: "Digital Marketion:",
        description: "Description: Digital Marketing professionals are responsible for promoting products or services using digital channels. They use various digital marketing techniques, such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and content marketing, to reach target audiences and drive conversions.",
        jobs: "Job Opportunities: Digital Marketing Manager, SEO Specialist, PPC Specialist, Social Media Manager, Content Marketer",
        image: "./assets/course-img-4.jpg"
    },
};

document.querySelectorAll('.course-list li').forEach(item => {
    item.addEventListener('click', function () {
        const courseKey = this.getAttribute('data-course');
        const course = courses[courseKey];

        const detailsDiv = document.getElementById('course-details');
        detailsDiv.querySelector('#course-title').textContent = course.title;
        detailsDiv.querySelector('#course-description').textContent = course.description;
        detailsDiv.querySelector('#course-jobs').textContent = course.jobs;
        const courseImage = document.getElementById('course-image');
        courseImage.src = course.image;
        courseImage.alt = course.title;

        detailsDiv.classList.add('active');
    });
});
