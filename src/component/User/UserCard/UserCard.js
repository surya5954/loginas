import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../../../assets/loggedInUser.png';

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '4px auto',
        marginTop: '25px',
        backgroundColor: 'aquamarine'
    },
    image: {
        margin: '0 auto',
        maxWidth: '200px',
        maxHeight: '200px'
    },
    actionBtn: {
        justifyContent: "center"
    }
});



export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.image}
                    component="img"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Hi {props.name},
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        You have suceessfully logged in with your email: <strong>{props.email}</strong>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actionBtn}>
                <Button size="small" color="primary" onClick={props.signOut}>
                    Sign out
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}
