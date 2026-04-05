import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        text: "Good technical soundness and they understand the practical constraints while executing construction projects. Drawings are prepared accordingly. Overall a good and nice experience. Thank you team.",
        author: "Dhananjay Sharma",
        stars: 5
    },
    {
        id: 2,
        text: "Excellent service for pre-construction.",
        author: "Abc Poovai",
        stars: 5
    },
    {
        id: 3,
        text: "I approached them for my house construction approval. Prompt response every time, and on-time delivery of drawings and approvals as promised.",
        author: "YUVARAJAN",
        stars: 5
    },
    {
        id: 4,
        text: "The 3D interior views and house elevation they provided were wonderful. Very reasonable pricing.",
        author: "abinesh kumar",
        stars: 5
    },
    {
        id: 5,
        text: "Many of my interior projects were designed by them. Very good service and economical in cost.",
        author: "john felix",
        stars: 5
    },
    {
        id: 6,
        text: "Approached them for my building plan and elevation. The plan and especially the elevation they gave me is really impressive.",
        author: "BALAJI R",
        stars: 5
    },
    {
        id: 7,
        text: "The drawings are technically sound and the elevations are highly aesthetic. Kudos to the entire team.",
        author: "shanker devan",
        stars: 5
    },
    {
        id: 8,
        text: "Amazing creativity. Customers benefit greatly from their services. Very reasonable pricing.",
        author: "Nani",
        stars: 5
    },
    {
        id: 9,
        text: "Best design team. They help fulfill your dream of building your sweet home.",
        author: "S.M. Mohammed Sabiyullah",
        stars: 5
    },
    {
        id: 10,
        text: "Superb work always. Drawings are very detailed and clear without any ambiguity.",
        author: "SAKTHI VEL",
        stars: 5
    },
    {
        id: 11,
        text: "Very good architectural services in Tambaram.",
        author: "Sahul Amithu",
        stars: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const slideNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const slidePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(slideNext, 5000);
        return () => clearInterval(timer);
    }, [slideNext]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <section className="testimonials-section section">
            <div className="container">
                <div className="testimonial-header text-center mb-60">
                    <span className="section-label">Feedback</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">Trusted by homeowners, builders, and businesses across Chennai.</p>
                </div>

                <div className="testimonial-slider-wrapper">
                    <button className="slider-arrow prev" onClick={slidePrev} aria-label="Previous testimonial">
                        <FaChevronLeft />
                    </button>

                    <div className="testimonial-content-area">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 }
                                }}
                                className="testimonial-card"
                            >
                                <div className="testimonial-stars">
                                    {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                </div>
                                <div className="quote-icon-box">
                                    <FaQuoteLeft className="quote-icon" />
                                </div>
                                <p className="testimonial-text">
                                    {testimonials[currentIndex].text}
                                </p>
                                <div className="testimonial-author">
                                    <h4 className="author-name">{testimonials[currentIndex].author}</h4>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="slider-arrow next" onClick={slideNext} aria-label="Next testimonial">
                        <FaChevronRight />
                    </button>
                </div>

                <div className="testimonial-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="testimonial-cta text-center">
                    <a 
                        href="https://goo.gl/maps/dJLnpdm9LZTbVJts6" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline"
                    >
                        View More Reviews on Google
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
