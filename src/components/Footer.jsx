import Cta from "./Cta"

export default function Footer () {
    return <footer>
            <div className="call-to-action">
            <Cta>
            </Cta>
            </div>
            <div className="footer-navbar">
                <div className="container d-flex justify-content-between py-5">
                    <div className="footer-navbar-menù d-flex gap-5 text-white">
                        <div>
                        <h4 className="mb-3">DC COMICS</h4>
                        <ul className="p-0">
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                        <h4 className="mb-3">SHOP</h4>
                        <ul className="p-0">
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                        </div>
                        <div>
                        <h4 className="mb-3">DC</h4>
                        <ul className="p-0">
                            <li>Terms of Use</li>
                            <li>Privacy Policy(New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                        </div>
                        <div>
                        <h4 className="mb-3">SITES</h4>
                        <ul className="p-0">
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                        </div>
                    </div>
                    <div className="big-footer-logo">
                        <img src="src\assets\img\dc-logo-bg.png" title="DC Comics Big Logo" alt="DC Logo" />
                    </div>
                </div>
            </div>
            <div className="footer-social py-5">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <a href="#" className="fw-bolder p-3">SIGN-UP NOW!</a>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <h3 className="m-0">FOLLOW US</h3>
                        <img src="src\assets\img\footer-facebook.png" title="Facebook logo" alt="" />
                        <img src="src\assets\img\footer-twitter.png" title="Twitter logo" alt="Twitter logo" />
                        <img src="src\assets\img\footer-youtube.png" title="YouTube logo" alt="YouTube logo" />
                        <img src="src\assets\img\footer-pinterest.png" title="Pinterest logo" alt="Pinterest logo" />
                        <img src="src\assets\img\footer-periscope.png" title="Periscope logo" alt="Periscope logo" />
                    </div>
                </div>
            </div>
           </footer>
}