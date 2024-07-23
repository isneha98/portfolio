import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Container ,Row ,Col,Image,Button} from 'react-bootstrap';
import AnimatedProgressBar  from './AnimatedProgressBar ';
import '../css/frontend/SliderComponent.css';
import { fontWeight } from '@mui/system';
import school from "../image/school.png";
import college from "../image/college.png";
import secondryschool from "../image/secondryschool.png";
import { useMediaQuery } from '@react-hook/media-query';

const SliderComponent = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767.98px)'); 
  const carouselItemStyle = {
    minHeight: '300px', 

  };
  
  return (
     <div className='slider_items'>
      <Carousel  style={{ width: '100%', height: '100%' }}>
      <Carousel.Item style={carouselItemStyle}>
       
       <div className='skills'>
         <Container className="my_skills" style={{ overflow:'hidden' }}>
           <h2>Skills</h2>
           <Row className='justify-content-center'>
             <Col xs={6} sm={6} md={3} lg={3}>
          
               <AnimatedProgressBar  animated now={45} skill="HTML" value={80} className="skill_name"/>
               <AnimatedProgressBar  skill="CSS" value={90} className="skill_name"/>
               <AnimatedProgressBar  skill="SASS" value={90} className="skill_name"/>
               <AnimatedProgressBar  skill="JAVASCRIPT" value={80} className="skill_name"/>
              
         
          
             </Col>
        
      
             <Col xs={6} sm={6} md={3} lg={3}>
             <AnimatedProgressBar  skill="AJAX" value={80} className="skill_name"/>
             <AnimatedProgressBar  skill="JQUERY" value={80} className="skill_name"/>
               <AnimatedProgressBar  skill="REACT" value={80} className="skill_name"/>
               <AnimatedProgressBar  skill="BOOTSTRAP" value={80} className="skill_name"/>
               
             </Col>
             
             <Col xs={6} sm={6} md={3} lg={3}>
              
             <AnimatedProgressBar  skill="MATERIAL" value={80} className="skill_name"/>
               <AnimatedProgressBar  skill="PHP" value={90} className="skill_name"/>
               <AnimatedProgressBar  skill="NODE JS" value={80} className="skill_name"/>
               <AnimatedProgressBar  skill="MY SQL" value={90} className="skill_name"/>
               
           
             </Col>
             <Col xs={6} sm={6} md={3} lg={3}>
             <AnimatedProgressBar  skill="MONGODB" value={80} className="skill_name"/>
               <AnimatedProgressBar  skill="GIT AND GITHUB" value={75} className="skill_name"/>
               <AnimatedProgressBar  skill="DOCKER" value={60} className="skill_name"/>
               <AnimatedProgressBar  skill="KUBERNETES" value={60} className="skill_name"/>
             </Col>
           </Row>
         </Container>
       </div>
       </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
        <div className='qualifications' >
           <h2>Work Experience</h2> 
          <Container >
            <Row className='justify-content-center'>
                      
              <Col xs={6} sm={6} md={5} lg={5}>
                <div className='first_company'>
                  <h3>Gritfusion IT Company</h3>
                  <p>Position:-Web Developer</p>
                  <p>Joining Date:-July 2019 - Oct 2020 </p>
                  <p>Description:-I have done many project like stock management system,garage management,portfolio websites,microfinance,  accounting system.</p>
            
                </div>
                </Col>
                <Col xs={6} sm={6} md={5} lg={5}>
                <div className='second_company'>
                  <h3>Ideal Web Infotech</h3>
                  <p>Position:-Web Developer</p>
                  <p>Joining Date:-December 2020</p>
                  <p>Description:-I have done many project like portfolio websites (school,dentist).</p>
              
                </div>
              </Col>      
            </Row>
   
          </Container>
          
          
        </div>
        </Carousel.Item>
      
        <Carousel.Item style={carouselItemStyle}>
          <div className='education'>
          <h2>Education</h2>   
          <Container >
            <Row className='justify-content-center'>
              <Col xs={4} sm={4} md={4} lg={4} className="justify-content-center"> 
                <div className='edu-exp-list'>
                  <div className='secondry_container'>
                   <img src={school} alt="secondry school" className='secondry_img justify-content-center'/>
                  </div>
                  
                  <h3>Secondry Education </h3>
                  <p>(2014 - 2016)</p>
                  <p>Care International School</p>
                </div>      
              </Col>
          
             <Col xs={4} sm={4} md={4} lg={4} className="justify-content-center"> 
                <div className='edu-exp-list'>
                  <img src={school} alt="school" className='school_img justify-content-center'/>
                  <h3>Senior Secondry Education </h3>
                  <p>(2014 - 2016)</p>
                  <p>Saint Bright Moon Sr. Sec. School</p>
                </div>      
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}> 
                <div className='edu-exp-list'>
                  <div className='college_container'>
                  <img src={college} alt="college" className='college_img justify-content-center'/>
                  </div>
                  <h3>Bachelor's Degree </h3>
                  <p>(2016 - 2019)</p>
                  <p>Kanoria PG Mahila Mahavidhyalaya</p>
                </div> 
              </Col>  
         
            </Row>
            </Container>
          </div>
          
        </Carousel.Item>
      </Carousel>

     </div>

  );
};
export default SliderComponent;

