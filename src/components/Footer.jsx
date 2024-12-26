function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="../assets/logo-footer.svg" alt="Логотип Bella Pizza" className="footer-logo-image" />
                    <span className="footer-brand-name">Bella Pizza</span>
                </div>
                <h3 className="newsletter-title">Подпишитесь на рассылку новостей</h3>
                <form className="newsletter-form">
                    <div className="newsletter-input">
                        <img src="../assets/letter.svg" alt="" className="newsletter-icon" />
                        <input type="email" id="email-input" placeholder="email" />
                    </div>
                    <button type="submit" className="newsletter-submit">Подписаться</button>
                </form>
                <div className="footer-bottom">
                    <div className="footer-links">
                        <span className="footer-copyright">© 2024 Brand, Inc.</span>
                        <span className="footer-separator">•</span>
                        <a href="#" className="footer-link">Privacy</a>
                        <span className="footer-separator">•</span>
                        <a href="#" className="footer-link">Terms</a>
                        <span className="footer-separator">•</span>
                        <a href="#" className="footer-link">Sitemap</a>
                    </div>
                    <div className="social-icons">
                        <a href="#" aria-label="Twitter">
                            <img src="../assets/twitter.svg" alt="" className="social-icon" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <img src="../assets/facebook.svg" alt="" className="social-icon" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <img src="../assets/linkedin.svg" alt="" className="social-icon" />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <img src="../assets/youtube.svg" alt="" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
