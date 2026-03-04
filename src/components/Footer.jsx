function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <h3>Phindi's Nail Bar</h3>
  
          <p>📍 281 3rd Road, Midrand, Johannesburg</p>
          <p>📞 081 523 9780</p>
          <p>📧 ktn940317@gmail.com</p>
  
          <p className="copyright">
            © {new Date().getFullYear()} Phindi's Nail Bar. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;