import React from 'react';

const Services = () => {
    return (
        <section id="services" className="services">
            <h2>Services</h2>
            <div className="service-grid">
                {/* Front-End Development */}
                <div className="service-card">
                    <i className="fas fa-palette"></i> {/* أيقونة Front-End */}
                    <h3>Front-End Development</h3>
                    <p>Crafting responsive and interactive user interfaces using modern front-end technologies.</p>
                    <ul>
                        <li>HTML5, CSS3, JavaScript</li>
                        <li>React</li>
                        <li>Responsive and Mobile-First Design</li>
                    </ul>
                </div>

                {/* Back-End Development */}
                <div className="service-card">
                    <i className="fas fa-server"></i> {/* أيقونة Back-End */}
                    <h3>Back-End Development</h3>
                    <p>Building reliable and scalable server-side applications tailored to business needs.</p>
                    <ul>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>Authentication and Authorization</li>
                        <li>RESTful APIs</li>
                    </ul>
                </div>

                {/* SQL Database Management */}
                <div className="service-card">
                    <i className="fas fa-database"></i> {/* أيقونة SQL */}
                    <h3>SQL Database Management</h3>
                    <p>Designing and maintaining efficient SQL databases to handle data securely.</p>
                    <ul>
                        <li>Data Modeling</li>
                        <li>SQL Query Optimization</li>
                        <li>Database Backup and Recovery</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
