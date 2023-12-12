const form = document.getElementById('githubForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const apiUrl = `https://api.github.com/users/${username}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(userData => {
      console.log(JSON.stringify(userData,null,2));
      const userHtml = `
        <h2>${userData.name}</h2>
        <p>Username: ${userData.login}</p>
        <p>Location: ${userData.location || 'Not available'}</p>
        <p>Public Repositories: ${userData.public_repos}</p>
        <p>Followers: ${userData.followers}</p>
        <p>Profile: <a href="${userData.html_url}" target="_blank">${userData.html_url}</a></p>
      `;
      resultDiv.innerHTML = userHtml;
    })
    .catch(error => {
      resultDiv.textContent = `Error: ${error.message}`;
    });
});
