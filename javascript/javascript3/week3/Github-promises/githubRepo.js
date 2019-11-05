const mamathaUrl = 'https://api.github.com/search/repositories?q=user:mamathamereddy';
const cecaUrl = 'https://api.github.com/search/repositories?q=user:cecastosic';
const miroUrl = 'https://api.github.com/search/repositories?q=user:MirSzabo';

function fetchJsonUrl(url) {
	return fetch(url).then(response => response.json());
}

Promise.all([fetchJsonUrl(mamathaUrl), fetchJsonUrl(cecaUrl), fetchJsonUrl(miroUrl)])
	.then(data => {
		return getGithubUserRepoDetails(data);
	})
	.catch(err => console.log(err));

function getGithubUserRepoDetails(users) {
	const mainUl = document.querySelector('.mainUl');
	users.forEach(user => {
        const userList = document.createElement('li');
        mainUl.appendChild(userList);
        const userName = (user.items[0].owner.login).charAt(0).toUpperCase() + (user.items[0].owner.login).slice(1);
		userList.textContent = `${userName}'s repositories`;
		const userUl = document.createElement('ul');
		userList.appendChild(userUl);
		user.items.forEach(item => {
			const repoList = document.createElement('li');
			userUl.appendChild(repoList);
			repoList.textContent = `${item.name}: ${item.html_url}`;
		});
	});
}
