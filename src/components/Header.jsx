export default function Header () {

    const headerNav = [
        {
            url: "#",
            link: "CHARACTERS",
            isActive: false
        },
         {
            url: "#",
            link: "COMICS",
            isActive: true
        },
         {
            url: "#",
            link: "MOVIES",
            isActive: false
        },
         {
            url: "#",
            link: "TV",
            isActive: false
        },
         {
            url: "#",
            link: "GAMES",
            isActive: false
        },
         {
            url: "#",
            link: "COLLECTIBLES",
            isActive: false
        },
         {
            url: "#",
            link: "VIDEOS",
            isActive: false
        },
         {
            url: "#",
            link: "FANS",
            isActive: false
        },
         {
            url: "#",
            link: "NEWS",
            isActive: false
        },
         {
            url: "#",
            link: "SHOP",
            isActive: false
        },
    ];

    return <header className="text-center ">    
             <div className="header-wrapper container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="/dc-logo.png" title="DC Comics logo" alt="DC Logo" />
                </div>
                    <ul className="d-flex gap-4 p-0 m-0">
                        {headerNav.map((navItem, index) => (<li key={index} className={(navItem.isActive) ? "active" : ""} ><a href={navItem.url}></a>{navItem.link}</li>))}
                    </ul>
             </div>
           </header>
}