export function ContactForm() {
  return (
    <section id="contact">
      <h2>Send Message</h2>
      <form action="mailto:venkybsmart@gmail.com" method="post" encType="text/plain">
        <label>Name<input name="name" type="text" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Message<textarea name="message" required /></label>
        <button type="submit">Send message</button>
      </form>
    </section>
  );
}
