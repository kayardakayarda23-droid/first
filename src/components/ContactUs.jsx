"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="row justify-content-center align-items-center text-light mt-5">
        {/* Call Section */}
        <div className="col-12 col-lg-4 mb-4">
          <div className="card bg-secondary h-100 shadow">
            <div className="card-body text-center">
              <a href="tel:+2347010598129">
                <Image
                  src="/lp.jpeg" 
                  alt="Call Sulaiman"
                  width={100}
                  height={100}
                  className="mb-3 rounded-circle border border-3 border-primary"
                />
              </a>
              <a href="tel:+2347010598129" className="btn w-100 rounded-3 bg-primary text-white fw-bold">
                Call Me
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Section */}
        <div className="col-12 col-lg-4 mb-4">
          <div className="card bg-secondary h-100 shadow">
            <div className="card-body text-center">
              <a href="https://wa.me/2347010598129" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/kkk.webp"
                  alt="Chat on WhatsApp"
                  width={100}
                  height={100}
                  className="mb-3 rounded-circle border border-3 border-success"
                />
              </a>
              <a href="https://wa.me/2347010598129" target="_blank" rel="noopener noreferrer" className="btn w-100 rounded-3 bg-success text-white fw-bold">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        
        <div className="col-12 col-lg-4 mb-4">
          <div className="card bg-secondary h-100 shadow">
            <div className="card-body text-center">
              <a href="mailto:sulaimankayarda56@gmail.com">
                <Image
                  src="/R.png"
                  alt="Email Me"
                  width={100}
                  height={100}
                  className="mb-3 rounded-circle border border-3 border-warning"
                />
              </a>
              <a href="mailto:sulaimankayarda56@gmail.com" className="btn w-100 rounded-3 bg-warning text-dark fw-bold">
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          {/* Left: Illustration */}
          <div className="col-lg-6 text-center mb-4">
            <img src="/lom.jpg" alt="Contact illustration" className="img-fluid rounded shadow-lg" />
          </div>

          {/* Right: Form */}
          <div className="col-lg-6">
            <div className="card bg-dark text-light p-4 shadow-lg border-primary">
              <h2 className="text-center text-primary mb-4">Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 fw-bold" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <Link href="/intouch" className="btn w-100 btn-outline-light mt-3">View Contact Details</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;