import Head from "next/head";
import Link from "next/link";

export default function Tutorials() {
  return (
    <>
      <div className="container-fluid text-light px-3">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Tutorial Page</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
          />
          <style>{`
            body {
              font-family: Arial, sans-serif;
              background-color: #437cb6ff;
              margin: 0;
            }

            .card {
              width: 100%;
              margin-bottom: 20px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              border: none;
              border-radius: 10px;
              overflow: hidden;
            }

           .card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 20px rgba(36, 248, 255, 0.2);
}

            .card iframe {
              width: 100%;
              height: 300px;
              border: none;
            }

            .getbtn {
              background-color: #0e2fe9ff;
              color: white;
              padding: 10px;
              text-align: center;
            }

            a {
              text-decoration: none;
            }
          `}</style>
        </Head>

        {/* ✅ Centered content with max-width */}
        <main className="container my-4">
          <h1 className="text-center mb-4">My Tutorial Page</h1>

          {/* ✅ Video Card */}
          <div className="card hover-card mb-4 bg-dark">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Tutorial Video"
              allowFullScreen
            ></iframe>
            <div className="card-body bg-secondary text-center">
              <h5 className="card-title text-light">Lesson 1: Introduction to HTML</h5>
              <p className="card-text text-light">Click below to watch on YouTube.</p>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-danger text-light w-100"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* ✅ Profile Card */}
          <div className="card hover-card mb-4">
             <iframe
              src="https://youtube.be/ZxaA6hW-4eYsi=15uWfqznwaebVjr4"
              title="Tutorial Video"
              allowFullScreen
            ></iframe>
            <div className="card-body bg-secondary text-center">
            <div className="card-body">
              <h4 className="fw-bold my-2 hover-text">lesson 5: cloudsoft </h4>
              <p className="text-muted">click below for Web Development & Designing</p>
           <a
           href="https://youtube.be/ZxaA6hW-4eYsi=15uWfqznwaebVjr4 "
           target="blank"
           rel="noopener noreferre"
           className="btn btn-outline-danger text-light w-100"
           >
            watch on YouTube
           </a>
            </div>
          </div>
</div>

          {/* ✅ Contact & Skills Card */}
          <div className="card">
            <div className="card-body bg-secondary text-center">
              <Link
                href="https://wa.me/2349164675884"
                target="_blank"
                className="btn w-100 rounded-3 fw-bold getbtn my-3 bg-light d-flex align-items-center justify-content-center gap-2"
              >
                <img src="/kkk.webp" alt="WhatsApp" width={64} height={64} />
                Chat on WhatsApp for tutorials
              </Link>
              <p className="text-muted">
                I'm here to help you with any questions you have!
              </p>
              <div> </div>

              {/* Skills Section */}
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-2 bg-dark text-white rounded-3 p-2">
                  <i className="bi bi-window"></i>
                  <h5 className="mb-0">HTML</h5>
                </div>
                <div className="d-flex align-items-center gap-2 bg-dark text-white rounded-3 p-2">
                  <i className="bi bi-window"></i>
                  <h5 className="mb-0">Photoshop</h5>
                </div>
                <div className="d-flex align-items-center gap-2 bg-dark text-white rounded-3 p-2">
                  <i className="bi bi-window"></i>
                  <h5 className="mb-0">JavaScript</h5>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
