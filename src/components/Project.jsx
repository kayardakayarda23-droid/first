"use client";
import React, { useState, useRef, useEffect } from "react";

export default function Project() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const projects = [
    {
      img: "/oop.PNG",
      title: "Booking System",
      desc: "A web-based booking platform using JavaScript and React.",
      tech: ["Booking", "JavaScript", "React", "HTML"],
      details:
        "This project handles real-time booking and user management with a modern UI using React and backend integration.",
    },
    {
      img: "/oop.PNG",
      title: "Student Management",
      desc: "Manage students and courses with a database-backed system.",
      tech: ["MySQL", "Java", "React", "HTML"],
      details:
        "Built using Java and MySQL, it allows CRUD operations for students and dynamic visualization in the frontend.",
    },
    {
      img: "/oop.PNG",
      title: "E-Commerce Site",
      desc: "Responsive e-commerce web app with secure transactions.",
      tech: ["CSS", "JavaScript", "PHP", "HTML"],
      details:
        "Includes user authentication, cart management, and payment integration using PHP and MySQL.",
    },
    {
      img: "/oop.PNG",
      title: "Car Selling Platform",
      desc: "Website for selling cars with dynamic listings and filters.",
      tech: ["Photoshop", "CorelDraw", "PHP", "Car Selling"],
      details:
        "Designed UI in Photoshop/CorelDraw and built backend using PHP for managing car listings.",
    },
    {
      img: "/oop.PNG",
      title: "Filing System",
      desc: "A digital filing system for small businesses.",
      tech: ["MySQL", "Java", "React", "Filing"],
      details:
        "Digitizes file management and search functionality using React for UI and MySQL for data storage.",
    },
    {
      img: "/oop.PNG",
      title: "Design Tools Overview",
      desc: "Showcase of UI/UX design tools and workflows.",
      tech: ["HTML", "Photoshop", "JavaScript"],
      details:
        "Demonstrates how frontend and design tools collaborate for beautiful user experiences.",
    },
  ];

  return (
    <>
      <div className="sectionTitle d-flex flex-row text-light justify-content-center align-items-center my-3">
        <h2>PROJECTS</h2>
      </div>

      <div className="sectionTitle d-flex flex-row text-light justify-content-center align-items-center my-3">
        <h4>Feel Free To Explore Our Projects Below.</h4>
      </div>

      <div className="row justify-content-center align-items-center my-3 text-light">
        {projects.map((proj, index) => {
          const ref = useRef(null);
          const [height, setHeight] = useState(0);

          // Measure height dynamically
          useEffect(() => {
            if (ref.current) {
              setHeight(ref.current.scrollHeight);
            }
          }, [openCard]);

          const isOpen = openCard === index;

          return (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card bg-dark text-light h-100">
                <img src={proj.img} alt={proj.title} className="card-img" />
                <div className="card-body">
                  <h4 className="fw-bold my-2">{proj.title}</h4>
                  <p>{proj.desc}</p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {proj.tech.map((t, i) => (
                      <p
                        key={i}
                        className="bg-danger rounded-4 text-light px-3 py-1"
                      >
                        {t}
                      </p>
                    ))}
                  </div>

                  {/* Toggle Button with Rotating Arrow */}
                  <button
                    className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
                    onClick={() => toggleCard(index)}
                  >
                    {isOpen ? "Hide Details" : "View Details"}
                    <i
                      className={`bi bi-chevron-down arrow-icon ${
                        isOpen ? "rotate" : ""
                      }`}
                    ></i>
                  </button>

                  {/* Animated Details Section */}
                  <div
                    className="slide-wrapper mt-3"
                    style={{
                      maxHeight: isOpen ? `${height}px` : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div ref={ref}>
                      <p className="mb-0">{proj.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .slide-wrapper {
          overflow: hidden;
          transition: all 0.4s ease-in-out;
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .arrow-icon.rotate {
          transform: rotate(180deg);
        }
      `}</style>
    </>
  );
}
