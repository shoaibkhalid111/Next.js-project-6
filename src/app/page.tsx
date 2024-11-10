import React from "react";
import Image from "next/image";
import { Heebo } from "next/font/google";
import Card from "./components/recent-post-card";

const heebo = Heebo({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <section className={`${heebo.className} hero-section`}> {/* Apply Heebo font here */}
        <div className="container">

          <div className="main">

            <div className="text-container">
              <h1><b>Hi, I'am Shoaib</b></h1>
              <p>
              I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 and Metaverse. I am also a student at ICMA, learning Cost and Management Accountancy. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
              </p>
              <button>Download resume</button>
            </div>


            <div>
              <Image src="/profile-pic-canva.png" width={400} height={400} alt="person"></Image>
            </div>

          </div>

        </div>
      </section>

      <section className="recent-post">
        <div className="container">

          <div className="main">

            <div className="heading">
              <h3><b>Recent Post</b></h3>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="card-parent">

              <Card />
              <Card />
            </div>

          </div>

        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3><b>Featured Works</b></h3>
            </div>

            <div className="card-parent">

              <div className="card">
                <Image src="/project-4.png" width={245} height={180} alt="work-1"></Image>

                <div className="card-content">
                  <h2>Static-Interactive-Resume</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>HTML,CSS,Typescript</p>

                  </div>
                  <p>A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.<br />
                    here is github repository link:"https://github.com/shoaibkhalid111/Hackathone-Milestone.git"</p>

                </div>
              </div>

              <div className="card">
                <Image src="/project-5.png" width={245} height={180} alt="work-1"></Image>

                <div className="card-content">
                  <h2>Shareable-Resume</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>HTML,CSS,Typescript</p>

                  </div>
                  <p>A Typescript-based shareable resume built with HTML and CSS, allowing users to share and download the resume giving a shareable link.<br />
                  here is github repository link:"https://github.com/shoaibkhalid111/Hackathone-Milestone.git"</p>

                </div>
              </div>

              <div className="card">
                <Image src="/project-6.png" width={245} height={180} alt="work-1"></Image>

                <div className="card-content">
                  <h2>Editable-Resume</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>HTML,CSS,Typescript</p>

                  </div>
                  <p>A Typescript-based editable resume built with HTML and CSS, allowing users to edit the resume after generating.<br />
                  here is github repository link:"https://github.com/shoaibkhalid111/Hackathone-Milestone.git"</p>

                </div>
              </div>

            </div>



          </div>
        </div>
      </section>
    </>
  );
}
