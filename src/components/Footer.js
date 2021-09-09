import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <aside className="copyright">
          &copy;Remote Rate
        </aside>
        <section className="contact">
            Contact Us
        </section>
      </footer>
    )
  }
}

export default Footer;
