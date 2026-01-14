"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  
  // Reference to the collapsible div
  const navCollapseRef = useRef(null);

  const royalBlue = "#4169e1";
  const lightGray = "#ccd6f6";

  // Robust function to hide the menu on click
  const closeNavbar = () => {
    // Check if we are in the browser and if the menu is actually open (has 'show' class)
    if (navCollapseRef.current && navCollapseRef.current.classList.contains("show")) {
      if (window.bootstrap) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(navCollapseRef.current) || 
                           new window.bootstrap.Collapse(navCollapseRef.current);
        bsCollapse.hide();
      }
    }
  };

  return (
    <>
      <style jsx>{`
        .custom-nav-link {
          color: ${lightGray} !important;
          transition: color 0.3s ease;
        }
        .custom-nav-link:hover, 
        .custom-nav-link.active-link {
          color: ${royalBlue} !important;
        }
      `}</style>

      <nav 
        className="navbar navbar-expand-md navbar-dark shadow-sm py-2 sticky-top" 
        style={{ backgroundColor: '#020c1b', borderBottom: '1px solid #112240' }}
      >
        <div className="container">
          <div className="d-flex align-items-center">
            <img
              src="/lol.png"
              className="rounded-2 me-2"
              width={45}
              height={35}
              alt="Logo"
            />
            <Link href="/" className="navbar-brand fw-bolder text-uppercase" style={{ color: royalBlue }}>
              KYD ENT
            </Link>
          </div>

          <button
            className="navbar-toggler shadow-none border-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div 
            className="collapse navbar-collapse justify-content-end align-center" 
            id="main-nav"
            ref={navCollapseRef}
          >
            <ul className="navbar-nav">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Tutorials", path: "/tutorials" },
                { name: "Project", path: "/project" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li className="nav-item" key={link.path}>
                  <Link 
                    href={link.path} 
                    className={`nav-link fw-bold custom-nav-link ${isActive(link.path) ? "active-link" : ""}`}
                    onClick={closeNavbar}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}