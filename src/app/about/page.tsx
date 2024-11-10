import React from "react"

const about = () => {
  return (
    <>
      <div id='about'>
        <h2>
          About Me
        </h2>
        <p>
          I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 and Metaverse. I am also a student at ICMA, learning Cost and Management Accountancy. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
        </p>
        <div className='grid'>
          <img src="/IT Class.png" width={500} height={300} alt="IT Class" />
          <img src="/ICMA-pic.png" width={350} height={300} alt="ICMA" />
        </div>
      </div>
    </>
  )
}

export default about;
