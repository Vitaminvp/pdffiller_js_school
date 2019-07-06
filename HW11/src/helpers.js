export const fetchRepo = repoName => {
  let url = `https://api.github.com/repos/${repoName}`; //https://api.github.com/repos/vitaminvp/CryptocurrencyProject
  return fetch(url).then(r => r.json());
};

export const fetchRepos = userName => {
  let url = `https://api.github.com/users/${userName}/repos?page=1&per_page=100`;

  return fetch(url).then(r => r.json());
};

export const convertToData = stringData => {
    const date = new Date(stringData);
    return new Intl.DateTimeFormat('en-GB').format(date);
};

export const CONSTANTS={
    SearchComponentState: "SearchComponentState",
    linksPerPage: 10
}