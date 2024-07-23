import React from 'react';
import '../css/frontend/About.css';
import { Container ,Row ,Col,Image,Button} from 'react-bootstrap';
import avatar from "../image/avatar.png";
import personal from "../image/personal.jpg";
import Card from './Card';
import SliderComponent from './SliderComponent';

const About = () => {
  return (
    <div>
      <section id="about" >
        <div className='about_section'>
          <div className="about-container">
            <div className='header_title'>
              <h2 className="about_title">About Me</h2>
            </div>
            <Row className="second_part">
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="image_container">
                  <img src={personal} alt="sneha" className='about_img'/>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="about_data">
                  <p>
                    <i>I am a skilled full-stack web developer with 2+ years of experience. 
                    I specialize in creating intuitive user interfaces and robust server-side architectures. 
                    With expertise in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React, as well as back-end technologies like Node.js and Php, I seamlessly integrate all layers of a web application. I thrive in collaborative environments and stay up-to-date with the latest industry trends.
                    </i><br />
                    <i>I have led the development of numerous client projects, taking charge of creating visually appealing and responsive user interfaces. By closely collaborating with designers and back-end developers, I ensured the smooth implementation of web solutions that met the clients' requirements.
                    A crucial part of my role involved conducting thorough testing and debugging to ensure that the web applications were compatible across different browsers and devices. This dedication to quality assurance helped deliver reliable and functional user experiences to end-users.
                    </i><br />
                    <i>I am excited about the opportunities that full-stack web development offers and the chance to leverage my expertise to create impactful applications.
                    Let's connect and discuss how I can contribute to your next web development project!"</i>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <SliderComponent />
        </div>
      </section>
    </div>
  )
}
export default About;






















































                  
