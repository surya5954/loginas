import { KEYCLOAK_ID, KEYCLOAK_SECRET, REDIRECT_URI } from '../../config/env';
import queryString from 'query-string';
import { CODE_CHALLENGE_METHOD, CODE_CHALLENGE } from '../../config/PCKEConfigs'


const Keycloak = () => {
    return queryString.stringifyUrl({
        url: `http://192.168.37.2/auth/realms/todo/protocol/openid-connect/auth`,
        query: {
            client_id: KEYCLOAK_ID,
            redirect_uri: REDIRECT_URI,
            response_type: 'code',
            scope: [
                'openid',
                'profile',
            ].join(" "),
            state: JSON.stringify({ provider: 'Keycloak' }),
            code_challenge: CODE_CHALLENGE,
            code_challenge_method: CODE_CHALLENGE_METHOD
        }
    });
}

export default  Keycloak();