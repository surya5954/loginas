import React from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Controls } from "../controls/controls";
import useSocialLogin from './SocialLogin';
import Button from '@material-ui/core/Button'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {" © "}
            {new Date().getFullYear()}{" "}
            <Link color="inherit" href="#">
                {"maidIN v1.0"}
            </Link>{" "}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "80vh",
        width: "150vh",
    },
    image: {
        backgroundImage: "url(https://source.unsplash.com/1600x900/?cook)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        // margin: theme.spacing(5, 2),
        margin: "10px 70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    BtnsContainer: {
        flexFlow: 'row wrap',
        justifyContent: "space-between"
    },
    SocialBtns: {
        minWidth: 200,
        margin: 10,
        padding: '0px 15px !important'
    }
}));


export default function LogInForm(props) {
    const classes = useStyles();
    const { icon, handleLoginClick } = useSocialLogin("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('-------------submitted')
        // validateLogin(email, password).then((data) => console.log(data));
        window.alert('hi')
    };

    return (
        <>

            <div className={classes.paper}>
                {/* <HeaderNlogo /> */}

                <Controls.Form onSubmit={(e) => handleSubmit(e)} >
                    <Controls.Input
                        type="email"
                        name="email"
                        margin="normal"
                        label="Email"
                        autoComplete="email"
                        autoFocus={true}
                    />
                    <Controls.Input
                        type="password"
                        name="password"
                        margin="normal"
                        label="Password"
                        autoComplete="password"
                    />

                    <Controls.Button label="SIGN IN" type="submit" fullWidth />

                    <Grid container display={"flex"}>
                        <Grid item xs>
                            <Divider variant="middle" style={{ marginTop: "15px" }} />
                        </Grid>
                        <Typography style={{ marginTop: "5px" }}>Or Login With</Typography>
                        <Grid item xs>
                            <Divider variant="middle" style={{ marginTop: "15px" }} />
                        </Grid>
                    </Grid>


                    {/* </form> */}
                </Controls.Form>
            </div>
            <Grid container className={classes.BtnsContainer}>
                {icon.map((m, index) => (
                    <Grid item xs={12} sm={6}>
                        <Button variant="outlined" color="secondary" className={classes.SocialBtns} onClick={() => props.loginAs(m.id)}>
                            <IconButton
                                aria-label="icon"
                                key={m.id}
                                onClick={() => handleLoginClick(m.id)}
                            >
                                {m.icon}
                            </IconButton>
                           {m.id}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
