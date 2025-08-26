import "./contact.css";

function Contacts() {
  return (
    <div className="container contact-page">
      <h3 className="phone-contact">Phone: +55 11 91318-3650</h3>

      <h1 className="contact-title"> CONTACT </h1>
      <form
        action="https://formsubmit.co/enriqueaugusto2000@gmail.com"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your e-mail" required />
        <textarea
          name="message"
          placeholder="Your message..."
          required
        ></textarea>

        {/* Anti-spam */}
        <input type="hidden" name="_captcha" value="false" />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Contacts;
