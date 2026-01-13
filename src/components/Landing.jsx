import React from "react";

export default function Landing() {
  return (
    <section
      id="mainPage"
      className="mainPage min-vh-100 d-flex align-items-center bg-dark py-5" 
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          {/* order-1 on mobile ensures your name stays at the top */}
          <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start order-1 order-lg-1">
            <h1 data-aos="fade-up" className="fw-bold text-white display-4">SULAIMAN</h1>
            <h1 data-aos="fade-up" className="text-white display-4">IBRAHIM</h1>
            <h1 data-aos="fade-up" className="text-white display-4">KAYARDA</h1>

            <h2 data-aos="fade-up" data-aos-delay="400" className="mt-3 text-light fs-5">
              Welcome to my tutorial concept, you are highly welcome.
              We provide tech solutions to the best of our ability.
            </h2>

            {/* Action Buttons - Centered on mobile, left-aligned on desktop */}
            <div data-aos="fade-up" data-aos-delay="600" className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
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
          {/* order-2 on mobile puts image below the name */}
          <div
            className="col-lg-6 hero-img order-2 order-lg-2 text-center mt-5 mt-lg-0"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            {/* "Stainless CEO" <h4> has been removed from here */}
            <img
              src="/lom.jpg"
              className="img-fluid shadow-lg rounded border border-secondary"
              alt="Sulaiman Ibrahim Kayarda"
              style={{ maxHeight: '400px', width: 'auto', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}