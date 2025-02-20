import React from 'react';
import '../css/ResumePage.css';
import pdfFile from '../assets/resume.pdf';

const ResumePage = () => {
  return (
    <div className="resume-page-container">
      <div className="left-section">
        <h1 className="resume-title">Resume</h1>
        <p className="resume-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>

      <div className="right-section">
        <object data={pdfFile} type="application/pdf" width="100%" height="700px">
          <p>Your browser does not support PDFs. <a href={pdfFile}>Download the PDF</a>.</p>
        </object>
      </div>
    </div>
  );
};

export default ResumePage;
