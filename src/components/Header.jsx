export default function Header () {
    return <header className="container text-center py-3">    
             <div className="header-wrapper d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="/dc-logo.png" title="DC Comics logo" alt="DC Logo" />
                </div>
                <div className="header-navbar">
                    <ul className="d-flex gap-3 p-0 m-0">
                        <li>CHARACTERS</li>
                        <li>COMICS</li>
                        <li>MOVIES</li>
                        <li>TV</li>
                        <li>GAMES</li>
                        <li>COLLECTIBLES</li>
                        <li>VIDEOS</li>
                        <li>FANS</li>
                        <li>NEWS</li>
                        <li>SHOP</li>
                    </ul>
                </div>
             </div>
           </header>
}