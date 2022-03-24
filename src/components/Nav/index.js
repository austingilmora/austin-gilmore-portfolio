import React, { useEffect } from "react";


function Nav(props) {


    return (
        <header className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid ">
                    <h2 className="m-4">
                <h1>
                    AG
                </h1>
            </h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link ${props.currentPage === 'about' && 'active'}`} aria-current="page" onClick={() => props.setCurrentPage('about')}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${props.currentPage === 'portfolio' && 'active'}`} onClick={() => props.setCurrentPage('portfolio')}>Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${props.currentPage === 'contact' && 'active'}`} onClick={() => props.setCurrentPage('contact')}>Contact Me</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${props.currentPage === 'resume' && 'active'}`} href="assets/pdf/Austin-Gilmore-Resume.pdf" download="Austin-Gilmore-Resume">Download My Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;