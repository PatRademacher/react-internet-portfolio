import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from './resume_picpic.png';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={2}>
                        <img
                            src={pic}
                            alt="avatar"
                            className="avatar-img"
                        />
                    </Cell>

                    <Cell col={10}>

                        <div className="banner-text">
                            <h1>Patrick Rademacher: 
                                <br></br>
                                Full Stack Web Developer
                            </h1>  
                            <hr />
                            <p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</p>
                        </div>
                        
                        
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
                    </Cell>
                </Grid>
                    </div>
                            

                       
                    
        )
    }
}

export default LandingPage;