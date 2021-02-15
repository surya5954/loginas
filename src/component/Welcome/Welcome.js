import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import image from '../../assets/funny-programmer-status-update.jpg';
import Buttons from '../UI/Buttons/Buttons';
import Login from '../Login/Login'

import User from '../User/User'
import { Route } from 'react-router-dom';
import ProgressBar from '../UI/ProgressBar/ProgressBar'
import classes from './Welcome.module.css'



class Welcome extends React.Component {

    // console.log(props);
    // const token = window.localStorage.getItem('token');
    // // console.log(token);
    // if(token !== null) {
    // props.history.push('/welcome/user');
    state = {
        token: window.localStorage.getItem('token')
    }
    componentDidMount() {
        if (this.state.token != null)
            this.props.history.push('/welcome/user');
    }
    removeUserDetails = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('provider');
        this.props.history.push("/");
    }


    render() {
        return (
            <Grid container className={classes.Container}>
                <Grid item>
                    <Paper className={classes.Paper}>
                        <Grid container className={classes.FormCard}>
                            <Grid item className={classes.CardSides}>
                                <Paper className={classes.PaperHeader}>
                                    <Typography component="h2" variant="h5" color="initial" style={{ fontWeight: 400, position: 'relative', top: '5%' }}>
                                        Welocme to  LoginAs Portal
                                </Typography>
                                </Paper>

                                {this.props.progressBar ? <ProgressBar show={true} />
                                    :
                                    this.state.token !== null ?
                                        <Route path={this.props.match.url + '/user'} render={() => <User removeUser={this.removeUserDetails} />} />
                                        :
                                        <Paper className={classes.PaperCrad}>
                                            {/* <Buttons loginAs={this.props.getAuthUrl} /> */}
                                            <Login loginAs={this.props.getAuthUrl} />
                                        </Paper>
                                }

                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <img className={classes.Image} src={image} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Welcome;


