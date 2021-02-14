import queryString from 'query-string';

const FacebokUser = async (token) => {
    let userProvider;
    const fbUserUrl = queryString.stringifyUrl({
        url: `http://localhost:4000`,
        query: {
            fields: ['id', 'email', 'name'].join(','),
            access_token: token,
            proxyBaseUrl: `https://graph.facebook.com/me`
        }
    });

    const response = await fetch(fbUserUrl, {
        method: 'get'
    })
    const me = await response.json();
    const userDetails = JSON.parse(me.body);

    if (userDetails && userDetails.id) {
        userProvider = {
            email: userDetails.email,
            name: userDetails.name,
        }
    }

    return userProvider;

}

export default FacebokUser;