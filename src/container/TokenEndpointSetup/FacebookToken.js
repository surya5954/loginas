import { FACEBOOK_ID, FACEBOOK_SECRET, REDIRECT_URI } from '../../config/env';
import queryString from 'query-string';


const FacebookToken = async (code) => {
    const fbTokenUrl = queryString.stringifyUrl({
        url: `http://localhost:4000`,
        query: {
            client_id: FACEBOOK_ID,
            client_secret: FACEBOOK_SECRET,
            redirect_uri: REDIRECT_URI,
            state: JSON.stringify({ provider: 'Facebook' }),
            scope: 'email',
            code: code,
            proxyBaseUrl: `https://graph.facebook.com/v9.0/oauth/access_token`
        }
    });

    const res = await fetch(fbTokenUrl, {
        method: 'get'
    });

    const resp = await res.json();
    const access = JSON.parse(resp.body);
    return access.access_token
}

export default FacebookToken;