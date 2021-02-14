const GoogleUser = async (token) => {

    let userProvider;
    const res = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo`, {
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    const me = await res.json();
    console.log(me);
    if (me.id) {
        userProvider = {
            name: me.name,
            email: me.email,

        }
    }

    return userProvider;
}


export default GoogleUser;
