function Footer({ email, telefono }) {
    return (
        <footer id="foot">
            <div id="contatti">
                <h4>
                    Contatti:
                </h4>
                <ul>
                    <li>
                        <p>
                            e-mail: <a className={".foot-link"} href={`mailto:${email}`}>{email}</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            telefono: <a className={".foot-link"} href={`tel:+39 ${telefono}`}>+39 {telefono}</a>
                        </p>
                    </li>
                </ul>
            </div>

            <div>
                <a className={".foot-link"} rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons-lisens"
                    style={{ borderWidth: "0" }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Dette verk er
                    lisensieret under en <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons
                    Navngivelse 4.0 Internasjonal lisens</a>
            </div>
        </footer>
    )
}

export default Footer;