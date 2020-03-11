

export const GetRepoDetails = () => {
    const SEARCH_URL = `https://api.github.com/users/sowmya1408/repos`
   return fetch(SEARCH_URL).then(res => res.json())
}