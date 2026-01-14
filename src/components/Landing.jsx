import React from "react";

export default function Landing() {
  return (
    <section
      id="mainPage"
      className="mainPage min-vh-100 d-flex align-items-center py-5"
      style={{ backgroundColor: '#020c1b' }} // Updated to Very Dark Navy
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start order-1">
            <h1 data-aos="fade-up" className="fw-bold text-white display-4 display-md-3">
              Hi, I'm <span className="text-primary">Sulaiman Ibrahim Kayarda</span>
            </h1>
            
            <h2 data-aos="fade-up" data-aos-delay="400" className="mt-3 text-light fs-4 fw-normal">
              Software Developer & Tech Editor
            </h2>

            <p data-aos="fade-up" data-aos-delay="500" className="text-secondary mt-3 mx-auto mx-lg-0 fs-5" style={{ maxWidth: '550px', lineHeight: '1.6' }}>
              I build practical digital solutions and create tutorials that make technology easy to understand and apply.
            </p>

            {/* Action Buttons */}
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
                Contact Me
                <i className="bi bi-envelope-fill ms-2"></i>
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="col-lg-6 hero-img order-2 text-center mt-5 mt-lg-0"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="/lom.jpg"
              className="img-fluid shadow-lg rounded-circle border"
              alt="Sulaiman Ibrahim Kayarda"
              style={{ 
                width: '300px', 
                height: '300px', 
                objectFit: 'cover',
                borderWidth: '5px !important',
                borderColor: '#112240 !important' // Lighter navy border for contrast
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}