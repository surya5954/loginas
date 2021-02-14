const KeycloakUser = async (token) => {
    let userProvider;
    const res = await fetch(`http://localhost:4000?proxyBaseUrl=http://192.168.37.2/auth/realms/todo/protocol/openid-connect/userinfo`, {
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    const res_obj = await res.json();
    const me = JSON.parse(res_obj.body);
    console.log(me);
    if (me.sub) {
        userProvider = {
            name: me.name,
            email: me.email,

        }
    }
    return userProvider;

}


export default KeycloakUser;
