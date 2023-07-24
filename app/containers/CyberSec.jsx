import React from "react";

const CyberSec = () => {
  return (
    <div className="what section__padding">
      <div>
        <h1 className="about_title">What is Cyber Security</h1>
      </div>
      <div className="about__content">
        <div className="about__content__text">
          <p>
            Technologies, processes, and practices designed to protect networks,
            devices, programs, and data from attack, damage, or unauthorized
            access. The cyberattacks are usually aimed at accessing, changing,
            or destroying sensitive information; extorting money from users; or
            interrupting normal business processes.
          </p>
        </div>
        <div className="what__content__image">
          {/* <img src={what} alt="csc" /> */}
        </div>
      </div>
      <div>
        <h3>Why is Cyber Security Important?</h3>
        <p>
          Cybersecurity is important because it protects all categories of data
          from theft and damage. This includes sensitive data, personally
          identifiable information (PII), protected health information (PHI),
          personal information, intellectual property, data, and governmental
          and industry information systems.
        </p>
      </div>
    </div>
  );
};

export default CyberSec;
