import React from 'react'
import { Container ,Row ,Col,Image,Button} from 'react-bootstrap';
import '../css/frontend/Banner.css';
import intro1 from "../image/intro1.png";

const Banner = () => {
  return (
    <div>
      <div className="header-container">
        <div className='container-wrapper'>
         <Container>
            <Row className="roww">
              <Col xs={12} sm={12} md={6} lg={6}> 
                <div className="text-section">
                  <h2 className="slide-in-heading">Hello I'm Sneha pareek</h2>
                  <h3 className="slide-in-heading">Working As A Web Developer</h3>
                  <p>Passionate web developer with 2+ years of experience creating visually appealing and user-friendly websites. 
                    Skilled in front-end and back-end development, using technologies such as HTML, CSS, JavaScript, and frameworks like Bootstrap and React. 
                    Experienced in collaborating with designers, project managers, and clients to deliver modern, responsive, and high-performance websites.
                  </p>
                  <div className='text-section-btn'>
                    <Button variant="primary" className='learn-more'>Learn More</Button>
                    <Button variant="info"  className="hire-me">Hire Me</Button>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}> 
                {/* <Container className="img-container"> */}
                  <div className="img-section">
                    <Image src={intro1}  className="intro-image" />
                  </div>
                {/* </Container> */}
              </Col>
            </Row>
         </Container>
        </div>
      </div>
    </div>
  )
}
export default Banner;
               

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container ,Row ,Col,Image,Button} from 'react-bootstrap';
// import '../css/frontend/Banner.css';
// import intro1 from "../image/intro1.png";

// const Banner = () => {
//   const [bannerData, setBannerData] = useState({
//     heading: '',
//     subheading: '',
//     paragraph: '',
//     imageUrl: '',
//   });

//   useEffect(() => {
//     fetchBannerData();
//   }, []);

//   const fetchBannerData = async () => {
//     try {
//       const response = await axios.get('/api/banner'); // Adjust the API endpoint
//       setBannerData(response.data);
//     } catch (error) {
//       console.error('Error fetching banner data:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="header-container">
//         <div className='container-wrapper'>
//          <Container>
//             <Row className="roww">
//               <Col xs={12} sm={12} md={6} lg={6}> 
//                 <div className="text-section">
//                   <h2 className="slide-in-heading">{bannerData.heading}</h2>
//                   <h3 className="slide-in-heading">{bannerData.subheading}</h3>
//                   <p>{bannerData.paragraph}
//                   </p>
//                   <div className='text-section-btn'>
//                     <Button variant="primary" className='learn-more'>Learn More</Button>
//                     <Button variant="info"  className="hire-me">Hire Me</Button>
//                   </div>
//                 </div>
//               </Col>
//               <Col xs={12} sm={12} md={6} lg={6}> 
//                 {/* <Container className="img-container"> */}
//                   <div className="img-section">
//                   <Image src={bannerData.imageUrl} className="intro-image" />
//                   </div>
//                 {/* </Container> */}
//               </Col>
//             </Row>
//          </Container>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Banner;
               



