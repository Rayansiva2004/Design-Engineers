import cadProject1 from "../assets/images/cad-project-1.png";
import cadProject2 from "../assets/images/cad-project-2.png";
import cadProject3 from "../assets/images/cad-project-4.jpg";
import urbanProject1 from "../assets/images/layout2.jpg";
import urbanProject2 from "../assets/images/layout3.webp";
import cmda from "../assets/images/cmda1.jpg";
import cmda2 from "../assets/images/cmda2.jpg";
import cmda3 from "../assets/images/cmda3.webp";
import digital from "../assets/images/digital1.jpg";
import digital3 from "../assets/images/digital3.jpg";
import digital5 from "../assets/images/digital5.jpg";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.webp";
import project3 from "../assets/images/project3.jpg";
import structural from "../assets/images/structural1.jpg";
import structural2 from "../assets/images/structural2.webp";
import structural3 from "../assets/images/structural3.jpg";
import estimation from "../assets/images/estimation1.jpg";


export const servicesData = [
    {
        id: "cmda-dtcp-approvals",
        title: "CMDA / DTCP Building and Layout Approvals",
        shortDesc: "Professional assistance for obtaining CMDA and DTCP approvals, ensuring your building and layout plans comply with all regulatory requirements.",
        highlightMessage: "( Self Certification approvals through out Tamil Nadu Corporation to Village Panchayat )",
        fullDesc: [
            "We provide end-to-end liaison services for securing CMDA and DTCP approvals. Navigating government regulations and obtaining planning permissions can be a complex and time-consuming process. Our experienced team understands the regulatory framework and helps fast-track your project approvals.",

            "Whether it is for residential layouts, commercial buildings, or large development projects, ensuring compliance with local planning authority standards is essential to avoid future legal complications.",

            "We carefully prepare all required documents, technical drawings, and application submissions while coordinating with the relevant authorities to ensure a smooth and efficient approval process.",

            "With our extensive experience in dealing with local regulatory bodies, we simplify what is often considered a stressful process, giving our clients peace of mind and allowing them to focus on project execution."
        ],
        icon: (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        features: [
            "Approval Drawings",
            "Getting Approval from CMDA",
            "Local Body Approvals",
            "Planning Permission Documentation",
            "Building Regularization"
        ],
        heroImage: cmda2,
        projectImage: cmda,
        secondProjectImage: cmda3,
        ctaText: "Get Approval Assistance"
    },
    {
        id: "layout-designs",
        title: "Layout Designs",
        shortDesc: "Efficient land planning and layout design for residential communities, townships, and development projects with optimized space utilization.",
        fullDesc: [
            "Masterful layout design forms the core foundation of a successful community. We specialize in conceptualizing and designing detailed layouts for gated communities, industrial parks, and integrated townships, balancing aesthetic appeal with optimal land utilization.",

            "Our planning strictly follows modern civic engineering standards and Vastu-compliant principles (if required). We ensure that essential infrastructure such as roads, drainage systems, water supply, and electrification is carefully planned before development begins.",

            "Effective layout planning requires foresight. We anticipate future growth, manage traffic flow efficiently, and integrate open green spaces to improve the quality of life for residents and users.",

            "Our team focuses on creating sustainable, resilient, and well-organized master plans that provide long-term value for developers while enhancing the living environment for communities."
        ],
        icon: (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="9" y2="15" />
            </svg>
        ),
        features: [
            "Layout Drawings",
            "Township Layout Planning",
            "Plot Subdivision Planning",
            "Road & Infrastructure Layout",
            "Open Space & Utility Planning"
        ],
        heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop&fm=webp",
        projectImage: urbanProject1,
        secondProjectImage: urbanProject2,
        ctaText: "Discuss Layout Planning"
    },
    {
        id: "digital-survey",
        title: "Digital Survey",
        shortDesc: "Accurate land surveying services using Total Station and DGPS technology to deliver reliable site measurements and topographical data.",
        fullDesc: [
            "Before any design begins, having a precise understanding of the physical site is essential. Our advanced Digital Survey services utilize modern Total Station (TS) and Differential GPS (DGPS) equipment to deliver highly accurate land measurements and site data.",

            "We conduct detailed topographical surveys, contour mapping, and boundary demarcation to create reliable and comprehensive land profiles. The collected data is converted into accurate digital terrain models that support architectural planning and structural engineering.",

            "Our survey reports help prevent costly errors during construction by ensuring that site boundaries, elevation levels, and terrain conditions are clearly defined.",

            "From small urban plots to large land parcels, we provide accurate ground-level information that forms the foundation for successful project planning and development."
        ],
        icon: (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        features: [
            "Topographical Survey",
            "Total Station Survey (TS)",
            "DGPS Land Survey",
            "Contour Mapping",
            "Boundary Demarcation"
        ],
        heroImage: digital5,
        projectImage: digital,
        secondProjectImage: digital3,
        ctaText: "Book a Land Survey"
    },
    {
        id: "structural-designs",
        title: "Structural Designs",
        shortDesc: "Safe and cost-efficient structural engineering solutions ensuring strong, stable, and code-compliant building structures.",
        fullDesc: [
            "The safety and longevity of any building depend on its structural integrity. Our advanced structural design services focus on developing stable, durable, and cost-effective structural systems for residential, commercial, and industrial projects.",

            "Our experienced engineers use advanced structural analysis software to design structures capable of withstanding seismic forces, wind loads, and dead and live load conditions.",

            "We optimize the use of steel and reinforced concrete to ensure strength, safety, and cost efficiency without compromising structural reliability.",

            "Whether designing multi-storey residential buildings or large-span industrial warehouses, we strictly follow the latest IS codes and international building standards to ensure safe and reliable construction."
        ],
        icon: (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <line x1="8" y1="3" x2="8" y2="17" />
                <line x1="16" y1="3" x2="16" y2="17" />
            </svg>
        ),
        features: [
            "Structural Design",
            "Foundation Design",
            "Seismic & Wind Load Analysis",
            "Structural Safety Calculations"
        ],
        heroImage: structural,
        projectImage: structural2,
        secondProjectImage: structural3,
        ctaText: "Consult Our Engineers"
    },
    {
        id: "estimations-valuation",
        title: "Estimations & Valuation",
        shortDesc: "Accurate project cost estimation and property valuation services for bank loans, construction planning, and financial decision-making.",
        fullDesc: [
            "Financial clarity is essential for the success of any construction project. Our estimation and valuation services provide accurate quantity surveying and cost estimation to help clients plan and manage their budgets effectively from the very beginning.",

            "We prepare detailed BOQs (Bills of Quantities) that allow contractors to submit precise quotations, helping maintain financial discipline and preventing unexpected costs during the construction process.",

            "In addition to construction cost estimation, we provide authorized property valuation services. Our valuation reports are widely used for bank loans, capital gains tax calculations, visa processing, and property transactions.",

            "Through transparent reporting and professional analysis, we help our clients make informed decisions and confidently manage their real estate investments."
        ],
        icon: (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 1v22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        features: [
            "Estimate for Bank Loan",
            "Detailed Estimate",
            "Material & Labour Consumption Document",
            "Valuation Report",
            "Project Cost Analysis"
        ],
        heroImage: estimation,
        projectImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop&fm=webp",
        secondProjectImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop&fm=webp",
        ctaText: "Request an Estimate"
    },
    {
        id: "project-management-contracts",
        title: "Project Management Contracts",
        shortDesc: "Complete project supervision and coordination services to ensure construction projects are delivered on time, within budget, and with high quality.",
        fullDesc: [
            "Constructing a building involves coordinating multiple stakeholders, contractors, and timelines simultaneously. Our Project Management Contracting (PMC) services take this responsibility off your shoulders by managing every stage of the project professionally.",

            "We act as your representative on-site, handling scheduling, contractor coordination, vendor management, quality control, and budget monitoring. Our proactive approach helps identify potential challenges early, minimizing risks, delays, and cost overruns.",

            "From project initiation to final handover, our team ensures that the architectural vision is executed accurately and efficiently. We implement strict quality checks and ensure that contractors follow industry standards and approved material specifications.",

            "With our PMC services, clients gain peace of mind knowing that experienced professionals are carefully managing and safeguarding their construction investment."
        ],
        icon: (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        features: [
            "Site Management",
            "Construction Supervision",
            "Contractor Coordination",
            "Project Progress Monitoring",
            "Quality Control & Reporting"
        ],
        heroImage: project1,
        projectImage: project2,
        secondProjectImage: project3,
        ctaText: "Discuss Your Project Plan"
    },
    {
        id: "cad-design",
        title: "3D Elevations",
        shortDesc: "Professional 3D building elevations and technical drawings including architectural, electrical, and plumbing plans for construction projects.",
        fullDesc: [
            "DESIGN ENGINEERS is an engineering company offering 3D elevation drawing and technical drawing services (Civil & Electrical) to individuals and businesses. All projects are considered, regardless of their size or complexity. We aim to provide a professional, friendly, and reliable service to all clients, delivering results that exceed expectations.",
            "We work closely with our clients to clearly understand their project requirements and ensure the project goals are achieved from the very beginning. Our team is committed to maintaining clear communication and providing efficient solutions throughout the design process.",
            "Our 3D Elevations offer unparalleled precision for complex engineering requirements. We specialize in creating high-quality, professional technical drawings that serve as the blueprint for success in civil and electrical engineering projects.",
            "From conceptual sketches to detailed construction documentation, our designs adhere to international standards and local regulations. With a strong focus on accuracy, quality, and timely delivery, we ensure every design meets industry standards while supporting smooth project execution."
        ],
        icon: (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M4 19.5V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v15.5a1.5 1.5 0 0 1-1.5 1.5H5.5a1.5 1.5 0 0 1-1.5-1.5z" />
                <path d="M9 7h6" />
                <path d="M9 11h6" />
                <path d="M9 15h4" />
            </svg>
        ),
        features: [
            "Architectural Plan",
            "Electrical & Plumbing Drawings",
            "Scheme Drawings",
            "Technical Drafting",
            "Approval Drawings"
        ],
        heroImage: cadProject3,
        projectImage: cadProject1,
        secondProjectImage: cadProject2,
        ctaText: "Get Technical Consultation"
    },
    {
        id: "commercial-design",
        title: "Commercial Design",
        shortDesc: "Innovative architectural design solutions for commercial buildings such as hotels, factories, offices, and shopping complexes.",
        fullDesc: [
            "DESIGN ENGINEERS specializes in the design of commercial establishments ranging from hotels and factories to shopping malls and business complexes. Our design approach is based on a clear understanding of client requirements and the functional needs of each project.",
            "Our commercial designs focus on creating spaces that combine strong aesthetic appeal with practical usability. We emphasize environmentally responsible architecture by incorporating green building principles, maximizing natural sunlight, and recommending energy-efficient systems such as solar power solutions.",
            "We have contributed to several landmark commercial projects, delivering designs that balance architectural excellence with operational efficiency.",
            "We design commercial spaces that drive business performance. Our approach to commercial architecture balances aesthetic appeal with operational efficiency and sustainability. Whether it's a luxury hotel, a state-of-the-art factory, or a bustling shopping mall, we focus on creating environments that enhance the user experience and provide long-term value for stakeholders."
        ],
        icon: (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M3 21h18" />
                <path d="M9 8h1" />
                <path d="M9 12h1" />
                <path d="M9 16h1" />
                <path d="M14 8h1" />
                <path d="M14 12h1" />
                <path d="M14 16h1" />
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
            </svg>
        ),
        features: [
            "Commercial Building Design",
            "Hotel Design",
            "Factory Design",
            "Shopping Mall Planning",
            "Marketing Brochures"
        ],
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop&fm=webp",
        projectImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop&fm=webp",
        secondProjectImage: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200&auto=format&fit=crop&fm=webp",
        ctaText: "Discuss Commercial Project"
    },
    {
        id: "residential-design",
        title: "Residential Design",
        shortDesc: "Creative residential architecture for villas, apartments, and modern homes focused on comfort, efficiency, and lifestyle.",
        fullDesc: [
            "DESIGN ENGINEERS offers residential design solutions ranging from high-rise apartments to individual villas. Our design approach focuses on maximizing carpet area while reducing unnecessary common spaces, ensuring better value and efficient use of space for homeowners.",
            "Our residential designs aim to enhance the quality and standard of living by creating comfortable, secure, and stylish living environments. We carefully plan layouts that provide a sense of community, privacy, and modern lifestyle within thoughtfully designed residential spaces.",
            "We incorporate smart planning, natural lighting, and functional layouts to ensure every home offers comfort, convenience, and long-term livability.",
            "Home is where the heart is, and our residential designs are crafted with passion and soul. We specialize in creating high-end apartments and bespoke luxury villas that reflect the unique lifestyle of their inhabitants. Our designs prioritize comfort, privacy, security, and environmental harmony, ensuring your home is a sanctuary for generations."
        ],
        icon: (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        features: [
            "Apartment Planning",
            "3D Elevations",
            "Space Optimization Planning",
            "Modern Residential Layouts"
        ],
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop&fm=webp",
        projectImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop&fm=webp",
        secondProjectImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop&fm=webp",
        ctaText: "Design Your Dream Home"
    }
];

