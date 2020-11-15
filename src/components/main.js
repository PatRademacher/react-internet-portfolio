import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route path="/react-internet-portfolio" component ={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;