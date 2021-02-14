import { KEYCLOAK_ID, KEYCLOAK_SECRET, REDIRECT_URI } from '../../config/env';
import queryString from 'query-string';
import { CODE_VERIFIER } from '../../config/PCKEConfigs';
import URL from 'url';

const KeycloakToken = async (code) => {
    let params = {
        client_id: KEYCLOAK_ID,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code_verifier: CODE_VERIFIER,
        state: JSON.stringify({ provider: 'Keycloak' }),
        proxyBaseUrl: `http://192.168.37.2/auth/realms/todo/protocol/openid-connect/token`
    }

    const post_data = queryString.stringify(params);
    let parsedUrl = URL.parse(`http://localhost:4000`, true);

    let realHeaders = {};
    realHeaders['Host'] = parsedUrl.host;
    realHeaders["Content-Length"] = post_data.length;
    realHeaders["Content-Type"] = 'application/x-www-form-urlencoded';


    const options = {
        host: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname,
        method: "POST",
        headers: realHeaders
    };

    const payload = Object.assign({
        body: post_data
    }, options);

    let response = await fetch(`http://localhost:4000`, payload)

    let res = await response.json();
    const token_object = JSON.parse(res.body);

    return token_object.access_token;

}


export default KeycloakToken;
