import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    // Changed bg-white to bg-dark and added navbar-dark
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm py-1">
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
          <Link href="/" className="navbar-brand fw-bolder text-uppercase">
            KYD ENT
          </Link>
        </div>

        {/* Mobile Toggler */}
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

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link fw-bold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link fw-bold">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tutorials" className="nav-link fw-bold">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/project" className="nav-link fw-bold">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link fw-bold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}