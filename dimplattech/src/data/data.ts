interface TopicsObj{
    title: string,
    description: string[] 
}

interface priceObj {
    name: string,
    payment: {
        physical: {
            private: string,
            general: string
        },
        virtual: {
            private: string,
            general: string
        } 
    }
}

export const productDesign : TopicsObj[] = [
    {
      title: "Introduction to the course",
      description: [
        "It provides students with a comprehensive introduction to product design. It acquaints them with the fundamental principles, elements, and tools necessary for successful design. The unit emphasizes the primary purpose of product design, which is to create innovative solutions that cater to user needs and evoke emotions. Through engaging lectures and interactive discussions, students gain a deep understanding of the impact that well-designed products can have on society and individuals."  
      ]
    },
    {
        title: "Figma interface",
        description: [
            "What is Figma/where to find figma",
            "Start screen/ Menu bar/ tools panel / The layers and pages panel/ The",
            "component panel / The prototype panel"
        ]
    },
    {
        title: "Setting up a new project",
        description: [
            "Creating a new project working with teams"
        ]
    },
    {
        title: "Adding and editing content",
        description: [
            "Working with frames",
            "Working with shapes",
            "Working with shapes",
            "Working with pen tool",
            "Working with text",
            "Working with images",
            "Working with icons",
            "Working with images",
            "Working with icons",
            "Working with color",
            "Working with components"
        ]
    },
    {
        title: "Responsive",
        description: [
            "working with version control"
        ]
    },
    {
        title: "Prototyping, sharing, exporting",
        description: [
            "Creating a prototype",
            "Sharing your design",
            "Exproting assests",
        ]
    },
    {
        title: "Intersection of Design. Technology",
        description : [
           "Through critical analysis understand how user experience as a field sits in the intersection of different areas of the product",
           "what is the difference between User Experience Design and User Interface Design?",
           "Learn about heuristics and apply heuristic evaluation to various websites",
           "Conpetitive Research" 
        ]
    },
    {
        title: "Wireframing, Sketching, Prototyping",
        description: [
            "Practice a sketching session for an existing website or mobile appliction of your choice. Start with sketching on whiteboard or your notebook.",
            "Sketch wireframes for your class project.",
            "Learn Sketch to create wireframes/prototypes.",
            "Learn the power of prototyping and testing an idea. Understand different methods of prototyping and thier levels"
        ]
    },{
        title: "Building a Case Study",
        description: [
            "Finish clickable prototype.",
            "Case study examples as web pages and PDFs.",
            "Using a complication of compilation of user research, prototypes, and user research, build your case study as either as HTML page or a PDF using the application of your choice"
        ]
    },
    {
        title: "Final Project Presentation",
        description : [
            "The Business of UX Design",
            "Present class projects as case studies on-screen",
            "Getting into the business: strategies and ideas",
            "UX Resources"
            ]
    }
]

export const frontEnd : TopicsObj[] = [
    {
        title: "Learn the Anatomy of HTML to structure your website",
        description : [
            "Understand HTML boilerplate and HTML doctypes",
            "How to structure text in HTML",
            "How to structure HTML lists to create ordered and unordered lists",
            "How to insert images using HTML",
            "How to hyperlinks using Anchor tags",
            "Understand how to use HTML tables for Content",
            "How to use tables for Layout"            
        ]
    },
    {
        title: "Cascading Style Sheets",
        description : [
            "Understand what Cascading Style Sheets and how you can it to style your website.",
            "How to use CSS selectors and properties.",
            "How to Hyperlinks using Anchor tags.",
            "Understand how to use HTML tables for Content.",
            "How to use tables for Layout."
        ]
    },
    {
        title: "Bootstrap",
        description : [
           "Learn the fundamentals of implementing responsive web design.",
           "How to use Bolsomiq to mock-up and wireframe websites.",
           "The fundamentals of UI design for websites." 
        ]
    },
    {
        title: "Document Object Model (DOM)",
        description : [
            "Learn the structure of HTML based websties",
            "Transverse through the documents using object notation.",
            "Seperation of concerns and coding base Practices.",
            "Manipulate and change the HTML elements using your understanding of DOM"
        ]
    },
    {
        title : "JQUERY",
        description : [
            "Learning about jQuery functionality.",
            "Introducton to functions in jQuery,",
            "Manipulating text, styles, and attributes with jQuery.",
            "Create animations and customisation with jQuery.",
            "Use your jQuery knowledge to make your website.",
            "Interactive.",
            "Responding to user initiated events with jQuery."
        ]
    }
]

export const dataAnalysis : TopicsObj[] =[
    {
        title: "Introduction to the course",
        description: [
            "Objectives and learning outcomes",
            "Excel Basics",
            "Overiew of Excel interface and features",
            "Data Manipulation",
            "Data entry and formatting",
            "Sorting and filtering data",
            "Using conditional formatting",
        ]
    },
    {
        title: "Advanced Excel Functions",
        description: [
            "Lookup functions (VLOOKUP, HLOOKUP)",
            "Data validation",
            "Text functions"
        ]
    },
    {
        title: "Data Visualization",
        description: [
            "Creating chearts and graphs(bar, line, pie, scatter)",
            "Pivot Tables and Pivot Charts",
            "Dashboard creation"
        ]
    },
    {
        title: "Practical Exercise",
        description: [
            "Dimpalt Technologies | Data Analysis Curriculum | obinwa Chinma Joy",
            "Module 2: Data Analysis with Power BI"
        ]
    },
    {
        title: "Introduction to Power BI",
        description : [
            "Overiew of Power BI and its components",
            "Connecting to data sources"
        ]
    },
    {
        title: "Data Transformation and Modeling",
        description : [
            "Using Power Query for data cleaning",
            "Data modelling basics",
            "Creating relarionships between tables"
        ]
    },
    {
        title: "Data Visualization",
        description: [
            "Creating and customizing visualiztion (charts,map,tables)",
            "Using slicers and filters",
            "Designing and interactive dashboards"
        ]
    },
    {
        title : "Advanced SQL",
        description : [
            "Subqueries and nested queries",
            "Using slicers and filters",
            "Designing interactive dashboards"
        ]
    },
    {
        title: "Github for Data Analysts",
        description : [
            "Introduction to Github and version control",
            "Creating a Github account",
            "Uploading projects and datasets",
            "Writing effective README files",
            "Best practices for code documentation",
            "Building a Portolio",
            "Importance of a professional portfolio",
            "Showcasing projects using Github Pages or other Platforms",
            "Tips for creating an impactful portfolio",
            "Creating a Professional CV"
        ]
    },
    {
        title : "Key components of a data analyst CV",
        description: [
            "Highlighting relevent skills and projects",
            "Tailoring the CV for different job applications",
            "Linkedin for Data Analysts",
            "Creating a LinkedIn account"
        ]
    },
    {
        title: "Practical Exercise",
        description: [
            "Setting up Github, LinkedIn, and portfolio site",
            "Uploading projects and optimising profiles"
        ]
    }
]

export const backEnd : TopicsObj[] = [
    {
        title: "Introduction to Back End Engineering.",
        description : [
            "What is Node",
            "Course Requirement",
            "Course Structure",
            "Browser Vs Server",
            "Install Node, Repl, CLI, Source Code, Globals, Modules Setup, First Module."
        ]
    },
    {
        title: "Built-In Module Intro",
        description: [
            "Os Module",
            "Path Module",
            "Fs Module(Sync)",
            "Fs MOdule(Async)",
            "Sync Vs Async"
        ]
    },
    {
        title: "BUilt-In MOdule Intro",
        description: [
            "Http Module (Setup)",
            "Http Module (MOre Features)",
            "NPM Info",
            "NPM Command"
        ]
    },
    {
        title: "Event Loop",
        description: [
            "Event Loop Slides.",
            "Event Loop COde Examples"
        ]
    },
    {
        title: "Async Patterns - Blocking Code, Async Patterns - Setup Promises, Async Patterns - Refactor To Async, Async Patterns - Node's Native Option.",
        description: []
    },
    {
        title: "Http Messages, Starter Project Install, Starter Overview, Http Basics, Http - Headers, Http - Request Object, Http - Html File, Http - App Example.",
        description: []
    },
    {
        title: "JSON Basics Params, Query String - Setup, Route Params,  Params - Extra Info, Query String, Additional Params And Query String Info, 32) Middleware - Setup, APP.USE,  Multiple Middleware Functions, Additional Middleware Info.",
        description: []  
    },
    {
        title: "PROJECT",
        description: []
    }
]

export const autoCad : TopicsObj[] = [
    {
        title: "Use the functions, key commands and techniques of AutoCAD to create, save, and print 2D drawings.*",
        description: []
    },
    {
        title: "Make and edit your own AutoCAD drawings, plans and Layouts",
        description: []
    },
    {
        title: "Distinguish the differences required to generate drawings for use as annotation and real-world model components",
        description: []
    },
    {
        title: "Create and insert blocks and externally reference files, and determine the appropriate times to apply those skill sets.",
        description: []
    },
    {
        title: "Master file management, drafting on layers, integrating drawing component files and plotting while creating on the class residential project.",
        description: []
    },
    {
        title: "PROJECT",
        description: []
    }
]

export const productManagement : TopicsObj[] = [
    {
        title: "Introduction to Product Management",
        description: [
            "Overview of Product Management",
            "Definition and Importance",
            "Role of a Product Manager",
            "Key Responsibilities and Stakeholders"
        ]
    },
    {
        title: "Market Analysis and Customer Insights",
        description: [
            "Gathering Customer Insights",
            "Customer Personas and Needs",
            "User Journeys",
            "Design Thinking"
        ]
    },
    {
        title: "Defining and Validating Product Ideas",
        description: [
            "Ideation Techniques",
            "Brianstorming and Mind Mapping",
            "Hypothesis Formulation",
            "MVP (MInimum Viable Product)"
        ]
    },
    {
        title: "Real-life Study for Project Work",
        description: [
            "Portfolio building",
            "Team collaboration"
        ]
    },
    {
        title: "PROJECT",
        description: [
            "Presentation and Feedback",
            "Course SUmmary and Next Steps",
            "Recap ofKey Learings",
            "Certificate Distribution"
        ] 
    }
]

export const digitalMarketing : TopicsObj[] = [
    {
        title: "Introduction to the Course",
        description: [
            "Getting Started with Digital Marketing",
            "Traditional and digital Marketing",
            "what are Digital Marketing and E-Commerce",
            "Careers in Digital Marketing and E-Commerce",
            "Introduction to the marketing and sales funnel",
            "Attract and engage potential customers",
            "Drive sales and build brand loyalty",
            "Creating a digital marketing and E-marketing strategy through marketing strategy",
            "Reach CUstomers onlinee"
        ]
    },
    {
        title: "Search Engine Optimaztion",
        description: [
            "Creating Customers personas for your target audience",
            "Awareness and creating marketing funnel stages",
            "Conversion and loyalty marketing funnel stages",
            "Understand the Basics of search engine optimization SEO",
            "Keyword research and Website structure",
            "Apply search engine optimization SEO using",
            "- KeywordResearch",
            "- On-page SEO and off-page SEO",
            "- Meta Tages, Schema etc",
            "Help Google and Users understand your content",
            "Analyze Search Performance and user behaviour using goggle search console and SEM rush",
            "Understand search engine marketing SEM",
            "Understanding Google ads",
            "Apply display advertising"
        ]
    },
    {
        title: "Social Media Marketing",
        description: [
            "Understanding Social media marketing",
            "Review introduction from likes to leads",
            "Interaction with online customers",
            "Determining your social media marketing strategy and Tools",
            "Offering content variety usng various social media tools like Faceook, Instagram, Twitter and Tiktok",
            "Planning when to publish",
            "Continuous Review Social media strategy planning and publishing",
            "Social media analytics and reporting",
            "The value of paid ads on social media eg Instagram and Faceook ads",
            "Managing a Social advertising budget",
            "Review paid social media"
        ]
    },
    {
        title: "Content Marketing",
        description : [
            "Composing engaging content",
            "Hashtags compostion",
            "Caption generation",
            "Technical content for blogs"        
        ]
    },
    {
        title: "Email Marketing",
        description: [
            "what is Email Marketing",
            "Preparing for your campaign",
            "Email strategy for new and old custmers",
            "Email Lists and generation of email lists",
            "How to write an effective email",
            "Tool for Email Marketing" 
        ]
    },
    {
        title: "Mobile Marketing",
        description: [
            "Bonus: Affilate marketing"
        ]
    }
]

export const projectManagement : TopicsObj[] = [
    {
        title: "Introduction to the project management",
        description: [
            "Foundational fundamentals",
            "The environment in which projects operate"
        ]
    },
    {
        title: "Project Integration Management",
        description: [
            "Develop Project Charter",
            "Develop Project Management Plan",
            "Direct and Manage Project work",
            "Manage Project Knowledge",
            "Monitor and Control Project Work",
            "Perform Integrated Change Control",
            "Close Project or Phase"
        ]
    },
    {
        title: "Project Scope Management",
        description: [
            "Plan Scope Maangement",
            "Collect Requirement",
            "Define Scope",
            "Create WBS",
            "Validate Scope",
            "Control Scope"
        ]
    },
    {
        title: "Project Schedule Management",
        description: [
            "Plan Schedule Management",
            "Define Activities",
            "Sequence Activities",
            "Estimate Activity Durations",
            "Develop Schedule",
            "Control Schedule"
        ]
    },
    {
        title: "Project Cost Management",
        description: [
            "Plan Schedule Management",
            "Define Activities",
            "Sequence Activities",
            "Estimate Activity Durations",
            "Develop Schedule",
            "Control Schedule"
        ]
    },
    {
        title: "Project Cost Management",
        description: [
            "Plan Schedule Management",
            "Define Activities",
            "Sequence Activities",
            "Estimate Activity Durations",
            "Develop Schedule",
            "Control Schedule"
        ]
    },
    {
        title: "Project Quality Management",
        description: [
            "Plan Quality Management",
            "Manage Quality",
            "Control Quality"
        ]
    },
    {
        title: "Project Resource Management",
        description: [
            "Plan Quality Management",
            "Estimate Activity Resources",
            "Acquire Resources",
            "Develop Team",
            "Manage Team",
            "Control Resources"
        ]
    },
    {
        title: "Project Risk Management",
        description: [
            "Plan Risk Management",
            "Identify Risks",
            "Perform Qualitative Risk Analysis",
            "Plan Risk Response",
            "Implement Risk Responses",
            "Monitor Risks"
        ]
    },
    {
        title: "Integration what you have learnt to real life concepts",
        description: []
    }
]

export const cyberSecurity : TopicsObj[] = [
    {
        title: "Security Essentials",
        description: [
            "what is cybersecurity",
            "why cybersecurity",
            "CIA Triad",
            "AAA Framework",
            "Overview of the different domain within cybersecurity"
        ]
    },
    {
        title: "Network Basics",
        description : [
            "LAN/WAN",
            "Network Protocols",
            "TCP, UDP",
            "OSI Model"
        ]
    },
    {
        title : "Security Program",
        description: [
            "NIST cybersecurity Framework",
            "Cyber Attacks",
            "Malware types",
            "Threats and vulnerabilities"
        ]
    },
    {
        title: "Network and Application Security",
        description: [
            "Access Control Methods",
            "Multi Factor Authentication",
            "Authentication Protocols",
            "Cryptography",
            "Types of Encryption"
        ]
    },
    {
        title: "OSINT & Social Engineering",
        description: [
            "Social Engineering",
            "OSINT"
        ]
    },
    {
        title: "Risk Management",
        description: [
            "Understanding Risk Management",
            "Risk Types",
            "Risk Management",
            "Risk Assessment"
        ]
    },
    {
        title: "incident Response, Business Continuity and Disaster Recovery Concepts",
        description: [
            "Introduction to incident Response",
            "Introduction to Business Continuty",
            "Disaster Recovery COncept"
        ]
    },
    {
        title: "Cloud Security",
        description: [
            "Benefits and security considerations of cloud computing",
            "Securing data in the cloud",
            "Cloud provider security responsibilities"
        ]
    },
    {
        title: "Intorduction to Linux and Kali Linux",
        description: [
            "What is Linux?",
            "Introduction to the Linux operating system and its core concepts",
            "Differences between major Linux distributions (Ubuntu, Debian etc.)",
            "Introduction to the open-source software philosophy"
        ]
    },
    {
        title: "intorduction to Kali Linux",
        description: [
            "Understanding the purpose and ethical use of Kali Linux (penetration testing)",
            "Downloading and installing Kali Linux in a virtual environment",
            "Navigating the Kali Linux desktop environment",
            "Familiarization with the Kali terminal and basic commands"
        ]
    },
    {
        title: "Mastering the Command",
        description: [
            "Essential Linux Commands",
            "File and directory management commands (cd, ls, cp, mv, rm)",
            "User and permission management (whoami, sudo, chmod, chown)",
            "Working with text files (cat, less, grep)",
            "Process management (ps, kill)"
        ]
    },
    {
        title: "CAPSTONE PROJECT",
        description: []
    }
]

export const graphicsDesign : TopicsObj[] = [
    {
        title: "Introduction",
        description: [
            "What is Graphic design?",
            "Design History",
            "Visual Elements (Line, Colour and shapes)",
            "Visual Elements (Texture, Space and Typography)",
            "Alignment, Balance and Simplicity)",
            "Introduction to Design Software"
        ]
    },
    {
        title: "Design Application",
        description: [
            "Introduction to Corel DrawTour on Corel draw",
            "Going through the Tool Bar",
            "Task 2 (Assignments)"
        ]
    },
    {
        title: "Branding Design",
        description: [
            "What is Branding",
            "Logo Types",
            "Logo Creation",
            "The use of Fonts for different Logo Types",
            "Understanding Colour Codes and their Meaning",
            "Use of Mock up"
        ]
    },
    {
        title: "Stationary Design",
        description: [
            "What are Stationary Design?",
            "Design of Business Cards",
            "Design of Letter head",
            "Design of ID card",
            "Use of Mock up",
            "Presentation of Stationary to Client"
        ]
    },
    {
        title: "Design",
        description: [
            "Ideation Process",
            "Introduction to Photoshop",
            "Going through the tools of Photoshop",
            "Design of Fliers",
            "Creation of Background",
            "Choosing the right fonts",
            "Design of Magazine/Book cover (Part 1)",
            "Design of Magazine/Book cover (Part 2)",
            "Task 5 (Assignments)"
        ]
    },
    {
        title: "Client Communication",
        description: [
            "The Business part of Graphic Design",
            "Building your portfolio",
            "Free Mockups",
            "Getting Material 5)Resources to aid your Presentation",
            "Free Font",
            "Free Text Style"
        ]
    },
    {
        title: "Project",
        description: [
            "Group Project",
            "Individual Project"
        ]
    }
]

export const PriceList : priceObj[] = [
    {
        name: 'backend',
        payment:{
            physical: {
            private: "450000",
            general: "300000"
            },
            virtual: {
            private: "350000",
            general: "200000"
            }
        }
    },
    {
        name: 'dataAnalytics',
        payment: {
            physical:{
                private: "350000",
                general: "200000",
            },
            virtual:{
                private: "200000",
                general: "120000"
            }
        }
    },
    {
        name: 'dataScience',
        payment: {
            physical:{
                private: "350000",
                general: "200000",
            },
            virtual:{
                private: "200000",
                general: "120000"
            }
        }
    },
    {
        name: "realEstate",
        payment: {
            physical: {
                private: "350000",
                general: "250000"
            },
            virtual: {
                private: "200000",
                general: "100000"
            }
        }
    },
     {
        name: "productDesign",
        payment: {
            physical: {
                private: "200000",
                general: "120000",
            },
            virtual: {
                private: "300000",
                general: "200000"
            }
        }
    },
     {
        name: 'projectManagement',
        payment: {
            physical: {
                private: "400000",
                general: "300000"
            },
            virtual: {
                private: "350000",
                general: "200000"
            }
        }
    },
    {
        name: "digitalMarketing",
        payment: {
            physical:{
                private: "300000",
                general: "200000"
            },
            virtual: {
                private: "250000",
                general: "150000"
            }
        }
    },
    {
        name: "cloudComputing",
        payment: {
            physical: {
                private: "350000",
                general: "250000"
            },
            virtual: {
                private: "350,000",
                general: "500000"
            }
        }
    },
    {
        name: "frontend",
        payment: {
            physical:{
                private: "200000",
                general: "120000"
            },
            virtual:{
                private: "300000",
                general: "200000"
            }
        }
    },
    {
        name: "graphicsDesign",
        payment: {
            physical:{
                private: "300000",
                general: "200000"
            },
            virtual: {
                private: "200000",
                general: "120000"
            }
        }
    },
    {
        name: "productManagement",
        payment: {
            physical: {
                private: "350000",
                general: "250000"
            },
            virtual: {
                private: "300000",
                general: "200000"
            }
        }
    },
    {
        name: "fullstack",
        payment: {
            physical:{
                private: "650000",
                general: "500000"
            },
            virtual: {
                private: "500000",
                general: "350000"
            }
        }
    },
    {
        name: "autocad",
        payment: {
            physical: {
                private: "350000",
                general: "250000"
            },
            virtual : {
                private: "350000",
                general: "500000"
            }
        }
    },
    {
        name: "cyberSecurity",
        payment: {
            physical: {
                private: "350000",
                general: "250000"
            },
            virtual: {
                private: "350000",
                general: "500000"
            }
        }
    }
]