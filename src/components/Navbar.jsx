"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  // Define colors for easy maintenance
  const royalBlue = "#4169e1";
  const lightGray = "#ccd6f6";

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
          {/* Brand Logo & Name */}
          <div className="d-flex align-items-center">
            <img
              src="/lol.png"
              className="rounded-2 me-2"
              width={45}
              height={35}
              alt="Bako's Logo"
            />
            <Link href="/" className="navbar-brand fw-bolder text-uppercase" style={{ color: royalBlue }}>
              KYD ENT
            </Link>
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler shadow-none border-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
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