const AzureUser = async (token) => {
    let userProvider;
    const res = await fetch(`https://graph.microsoft.com/v1.0/me`, {
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    const me = await res.json();

    if (me.id) {
        userProvider = {
            name: me.displayName,
            email: me.mail,

        }
    }
    console.log(userProvider);
    return userProvider;
}


export default AzureUser;
