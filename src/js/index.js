import { fetchUser } from "./githubApi.js";
import { renderProfile } from "./profileView.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

btnSearch.addEventListener("click", async () => {
  const userName = inputSearch.value.trim();

  if (userName) {
    try {
      profileResults.innerHTML = '<div class="loading">Carregando...</div>';

      const userData = await fetchUser(userName);
      console.log(userData);

      profileResults.innerHTML = renderProfile(userData);
    } catch (error) {
      profileResults.innerHTML = "";
      console.log("Erro ao buscar o perfil do usuário: ", error);
      alert("Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.");
    }
  } else {
    alert("Por favor, digite o nome de usuário do GitHub.");
  }
});

