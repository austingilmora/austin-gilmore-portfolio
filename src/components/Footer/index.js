import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (

        <footer className="page-footer font-small cyan darken-3 footer">


            <div className="container">


                <div className="flex-row">


                    <div className="col-md-12 icon-container">
                        <div className="mb-5">
                            <a className="mx-1 icon" href="https://github.com/austingilmora">
                                <FaGithub />
                            </a>
                            <a className="li-ic icon" href="https://www.linkedin.com/in/austin-gilmore/">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            <div className="footer-copyright text-center py-3">© 2022 Copyright Austin Gilmore

            </div>

        </footer>
    );
};

export default Footer;