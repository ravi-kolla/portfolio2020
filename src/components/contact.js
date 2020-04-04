import React from 'react';

function Contact() {
  return (
    <div className="container text-center">
      <div className="jumbotron jumbotron-fluid m-auto col-md-6">
        <div className="container">
          <h2>Contact me!</h2>
          <p className="lead">I'd love to hear from you.</p>
          <p className="lead">Shoot me a message!</p>
          <p className="lead"><a href="mailto:ravi.kolla@outlook.com">ravi.kolla@outlook.com</a></p>
          <a aria-label="Linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ravitejakolla/" className="fa fa-linkedin"><span className="sr-only">Linked In</span></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
