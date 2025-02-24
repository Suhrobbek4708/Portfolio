import "./Contact.css";
const Contact = () => (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container bd-grid">
        <div className="contact-info">
          <h3 className="contact-subtitle">EMAIL</h3>
          <span className="contact-text">suhrobbek0limjonov017@gmail.com</span>
          <h3 className="contact-subtitle">PHONE</h3>
          <span className="contact-text">+998 97 888 47 08</span>
          <h3 className="contact-subtitle">ADDRESS</h3>
          <span className="contact-text">Uzbekistan, Namangan, Norin</span>
        </div>
        <form className="contact-form">
          <div className="contact-inputs">
            <input type="text" placeholder="Name" className="contact-input" />
            <input type="email" placeholder="Email" className="contact-input" />
          </div>
          <textarea cols="0" rows="10" placeholder="Message..." className="contact-input"></textarea>
          <input type="submit" value="Send" className="contact-button" />
        </form>
      </div>
    </section>
  );
  
  export default Contact;