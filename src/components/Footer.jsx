import Cta from "./Cta"

export default function Footer () {

    const footerNav = [
  {
    title: "DC COMICS",
    links: [
      { url: "#", link: "Characters" },
      { url: "#", link: "Comics" },
      { url: "#", link: "Movies" },
      { url: "#", link: "TV" },
      { url: "#", link: "Games" },
      { url: "#", link: "Videos" },
      { url: "#", link: "News" }
    ]
  },
  {
      title: "DC",
      links: [
          { url: "#", link: "Terms of Use" },
          { url: "#", link: "Privacy Policy(New)" },
          { url: "#", link: "Ad Choices" },
          { url: "#", link: "Advertising" },
          { url: "#", link: "Jobs" },
          { url: "#", link: "Subscriptions" },
          { url: "#", link: "Talent Workshops" },
          { url: "#", link: "CPSC Certificates" },
          { url: "#", link: "Ratings" },
          { url: "#", link: "Shop Help" },
          { url: "#", link: "Contact Us" }
        ]
    },
    {
      title: "SITES",
      links: [
        { url: "#", link: "DC" },
        { url: "#", link: "MAD Magazine" },
        { url: "#", link: "DC Kids" },
        { url: "#", link: "DC Universe" },
        { url: "#", link: "DC Power Visa" }
      ]
    },
    {
      title: "SHOP",
      links: [
        { url: "#", link: "Shop DC" },
        { url: "#", link: "Shop DC Collectibles" }
      ]
    }
];

    return <footer>
            <div className="call-to-action">
            <Cta>
            </Cta>
            </div>
            <div className="footer-navbar">
                <div className="container d-flex justify-content-between py-5">
                    <div className="footer-navbar-menù d-flex gap-5 text-white">
                        <div className="row row-cols-3">
                            {footerNav.map((footerNav, index) => 
                                <div key={index} className="col text">
                                    <h4>{footerNav.title}</h4>
                                    <ul className="p-0">
                                        {footerNav.links.map((singleLink, index) => 
                                        <li key={index}><a href={singleLink.url}>{singleLink.link}</a></li>
                                        )}
                                    </ul>
                                </div>
                            )}
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