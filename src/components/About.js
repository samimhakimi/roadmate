export default function About() {
    return (
        <div style={{marginTop: 20, marginBottom: 20}}>
      <div style={{ 
        textAlign: "center", 
        padding: "40px", 
        backgroundColor: "#f4f4f4", 
        borderRadius: "10px", 
        maxWidth: "800px", 
        margin: "auto", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" 
      }}>
        <h1 style={{ color: "#2c3e50" }}>About Roadmate</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555" }}>
          Welcome to <strong>Roadmate</strong>, your trusted roadside assistance provider.
          We are dedicated to helping drivers in need with quick and reliable services.
          Whether you're dealing with a flat tire, a dead battery, or need recovery services,
          we are here to assist you 24/7.
        </p>
        <h2 style={{ color: "#2c3e50", marginTop: "20px" }}>Our Services</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "16px", color: "#444" }}>
          <li style={{ marginBottom: "10px" }}><strong>🚗 Emergency Tyre Repair:</strong> Fast and efficient tyre repair service to get you back on the road.</li>
          <li style={{ marginBottom: "10px" }}><strong>🔋 Jump Start:</strong> Quick battery jump-start assistance to bring your vehicle back to life.</li>
          <li style={{ marginBottom: "10px" }}><strong>🛞 Wheel Change:</strong> Professional wheel replacement to ensure your safety on the road.</li>
          <li style={{ marginBottom: "10px" }}><strong>🏗 Recovery:</strong> Reliable vehicle recovery services for breakdowns and emergencies.</li>
        </ul>
        <h2 style={{ color: "#2c3e50", marginTop: "20px" }}>Why Choose Roadmate?</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555" }}>
          At Roadmate, we prioritize customer satisfaction and safety. Our team of experts
          is always ready to provide professional and timely assistance whenever you need it.
          With years of experience in the industry, we ensure fast response times and excellent service quality.
        </p>
        <p style={{ fontWeight: "bold", color: "#2c3e50", marginTop: "20px" }}>
          Stay safe on the road with Roadmate!
        </p>
      </div>
      </div>
    );
  }
  