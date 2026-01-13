import React from 'react';

export default function AboutUs() {
  return (
    <>
      <div className="sectionTitle d-flex flex-row text-light">
        <h3></h3>
        <h4>About Us</h4>
      </div>
      
      <div className="row justify-content-center align-items-center text-light">
        <div className="col-lg-8 mt-4">
          <p>Welcome to my tutorial concept, you are highly welcome.</p> 
          <p>I am Sulaiman Ibrahim Kayarda, a web developer and a student of computer science.</p>
          <p>
            I have been in the field of web development for over 2 years now and I have worked on several projects. 
            I have a passion for teaching and I want to share my knowledge with you.
          </p>
          <p>
            I will be teaching you how to build a website from scratch using HTML, CSS, JavaScript, 
            Bootstrap, MongoDB, MySQL and more.
          </p>

          {/* Corrected the inline style and structure below */}
          <div className="card bg-dark p-3"> 
            <div className="d-flex flex-row gap-4 mb-2">
              <i className="bi bi-window"></i>
              <h5> JAMB REG. </h5>
            </div>
            <div className="d-flex flex-row gap-4 mb-2">
              <i className="bi bi-window"></i>
              <h5> WAEC REG. </h5>
            </div>
            <div className="d-flex flex-row gap-4 mb-2">
              <i className="bi bi-window"></i>
              <h5> BOOTSTRAP</h5>
            </div>
            <div className="d-flex flex-row gap-4 mb-2">
              <i className="bi bi-window"></i>
              <h5> MongoDB </h5>
            </div>
            <div className="d-flex flex-row gap-4 mb-2">
              <i className="bi bi-window"></i>
              <h5> MySQL</h5>
            </div>
            <div className="d-flex flex-row gap-4">
              <i className="bi bi-window"></i>
              <h5> JavaScript</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-4 text-center">
          <img src="/abdull.jpg" alt="Sulaiman Ibrahim Kayarda" className="img-fluid rounded shadow" />
        </div>
      </div>
    </>
  );
}