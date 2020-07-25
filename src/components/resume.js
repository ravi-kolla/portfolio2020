import React from 'react';

function Resume() {
  return (
    <div class="container  text-light">
    <div class="container-fluid">
    <section class="resume-section d-flex justify-content-center" id="experience">
      <div class="w-100">
        <h2 class="mb-5">Experience</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="col-md-9">
            <h3 class="mb-0">Software Engineer</h3>
            <div class="subheading mb-0">Innovecture LLC</div>
            <div class="subheading mb-3">Client: American Express</div>
            <p>working on creating templates and components for Homepage application using Adobe Experience Manager which includes writing of Java classes, Sightly scripting, JavaScript scripting and jUnit test cases. Also, handles devops process.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">August 2019 - Present</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
          <div class="col-md-9">
            <h3 class="mb-0">UI Engineer</h3>
            <div class="subheading mb-0">Mindlease Inc</div>
            <div class="subheading mb-3">Client: American Express</div>
            <p>Worked on the American express Global Homepage application development and Infrastructure migration projects.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">September 2015 - August 2019</span>
          </div>
        </div>

      </div>

    </section>

    <hr class="m-0"></hr>
    <section class="resume-section d-flex align-items-center" id="education">
      <div class="w-100">
        <h2 class="mb-5">Education</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="col-md-9">
            <h3 class="mb-0">University of Missouri - Kansas City</h3>
            <div class="subheading mb-3">Master of Science</div>
            <div>Electrical & Computer Engineering</div>
            <p>GPA: 3.75</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">January 2014 - May 2015</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div class="col-md-9">
            <h3 class="mb-0">Jawaharlal Nehru Technological University Hyderabad</h3>
            <div class="subheading mb-3">Bachelor of Technology</div>
            <div>Electronics & Communication Engineering</div>
            <p>GPA: 3.33</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">August 2009 - May 2013</span>
          </div>
        </div>

      </div>
    </section>
    <hr class="m-0"></hr>
  </div>
  </div>
  );
}

export default Resume;
