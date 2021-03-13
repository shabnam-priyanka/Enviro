import Link from 'next/link';

const Navbar = () => (
    <div className="navbar-bg">
        <nav style={{ backgroundColor: "blue" }} className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
                <img src="/Logo.png" alt="" className="logo img-fluid" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/AboutUs">
                            <a className="nav-link">About Us</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/ourServices">
                            <a className="nav-link">Our Services</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/bookOnline">
                            <a className="nav-link">Book Online</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/contactUs">
                            <a className="nav-link">Contact Us</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        {/* <span className="navNumber">613-861-1566 </span> */}
    </div>
);
export default Navbar;
