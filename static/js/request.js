window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    // console.log(fragment)
    const tokenType = fragment.get('token_type')
    const accessToken = fragment.get('access_token');
    

    if (!accessToken) {
        window.location.href = '/login'
    }


    fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    })
    .then(result => result.json())
    .then(response => {
        const { username, discriminator, avatar, id, email} = response;
        //set the welcome username string
        document.getElementById('name').innerText = ` ${username}#${discriminator}`;
        document.getElementById('username').value = ` ${username}#${discriminator}`;
        document.getElementById('D-ID').value = ` ${id}`;
        document.getElementById('email').value = ` ${email}`;

        document.getElementById('linkToUser').href = `https://discord.com/users/${id}`;

        //set the avatar image by constructing a url to access discord's cdn
        document.getElementById("avatar").src = `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`;
    })
    .catch(console.error);
};