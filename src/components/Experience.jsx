import React from 'react';
import experience from '../data/experience.jsx';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import '../css/Experience.css';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container className="experience-container container-title-design">
      <Row className='title-row'>
        <Col className="title-heading text-center">
          <h1 className="heading">Experience</h1>
          <p className="underline"></p>
        </Col>
      </Row>
      <Row className="experience-section">
        <div className="timeline-wrapper">
          <VerticalTimeline>
            {experience.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                date={`${item.startDate} - ${item.endDate}`}
                iconStyle={{ background: '#007bff', color: '#fff' }}
                icon={<FaBriefcase />}
                contentClassName="vertical-timeline-element-content"
                contentArrowStyle={{ borderRight: '7px solid #f4f4f4' }}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                {/* {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="timeline-image"
                  />
                )} */}
                <p className="timeline-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Row>
    </Container>
  );
};

export default Experience;