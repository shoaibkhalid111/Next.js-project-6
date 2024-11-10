import React from 'react'
import Image from 'next/image'

const projects = () => {
  return (
    <>
      <section className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3><b>Projects</b></h3>
            </div>

            <div className="card-parent">

              <div className="card">
                <Image src="/project-1.png" width={245} height={180} alt="work-1"></Image>

                <div className="card-content">
                  <h2>Currency-Converter</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>HTML,CSS,Typescript</p>

                  </div>
                  <p>A simple HTML and Typescript powered tool for converting currency with real-time rates.<br />
                    here is github repository link:"https://github.com/shoaibkhalid111/Currency-Converter.git"</p>

                </div>
              </div>

              <div className="card">
                <Image src="/project-2.png" width={245} height={180} alt="work-1"></Image>

                <div className="card-content">
                  <h2>Simple-Calculator</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>HTML,CSS,Typescript</p>

                  </div>
                  <p>A basic HTML and Typescript calculator for performing basic airthmetic operations.<br />
                    here is github repository link:"https://github.com/shoaibkhalid111/Simple-Calculator.git"</p>

                </div>
              </div>

              <div className="card">
                <Image src="/project-3.png" width={245} height={180} alt="work-1"></Image>

                <div className="card-content">
                  <h2>Command Line-Calculator</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>Command-line Typescript</p>

                  </div>
                  <p>A basic Typescript Command-Line calculator offering essential airthmetic operations.<br />
                    here is github repository link:"https://github.com/shoaibkhalid111/Simple-CLI-Calculator.git"</p>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default projects
