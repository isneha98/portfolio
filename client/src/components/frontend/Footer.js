import React from 'react';
import '../css/frontend/Footer.css';
import { Container ,Row ,Col,Image,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram,faLinkedin  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
  
    <footer id="footer" className="footer">
		<Container>
			<Row>	
				<div className="footer-top clearfix">
				<Col xs={12} sm={12} md={12} lg={12}>
					
					<p className="text-center copyright">© 2021 <a href="javascript:void(0);" className="footer-site-link">snehapareek.</a> All rights reserved. </p>
          <div className="text-center social-media-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook}  className="social"/>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social"/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social"/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social"/>
            </a>
          </div>
          
				</Col>
        </div>
				</Row>
       
			</Container>

		
	</footer>
  );
}

export default Footer;