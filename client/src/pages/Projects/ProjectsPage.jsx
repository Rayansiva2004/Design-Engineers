import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/SEO';
import './ProjectsPage.css';

// Local Image Imports
import projectHouse8 from '../../assets/images/house8.jpg';
import projectHouse6 from '../../assets/images/house6.jpg';
import projectHouse4 from '../../assets/images/house4.jpg';
import projectHouse5 from '../../assets/images/house5.jpg';
import projectHouse3 from '../../assets/images/house3.jpg';
import projectHouse7 from '../../assets/images/house7.jpg';
import projectHouse9 from '../../assets/images/house9.jpg';
import projectHouse1 from '../../assets/images/house1.jpg';
import projectHouse2 from '../../assets/images/house2.jpg';


const ProjectsPage = () => {
    const [filter, setFilter] = useState('All');
    const [selectedIndex, setSelectedIndex] = useState(null);

    const categories = ['All', 'Commercial', 'Residential'];

    const projects = [
        { id: 1, title: "Mr.Surender Villa", location: "Thaiyur, Chennai", category: "Commercial", size: "normal", img: projectHouse9, isLocal: true },
        { id: 13, title: "M/s. GL properties", location: "Krishna Nagar, varatharajapuram", category: "Commercial", size: "normal", img: projectHouse8, isLocal: true },
        { id: 14, title: "M/s. Diamond builders", location: "East Tambaram, Chennai", category: "Commercial", size: "normal", img: projectHouse6, isLocal: true },
        { id: 15, title: " M/s. Noor constructions", location: "chengalpet", category: "Commercial", size: "normal", img: projectHouse4, isLocal: true },
        { id: 16, title: "Mr. Sivakumar", location: "West Tambaram, Chennai", category: "Residential", size: "normal", img: projectHouse5, isLocal: true },
        { id: 17, title: "M/s. KM constructions", location: "West Tambaram, Chennai", category: "Residential", size: "normal", img: projectHouse3, isLocal: true },
        { id: 18, title: "Mr. Sarathi", location: "Thirunelveli", category: "Residential", size: "normal", img: projectHouse7, isLocal: true },
        { id: 19, title: "M/s. KM construction", location: "Chengalpet", category: "Residential", size: "normal", img: projectHouse1, isLocal: true },
        { id: 20, title: "Mr.Sankar Villa", location: "ECR, Chennai", category: "Residential", size: "normal", img: projectHouse2, isLocal: true },
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const handleImageClick = (index) => {
        setSelectedIndex(index);
    };

    const handleNext = () => {
        setSelectedIndex((prev) =>
            prev === filteredProjects.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? filteredProjects.length - 1 : prev - 1
        );
    };

    const slideLeft = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 }
    };

    return (
        <div className="projects-page">
            <SEO
                title="Our Projects | Architectural Portfolio"
                description="Explore our diverse portfolio of commercial, residential, and industrial projects across Chennai and Tamil Nadu. Proven excellence in architecture and engineering."
                keywords="architectural projects, chennai construction portfolio, industrial township planning, residential villas design"
            />
            <section className="page-hero" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop&fm=webp')"
            }}>
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
                    <motion.div
                        {...slideLeft}
                    >
                        <span className="section-label">Our Work</span>
                        <h1>Our Projects</h1>
                        <p>A portfolio of excellence across Tamil Nadu and beyond.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="projects-header">
                        <div className="categories-filter">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="projects-masonry"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    className={`project-card-v2 ${project.size}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="project-img-wrapper">
                                        <img
                                            src={project.isLocal ? project.img : `${project.img}&fm=webp`}
                                            alt={`${project.title} - ${project.category} project in ${project.location}`}
                                            loading="lazy"
                                            onClick={() => handleImageClick(index)}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <div className="project-overlay-v2">
                                            <div className="project-meta">
                                                <span className="project-category-tag">{project.category}</span>
                                                <h3>{project.title}</h3>
                                                <p className="project-loc">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                        <circle cx="12" cy="10" r="3" />
                                                    </svg>
                                                    {project.location}
                                                </p>
                                            </div>
                                            <Link to="/contact" className="project-arrow-btn">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <line x1="7" y1="17" x2="17" y2="7" />
                                                    <polyline points="7 7 17 7 17 17" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
            {selectedIndex !== null && (
                <div className="lightbox" onClick={() => setSelectedIndex(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedIndex(null)}>✕</button>
                        <button
                            className="lightbox-nav-btn left"
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                        >
                            ❮
                        </button>

                        <img
                            src={
                                filteredProjects[selectedIndex].isLocal
                                    ? filteredProjects[selectedIndex].img
                                    : `${filteredProjects[selectedIndex].img}&fm=webp`
                            }
                            alt="preview"
                            className="lightbox-img"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            className="lightbox-nav-btn right"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                        >
                            ❯
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsPage;
