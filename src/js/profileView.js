export function renderProfile(userData) {
  return `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
      <div class="profile-info">
        <h2 class="profile-name">${userData.name}</h2>
        <p class="profile-bio">${userData.bio || "Não possui bio cadastrada"}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4>👥Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👥Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>
  `;
}

