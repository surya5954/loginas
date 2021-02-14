import { AZURE_ID, AZURE_TENANT_ID, REDIRECT_URI } from '../../config/env';
import queryString from 'query-string';
import { CODE_CHALLENGE_METHOD, CODE_CHALLENGE } from '../../config/PCKEConfigs'


const Azure = () => {
    return queryString.stringifyUrl({
        url: `https://login.microsoftonline.com/${AZURE_TENANT_ID}/oauth2/v2.0/authorize`,
        query: {
            client_id: AZURE_ID,
            redirect_uri: REDIRECT_URI,
            response_type: 'code',
            response_mode: 'query',
            scope: [
                'openid',
                'offline_access',
                'mail.read'
                // 'email',
                // 'profile',
                // 'user.read',
                // 'mailboxsettings.read',
                // 'calendars.readwrite'
            ].join(" "),
            state: JSON.stringify({ provider: 'Microsoft' }),
            code_challenge: CODE_CHALLENGE,
            code_challenge_method: CODE_CHALLENGE_METHOD
        }
    });
}

export default  Azure();