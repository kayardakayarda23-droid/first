import React from 'react';

export default function AboutUs() {
  return (
    // Removed the inline background color so it inherits the "Very Dark Navy" from the body
    <section id="about" className="py-5 px-3">
      <div className="container">
        <div className="sectionTitle d-flex flex-row text-light mb-4">
          <h3 className="text-primary me-2">|</h3>
          <h4 className="fw-bold">About Us</h4>
        </div>
        
        <div className="row justify-content-center align-items-center text-light">
          <div className="col-lg-7 mt-4">
            <p className="lead text-primary fw-semibold">
              Welcome to my tutorial platform, where learning technology is simple, practical, and beginner-friendly.
            </p> 
            <p>
              My name is <strong>Ibrahim Sulaiman Kayarda</strong>, a Software Developer and Computer Science 
              student with over 2 years of experience in web development. I have worked on several 
              projects and enjoy building real-world digital solutions. 
            </p>
            <p>
              I am passionate about teaching and sharing knowledge, especially helping beginners 
              understand technology step by step without confusion. 
            </p>
            <p>
              On this platform, I teach how to build modern websites and applications from scratch using: 
            </p>

            {/* Skill Cards Grid */}
            <div className="row g-3 mt-2">
              {[
                "HTML & CSS", "JavaScript", "Bootstrap", 
                "MongoDB", "MySQL", "Modern Web Tools"
              ].map((skill, index) => (
                <div className="col-md-6 col-sm-12" key={index}>
                  {/* We keep this slightly lighter navy so the cards are visible */}
                  <div className="d-flex align-items-center p-2 border border-secondary rounded shadow-sm" style={{ backgroundColor: '#112240' }}>
                    <i className="bi bi-check-circle-fill text-primary me-3"></i>
                    <h6 className="mb-0 text-white-50">{skill}</h6>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 border-start border-primary ps-3 italic text-info">
              My goal is to help you gain practical skills you can confidently use for projects, 
              freelancing, or future careers in tech.
            </p>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="position-relative d-inline-block">
              <img 
                src="/abdull.jpg" 
                alt="Sulaiman Ibrahim Kayarda" 
                className="img-fluid rounded-4 shadow-lg border border-secondary" 
                style={{ maxWidth: '350px', objectFit: 'cover' }}
              />
              <div className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary p-2">
                Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}