import { GOOGLE_ID, REDIRECT_URI } from '../../config/env';
import queryString from 'query-string';


const Google = () => {
    return queryString.stringifyUrl({
        url: `https://accounts.google.com/o/oauth2/v2/auth`,
        query: {
            client_id: GOOGLE_ID,
            redirect_uri: REDIRECT_URI,
            response_type: 'code',
            access_type: 'offline',
            prompt: 'consent',
            scope: [
                'https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile',
            ].join(" "),
            state: JSON.stringify({ provider: 'Google' })
        }
    });
}

export default Google();