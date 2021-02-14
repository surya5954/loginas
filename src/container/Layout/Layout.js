import React, { Component } from 'react';
import Welcome from '../../component/Welcome/Welcome';
import classes from './Layout.module.css';
import AuthContext from '../../context/auth-context';
import AzureAuthUrl from '../AuthEndpointSetup/Azure';
import GoogleAuthUrl from '../AuthEndpointSetup/Google';
import FacebookAuthUrl from '../AuthEndpointSetup/Facebook';
import KeyclokaAuthUrl from '../AuthEndpointSetup/Keycloak';
import AzureToken from '../TokenEndpointSetup/AzureToken';
import FacebookToken from '../TokenEndpointSetup/FacebookToken';
import GoogleToken from '../TokenEndpointSetup/GoogleToken';
import KeycloakToken from '../TokenEndpointSetup/KeycloakToken';



class Layout extends Component {

    state = {
        isAuthenticated: false,
        enableProgressBar: false,
    }

    componentDidMount() {
        console.log(this.props);
        let code_url = /((\?|\&)code\=)[^\&]+/.exec(this.props.location.search);
        let state_provider = /((\?|\&)state\=)[^\&]+/.exec(this.props.location.search);
        if (code_url != null) {
            let code = decodeURIComponent(String(code_url[0]).replace(/(\?|\&)?code\=/, ''));
            let provider_obj = String(decodeURIComponent(state_provider[0])).replace(/(\?|\&)?state\=/, '');
            const provider = JSON.parse(provider_obj).provider;
            console.log(provider + "===> " + code);
            this.setState({ enableProgressBar: true })
            const token = window.localStorage.getItem('token');
            console.log(token);
            if (token == null) {
                this.getAccessTokenFromCode(provider, code);
            } else {
                this.props.history.push('/welcome/user');
            }

        }
    }

    updateAuthDetails = (token, provider) => {
        console.log(token);
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('provider', provider);
        this.props.history.push('/welcome/user');
        this.setState({ isAuthenticated: true });
    }

    getAccessTokenFromCode = (provider, code) => {
        console.log("Getting Access Token now for provider ==>" + provider);
        switch (provider) {
            case 'Microsoft':
                AzureToken(code).then(token => this.updateAuthDetails(token, provider)).catch(err => console.log(err));
                break;
            case 'Google':
                GoogleToken(code).then(token => this.updateAuthDetails(token, provider)).catch(err => console.log(err));
                break;
            case 'Facebook':
                FacebookToken(code).then(token => this.updateAuthDetails(token, provider)).catch(err => console.log(err));
                break;
            case 'Keycloak':
                KeycloakToken(code).then(token => this.updateAuthDetails(token, provider)).catch(err => console.log(err));
                break;
            default:
                break;
        }
    }
    
    removeUserDetails = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('provider');
        this.props.history.push("/");
    }

    getAuthUrl = (provider) => {
        switch (provider) {
            case 'Microsoft':
                window.location.href = AzureAuthUrl;
                break;
            case 'Google':
                window.location.href = GoogleAuthUrl;
                break;
            case 'Facebook':
                window.location.href = FacebookAuthUrl;
                break;
            case 'Keycloak':
                window.location.href = KeyclokaAuthUrl;
                break;
            default:
                break;
        }
    }


    render() {

        console.log(this.state.isAuthenticated);
        return (
            <Welcome
                progressBar={this.state.enableProgressBar}
                isAuthenticated={this.state.isAuthenticated}
                getAuthUrl={this.getAuthUrl}
                {...this.props}
            />

        )
    }
}

export default Layout;
