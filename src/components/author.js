import React from 'react';
import SmartCard from 'react-smart-card';

function Author() {

  return(
    <>
    <div className="container d-flex flex-column flex-md-row p-3 px-md-4 mt-md-5">
    <div className="col-md-6">
      <h1 className="title text-light">Hey, I’m Ravi.</h1>
      <p className="lead my-3 text-light">Software Engineer (Web developer), experienced in creating full-stack web applications.</p>
    </div>
    <div className="col-md-6">
    <div className="image-container">
      <img src="./RaviTejaKolla.png" className="rounded-circle" alt="Cinque Terre" />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="col-md-6">
    <h3 className="title text-light">My Projects</h3>
    </div>
  </div>
  <div className="container d-flex flex-column flex-md-row p-3 px-md-4 mt-md-5">
    <div className="col-md-4">
      <SmartCard title="React Smart Card NPM Package" des="This is a multi variant UI card Component"
                 btnText="Know More" btnUrl="https://www.npmjs.com/package/react-smart-card" imgSrc="./overlay1.PNG" />
    </div>
    <div className="col-md-4">
      <SmartCard title="Hindustan Daily Media & Classifieds" des="A web based news portal & blog"
       btnText="Know More" btnUrl="https://hindustandaily.com" imgSrc="./hdmedia.PNG" />
    </div>
    <div className="col-md-4">
      <SmartCard title="My Work!" linkText="Resume" linkUrl="/resume"/>
    </div>
  </div>

  </>
  )
}

export default Author;
