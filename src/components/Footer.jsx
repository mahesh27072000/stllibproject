import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="logo">WebLib</div>
                <ul>
                    <li>Search</li>
                    <li>Cart</li>
                </ul>
                <div className="copyright">&c 2023</div>
            </div>
        </footer>
    );
};

export default Footer;
