import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import classes from './Button.module.css'

const button = (props) => {
    return (
        <Button variant="contained" className={classes.LoginBtn}
            onClick={props.clicked}
        >
            <IconButton aria-label="icon">
                {props.icon != "" ? props.icon : <EmojiEmotionsIcon />}
            </IconButton>
            {props.title}
        </Button>
    )
}


export default button;
