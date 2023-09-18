const axios = require('axios');

async function getGitHubProfile(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const user = response.data;

        console.log(user)

        // console.log("Nome:", user.name);
        // console.log("Localização:", user.location);
        // console.log("Bio:", user.bio);
        // console.log("Seguidores:", user.followers);
        // console.log("Seguindo:", user.following);
        // console.log("Repositórios públicos:", user.public_repos);

    } catch (error) {
        console.error("Erro ao buscar perfil:", error);
    }
}

getGitHubProfile("thomasjteixeira");
// https://api.github.com/users/thomasjteixeira