import '../home_styles/header.css';

function Header() {
    return (
        <header>
            <div id="header-content">
                <div className="logo-container">
                    <img className={"logo"} src={"../../../public/pictures/logo.png"} alt={"logo"}></img>
                </div>
                <div id="weather-container">
                    <div id="weather-icon-container">
                        <img id="weather-icon" src="null" alt="cont"></img>
                    </div>

                    <div id="temp-container">
                        <h3 id="temp-text">

                        </h3>
                    </div>
                </div>

                <div className="info-wrapper">
                    <div className="info-icons">
                        <h3>
                            Contatti
                        </h3>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;