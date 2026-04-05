import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
    const location = useLocation();

    useEffect(() => {
        // Update Title
        document.title = `${title} | Design Engineers`;

        // Update Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Design Engineers - Architecture & Engineering Excellence in Chennai since 2009.');
        }

        // Update Keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords || 'architecture, engineering, design, chennai, interior design, construction');
        }

        // Update Canonical
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', window.location.href);

    }, [title, description, keywords, location]);

    return null;
};

export default SEO;
