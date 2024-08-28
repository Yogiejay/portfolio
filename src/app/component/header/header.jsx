import React from "react";
import './header.css';
import { FaHome, FaUser, FaBriefcase, FaLayerGroup, FaPencilAlt, FaEnvelope, FaSun, FaArrowRight } from "react-icons/fa";

function Header() {
    return (
        <div>
            <nav className="header">
                <div className="left">
                    <span className="logo-icon">■</span> {/* Replace with your actual logo */}
                    <span className="logo-text">My <span className="highlight">CV</span></span>
                </div>
                <div className="middle">
                    <div className="menu-item active"><FaHome /> Home</div>
                    <div className="menu-item"><FaUser /> About</div>
                    <div className="menu-item"><FaBriefcase /> Services</div>
                    <div className="menu-item"><FaLayerGroup /> Works</div>
                    <div className="menu-item"><FaPencilAlt /> Blog</div>
                    <div className="menu-item"><FaEnvelope /> Contact</div>
                </div>
                <div className="right">
                    <FaSun className="theme-icon" />
                    <a href="https://www.linkedin.com/in/yogesh-yadav-888b5b206/" target="_blank" rel="noopener noreferrer" className="cta">
                        <span>Let's Talk</span> <FaArrowRight />
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Header;
