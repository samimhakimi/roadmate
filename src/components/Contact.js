export default function Contact() {
    return (
        <div style={{marginTop: 20, marginBottom: 20}}>
      <div style={{ 
        textAlign: "center", 
        padding: "40px", 
        backgroundColor: "#f9f9f9", 
        borderRadius: "10px", 
        maxWidth: "800px", 
        margin: "auto", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" 
      }}>
        <h1 style={{ color: "#2c3e50" }}>Contact Roadmate</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>We are here to assist you 24/7. Feel free to reach out to us!</p>
        
        <h2 style={{ color: "#2c3e50", marginTop: "20px" }}>Contact Form</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "500px", margin: "auto" }}>
          <input type="text" placeholder="Your Name" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} required />
          <input type="email" placeholder="Your Email" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} required />
          <textarea placeholder="Your Message" rows="4" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} required></textarea>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Send Message</button>
        </form>
        
        <h2 style={{ color: "#2c3e50", marginTop: "30px" }}>Find Us</h2>
        <p style={{ fontSize: "16px", color: "#555" }}>We are located at:</p>
        <p style={{ fontWeight: "bold", color: "#333" }}>Brighton, UK</p>
        <p style={{ fontSize: "16px", color: "#555" }}>Call us: <strong>+123 456 7890</strong></p>
        <p style={{ fontSize: "16px", color: "#555" }}>Email: <strong>support@roadmate.com</strong></p>
        
        <div style={{ marginTop: "20px", width: "100%", height: "300px", borderRadius: "10px", overflow: "hidden" }}>
          <iframe 
            title="Google Maps" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: "0" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25367.573299020623!2d-0.15430594671982786!3d50.826644685942604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2suk!4v1743416603506!5m2!1sen!2suk" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
      </div>
    );
  }
  