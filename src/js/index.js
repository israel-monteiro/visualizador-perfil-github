import { fetchGitHubUser, fetchGitHubUserRepos } from "./githubApi.js";
import { renderProfile } from "./profileView.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

btnSearch.addEventListener("click", async () => {
  const userName = inputSearch.value.trim();

  if (userName) {
    try {
      profileResults.innerHTML = '<div class="loading">Carregando...</div>';

      const userData = await fetchGitHubUser(userName);
      const userRepos = await fetchGitHubUserRepos(userName);
      console.log(userData);
      console.log(userRepos);

      renderProfile(userData, userRepos, profileResults);

    } catch (error) {
      profileResults.innerHTML = "";
      console.log("Erro ao buscar o perfil do usuário: ", error);
      alert("Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.");
    }
  } else {
    alert("Por favor, digite o nome de usuário do GitHub.");
  }
});

