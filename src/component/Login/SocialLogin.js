import React, { useState } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import MicrosoftIcon from 'mdi-react/MicrosoftIcon';
import GoogleIcon from 'mdi-react/GoogleIcon'
import EmoticonCoolIcon from 'mdi-react/EmoticonCoolIcon';


export default function useSocialLogin() {

    let icon = [
        { id: "Facebook", icon: <FacebookIcon /> },
        // { id: "InstagramIcon", icon: <InstagramIcon /> },
        // { id: "TwitterIcon", icon: <TwitterIcon /> },
        // { id: "MailIcon", icon: <MailIcon /> },
        // { id: "GitHubIcon", icon: <GitHubIcon /> },
        // { id: "LinkedInIcon", icon: <LinkedInIcon /> },
        { id: "Microsoft", icon: <MicrosoftIcon /> },
        { id: "Google" , icon: <GoogleIcon /> },
        { id: "Keycloak", icon: <EmoticonCoolIcon/>}
    ];

    //   const [socialMediaValue, setSocialMediaValue] = useState();

    const handleLoginClick = (id) => {
        switch (id) {
            case "FacebookIcon":
                return console.log(id);
            case "Instagram":
                return console.log(id);
            case "TwitterIcon":
                return console.log(id);
            case "MailIcon":
                return console.log(id);
            case "GitHubIcon":
                return console.log(id);
            case "LinkedInIcon":
                return console.log(id);
            default:
                return console.log(id);
        }
    };
    return { icon, handleLoginClick };
}
