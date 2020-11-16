import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_male-512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                                />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Patrick Rademacher</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typsetting industry. L</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>someone@example.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2008}
                            endYear={2013}
                            schoolName="Michigan State University"
                            schoolDescription="He ho you know I taught kids and what not" />
                        <Education
                            startYear={2008}
                            endYear={2013}
                            schoolName="Michigan State University"
                            schoolDescription="He ho you know I taught kids and what not" />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2018}
                            endYear="Currently Working"
                            jobName="Intern Teacher"
                            jobDescription="I taught lots of kids"
                        />
                        <Experience 
                            startYear={2013}
                            endYear={2014}
                            jobName="Intern Teacher"
                            jobDescription="I taught lots of kids"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills 
                            skill="javascript"
                            progress={100}
                        />
                         <Skills 
                            skill="eating broccoli"
                            progress={87}
                        />
                         <Skills 
                            skill="boofing 2cI"
                            progress={21}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;