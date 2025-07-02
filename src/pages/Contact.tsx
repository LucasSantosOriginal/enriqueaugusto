import "./contact.css";

function Contacts() {
  return (
    <div className="container contact-page">
      <h1 className="contact-title">Entre em contato</h1>
      <form
        action="https://formsubmit.co/enriqueaugusto2000@gmail.com"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <textarea name="message" placeholder="Sua mensagem" required></textarea>

        {/* Anti-spam */}
        <input type="hidden" name="_captcha" value="false" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacts;
