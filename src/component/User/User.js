import React, { useContext } from 'react';
import classes from './User.module.css';
import { Link } from 'react-router-dom';
import AzureUser from '../../container/UserDetails/AzureUser'
import GoogleUser from '../../container/UserDetails/GoogleUser';
import FacebokUser from '../../container/UserDetails/FacebookUser';
import KeycloakUser from '../../container/UserDetails/KeycloakUser';
import UserCard from './UserCard/UserCard'
import ProgressBar from '../UI/ProgressBar/ProgressBar'


class User extends React.Component {

    state = {
        name: '',
        email: '',
        showProgress: false
    }

    componentDidMount() {
        this.setState({ showProgress: true })
        const token = window.localStorage.getItem('token');
        const provider = window.localStorage.getItem('provider');
        this.getUserDetails(token, provider);
    }


    getUserDetails = (token, provider) => {
        switch (provider) {
            case 'Microsoft':
                AzureUser(token).then(userDetails => this.updateUserDetails(userDetails)).catch(err => console.log(err));
                break;
            case 'Google':
                GoogleUser(token).then(userDetails => this.updateUserDetails(userDetails)).catch(err => console.log(err));
                break;
            case 'Facebook':
                FacebokUser(token).then(userDetails => this.updateUserDetails(userDetails)).catch(err => console.log(err));
                break;
            case 'Keycloak':
                KeycloakUser(token).then(userDetails => this.updateUserDetails(userDetails)).catch(err => console.log(err));
                break;
            default:
                break;
        }
    }
    updateUserDetails = (userDetails) => {
        this.setState({ name: userDetails.name, email: userDetails.email, showProgress: false });
    }

    render() {
        return (
            <div>
                <ProgressBar show={this.state.showProgress} />
                {!this.state.showProgress ? <UserCard
                    name={this.state.name}
                    email={this.state.email}
                    signOut={this.props.removeUser}
                ></UserCard> : null}

            </div>

        )
    }

}

export default User;