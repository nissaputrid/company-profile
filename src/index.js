// Import necessary modules
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"; // Add a CSS file for styling

// Header Component
function Header() {
  return (
    <header className="header">
      <h1 className="logo">Company X</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// About Section Component
function About() {
  return (
    <section id="about" className="section">
      <h2>About Us</h2>
      <p>Lorem ipsum.</p>
    </section>
  );
}

// Services Section Component
function Services() {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </section>
  );
}

// Contact Section Component
function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <p>Email: info@company.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 127, N City</p>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

// Render App to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
