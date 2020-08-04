import React from 'react';
import SmartCard from 'react-smart-card';

function Author() {

  return(
    <>
    <div className="container d-flex flex-column flex-md-row p-3 px-md-4 mt-md-5 mb-md-5">
    <div className="col-md-6">
      <h1 className="title text-light">Hey, I’m Ravi.</h1>
      <p className="lead my-3 text-light">Software Engineer<br /> Experienced in developing full-stack web applications.</p>
    </div>
    <div className="col-md-6">
    <div className="image-container">
      <img loading="lazy" src="./RaviTejaKolla.png" className="rounded-circle" alt="Ravi Teja Kolla" />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="col-md-6">
    <h3 className="title text-light">My Projects</h3>
    </div>
  </div>
  <div className="container d-flex flex-column flex-md-row p-3 px-md-4 mt-md-3  mb-md-5">
    <div className="col-md-4 mb-sm-4">
      <SmartCard title="React Smart Card NPM Package" des="This is a multi variant UI card Component"
                 btnText="Know More" btnUrl="https://www.npmjs.com/package/react-smart-card" imgSrc="./overlay1.PNG" />
    </div>
    <div className="col-md-4 mb-sm-4">
      <SmartCard title="Hindustan Daily Media & Classifieds" des="A web based news portal & blog"
       btnText="Know More" btnUrl="https://hindustandaily.com" imgSrc="./hdmedia.PNG" />
    </div>
    <div className="col-md-4">
      <SmartCard title="Email Subscription Component" des="Backend logic for email subscription component "
       btnText="Github" btnUrl="https://ravi-kolla.github.io/portfolio-backend/" imgSrc="./email-backend.PNG" />
    </div>
  </div>
  <div className="container">
    <div className="col-md-6">
      <h3 className="title text-light">Articles</h3>
    </div>
  </div>
  <div className="container d-flex flex-column flex-md-row p-3 px-md-4 mt-md-3">
    <div className="col-md-6 col-lg-4 mb-sm-4">
      <SmartCard title="Git Cherry-Pick" des="Step by step process on git cherry-pick"
                 btnText="Read more on Medium" btnUrl="https://medium.com/@ravitejakolla/git-cherry-pick-df844d8c6249" imgSrc="./article1.jpeg" />
    </div>
    <div className="col-md-6 col-lg-4 mb-sm-4">
      <SmartCard title="Detect IE10 & below" des="A 2 min read on how to detect IE 10 & below browsers and support by creating customized view"
       btnText="Read more on Medium" btnUrl="https://medium.com/@ravitejakolla/detect-ie10-below-631ed1e9cd67" imgSrc="./article2.png" />
    </div>
  </div>
  <div className="container d-flex flex-column flex-md-row p-3 px-md-4 mt-md-3">
      <div className="col-md-4">
        <SmartCard title="My Work!" linkText="Resume" linkUrl="/resume"/>
      </div>
    </div>

  </>
  )
}

export default Author;
