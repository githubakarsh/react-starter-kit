import './topnavbar.scss';

const TopNavbar = () => {
    return <header className="header-main">
        <div className="topnavbar-logo">
            <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Logo" height="60" width="60"/>
        </div> 
        <div className="topnavbar-title">Title</div>
        <nav class="nav-main">
            <ul className="nav-list">
                <li><a href="/" >Home</a></li>
                <li ><a href="/contactus">Contact US</a></li>
                <li ><a href="/aboutus">About Us</a></li>
                <li><a href="/unknown">Unknown page</a></li>
            </ul>
        </nav>
    </header>
}

export default TopNavbar;