import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from './Button/Button';
import AuthContext from '../../../context/auth-context'


const useStyles = makeStyles((theme) => ({
    card: {
        flexFlow: 'column wrap',
        alignContent: 'center',
        alignItems: 'safe',
        justifyContent: "space-evenly",
        ['@media (max-width:700px)']: {
            flexFlow: "column wrap",
        },
    },
    btnGrid: {
        margin: '1px',
        flexBasis: '3',
        flex: "1 4",
        maxWidth: 400,
        ['@media (min-width:700px)']: {
            minWidth: 300
        }
    },
}));

const Buttons = (props) => {

    const loginOptions = [
        {
            provider: 'Microsoft',
            Title: 'Login As Microsoft User',
            icon: ""
        },
        {
            provider: 'Google',
            Title: 'Login As Google User',
            icon: ""
        },
        {
            provider: 'Facebook',
            Title: 'Login As Facebook User',
            icon: <FacebookIcon />
        },
        {
            provider: 'Keycloak',
            Title: 'Login As Keycloak User',
            icon: ""
        }
    ]

    const classes = useStyles();

    return (
        <Grid container className={classes.card}>
            {loginOptions.map((item) => (
                <Grid items xs={12} sm={8} md={5} className={classes.btnGrid} key={item.Title}>

                    <Button
                        icon={item.icon}
                        title={item.Title}
                        clicked={() => props.loginAs(item.provider)}
                    ></Button>
                </Grid>
            ))}
        </Grid>
    )
}

export default Buttons;
