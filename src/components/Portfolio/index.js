import React, { useEffect } from "react";

function Portfolio() {

    return (
        <section>
            <div>
                <h2>My Projects</h2>
            </div>
            <div>
                <div>
                <a href="https://treaddit.herokuapp.com/">
                        <img src="../../assets/images/treaddit.png" alt="Treaddit Homepage" />
                    </a>
                    <p>
                        Trail Finder<br />
                        MySQL/Express/JS/Handlebars/
                    </p> 
                </div>
                <div>
                    <a href="https://austingilmora.github.io/what-breed-do-you-need/">
                        <img src="../../assets/images/what-breed-do-you-need.png" alt="Dog Breed Finder Homepage" />
                    </a>
                    <p>
                        Dog Breed Finder<br />
                        JS/3rd Party APIs/CSS/HTML
                    </p>   
                </div>
                <div>
                <a href="https://expressly-noted.herokuapp.com/">
                        <img src="../../assets/images/expressly-noted.png" alt="Expressly Noted Homepage" />
                </a>
                    <p>
                        Note Taker<br />
                        Express/HTML
                    </p> 
                </div>
                <div>
                <a href="https://dry-gorge-57166.herokuapp.com/">
                        <img src="../../assets/images/saving-sense.png" alt="Saving Sense Homepage" />
                </a>
                    <p>
                        Budgeting app<br />
                        MongoDB/Express
                    </p> 
                </div>
            </div>
        </section>
    )
}