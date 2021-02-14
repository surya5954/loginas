import crypto from 'crypto'

// Some random 64 bit long string
// export const CODE_VERIFIER = 'AdleUo9ZVcn0J7HkXOdzeqN6pWrW36K3JgVRwMW8BBQazEPV3kFnHyWIZi2jt9gA';
export const CODE_VERIFIER = 'c3cxd2UzNHJmZGUzNHJneWh1NzhpazFxd2U0cmZkZXI1Nnl1N3lnZnJ0NmpraW85NHJkc3dlcg';
export const CODE_CHALLENGE_METHOD = 'S256';

const base64URLEncode = (str) => {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

const getCodeChallange = (verifier) => {
    return base64URLEncode(crypto.createHash('sha256').update(verifier).digest());
}


export const CODE_CHALLENGE = getCodeChallange(CODE_VERIFIER);


