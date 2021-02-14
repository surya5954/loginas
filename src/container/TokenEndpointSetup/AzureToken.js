import { AZURE_ID, AZURE_TENANT_ID, REDIRECT_URI } from '../../config/env';
import queryString from 'query-string';
import { CODE_VERIFIER } from '../../config/PCKEConfigs';
import URL from 'url';

const AzureToken = async (code) => {
    console.log("Getting token for Azure provider ===>");
    let params = {
        client_id: AZURE_ID,
        // client_secret: config.secret,
        code: code,
        grant_type: ['authorization_code'],
        redirect_uri: REDIRECT_URI,
        code_verifier: CODE_VERIFIER,
        state: JSON.stringify({ provider: 'Microsoft' }),
    }

    const post_data = queryString.stringify(params);
    let parsedUrl = URL.parse(`https://login.microsoftonline.com/${AZURE_TENANT_ID}/oauth2/v2.0/token`, true);

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

    let response = await fetch(`https://login.microsoftonline.com/${AZURE_TENANT_ID}/oauth2/v2.0/token`, payload)

    let token_object = await response.json();

    return token_object.access_token;

}


export default AzureToken;
