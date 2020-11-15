import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


class Projects extends Component {
    
    constructor(props){
        super(props);
        this.state = { value: 0, topRow: "primary", bottomRow: "none"};
    }

    handleChange = (event, newValue) => {
       this.setState({value: newValue});
       this.setState({topRow: "primary", bottomRow: "none"});

      }

    handleChangeAgain = (event, newValue) => {
        this.setState({value: newValue});
        this.setState({bottomRow: "primary", topRow: "none"});
    }
    


    toggleCategories(){
        console.log('value: ' + this.state.value);
        if (this.state.value === 0 && this.state.topRow === "primary"){
            return(
                <div className = "projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText></CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>                       
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText></CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>                       
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText></CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>                       
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.value === 1){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>Angular Project #1</CardTitle>
                    <CardText></CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>                       
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }

        else if(this.state.value === 2){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>VueJS Project #1</CardTitle>
                <CardText></CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>                       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            )
        }

        else if(this.state.value === 0 && this.state.bottomRow === "primary"){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>MongoDB Project #1</CardTitle>
                    <CardText></CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>                       
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
    }
    


    render() {
        return(
            
            <div>
                <Tabs variant="fullWidth" indicatorColor={this.state.topRow} value={this.state.value} onChange={this.handleChange} ripple>
                    <Tab label="Artificial Intelligence and Machine Learning" index={0}></Tab>
                    <Tab label="Algorithms and Theory of Computation" index={1}></Tab>
                    <Tab label="Databases" index={2}></Tab>
                </Tabs>
                
                <Tabs variant="fullWidth" indicatorColor={this.state.bottomRow} value={this.state.value} onChange={this.handleChangeAgain} ripple>
                    <Tab label="Internetworking Protocols and Web Development" index={3}></Tab>
                    <Tab label="Music and Digital Signal Processing" index={4}></Tab>
                    <Tab label="Software Engineering and Programming" index={5}></Tab>
                </Tabs>

                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}



export default Projects;
