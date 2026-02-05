export default function Cta () {

const ctaLinks = [
  {
    url: "#",
    link: "DIGITAL COMICS",
    img: "./src/assets/img/buy-comics-digital-comics.png",
    imgDescription: "Buy Digital Comics icon"
  },
    {
    url: "#",
    link: "DIGITAL COMICS",
    img: "./src/assets/img/buy-comics-merchandise.png",
    imgDescription: "Buy Digital Comics icon"
  },
    {
    url: "#",
    link: "DIGITAL COMICS",
    img: "./src/assets/img/buy-comics-subscriptions.png",
    imgDescription: "Buy Digital Comics icon"
  },
    {
    url: "#",
    link: "DIGITAL COMICS",
    img: "./src/assets/img/buy-comics-shop-locator.png",
    imgDescription: "Buy Digital Comics icon"
  },
    {
    url: "#",
    link: "DIGITAL COMICS",
    img: "./src/assets/img/buy-dc-power-visa.svg",
    imgDescription: "Buy Digital Comics icon"
  }
]; 

    return <div className="container py-5">
              <ul className="cta-navbar d-flex justify-content-between p-0 m-0">
                {ctaLinks.map((ctaLinks,index) => 
                <li key={index}><a href={ctaLinks.url}><img src={ctaLinks.img} alt={ctaLinks.imgDescription} /><span className="ps-3">{ctaLinks.link}</span></a></li>
              )}
                </ul>
           </div>
}