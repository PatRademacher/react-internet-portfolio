import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from './resume_picpic.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Picture } from 'react-responsive-picture';
import ReactRoundedImage from "react-rounded-image";
import backgroundVid from './backgroundVideo.mp4';
class LandingPage extends Component {
    render() {
        return(
            <div className="landing-grid">
            <video className='videoTag' autoPlay loop muted>
            <source src={backgroundVid} type='video/mp4' />
            </video>
                <div className="separator"></div>
                <Container className="containers">
                    <Row className="rows">
                        <Col className="columns" xs = "3" sm = "3" md = "3" lg = "3" xl = "3">
                        <div className="avatar-img" alt="avatar">
                        <ReactRoundedImage
                            image={pic}
                            roundedColor="green"
                            roundedSize="7"
                            imageWidth="220"
                            imageHeight="220"
                            />
                            
                            </div>
                        </Col>
                        <Col className="columns" xs = "9" sm = "7" md = "7" lg = "9" xl = "9">
                            <div className="separator" />
                            <div className="banner-text">
                                <h1>Patrick Rademacher: 
                                    <br></br>
                                    Full Stack Web Developer
                                </h1>  
                                <hr />
                                <p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</p>
                                <div className="social-links">

                            {/*Github */}
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github-square"></i>
                            </a>
                            {/*Linked In */}
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-square"  aria-hidden="true" />
                            </a>

                        </div>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
                        
                        
                        
                
                    </div>
                            

                       
                    
        )
    }
}

export default LandingPage;