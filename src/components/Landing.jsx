import React from "react";

export default function Landing() {
  return (
    <section
      id="mainPage"
      className="mainPage min-vh-100 d-flex align-items-center bg-dark" // Added bg-dark to ensure white text is visible
    >
      <div className="container">
        <div className="row uper">
          {/* Text Content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center text-start order-2 order-lg-1">
            {/* Added text-white to all name parts */}
            <h1 data-aos="fade-up" className="fw-bold text-white">SULAIMAN</h1>
            <h1 data-aos="fade-up" className="text-white">IBRAHIM</h1>
            <h1 data-aos="fade-up" className="text-white">KAYARDA</h1>

            <h2 data-aos="fade-up" data-aos-delay="400" className="mt-3 text-light">
              Welcome to my tutorial concept, you are highly welcome.
              We provide tech solutions to the best of our ability.
            </h2>
            
            {/* Removed: What is the purpose of your visit? */}

            {/* Action Buttons */}
            <div data-aos="fade-up" data-aos-delay="600" className="d-flex gap-3 mt-4">
              <a
                href="/project"
                className="btn btn-primary btn-get-started d-inline-flex align-items-center px-4 py-2"
              >
                Get Started 
                <i className="bi bi-arrow-right ms-2"></i>
              </a>
              
              <a
                href="/contact"
                className="btn btn-outline-light btn-get-started d-inline-flex align-items-center px-4 py-2"
              >
                Get in Touch
                <i className="bi bi-person-lines-fill ms-2"></i>
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="col-lg-6 hero-img order-lg-2 order-1 text-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <h4 className="d-lg-none img-head text-white">Stainless CEO</h4>
            <img
              src="/lom.jpg"
              className="img-fluid shadow-lg rounded border border-secondary"
              alt="Sulaiman Ibrahim Kayarda"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}