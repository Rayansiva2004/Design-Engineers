import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

// Local Image Imports
import projectHouse8 from '../../assets/images/house8.jpg';
import projectHouse6 from '../../assets/images/house6.jpg';
import projectHouse4 from '../../assets/images/house4.jpg';
import projectHouse5 from '../../assets/images/house5.jpg';
import projectHouse3 from '../../assets/images/house3.jpg';
import projectHouse7 from '../../assets/images/house7.jpg';

const projectsData = [
    {
        name: 'Metropolitan Business Plaza',
        category: 'Commercial',
        location: 'Guindy, Chennai',
        image: projectHouse8,
        featured: true,
        isLocal: true,
    },
    {
        name: 'Eco-Friendly Tech Park',
        category: 'Commercial',
        location: 'OMR, Chennai',
        image: projectHouse6,
        featured: false,
        isLocal: true,
    },
    {
        name: 'Urban Commercial Center',
        category: 'Commercial',
        location: 'Tambaram, Chennai',
        image: projectHouse4,
        featured: false,
        isLocal: true,
    },
    {
        name: 'Mr.Sivakumar Residence',
        category: 'Residential',
        location: 'west tambaram, chennai',
        image: projectHouse5,
        featured: true,
        isLocal: true,
    },
    {
        name: 'Traditional Heritage Home',
        category: 'Residential',
        location: 'Mylapore, Chennai',
        image: projectHouse3,
        featured: false,
        isLocal: true,
    },
    {
        name: 'Modern Suburban Residency',
        category: 'Residential',
        location: 'Pallavaram, Chennai',
        image: projectHouse7,
        featured: false,
        isLocal: true,
    },
    {
        name: 'Azure Tower Complex',
        category: 'Commercial',
        location: 'New York, USA',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
        featured: true,
    },
    {
        name: 'Greenfield Residences',
        category: 'Residential',
        location: 'London, UK',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        featured: false,
    },
    {
        name: 'Horizon Innovation Hub',
        category: 'Commercial',
        location: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1577985043696-8bd54d9c4578?w=800&q=80',
        featured: false,
    },
    {
        name: 'Meridian Business Park',
        category: 'Industrial',
        location: 'Singapore',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
        featured: false,
    },
    {
        name: 'Oakwood Family Estate',
        category: 'Residential',
        location: 'Toronto, Canada',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        featured: true,
    },
    {
        name: 'Metro Civic Center',
        category: 'Infrastructure',
        location: 'Sydney, Australia',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
        featured: false,
    },
];

const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure'];

const Projects = ({ showAll = false }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filtered = activeFilter === 'All'
        ? projectsData
        : projectsData.filter((p) => p.category === activeFilter);
    const displayedProjects = showAll ? filtered : filtered.slice(0, 4);

    return (
        <section className="projects-section section" id="projects-section">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <span className="section-label">Our Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Explore our portfolio of award-winning designs spanning commercial,
                        residential, and infrastructure sectors worldwide.
                    </p>
                </div>

                <div className="projects-filters animate-fade-up">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {displayedProjects.map((project, index) => (
                        <div key={index} className={`project-card-wrapper${project.featured ? ' featured-wrapper' : ''}`}>
                            <div
                                className={`project-card animate-scale delay-${(index % 3) + 1}${project.featured ? ' featured' : ''}`}
                            >
                                <img src={project.isLocal ? project.image : project.image} alt={project.name} loading="lazy" />
                                <div className="project-overlay">
                                    <span className="project-category">{project.category}</span>
                                    <h3 className="project-name">{project.name}</h3>
                                    <p className="project-location">{project.location}</p>
                                </div>
                                <div className="project-arrow">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </div>
                            </div>
                            <a
                                href="https://www.instagram.com/design_engineers_09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-instagram-link"
                            >
                                <svg className="insta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instaGradHome)" strokeWidth="2" fill="none"/>
                                    <circle cx="12" cy="12" r="4" stroke="url(#instaGradHome)" strokeWidth="2" fill="none"/>
                                    <circle cx="17.5" cy="6.5" r="1" fill="url(#instaGradHome)"/>
                                    <defs>
                                        <linearGradient id="instaGradHome" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#f09433"/>
                                            <stop offset="25%" stopColor="#e6683c"/>
                                            <stop offset="50%" stopColor="#dc2743"/>
                                            <stop offset="75%" stopColor="#cc2366"/>
                                            <stop offset="100%" stopColor="#bc1888"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>design_engineers_09</span>
                            </a>
                        </div>
                    ))}
                </div>

                {!showAll && (
                    <div className="projects-cta animate-fade-up">
                        <Link to="/projects" className="btn btn-dark">
                            View All Projects
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
