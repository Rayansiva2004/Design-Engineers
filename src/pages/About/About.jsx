import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SEO from '../../components/SEO';
import './About.css';
import journeyImg from '../../assets/images/house2.jpg';
import owner from '../../assets/images/owner.jpeg';

const About = () => {
    const slideLeft = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const slideRight = {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { staggerChildren: 0.1 }
    };

    const capabilities = [
        "Architectural Planning",
        "Urban Design",
        "Interior Design",
        "Space Planning",
        "Graphic Design"
    ];

    const expertise = [
        { title: "Creative Architecture", desc: "Crafting unique spaces that blend form, function, and artistic expression for modern living." },
        { title: "Residential & Commercial", desc: "Extensive experience delivering high-impact projects from luxury villas to massive industrial complexes." },
        { title: "Innovative Approach", desc: "Leveraging the latest technology and sustainable practices to solve complex design challenges." }
    ];

    return (
        <main className="about-page" id="top">
            <SEO
                title="About Us | 15 Years of Design Excellence"
                description="Learn about Design Engineers, a leading architectural firm in Chennai established in 2009. We balance aesthetics with technical precision."
                keywords="about design engineers, architecture firm chennai history, skilled architectural planners"
            />
            <section className="page-hero" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920&auto=format&fit=crop&fm=webp')"
            }}>
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
                    <motion.div
                        {...slideLeft}
                    >
                        <span className="section-label">Since 2009</span>
                        <h1>About Design Engineers</h1>
                        <p>Bridging the gap between visionary aesthetics and technical precision.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="about-intro-grid">
                        <motion.div className="about-story" {...slideLeft}>
                            <span className="section-label">Our Journey</span>
                            <h2 className="section-title">Established in Tambaram, Chennai</h2>
                            <p>
                                Since 2009, Design Engineers has worked closely with clients providing architectural
                                design and interior space management integrating aesthetics, culture, latest
                                technology and environmental sensitivity.
                            </p>
                            <p>
                                Our firm balances technical knowledge with a deep understanding of how people
                                interact with their environment. We've completed hundreds of successful projects
                                across Chennai and the wider Tamil Nadu region.
                            </p>
                            <div className="capabilities-box">
                                <h3>Core Capabilities</h3>
                                <ul className="capability-list">
                                    {capabilities.map((item, idx) => (
                                        <li key={idx}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            className="about-stat-image"
                            {...slideRight}
                        >
                            <img
                                src={journeyImg}
                                alt="Detailed architectural sketching and planning session at Design Engineers"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center mb-60">
                        <motion.span className="section-label" {...slideLeft}>Our Value</motion.span>
                        <motion.h2 className="section-title" {...slideRight}>Unmatched Expertise</motion.h2>
                    </div>
                    <motion.div
                        className="expertise-cards"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {expertise.map((card, index) => (
                            <motion.div
                                key={index}
                                className="expertise-card-v2"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="expertise-card-header">
                                    <span className="expertise-num">0{index + 1}</span>
                                    <h3>{card.title}</h3>
                                </div>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            {/* OWNER SECTION */}

            <section className="section owner-section">
                <div className="container">
                    <div className="owner-grid">

                        <motion.div className="owner-image" {...slideLeft}>
                            <img
                                src={owner}
                                alt="Founder of Design Engineers"
                            />
                        </motion.div>

                        <motion.div className="owner-content" {...slideRight}>
                            <span className="section-label">Founder</span>
                            <h2>B.Fazil Hussain</h2>
                            <h4>Consulting Civil Engineer </h4>

                            <p>
                                B. Fazil Hussain is a seasoned professional dedicated to delivering innovative and sustainable engineering solutions With over 15 years of experience in civil engineering, architecture, and structural design. He founded his engineering practice with a clear vision of combining technical excellence with modern architectural concepts.

                            </p>

                            <p>
                                His expertise covers residential, commercial, and urban development projects across Tamil Nadu. Known for his commitment to quality, precision, and timely delivery, he has successfully led and executed numerous projects, earning a strong reputation for reliability and excellence.

                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section className="goal-section-v2">
                <div className="container">
                    <motion.div
                        className="goal-card-v2 glass-effect"
                        {...slideLeft}
                    >
                        <span className="section-label">Our Mission</span>
                        <h2 style={{ color: 'black' }}>National Vision, Local Precision</h2>
                        <p>To continuously innovate, create and deliver successful projects across the nation, setting new standards for the architecture of tomorrow.</p>
                        <div className="stats-bar-v2">
                            <div className="stat-item-v2">
                                <strong>500+</strong>
                                <span>Projects Completed</span>
                            </div>
                            <div className="stat-item-v2">
                                <strong>15+</strong>
                                <span>Years Service</span>
                            </div>
                            <div className="stat-item-v2">
                                <strong>20+</strong>
                                <span>Cities Covered</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-60">
                        <motion.span className="section-label" {...slideRight}>Find Us</motion.span>
                        <motion.h2 className="section-title" {...slideLeft}>Our Chennai Office</motion.h2>
                    </div>
                    <motion.div
                        className="map-wrapper-v2"
                        {...slideRight}
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6790209189717!2d80.11182167484058!3d12.928339787383035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f71fc65e1d5%3A0x8227ef4c04fd1a55!2sDesign%20Engineers!5e0!3m2!1sen!2sin!4v1773947820445!5m2!1sen!2sin"
                            width="100%"
                            height="500"
                            style={{ border: 0, borderRadius: '24px' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Office Location"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default About;
