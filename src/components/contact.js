import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid" >
                    <Cell col={6}>
                        <h2>Patrick Rademacher</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt = "avatar"
                        style={{height: '250px'}} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Ipsum poopy doopy scoopy yeah! Ipsum poopy doopy scoopy yeah! Ipsum poopy doopy scoopy yeah! Ipsum poopy doopy scoopy yeah! Ipsum poopy doopy scoopy yeah!</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i class="fas fa-phone-alt" aria-hidden="true"/>
                                        (616) 826-3296
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className= "fa fa-envelope" aria-hidden="true"/>
                                        patrick.d.rad@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} />
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;